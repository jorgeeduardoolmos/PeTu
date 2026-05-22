import { PageHeader } from "@/components/ui";

const decisiones = [
  { pregunta: "¿Autenticación propia o Firebase/Supabase?", estado: "pendiente", nota: "Supabase Auth recomendado por velocidad de desarrollo y soporte a roles." },
  { pregunta: "¿El primer login tiene paso de 'elegir club'?", estado: "pendiente", nota: "Por ahora el admin asigna el club al crear la cuenta." },
  { pregunta: "¿Base de datos SQL o NoSQL?", estado: "pendiente", nota: "PostgreSQL recomendado por las relaciones entre roles, categorías y jugadores." },
  { pregunta: "¿Notificaciones push o solo in-app?", estado: "pendiente", nota: "Push para convocatorias es crítico — Expo Notifications o Firebase FCM." },
  { pregunta: "¿App nativa o web?", estado: "pendiente", nota: "React Native (Expo) recomendado para mobile. Next.js para admin web." },
];

export default function Arquitectura() {
  return (
    <div>
      <PageHeader
        label="Documentación"
        title="Arquitectura"
        subtitle="Diagrama de roles, flujos de datos y decisiones técnicas pendientes."
      />

      {/* Diagrama de roles SVG */}
      <div className="bg-[#1a2744] border border-white/10 rounded-xl p-6 mb-8 overflow-x-auto">
        <div className="text-white/40 text-xs font-bold uppercase tracking-widest mb-4">Diagrama de roles y acceso</div>
        <svg viewBox="0 0 800 420" className="w-full max-w-3xl" xmlns="http://www.w3.org/2000/svg">
          {/* Coordinador — centro arriba */}
          <rect x="310" y="20" width="180" height="56" rx="12" fill="#ffd94d22" stroke="#ffd94d44" strokeWidth="1"/>
          <text x="400" y="46" textAnchor="middle" fill="#ffd94d" fontSize="12" fontWeight="700">🧠 COORDINADOR</text>
          <text x="400" y="62" textAnchor="middle" fill="#ffd94d88" fontSize="10">Mati Maranzano</text>

          {/* Líneas del coordinador hacia abajo */}
          <line x1="400" y1="76" x2="160" y2="160" stroke="#ffd94d33" strokeWidth="1" strokeDasharray="4"/>
          <line x1="400" y1="76" x2="400" y2="160" stroke="#ffd94d33" strokeWidth="1" strokeDasharray="4"/>
          <line x1="400" y1="76" x2="640" y2="160" stroke="#ffd94d33" strokeWidth="1" strokeDasharray="4"/>

          {/* Entrenador */}
          <rect x="70" y="160" width="180" height="56" rx="12" fill="#63b3ff22" stroke="#63b3ff44" strokeWidth="1"/>
          <text x="160" y="186" textAnchor="middle" fill="#63b3ff" fontSize="12" fontWeight="700">🎽 ENTRENADOR</text>
          <text x="160" y="202" textAnchor="middle" fill="#63b3ff88" fontSize="10">Tito · Panchi · Facu · Pablito</text>

          {/* Directivo */}
          <rect x="310" y="160" width="180" height="56" rx="12" fill="#f8717122" stroke="#f8717144" strokeWidth="1"/>
          <text x="400" y="186" textAnchor="middle" fill="#f87171" fontSize="12" fontWeight="700">🏛️ DIRECTIVO</text>
          <text x="400" y="202" textAnchor="middle" fill="#f8717188" fontSize="10">Andrés Lobo</text>

          {/* Delegado */}
          <rect x="550" y="160" width="180" height="56" rx="12" fill="#a78bfa22" stroke="#a78bfa44" strokeWidth="1"/>
          <text x="640" y="186" textAnchor="middle" fill="#a78bfa" fontSize="12" fontWeight="700">📋 DELEGADO</text>
          <text x="640" y="202" textAnchor="middle" fill="#a78bfa88" fontSize="10">Por categoría</text>

          {/* Líneas del entrenador hacia abajo */}
          <line x1="160" y1="216" x2="100" y2="300" stroke="#63b3ff33" strokeWidth="1" strokeDasharray="4"/>
          <line x1="160" y1="216" x2="220" y2="300" stroke="#63b3ff33" strokeWidth="1" strokeDasharray="4"/>

          {/* Jugador */}
          <rect x="30" y="300" width="140" height="56" rx="12" fill="#50c88c22" stroke="#50c88c44" strokeWidth="1"/>
          <text x="100" y="326" textAnchor="middle" fill="#50c88c" fontSize="12" fontWeight="700">⚡ JUGADOR</text>
          <text x="100" y="342" textAnchor="middle" fill="#50c88c88" fontSize="10">4ta a 8va + Promo</text>

          {/* Familia */}
          <rect x="190" y="300" width="140" height="56" rx="12" fill="#ffffff11" stroke="#ffffff22" strokeWidth="1"/>
          <text x="260" y="326" textAnchor="middle" fill="#ffffff88" fontSize="12" fontWeight="700">👨‍👩‍👦 FAMILIA</text>
          <text x="260" y="342" textAnchor="middle" fill="#ffffff44" fontSize="10">Vista reducida</text>

          {/* Leyenda */}
          <text x="400" y="380" textAnchor="middle" fill="#ffffff33" fontSize="10">— — — flujo de datos / permisos</text>
        </svg>
      </div>

      {/* Stack técnico */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {[
          { titulo: "Frontend / App móvil", items: ["React Native (Expo)", "TypeScript", "Expo Router", "Expo Notifications (push)"], color: "#63b3ff" },
          { titulo: "Backend / API", items: ["Node.js + Express o Fastify", "PostgreSQL", "Supabase (Auth + DB)", "Railway (hosting)"], color: "#ffd94d" },
          { titulo: "Web admin / Docs", items: ["Next.js 14 (App Router)", "TypeScript + Tailwind", "Vercel (hosting)", "Este sitio →"], color: "#50c88c" },
        ].map((s) => (
          <div key={s.titulo} className="bg-[#1a2744] border border-white/10 rounded-xl p-5">
            <div className="font-semibold mb-3 text-sm" style={{ color: s.color }}>{s.titulo}</div>
            <ul className="space-y-1.5">
              {s.items.map(i => (
                <li key={i} className="text-white/55 text-sm flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-white/25 flex-shrink-0" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Decisiones pendientes */}
      <div>
        <div className="text-white/40 text-xs font-bold uppercase tracking-widest mb-4">Decisiones técnicas pendientes</div>
        <div className="space-y-3">
          {decisiones.map((d, i) => (
            <div key={i} className="bg-[#ffd94d08] border border-[#ffd94d22] rounded-xl p-4">
              <div className="flex items-start gap-3">
                <span className="text-[#ffd94d] text-sm flex-shrink-0">⚡</span>
                <div>
                  <div className="text-white font-medium text-sm mb-1">{d.pregunta}</div>
                  <div className="text-white/45 text-xs">{d.nota}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
