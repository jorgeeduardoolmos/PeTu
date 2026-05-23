import { PageHeader } from "@/components/ui";

export default function MetodologiaPage() {
  return (
    <div>
      <PageHeader
        label="Atlanta Futsal"
        title="Metodología"
        subtitle="Modelo de juego, roles y estructura de entrenamiento"
      />

      <div className="mt-6 bg-[#1a2744] border border-[#ffd94d22] rounded-2xl p-10 flex flex-col items-center text-center gap-4">
        <div className="w-14 h-14 rounded-full bg-[#ffd94d14] border border-[#ffd94d30] flex items-center justify-center text-2xl">
          🔧
        </div>
        <div>
          <h2 className="text-white/80 text-lg font-semibold mb-1">En preparación</h2>
          <p className="text-white/35 text-sm max-w-sm leading-relaxed">
            El contenido de metodología, modelo de juego y estructura de roles está siendo preparado.
            Se cargará una vez disponible el documento oficial.
          </p>
        </div>
        <div className="mt-2 px-4 py-1.5 rounded-full border border-[#ffd94d30] bg-[#ffd94d0a] text-[#ffd94d] text-xs font-semibold tracking-wider uppercase">
          WIP · Work in progress
        </div>
      </div>
    </div>
  );
}
