export type Regla = { id: string; categoria: string; titulo: string; descripcion: string; };

export const reglas: Regla[] = [
  { id:"RN-01", categoria:"Convocatoria", titulo:"Quién convoca", descripcion:"Solo el entrenador principal puede emitir convocatoria. El ayudante solo si el entrenador lo delega explícitamente." },
  { id:"RN-02", categoria:"Convocatoria", titulo:"Ventana de convocatoria", descripcion:"Debe emitirse con al menos 24hs de anticipación. Alerta si se hace con menos de 12hs." },
  { id:"RN-03", categoria:"Convocatoria", titulo:"Estados del jugador convocado", descripcion:"PENDIENTE → CONFIRMADO / RECHAZADO. El jugador debe responder dentro de las 12hs siguientes." },
  { id:"RN-04", categoria:"Convocatoria", titulo:"Convocatoria y deuda de cuota", descripcion:"Si hay cuotas impagas, el sistema muestra alerta solo para entrenador y coordinador. La app informa, no bloquea." },
  { id:"RN-05", categoria:"Convocatoria", titulo:"Posiciones en convocatoria", descripcion:"Desde 5ta división, jugadores agrupados por posición. En 6ta, 7ma y 8va sin posición asignada." },
  { id:"RN-06", categoria:"Convocatoria", titulo:"Visibilidad de convocatoria", descripcion:"Cada jugador solo ve si él está convocado, no la lista completa. El entrenador ve todo con estados." },
  { id:"RN-07", categoria:"Planificación", titulo:"Quién carga el modelo de juego", descripcion:"Solo el coordinador puede crear y editar modelo de juego, objetivos y metodología. Entrenadores: solo lectura." },
  { id:"RN-08", categoria:"Planificación", titulo:"Checklist semanal", descripcion:"El coordinador define contenidos por categoría al inicio de cada mesociclo. El entrenador selecciona entre 3 y 5 ítems por semana." },
  { id:"RN-09", categoria:"Planificación", titulo:"Visibilidad del checklist", descripcion:"Visible para coordinador y el propio entrenador. Los jugadores no la ven." },
  { id:"RN-10", categoria:"Planificación", titulo:"Alerta planificación no cargada", descripcion:"Si un entrenador no cargó su planificación antes del lunes 23:59, el coordinador recibe una alerta." },
  { id:"RN-11", categoria:"Asistencia", titulo:"Quién registra asistencia", descripcion:"El entrenador o el ayudante de campo registran la asistencia de cada entrenamiento." },
  { id:"RN-12", categoria:"Asistencia", titulo:"Excepción de asistencia", descripcion:"Ausencia justificada previamente comunicada se marca como excepción con motivo. No cuenta como inasistencia." },
  { id:"RN-13", categoria:"Asistencia", titulo:"Inasistencias reiteradas", descripcion:"3 inasistencias injustificadas consecutivas generan alerta para entrenador y coordinador. No bloquea convocatoria automáticamente." },
  { id:"RN-14", categoria:"Fixture", titulo:"Quién carga el fixture", descripcion:"El coordinador o el delegado cargan las fechas. AFA: 10 días antes. Liga: 7 días antes." },
  { id:"RN-15", categoria:"Fixture", titulo:"Datos obligatorios del fixture", descripcion:"Fecha, hora, categoría, rival, cancha (nombre + dirección). Sin estos datos no puede publicarse." },
  { id:"RN-16", categoria:"Fixture", titulo:"Quién carga el resultado", descripcion:"Delegado, ayudante o entrenador pueden cargar el resultado. Editable hasta 24hs después." },
  { id:"RN-17", categoria:"Fixture", titulo:"Visibilidad del resultado", descripcion:"Visible para todos los roles incluyendo familias." },
  { id:"RN-18", categoria:"Jugadores", titulo:"Datos básicos vs valoración interna", descripcion:"Datos básicos visibles para coordinador y entrenadores. Valoración interna solo para coordinador y entrenador de esa categoría." },
  { id:"RN-19", categoria:"Jugadores", titulo:"Trazabilidad del jugador", descripcion:"Al subir de categoría, el historial completo se mantiene. El coordinador puede ver la trayectoria desde que ingresó." },
  { id:"RN-20", categoria:"Jugadores", titulo:"Alerta vencimiento de contrato", descripcion:"Alerta para el directivo cuando un contrato vence en menos de 60 días." },
  { id:"RN-21", categoria:"Acceso", titulo:"Alta de usuarios", descripcion:"Solo el coordinador o un admin puede crear cuentas. Los usuarios no pueden auto-registrarse." },
  { id:"RN-22", categoria:"Acceso", titulo:"Asignación de categoría", descripcion:"Cada jugador y entrenador pertenece a una categoría. El coordinador ve todas." },
  { id:"RN-23", categoria:"Acceso", titulo:"Un usuario, múltiples roles", descripcion:"Un usuario puede tener múltiples roles con vistas diferenciadas. Caso: Matías Castagnola (coordinador + entrenador)." },
  { id:"RN-24", categoria:"Acceso", titulo:"Sesión", descripcion:"La sesión no expira con uso activo. Sin actividad por 30 días, requiere nuevo login." },
  { id:"RN-25", categoria:"Necesidades", titulo:"Quién pide materiales", descripcion:"Entrenadores, ayudantes y delegados pueden crear solicitudes con cantidad y urgencia." },
  { id:"RN-26", categoria:"Necesidades", titulo:"Quién aprueba", descripcion:"El coordinador o el directivo aprueban, rechazan o modifican las solicitudes." },
  { id:"RN-27", categoria:"Necesidades", titulo:"Estados de solicitud", descripcion:"SOLICITADO → EN REVISIÓN → APROBADO / RECHAZADO → ENTREGADO." },
];

export const categorias = ["Todas", ...Array.from(new Set(reglas.map(r => r.categoria)))];
