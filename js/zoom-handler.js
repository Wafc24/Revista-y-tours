/**
 * Gestor de Zoom y Desplazamiento (Pan & Zoom)
 * Controla el escalado, arrastre interactivo y bloqueo de volteo durante la inspección.
 */
class ZoomHandler {
  constructor(viewportEl, targetEl, options = {}) {
    this.viewportEl = viewportEl;
    this.targetEl = targetEl;

    this.options = Object.assign(
      {
        minScale: 1.0,
        maxScale: 3.5,
        step: 0.25,
        doubleClickScale: 2.0,
        onZoomChange: null, // Callback (scale, isZoomed)
      },
      options
    );

    this.scale = 1.0;
    this.panX = 0;
    this.panY = 0;

    this.isDragging = false;
    this.startX = 0;
    this.startY = 0;
    this.initialPanX = 0;
    this.initialPanY = 0;

    // Control para pinch-to-zoom táctil
    this.touchDistanceStart = 0;
    this.touchScaleStart = 1.0;

    this.initEvents();
  }

  initEvents() {
    // 1. Zoom con Rueda del ratón (centrado hacia el cursor)
    this.viewportEl.addEventListener(
      "wheel",
      (e) => {
        // Permitir zoom si no se están usando modificadores o al girar sobre el libro
        e.preventDefault();

        const zoomFactor = e.deltaY < 0 ? 1 + this.options.step : 1 - this.options.step;
        const newScale = Math.min(
          this.options.maxScale,
          Math.max(this.options.minScale, this.scale * zoomFactor)
        );

        if (newScale !== this.scale) {
          // Calcular zoom hacia la posición del cursor
          const rect = this.viewportEl.getBoundingClientRect();
          const mouseX = e.clientX - rect.left - rect.width / 2;
          const mouseY = e.clientY - rect.top - rect.height / 2;

          const ratio = 1 - newScale / this.scale;
          this.panX += (mouseX - this.panX) * ratio;
          this.panY += (mouseY - this.panY) * ratio;

          this.setScale(newScale);
        }
      },
      { passive: false }
    );

    // 2. Arrastre / Pan con ratón cuando hay zoom
    this.viewportEl.addEventListener("mousedown", (e) => {
      if (this.scale <= 1.05) return; // Si no hay zoom, dejar que StPageFlip maneje el click/arrastre de hoja
      if (e.button !== 0) return; // Solo botón principal

      this.isDragging = true;
      this.startX = e.clientX;
      this.startY = e.clientY;
      this.initialPanX = this.panX;
      this.initialPanY = this.panY;

      this.viewportEl.classList.add("is-dragging");
      e.stopPropagation();
    });

    window.addEventListener("mousemove", (e) => {
      if (!this.isDragging) return;

      const dx = e.clientX - this.startX;
      const dy = e.clientY - this.startY;

      this.panX = this.initialPanX + dx;
      this.panY = this.initialPanY + dy;

      this.applyTransform();
    });

    window.addEventListener("mouseup", () => {
      if (this.isDragging) {
        this.isDragging = false;
        this.viewportEl.classList.remove("is-dragging");
        this.clampBounds();
      }
    });

    // 3. Doble clic para acercar o restablecer
    this.viewportEl.addEventListener("dblclick", (e) => {
      e.preventDefault();
      e.stopPropagation();

      if (this.scale > 1.05) {
        this.reset();
      } else {
        const rect = this.viewportEl.getBoundingClientRect();
        const clickX = e.clientX - rect.left - rect.width / 2;
        const clickY = e.clientY - rect.top - rect.height / 2;

        const targetScale = this.options.doubleClickScale;
        this.panX = -clickX * (targetScale - 1);
        this.panY = -clickY * (targetScale - 1);

        this.setScale(targetScale);
      }
    });

    // 4. Soporte táctil (Pinch to Zoom & Touch Pan)
    this.viewportEl.addEventListener(
      "touchstart",
      (e) => {
        if (e.touches.length === 2) {
          // Pinch start
          this.touchDistanceStart = Math.hypot(
            e.touches[0].clientX - e.touches[1].clientX,
            e.touches[0].clientY - e.touches[1].clientY
          );
          this.touchScaleStart = this.scale;
        } else if (e.touches.length === 1 && this.scale > 1.05) {
          // Touch pan start
          this.isDragging = true;
          this.startX = e.touches[0].clientX;
          this.startY = e.touches[0].clientY;
          this.initialPanX = this.panX;
          this.initialPanY = this.panY;
        }
      },
      { passive: true }
    );

    this.viewportEl.addEventListener(
      "touchmove",
      (e) => {
        if (e.touches.length === 2 && this.touchDistanceStart > 0) {
          e.preventDefault();
          const dist = Math.hypot(
            e.touches[0].clientX - e.touches[1].clientX,
            e.touches[0].clientY - e.touches[1].clientY
          );
          const factor = dist / this.touchDistanceStart;
          const newScale = Math.min(
            this.options.maxScale,
            Math.max(this.options.minScale, this.touchScaleStart * factor)
          );
          this.setScale(newScale);
        } else if (e.touches.length === 1 && this.isDragging) {
          e.preventDefault();
          const dx = e.touches[0].clientX - this.startX;
          const dy = e.touches[0].clientY - this.startY;
          this.panX = this.initialPanX + dx;
          this.panY = this.initialPanY + dy;
          this.applyTransform();
        }
      },
      { passive: false }
    );

    this.viewportEl.addEventListener("touchend", () => {
      this.isDragging = false;
      this.touchDistanceStart = 0;
      this.clampBounds();
    });
  }

