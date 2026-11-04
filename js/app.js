/**
 * Controlador Principal de la Plataforma Ecosistema Misión Saber
 * =============================================================
 * Unifica en una sola aplicación interactiva 100% offline:
 * 1. Centro de Control (Hub / Dashboard de Navegación)
 * 2. Visor de Revista Digital en 3D (St.PageFlip multi-libro)
 * 3. Tours Guiados Pedagógicos (3° Matemáticas - Fases y 11° Física - Pasos)
 * 4. Catálogo de Efectos de Sonido de Hoja personalizable
 */

document.addEventListener("DOMContentLoaded", async () => {
  // -------------------------------------------------------------------------
  // REFERENCIAS DOM GENERALES
  // -------------------------------------------------------------------------
  const viewHub = document.getElementById("view-hub");
  const viewFlipbook = document.getElementById("view-flipbook");
  const viewTour = document.getElementById("view-tour");

  const btnHubLauncher = document.getElementById("btn-hub-launcher");
  const segBtnFlipbook = document.getElementById("seg-btn-flipbook");
  const segBtnTour = document.getElementById("seg-btn-tour");

  const libraryContainer = document.getElementById("library-container");
  const btnLibrary = document.getElementById("btn-library");
  const libraryMenu = document.getElementById("library-menu");
  const booksGrid = document.getElementById("books-grid");
  const bookTitleEl = document.getElementById("book-title");
  const bookBadgeEl = document.getElementById("book-badge");

  const tourDropdownContainer = document.getElementById("tour-dropdown-container");
  const btnTourSelector = document.getElementById("btn-tour-selector");
  const tourMenu = document.getElementById("tour-menu");
  const toursMenuGrid = document.getElementById("tours-menu-grid");
  const activeTourIcon = document.getElementById("active-tour-icon");
  const activeTourTitle = document.getElementById("active-tour-title");
  const activeTourBadge = document.getElementById("active-tour-badge");

  const toastEl = document.getElementById("toast-notification");
  const loadingScreenEl = document.getElementById("loading-screen");
  const emptyStateEl = document.getElementById("empty-state");

  // Elementos de Sonido
  const soundContainer = document.getElementById("sound-container");
  const btnSound = document.getElementById("btn-sound");
  const soundMenu = document.getElementById("sound-menu");
  const soundOptionsList = document.getElementById("sound-options-list");
  const btnSoundMute = document.getElementById("btn-sound-mute");
  const soundVolumeSlider = document.getElementById("sound-volume-slider");
  const soundVolumeValue = document.getElementById("sound-volume-value");
  const soundIconOn = document.getElementById("sound-icon-on");
  const soundIconOff = document.getElementById("sound-icon-off");

  // Modal Help
  const btnHelp = document.getElementById("btn-help");
  const modalHelp = document.getElementById("modal-help");
  const modalClose = document.getElementById("modal-close");
  const btnFullscreen = document.getElementById("btn-fullscreen");

  // Elementos Flipbook
  const viewportAreaEl = document.getElementById("viewport-area");
  const zoomViewportEl = document.getElementById("zoom-viewport");
  const centeringWrapperEl = document.getElementById("book-centering-wrapper");
  const btnPrev = document.getElementById("btn-prev");
  const btnNext = document.getElementById("btn-next");
  const btnArrowPrev = document.getElementById("btn-arrow-prev");
  const btnArrowNext = document.getElementById("btn-arrow-next");
  const btnFirst = document.getElementById("btn-first");
  const btnLast = document.getElementById("btn-last");
  const pageInput = document.getElementById("page-input");
  const totalPagesEl = document.getElementById("total-pages");
  const pageSlider = document.getElementById("page-slider");
  const btnZoomIn = document.getElementById("btn-zoom-in");
  const btnZoomOut = document.getElementById("btn-zoom-out");
  const btnZoomReset = document.getElementById("btn-zoom-reset");
  const zoomBadge = document.getElementById("zoom-badge");
  const zoomIndicator = document.getElementById("zoom-mode-indicator");
  const flipbookTourSuggestion = document.getElementById("flipbook-tour-suggestion");
  const suggestionIcon = document.getElementById("suggestion-icon");
  const suggestionText = document.getElementById("suggestion-text");

  // Elementos Tour
  const tourSubjectIcon = document.getElementById("tour-subject-icon");
  const tourDisplayTitle = document.getElementById("tour-display-title");
  const tourDisplaySub = document.getElementById("tour-display-sub");
  const tourStepsNav = document.getElementById("tour-steps-nav");
  const tourSubtabsNav = document.getElementById("tour-subtabs-nav");
  const tourZoomWrapper = document.getElementById("tour-zoom-wrapper");
  const tourPageImg = document.getElementById("tour-page-img");
  const tourHotspotsLayer = document.getElementById("tour-hotspots-layer");
  const tourZoomStatus = document.getElementById("tour-zoom-status");
  const btnTourZoomReset = document.getElementById("btn-tour-zoom-reset");
  const tourPurposeBadge = document.getElementById("tour-purpose-badge");
  const tourPurposeText = document.getElementById("tour-purpose-text");
  const tourPointsSelector = document.getElementById("tour-points-selector");
  const tourExplNum = document.getElementById("tour-expl-num");
  const tourExplTitle = document.getElementById("tour-expl-title");
  const tourExplPageBadge = document.getElementById("tour-expl-page-badge");
  const tourExplBody = document.getElementById("tour-expl-body");
  const tourExplPedagogy = document.getElementById("tour-expl-pedagogy");
  const btnTourZoomAction = document.getElementById("btn-tour-zoom-action");
  const btnTourToFlipbook = document.getElementById("btn-tour-to-flipbook");

  // Elementos de Auto-Presentación y Avatar Narrador
  const btnAutoTour = document.getElementById("btn-auto-tour");
  const autoTourIcon = document.getElementById("auto-tour-icon");
  const autoTourLabel = document.getElementById("auto-tour-label");
  const btnAutoStop = document.getElementById("btn-auto-stop");
  const btnVoiceToggle = document.getElementById("btn-voice-toggle");
  const voiceToggleIcon = document.getElementById("voice-toggle-icon");
  const tourAvatarNarrator = document.getElementById("tour-avatar-narrator");
  const tourAvatarImg = document.getElementById("tour-avatar-img");
  const avatarSpeakerName = document.getElementById("avatar-speaker-name");
  const avatarVoiceStatePill = document.getElementById("avatar-voice-state-pill");
  const avatarSpeechText = document.getElementById("avatar-speech-text");
  const tourPageFrame = document.getElementById("tour-page-frame");

  // Elementos Avatar Guía en Hoja y Tarjeta de Detalle (Mockup Usuario)
  const tourPageAvatarGuide = document.getElementById("tour-page-avatar-guide");
  const tourPageAvatarImg = document.getElementById("tour-page-avatar-img");
  const pageAvatarBubbleText = document.getElementById("page-avatar-bubble-text");
  const tourExplAvatarImg = document.getElementById("tour-expl-avatar-img");

  // Elementos Hub
  const hubCardsGrid = document.getElementById("hub-cards-grid");
  const hubFilterBtns = document.querySelectorAll(".hub-tab-btn");
  const hubSearchInput = document.getElementById("hub-search-input");

  // -------------------------------------------------------------------------
  // ESTADO GLOBAL DE LA APLICACIÓN
  // -------------------------------------------------------------------------
  let currentAppMode = "flipbook"; // 'hub', 'flipbook', 'tour'
  let booksLibrary = [];
  let toursCatalog = window.TOURS_CATALOG || [];

  let currentBookId = null;
  let currentBookData = null;
  let pageFlip = null;
  let zoomHandler = null;

  let activeTourId = "matematicas3";
  let activeTourData = null;
  let currentTourStepIndex = 0;
  let currentTourPageNum = 180;
  let currentTourItemNum = 1;
  let tourZoomTimer1 = null;
  let tourZoomTimer2 = null;

  // -------------------------------------------------------------------------
  // 1. CARGA DE CATÁLOGOS Y MANIFIESTOS (Offline First)
  // -------------------------------------------------------------------------
  if (window.BOOKS_LIBRARY && Array.isArray(window.BOOKS_LIBRARY)) {
    booksLibrary = window.BOOKS_LIBRARY;
  } else if (window.BOOK_MANIFEST) {
    booksLibrary = [{
      id: "ms3",
      title: window.BOOK_MANIFEST.title || "Misión Saber",
      subtitle: "Edición Digital",
      badge: "Libro",
      totalPages: window.BOOK_MANIFEST.totalPages,
      aspectRatio: window.BOOK_MANIFEST.aspectRatio || 0.808,
      pages: window.BOOK_MANIFEST.pages
    }];
  }

  // -------------------------------------------------------------------------
  // 2. SISTEMA DE SONIDOS PERSONALIZABLES (Catálogo de Efectos de Hoja)
  // -------------------------------------------------------------------------
  const SOUND_PROFILES = [
    {
      id: "revista",
      name: "Revista Satinada",
      desc: "Suave, sedoso y aireado (Recomendado)",
      icon: "📄",
      file: "assets/sounds/revista_suave.wav",
      synth: { duration: 0.38, attack: 0.07, decay: 1.6, hp: 900, bp: 2600, q: 1.2 }
    },
    {
      id: "libro",
      name: "Libro Clásico",
      desc: "Papel bond natural, crujiente y ligero",
      icon: "📖",
      file: "assets/sounds/libro_clasico.wav",
      synth: { duration: 0.34, attack: 0.05, decay: 1.4, hp: 750, bp: 2200, q: 1.5 }
    },
    {
      id: "pergamino",
      name: "Pergamino Cálido",
      desc: "Textura rica y profunda, sin golpe seco",
      icon: "📜",
      file: "assets/sounds/pergamino.wav",
      synth: { duration: 0.44, attack: 0.09, decay: 1.3, hp: 600, bp: 1800, q: 1.1 }
    },
    {
      id: "brisa",
      name: "Brisa Ligera",
      desc: "Deslizamiento moderno y aéreo (Swoosh)",
      icon: "🍃",
      file: "assets/sounds/brisa_swoosh.wav",
      synth: { duration: 0.30, attack: 0.08, decay: 1.8, hp: 1100, bp: 3200, q: 1.3 }
    },
    {
      id: "susurro",
      name: "Susurro Sutil",
      desc: "Ultra tenue para lectura relajada o nocturna",
      icon: "🤫",
      file: "assets/sounds/susurro_sutil.wav",
      synth: { duration: 0.26, attack: 0.06, decay: 2.2, hp: 1300, bp: 3000, q: 1.6 }
    },
    {
      id: "mudo",
      name: "Silencio (Mudo)",
      desc: "Paso de páginas sin sonido",
      icon: "🔇",
      file: null,
      synth: null
    }
  ];

  let currentSoundId = localStorage.getItem("flipbook_sound_profile") || "revista";
  let soundVolume = parseFloat(localStorage.getItem("flipbook_sound_volume") || "0.7");
  let soundEnabled = currentSoundId !== "mudo";
  let audioCtx = null;

  const audioCache = {};
  SOUND_PROFILES.forEach((p) => {
    if (p.file) {
      audioCache[p.id] = [new Audio(p.file), new Audio(p.file)];
      audioCache[p.id].forEach((a) => {
        a.preload = "auto";
        a.volume = soundVolume;
      });
    }
  });

  let audioTurnIndex = 0;
  function playSoundInstance(profileId, customVolume = null) {
    if (profileId === "mudo") return;
    const vol = customVolume !== null ? customVolume : soundVolume;
    if (vol <= 0) return;

    const profile = SOUND_PROFILES.find((p) => p.id === profileId) || SOUND_PROFILES[0];
    if (!profile || !profile.file) return;

    try {
      const pool = audioCache[profile.id];
      if (pool && pool.length > 0) {
        audioTurnIndex = (audioTurnIndex + 1) % pool.length;
        const sound = pool[audioTurnIndex];
        sound.volume = vol;
        sound.currentTime = 0;
        const promise = sound.play();
        if (promise !== undefined) {
          promise.catch(() => synthesizeSoundProcedural(profile, vol));
          return;
        }
      }
    } catch (e) {
      synthesizeSoundProcedural(profile, vol);
    }
  }

  function playPageFlipSound() {
    if (!soundEnabled || currentSoundId === "mudo") return;
    playSoundInstance(currentSoundId);
  }

  function synthesizeSoundProcedural(profile, vol = 0.7) {
    if (!profile.synth) return;
    try {
      if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      if (audioCtx.state === "suspended") audioCtx.resume();

      const s = profile.synth;
      const duration = s.duration || 0.35;
      const bufferSize = Math.floor(audioCtx.sampleRate * duration);
      const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
      const data = buffer.getChannelData(0);

      for (let i = 0; i < bufferSize; i++) {
        const t = i / audioCtx.sampleRate;
        const white = Math.random() * 2 - 1;
        let env;
        if (t < s.attack) env = Math.sin((t / s.attack) * (Math.PI / 2));
        else env = Math.pow(Math.max(0, 1 - (t - s.attack) / (duration - s.attack)), s.decay);
        data[i] = white * env * 0.25;
      }

      const noise = audioCtx.createBufferSource();
      noise.buffer = buffer;
      const highpass = audioCtx.createBiquadFilter();
      highpass.type = "highpass";
      highpass.frequency.setValueAtTime(s.hp, audioCtx.currentTime);
      const bandpass = audioCtx.createBiquadFilter();
      bandpass.type = "bandpass";
      bandpass.frequency.setValueAtTime(s.bp, audioCtx.currentTime);
      bandpass.Q.setValueAtTime(s.q, audioCtx.currentTime);
      const gain = audioCtx.createGain();
      gain.gain.setValueAtTime(vol * 0.45, audioCtx.currentTime);

      noise.connect(highpass);
      highpass.connect(bandpass);
      bandpass.connect(gain);
      gain.connect(audioCtx.destination);
      noise.start();
    } catch (e) {}
  }

  function updateSoundUI() {
    const isMuted = !soundEnabled || currentSoundId === "mudo" || soundVolume === 0;
    if (soundIconOn && soundIconOff) {
      soundIconOn.style.display = isMuted ? "none" : "block";
      soundIconOff.style.display = isMuted ? "block" : "none";
    }
    if (btnSound) btnSound.classList.toggle("active", !isMuted);
    if (btnSoundMute) {
      btnSoundMute.textContent = isMuted ? "Silenciado" : "Activo";
      btnSoundMute.classList.toggle("muted", isMuted);
    }
    if (soundVolumeSlider) soundVolumeSlider.value = Math.round(soundVolume * 100);
    if (soundVolumeValue) soundVolumeValue.textContent = `${Math.round(soundVolume * 100)}%`;

    if (soundOptionsList) {
      soundOptionsList.querySelectorAll(".sound-option-card").forEach((card) => {
        const id = card.getAttribute("data-sound-id");
        card.classList.toggle("active", id === currentSoundId);
      });
    }
  }

  function selectSoundProfile(soundId) {
    currentSoundId = soundId;
    localStorage.setItem("flipbook_sound_profile", soundId);
    if (soundId === "mudo") {
      soundEnabled = false;
      showToast("Efecto de sonido desactivado");
    } else if (spot.icfes) {
      const activeAv = getActiveAvatar();
      const compColor = spot.icfes.competencia.includes("Interpretación") ? "#c2410c" : (spot.icfes.competencia.includes("Formulación") ? "#1d4ed8" : "#15803d");
      const compBg = spot.icfes.competencia.includes("Interpretación") ? "#fff7ed" : (spot.icfes.competencia.includes("Formulación") ? "#eff6ff" : "#f0fdf4");
      const compBorder = spot.icfes.competencia.includes("Interpretación") ? "#fdba74" : (spot.icfes.competencia.includes("Formulación") ? "#bfdbfe" : "#bbf7d0");

      popover.innerHTML = `
        <div class="popover-header" style="background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%); padding: 12px 16px;">
          <div class="popover-header-title" style="color: #ffffff; font-weight: 700; font-size: 1.05em; display: flex; align-items: center; gap: 8px;">
            <span>📝</span>
            <span>${spot.label}</span>
          </div>
          <button class="popover-btn-close" type="button" id="btn-close-popover" title="Cerrar cuadro" style="color: #ffffff;">✕</button>
        </div>

        <div class="popover-tags-row" style="margin: 10px 14px 6px 14px; display: flex; gap: 8px; flex-wrap: wrap;">
          <span class="popover-tag" style="background: #f1f5f9; color: #0f172a; border: 1.5px solid #cbd5e1; font-weight: 700;">
            📦 Componente: ${spot.icfes.componente}
          </span>
          <span class="popover-tag" style="background: ${compBg}; color: ${compColor}; border: 1.5px solid ${compBorder}; font-weight: 700;">
            🎯 Competencia: ${spot.icfes.competencia}
          </span>
        </div>

        <div class="popover-section-box" style="margin: 8px 14px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 10px 12px;">
          <div class="popover-section-label" style="color: #1e40af; font-weight: 700; margin-bottom: 4px; font-size: 0.85em; text-transform: uppercase; letter-spacing: 0.5px;">
            <span>🎯</span> Afirmación (Guía de Orientación Saber 11)
          </div>
          <div class="popover-section-text" style="color: #1e293b; font-size: 0.9em; line-height: 1.45;">
            ${spot.icfes.afirmacion}
          </div>
        </div>

        <div class="popover-section-box" style="margin: 8px 14px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 10px 12px;">
          <div class="popover-section-label" style="color: #1e40af; font-weight: 700; margin-bottom: 4px; font-size: 0.85em; text-transform: uppercase; letter-spacing: 0.5px;">
            <span>🔍</span> Evidencia Evaluada
          </div>
          <div class="popover-section-text" style="color: #334155; font-size: 0.9em; line-height: 1.45;">
            ${spot.icfes.evidencia}
          </div>
        </div>

        <div class="popover-section-box" style="margin: 8px 14px; background: #f0fdf4; border: 1.5px solid #86efac; border-radius: 8px; padding: 10px 12px;">
          <div class="popover-section-label" style="color: #15803d; font-weight: 700; margin-bottom: 4px; font-size: 0.85em; text-transform: uppercase; letter-spacing: 0.5px;">
            <span>✅</span> Opción Correcta y Justificación Matemática
          </div>
          <div class="popover-section-text">
            <div style="font-weight: 800; color: #166534; font-size: 1.0em; margin-bottom: 5px;">
              Clave: ${spot.icfes.clave}
            </div>
            <div style="color: #14532d; font-size: 0.88em; line-height: 1.45;">
              ${spot.icfes.justificacion}
            </div>
          </div>
        </div>

        <div class="solution-avatar-badge-card" style="margin: 8px 14px 12px 14px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 8px 10px; display: flex; align-items: center; gap: 10px;">
          <img src="${activeAv.img}" class="solution-avatar-mini" alt="${activeAv.name}" style="width: 38px; height: 38px; border-radius: 50%;">
          <div class="solution-avatar-text-block">
            <span class="solution-avatar-name" style="color: #1e293b; font-weight: 700; font-size: 0.85em; display: block;">${activeAv.name} • Tutor Saber 11</span>
            <span class="solution-avatar-tip" style="color: #475569; font-size: 0.82em; line-height: 1.35;">${spot.avatarTip || "Aplica el razonamiento matemático y verifica cada paso con evidencia."}</span>
          </div>
        </div>
      `;

      const btnClose = popover.querySelector("#btn-close-popover");
      if (btnClose) {
        btnClose.addEventListener("click", (e) => {
          e.stopPropagation();
          closePedagogicalPopover();
        });
      }

      if (pin && isVoiceEnabled && 'speechSynthesis' in window && !isAutoTourRunning) {
        speakTourNarration(spot.label, `${spot.icfes.competencia}. ${spot.icfes.clave}. ${spot.icfes.justificacion}`, "");
      }
    } else {
      soundEnabled = true;
      playSoundInstance(soundId);
      const prof = SOUND_PROFILES.find((p) => p.id === soundId);
      if (prof) showToast(`Efecto de sonido: ${prof.name}`);
    }
    updateSoundUI();
  }

  function renderSoundMenu() {
    if (!soundOptionsList) return;
    soundOptionsList.innerHTML = "";
    SOUND_PROFILES.forEach((p) => {
      const card = document.createElement("div");
      card.className = "sound-option-card";
      if (p.id === currentSoundId) card.classList.add("active");
      card.setAttribute("data-sound-id", p.id);
      card.innerHTML = `
        <div class="sound-option-info">
          <div class="sound-option-name">
            <span>${p.icon}</span>
            <span>${p.name}</span>
          </div>
          <div class="sound-option-desc">${p.desc}</div>
        </div>
        <div class="sound-option-actions">
          ${p.file ? `
            <button class="btn-sound-preview" title="Probar este sonido" aria-label="Probar">
              <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </button>
          ` : ""}
          <div class="sound-active-check">
            <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
          </div>
        </div>
      `;
      card.addEventListener("click", (e) => {
        if (e.target.closest(".btn-sound-preview")) return;
        selectSoundProfile(p.id);
      });
      const prevBtn = card.querySelector(".btn-sound-preview");
      if (prevBtn) {
        prevBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          playSoundInstance(p.id);
        });
      }
      soundOptionsList.appendChild(card);
    });
  }

  function toggleSoundMenu() {
    if (!soundMenu) return;
    soundMenu.classList.toggle("open");
  }

  function closeSoundMenu() {
    if (soundMenu) soundMenu.classList.remove("open");
  }

  if (btnSound) {
    btnSound.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleSoundMenu();
    });
  }

  if (btnSoundMute) {
    btnSoundMute.addEventListener("click", (e) => {
      e.stopPropagation();
      if (soundEnabled && currentSoundId !== "mudo") {
        soundEnabled = false;
        showToast("Sonido silenciado");
      } else {
        soundEnabled = true;
        if (currentSoundId === "mudo") currentSoundId = "revista";
        playSoundInstance(currentSoundId);
        showToast("Sonido reactivado");
      }
      updateSoundUI();
    });
  }

  if (soundVolumeSlider) {
    soundVolumeSlider.addEventListener("input", (e) => {
      soundVolume = parseInt(e.target.value, 10) / 100;
      localStorage.setItem("flipbook_sound_volume", soundVolume.toString());
      if (soundVolume > 0 && !soundEnabled) {
        soundEnabled = true;
        if (currentSoundId === "mudo") currentSoundId = "revista";
      }
      Object.values(audioCache).forEach((pool) => pool.forEach((a) => { a.volume = soundVolume; }));
      updateSoundUI();
    });
    soundVolumeSlider.addEventListener("change", () => {
      if (soundEnabled && currentSoundId !== "mudo") playSoundInstance(currentSoundId);
    });
  }

  renderSoundMenu();
  updateSoundUI();

  // -------------------------------------------------------------------------
  // 3. TOAST DE NOTIFICACIÓN
  // -------------------------------------------------------------------------
  let toastTimer = null;
  function showToast(message, iconSvg = null) {
    if (!toastEl) return;
    clearTimeout(toastTimer);
    toastEl.innerHTML = (iconSvg || `<svg viewBox="0 0 24 24" width="18" height="18" fill="var(--accent)"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>`) + `<span>${message}</span>`;
    toastEl.classList.add("show");
    toastTimer = setTimeout(() => {
      toastEl.classList.remove("show");
    }, 2800);
  }

  // -------------------------------------------------------------------------
  // 4. CONMUTADOR DE MODOS MAESTRO (Hub / Revista / Tour)
  // -------------------------------------------------------------------------
  function setAppMode(mode, options = {}) {
    currentAppMode = mode;
    document.body.setAttribute("data-app-mode", mode);
    if (mode !== "tour") {
      document.body.removeAttribute("data-active-tour");
    }

    // Resetear vistas visuales
    viewHub.classList.toggle("active", mode === "hub");
    viewFlipbook.classList.toggle("active", mode === "flipbook");
    viewTour.classList.toggle("active", mode === "tour");

    // Actualizar botones segmentados
    segBtnFlipbook.classList.toggle("active", mode === "flipbook");
    segBtnTour.classList.toggle("active", mode === "tour");
    btnHubLauncher.classList.toggle("active", mode === "hub");

    // Mostrar/ocultar selectores contextuales en la cabecera
    if (mode === "flipbook") {
      libraryContainer.style.display = "block";
      tourDropdownContainer.style.display = "none";
    } else if (mode === "tour") {
      libraryContainer.style.display = "none";
      tourDropdownContainer.style.display = "block";
    } else {
      libraryContainer.style.display = "none";
      tourDropdownContainer.style.display = "none";
    }

    // Cerrar menús abiertos
    closeLibraryMenu();
    closeTourMenu();
    closeSoundMenu();

    // Asegurar que la pantalla de carga nunca bloquee el Ecosistema o el Tour
    if (loadingScreenEl) {
      if (mode === "hub" || mode === "tour") {
        loadingScreenEl.classList.add("hidden");
      }
    }

    if (mode === "hub") {
      renderHubCards();
      document.title = "Centro de Control • Ecosistema Misión Saber";
      history.replaceState(null, "", "#hub");
    } else if (mode === "flipbook") {
      const bookToLoad = options.bookId || currentBookId || booksLibrary[0].id;
      const pageToLoad = options.page || 1;
      loadBook(bookToLoad, pageToLoad);
    } else if (mode === "tour") {
      const tourToLoad = options.tourId || activeTourId || "matematicas3";
      const stepToLoad = options.stepIndex || 0;
      const pageToLoad = options.pageNum || options.page || null;
      loadTour(tourToLoad, stepToLoad, pageToLoad);
    }
  }

  btnHubLauncher.addEventListener("click", () => setAppMode("hub"));
  segBtnFlipbook.addEventListener("click", () => setAppMode("flipbook"));
  segBtnTour.addEventListener("click", () => {
    setAppMode("tour", { tourId: activeTourId || "matematicas3" });
  });

  // -------------------------------------------------------------------------
  // 5. CENTRO DE CONTROL / HUB DASHBOARD
  // -------------------------------------------------------------------------
  let currentHubFilter = "all";

  function renderHubCards() {
    if (!hubCardsGrid) return;
    hubCardsGrid.innerHTML = "";
    const searchTerm = (hubSearchInput ? hubSearchInput.value : "").toLowerCase().trim();

    // 1. Tarjetas de Libros Flipbook
    if (currentHubFilter === "all" || currentHubFilter === "flipbook") {
      booksLibrary.forEach((book) => {
        if (searchTerm && !book.title.toLowerCase().includes(searchTerm) && !book.subtitle.toLowerCase().includes(searchTerm)) {
          return;
        }

        const card = document.createElement("div");
        card.className = `resource-card card-grade-${book.id}`;
        const coverSrc = book.pages && book.pages[0] ? book.pages[0] : "";
        const hasTour = book.id === "ms3" || book.id === "ms11_t1";
        const linkedTourId = book.id === "ms3" ? "matematicas3" : "fisica11";
        const linkedTourLabel = book.id === "ms3" ? "🎓 Tour 3° Matemáticas" : "⚡ Tour 11° Física";

        card.innerHTML = `
          <div class="resource-card-media">
            <span class="resource-type-badge badge-flipbook">📖 Revista Digital</span>
            <img src="${coverSrc}" alt="Portada ${book.title}" loading="lazy">
          </div>
          <div class="resource-card-body">
            <div class="resource-card-title">${book.title}</div>
            <div class="resource-card-sub">${book.subtitle || "Edición completa digital en alta resolución"}</div>
            <div class="resource-card-meta">
              <span>📄 <strong>${book.totalPages}</strong> páginas</span>
              <span>•</span>
              <span>${book.badge || book.grade}</span>
            </div>
            <div class="resource-card-actions">
              <button class="btn-card-action btn-card-primary" data-action="open-book" data-book-id="${book.id}">
                <span>📖 Abrir Revista</span>
              </button>
              ${hasTour ? `
                <button class="btn-card-action btn-card-secondary" data-action="open-linked-tour" data-tour-id="${linkedTourId}" title="${linkedTourLabel}">
                  <span>🎓 Ver Tour</span>
                </button>
              ` : ""}
            </div>
          </div>
        `;
        hubCardsGrid.appendChild(card);
      });
    }

    // 2. Tarjetas de Tours Pedagógicos
    if (currentHubFilter === "all" || currentHubFilter === "tour") {
      toursCatalog.forEach((tour) => {
        if (searchTerm && !tour.title.toLowerCase().includes(searchTerm) && !tour.subtitle.toLowerCase().includes(searchTerm)) {
          return;
        }

        const card = document.createElement("div");
        card.className = `resource-card card-tour-${tour.id}`;
        const tourTypeTag = tour.id === "fisica11" ? "⚡ Enfoque 4 Pasos" : "🎓 Enfoque 4 Fases";

        card.innerHTML = `
          <div class="resource-card-media">
            <span class="resource-type-badge badge-tour">${tourTypeTag}</span>
            <img src="${tour.previewImg}" alt="Presentación ${tour.title}" loading="lazy">
          </div>
          <div class="resource-card-body">
            <div class="resource-card-title">${tour.title}</div>
            <div class="resource-card-sub">${tour.description}</div>
            <div class="resource-card-meta">
              <span>🎯 <strong>${tour.steps.length}</strong> ${tour.stepsUnitPlural}</span>
              <span>•</span>
              <span>${tour.gradeBadge}</span>
            </div>
            <div class="resource-card-actions">
              <button class="btn-card-action btn-card-primary" data-action="open-tour" data-tour-id="${tour.id}">
                <span>🎓 Iniciar Tour</span>
              </button>
              <button class="btn-card-action btn-card-secondary" data-action="open-book-at" data-book-id="${tour.bookId}" data-page="${tour.bookStartPage}">
                <span>📖 En Revista</span>
              </button>
            </div>
          </div>
        `;
        hubCardsGrid.appendChild(card);
      });
    }

    // Eventos de botones dentro del Hub
    hubCardsGrid.querySelectorAll("[data-action]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const action = btn.getAttribute("data-action");
        if (action === "open-book") {
          const bookId = btn.getAttribute("data-book-id");
          setAppMode("flipbook", { bookId, page: 1 });
        } else if (action === "open-tour" || action === "open-linked-tour") {
          let tourId = btn.getAttribute("data-tour-id");
          if (tourId === "ms3") tourId = "matematicas3";
          if (tourId === "ms11_t1" || tourId === "ms11_t2") tourId = "fisica11";
          setAppMode("tour", { tourId, stepIndex: 0 });
        } else if (action === "open-book-at") {
          const bookId = btn.getAttribute("data-book-id");
          const page = parseInt(btn.getAttribute("data-page"), 10) || 1;
          setAppMode("flipbook", { bookId, page });
        }
      });
    });
  }

  hubFilterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      hubFilterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentHubFilter = btn.getAttribute("data-filter");
      renderHubCards();
    });
  });

  if (hubSearchInput) {
    hubSearchInput.addEventListener("input", renderHubCards);
  }

  // -------------------------------------------------------------------------
  // 6. MOTOR DEL VISOR DE REVISTA DIGITAL (FLIPBOOK 3D)
  // -------------------------------------------------------------------------
  function calculateOptimalDimensions(aspectRatio) {
    const pageRatio = aspectRatio || 0.808;
    const spreadRatio = pageRatio * 2;
    const availW = Math.max(480, window.innerWidth - 60);
    const availH = Math.max(380, window.innerHeight - 105);
    let spreadW, spreadH;
    if (availW / availH > spreadRatio) {
      spreadH = availH;
      spreadW = Math.round(spreadH * spreadRatio);
    } else {
      spreadW = availW;
      spreadH = Math.round(spreadW / spreadRatio);
    }
    const singlePageW = Math.round(spreadW / 2);
    const singlePageH = Math.round(spreadH);
    return { singlePageW, singlePageH, spreadW, spreadH };
  }

  function updateCoverCentering(pageIndex) {
    if (!centeringWrapperEl || !currentBookData) return;
    const total = currentBookData.totalPages;
    if (pageIndex === 0) centeringWrapperEl.style.transform = "translateX(-25%)";
    else if (pageIndex >= total - 1) centeringWrapperEl.style.transform = "translateX(25%)";
    else centeringWrapperEl.style.transform = "translateX(0)";
  }

  zoomHandler = new ZoomHandler(viewportAreaEl, zoomViewportEl, {
    minScale: 1.0,
    maxScale: 3.8,
    step: 0.25,
    onZoomChange: (scale, isZoomed) => {
      zoomBadge.textContent = `${Math.round(scale * 100)}%`;
      const fb = document.getElementById("flipbook");
      if (isZoomed) {
        zoomIndicator.classList.add("visible");
        if (fb) fb.style.pointerEvents = "none";
      } else {
        zoomIndicator.classList.remove("visible");
        if (fb) fb.style.pointerEvents = "auto";
      }
    }
  });

  function updateUIState(currentPageIndex) {
    if (!currentBookData) return;
    const total = currentBookData.totalPages;
    const pageNum = currentPageIndex + 1;

    pageInput.value = pageNum;
    pageSlider.value = pageNum;

    const isFirst = currentPageIndex === 0;
    const isLast = currentPageIndex >= total - 1;

    btnPrev.disabled = isFirst;
    btnArrowPrev.disabled = isFirst;
    btnFirst.disabled = isFirst;
    btnNext.disabled = isLast;
    btnArrowNext.disabled = isLast;
    btnLast.disabled = isLast;

    updateCoverCentering(currentPageIndex);

    // Sugerencia dinámica de Tour en las páginas correspondientes (interconexión bidireccional)
    if (currentBookId === "ms3" && pageNum >= 180 && pageNum <= 198) {
      flipbookTourSuggestion.style.display = "flex";
      suggestionIcon.textContent = "📐";
      suggestionText.textContent = `Ver Tour Pedagógico: Matemáticas 3° (Pág. ${pageNum})`;
      flipbookTourSuggestion.onclick = () => { setAppMode("tour", { tourId: "matematicas3", pageNum: pageNum }); };
    } else if (currentBookId === "ms11_t1" && pageNum >= 208 && pageNum <= 218) {
      flipbookTourSuggestion.style.display = "flex";
      suggestionIcon.textContent = "⚛️";
      suggestionText.textContent = `Ver Tour Pedagógico: Física 11° (Pág. ${pageNum})`;
      flipbookTourSuggestion.onclick = () => { setAppMode("tour", { tourId: "fisica11", pageNum: pageNum }); };
    } else {
      flipbookTourSuggestion.style.display = "none";
    }

    // Actualización contextual del Copilot Pedagógico Interactivo
    updateCopilotForPage(pageNum, total);
  }

  function renderLibraryMenu() {
    if (!booksGrid) return;
    booksGrid.innerHTML = "";
    booksLibrary.forEach((book) => {
      const card = document.createElement("div");
      card.className = `book-card-item card-item-book-${book.id}`;
      if (book.id === currentBookId) card.classList.add("active");
      card.setAttribute("data-book-id", book.id);
      const coverSrc = book.pages && book.pages[0] ? book.pages[0] : "";
      card.innerHTML = `
        <div class="book-card-thumb">
          <img src="${coverSrc}" alt="Portada ${book.title}" loading="lazy">
        </div>
        <div class="book-card-details">
          <div class="book-card-title">${book.title}</div>
          <div class="book-card-sub">${book.subtitle || ""}</div>
          <div class="book-card-meta">
            <span class="book-card-badge">${book.badge || book.grade}</span>
            <span class="book-card-pages">${book.totalPages} páginas</span>
          </div>
        </div>
        <div class="book-card-active-icon">
          <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
        </div>
      `;
      card.addEventListener("click", () => {
        closeLibraryMenu();
        loadBook(book.id, 1);
      });
      booksGrid.appendChild(card);
    });
  }

  function toggleLibraryMenu() {
    if (!libraryMenu) return;
    libraryMenu.classList.toggle("open");
    btnLibrary.classList.toggle("active");
  }

  function closeLibraryMenu() {
    if (libraryMenu) libraryMenu.classList.remove("open");
    if (btnLibrary) btnLibrary.classList.remove("active");
  }

  if (btnLibrary) {
    btnLibrary.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleLibraryMenu();
    });
  }

  // -------------------------------------------------------------------------
  // SISTEMA DE HOTSPOTS PEDAGÓGICOS FLOTANTES (DBA, EVIDENCIAS, COMPETENCIAS)
  // -------------------------------------------------------------------------
  let activePopoverZone = null;
  let isPopoverPinned = false;
  let popoverHideTimer = null;

  function getPedagogicalPopoverEl() {
    let popover = document.getElementById("pedagogical-popover-card");
    if (!popover) {
      popover = document.createElement("div");
      popover.id = "pedagogical-popover-card";
      popover.className = "pedagogical-popover-card";
      document.body.appendChild(popover);

      popover.addEventListener("mouseenter", () => {
        clearTimeout(popoverHideTimer);
      });
      popover.addEventListener("mouseleave", () => {
        if (!isPopoverPinned) {
          scheduleHidePedagogicalPopover();
        }
      });
    }
    return popover;
  }

  function scheduleHidePedagogicalPopover() {
    clearTimeout(popoverHideTimer);
    popoverHideTimer = setTimeout(() => {
      closePedagogicalPopover();
    }, 280);
  }

  function closePedagogicalPopover() {
    clearTimeout(popoverHideTimer);
    const popover = document.getElementById("pedagogical-popover-card");
    if (popover) {
      popover.classList.remove("visible");
    }
    if (activePopoverZone) {
      activePopoverZone.classList.remove("active");
      activePopoverZone = null;
    }
    document.querySelectorAll(".structure-highlight-box.active").forEach(box => {
      box.classList.remove("active");
    });
    isPopoverPinned = false;
  }

  function showPedagogicalPopover(spot, zoneEl, pin = false) {
    clearTimeout(popoverHideTimer);
    const popover = getPedagogicalPopoverEl();

    if (activePopoverZone && activePopoverZone !== zoneEl) {
      activePopoverZone.classList.remove("active");
    }
    activePopoverZone = zoneEl;
    zoneEl.classList.add("active");
    isPopoverPinned = pin;

    // Si tiene caja de resaltado roja vinculada, activarla
    const linkedBox = document.getElementById(`box-${spot.id}`);
    if (linkedBox) {
      document.querySelectorAll(".structure-highlight-box.active").forEach(b => b.classList.remove("active"));
      linkedBox.classList.add("active");
    }

    if (spot.isStructureLabel) {
      const activeAv = getActiveAvatar();
      popover.innerHTML = `
        <div class="popover-header structure-popover-header">
          <div class="popover-header-title">
            <span>🏷️</span>
            <span>${spot.label}</span>
          </div>
          <button class="popover-btn-close" type="button" id="btn-close-popover" title="Cerrar cuadro">✕</button>
        </div>

        <div class="popover-tags-row">
          <span class="popover-tag tag-structure">${spot.category || "Estructura Didáctica del Libro"}</span>
          <span class="popover-tag tag-evidence">Presentación Misión Saber</span>
        </div>

        <div class="popover-section-box structure-summary-box">
          <div class="popover-section-label">
            <span>💡</span> Definición y Propósito
          </div>
          <div class="popover-section-text structure-text">
            <strong>${spot.summary}</strong>
          </div>
        </div>

        <div class="solution-avatar-badge-card" style="margin-top: 10px; background: #f0fdf4; border: 1px solid #bbf7d0;">
          <img src="${activeAv.img}" class="solution-avatar-mini" alt="${activeAv.name}">
          <div class="solution-avatar-text-block">
            <span class="solution-avatar-name" style="color: #166534;">${activeAv.name} • Orientación Didáctica</span>
            <span class="solution-avatar-tip" style="color: #14532d;">${spot.avatarTip || "Componente clave de la metodología por fases de Misión Saber."}</span>
          </div>
        </div>
      `;

      const btnClose = popover.querySelector("#btn-close-popover");
      if (btnClose) {
        btnClose.addEventListener("click", (e) => {
          e.stopPropagation();
          closePedagogicalPopover();
        });
      }

      if (pin && isVoiceEnabled && 'speechSynthesis' in window && !isAutoTourRunning) {
        speakTourNarration(spot.label, spot.summary, "");
      }
    } else if (spot.icfes) {
      const activeAv = getActiveAvatar();
      const compColor = spot.icfes.competencia.includes("Interpretación") ? "#c2410c" : (spot.icfes.competencia.includes("Formulación") ? "#1d4ed8" : "#15803d");
      const compBg = spot.icfes.competencia.includes("Interpretación") ? "#fff7ed" : (spot.icfes.competencia.includes("Formulación") ? "#eff6ff" : "#f0fdf4");
      const compBorder = spot.icfes.competencia.includes("Interpretación") ? "#fdba74" : (spot.icfes.competencia.includes("Formulación") ? "#bfdbfe" : "#bbf7d0");

      popover.innerHTML = `
        <div class="popover-header icfes-popover-header" style="background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%); padding: 12px 16px;">
          <div class="popover-header-title" style="color: #ffffff; font-weight: 700; font-size: 1.05em; display: flex; align-items: center; gap: 8px;">
            <span>📘</span>
            <span>${spot.label}</span>
          </div>
          <button class="popover-btn-close" type="button" id="btn-close-popover" title="Cerrar cuadro" style="color: #ffffff;">✕</button>
        </div>

        <div class="popover-tags-row" style="margin: 10px 14px 4px 14px; display: flex; gap: 8px; flex-wrap: wrap;">
          <span class="popover-tag" style="background: #eff6ff; color: #1e40af; border: 1.5px solid #93c5fd; font-weight: 800; font-size: 0.82em; padding: 4px 10px; border-radius: 6px;">
            📦 Componente: ${spot.icfes.componente}
          </span>
          <span class="popover-tag" style="background: ${compBg}; color: ${compColor}; border: 1.5px solid ${compBorder}; font-weight: 800; font-size: 0.82em; padding: 4px 10px; border-radius: 6px;">
            🎯 Competencia: ${spot.icfes.competencia}
          </span>
        </div>

        <div class="popover-section-box" style="margin: 8px 14px; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 10px 12px;">
          <div class="popover-section-label" style="color: #1e3a8a; font-weight: 800; margin-bottom: 5px; font-size: 0.82em; text-transform: uppercase; letter-spacing: 0.5px; display: flex; align-items: center; gap: 6px;">
            <span>📌</span> Afirmación (Guía de Orientación Saber 11)
          </div>
          <div class="popover-section-text" style="color: #1e293b; font-size: 0.88em; line-height: 1.45; font-weight: 600;">
            ${spot.icfes.afirmacion}
          </div>
        </div>

        <div class="popover-section-box" style="margin: 8px 14px; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 10px 12px;">
          <div class="popover-section-label" style="color: #1e3a8a; font-weight: 800; margin-bottom: 5px; font-size: 0.82em; text-transform: uppercase; letter-spacing: 0.5px; display: flex; align-items: center; gap: 6px;">
            <span>🔍</span> Evidencia Oficial de Aprendizaje
          </div>
          <div class="popover-section-text" style="color: #334155; font-size: 0.88em; line-height: 1.45;">
            ${spot.icfes.evidencia}
          </div>
        </div>

        <div class="popover-section-box" style="margin: 8px 14px; background: #f0fdf4; border: 1.5px solid #22c55e; border-radius: 8px; padding: 10px 12px;">
          <div class="popover-section-label" style="color: #15803d; font-weight: 800; margin-bottom: 6px; font-size: 0.85em; text-transform: uppercase; letter-spacing: 0.5px; display: flex; align-items: center; gap: 6px;">
            <span>✅</span> Opción Correcta y Justificación Matemática
          </div>
          <div class="popover-section-text">
            <div style="font-weight: 800; color: #166534; font-size: 1.0em; margin-bottom: 6px; padding: 4px 8px; background: #dcfce7; border-radius: 4px; display: inline-block;">
              Clave: ${spot.icfes.clave}
            </div>
            <div style="color: #14532d; font-size: 0.88em; line-height: 1.48; margin-top: 4px;">
              ${spot.icfes.justificacion}
            </div>
          </div>
        </div>

        <div class="solution-avatar-badge-card" style="margin: 8px 14px 12px 14px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 8px 10px; display: flex; align-items: center; gap: 10px;">
          <img src="${activeAv.img}" class="solution-avatar-mini" alt="${activeAv.name}" style="width: 36px; height: 36px; border-radius: 50%;">
          <div class="solution-avatar-text-block">
            <span class="solution-avatar-name" style="color: #1e293b; font-weight: 700; font-size: 0.85em; display: block;">${activeAv.name} • Tutor Saber 11</span>
            <span class="solution-avatar-tip" style="color: #475569; font-size: 0.82em; line-height: 1.35;">${spot.avatarTip || "Aplica el razonamiento matemático y verifica cada paso con evidencia."}</span>
          </div>
        </div>
      `;

      const btnClose = popover.querySelector("#btn-close-popover");
      if (btnClose) {
        btnClose.addEventListener("click", (e) => {
          e.stopPropagation();
          closePedagogicalPopover();
        });
      }

      if (pin && isVoiceEnabled && 'speechSynthesis' in window && !isAutoTourRunning) {
        speakTourNarration(spot.label, `${spot.icfes.competencia}. ${spot.icfes.clave}. ${spot.icfes.justificacion}`, "");
      }
    } else {
      let solutionHtml = "";
      if (spot.solution) {
        const activeAv = getActiveAvatar();
        solutionHtml = `
          <div class="popover-solution-toggle">
            <button class="btn-toggle-solution" type="button" id="btn-toggle-solution">
              <span class="solution-icon">💡</span>
              <span class="solution-label">Ver Solución y Justificación</span>
            </button>
            <div class="popover-solution-content" id="popover-solution-content" style="display: none;">
              <div class="solution-avatar-badge-card">
                <img src="${activeAv.img}" class="solution-avatar-mini" alt="${activeAv.name}">
                <div class="solution-avatar-text-block">
                  <span class="solution-avatar-name">${activeAv.name}</span>
                  <span class="solution-avatar-tip">¡Solución y Justificación avalada pedagógicamente!</span>
                </div>
              </div>
              <div style="font-weight: 800; color: #15803d; margin-bottom: 6px;">${spot.solution.key || ""}</div>
              <div style="color: #14532d; line-height: 1.45;">${spot.solution.justification || ""}</div>
            </div>
          </div>
        `;
      }

      popover.innerHTML = `
        <div class="popover-header">
          <div class="popover-header-title">
            <span>📋</span>
            <span>${spot.areaTitle || spot.label}</span>
          </div>
          <button class="popover-btn-close" type="button" id="btn-close-popover" title="Cerrar cuadro">✕</button>
        </div>

        <div class="popover-section-box">
          <div class="popover-section-label">
            <span>🎯</span> Derecho Básico de Aprendizaje (${spot.dba ? spot.dba.number : "DBA"})
          </div>
          <div class="popover-section-text">
            ${spot.dba ? (spot.dba.statement || spot.dba.text || "") : ""}
          </div>
        </div>

        <div class="popover-section-box">
          <div class="popover-section-label">
            <span>🔍</span> ${spot.dba && spot.dba.evidenceCode ? spot.dba.evidenceCode : "Evidencia de Aprendizaje Evaluada"}
          </div>
          <div class="popover-section-text">
            ${spot.dba && spot.dba.evidenceText ? spot.dba.evidenceText : (spot.evidence || "")}
          </div>
        </div>

        ${solutionHtml}
      `;

      const btnClose = popover.querySelector("#btn-close-popover");
      if (btnClose) {
        btnClose.addEventListener("click", (e) => {
          e.stopPropagation();
          closePedagogicalPopover();
        });
      }

      const btnToggleSol = popover.querySelector("#btn-toggle-solution");
      const solContent = popover.querySelector("#popover-solution-content");
      if (btnToggleSol && solContent) {
        btnToggleSol.addEventListener("click", (e) => {
          e.stopPropagation();
          const isHidden = solContent.style.display === "none";
          solContent.style.display = isHidden ? "block" : "none";
          btnToggleSol.querySelector(".solution-label").textContent = isHidden
            ? "Ocultar Solución y Justificación"
            : "Ver Solución y Justificación";
        });
      }
    }

    const rect = zoneEl.getBoundingClientRect();
    const popoverW = Math.min(470, window.innerWidth * 0.9);
    let targetLeft = rect.right + 14;
    let targetTop = rect.top;

    if (targetLeft + popoverW > window.innerWidth - 16) {
      targetLeft = rect.left - popoverW - 14;
    }
    if (targetLeft < 16) {
      targetLeft = Math.max(16, (window.innerWidth - popoverW) / 2);
      targetTop = Math.max(70, rect.bottom + 12);
    }
    if (targetTop + 450 > window.innerHeight) {
      targetTop = Math.max(70, window.innerHeight - 480);
    }

    popover.style.left = `${targetLeft}px`;
    popover.style.top = `${targetTop}px`;
    popover.classList.add("visible");
  }

  function injectPedagogicalHotspots(pageContainer, bookId, pageNum) {
    if (!window.PEDAGOGICAL_HOTSPOTS) return;
    const bookSpots = window.PEDAGOGICAL_HOTSPOTS[bookId];
    if (!bookSpots) return;
    const pageSpots = bookSpots[pageNum];
    if (!pageSpots || !Array.isArray(pageSpots)) return;

    pageSpots.forEach((spot) => {
      const zone = document.createElement("div");
      zone.className = "pedagogical-hotspot-zone";
      zone.id = `hotspot-zone-${spot.id}`;
      zone.style.top = `${spot.top}%`;
      zone.style.left = `${spot.left}%`;

      if (spot.isStructureLabel) {
        zone.classList.add("structure-hotspot-zone");
        zone.setAttribute("title", `Etiqueta Didáctica: ${spot.label} (Haz clic para ver explicación)`);

        let highlightBox = null;
        if (spot.boxWidth && spot.boxHeight) {
          highlightBox = document.createElement("div");
          highlightBox.className = "structure-highlight-box";
          highlightBox.id = `box-${spot.id}`;
          highlightBox.style.top = `${spot.boxTop}%`;
          highlightBox.style.left = `${spot.boxLeft}%`;
          highlightBox.style.width = `${spot.boxWidth}%`;
          highlightBox.style.height = `${spot.boxHeight}%`;
          pageContainer.appendChild(highlightBox);

          zone.addEventListener("mouseenter", () => {
            highlightBox.classList.add("active");
          });
          zone.addEventListener("mouseleave", () => {
            if (!isPopoverPinned || activePopoverZone !== zone) {
              highlightBox.classList.remove("active");
            }
          });
        }

        zone.innerHTML = `
          <span class="hotspot-badge-pill structure-badge-pill">
            <span class="pulse-dot structure-pulse-dot"></span>
            <span class="badge-text">${spot.badgeText || spot.label}</span>
          </span>
        `;
      } else {
        zone.classList.add("icfes-question-zone");
        zone.setAttribute("title", `Haz clic o pasa el ratón para ver: ${spot.label}`);
        const badgeLabel = spot.badgeText || (spot.dba ? `${spot.dba.number.split(" ")[0]} ${spot.dba.number.split(" ")[1]}` : "Pregunta ICFES");

        zone.innerHTML = `
          <span class="hotspot-badge-pill icfes-question-pill">
            <span class="pulse-dot"></span>
            <span class="badge-text">${badgeLabel}</span>
          </span>
        `;
      }

      zone.addEventListener("mouseenter", () => {
        if (!isPopoverPinned) {
          showPedagogicalPopover(spot, zone, false);
        }
      });

      zone.addEventListener("mouseleave", () => {
        if (!isPopoverPinned) {
          scheduleHidePedagogicalPopover();
        }
      });

      zone.addEventListener("click", (e) => {
        e.stopPropagation();
        if (activePopoverZone === zone && isPopoverPinned) {
          closePedagogicalPopover();
        } else {
          showPedagogicalPopover(spot, zone, true);
        }
      });

      pageContainer.appendChild(zone);
    });
  }

  document.addEventListener("click", (e) => {
    const popover = document.getElementById("pedagogical-popover-card");
    if (!popover || !popover.classList.contains("visible")) return;
    if (!popover.contains(e.target) && !e.target.closest(".pedagogical-hotspot-zone")) {
      closePedagogicalPopover();
    }
  });

  let flipbookSafetyTimer = null;
  async function loadBook(bookId, startPageNum = 1) {
    const targetBook = booksLibrary.find((b) => b.id === bookId) || booksLibrary[0];
    if (!targetBook) return;

    if (currentBookId === targetBook.id && pageFlip) {
      if (startPageNum && startPageNum !== pageFlip.getCurrentPageIndex() + 1) {
        goToPage(startPageNum);
      }
      loadingScreenEl.classList.add("hidden");
      return;
    }

    loadingScreenEl.classList.remove("hidden");
    clearTimeout(flipbookSafetyTimer);

    if (zoomHandler && zoomHandler.isZoomed()) zoomHandler.reset();
    if (pageFlip) {
      try { pageFlip.destroy(); } catch (e) {}
      pageFlip = null;
    }

    let currentFlipbookEl = document.getElementById("flipbook");
    if (!currentFlipbookEl) {
      currentFlipbookEl = document.createElement("div");
      currentFlipbookEl.id = "flipbook";
      centeringWrapperEl.appendChild(currentFlipbookEl);
    } else {
      currentFlipbookEl.innerHTML = "";
    }

    currentBookId = targetBook.id;
    currentBookData = targetBook;
    document.body.setAttribute("data-active-book", targetBook.id);

    try {
      localStorage.setItem("flipbook_active_book", targetBook.id);
      history.replaceState(null, "", `#revista/${targetBook.id}`);
    } catch (e) {}

    bookTitleEl.textContent = targetBook.title;
    if (bookBadgeEl) bookBadgeEl.textContent = targetBook.badge || targetBook.grade || "Colección";
    document.title = `${targetBook.title} - Flipbook Digital`;
    totalPagesEl.textContent = targetBook.totalPages;
    pageSlider.max = targetBook.totalPages;
    pageSlider.value = startPageNum;
    pageInput.value = startPageNum;

    document.querySelectorAll(".book-card-item").forEach((card) => {
      card.classList.toggle("active", card.getAttribute("data-book-id") === targetBook.id);
    });

    const fragment = document.createDocumentFragment();
    targetBook.pages.forEach((pageSrc, index) => {
      const pageDiv = document.createElement("div");
      pageDiv.className = "page";
      if (index === 0) pageDiv.classList.add("--cover", "--cover-front");
      else if (index === targetBook.pages.length - 1) pageDiv.classList.add("--cover", "--cover-back");
      else pageDiv.classList.add(index % 2 === 1 ? "--left" : "--right");

      const img = document.createElement("img");
      img.src = pageSrc;
      img.alt = `Página ${index + 1} de ${targetBook.title}`;
      img.loading = index < 8 ? "eager" : "lazy";

      pageDiv.appendChild(img);

      const pageNum = index + 1;
      injectPedagogicalHotspots(pageDiv, targetBook.id, pageNum);

      fragment.appendChild(pageDiv);
    });
    currentFlipbookEl.appendChild(fragment);

    const dims = calculateOptimalDimensions(targetBook.aspectRatio);
    pageFlip = new St.PageFlip(currentFlipbookEl, {
      width: dims.singlePageW,
      height: dims.singlePageH,
      size: "fixed",
      minWidth: dims.singlePageW,
      maxWidth: dims.singlePageW * 2,
      minHeight: dims.singlePageH,
      maxHeight: dims.singlePageH * 2,
      maxShadowOpacity: 0.45,
      showCover: true,
      mobileScrollSupport: false,
      flippingTime: 700,
      usePortrait: false,
      startPage: Math.max(0, startPageNum - 1),
      drawShadow: true
    });

    pageFlip.on("init", () => {
      clearTimeout(flipbookSafetyTimer);
      loadingScreenEl.classList.add("hidden");
      if (pageFlip) updateUIState(pageFlip.getCurrentPageIndex());
      showToast(`Libro cargado: ${targetBook.title}`);
    });

    flipbookSafetyTimer = setTimeout(() => {
      loadingScreenEl.classList.add("hidden");
      if (pageFlip) updateUIState(pageFlip.getCurrentPageIndex());
    }, 1200);

    pageFlip.on("flip", (e) => {
      closePedagogicalPopover();
      playPageFlipSound();
      updateUIState(e.data);
      if (zoomHandler && zoomHandler.isZoomed()) zoomHandler.reset();
    });

    const pageNodes = currentFlipbookEl.querySelectorAll(".page");
    pageFlip.loadFromHTML(pageNodes);
  }

  function goPrev() {
    if (!pageFlip) return;
    if (zoomHandler.isZoomed()) zoomHandler.reset();
    pageFlip.flipPrev();
  }

  function goNext() {
    if (!pageFlip) return;
    if (zoomHandler.isZoomed()) zoomHandler.reset();
    pageFlip.flipNext();
  }

  function goToPage(targetPageNum) {
    if (!pageFlip || !currentBookData) return;
    const page = Math.max(1, Math.min(currentBookData.totalPages, targetPageNum));
    if (zoomHandler.isZoomed()) zoomHandler.reset();
    pageFlip.flip(page - 1);
  }

  btnPrev.addEventListener("click", goPrev);
  btnNext.addEventListener("click", goNext);
  btnArrowPrev.addEventListener("click", goPrev);
  btnArrowNext.addEventListener("click", goNext);
  btnFirst.addEventListener("click", () => goToPage(1));
  btnLast.addEventListener("click", () => goToPage(currentBookData.totalPages));

  pageInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const val = parseInt(pageInput.value, 10);
      if (!isNaN(val)) goToPage(val);
      pageInput.blur();
    }
  });

  pageSlider.addEventListener("input", (e) => {
    const val = parseInt(e.target.value, 10);
    if (!isNaN(val)) goToPage(val);
  });

  btnZoomIn.addEventListener("click", () => zoomHandler.zoomIn());
  btnZoomOut.addEventListener("click", () => zoomHandler.zoomOut());
  btnZoomReset.addEventListener("click", () => zoomHandler.reset());

  const btnToggleStructureLabels = document.getElementById("btn-toggle-structure-labels");
  let areStructureLabelsVisible = true;

  if (btnToggleStructureLabels) {
    btnToggleStructureLabels.addEventListener("click", () => {
      areStructureLabelsVisible = !areStructureLabelsVisible;
      document.body.classList.toggle("hide-structure-labels", !areStructureLabelsVisible);
      btnToggleStructureLabels.classList.toggle("active", areStructureLabelsVisible);
      showToast(areStructureLabelsVisible ? "🏷️ Etiquetas didácticas activadas" : "🏷️ Etiquetas didácticas ocultas");
    });
  }

  // -------------------------------------------------------------------------
  // 7. MOTOR DEL TOUR PEDAGÓGICO INTEGRADO (50% / 50%)
  // -------------------------------------------------------------------------
  function renderToursMenu() {
    if (!toursMenuGrid) return;
    toursMenuGrid.innerHTML = "";
    toursCatalog.forEach((tour) => {
      const item = document.createElement("div");
      item.className = `book-card-item card-item-tour-${tour.id}`;
      if (tour.id === activeTourId) item.classList.add("active");
      item.innerHTML = `
        <div class="book-card-thumb">
          <img src="${tour.previewImg}" alt="Portada ${tour.title}">
        </div>
        <div class="book-card-details">
          <div class="book-card-title">${tour.title}</div>
          <div class="book-card-sub">${tour.steps.length} ${tour.stepsUnitPlural} guiados</div>
          <div class="book-card-meta">
            <span class="book-card-badge">${tour.gradeBadge}</span>
          </div>
        </div>
        <div class="book-card-active-icon">
          <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
        </div>
      `;
      item.addEventListener("click", () => {
        closeTourMenu();
        setAppMode("tour", { tourId: tour.id, stepIndex: 0 });
      });
      toursMenuGrid.appendChild(item);
    });
  }

  function toggleTourMenu() {
    if (!tourMenu) return;
    tourMenu.classList.toggle("open");
    btnTourSelector.classList.toggle("active");
  }

  function closeTourMenu() {
    if (tourMenu) tourMenu.classList.remove("open");
    if (btnTourSelector) btnTourSelector.classList.remove("active");
  }

  if (btnTourSelector) {
    btnTourSelector.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleTourMenu();
    });
  }

  function loadTour(tourId, stepIndex = 0, targetPageNum = null) {
    activeTourData = toursCatalog.find((t) => t.id === tourId) || toursCatalog[0];
    if (!activeTourData) return;
    activeTourId = activeTourData.id;

    // Asignar tema visual dinámico según el libro/disciplina
    const themeClass = activeTourData.id === "fisica11" ? "tour-theme-fisica11" : "tour-theme-matematicas3";
    viewTour.className = `app-view active ${themeClass}`;
    document.body.setAttribute("data-active-tour", activeTourData.id);

    // Actualizar cabecera del tour
    activeTourIcon.textContent = activeTourData.icon;
    activeTourTitle.textContent = activeTourData.shortTitle;
    activeTourBadge.textContent = `${activeTourData.steps.length} ${activeTourData.stepsUnitPlural}`;
    if (activeTourData.id === "fisica11") {
      activeTourBadge.style.background = "rgba(229, 178, 13, 0.25)";
      activeTourBadge.style.color = "#fef05b";
      activeTourBadge.style.borderColor = "rgba(254, 240, 91, 0.5)";
    } else {
      activeTourBadge.style.background = "rgba(99, 102, 241, 0.25)";
      activeTourBadge.style.color = "#c7d2fe";
      activeTourBadge.style.borderColor = "rgba(99, 102, 241, 0.5)";
    }
    tourSubjectIcon.textContent = activeTourData.icon;
    tourDisplayTitle.textContent = activeTourData.title;
    tourDisplaySub.textContent = activeTourData.subtitle;

    document.title = `${activeTourData.title} - Tour Pedagógico`;
    history.replaceState(null, "", `#tour/${activeTourData.id}`);

    // Si viene con página objetivo, buscar en qué paso se encuentra
    let resolvedStepIndex = stepIndex;
    if (targetPageNum) {
      const foundIdx = activeTourData.steps.findIndex(s => s.pages.some(p => p.pageNumber === targetPageNum));
      if (foundIdx !== -1) resolvedStepIndex = foundIdx;
    }

    // Renderizar selector de Fases / Pasos
    renderTourStepsStepper();
    selectTourStep(resolvedStepIndex, targetPageNum);
  }

  function renderTourStepsStepper() {
    if (!tourStepsNav) return;
    tourStepsNav.innerHTML = "";
    activeTourData.steps.forEach((step, idx) => {
      const btn = document.createElement("button");
      btn.className = `tour-step-tab ${idx === currentTourStepIndex ? "active" : ""}`;
      btn.innerHTML = `
        <span class="tour-step-num">${step.stepNum}</span>
        <span>${step.title}</span>
      `;
      btn.addEventListener("click", () => selectTourStep(idx));
      tourStepsNav.appendChild(btn);
    });
  }

  /**
   * Formateador matemático universal y elegante (100% Offline)
   */
  function formatMathText(text) {
    if (!text) return "";
    return text
      .replace(/\(\$g\s*\\approx\s*9\.8\\text\{\s*m\/s\}\^2\$\)/g, '<span class="math-badge"><i>g</i> ≈ 9.8 m/s²</span>')
      .replace(/\$g\s*\\approx\s*9\.8\\text\{\s*m\/s\}\^2\$/g, '<span class="math-badge"><i>g</i> ≈ 9.8 m/s²</span>')
      .replace(/\(g\s*≈\s*9\.8\s*m\/s²\)/g, '(<span class="math-badge"><i>g</i> ≈ 9.8 m/s²</span>)')
      .replace(/\$a\s*=\s*g\s*\\cdot\s*\\text\{sen\}\(\\theta\)\$/g, '<span class="math-badge"><i>a</i> = <i>g</i> · sen(θ)</span>')
      .replace(/a\s*=\s*g\s*·\s*sen\(θ\)/g, '<span class="math-badge"><i>a</i> = <i>g</i> · sen(θ)</span>')
      .replace(/\$a\s*=\s*2d\/t\^2\$/g, '<span class="math-badge"><i>a</i> = 2<i>d</i> / <i>t</i>²</span>')
      .replace(/a\s*=\s*2d\s*\/\s*t²/g, '<span class="math-badge"><i>a</i> = 2<i>d</i> / <i>t</i>²</span>')
      .replace(/\$mg\\sin\\theta\$/g, '<span class="math-badge"><i>mg</i> · sen(θ)</span>')
      .replace(/\$mg\\cos\\theta\$/g, '<span class="math-badge"><i>mg</i> · cos(θ)</span>')
      .replace(/\$E\s*=\s*mc\^2\$/g, '<span class="math-badge"><i>E</i> = <i>mc</i>²</span>')
      .replace(/\$([^\$]+)\$/g, (match, formula) => {
        let f = formula
          .replace(/\\approx/g, '≈')
          .replace(/\\cdot/g, '·')
          .replace(/\\times/g, '×')
          .replace(/\\text\{sen\}/g, 'sen')
          .replace(/\\sin/g, 'sen')
          .replace(/\\cos/g, 'cos')
          .replace(/\\text\{m\/s\}\^2/g, 'm/s²')
          .replace(/\\theta/g, 'θ')
          .replace(/\^2/g, '²')
          .replace(/\^3/g, '³');
        return `<span class="math-badge">${f}</span>`;
      });
  }

  function selectTourStep(stepIndex, targetPageNum = null) {
    currentTourStepIndex = stepIndex;
    const step = activeTourData.steps[stepIndex];

    document.querySelectorAll(".tour-step-tab").forEach((btn, idx) => {
      btn.classList.toggle("active", idx === stepIndex);
    });

    tourPurposeBadge.textContent = step.badge;
    tourPurposeText.innerHTML = formatMathText(step.purpose);

    // Actualizar identidad del avatar según la fase/paso
    const stepAvatarSrc = (step.avatar && step.avatar.src) ? step.avatar.src : getActiveAvatar().img;
    if (tourAvatarImg) {
      tourAvatarImg.src = stepAvatarSrc;
      if (avatarSpeakerName && step.avatar) {
        avatarSpeakerName.textContent = `${step.avatar.name} • ${step.avatar.role}`;
      }
    }
    if (tourExplAvatarImg) {
      tourExplAvatarImg.src = stepAvatarSrc;
    }
    if (tourPageAvatarImg) {
      tourPageAvatarImg.src = stepAvatarSrc;
    }

    renderTourSubtabs(step.pages);
    renderTourPointsChips(step.items);

    const firstPage = targetPageNum && step.pages.some(p => p.pageNumber === targetPageNum)
      ? targetPageNum
      : step.pages[0].pageNumber;
    const targetItem = step.items.find(i => i.pageNumber === firstPage) || step.items[0];
    switchTourPage(firstPage, targetItem ? targetItem.num : 1);
  }

  function renderTourSubtabs(pages) {
    if (!tourSubtabsNav) return;
    tourSubtabsNav.innerHTML = "";
    pages.forEach((p) => {
      const btn = document.createElement("button");
      btn.className = "tour-subtab-btn";
      btn.textContent = p.label;
      btn.addEventListener("click", () => {
        const first = activeTourData.steps[currentTourStepIndex].items.find(i => i.pageNumber === p.pageNumber);
        switchTourPage(p.pageNumber, first ? first.num : null);
      });
      tourSubtabsNav.appendChild(btn);
    });
  }

  function switchTourPage(pageNum, focusItemNum = null) {
    currentTourPageNum = pageNum;
    const step = activeTourData.steps[currentTourStepIndex];
    const pageCfg = step.pages.find(p => p.pageNumber === pageNum) || step.pages[0];

    resetTourZoom();

    document.querySelectorAll(".tour-subtab-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.textContent === pageCfg.label);
    });

    tourPageImg.style.opacity = "0.2";
    if (tourPageAvatarGuide) tourPageAvatarGuide.classList.remove("active");
    tourPageImg.src = pageCfg.imageSrc;
    tourPageImg.onload = () => {
      tourPageImg.style.opacity = "1";
      renderTourHotspots(pageNum);
      if (focusItemNum !== null) {
        selectTourItem(focusItemNum, false, false);
      } else {
        const first = step.items.find(i => i.pageNumber === pageNum);
        if (first) selectTourItem(first.num, false, false);
      }
    };
  }

  function renderTourHotspots(pageNum) {
    if (!tourHotspotsLayer) return;
    tourHotspotsLayer.innerHTML = "";
    const step = activeTourData.steps[currentTourStepIndex];
    const items = step.items.filter(i => i.pageNumber === pageNum);

    items.forEach((item) => {
      const pin = document.createElement("button");
      pin.className = `tour-hotspot-pin ${item.num === currentTourItemNum ? "active" : ""}`;
      pin.id = `tour-pin-${item.num}`;
      pin.style.top = `${item.top}%`;
      pin.style.left = `${item.left}%`;
      pin.textContent = item.num;
      pin.title = item.title;

      pin.addEventListener("click", () => {
        if (isAutoTourRunning) pauseAutoTour();
        selectTourItem(item.num, true, true);
      });
      tourHotspotsLayer.appendChild(pin);
    });
  }

  function renderTourPointsChips(items) {
    if (!tourPointsSelector) return;
    tourPointsSelector.innerHTML = "";
    items.forEach((item) => {
      const chip = document.createElement("button");
      chip.className = `tour-point-chip ${item.num === currentTourItemNum ? "active" : ""}`;
      chip.id = `tour-chip-${item.num}`;
      chip.innerHTML = `
        <span class="tour-point-chip-num">${item.num}</span>
        <span class="tour-point-chip-label">${item.shortLabel}</span>
      `;
      chip.addEventListener("click", () => {
        if (isAutoTourRunning) pauseAutoTour();
        if (currentTourPageNum !== item.pageNumber) {
          switchTourPage(item.pageNumber, item.num);
        } else {
          selectTourItem(item.num, true, true);
        }
      });
      tourPointsSelector.appendChild(chip);
    });
  }

  // -------------------------------------------------------------------------
  // MOTOR DE SÍNTESIS DE VOZ Y AUTO-PRESENTACIÓN NARRADA (100% OFFLINE)
  // -------------------------------------------------------------------------
  let isAutoTourRunning = false;
  let isAutoTourPaused = false;
  let isVoiceEnabled = true;
  let autoTourTimer = null;
  let selectedSpeechVoice = null;

  function getBestNaturalSpanishVoice(voices) {
    if (!voices || voices.length === 0) return null;

    const esVoices = voices.filter(v => (v.lang && v.lang.toLowerCase().startsWith("es")) || (v.name && v.name.toLowerCase().includes("spanish")));
    if (esVoices.length === 0) return voices[0];

    // 1. Prioridad Absoluta Oficial: Gonzalo (Colombia - Voz Masculina Natural)
    const gonzaloVoice = esVoices.find(v => (v.name || "").toLowerCase().includes("gonzalo"));
    if (gonzaloVoice) return gonzaloVoice;

    // 2. Alternativas masculinas si Gonzalo no está en este equipo/navegador
    const jorgeVoice = esVoices.find(v => (v.name || "").toLowerCase().includes("jorge"));
    if (jorgeVoice) return jorgeVoice;

    const mateoVoice = esVoices.find(v => (v.name || "").toLowerCase().includes("mateo"));
    if (mateoVoice) return mateoVoice;

    const alvaroVoice = esVoices.find(v => /alvaro|álvaro/.test((v.name || "").toLowerCase()));
    if (alvaroVoice) return alvaroVoice;

    // 3. Voces masculinas adicionales o neuronales en español
    const scoreVoice = (v) => {
      const name = (v.name || "").toLowerCase();
      const lang = (v.lang || "").toLowerCase();
      let score = 0;

      if (name.includes("natural") || name.includes("online")) score += 100;
      if (name.includes("neural")) score += 90;
      if (/raul|raúl|pablo|carlos|diego/.test(name)) score += 50;
      if (lang === "es-co" || name.includes("colombia")) score += 40;
      if (lang === "es-mx" || name.includes("mexico")) score += 30;
      if (name.includes("desktop")) score -= 50;

      return score;
    };

    esVoices.sort((a, b) => scoreVoice(b) - scoreVoice(a));
    return esVoices[0];
  }

  function formatVoiceDisplayName(voice) {
    if (!voice) return "Voz Lista";
    const name = voice.name || "";
    const cleanName = name
      .replace(/Microsoft /i, "")
      .replace(/Online \(Natural\)/i, "")
      .replace(/- Spanish.*/i, "")
      .replace(/Spanish.*/i, "")
      .replace(/Desktop/i, "")
      .trim();
    const isNeural = /natural|neural|online|enhanced|google|studio/i.test(name);
    return isNeural ? `Voz IA: ${cleanName || 'Gonzalo'}` : `Voz: ${cleanName || 'Natural'}`;
  }

  function initSpeechVoices() {
    if (!('speechSynthesis' in window)) return;
    const updateVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      selectedSpeechVoice = getBestNaturalSpanishVoice(voices);
      if (avatarVoiceStatePill && selectedSpeechVoice) {
        avatarVoiceStatePill.textContent = formatVoiceDisplayName(selectedSpeechVoice);
        avatarVoiceStatePill.title = `Motor de voz: ${selectedSpeechVoice.name} (${selectedSpeechVoice.lang})`;
      }
    };
    updateVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = updateVoices;
    }
  }
  initSpeechVoices();

  function cleanTextForSpeech(text) {
    if (!text) return "";
    return text
      .replace(/<[^>]*>/g, " ")
      .replace(/\(g\s*≈\s*9\.8\s*m\/s²\)/gi, "gravedad de 9.8 metros por segundo al cuadrado")
      .replace(/g\s*≈\s*9\.8\s*m\/s²/gi, "gravedad de 9.8 metros por segundo al cuadrado")
      .replace(/E\s*=\s*mc²/gi, "E igual a m c al cuadrado")
      .replace(/a\s*=\s*g\s*·\s*sen\(θ\)/gi, "aceleración igual a gravedad por seno del ángulo")
      .replace(/a\s*=\s*2d\s*\/\s*t²/gi, "aceleración igual a dos veces la distancia entre tiempo al cuadrado")
      .replace(/MRU\s*\/\s*MRUA/gi, "Movimiento Rectilíneo Uniforme y Acelerado")
      .replace(/ICFES/gi, "Icfes")
      .replace(/Pág\.\s*/gi, "Página ")
      .replace(/[\$•]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function setAvatarSpeaking(isSpeaking) {
    if (tourAvatarNarrator) {
      tourAvatarNarrator.classList.toggle("speaking", isSpeaking);
    }
    if (avatarVoiceStatePill) {
      if (isSpeaking) {
        avatarVoiceStatePill.textContent = "Narrando...";
        avatarVoiceStatePill.style.color = "var(--color-yellow)";
        avatarVoiceStatePill.style.borderColor = "var(--color-yellow)";
      } else {
        avatarVoiceStatePill.textContent = isVoiceEnabled ? formatVoiceDisplayName(selectedSpeechVoice) : "Silenciado";
        avatarVoiceStatePill.style.color = "";
        avatarVoiceStatePill.style.borderColor = "";
      }
    }
  }

  function stopSpeech() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setAvatarSpeaking(false);
  }

  function speakTourNarration(title, explanation, pedagogy, onCompleteCallback) {
    stopSpeech();
    clearTimeout(autoTourTimer);

    const speechText = `${cleanTextForSpeech(title)}. ${cleanTextForSpeech(explanation)}`;

    if (avatarSpeechText) {
      avatarSpeechText.textContent = speechText;
    }

    if (!isVoiceEnabled || !('speechSynthesis' in window)) {
      if (isAutoTourRunning && !isAutoTourPaused) {
        const simulatedTime = Math.max(3500, Math.min(8000, speechText.length * 35));
        autoTourTimer = setTimeout(() => {
          if (onCompleteCallback) onCompleteCallback();
        }, simulatedTime);
      }
      return;
    }

    if (!selectedSpeechVoice) {
      const voices = window.speechSynthesis.getVoices();
      selectedSpeechVoice = getBestNaturalSpanishVoice(voices);
    }

    const utterance = new SpeechSynthesisUtterance(speechText);
    if (selectedSpeechVoice) {
      utterance.voice = selectedSpeechVoice;
      utterance.lang = selectedSpeechVoice.lang || "es-CO";
    } else {
      utterance.lang = "es-CO";
    }
    // Calibración acústica para modelos neuronales naturales (sin distorsión de pitch)
    utterance.rate = 0.96;
    utterance.pitch = 1.0;

    utterance.onstart = () => {
      setAvatarSpeaking(true);
    };

    utterance.onend = () => {
      setAvatarSpeaking(false);
      if (isAutoTourRunning && !isAutoTourPaused) {
        autoTourTimer = setTimeout(() => {
          if (onCompleteCallback) onCompleteCallback();
        }, 1500);
      }
    };

    utterance.onerror = (e) => {
      console.warn("SpeechSynthesis error:", e);
      setAvatarSpeaking(false);
      if (isAutoTourRunning && !isAutoTourPaused) {
        autoTourTimer = setTimeout(() => {
          if (onCompleteCallback) onCompleteCallback();
        }, 3000);
      }
    };

    window.speechSynthesis.resume();
    window.speechSynthesis.speak(utterance);
  }

  function selectTourItem(itemNum, triggerZoom = false, shouldSpeak = false) {
    currentTourItemNum = itemNum;
    const step = activeTourData.steps[currentTourStepIndex];
    const item = step.items.find(i => i.num === itemNum);
    if (!item) return;

    if (currentTourPageNum !== item.pageNumber) {
      switchTourPage(item.pageNumber, itemNum);
      return;
    }

    document.querySelectorAll(".tour-hotspot-pin").forEach((p) => {
      p.classList.toggle("active", p.id === `tour-pin-${item.num}`);
    });
    document.querySelectorAll(".tour-point-chip").forEach((c) => {
      c.classList.toggle("active", c.id === `tour-chip-${item.num}`);
    });

    tourExplNum.textContent = item.num;
    tourExplTitle.innerHTML = formatMathText(item.title);
    tourExplPageBadge.textContent = `Página ${item.pageNumber}`;
    tourExplBody.innerHTML = formatMathText(item.explanation);
    tourExplPedagogy.innerHTML = `💡 Enfoque Pedagógico: ${formatMathText(item.pedagogy)}`;

    // Actualizar avatar en la tarjeta de detalle derecha (Mockup usuario)
    const stepAvatarSrc = (step.avatar && step.avatar.src) ? step.avatar.src : getActiveAvatar().img;
    if (tourExplAvatarImg) {
      tourExplAvatarImg.src = stepAvatarSrc;
    }

    // Actualizar y posicionar el Avatar Guía sobre la hoja del libro (Mockup usuario)
    if (tourPageAvatarGuide && tourPageAvatarImg && pageAvatarBubbleText) {
      tourPageAvatarGuide.style.display = "flex";
      tourPageAvatarGuide.classList.add("active");
      tourPageAvatarImg.src = stepAvatarSrc;

      const rawLabel = item.shortLabel || item.title || "";
      const bubbleText = rawLabel.replace(/^\d+[\.\s\-]+/, "").trim();
      pageAvatarBubbleText.textContent = bubbleText;

      const pinLeft = item.left;
      const pinTop = item.top;
      
      // Si el punto está en la parte superior (< 28%), bajamos el avatar
      // para que el globo de diálogo NUNCA se corte contra el borde superior de la hoja
      let targetTop = pinTop;
      if (pinTop < 26) {
        targetTop = Math.max(25, pinTop + 8);
      } else if (pinTop > 80) {
        targetTop = Math.min(80, pinTop - 4);
      }

      let targetLeft;
      if (pinLeft <= 25) {
        // En puntos a la izquierda (como Punto 1 en 8.9%), posicionar el avatar a la derecha del punto
        targetLeft = pinLeft + 7.5;
      } else if (pinLeft >= 75) {
        // En puntos a la derecha, posicionar el avatar a la izquierda del punto
        targetLeft = pinLeft - 8.5;
      } else {
        // En columnas centrales, posicionar ligeramente a la izquierda
        targetLeft = pinLeft - 7.5;
      }

      tourPageAvatarGuide.style.left = `${targetLeft}%`;
      tourPageAvatarGuide.style.top = `${targetTop}%`;
    }

    if (avatarSpeechText) {
      avatarSpeechText.textContent = `${cleanTextForSpeech(item.title)}: ${cleanTextForSpeech(item.explanation)}`;
    }

    btnTourToFlipbook.onclick = () => {
      setAppMode("flipbook", { bookId: activeTourData.bookId, page: item.pageNumber });
    };

    if (triggerZoom) {
      triggerTourSectionZoom(item);
    }

    if (shouldSpeak && isVoiceEnabled && !isAutoTourRunning) {
      speakTourNarration(item.title, item.explanation, item.pedagogy);
    }
  }

  function triggerTourSectionZoom(item) {
    if (!tourZoomWrapper || !item) return;
    clearTimeout(tourZoomTimer1);
    clearTimeout(tourZoomTimer2);

    const originX = Math.max(15, Math.min(85, item.left));
    const originY = Math.max(15, Math.min(85, item.top));
    tourZoomWrapper.style.transformOrigin = `${originX}% ${originY}%`;
    tourZoomWrapper.classList.add("is-zoomed");
    tourZoomWrapper.style.transform = "scale(1.95)";
    tourZoomStatus.innerHTML = `🔍 Ampliando ${item.shortLabel} (1.95x) • Vuelve a vista general en 4.5s`;

    tourZoomTimer2 = setTimeout(() => {
      resetTourZoom();
    }, 4500);
  }

  function resetTourZoom() {
    clearTimeout(tourZoomTimer1);
    clearTimeout(tourZoomTimer2);
    if (tourZoomWrapper) {
      tourZoomWrapper.classList.remove("is-zoomed");
      tourZoomWrapper.style.transform = "scale(1)";
    }
    if (tourZoomStatus) {
      tourZoomStatus.innerHTML = "📄 Vista de hoja completa (100%) • Clic en un número para inspeccionar";
    }
  }

  // Lógica del modo Auto-Presentación
  function updateAutoTourUI() {
    if (!btnAutoTour) return;
    if (isAutoTourRunning) {
      btnAutoTour.classList.add("running");
      btnAutoTour.classList.remove("paused");
      if (autoTourIcon) autoTourIcon.textContent = "⏸";
      if (autoTourLabel) autoTourLabel.textContent = "Pausar";
      if (btnAutoStop) btnAutoStop.classList.remove("hidden");
    } else if (isAutoTourPaused) {
      btnAutoTour.classList.remove("running");
      btnAutoTour.classList.add("paused");
      if (autoTourIcon) autoTourIcon.textContent = "▶";
      if (autoTourLabel) autoTourLabel.textContent = "Reanudar";
      if (btnAutoStop) btnAutoStop.classList.remove("hidden");
    } else {
      btnAutoTour.classList.remove("running");
      btnAutoTour.classList.remove("paused");
      if (autoTourIcon) autoTourIcon.textContent = "▶";
      if (autoTourLabel) autoTourLabel.textContent = "Auto-Presentación";
      if (btnAutoStop) btnAutoStop.classList.add("hidden");
    }
  }

  function startAutoTour() {
    isAutoTourRunning = true;
    isAutoTourPaused = false;
    updateAutoTourUI();
    executeCurrentAutoStep();
  }

  function pauseAutoTour() {
    isAutoTourRunning = false;
    isAutoTourPaused = true;
    clearTimeout(autoTourTimer);
    stopSpeech();
    updateAutoTourUI();
  }

  function stopAutoTour() {
    isAutoTourRunning = false;
    isAutoTourPaused = false;
    clearTimeout(autoTourTimer);
    stopSpeech();
    updateAutoTourUI();
    resetTourZoom();
    if (avatarSpeechText) {
      avatarSpeechText.textContent = "Auto-presentación detenida. Puedes explorar manualmente los puntos haciendo clic en cualquiera de ellos.";
    }
  }

  function executeCurrentAutoStep() {
    if (!isAutoTourRunning || isAutoTourPaused) return;

    const step = activeTourData.steps[currentTourStepIndex];
    if (!step) return;

    let item = step.items.find(i => i.num === currentTourItemNum);
    if (!item) {
      item = step.items[0];
      currentTourItemNum = item.num;
    }

    selectTourItem(item.num, true, false);

    speakTourNarration(item.title, item.explanation, item.pedagogy, () => {
      advanceAutoTourNext();
    });
  }

  function advanceAutoTourNext() {
    if (!isAutoTourRunning || isAutoTourPaused) return;

    const step = activeTourData.steps[currentTourStepIndex];
    const currentIndex = step.items.findIndex(i => i.num === currentTourItemNum);

    if (currentIndex < step.items.length - 1) {
      const nextItem = step.items[currentIndex + 1];
      currentTourItemNum = nextItem.num;
      executeCurrentAutoStep();
    } else {
      if (currentTourStepIndex < activeTourData.steps.length - 1) {
        selectTourStep(currentTourStepIndex + 1);
        const nextStep = activeTourData.steps[currentTourStepIndex];
        currentTourItemNum = nextStep.items[0].num;
        autoTourTimer = setTimeout(() => {
          executeCurrentAutoStep();
        }, 1400);
      } else {
        stopSpeech();
        isAutoTourRunning = false;
        isAutoTourPaused = false;
        updateAutoTourUI();
        if (avatarSpeechText) {
          avatarSpeechText.textContent = "🎉 ¡Misión completada con éxito! Has recorrido todos los pasos del tour pedagógico de Física 11°.";
        }
        if ('speechSynthesis' in window && isVoiceEnabled) {
          const finishMsg = new SpeechSynthesisUtterance("¡Misión completada con éxito! Has recorrido todos los pasos pedagógicos.");
          if (selectedSpeechVoice) finishMsg.voice = selectedSpeechVoice;
          window.speechSynthesis.speak(finishMsg);
        }
      }
    }
  }

  if (btnAutoTour) {
    btnAutoTour.addEventListener("click", () => {
      if (isAutoTourRunning) {
        pauseAutoTour();
      } else {
        startAutoTour();
      }
    });
  }

  if (btnAutoStop) {
    btnAutoStop.addEventListener("click", stopAutoTour);
  }

  if (btnVoiceToggle) {
    btnVoiceToggle.addEventListener("click", () => {
      isVoiceEnabled = !isVoiceEnabled;
      btnVoiceToggle.classList.toggle("active", isVoiceEnabled);
      btnVoiceToggle.classList.toggle("muted", !isVoiceEnabled);
      if (voiceToggleIcon) voiceToggleIcon.textContent = isVoiceEnabled ? "🔊" : "🔇";
      if (!isVoiceEnabled) {
        stopSpeech();
      }
    });
  }

  btnTourZoomReset.addEventListener("click", resetTourZoom);
  btnTourZoomAction.addEventListener("click", () => {
    const step = activeTourData.steps[currentTourStepIndex];
    const item = step.items.find(i => i.num === currentTourItemNum);
    if (item) triggerTourSectionZoom(item);
  });

  renderToursMenu();

  // -------------------------------------------------------------------------
  // 8. ACCIONES GENERALES Y ATAJOS DE TECLADO
  // -------------------------------------------------------------------------
  function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) document.exitFullscreen().catch(() => {});
    }
  }
  btnFullscreen.addEventListener("click", toggleFullScreen);

  function toggleHelp(open) {
    modalHelp.classList.toggle("open", open);
  }
  btnHelp.addEventListener("click", () => toggleHelp(true));
  modalClose.addEventListener("click", () => toggleHelp(false));
  modalHelp.addEventListener("click", (e) => {
    if (e.target === modalHelp) toggleHelp(false);
  });

  window.addEventListener("keydown", (e) => {
    if (document.activeElement === pageInput || document.activeElement === hubSearchInput) return;

    switch (e.key) {
      case "h":
      case "H":
        setAppMode("hub");
        break;
      case "r":
      case "R":
        setAppMode("flipbook");
        break;
      case "t":
      case "T":
        if (currentAppMode === "flipbook") {
          const currentPage = pageFlip ? pageFlip.getCurrentPageIndex() + 1 : 1;
          const tourId = (currentBookId === "ms11_t1" || currentBookId === "ms11_t2") ? "fisica11" : "matematicas3";
          setAppMode("tour", { tourId, pageNum: currentPage });
        } else {
          setAppMode("tour", { tourId: activeTourId || "matematicas3" });
        }
        break;
      case "b":
      case "B":
        if (currentAppMode === "flipbook") toggleLibraryMenu();
        else if (currentAppMode === "tour") toggleTourMenu();
        break;
      case "s":
      case "S":
        toggleSoundMenu();
        break;
      case "e":
      case "E":
        if (currentAppMode === "flipbook" && btnToggleStructureLabels) {
          btnToggleStructureLabels.click();
        }
        break;
      case "ArrowRight":
      case "PageDown":
        if (currentAppMode === "flipbook") { e.preventDefault(); goNext(); }
        break;
      case "ArrowLeft":
      case "PageUp":
        if (currentAppMode === "flipbook") { e.preventDefault(); goPrev(); }
        break;
      case "Home":
        if (currentAppMode === "flipbook") { e.preventDefault(); goToPage(1); }
        break;
      case "End":
        if (currentAppMode === "flipbook" && currentBookData) { e.preventDefault(); goToPage(currentBookData.totalPages); }
        break;
      case "+":
      case "=":
        if (currentAppMode === "flipbook") { e.preventDefault(); zoomHandler.zoomIn(); }
        break;
      case "-":
      case "_":
        if (currentAppMode === "flipbook") { e.preventDefault(); zoomHandler.zoomOut(); }
        break;
      case "0":
        if (currentAppMode === "flipbook") { e.preventDefault(); zoomHandler.reset(); }
        else if (currentAppMode === "tour") resetTourZoom();
        break;
      case "Escape":
        closeLibraryMenu();
        closeTourMenu();
        closeSoundMenu();
        toggleHelp(false);
        if (currentAppMode === "flipbook") zoomHandler.reset();
        else if (currentAppMode === "tour") resetTourZoom();
        break;
      case "f":
      case "F":
        toggleFullScreen();
        break;
      case "?":
        toggleHelp(!modalHelp.classList.contains("open"));
        break;
    }
  });

  document.addEventListener("click", (e) => {
    if (libraryMenu && libraryMenu.classList.contains("open") && !libraryMenu.contains(e.target) && !btnLibrary.contains(e.target)) {
      closeLibraryMenu();
    }
    if (tourMenu && tourMenu.classList.contains("open") && !tourMenu.contains(e.target) && !btnTourSelector.contains(e.target)) {
      closeTourMenu();
    }
    if (soundMenu && soundMenu.classList.contains("open") && !soundMenu.contains(e.target) && !btnSound.contains(e.target)) {
      closeSoundMenu();
    }
  });

  // Redimensionamiento de ventana
  let resizeTimer = null;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (currentAppMode === "flipbook" && currentBookData && pageFlip) {
        const newDims = calculateOptimalDimensions(currentBookData.aspectRatio);
        const currPage = pageFlip.getCurrentPageIndex() + 1;
        loadBook(currentBookId, currPage);
      }
    }, 400);
  });

  // -------------------------------------------------------------------------
  // 8.5. SISTEMA DE AVATARES ÉDUCATE COLOMBIA (TOP BAR, COPILOT Y EVALUACIÓN)
  // -------------------------------------------------------------------------
  const AVATARS_DB = [
    {
      id: "mateo",
      name: "Comandante Mateo",
      role: "Líder de Exploración",
      img: "assets/avatares/avatar_char1.png"
    },
    {
      id: "tomas",
      name: "Científico Tomás",
      role: "Especialista Metacognitivo",
      img: "assets/avatares/avatar_char2.png"
    },
    {
      id: "lucas",
      name: "Explorador Lucas",
      role: "Estratega de Retos",
      img: "assets/avatares/avatar_char3.png"
    },
    {
      id: "samuel",
      name: "Científico Samuel",
      role: "Director de Operaciones",
      img: "assets/avatares/avatar_char4.png"
    }
  ];

  let currentAvatarId = localStorage.getItem("educate_selected_avatar_id") || "mateo";
  if (currentAvatarId === "sofia") currentAvatarId = "tomas";
  if (currentAvatarId === "valentina") currentAvatarId = "samuel";

  function getActiveAvatar() {
    return AVATARS_DB.find(a => a.id === currentAvatarId) || AVATARS_DB[0];
  }

  function setActiveAvatar(avatarId) {
    const found = AVATARS_DB.find(a => a.id === avatarId);
    if (!found) return;
    currentAvatarId = avatarId;
    localStorage.setItem("educate_selected_avatar_id", avatarId);
    updateAvatarUI();
    showToast(`Comandante activo: ${found.name}`);
  }

  function updateAvatarUI() {
    const av = getActiveAvatar();

    // 1. Barra Superior
    const topThumb = document.getElementById("top-avatar-thumb");
    const topName = document.getElementById("top-avatar-name");
    if (topThumb) topThumb.src = av.img;
    if (topName) topName.textContent = av.name;

    // 2. Copilot Flotante
    const copilotImg = document.getElementById("copilot-trigger-img");
    const copilotName = document.getElementById("copilot-bubble-name");
    if (copilotImg) copilotImg.src = av.img;
    if (copilotName) copilotName.textContent = av.name;

    // 3. Grid de opciones en Dropdown
    renderAvatarSelectorGrid();
  }

  function renderAvatarSelectorGrid() {
    const grid = document.getElementById("avatar-options-grid");
    if (!grid) return;
    grid.innerHTML = "";

    AVATARS_DB.forEach(a => {
      const card = document.createElement("div");
      card.className = `avatar-option-card ${a.id === currentAvatarId ? "selected" : ""}`;
      card.innerHTML = `
        <img src="${a.img}" class="avatar-option-img" alt="${a.name}">
        <div class="avatar-option-name">${a.name}</div>
        <div class="avatar-option-role">${a.role}</div>
      `;
      card.addEventListener("click", (e) => {
        e.stopPropagation();
        setActiveAvatar(a.id);
        const menu = document.getElementById("avatar-menu");
        if (menu) menu.style.display = "none";
      });
      grid.appendChild(card);
    });
  }

  function updateCopilotForPage(pageNum, totalPages) {
    const bubble = document.getElementById("copilot-speech-bubble");
    const textEl = document.getElementById("copilot-bubble-text");
    const badgeEl = document.getElementById("copilot-bubble-badge");
    const notifDot = document.getElementById("copilot-notification-dot");
    const actionsBox = document.getElementById("copilot-bubble-actions");
    const actionBtn = document.getElementById("copilot-btn-action");
    const actionLabel = document.getElementById("copilot-action-label");

    if (!textEl) return;

    // Verificar si la página tiene Hotspots Pedagógicos DBA
    const pageSpots = (window.PEDAGOGICAL_HOTSPOTS && window.PEDAGOGICAL_HOTSPOTS[currentBookId])
      ? (window.PEDAGOGICAL_HOTSPOTS[currentBookId][String(pageNum)] || [])
      : [];

    // Verificar si hay un Tour disponible para esta unidad
    const hasMs3Tour = (currentBookId === "ms3" && pageNum >= 180 && pageNum <= 198);
    const hasMs11Tour = (currentBookId === "ms11_t1" && pageNum >= 208 && pageNum <= 218);

    if (pageSpots.length > 0) {
      if (notifDot) notifDot.style.display = "flex";
      if (badgeEl) badgeEl.textContent = `Pág. ${pageNum} • ${pageSpots.length} Puntos`;
      textEl.innerHTML = `¡Atención! En esta página tienes <strong>${pageSpots.length} Punto${pageSpots.length > 1 ? "s" : ""} de Control</strong> con Derechos Básicos de Aprendizaje. Pulsa cada etiqueta para revisar el reto y su justificación.`;
    } else if (hasMs3Tour || hasMs11Tour) {
      if (notifDot) notifDot.style.display = "flex";
      if (badgeEl) badgeEl.textContent = "Tour Pedagógico";
      textEl.innerHTML = `¡Misión guiada disponible! Esta unidad cuenta con un <strong>Tour Pedagógico Interactivo</strong> para recorrerla paso a paso.`;
    } else {
      if (notifDot) notifDot.style.display = "none";
      if (badgeEl) badgeEl.textContent = `Pág. ${pageNum} de ${totalPages}`;
      textEl.textContent = `¡Buen viaje por la Misión! Avanza de página o activa la pantalla completa para una lectura inmersiva.`;
    }

    if (actionsBox && actionBtn && actionLabel) {
      if (hasMs3Tour) {
        actionsBox.style.display = "block";
        actionLabel.textContent = "Iniciar Tour: Matemáticas 3°";
        actionBtn.onclick = () => {
          if (bubble) bubble.style.display = "none";
          setAppMode("tour", { tourId: "matematicas3", pageNum: pageNum });
        };
      } else if (hasMs11Tour) {
        actionsBox.style.display = "block";
        actionLabel.textContent = "Iniciar Tour: Física 11°";
        actionBtn.onclick = () => {
          if (bubble) bubble.style.display = "none";
          setAppMode("tour", { tourId: "fisica11", pageNum: pageNum });
        };
      } else {
        actionsBox.style.display = "none";
      }
    }
  }

  function initAvatarSystem() {
    updateAvatarUI();

    // Toggle Dropdown en Header
    const btnAvatarSelector = document.getElementById("btn-avatar-selector");
    const avatarMenu = document.getElementById("avatar-menu");

    if (btnAvatarSelector && avatarMenu) {
      btnAvatarSelector.addEventListener("click", (e) => {
        e.stopPropagation();
        const isOpen = avatarMenu.style.display === "block";
        avatarMenu.style.display = isOpen ? "none" : "block";
        // Cerrar menú de sonido si está abierto
        const soundMenu = document.getElementById("sound-menu");
        if (soundMenu) soundMenu.classList.remove("active");
      });
    }

    // Cerrar menú al hacer clic afuera
    document.addEventListener("click", (e) => {
      if (avatarMenu && !avatarMenu.contains(e.target) && !e.target.closest("#btn-avatar-selector")) {
        avatarMenu.style.display = "none";
      }
    });

    // Copilot Trigger & Bubble
    const copilotTrigger = document.getElementById("btn-copilot-trigger");
    const copilotBubble = document.getElementById("copilot-speech-bubble");
    const btnCloseBubble = document.getElementById("btn-close-copilot-bubble");

    if (copilotTrigger && copilotBubble) {
      copilotTrigger.addEventListener("click", (e) => {
        e.stopPropagation();
        const isHidden = copilotBubble.style.display === "none";
        copilotBubble.style.display = isHidden ? "block" : "none";
        const notifDot = document.getElementById("copilot-notification-dot");
        if (notifDot && isHidden) notifDot.style.display = "none";
      });
    }

    if (btnCloseBubble && copilotBubble) {
      btnCloseBubble.addEventListener("click", (e) => {
        e.stopPropagation();
        copilotBubble.style.display = "none";
      });
    }
  }

  // -------------------------------------------------------------------------
  // 9. ENRUTADOR POR HASH Y CARGA INICIAL
  // -------------------------------------------------------------------------
  function handleRoute() {
    const rawHash = window.location.hash.replace("#", "").trim();

    if (!rawHash || rawHash === "hub") {
      setAppMode("hub");
    } else if (rawHash.startsWith("tour/")) {
      const parts = rawHash.replace("tour/", "").split("/");
      const tourId = parts[0];
      const pageNum = parts[1] ? parseInt(parts[1], 10) : null;
      setAppMode("tour", { tourId, pageNum });
    } else if (rawHash.startsWith("revista/") || rawHash.startsWith("flipbook/")) {
      const parts = rawHash.replace(/^(revista|flipbook)\//, "").split("/");
      const bookId = parts[0];
      const page = parts[1] ? parseInt(parts[1], 10) : 1;
      setAppMode("flipbook", { bookId, page });
    } else if (booksLibrary.some(b => b.id === rawHash)) {
      setAppMode("flipbook", { bookId: rawHash });
    } else {
      // Regla de Inicio: Al abrir la aplicación SIEMPRE comienza por el Ecosistema (Hub)
      setAppMode("hub");
    }
  }

  window.addEventListener("hashchange", handleRoute);

  // Inicialización
  initAvatarSystem();
  renderLibraryMenu();
  handleRoute();
});
