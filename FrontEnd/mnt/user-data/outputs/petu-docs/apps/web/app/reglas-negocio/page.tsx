"use client";
import { useState } from "react";
import { reglas, categorias } from "@/data/reglas";
import { PageHeader, Badge } from "@/components/ui";

const catColor: Record<string, "yellow" | "blue" | "green" | "red" | "gray"> = {
  Convocatoria: "yellow",
  Planificación: "blue",
  Asistencia: "green",
  Fixture: "blue",
  Jugadores: "green",
  Acceso: "red",
  Necesidades: "gray",
};

export default function ReglasNegocio() {
  const [catActiva, setCatActiva] = useState("Todas");
  const [busqueda, setBusqueda] = useState("");

  const filtradas = reglas.filter(r => {
    const matchCat = catActiva === "Todas" || r.categoria === catActiva;
    const matchBusq = busqueda === "" ||
      r.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
      r.descripcion.toLowerCase().includes(busqueda.toLowerCase()) ||
      r.id.toLowerCase().includes(busqueda.toLowerCase());
    return matchCat && matchBusq;
  });

  return (
    <div>
      <PageHeader
        label="Documentación"
        title="Reglas de negocio"
        subtitle="RN-01 a RN-27. Definen quién puede hacer qué, cuándo y bajo qué condiciones. Base para el desarrollo del backend."
      />

      {/* Búsqueda */}
      <input
        type="text"
        placeholder="Buscar por ID, título o descripción..."
        value={busqueda}
        onChange={e => setBusqueda(e.target.value)}
        className="w-full bg-[#1a2744] border border-white/15 rounded-xl px-4 py-3 text-white/80 text-sm mb-4 placeholder:text-white/25 focus:outline-none focus:border-[#ffd94d44]"
      />

      {/* Filtros */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categorias.map((c) => (
          <button
            key={c}
            onClick={() => setCatActiva(c)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-all border ${
              catActiva === c
                ? "bg-[#ffd94d] text-[#0f1b2d] border-[#ffd94d]"
                : "bg-transparent text-white/50 border-white/15 hover:border-white/30"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Lista */}
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

      <div className="mt-6 text-white/25 text-xs">{filtradas.length} reglas{catActiva !== "Todas" ? ` en categoría ${catActiva}` : " en total"}</div>
    </div>
  );
}
