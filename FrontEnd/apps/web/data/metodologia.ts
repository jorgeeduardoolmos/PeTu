export type PrincipioCat = {
  id: string;
  categoria: string;
  tag: string;
  color: "yellow" | "blue" | "red" | "green" | "purple" | "gray";
  items: string[];
};

export const principiosTacticos: PrincipioCat[] = [
  {
    id: "generales",
    categoria: "Generales",
    tag: "🧠",
    color: "gray",
    items: [
      "Intensidad en todo momento",
      "Con el árbitro solo hablan los profes o el capitán",
      "Generar sentido de pertenencia con el club y con el modelo de juego",
      "Entrenar como se juega",
      "Protagonismo",
      "Intentar llevar el control del partido",
      "Ser voluntariosos y colaborativos",
    ],
  },
  {
    id: "ataque",
    categoria: "Ataque Posicional",
    tag: "⚡",
    color: "yellow",
    items: [
      "Ser directos y verticales",
      "Tomar la iniciativa siempre",
      "3 líneas de pases al poseedor",
      "Dibujo madre 3-1 (2 patrones de movimiento — se detalla en el modelo de juego de cada categoría)",
      "No hay jugadores espectadores",
    ],
  },
  {
    id: "defensa",
    categoria: "Defensa Organizada",
    tag: "🛡️",
    color: "blue",
    items: [
      "Responsabilidad individual — duelo yo/mi par",
      "Protagonismo desde la defensa: altura, fortaleza en los duelos, orden",
      "Ley de oro: jugador → yo → mi arco (excepción: últimos 10 minutos, cierre/pivot)",
      "Lado fuerte cerca / lado débil vigilo",
    ],
  },
  {
    id: "transicion",
    categoria: "Fase de Transición",
    tag: "🔄",
    color: "green",
    items: [
      "OF: Los pases hacia adelante buscando ventaja y superioridad",
      "OF: Finalizar las jugadas — evitar la transición de la transición",
      "DEF: Repliegues a máxima intensidad por el eje de la cancha",
    ],
  },
  {
    id: "abp",
    categoria: "ABP / Estrategia",
    tag: "📐",
    color: "purple",
    items: [
      "Los cierres ejecutan laterales y córner (excepción: si son los que mejor remate exterior o volea tienen del cuarteto en cancha)",
      "Se llama la jugada antes de ir a buscar la pelota",
      "Finalizar las jugadas y no generar transición al rival",
      "Se defiende individual en laterales y córner (excepción: 4ta/5ta — defensa en zona con ajustes individuales)",
    ],
  },
  {
    id: "especiales",
    categoria: "Situaciones Especiales",
    tag: "⚙️",
    color: "red",
    items: [
      "5x4 / 4x5 / 4x3 / 3x4",
      "OF: Mover la pelota rápido, no apurado",
      "OF: Dibujo 1-2-2 hasta 4ta división",
      "OF: Utilizar solo en los últimos minutos de partido en desventaja",
      "OF: Si no lo entrenamos, no lo usamos",
      "DEF: Defender cerrando el eje siempre",
      "DEF: El jugador que no marca al de la pelota defiende a dos",
    ],
  },
];

export const objetivosGenerales: string[] = [
  "Definir qué jugador queremos en enero del 2027 y trabajarlo desde hoy",
  "Formar jugadores inteligentes tácticamente",
  "Formar buenos grupos humanos en los equipos",
  "Generar sentido de pertenencia con el club y el grupo de trabajo",
  "Que ganar sea una consecuencia, no una condición",
  "Fomentar el valor del trabajo y el entrenamiento como medio de mejora y vehículo hacia el rendimiento",
  "Reforzar positivamente lo realizado por los jugadores",
  "Visualizar el trabajo y aprendizaje de los contenidos propuestos en cada categoría",
  "Generar buenos hábitos en el deportista",
];

export const metodologiaGeneral: string[] = [
  "Seleccionar correctamente el tipo de tarea a llevar a cabo",
  "Ser flexible y abierto al cambio en el momento",
  "Planificar tareas y ejercicios a conciencia, con el foco en el objetivo principal de cada tarea",
  "Periodizar los contenidos y conceptos que mejoren el desarrollo del modelo de juego",
  "Establecer en conjunto la importancia (en porcentaje) de cada contenido y fase del juego por etapa",
  "Correcciones puntuales del concepto que se esté trabajando",
  "Intervención de todo el cuerpo técnico durante el entrenamiento",
  "Mantener activos a todos los jugadores — evitar filas y esperas en las tareas",
  "En caso de ser necesario, dividir y nivelar los grupos",
  "Trabajar siempre en estructuras de 1v1, 2v2, 3v3, 4v4, etc.",
  "El entrenador que lleva la tarea corrige en general sin interrumpir constantemente; los colaboradores corrigen individualmente en las pausas",
  "Pausas activas y con correcciones constantes",
];
