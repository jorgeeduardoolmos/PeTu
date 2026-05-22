"use client";
import { useState } from "react";
import { PageHeader } from "@/components/ui";
import {
  masculinoPrimera, masculinoInferiores,
  femeninoPrimera, femeninoInferiores,
  type Categoria,
} from "@/data/jugadores";

type Genero = "masculino" | "femenino";
type Seccion = "primera" | "inferiores";

const totalJugadores = (cats: Categoria[]) =>
  cats.reduce((a, c) => a + c.jugadores.length, 0);

const totalM = totalJugadores([...masculinoPrimera, ...masculinoInferiores]);
const totalF = totalJugadores([...femeninoPrimera, ...femeninoInferiores]);

export default function JugadoresPage() {
  const [genero, setGenero] = useState<Genero>("masculino");
  const [seccion, setSeccion] = useState<Seccion>("primera");
  const [catIdx, setCatIdx] = useState(0);

  const categorias =
    genero === "masculino"
      ? seccion === "primera" ? masculinoPrimera : masculinoInferiores
      : seccion === "primera" ? femeninoPrimera : femeninoInferiores;

  const categoria = categorias[Math.min(catIdx, categorias.length - 1)];

  function cambiarGenero(g: Genero) {
    setGenero(g);
    setSeccion("primera");
    setCatIdx(0);
  }

  function cambiarSeccion(s: Seccion) {
    setSeccion(s);
    setCatIdx(0);
  }

  return (
    <div>
      <PageHeader
        label="Atlanta Futsal"
        title="Jugadores"
        subtitle={`${totalM} jugadores masculinos · ${totalF} jugadoras femeninas · Temporada 2026`}
      />

      {/* Género */}
      <div className="flex gap-2 mb-5">
        {(["masculino", "femenino"] as Genero[]).map((g) => (
          <button
            key={g}
            onClick={() => cambiarGenero(g)}
            className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
              genero === g
                ? "bg-[#ffd94d] text-[#0f1b2d]"
                : "bg-[#1a2744] text-white/60 hover:text-white border border-white/10"
            }`}
          >
            {g === "masculino" ? "⚽ Masculino" : "⚽ Femenino"}
          </button>
        ))}
      </div>

      {/* Sección */}
      <div className="flex gap-2 mb-5 border-b border-white/10 pb-4">
        {(["primera", "inferiores"] as Seccion[]).map((s) => (
          <button
            key={s}
            onClick={() => cambiarSeccion(s)}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
              seccion === s
                ? "bg-[#ffd94d14] text-[#ffd94d] border border-[#ffd94d30]"
                : "text-white/35 hover:text-white/60"
            }`}
          >
            {s === "primera" ? "Primera División B · AFA" : "Inferiores · LAAMBA"}
          </button>
        ))}
      </div>

      {/* Categorías */}
      <div className="flex gap-2 flex-wrap mb-6">
        {categorias.map((cat, idx) => (
          <button
            key={cat.id}
            onClick={() => setCatIdx(idx)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              catIdx === idx
                ? "bg-[#1a2744] text-white border border-[#ffd94d55]"
                : "text-white/40 hover:text-white/70 hover:bg-[#1a2744] border border-transparent"
            }`}
          >
            {cat.label}
            <span className="ml-1.5 opacity-40 font-normal">({cat.jugadores.length})</span>
          </button>
        ))}
      </div>

      {/* Lista */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {categoria.jugadores.map((j, idx) => (
          <div
            key={idx}
            className="bg-[#1a2744] border border-white/8 rounded-lg px-4 py-3 flex items-center justify-between gap-3"
          >
            <span className="text-white/90 text-sm leading-snug">{j.nombre}</span>
            {j.año && (
              <span className="text-white/25 text-xs font-mono flex-shrink-0">{j.año}</span>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-white/10 text-white/20 text-xs">
        Fuente: AFA COMET (Primera División B) · LAAMBA (Inferiores) · Fecha 7–8, mayo 2026
      </div>
    </div>
  );
}
