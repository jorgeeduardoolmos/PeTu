"use client";
import { useState } from "react";
import { PageHeader } from "@/components/ui";
import { principiosTacticos, objetivosGenerales, metodologiaGeneral, type PrincipioCat } from "@/data/metodologia";

const colorMap: Record<PrincipioCat["color"], { border: string; bg: string; badge: string; text: string }> = {
  yellow:  { border: "border-[#ffd94d30]", bg: "bg-[#ffd94d08]", badge: "bg-[#ffd94d20] text-[#ffd94d]",    text: "text-[#ffd94d]" },
  blue:    { border: "border-[#60a5fa30]", bg: "bg-[#60a5fa08]", badge: "bg-[#60a5fa20] text-[#93c5fd]",    text: "text-[#93c5fd]" },
  red:     { border: "border-[#f8717130]", bg: "bg-[#f8717108]", badge: "bg-[#f8717120] text-[#fca5a5]",    text: "text-[#fca5a5]" },
  green:   { border: "border-[#4ade8030]", bg: "bg-[#4ade8008]", badge: "bg-[#4ade8020] text-[#86efac]",    text: "text-[#86efac]" },
  purple:  { border: "border-[#a78bfa30]", bg: "bg-[#a78bfa08]", badge: "bg-[#a78bfa20] text-[#c4b5fd]",    text: "text-[#c4b5fd]" },
  gray:    { border: "border-white/10",    bg: "bg-white/[0.03]", badge: "bg-white/10 text-white/50",        text: "text-white/60" },
};

type Tab = "principios" | "objetivos" | "metodologia";

export default function MetodologiaPage() {
  const [tab, setTab] = useState<Tab>("principios");

  return (
    <div>
      <PageHeader
        label="Atlanta Futsal · Inferiores 2026"
        title="Metodología"
        subtitle="Modelo de juego, principios tácticos y metodología de entrenamiento"
      />

      {/* Tabs */}
      <div className="flex gap-2 mb-6 border-b border-white/10 pb-4">
        {([
          { id: "principios",  label: "⚽ Principios tácticos" },
          { id: "objetivos",   label: "🎯 Objetivos 2026" },
          { id: "metodologia", label: "📋 Metodología" },
        ] as { id: Tab; label: string }[]).map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
              tab === t.id
                ? "bg-[#ffd94d] text-[#0f1b2d]"
                : "text-white/45 hover:text-white/80 hover:bg-white/5"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Principios tácticos */}
      {tab === "principios" && (
        <div className="space-y-4">
          {principiosTacticos.map((p) => {
            const c = colorMap[p.color];
            return (
              <div key={p.id} className={`rounded-xl border ${c.border} ${c.bg} p-5`}>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg">{p.tag}</span>
                  <span className={`text-sm font-bold ${c.text}`}>{p.categoria}</span>
                  <span className={`ml-auto text-xs px-2.5 py-0.5 rounded-full font-semibold ${c.badge}`}>
                    {p.items.length} ítems
                  </span>
                </div>
                <ul className="space-y-2">
                  {p.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-white/65 leading-relaxed">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${c.text} opacity-70`}
                        style={{ background: "currentColor" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      )}

      {/* Objetivos */}
      {tab === "objetivos" && (
        <div>
          <p className="text-white/35 text-sm mb-5">
            Qué jugador queremos en enero del 2027 — objetivos que guían todo el proceso formativo.
          </p>
          <div className="space-y-2">
            {objetivosGenerales.map((obj, i) => (
              <div key={i} className="flex items-start gap-3 bg-[#1a2744] border border-white/8 rounded-lg px-5 py-3.5">
                <span className="text-[#ffd94d] font-mono text-xs font-bold flex-shrink-0 mt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-white/75 text-sm leading-relaxed">{obj}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Metodología */}
      {tab === "metodologia" && (
        <div>
          <p className="text-white/35 text-sm mb-5">
            Pautas generales para todos los cuerpos técnicos — cómo planificar, corregir y sostener el proceso.
          </p>
          <div className="space-y-2">
            {metodologiaGeneral.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-[#1a2744] border border-white/8 rounded-lg px-5 py-3.5">
                <span className="text-white/20 font-mono text-xs font-bold flex-shrink-0 mt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-white/75 text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-8 pt-6 border-t border-white/10 text-white/20 text-xs">
        Fuente: Modelo de Juego y Metodología de Entrenamiento — Inferiores Atlanta Futsal 2026 · MM&MC
      </div>
    </div>
  );
}
