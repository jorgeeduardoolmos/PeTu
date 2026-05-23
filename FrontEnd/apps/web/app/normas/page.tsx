import { PageHeader } from "@/components/ui";

export default function NormasPage() {
  return (
    <div>
      <PageHeader
        label="Atlanta Futsal"
        title="Normas"
        subtitle="Reglamento interno y normas de convivencia del club"
      />

      <div className="mt-6 bg-[#1a2744] border border-[#ffd94d22] rounded-2xl p-10 flex flex-col items-center text-center gap-4">
        <div className="w-14 h-14 rounded-full bg-[#ffd94d14] border border-[#ffd94d30] flex items-center justify-center text-2xl">
          📜
        </div>
        <div>
          <h2 className="text-white/80 text-lg font-semibold mb-1">Próximamente</h2>
          <p className="text-white/35 text-sm max-w-sm leading-relaxed">
            El reglamento interno y las normas de convivencia del club serán cargados en esta sección.
          </p>
        </div>
        <div className="mt-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/30 text-xs font-semibold tracking-wider uppercase">
          Pendiente
        </div>
      </div>
    </div>
  );
}
