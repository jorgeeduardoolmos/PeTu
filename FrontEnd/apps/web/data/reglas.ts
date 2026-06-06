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

  // ── Delegado ──────────────────────────────────────────────────────────────
  { id:"RN-28", categoria:"Delegado", titulo:"Programación del partido — AFA", descripcion:"El delegado envía la programación por email al referente de la categoría en AFA con al menos 5–6 días de anticipación. Sin programación confirmada no hay fecha oficial." },
  { id:"RN-29", categoria:"Delegado", titulo:"Programación del partido — Liga", descripcion:"Para Liga, el delegado coordina día, hora y sede directamente con el delegado rival. Ambos cuentan con fixture y deben acordar el encuentro." },
  { id:"RN-30", categoria:"Delegado", titulo:"Policía y médico en AFA", descripcion:"El delegado debe solicitar la presencia de policía y médico con 5 o 6 días de anticipación al partido. Sin médico y sin policía, la jornada no puede comenzar." },
  { id:"RN-31", categoria:"Delegado", titulo:"Credenciales de jugadores", descripcion:"En AFA los jugadores presentan credenciales físicas. En Liga las credenciales están en la app. El delegado es responsable de verificar que todos figuren en planilla." },
  { id:"RN-32", categoria:"Delegado", titulo:"Colores de camiseta", descripcion:"El delegado coordina con el rival los colores de camiseta por categoría durante la semana previa. En caso de conflicto, el local define." },
  { id:"RN-33", categoria:"Delegado", titulo:"Planilla de partido", descripcion:"Las planillas se imprimen los viernes. El delegado coordina previamente con los DT las citaciones para que todos los jugadores figuren correctamente." },
  { id:"RN-34", categoria:"Delegado", titulo:"Pelota nueva en AFA", descripcion:"Para partidos de AFA se utiliza pelota nueva. El delegado es responsable de proveerla y controlar las pelotas de entrada en calor y juego durante el encuentro." },
  { id:"RN-35", categoria:"Delegado", titulo:"Pecheras para suplentes", descripcion:"Todos los jugadores suplentes deben contar con pechera en el banco. El delegado verifica esto antes del inicio de cada partido." },
  { id:"RN-36", categoria:"Delegado", titulo:"Condiciones del estadio", descripcion:"Antes de cada jornada el delegado verifica: redes de arcos, estado de la cancha, vestuario del árbitro limpio, vestuarios local y visitante separados y limpios, bancos de suplentes en posición, mesa de control a mitad de cancha." },
  { id:"RN-37", categoria:"Delegado", titulo:"Recepción del árbitro", descripcion:"El delegado recibe al árbitro, le ofrece fruta, turrones e hidratación. El árbitro no debe buscar sus propias comodidades." },
  { id:"RN-38", categoria:"Delegado", titulo:"Taquilla y entradas", descripcion:"Previo al inicio de jornada, el delegado prepara la entrada: entradas oficiales (club o liga), cambio, caja registradora, mesa y dos sillas." },
  { id:"RN-39", categoria:"Delegado", titulo:"Nexo árbitro–tribunas", descripcion:"El delegado actúa como nexo entre el árbitro y las tribunas. Debe mantener las tribunas calmadas y dialogar con el delegado rival para prevenir incidentes." },
  { id:"RN-40", categoria:"Delegado", titulo:"Logística semanal — indumentaria", descripcion:"Durante la semana el delegado lava la ropa, arma los bolsos por categoría y coordina colores con los rivales." },

  // ── Cuotas ────────────────────────────────────────────────────────────────
  { id:"RN-41", categoria:"Cuotas", titulo:"Alerta de cuota impaga — entrenador", descripcion:"En la pantalla de convocatoria, los jugadores con cuota impaga aparecen resaltados en rojo. El entrenador ve el indicador pero decide libremente si los cita. La app informa, no bloquea." },
  { id:"RN-42", categoria:"Cuotas", titulo:"Aviso de cuota impaga — jugador", descripcion:"El jugador con cuota impaga ve un aviso informativo en su pantalla principal al ingresar a la app. No impide el acceso a ninguna funcionalidad." },
  { id:"RN-43", categoria:"Cuotas", titulo:"Visibilidad del estado de cuota", descripcion:"El estado de deuda de cuota es visible únicamente para coordinador, entrenador de la categoría y directivo. Nunca se muestra a otros jugadores ni a familias de otros jugadores." },

  // ── Becados ────────────────────────────────────────────────────────────────
  { id:"RN-44", categoria:"Becados", titulo:"Registro de becados", descripcion:"El directivo o coordinador registra jugadores becados indicando condiciones y fecha de vencimiento de la beca. Los becados no generan alertas de deuda de cuota." },
  { id:"RN-45", categoria:"Becados", titulo:"Visibilidad de becados", descripcion:"La condición de becado es visible únicamente para coordinador y directivo. No se muestra a entrenadores, jugadores ni familias." },
  { id:"RN-46", categoria:"Becados", titulo:"Vencimiento de beca", descripcion:"Cuando una beca se acerca a su vencimiento (menos de 30 días), el sistema genera una alerta para el directivo para renovarla o regularizar la situación." },

  // ── Ficha del Jugador ──────────────────────────────────────────────────────
  { id:"RN-47", categoria:"Ficha del Jugador", titulo:"Quién carga y edita la ficha", descripcion:"El entrenador principal y el ayudante de campo pueden cargar y editar la ficha de los jugadores de su categoría. El coordinador puede crear y editar fichas de cualquier categoría." },
  { id:"RN-48", categoria:"Ficha del Jugador", titulo:"Campos de la ficha", descripcion:"La ficha contiene: Información general (nombre, posición, perfil dominante, categoría), Hábito de entrenamiento, Características del jugador, Fortalezas, Aspectos a mejorar, Personalidad, Observaciones." },
  { id:"RN-49", categoria:"Ficha del Jugador", titulo:"Campos obligatorios", descripcion:"Para guardar una ficha se requieren como mínimo: nombre, posición, perfil dominante y categoría. Los campos de valoración interna (fortalezas, aspectos a mejorar, personalidad) son opcionales pero recomendados." },
  { id:"RN-50", categoria:"Ficha del Jugador", titulo:"Visibilidad por rol", descripcion:"La información general es visible para coordinador y entrenador de la categoría. La valoración interna (fortalezas, aspectos a mejorar, personalidad, observaciones) es visible solo para coordinador y entrenador de esa categoría. Los directivos acceden a un resumen sin valoración técnica detallada. El jugador no ve su valoración interna." },
  { id:"RN-51", categoria:"Ficha del Jugador", titulo:"Historial de actualizaciones", descripcion:"Cada modificación de la ficha queda registrada con fecha, hora y autor. El coordinador puede consultar el historial completo de cambios de cualquier jugador." },
  { id:"RN-52", categoria:"Ficha del Jugador", titulo:"Trazabilidad entre categorías", descripcion:"Al ascender de categoría, la ficha histórica se conserva completa. El nuevo entrenador puede ver la evolución del jugador desde que ingresó a las inferiores." },
];

export const categorias = ["Todas", "Convocatoria", "Planificación", "Asistencia", "Fixture", "Jugadores", "Acceso", "Necesidades", "Delegado", "Cuotas", "Becados", "Ficha del Jugador"];
