import Link from "next/link";

const sections = [
  {
    href: "/casos-de-uso",
    icon: "👥",
    title: "Casos de uso",
    desc: "23 casos organizados por rol: Coordinador, Entrenador, Jugador, Directivo y Familia.",
    color: "#63b3ff",
  },
  {
    href: "/reglas-negocio",
    icon: "📋",
    title: "Reglas de negocio",
    desc: "RN-01 a RN-27. Quién puede hacer qué, cuándo y bajo qué condiciones.",
    color: "#ffd94d",
  },
  {
    href: "/wireframes",
    icon: "📱",
    title: "Wireframes",
    desc: "20 pantallas diseñadas: splash, login, dashboards por rol, convocatoria, fixture y más.",
    color: "#50c88c",
  },
  {
    href: "/arquitectura",
    icon: "🏗️",
    title: "Arquitectura",
    desc: "Diagrama de roles, flujos de datos y decisiones técnicas del sistema.",
    color: "#f87171",
  },
  {
    href: "/roadmap",
    icon: "🗓️",
    title: "Roadmap",
    desc: "3 fases con 16 features. Estado actual de desarrollo de cada funcionalidad.",
    color: "#a78bfa",
  },
];

const roles = [
  { icon: "🧠", name: "Coordinador", desc: "Mati Maranzano — carga modelo de juego, define contenidos, hace seguimiento de entrenadores.", color: "#ffd94d" },
  { icon: "🎽", name: "Entrenador", desc: "Tito, Panchi, Facu, Pablito — gestiona su categoría: convocatoria, asistencia, planificación.", color: "#63b3ff" },
  { icon: "⚡", name: "Jugador", desc: "Ve su convocatoria, fixture, objetivos y estadísticas personales.", color: "#50c88c" },
  { icon: "🏛️", name: "Directivo", desc: "Andrés Lobo — gestión institucional: fichajes, contratos, presupuesto.", color: "#f87171" },
  { icon: "👨‍👩‍👦", name: "Familia", desc: "Vista reducida: fixture, resultados y tabla de posiciones.", color: "#a78bfa" },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <div className="mb-12">
        <div className="inline-block bg-[#ffd94d22] border border-[#ffd94d44] text-[#ffd94d] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
          ⚽ Atlanta Futsal Inferiores
        </div>
        <h1 className="text-5xl font-bold text-white mb-4 leading-tight">
          La PeTu App<br />
          <span className="text-[#ffd94d]">Documentación técnica</span>
        </h1>
        <p className="text-white/50 text-lg max-w-2xl leading-relaxed">
          Plataforma de gestión deportiva para Atlanta Futsal Inferiores. Conecta coordinadores,
          entrenadores, jugadores, directivos y familias en una sola app.
        </p>
      </div>

      {/* Roles */}
      <div className="mb-12">
        <h2 className="text-white/40 text-xs font-bold tracking-widest uppercase mb-4">5 roles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {roles.map((r) => (
            <div key={r.name} className="bg-[#1a2744] border border-white/10 rounded-xl p-4 flex gap-3">
              <span className="text-2xl flex-shrink-0">{r.icon}</span>
              <div>
                <div className="font-semibold text-white text-sm mb-1" style={{ color: r.color }}>{r.name}</div>
                <div className="text-white/45 text-xs leading-relaxed">{r.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats rápidas */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
        {[
          { n: "316", label: "Socios activos" },
          { n: "6", label: "Categorías" },
          { n: "23", label: "Casos de uso" },
          { n: "27", label: "Reglas de negocio" },
        ].map((s) => (
          <div key={s.label} className="bg-[#1a2744] border border-white/10 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-[#ffd94d]">{s.n}</div>
            <div className="text-white/40 text-xs mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Secciones */}
      <h2 className="text-white/40 text-xs font-bold tracking-widest uppercase mb-4">Secciones</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sections.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="bg-[#1a2744] border border-white/10 rounded-xl p-5 hover:border-[#ffd94d44] transition-all group"
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl">{s.icon}</span>
              <div>
                <div className="font-semibold text-white group-hover:text-[#ffd94d] transition-colors mb-1">
                  {s.title} →
                </div>
                <div className="text-white/45 text-sm leading-relaxed">{s.desc}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Footer info */}
      <div className="mt-12 pt-8 border-t border-white/10 text-white/25 text-xs">
        Reunión de kick-off: 15 mayo 2026 · Participantes: Andrés Lobo, Matías Maranzano, Matías Castagnola, Pela (dev), Jorge Olmos
      </div>
    </div>
  );
}
