export type SeccionNorma = {
  id: string;
  titulo: string;
  subtitulo?: string;
  tipo: "parrafo" | "lista" | "parrafo+lista";
  parrafo?: string;
  items?: string[];
};

export const normas: SeccionNorma[] = [
  {
    id: "filosofia",
    titulo: "Filosofía del fútsal infantil",
    subtitulo: "8va, 7ma, 6ta y Promocionales",
    tipo: "parrafo",
    parrafo:
      "El fútsal infantil del Club Atlético Atlanta tiene como objetivo principal el desarrollo integral de los niños, priorizando la formación en valores, el respeto, el compañerismo y el disfrute del deporte por sobre el resultado deportivo. La competencia es un medio para promover el compromiso, la responsabilidad y el deseo de superación individual y grupal. El resultado es una de las tantas consecuencias del proceso: no determina el valor del jugador ni justifica conductas contrarias a los valores del club.",
  },
  {
    id: "familias",
    titulo: "Compromiso de las familias",
    tipo: "lista",
    items: [
      "Comprender que la competencia es una herramienta formativa, no un fin en sí mismo. Valorar el esfuerzo, la conducta, el compañerismo y el aprendizaje por encima del resultado.",
      "Respetar que las decisiones deportivas (minutos de juego, posiciones, convocatorias) responden a criterios formativos y grupales, no solo al rendimiento inmediato.",
      "Respetar los tiempos para comunicarse con entrenadores y coordinadores. Las consultas se realizan luego de algún entrenamiento o mediante reunión pactada. Evitar mensajes o llamadas por WhatsApp en horarios inadecuados.",
      "Los jugadores representan al club dentro y fuera de la cancha. Se espera respeto hacia compañeros, docentes, entrenadores, rivales y árbitros; uso de un lenguaje adecuado; y cuidado de materiales e instalaciones.",
    ],
  },
  {
    id: "partidos",
    titulo: "Comportamiento durante los partidos",
    tipo: "lista",
    items: [
      "Evitar indicaciones técnicas que se superpongan a las de los entrenadores.",
      "Aceptar los errores de los niños, del cuerpo técnico y de los árbitros como parte del juego.",
      "El error es parte esencial del aprendizaje: ningún jugador será señalado, retado públicamente ni responsabilizado por un resultado.",
      "Todos los jugadores citados tendrán participación de manera obligatoria, aunque no necesariamente el mismo tiempo de juego, ya que el cuerpo técnico administra los momentos.",
      "Mantener el clima de respeto hacia los clubes rivales y el cuerpo arbitral.",
      "Las conductas inapropiadas de familiares en tribuna que generen sanciones deportivas, informes arbitrales o perjuicios al club podrán derivar en prohibición de asistencia a partidos o sanciones institucionales.",
    ],
  },
  {
    id: "habitos",
    titulo: "Hábitos del deportista",
    tipo: "lista",
    items: [
      "Respetar los días y horarios de entrenamiento establecidos por el club. La asistencia regular es fundamental para el aprendizaje individual y el funcionamiento del equipo.",
      "Las inasistencias reiteradas o injustificadas podrán influir en las convocatorias a los partidos.",
      "Es obligatorio llevar botella de agua a todos los entrenamientos y partidos. La hidratación forma parte del cuidado de la salud y del rendimiento deportivo.",
      "Asistir a entrenar con ropa deportiva acorde a la actividad. Se recomienda el uso del uniforme de entrenamiento del club.",
      "Uso obligatorio de canilleras cuando el cuerpo técnico lo indique.",
      "Compromiso con la escuela: se espera que los jugadores cumplan con sus tareas, evaluaciones y obligaciones académicas.",
    ],
  },
];
