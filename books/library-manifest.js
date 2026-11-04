// Catálogo Maestro de Libros para Visor Flipbook - Misión Saber
// Solo incluye Misión 1 para protección de propiedad intelectual

window.BOOKS_LIBRARY = [
  {
    "id": "ms9",
    "title": "Misión Saber 9° • Lenguaje",
    "subtitle": "Misión 1: Veo, Interpreto y Comunico mi Entorno",
    "grade": "9°",
    "badge": "9° SECUNDARIA",
    "totalPages": 29,
    "baseWidth": 1241,
    "baseHeight": 1536,
    "aspectRatio": 0.8079,
    "pages": Array.from({ length: 29 }, (_, i) => `books/ms9/page_${String(i + 1).padStart(3, '0')}.jpg`)
  },
  {
    "id": "ms11_t2",
    "title": "Misión Saber 11° • Matemáticas (Tomo 2)",
    "subtitle": "Misión 1: Numérico - Variacional (Págs. 1 a 17)",
    "grade": "11°",
    "badge": "11° MEDIA",
    "totalPages": 17,
    "baseWidth": 1241,
    "baseHeight": 1536,
    "aspectRatio": 0.8079,
    "pages": Array.from({ length: 17 }, (_, i) => `books/ms11_tomo2/page_${String(i + 1).padStart(3, '0')}.jpg`)
  }
];
