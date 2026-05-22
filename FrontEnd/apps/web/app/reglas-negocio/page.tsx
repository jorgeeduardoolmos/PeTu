"use client";
import { useState } from "react";
import { reglas, categorias } from "@/data/reglas";
import { PageHeader, Badge } from "@/components/ui";

const catColor: Record<string, "yellow"|"blue"|"green"|"red"|"gray"> = {
  Convocatoria:"yellow", Planificación:"blue", Asistencia:"green", Fixture:"blue", Jugadores:"green", Acceso:"red", Necesidades:"gray",
};

export default function ReglasNegocio() {
  const [cat, setCat] = useState("Todas");
  const [q, setQ] = useState("");

  const filtradas = reglas.filter(r => {
    const matchCat = cat === "Todas" || r.categoria === cat;
    const matchQ = q === "" || r.titulo.toLowerCase().includes(q.toLowerCase()) || r.descripcion.toLowerCase().includes(q.toLowerCase()) || r.id.toLowerCase().includes(q.toLowerCase());
    return matchCat && matchQ;
  });

  return (
    <div>
      <PageHeader label="Documentación" title="Reglas de negocio" subtitle="RN-01 a RN-27. Definen quién puede hacer qué, cuándo y bajo qué condiciones." />

      <input type="text" placeholder="Buscar por ID, título o descripción..." value={q} onChange={e => setQ(e.target.value)}
        className="w-full bg-[#1a2744] border border-white/15 rounded-xl px-4 py-3 text-white/80 text-sm mb-4 placeholder:text-white/25 focus:outline-none focus:border-[#ffd94d44]" />

      <div className="flex flex-wrap gap-2 mb-8">
        {categorias.map((c) => (
          <button key={c} onClick={() => setCat(c)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-all border ${
              cat === c ? "bg-[#ffd94d] text-[#0f1b2d] border-[#ffd94d]" : "text-white/50 border-white/15 hover:border-white/30"
            }`}>{c}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {filtradas.map((r) => (
          <div key={r.id} className="bg-[#1a2744] border border-white/10 rounded-xl p-5">
            <div className="flex items-start justify-between gap-4 mb-2">
              <div className="flex items-center gap-3">
                <span className="text-white/30 text-xs font-mono font-bold">{r.id}</span>
                <h3 className="text-white font-semibold">{r.titulo}</h3>
              </div>
              <Badge color={catColor[r.categoria] || "gray"}>{r.categoria}</Badge>
            </div>
            <p className="text-white/55 text-sm leading-relaxed">{r.descripcion}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 text-white/25 text-xs">{filtradas.length} reglas{cat !== "Todas" ? ` en ${cat}` : " en total"}</div>
    </div>
  );
}
