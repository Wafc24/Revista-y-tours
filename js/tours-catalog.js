/**
 * Catálogo Maestro de Tours Guiados Pedagógicos
 * ============================================
 * Contiene los datasets pedagógicos de:
 * 1. Misión Saber 3° - Matemáticas (Fases 1 a 4)
 * 2. Misión Saber 11° - Física (Pasos 1 a 4)
 */

window.TOURS_CATALOG = [
  {
    id: "matematicas3",
    title: "Misión Saber 3° • Matemáticas",
    shortTitle: "3° Matemáticas",
    subtitle: "Educación Básica Primaria • Enfoque por Fases",
    gradeBadge: "3° PRIMARIA",
    subjectBadge: "MATEMÁTICAS",
    icon: "📐",
    coverImg: "books/ms3/page_001.jpg",
    previewImg: "books/ms3/page_180.jpg",
    theme: "theme-matematicas",
    bookId: "ms3",
    bookStartPage: 180,
    stepsUnitName: "Fase",
    stepsUnitPlural: "Fases",
    description: "Recorrido pedagógico paso a paso por las 4 fases de la Unidad de Matemáticas (Págs. 180 a 198), con contextualización, modelado metacognitivo, conceptualización y prueba de campo.",
    steps: [
      {
        id: "fase1",
        stepNum: 1,
        title: "Fase 1: Centro de Comando",
        badge: "Fase 1 • Centro de Comando (Págs. 180 - 181)",
        purpose: "Contextualizar el aprendizaje, motivar al estudiante y activar sus presaberes antes de abordar los conceptos formales de matemáticas.",
        pages: [
          { pageNumber: 180, label: "Pág. 180 (Puntos 1 al 5)", imageSrc: "books/ms3/page_180.jpg" },
          { pageNumber: 181, label: "Pág. 181 (Puntos 6 al 8)", imageSrc: "books/ms3/page_181.jpg" }
        ],
        avatar: { name: "Comandante Mateo", role: "Líder de Misión", src: "assets/avatares/avatar_fase1.png" },
        items: [
          {
            num: 1,
            pageNumber: 180,
            top: 32.5,
            left: 8.9,
            shortLabel: "1. Título de Misión",
            title: "1. El Título de Misión (Activando el sistema de navegación)",
            explanation: "Rompe con el esquema tradicional de 'Unidad 1'. Convierte la clase de matemáticas en una misión espacial donde el estudiante es el protagonista (comandante).",
            pedagogy: "Estimula la motivación intrínseca y da un sentido narrativo al aprendizaje."
          },
          {
            num: 2,
            pageNumber: 180,
            top: 45.0,
            left: 19.5,
            shortLabel: "2. ¿Cuál es el desafío?",
            title: "2. ¿Cuál es nuestro desafío?",
            explanation: "Presenta el problema a resolver. Conecta las matemáticas con situaciones concretas (organizar información, reconocer patrones, analizar señales) en lugar de presentar números aislados.",
            pedagogy: "Plantea un aprendizaje basado en problemas y retos contextualizados."
          },
          {
            num: 3,
            pageNumber: 180,
            top: 63.5,
            left: 19.5,
            shortLabel: "3. Reto de la Misión",
            title: "3. Reto de la Misión",
            explanation: "Es el objetivo de aprendizaje planteado como una meta alcanzable (crear un mapa del planeta usando datos y patrones). Le da sentido a todo lo que se hará en la unidad.",
            pedagogy: "Define metas claras y alcanzables que orientan la auto-evaluación."
          },
          {
            num: 4,
            pageNumber: 180,
            top: 80.5,
            left: 55.0,
            shortLabel: "4. Cápsula ECO",
            title: "4. Cápsula ECO",
            explanation: "Espacio vital para la educación socioemocional. En matemáticas, la frustración es común. Aquí se enseña a identificar emociones y valorar las ideas de los compañeros al resolver problemas.",
            pedagogy: "Desarrolla habilidades socioemocionales indispensables para la resiliencia en ciencias."
          },
          {
            num: 5,
            pageNumber: 180,
            top: 88.0,
            left: 10.0,
            shortLabel: "5. Conexión Space-Gec",
            title: "5. Conexión Space-Gec (Plataforma Digital)",
            explanation: "Integración inmediata del ecosistema digital. El estudiante es invitado a ampliar la narrativa espacial mediante un video interactivo, uniendo el libro físico con la plataforma.",
            pedagogy: "Articula el aula física con el entorno digital y el ecosistema híbrido."
          },
          {
            num: 6,
            pageNumber: 181,
            top: 14.5,
            left: 6.8,
            shortLabel: "6. Actividad Diagnóstico",
            title: "6. Actividad Diagnóstico (Despegamos... ¿Qué sabemos?)",
            explanation: "No es un examen punitivo. Es un 'calentamiento' cognitivo (ej. comparar y ordenar números en meteoritos) para que el docente identifique cómo llegan los estudiantes.",
            pedagogy: "Evaluación diagnóstica formativa sin calificación punitiva."
          },
          {
            num: 7,
            pageNumber: 181,
            top: 45.5,
            left: 6.8,
            shortLabel: "7. Diccionario de Misión",
            title: "7. Diccionario de la Misión",
            explanation: "Estandarización del lenguaje matemático. Conceptos clave (número, patrón, secuencia) definidos de forma sencilla para que todos hablen el mismo idioma durante la misión.",
            pedagogy: "Nivelación del vocabulario disciplinar para evitar confusiones semánticas."
          },
          {
            num: 8,
            pageNumber: 181,
            top: 41.0,
            left: 49.0,
            shortLabel: "8. Navegando Misión",
            title: "8. Navegando por la Misión",
            explanation: "Un mapa de ruta. Le explica al estudiante (y al docente) qué pasará en cada una de las 4 fases de la unidad, promoviendo la autonomía y la organización.",
            pedagogy: "Fomenta la autorregulación metacognitiva y la claridad de ruta de aprendizaje."
          }
        ]
      },
      {
        id: "fase2",
        stepNum: 2,
        title: "Fase 2: Simulador de Vuelo",
        badge: "Fase 2 • Simulador de Vuelo (Pág. 182)",
        purpose: "Enseñar explícitamente el razonamiento metacognitivo para resolver problemas tipo prueba estandarizada (ICFES Saber).",
        pages: [
          { pageNumber: 182, label: "Pág. 182 (Puntos 1 y 2)", imageSrc: "books/ms3/page_182.jpg" }
        ],
        avatar: { name: "Científico Tomás", role: "Especialista Metacognitivo", src: "assets/avatares/avatar_fase2.png" },
        items: [
          {
            num: 1,
            pageNumber: 182,
            top: 17.5,
            left: 7.5,
            shortLabel: "1. Pilota tu conocimiento",
            title: "1. Pilota tu conocimiento (Las 4 Reglas de Oro)",
            explanation: "Enseña el 'cómo pensar':\n• Lupa (Identifica): Comprender qué pide el problema.\n• Brújula (Rastrea): Buscar los datos útiles (números, patrones).\n• Cerebro (Activa): Elegir la operación o estrategia matemática adecuada.\n• Aterrizaje (Responde): Comprobar la respuesta y argumentar por qué es correcta.",
            pedagogy: "Modelado metacognitivo explícito paso a paso."
          },
          {
            num: 2,
            pageNumber: 182,
            top: 53.0,
            left: 7.5,
            shortLabel: "2. Punto de Control Modelado",
            title: "2. Punto de Control Modelado",
            explanation: "No se le pide al estudiante que resuelva solo todavía. El libro le muestra un ítem real (una secuencia numérica) y desglosa frente a él cómo se aplican los 4 pasos anteriores para llegar a la respuesta correcta de forma estructurada.",
            pedagogy: "Andamiaje pedagógico guiado para evitar la frustración en pruebas tipo Saber."
          }
        ]
      },
      {
        id: "fase3",
        stepNum: 3,
        title: "Fase 3: Exploración",
        badge: "Fase 3 • Exploración de la Misión (Págs. 183, 184 y 195)",
        purpose: "Desarrollo del componente disciplinar mediante la conceptualización, la práctica (taller) y la evaluación formativa.",
        pages: [
          { pageNumber: 183, label: "Pág. 183 (Puntos 1 al 4)", imageSrc: "books/ms3/page_183.jpg" },
          { pageNumber: 184, label: "Pág. 184 (Puntos 5 y 6)", imageSrc: "books/ms3/page_184.jpg" },
          { pageNumber: 195, label: "Pág. 195 (Punto 7: Control Reforzado)", imageSrc: "books/ms3/page_195.jpg" }
        ],
        avatar: { name: "Explorador Lucas", role: "Entrenador de Campo", src: "assets/avatares/avatar_fase3.png" },
        items: [
          {
            num: 1,
            pageNumber: 183,
            top: 15.0,
            left: 7.0,
            shortLabel: "1. Numérico - Variacional",
            title: "1. Numérico - Variacional",
            explanation: "Identificación clara del componente evaluado por el ICFES que se está trabajando.",
            pedagogy: "Transparencia curricular frente al estándar del Ministerio de Educación."
          },
          {
            num: 2,
            pageNumber: 183,
            top: 21.0,
            left: 60.0,
            shortLabel: "2. Observando el Planeta",
            title: "2. Observando el Planeta (Conceptualización)",
            explanation: "La teoría matemática no es árida; se presenta integrada a la narrativa de la misión (ej. el extraterrestre que compara cantidades de cristales de energía).",
            pedagogy: "Gamificación y narrativa espacial para una asimilación conceptual amigable."
          },
          {
            num: 3,
            pageNumber: 183,
            top: 50.5,
            left: 6.5,
            shortLabel: "3. Punto de Control",
            title: "3. Punto de Control",
            explanation: "Una pregunta tipo Saber intercalada en el aprendizaje. Exige que el estudiante aplique lo aprendido de inmediato y justifique su respuesta, fomentando la argumentación matemática.",
            pedagogy: "Evaluación formativa continua para consolidar de inmediato cada noción."
          },
          {
            num: 4,
            pageNumber: 183,
            top: 51.0,
            left: 50.0,
            shortLabel: "4. Manos a la obra",
            title: "4. Manos a la obra",
            explanation: "La sección práctica de la clase. Ejercicios donde el estudiante actúa como 'detective' o constructor, aplicando la suma, la multiplicación o la comparación de números con objetos tangibles.",
            pedagogy: "Aprendizaje activo con material manipulativo y retos de aplicación."
          },
          {
            num: 5,
            pageNumber: 184,
            top: 8.0,
            left: 6.5,
            shortLabel: "5. Laboratorio en Casa",
            title: "5. Laboratorio en Casa",
            explanation: "Extiende el aprendizaje fuera del aula, involucrando a la familia con materiales cotidianos (recipientes y semillas) para afianzar conceptos como la adición.",
            pedagogy: "Corresponsabilidad familiar y anclaje de las matemáticas a la vida cotidiana."
          },
          {
            num: 6,
            pageNumber: 184,
            top: 78.5,
            left: 6.0,
            shortLabel: "6. Datos de la Misión",
            title: "6. Datos de la Misión",
            explanation: "Datos curiosos que conectan la matemática abstracta con el mundo real o el contexto espacial (ej. cómo los astronautas gestionan recursos sumando cantidades).",
            pedagogy: "Cultura general STEM para despertar la vocación científica."
          },
          {
            num: 7,
            pageNumber: 195,
            top: 4.5,
            left: 6.5,
            shortLabel: "7. Punto de Control Reforzado",
            title: "7. Punto de Control Reforzado (Pág. 195)",
            explanation: "Batería de 7 preguntas tipo Saber (opción múltiple) al final de la fase 3. Evalúan los aprendizajes acumulados, marcando explícitamente qué competencia miden.",
            pedagogy: "Medición diagnóstica de cierre de fase previa al simulacro formal."
          }
        ]
      },
      {
        id: "fase4",
        stepNum: 4,
        title: "Fase 4: Informando Avances",
        badge: "Fase 4 • Informando Avances (Págs. 196 y 198)",
        purpose: "Consolidación final, evaluación sumativa (simulacro) y cierre del ciclo de aprendizaje.",
        pages: [
          { pageNumber: 196, label: "Pág. 196 (Puntos 1 y 2)", imageSrc: "books/ms3/page_196.jpg" },
          { pageNumber: 198, label: "Pág. 198 (Puntos 3 y 4)", imageSrc: "books/ms3/page_198.jpg" }
        ],
        avatar: { name: "Científico Samuel", role: "Director de Evaluación", src: "assets/avatares/avatar_fase4.png" },
        items: [
          {
            num: 1,
            pageNumber: 196,
            top: 32.5,
            left: 8.5,
            shortLabel: "1. Proyecto final",
            title: "1. Proyecto final",
            explanation: "Se menciona la socialización en la plataforma digital. Es el espacio para que el trabajo individual se convierta en una construcción colectiva.",
            pedagogy: "Evaluación por proyectos y socialización colectiva de saberes."
          },
          {
            num: 2,
            pageNumber: 196,
            top: 55.0,
            left: 9.5,
            shortLabel: "2. Prueba de Campo",
            title: "2. Prueba de Campo (10 preguntas)",
            explanation: "Un mini-simulacro riguroso diseñado bajo la Estructura Basada en Evidencias (EBE) del ICFES. El estudiante se enfrenta a un cuadernillo real donde debe rellenar óvalos, manejando tiempos y contextos matemáticos.",
            pedagogy: "Entrenamiento real bajo condiciones de prueba Saber estandarizada."
          },
          {
            num: 3,
            pageNumber: 198,
            top: 64.0,
            left: 41.0,
            shortLabel: "3. Conexión SpaceGec",
            title: "3. Conexión SpaceGec (Profundización)",
            explanation: "El libro físico llega a su límite, pero el aprendizaje continúa. Se remite al estudiante a la plataforma para resolver 15 preguntas adicionales, generando analítica de datos para el docente.",
            pedagogy: "Analítica de aprendizaje y profundización personalizada en plataforma."
          },
          {
            num: 4,
            pageNumber: 198,
            top: 81.5,
            left: 11.5,
            shortLabel: "4. Finalización Misión",
            title: "4. Finalización de la Misión",
            explanation: "Un cierre narrativo que celebra el esfuerzo del estudiante y lo deja en suspenso y motivado para el próximo desafío (la siguiente misión/unidad).",
            pedagogy: "Cierre emocional positivo y motivación para el siguiente ciclo escolar."
          }
        ]
      }
    ]
  },
  {
    id: "fisica11",
    title: "Misión Saber 11° • Física",
    shortTitle: "11° Física",
    subtitle: "Educación Media • Enfoque por Pasos ICFES Saber 11",
    gradeBadge: "11° MEDIA",
    subjectBadge: "FÍSICA",
    icon: "⚛",
    coverImg: "books/ms11_tomo1/page_207.jpg",
    previewImg: "books/ms11_tomo1/page_208.jpg",
    theme: "theme-fisica",
    bookId: "ms11_t1",
    bookStartPage: 208,
    stepsUnitName: "Paso",
    stepsUnitPlural: "Pasos",
    description: "Recorrido pedagógico paso a paso por los 4 pasos del Módulo de Física (Mecánica Clásica, Págs. 208 a 218), con abordaje de variables, modelado metacognitivo Saber 11, bitácora de leyes newtonianas y prueba sumativa EBE.",
    steps: [
      {
        id: "paso1",
        stepNum: 1,
        title: "Paso 1: Abordaje",
        badge: "Paso 1 • Abordaje de la Misión (Pág. 208)",
        purpose: "Contextualizar el reto científico, delimitar el fenómeno físico a estudiar (Mecánica Clásica) y afianzar el lenguaje riguroso de variables antes de entrar al análisis matemático formal.",
        pages: [
          { pageNumber: 208, label: "Pág. 208 • Abordaje, Glosario y Compendio", imageSrc: "books/ms11_tomo1/page_208.jpg" }
        ],
        avatar: { name: "Comandante Mateo", role: "Cátedra Saber 11", src: "assets/avatares/avatar_fase1.png" },
        items: [
          {
            num: 1,
            pageNumber: 208,
            top: 53.0,
            left: 4.0,
            shortLabel: "1. Título de Misión",
            title: "1. Título de la Misión: Mecánica Clásica",
            explanation: "Despierta el interés inmediato y contextualiza el aprendizaje situando la física en preguntas reales: ¿Y si lo dejamos caer? Conecta el componente de Mecánica Clásica con situaciones de la vida cotidiana y la tecnología, superando la visión abstracta y memorística.",
            pedagogy: "Función del título: Establece el marco pedagógico y motivacional de la misión. La física en Saber 11 no evalúa memorizar fórmulas vacías, sino comprender los principios que gobiernan el movimiento y la conservación de la energía en el universo."
          },
          {
            num: 2,
            pageNumber: 208,
            top: 17.0,
            left: 22.0,
            shortLabel: "2. Objetivo de Misión",
            title: "2. Objetivo de la Misión",
            explanation: "Define con claridad la meta formativa y el estándar de evaluación del ICFES: desarrollar la habilidad para reconocer preguntas investigables y procedimientos adecuados en fenómenos físicos de movimiento, así como interpretar datos y gráficos derivados de experimentos sencillos.",
            pedagogy: "Función del objetivo: Hace explícita la intención pedagógica para que el estudiante conozca desde el inicio la meta de aprendizaje y los desempeños esperados en la prueba Saber 11."
          },
          {
            num: 3,
            pageNumber: 208,
            top: 28.0,
            left: 28.0,
            shortLabel: "3. Glosario para Misión",
            title: "3. Glosario para la Misión",
            explanation: "Brinda el andamiaje conceptual y terminológico esencial: define con rigor la indagación científica, la variable dependiente (lo que se mide), la variable independiente (lo que se manipula deliberadamente), el MRUA y la interpretación de gráficas de posición vs. tiempo.",
            pedagogy: "Función del glosario: Garantiza la precisión conceptual y elimina ambigüedades de vocabulario, permitiendo al estudiante abordar los retos con un lenguaje científico riguroso."
          },
          {
            num: 4,
            pageNumber: 208,
            top: 54.5,
            left: 25.0,
            shortLabel: "4. Compendio de Misión",
            title: "4. Compendio de la Misión",
            explanation: "Sintetiza las leyes físicas fundamentales de la mecánica clásica y el MRUA con aceleración constante (en caída libre la aceleración es g, y en un plano inclinado sin fricción es a = g · sen(θ)). Enfatiza que comprender el movimiento requiere observar, proponer hipótesis y analizar datos experimentales para explicar por qué cambia la velocidad.",
            pedagogy: "Función del compendio: Conecta los conceptos teóricos y la formulación matemática con su significado físico real y experimental, guiando al estudiante a razonar con modelos científicos en lugar de memorizar algoritmos a ciegas."
          },
          {
            num: 5,
            pageNumber: 208,
            top: 72.5,
            left: 16.5,
            shortLabel: "5. Conexión SpaceGec",
            title: "5. Conexión SpaceGec",
            explanation: "Conecta el libro con la plataforma digital interactiva SpaceGec, invitando al estudiante a ingresar al entorno virtual para realizar su prueba de diagnóstico inicial y acceder a recursos complementarios en línea.",
            pedagogy: "Función de la conexión SpaceGec: Articula el libro físico y digital con la analítica de aprendizaje en tiempo real, permitiendo diagnosticar presaberes y personalizar la ruta de entrenamiento del estudiante."
          }
        ]
      },
      {
        id: "paso2",
        stepNum: 2,
        title: "Paso 2: Entrenamiento",
        badge: "Paso 2 • Zona de Entrenamiento ICFES (Págs. 209 - 211)",
        purpose: "Entrenar el razonamiento metacognitivo frente a preguntas tipo Saber 11, enseñando al estudiante a rastrear pistas en el texto, anticipar patrones y analizar la anatomía de la clave frente a los distractores.",
        pages: [
          { pageNumber: 209, label: "Pág. 209 • Pregunta Modelo", imageSrc: "books/ms11_tomo1/page_209.jpg" },
          { pageNumber: 210, label: "Pág. 210 • Actividades 1 y 2", imageSrc: "books/ms11_tomo1/page_210.jpg" },
          { pageNumber: 211, label: "Pág. 211 • Anatomía y Decisión", imageSrc: "books/ms11_tomo1/page_211.jpg" }
        ],
        avatar: { name: "Científico Tomás", role: "Tutor Metacognitivo", src: "assets/avatares/avatar_fase2.png" },
        items: [
          {
            num: 1,
            pageNumber: 209,
            top: 13.0,
            left: 9.0,
            shortLabel: "1. Pregunta Modelo",
            title: "1. Pregunta Modelo",
            explanation: "Presenta una situación problema auténtica contextualizada en un laboratorio escolar donde tres estudiantes investigan cómo influye el ángulo de inclinación (15°, 30°, 45°) en el tiempo de desplazamiento de un bloque sobre planos inclinados de 1 m, solicitando identificar el procedimiento más adecuado para comprobar la hipótesis del estudiante.",
            pedagogy: "Función de la pregunta modelo: Sirve como modelado cognitivo guiado bajo el estándar de evaluación del ICFES, enseñando cómo se lee y deconstruye un reto real de indagación científica en ciencias naturales."
          },
          {
            num: 2,
            pageNumber: 209,
            top: 23.0,
            left: 4.0,
            shortLabel: "2. Elementos Pregunta",
            title: "2. Elementos que Componen la Pregunta Modelo",
            explanation: "Desglosa la matriz técnica del ICFES: Componente Físico (Mecánica Clásica), Competencia (Indagación) y Evidencia (Interpreta y analiza datos representados en texto, gráficas, dibujos, diagramas o tablas).",
            pedagogy: "Función de los elementos de la pregunta: Transparenta los criterios de evaluación del examen de Estado. Permite al estudiante pensar como el evaluador, identificando qué habilidad cognitiva y qué evidencia específica se le está exigiendo demostrar."
          },
          {
            num: 3,
            pageNumber: 209,
            top: 13.5,
            left: 60.0,
            shortLabel: "3. El Avatar Guía",
            title: "3. El Avatar Pedagógico",
            explanation: "El avatar interviene con una advertencia clave: 'Antes de elegir la opción definitiva, verifiquemos si tu hipótesis es correcta. Avanza a las siguientes actividades, donde encontrarás la información esencial para sustentar tu respuesta con evidencia'.",
            pedagogy: "Función del avatar en este punto: Actúa como mediador metacognitivo que frena la impulsividad del estudiante, promoviendo la autorregulación y guiándolo a buscar respaldo empírico en las actividades antes de seleccionar una opción."
          },
          {
            num: 4,
            pageNumber: 209,
            top: 35.5,
            left: 55.0,
            shortLabel: "4. Apuntes para Misión",
            title: "4. Apuntes para la Misión",
            explanation: "Brinda una caja de herramientas estratégicas: Punto de partida (identificar verbos de indagación como predecir, comprobar o proponer), Errores comunes (cambiar más de una variable a la vez, o resolver aplicando fórmulas sin justificar el diseño experimental), Recursos clave (a = 2d/t², t = √(2d/a), a = g · sen(θ)) y Conceptos esenciales del MRUA.",
            pedagogy: "Función de los apuntes para la misión: Proporciona andamiaje heurístico y metacognitivo para evitar trampas frecuentes y enfocar el razonamiento en el diseño experimental correcto."
          },
          {
            num: 5,
            pageNumber: 210,
            top: 10.0,
            left: 8.5,
            shortLabel: "5. Actividad 1",
            title: "5. Actividad 1: Reto de Competencias",
            explanation: "Presenta cuatro enunciados para que el estudiante clasifique cuáles corresponden a una pregunta de indagación científica y justifique su elección. ¿Por qué son dos actividades? Porque la Actividad 1 entrena la discriminación conceptual y cualitativa de competencias, mientras que la Actividad 2 entrena la aplicación cuantitativa y predicción con datos numéricos.",
            pedagogy: "Función y objetivo de la Actividad 1: Desarrollar la capacidad metacognitiva de distinguir preguntas que exigen comprobar hipótesis o diseñar experimentos frente a preguntas de cálculo o definición memorística."
          },
          {
            num: 6,
            pageNumber: 210,
            top: 64.5,
            left: 9.0,
            shortLabel: "6. Actividad 2",
            title: "6. Actividad 2: Predice el Patrón",
            explanation: "A partir de una tabla experimental con ángulos de 20° (2.6 s), 40° (1.9 s) y 50° (1.6 s), desafía al estudiante a predecir si para 60° el tiempo será mayor o menor a 1.6 s, y a describir cómo comprobaría su predicción. El fin de ambas actividades (1 y 2) es consolidar el pensamiento científico práctico, pasando de la teoría a la formulación de hipótesis y su verificación experimental.",
            pedagogy: "Función y fin de ambas actividades: Llevar al estudiante a experimentar el ciclo de la indagación: clasificar la demanda de la pregunta, analizar tablas de datos, predecir tendencias y proponer métodos de contrastación empírica."
          },
          {
            num: 7,
            pageNumber: 211,
            top: 15.0,
            left: 16.0,
            shortLabel: "7. El Avatar Guía",
            title: "7. El Avatar Pedagógico: Acompañamiento y Cierre",
            explanation: "El avatar acompaña al estudiante al completar la Zona de entrenamiento: 'Estás a punto de completar la Zona de entrenamiento y ya tienes lo necesario para descubrir la solución. Ahora analizarás la anatomía de la respuesta para comprender por qué una opción es correcta y cómo evitar los distractores. Así pasarás del análisis a la decisión'.",
            pedagogy: "Función del avatar en este punto: Refuerza la autoeficacia y confianza del estudiante, orientando la transición del análisis de datos hacia la resolución argumentada y estratégica de la pregunta modelo."
          },
          {
            num: 8,
            pageNumber: 211,
            top: 21.0,
            left: 6.0,
            shortLabel: "8. Anatomía Respuesta",
            title: "8. Anatomía de la Respuesta",
            explanation: "Desglosa exhaustivamente el 'Análisis de la Clave' (la opción A es la correcta porque calcular la aceleración con los datos de tiempo existentes usando a = 2d/t² comprueba directamente la hipótesis sin introducir variables adicionales) y el 'Análisis de Distractores' (por qué B es incorrecta al introducir la masa innecesariamente, por qué C confunde velocidad inicial nula, y por qué D cambia el material alterando el rozamiento).",
            pedagogy: "Función de la anatomía de la respuesta: Desarrolla el pensamiento crítico mediante el análisis sistemático de la opción correcta y el desmontaje de las trampas conceptuales presentes en los distractores típicos del ICFES."
          },
          {
            num: 9,
            pageNumber: 211,
            top: 54.0,
            left: 6.5,
            shortLabel: "9. Del Análisis a Decisión",
            title: "9. Del Análisis a la Decisión",
            explanation: "Enseña un algoritmo de pensamiento en 5 pasos aplicable a cualquier pregunta Saber: Paso 1 (Reconoce el fenómeno o modelo), Paso 2 (Ubica la relación causa-efecto), Paso 3 (Conecta conceptos científicos conocidos), Paso 4 (Evalúa críticamente las opciones) y Paso 5 (Verifica la lógica completa antes de responder).",
            pedagogy: "Función de esta sección: Instalar un protocolo mental estructurado que sustituye la adivinación o la intuición por un proceso riguroso de toma de decisiones basado en evidencias científicas."
          }
        ]
      },
      {
        id: "paso3",
        stepNum: 3,
        title: "Paso 3: Bitácora",
        badge: "Paso 3 • Bitácora de la Misión y Aula (Págs. 212 y 214)",
        purpose: "Desarrollar el componente disciplinar formal: estructurar los modelos teóricos de la mecánica clásica en tres pilares fundamentales, complementados con la actividad de aplicación en el aula.",
        pages: [
          { pageNumber: 212, label: "Pág. 212 • Bitácora y Pilares", imageSrc: "books/ms11_tomo1/page_212.jpg" },
          { pageNumber: 214, label: "Pág. 214 • Actividad en el Aula", imageSrc: "books/ms11_tomo1/page_214.jpg" }
        ],
        avatar: { name: "Comandante Mateo", role: "Cátedra Saber 11", src: "assets/avatares/avatar_fase1.png" },
        items: [
          {
            num: 1,
            pageNumber: 212,
            top: 19.0,
            left: 3.0,
            shortLabel: "1. Bitácora Misión",
            title: "1. Paso 3: Bitácora de la Misión",
            explanation: "Introduce la base teórica rigurosa de la mecánica clásica para explicar y predecir el movimiento de los cuerpos. Cuenta con tres pilares fundamentales: Pilar 1 (Movimiento rectilíneo uniformemente acelerado - MRUA), Pilar 2 (Caída libre como expresión de la gravedad) y Pilar 3 (Relación entre fuerzas, trabajo y energía en planos inclinados).",
            pedagogy: "Función de la bitácora de la misión: Estructura el cuerpo conceptual formal de la física. Cada pilar demuestra cómo las fórmulas no son abstracciones aisladas, sino herramientas concretas para explicar y cuantificar la realidad física."
          },
          {
            num: 2,
            pageNumber: 212,
            top: 54.5,
            left: 3.5,
            shortLabel: "2. Pilar 1 y Pilares",
            title: "2. Pilar 1: MRUA (Función de los Pilares)",
            explanation: "Desarrolla las tres ecuaciones cinemáticas maestras del MRUA (v = v₀ + at, x = x₀ + v₀t + ½at², v² = v₀² + 2aΔx) con ejemplos resueltos paso a paso (cálculo de velocidad y distancia para un tren con aceleración de 1.5 m/s²). Los pilares 1, 2 y 3 tienen la función de articular la cinemática, la gravedad y la dinámica de Newton en un marco explicativo unificado.",
            pedagogy: "Función de los pilares: Facilitar la comprensión cuantitativa de los fenómenos. El estudiante aprende a seleccionar la ecuación correcta según las variables dadas y a interpretar el significado de cada término en problemas del mundo real."
          },
          {
            num: 3,
            pageNumber: 214,
            top: 38.0,
            left: 8.0,
            shortLabel: "3. Actividad en Aula",
            title: "3. Actividad en el Aula",
            explanation: "Propone una actividad colaborativa inmediatamente después de estudiar los pilares: a partir de la figura del bloque en el plano inclinado, los estudiantes deben completar el diagrama vectorial, calcular aceleraciones (a = g · sen(θ)), relacionar el tiempo de deslizamiento con la caída libre y debatir en equipo cómo los tres enfoques aportan a la descripción del fenómeno.",
            pedagogy: "Función de la actividad del aula después de los pilares: Fomenta la transferencia activa de los conceptos teóricos a la práctica gráfica y experimental, promoviendo el trabajo cooperativo y la argumentación científica antes de la evaluación individual."
          }
        ]
      },
      {
        id: "paso4",
        stepNum: 4,
        title: "Paso 4: Prueba Saber",
        badge: "Paso 4 • Batería de Preguntas Saber 11 (Págs. 215 y 218)",
        purpose: "Evaluar de forma sumativa y formativa el dominio de competencias mediante una batería de 10 preguntas tipo ICFES Saber 11 basadas en el Modelo Centrado en Evidencias.",
        pages: [
          { pageNumber: 215, label: "Pág. 215 • Prueba de Campo", imageSrc: "books/ms11_tomo1/page_215.jpg" },
          { pageNumber: 218, label: "Pág. 218 • Pregunta 10 y Cierre", imageSrc: "books/ms11_tomo1/page_218.jpg" }
        ],
        avatar: { name: "Científico Tomás", role: "Tutor Metacognitivo", src: "assets/avatares/avatar_fase2.png" },
        items: [
          {
            num: 1,
            pageNumber: 215,
            top: 14.0,
            left: 5.0,
            shortLabel: "1. Prueba de Campo",
            title: "1. Paso 4: Prueba de Campo",
            explanation: "Inicia la evaluación sumativa de la misión: cuenta con 10 preguntas tipo Saber 11 basadas rigurosamente en el Modelo Centrado en Evidencias (MCE) del ICFES, cubriendo las competencias de Explicación de fenómenos, Uso comprensivo del conocimiento científico e Indagación.",
            pedagogy: "Función de la prueba de campo: Poner a prueba la transferencia y consolidación de los aprendizajes adquiridos a lo largo de los tres pasos previos, simulando las condiciones y la exigencia de la prueba oficial del Estado."
          },
          {
            num: 2,
            pageNumber: 218,
            top: 5.0,
            left: 7.0,
            shortLabel: "2. Pregunta 10",
            title: "2. Pregunta 10: Análisis Cinemático de Gráficas",
            explanation: "Va dirigida a la pregunta 10 porque evalúa la competencia de modelación e interpretación de gráficas cinemáticas de velocidad vs. tiempo: un automóvil acelera desde el reposo, mantiene velocidad constante durante un tramo y finalmente frena de forma uniforme hasta detenerse.",
            pedagogy: "Función de la pregunta 10: Integrar las fases de un movimiento complejo en una representación gráfica unificada, evaluando si el estudiante relaciona las variaciones de aceleración con las pendientes de la curva de velocidad."
          },
          {
            num: 3,
            pageNumber: 218,
            top: 22.5,
            left: 9.0,
            shortLabel: "3. Opciones Pregunta 10",
            title: "3. Opciones de Respuesta de la Pregunta 10",
            explanation: "Analiza críticamente las opciones gráficas: la opción B es la correcta porque muestra con precisión una recta con pendiente positiva (aceleración desde reposo), una meseta horizontal (velocidad constante) y una recta con pendiente negativa (frenado uniforme). Se descartan A (curva no lineal), C (oscilaciones sin frenado uniforme) y D (picos triangulares repetidos).",
            pedagogy: "Función de las opciones de respuesta: Evaluar la capacidad de discriminación gráfica fina, confrontando interpretaciones erróneas del movimiento con la lógica matemática y física del MRUA."
          },
          {
            num: 4,
            pageNumber: 218,
            top: 70.0,
            left: 21.0,
            shortLabel: "4. Conexión SpaceGec",
            title: "4. Conexión SpaceGec: 15 Preguntas Virtuales",
            explanation: "Conecta con la plataforma virtual SpaceGec: informa al estudiante que dispone de 15 preguntas virtuales adicionales en línea, las cuales se suman a las 10 preguntas impresas de la prueba de campo para un total de 25 reactivos de entrenamiento interactivo con retroalimentación automática.",
            pedagogy: "Función de la conexión SpaceGec: Extender el entrenamiento hacia el entorno digital, permitiendo al docente realizar seguimiento del desempeño y brindar al estudiante práctica reforzada con analítica de resultados."
          },
          {
            num: 5,
            pageNumber: 218,
            top: 75.5,
            left: 33.0,
            shortLabel: "5. Final de la Misión",
            title: "5. Finalización de la Misión: Cargando Datos",
            explanation: "Cierre y balance pedagógico de la misión: resume el abordaje de la mecánica clásica a través de las tres competencias (explicación de fenómenos, uso del conocimiento e indagación) y anuncia la próxima misión de procesos energéticos, trabajo y calor.",
            pedagogy: "Objetivo de la finalización de la misión: Cerrar el ciclo formativo reforzando la satisfacción del logro cumplido, consolidando la metacognición del estudiante y motivándolo a continuar su trayectoria hacia la excelencia en Saber 11."
          }
        ]
      }
    ]
  }
];
