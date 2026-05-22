import { roadmap } from "@/data/roadmap";
import { PageHeader, Badge } from "@/components/ui";

const estadoLabel: Record<string, { label: string; color: "green"|"yellow"|"gray" }> = {
  "completado":  { label: "✅ Completado",  color: "green"  },
  "en-progreso": { label: "🔄 En progreso", color: "yellow" },
  "pendiente":   { label: "⏳ Pendiente",   color: "gray"   },
};

export default function Roadmap() {
  return (
    <div>
      <PageHeader label="Documentación" title="Roadmap" subtitle="3 fases priorizadas por impacto real. Primero lo que duele hoy, después lo que genera retención, finalmente lo que escala." />
      <div className="space-y-10">
        {roadmap.map((fase) => (
          <div key={fase.numero}>
            <div className="border rounded-xl p-5 mb-4" style={{ borderColor:`${fase.color}44`, background:`${fase.color}08` }}>
              <div className="flex items-center gap-4 flex-wrap">
                <span className="font-black text-5xl opacity-20" style={{ color: fase.color, fontFamily:"Impact,sans-serif" }}>{String(fase.numero).padStart(2,"0")}</span>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold tracking-widest uppercase px-3 py-0.5 rounded-full border" style={{ color:fase.color, borderColor:`${fase.color}44`, background:`${fase.color}15` }}>{fase.periodo}</span>
                  </div>
                  <div className="text-white font-bold text-xl">{fase.titulo}</div>
                  <div className="text-white/40 text-sm">{fase.subtitulo}</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {fase.features.map((f) => {
                const est = estadoLabel[f.estado];
                return (
                  <div key={f.id} className="bg-[#1a2744] border border-white/10 rounded-xl p-4">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-white/25 text-xs font-mono">{f.id}</span>
                        <span className="text-white font-semibold text-sm">{f.nombre}</span>
                      </div>
                      <Badge color={est.color}>{est.label}</Badge>
                    </div>
                    <p className="text-white/45 text-xs leading-relaxed mb-2">{f.descripcion}</p>
                    <div className="flex flex-wrap gap-1">
                      {f.rol.map(r => <span key={r} className="text-xs bg-white/5 border border-white/10 px-2 py-0.5 rounded-full text-white/40">{r}</span>)}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
