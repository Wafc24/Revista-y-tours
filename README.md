# Ecosistema Misión Saber • Libros Digitales y Tours Pedagógicos

Plataforma educativa interactiva desarrollada para **Grupo Educate Colombia**, orientada a la presentación pedagógica inmersiva de los textos escolares **Misión Saber** y el entrenamiento estratégico para las pruebas de Estado **ICFES Saber**.

---

## 🚀 Características Principales

### 1. Visor de Revistas Digitales (Flipbook 3D)
* **Experiencia de lectura inmersiva** con simulación de pase de página en 3D, soporte para doble página en pantallas panorámicas y vista simple en dispositivos móviles.
* **Zoom interactivo y navegación suave** con control de acercamiento, arrastre y centrado dinámico.
* **Selección rápida de libros** mediante menú desplegable y Centro de Control (Hub).
* **Muestras pedagógicas protegidas (Misión 1)**:
  * **Grado 9° • Lenguaje / Lectura Crítica**: Páginas 1 a 29 (Misión 1 completa con enfoque de 4 Fases).
  * **Grado 11° • Matemáticas (Tomo 2)**: Páginas 1 a 17 (Misión 1 completa con enfoque de 4 Pasos e ítems ICFES).

### 2. Tours Pedagógicos Guiados con Voz
* **Recorridos automatizados paso a paso** con avatares narradores pedagógicos:
  * **Tour 3° Primaria (Matemáticas)**: Recorrido por las 4 Fases formativas (Centro de Comando, Simulador de Vuelo, Exploración y Avances).
  * **Tour 11° Educación Media (Física)**: Recorrido por los 4 Pasos metodológicos (Abordaje, Zona de Entrenamiento, Bitácora y Prueba de Campo).
* **Síntesis de voz natural en español**: Motor integrado de locución con avatar interactivo.
* **Efectos de sonido hápticos**: Sonidos realistas de papel, revista y pase de página con control de volumen y selector de temas sonoros.

### 3. Etiquetas Didácticas e Ítems ICFES Saber 11
* **Etiquetas de Estructura Didáctica (Fases y Pasos)**: Señalización contextual con recuadros delimitadores que explican la función pedagógica de cada sección del libro.
* **Etiquetas de Preguntas Saber 11 (Prueba de Campo)**:
  * Etiquetas fijas de color azul para cada ítem de evaluación.
  * **Matriz 100% oficial de la Guía de Orientación ICFES Saber 11**:
    * **Componente**: *Numérico - variacional*, *Espacial - métrico* o *Aleatorio*.
    * **Competencia**: *Interpretación y representación*, *Formulación y ejecución* o *Argumentación*.
    * **Afirmación oficial** y **Evidencia evaluada** textuales.
    * **Clave oficial y justificación matemática** con demostración paso a paso del procedimiento correcto.
    * Orientación didáctica y tips estratégicos del avatar.

### 4. Protección Integral de Propiedad Intelectual
* **Doble sistema de marca de agua**:
  * Estampado permanente en las imágenes: `GRUPO EDUCATE COLOMBIA • MISIÓN SABER • MATERIAL DE MUESTRA • PROPIEDAD RESERVADA`.
  * Advertencia legal en el pie de página: `GRUPO EDUCATE COLOMBIA - MUESTRA PEDAGÓGICA CONFIDENCIAL - PROHIBIDA SU REPRODUCCIÓN`.
* **Capa CSS anti-extracción**: Bloqueo de arrastre de imágenes (`user-drag: none`), selección de texto y descarga directa por clic derecho.

---

## 📂 Estructura del Proyecto

```text
├── index.html                   # Punto de entrada principal y visor web
├── README.md                    # Documentación del proyecto
├── LICENSE                      # Licencia de uso y derechos reservados
├── .gitignore                   # Exclusiones de control de versiones
├── assets/                      # Recursos multimedia
│   ├── avatares/                # Ilustraciones de avatares pedagógicos
│   └── sounds/                  # Efectos sonoros de pase de página
├── books/                       # Biblioteca de libros en muestra
│   ├── library-manifest.js      # Catálogo maestro de libros para el visor
│   ├── library.json             # Metadatos estructurados de la biblioteca
│   ├── ms3/                     # Páginas clave del Tour de Matemáticas 3°
│   ├── ms9/                     # Páginas 1 a 29 (Misión 1 de Lenguaje 9°)
│   ├── ms11_tomo1/              # Páginas clave del Tour de Física 11°
│   └── ms11_tomo2/              # Páginas 1 a 17 (Misión 1 de Matemáticas 11°)
├── css/                         # Hojas de estilo
│   ├── styles.css               # Estilos globales, visor, popovers y marca de agua
│   └── theme-fisica.css         # Tema visual para el módulo de Física
└── js/                          # Lógica y scripts de la aplicación
    ├── app.js                   # Controlador principal del ecosistema
    ├── pedagogical-hotspots.js  # Base de datos de etiquetas didácticas e ICFES
    ├── tours-catalog.js         # Catálogo de pasos, audios y textos de los tours
    ├── zoom-handler.js          # Motor de zoom y arrastre del visor
    └── libs/                    # Bibliotecas locales (PageFlip, KaTeX, etc.)
```

---

## 💻 Instrucciones de Uso y Despliegue

### Ejecución Local
1. Clona o descarga este repositorio en tu equipo.
2. Abre el archivo `index.html` directamente en cualquier navegador moderno (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari).
3. No requiere compilación ni dependencias externas; funciona 100% de manera estática y sin conexión a internet.

### Despliegue en GitHub Pages
1. Sube este repositorio a tu cuenta de GitHub.
2. Ingresa a la sección **Settings** del repositorio.
3. En la barra lateral izquierda, selecciona **Pages**.
4. En **Branch**, selecciona `main` (o `master`) y la carpeta `/ (root)`.
5. Haz clic en **Save**. En pocos segundos tu plataforma estará disponible en línea con URL pública.

---

## 🔒 Derechos Reservados y Propiedad Intelectual

Todo el contenido curricular, pedagógico, gráfico y narrativo de este ecosistema es propiedad intelectual exclusiva de:

**GRUPO EDUCATE COLOMBIA**  
*Material de muestra confidencial. Prohibida su copia, distribución, reproducción parcial o total con fines comerciales sin autorización expresa por escrito de los titulares de los derechos.*
