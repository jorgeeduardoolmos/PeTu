export type Feature = {
  id: string;
  nombre: string;
  descripcion: string;
  rol: string[];
  estado: "completado" | "en-progreso" | "pendiente";
};

export type Fase = {
  numero: number;
  titulo: string;
  subtitulo: string;
  periodo: string;
  color: string;
  features: Feature[];
};

export const roadmap: Fase[] = [
  {
    numero: 1,
    titulo: "Lo que duele hoy",
    subtitulo: "Reemplazar el caos del WhatsApp",
    periodo: "Semanas 1 — 4",
    color: "#ffd94d",
    features: [
      { id: "F-01", nombre: "Convocatoria digital", descripcion: "Entrenador selecciona jugadores y los convocados reciben notificación con confirmación.", rol: ["Entrenador", "Jugador"], estado: "en-progreso" },
      { id: "F-02", nombre: "Fixture con dirección", descripcion: "Fechas, horarios, rival y ubicación de la cancha visibles para todos.", rol: ["Todos"], estado: "en-progreso" },
      { id: "F-03", nombre: "Modelo de juego digital", descripcion: "El coordinador sube el PDF de objetivos y metodología. Entrenadores y jugadores lo leen en la app.", rol: ["Coordinador", "Entrenador", "Jugador"], estado: "pendiente" },
      { id: "F-04", nombre: "Checklist semanal del entrenador", descripcion: "El entrenador selecciona qué contenidos va a trabajar la semana. El coordinador ve cumplimiento.", rol: ["Coordinador", "Entrenador"], estado: "pendiente" },
      { id: "F-05", nombre: "Carga de resultados", descripcion: "Delegado o entrenador carga el marcador al terminar el partido.", rol: ["Entrenador", "Delegado"], estado: "pendiente" },
      { id: "F-06", nombre: "Alta de usuarios por admin", descripcion: "El coordinador crea cuentas y asigna roles. Sin auto-registro.", rol: ["Coordinador"], estado: "pendiente" },
    ],
  },
  {
    numero: 2,
    titulo: "Lo que genera retención",
    subtitulo: "Datos que hacen volver cada semana",
    periodo: "Meses 2 — 3",
    color: "#63b3ff",
    features: [
      { id: "F-07", nombre: "Registro de asistencia", descripcion: "Lista de jugadores con toggle presente/ausente y campo de excepción con motivo.", rol: ["Entrenador", "Ayudante"], estado: "pendiente" },
      { id: "F-08", nombre: "Estadísticas básicas del jugador", descripcion: "Partidos jugados, goles, asistencias y % de asistencia al entrenamiento.", rol: ["Jugador", "Entrenador", "Coordinador"], estado: "pendiente" },
      { id: "F-09", nombre: "Base de datos de jugadores", descripcion: "Ficha digital del jugador: posición, pierna hábil, edad, altura, peso, valoración interna.", rol: ["Coordinador", "Entrenador"], estado: "pendiente" },
      { id: "F-10", nombre: "Portal de necesidades", descripcion: "Entrenadores solicitan materiales. Coordinador y directivos aprueban.", rol: ["Entrenador", "Coordinador", "Directivo"], estado: "pendiente" },
      { id: "F-11", nombre: "Tabla de posiciones", descripcion: "Resultados del fin de semana y posición en la tabla visibles para familias.", rol: ["Familia", "Todos"], estado: "pendiente" },
    ],
  },
  {
    numero: 3,
    titulo: "Lo que atrae directivos",
    subtitulo: "Gestión institucional del club",
    periodo: "Meses 4 — 6",
    color: "#50c88c",
    features: [
      { id: "F-12", nombre: "Contratos y vencimientos", descripcion: "Alertas automáticas cuando un contrato vence en menos de 60 días.", rol: ["Directivo", "Coordinador"], estado: "pendiente" },
      { id: "F-13", nombre: "Gestión de fichajes", descripcion: "Pipeline de negociaciones con estados: en conversación / cerrado / caído.", rol: ["Directivo"], estado: "pendiente" },
      { id: "F-14", nombre: "Dashboard directivo", descripcion: "Vista ejecutiva: socios activos, cuotas, resultados, próximos vencimientos.", rol: ["Directivo"], estado: "pendiente" },
      { id: "F-15", nombre: "Autoevaluación del jugador", descripcion: "Encuesta semáforo 3 veces por año para categorías de 5ta en adelante.", rol: ["Jugador", "Coordinador", "Entrenador"], estado: "pendiente" },
      { id: "F-16", nombre: "Trazabilidad histórica", descripcion: "El coordinador puede ver el recorrido completo de un jugador desde que ingresó al club.", rol: ["Coordinador"], estado: "pendiente" },
    ],
  },
];
