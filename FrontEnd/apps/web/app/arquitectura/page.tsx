import { PageHeader } from "@/components/ui";

const decisiones = [
  { q:"¿Autenticación propia o Firebase/Supabase?", nota:"Supabase Auth recomendado por velocidad de desarrollo y soporte a roles." },
  { q:"¿El primer login tiene paso de elegir club?", nota:"Por ahora el admin asigna el club al crear la cuenta." },
  { q:"¿Base de datos SQL o NoSQL?", nota:"PostgreSQL recomendado por las relaciones entre roles, categorías y jugadores." },
  { q:"¿Notificaciones push o solo in-app?", nota:"Push para convocatorias es crítico — Expo Notifications o Firebase FCM." },
  { q:"¿App nativa o web?", nota:"React Native (Expo) recomendado para mobile. Next.js para admin web." },
];

const stack = [
  { titulo:"App móvil", items:["React Native (Expo)","TypeScript","Expo Router","Expo Notifications"], color:"#63b3ff" },
  { titulo:"Backend / API", items:["Node.js + Express","PostgreSQL","Supabase (Auth + DB)","Railway (hosting)"], color:"#ffd94d" },
  { titulo:"Web / Docs", items:["Next.js 14 (App Router)","TypeScript + Tailwind","Vercel (hosting)","Este sitio →"], color:"#50c88c" },
];

export default function Arquitectura() {
  return (
    <div>
      <PageHeader label="Documentación" title="Arquitectura" subtitle="Diagrama de roles, flujos de datos y decisiones técnicas pendientes." />

      <div className="bg-[#1a2744] border border-white/10 rounded-xl p-6 mb-8 overflow-x-auto">
        <div className="text-white/40 text-xs font-bold uppercase tracking-widest mb-4">Diagrama de roles y acceso</div>
        <svg viewBox="0 0 800 380" className="w-full max-w-3xl" xmlns="http://www.w3.org/2000/svg">
          <rect x="310" y="20" width="180" height="56" rx="12" fill="#ffd94d22" stroke="#ffd94d44" strokeWidth="1"/>
          <text x="400" y="46" textAnchor="middle" fill="#ffd94d" fontSize="12" fontWeight="700">🧠 COORDINADOR</text>
          <text x="400" y="62" textAnchor="middle" fill="#ffd94d88" fontSize="10">Mati Maranzano</text>
          <line x1="400" y1="76" x2="160" y2="150" stroke="#ffd94d33" strokeWidth="1" strokeDasharray="4"/>
          <line x1="400" y1="76" x2="400" y2="150" stroke="#ffd94d33" strokeWidth="1" strokeDasharray="4"/>
          <line x1="400" y1="76" x2="640" y2="150" stroke="#ffd94d33" strokeWidth="1" strokeDasharray="4"/>
          <rect x="70" y="150" width="180" height="56" rx="12" fill="#63b3ff22" stroke="#63b3ff44" strokeWidth="1"/>
          <text x="160" y="176" textAnchor="middle" fill="#63b3ff" fontSize="12" fontWeight="700">🎽 ENTRENADOR</text>
          <text x="160" y="192" textAnchor="middle" fill="#63b3ff88" fontSize="10">Tito · Panchi · Facu · Pablito</text>
          <rect x="310" y="150" width="180" height="56" rx="12" fill="#f8717122" stroke="#f8717144" strokeWidth="1"/>
          <text x="400" y="176" textAnchor="middle" fill="#f87171" fontSize="12" fontWeight="700">🏛️ DIRECTIVO</text>
          <text x="400" y="192" textAnchor="middle" fill="#f8717188" fontSize="10">Andrés Lobo</text>
          <rect x="550" y="150" width="180" height="56" rx="12" fill="#a78bfa22" stroke="#a78bfa44" strokeWidth="1"/>
          <text x="640" y="176" textAnchor="middle" fill="#a78bfa" fontSize="12" fontWeight="700">📋 DELEGADO</text>
          <text x="640" y="192" textAnchor="middle" fill="#a78bfa88" fontSize="10">Por categoría</text>
          <line x1="160" y1="206" x2="100" y2="280" stroke="#63b3ff33" strokeWidth="1" strokeDasharray="4"/>
          <line x1="160" y1="206" x2="240" y2="280" stroke="#63b3ff33" strokeWidth="1" strokeDasharray="4"/>
          <rect x="30" y="280" width="140" height="56" rx="12" fill="#50c88c22" stroke="#50c88c44" strokeWidth="1"/>
          <text x="100" y="306" textAnchor="middle" fill="#50c88c" fontSize="12" fontWeight="700">⚡ JUGADOR</text>
          <text x="100" y="322" textAnchor="middle" fill="#50c88c88" fontSize="10">4ta a 8va + Promo</text>
          <rect x="190" y="280" width="140" height="56" rx="12" fill="#ffffff11" stroke="#ffffff22" strokeWidth="1"/>
          <text x="260" y="306" textAnchor="middle" fill="#ffffff88" fontSize="12" fontWeight="700">👨‍👩‍👦 FAMILIA</text>
          <text x="260" y="322" textAnchor="middle" fill="#ffffff44" fontSize="10">Vista reducida</text>
          <text x="400" y="360" textAnchor="middle" fill="#ffffff33" fontSize="10">— — — flujo de datos / permisos</text>
        </svg>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {stack.map((s) => (
          <div key={s.titulo} className="bg-[#1a2744] border border-white/10 rounded-xl p-5">
            <div className="font-semibold mb-3 text-sm" style={{ color: s.color }}>{s.titulo}</div>
            <ul className="space-y-1.5">
              {s.items.map(i => (
                <li key={i} className="text-white/55 text-sm flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-white/25 flex-shrink-0"/>
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="text-white/40 text-xs font-bold uppercase tracking-widest mb-4">Decisiones técnicas pendientes</div>
      <div className="space-y-3">
        {decisiones.map((d, i) => (
          <div key={i} className="bg-[#ffd94d08] border border-[#ffd94d22] rounded-xl p-4">
            <div className="flex items-start gap-3">
              <span className="text-[#ffd94d] text-sm flex-shrink-0">⚡</span>
              <div>
                <div className="text-white font-medium text-sm mb-1">{d.q}</div>
                <div className="text-white/45 text-xs">{d.nota}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
