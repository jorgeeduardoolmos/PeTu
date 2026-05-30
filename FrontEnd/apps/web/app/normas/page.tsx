import { PageHeader } from "@/components/ui";
import { normas } from "@/data/normas";

export default function NormasPage() {
  return (
    <div>
      <PageHeader
        label="Atlanta Futsal · Reglamento Institucional 2026"
        title="Normas"
        subtitle="Normas de convivencia y hábitos del deportista"
      />

      <div className="space-y-6 mt-2">
        {normas.map((seccion) => (
          <div key={seccion.id} className="bg-[#1a2744] border border-white/10 rounded-xl p-6">
            <div className="mb-4">
              <h2 className="text-white font-semibold text-base">{seccion.titulo}</h2>
              {seccion.subtitulo && (
                <p className="text-white/35 text-xs mt-0.5">{seccion.subtitulo}</p>
              )}
            </div>

            {(seccion.tipo === "parrafo" || seccion.tipo === "parrafo+lista") && seccion.parrafo && (
              <p className="text-white/60 text-sm leading-relaxed mb-4">{seccion.parrafo}</p>
            )}

            {(seccion.tipo === "lista" || seccion.tipo === "parrafo+lista") && seccion.items && (
              <ul className="space-y-3">
                {seccion.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/60 leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#ffd94d] opacity-60 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-white/10 text-white/20 text-xs">
        Fuente: Modelo de Juego y Metodología de Entrenamiento — Inferiores Atlanta Futsal 2026 · MM&MC
      </div>
    </div>
  );
}
