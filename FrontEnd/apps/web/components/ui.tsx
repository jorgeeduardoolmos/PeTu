export function Badge({ children, color = "yellow" }: { children: React.ReactNode; color?: "yellow"|"blue"|"green"|"red"|"gray" }) {
  const c = { yellow: "bg-[#ffd94d22] text-[#ffd94d] border-[#ffd94d44]", blue: "bg-[#63b3ff22] text-[#63b3ff] border-[#63b3ff44]", green: "bg-[#50c88c22] text-[#50c88c] border-[#50c88c44]", red: "bg-[#f8717122] text-[#f87171] border-[#f8717144]", gray: "bg-white/5 text-white/40 border-white/10" };
  return <span className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full border ${c[color]}`}>{children}</span>;
}

export function PageHeader({ label, title, subtitle }: { label: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-10">
      <div className="text-[#ffd94d] text-xs font-bold tracking-widest uppercase mb-2">{label}</div>
      <h1 className="text-4xl font-bold text-white mb-3">{title}</h1>
      {subtitle && <p className="text-white/50 text-base max-w-2xl leading-relaxed">{subtitle}</p>}
    </div>
  );
}

export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`bg-[#1a2744] border border-white/10 rounded-xl p-6 ${className}`}>{children}</div>;
}
