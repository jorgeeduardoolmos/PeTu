export type CasoDeUso = {
  id: string;
  rol: string;
  accion: string;
  descripcion: string;
  precondiciones?: string;
  resultado: string;
  fase: 1 | 2 | 3;
};

export const casos: CasoDeUso[] = [
  // COORDINADOR
  { id: "CU-01", rol: "Coordinador", accion: "Cargar modelo de juego", descripcion: "El coordinador sube los objetivos, principios tácticos y metodología de entrenamiento para cada categoría al inicio del año.", precondiciones: "Usuario con rol Coordinador", resultado: "Entrenadores y jugadores pueden ver el contenido de su categoría.", fase: 1 },
  { id: "CU-02", rol: "Coordinador", accion: "Cargar checklist de contenidos del mesociclo", descripcion: "Define los contenidos disponibles que los entrenadores pueden seleccionar para sus planificaciones semanales.", precondiciones: "Modelo de juego cargado", resultado: "Entrenadores ven el checklist disponible para tickear.", fase: 1 },
  { id: "CU-03", rol: "Coordinador", accion: "Ver dashboard de planificaciones", descripcion: "Visualiza qué entrenadores cargaron su planificación semanal y cuáles no.", precondiciones: "Al menos un entrenador registrado", resultado: "Vista verde/rojo por entrenador. Alerta si hay incumplimientos.", fase: 1 },
  { id: "CU-04", rol: "Coordinador", accion: "Ver base de datos de jugadores", descripcion: "Accede a la ficha completa de cada jugador incluyendo valoración interna, asistencia histórica y trayectoria en el club.", resultado: "Vista filtrable por categoría con toda la información del jugador.", fase: 2 },
  { id: "CU-05", rol: "Coordinador", accion: "Crear usuarios", descripcion: "Da de alta a jugadores, entrenadores y otros roles en el sistema.", resultado: "Usuario creado y asignado a su categoría y rol.", fase: 1 },
  // ENTRENADOR
  { id: "CU-06", rol: "Entrenador", accion: "Hacer convocatoria", descripcion: "Selecciona los jugadores que van a jugar el próximo partido, agrupados por posición (desde 5ta). Los jugadores reciben notificación.", precondiciones: "Fixture del partido cargado", resultado: "Jugadores convocados reciben notificación y pueden confirmar/rechazar.", fase: 1 },
  { id: "CU-07", rol: "Entrenador", accion: "Ver estado de confirmaciones", descripcion: "Ve en tiempo real qué jugadores confirmaron, rechazaron o no respondieron la convocatoria.", precondiciones: "Convocatoria enviada", resultado: "Lista con estados: ✅ Confirmado / ❌ Rechazado / ⏳ Pendiente.", fase: 1 },
  { id: "CU-08", rol: "Entrenador", accion: "Cargar planificación semanal", descripcion: "Selecciona 3 a 5 contenidos del checklist definido por el coordinador para trabajar esa semana.", precondiciones: "Checklist del mesociclo disponible", resultado: "Coordinador ve la planificación en su dashboard.", fase: 1 },
  { id: "CU-09", rol: "Entrenador", accion: "Registrar asistencia", descripcion: "Marca presente/ausente a cada jugador. Puede agregar excepción con motivo justificado.", resultado: "Asistencia registrada. Alertas si hay inasistencias reiteradas.", fase: 2 },
  { id: "CU-10", rol: "Entrenador", accion: "Cargar resultado del partido", descripcion: "Ingresa el marcador final, goleadores opcionales.", precondiciones: "Partido en fixture", resultado: "Resultado visible para todos los roles.", fase: 1 },
  { id: "CU-11", rol: "Entrenador", accion: "Consultar modelo de juego", descripcion: "Lee los objetivos y metodología de su categoría cargados por el coordinador.", resultado: "Vista de solo lectura del contenido de su categoría.", fase: 1 },
  { id: "CU-12", rol: "Entrenador", accion: "Solicitar materiales", descripcion: "Crea una solicitud de materiales (pelotas, conos, ropa) con cantidad y urgencia.", resultado: "Solicitud visible para coordinador y directivos.", fase: 2 },
  // JUGADOR
  { id: "CU-13", rol: "Jugador", accion: "Ver estado de convocatoria", descripcion: "El jugador ve si está o no convocado para el próximo partido de su categoría.", resultado: "Pantalla clara: CONVOCADO ✅ o NO CONVOCADO con estado prominente.", fase: 1 },
  { id: "CU-14", rol: "Jugador", accion: "Confirmar/rechazar convocatoria", descripcion: "El jugador responde si puede o no asistir al partido. Si rechaza, puede dejar un motivo.", precondiciones: "Jugador convocado", resultado: "El entrenador ve la confirmación en tiempo real.", fase: 1 },
  { id: "CU-15", rol: "Jugador", accion: "Ver fixture", descripcion: "Consulta el calendario de partidos de su categoría con fecha, hora, cancha y dirección.", resultado: "Lista de partidos con info completa.", fase: 1 },
  { id: "CU-16", rol: "Jugador", accion: "Ver modelo de juego de su categoría", descripcion: "Lee los objetivos del año y principios de juego de su categoría en lenguaje adaptado.", resultado: "Contenido de lectura de solo lectura.", fase: 1 },
  { id: "CU-17", rol: "Jugador", accion: "Ver mis estadísticas", descripcion: "Ve sus partidos jugados, goles, asistencias y porcentaje de asistencia al entrenamiento.", resultado: "Dashboard personal con evolución.", fase: 2 },
  { id: "CU-18", rol: "Jugador", accion: "Completar autoevaluación", descripcion: "Responde encuesta semáforo (🔴🟡🟢) 3 veces por año. Preguntas sobre valores, disciplina y autopercepción deportiva.", resultado: "Datos visibles para coordinador y entrenador.", fase: 3 },
  // DIRECTIVO
  { id: "CU-19", rol: "Directivo", accion: "Ver dashboard institucional", descripcion: "Resumen de socios activos, resultados del fin de semana, vencimientos de contratos próximos.", resultado: "Vista ejecutiva del estado del club.", fase: 3 },
  { id: "CU-20", rol: "Directivo", accion: "Gestionar fichajes", descripcion: "Registra jugadores en negociación con estado (en conversación / cerrado / caído).", resultado: "Pipeline de fichajes con historial.", fase: 3 },
  { id: "CU-21", rol: "Directivo", accion: "Aprobar solicitudes de materiales", descripcion: "Revisa las solicitudes del portal de necesidades y aprueba o rechaza.", resultado: "Solicitud actualizada con nuevo estado.", fase: 2 },
  // FAMILIA
  { id: "CU-22", rol: "Familia", accion: "Ver fixture del equipo", descripcion: "Consulta el calendario de partidos del equipo de su hijo.", resultado: "Vista de solo lectura del fixture.", fase: 1 },
  { id: "CU-23", rol: "Familia", accion: "Ver resultados y tabla", descripcion: "Consulta resultados del fin de semana y posición en la tabla.", resultado: "Vista pública de resultados.", fase: 2 },
];

export const roles = ["Todos", "Coordinador", "Entrenador", "Jugador", "Directivo", "Familia"];
