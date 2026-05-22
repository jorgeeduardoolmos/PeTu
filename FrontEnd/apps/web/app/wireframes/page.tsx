import { PageHeader, Badge } from "@/components/ui";

const pantallas = [
  { id:"P-01", nombre:"Splash Screen",           rol:"Todos",        fase:1, desc:"Apertura de la app. Logo, CTA Iniciar sesión y Soy nuevo." },
  { id:"P-02", nombre:"Login",                   rol:"Todos",        fase:1, desc:"Email + contraseña + Google OAuth. Detección automática de rol." },
  { id:"P-03", nombre:"Home Coordinador",         rol:"Coordinador",  fase:1, desc:"Dashboard con categorías activas, alertas de planificaciones faltantes." },
  { id:"P-04", nombre:"Carga Modelo de Juego",    rol:"Coordinador",  fase:1, desc:"Formulario para subir objetivos y metodología por categoría." },
  { id:"P-05", nombre:"Dashboard planificaciones",rol:"Coordinador",  fase:1, desc:"Vista verde/rojo de qué entrenadores cargaron su semana." },
  { id:"P-06", nombre:"Home Entrenador",          rol:"Entrenador",   fase:1, desc:"Próximo partido con botón Citar, estadísticas rápidas, acciones frecuentes." },
  { id:"P-07", nombre:"Convocatoria",             rol:"Entrenador",   fase:1, desc:"Jugadores agrupados por posición (desde 5ta). Selección y envío." },
  { id:"P-08", nombre:"Estado de confirmaciones", rol:"Entrenador",   fase:1, desc:"Lista con ✅ / ❌ / ⏳ de cada jugador convocado." },
  { id:"P-09", nombre:"Planificación semanal",    rol:"Entrenador",   fase:1, desc:"Checklist de contenidos. El entrenador tilda los que trabaja." },
  { id:"P-10", nombre:"Carga de resultado",       rol:"Entrenador",   fase:1, desc:"Marcador propio, rival, goleadores opcionales." },
  { id:"P-11", nombre:"Registro de asistencia",   rol:"Entrenador",   fase:2, desc:"Toggle presente/ausente por jugador con campo de excepción." },
  { id:"P-12", nombre:"Home Jugador",             rol:"Jugador",      fase:1, desc:"Estado de convocatoria prominente, próximo partido, última estadística." },
  { id:"P-13", nombre:"Confirmación convocatoria",rol:"Jugador",      fase:1, desc:"¿Podés jugar? Sí / No + motivo si rechaza." },
  { id:"P-14", nombre:"Fixture jugador",          rol:"Jugador",      fase:1, desc:"Calendario con fecha, hora, cancha y dirección." },
  { id:"P-15", nombre:"Modelo de juego (jugador)",rol:"Jugador",      fase:1, desc:"Objetivos y principios de juego adaptados a su categoría." },
  { id:"P-16", nombre:"Mis estadísticas",         rol:"Jugador",      fase:2, desc:"Partidos, goles, asistencias, % de asistencia al entrenamiento." },
  { id:"P-17", nombre:"Autoevaluación",           rol:"Jugador",      fase:3, desc:"Encuesta semáforo 3 veces por año para 5ta en adelante." },
  { id:"P-18", nombre:"Dashboard Directivo",      rol:"Directivo",    fase:3, desc:"Socios activos, cuotas, vencimientos, resultados del fin de semana." },
  { id:"P-19", nombre:"Gestión de fichajes",      rol:"Directivo",    fase:3, desc:"Pipeline: en conversación / cerrado / caído." },
  { id:"P-20", nombre:"Home Familia",             rol:"Familia",      fase:2, desc:"Fixture del equipo, último resultado, tabla de posiciones." },
];

const rolColor: Record<string, "yellow"|"blue"|"green"|"red"|"gray"> = {
  Todos:"gray", Coordinador:"yellow", Entrenador:"blue", Jugador:"green", Directivo:"red", Familia:"gray",
};
const faseColor: Record<number, "yellow"|"blue"|"green"> = { 1:"yellow", 2:"blue", 3:"green" };

export default function Wireframes() {
  return (
    <div>
      <PageHeader label="Documentación" title="Wireframes" subtitle="20 pantallas de la app organizadas por rol y fase de desarrollo." />
      <div className="bg-[#ffd94d08] border border-[#ffd94d22] rounded-xl p-5 mb-8">
        <div className="text-[#ffd94d] font-semibold text-sm mb-1">📐 Brief de diseño disponible</div>
        <p className="text-white/50 text-sm">Usá el brief completo para generar cada pantalla en Claude Design o Figma. Incluye identidad visual, componentes recurrentes y notas de UX por rol.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {pantallas.map((p) => (
          <div key={p.id} className="bg-[#1a2744] border border-white/10 rounded-xl p-5">
            <div className="flex items-start justify-between gap-3 mb-2">
              <div className="flex items-center gap-2">
                <span className="text-white/25 text-xs font-mono">{p.id}</span>
                <span className="text-white font-semibold text-sm">{p.nombre}</span>
              </div>
              <div className="flex gap-1.5 flex-shrink-0">
                <Badge color={rolColor[p.rol] || "gray"}>{p.rol}</Badge>
                <Badge color={faseColor[p.fase as 1|2|3]}>F{p.fase}</Badge>
              </div>
            </div>
            <p className="text-white/45 text-xs leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