  setScale(newScale) {
    this.scale = Math.min(this.options.maxScale, Math.max(this.options.minScale, newScale));

    if (this.scale <= 1.05) {
      this.scale = 1.0;
      this.panX = 0;
      this.panY = 0;
      this.viewportEl.classList.remove("is-zoomed");
    } else {
      this.viewportEl.classList.add("is-zoomed");
      this.clampBounds();
    }

    this.applyTransform();

    if (typeof this.options.onZoomChange === "function") {
      this.options.onZoomChange(this.scale, this.isZoomed());
    }
  }

  clampBounds() {
    if (this.scale <= 1.0) {
      this.panX = 0;
      this.panY = 0;
      return;
    }

    const rect = this.targetEl.getBoundingClientRect();
    const vRect = this.viewportEl.getBoundingClientRect();

    const maxPanX = Math.max(0, (rect.width * this.scale - vRect.width) / 2 + 100);
    const maxPanY = Math.max(0, (rect.height * this.scale - vRect.height) / 2 + 100);

    this.panX = Math.min(maxPanX, Math.max(-maxPanX, this.panX));
    this.panY = Math.min(maxPanY, Math.max(-maxPanY, this.panY));

    this.applyTransform();
  }

  applyTransform() {
    // Usar translate3d para aceleración por GPU por hardware
    this.targetEl.style.transform = `translate3d(${this.panX.toFixed(2)}px, ${this.panY.toFixed(2)}px, 0) scale(${this.scale.toFixed(3)})`;
  }

  zoomIn() {
    this.setScale(this.scale + this.options.step);
  }

  zoomOut() {
    this.setScale(this.scale - this.options.step);
  }

  reset() {
    this.scale = 1.0;
    this.panX = 0;
    this.panY = 0;
    this.viewportEl.classList.remove("is-zoomed", "is-dragging");
    this.applyTransform();

    if (typeof this.options.onZoomChange === "function") {
      this.options.onZoomChange(1.0, false);
    }
  }

  isZoomed() {
    return this.scale > 1.05;
  }

  getScale() {
    return this.scale;
  }
}

// Exportar globalmente
window.ZoomHandler = ZoomHandler;
