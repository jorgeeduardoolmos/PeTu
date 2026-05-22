"use client";
import { useState } from "react";
import { casos, roles } from "@/data/casos";
import { PageHeader, Badge } from "@/components/ui";

const faseColor: Record<number, "yellow"|"blue"|"green"> = { 1:"yellow", 2:"blue", 3:"green" };
const rolColor: Record<string, "yellow"|"blue"|"green"|"red"|"gray"> = {
  Coordinador:"yellow", Entrenador:"blue", Jugador:"green", Directivo:"red", Familia:"gray",
};

export default function CasosDeUso() {
  const [rolActivo, setRolActivo] = useState("Todos");
  const filtrados = rolActivo === "Todos" ? casos : casos.filter(c => c.rol === rolActivo);

  return (
    <div>
      <PageHeader label="Documentación" title="Casos de uso" subtitle="Qué puede hacer cada rol en la app. 23 casos organizados por actor y fase de desarrollo." />

      <div className="flex flex-wrap gap-2 mb-8">
        {roles.map((r) => (
          <button key={r} onClick={() => setRolActivo(r)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all border ${
              rolActivo === r ? "bg-[#ffd94d] text-[#0f1b2d] border-[#ffd94d]" : "text-white/50 border-white/15 hover:text-white/80 hover:border-white/30"
            }`}>{r}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {filtrados.map((c) => (
          <div key={c.id} className="bg-[#1a2744] border border-white/10 rounded-xl p-5">
            <div className="flex items-start justify-between gap-4 mb-2">
              <div className="flex items-center gap-3">
                <span className="text-white/30 text-xs font-mono">{c.id}</span>
                <h3 className="text-white font-semibold">{c.accion}</h3>
              </div>
              <div className="flex gap-2 flex-shrink-0">
                <Badge color={rolColor[c.rol] || "gray"}>{c.rol}</Badge>
                <Badge color={faseColor[c.fase]}>Fase {c.fase}</Badge>
              </div>
            </div>
            <p className="text-white/55 text-sm leading-relaxed mb-2">{c.descripcion}</p>
            {c.precondiciones && <div className="text-xs text-white/35 mb-1"><span className="text-white/25">Precondición:</span> {c.precondiciones}</div>}
            <div className="text-xs text-[#50c88c]"><span className="text-white/25">Resultado:</span> {c.resultado}</div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-white/25 text-xs">{filtrados.length} casos{rolActivo !== "Todos" ? ` para ${rolActivo}` : " en total"}</div>
    </div>
  );
}
