// Badge
export function Badge({ children, color = "yellow" }: { children: React.ReactNode; color?: "yellow" | "blue" | "green" | "red" | "gray" }) {
  const colors = {
    yellow: "bg-[#ffd94d22] text-[#ffd94d] border-[#ffd94d44]",
    blue:   "bg-[#63b3ff22] text-[#63b3ff] border-[#63b3ff44]",
    green:  "bg-[#50c88c22] text-[#50c88c] border-[#50c88c44]",
    red:    "bg-[#f8717122] text-[#f87171] border-[#f8717144]",
    gray:   "bg-white/5 text-white/40 border-white/10",
  };
  return (
    <span className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full border ${colors[color]}`}>
      {children}
    </span>
  );
}

// Section header
export function PageHeader({ label, title, subtitle }: { label: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-10">
      <div className="text-[#ffd94d] text-xs font-bold tracking-widest uppercase mb-2">{label}</div>
      <h1 className="text-4xl font-bold text-white mb-3">{title}</h1>
      {subtitle && <p className="text-white/50 text-base max-w-2xl leading-relaxed">{subtitle}</p>}
    </div>
  );
}

// Card
export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-[#1a2744] border border-white/10 rounded-xl p-6 ${className}`}>
      {children}
    </div>
  );
}

// Divider
export function Divider() {
  return <hr className="border-white/10 my-8" />;
}

// Table
export function Table({ headers, rows }: { headers: string[]; rows: (string | React.ReactNode)[][] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-white/10">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-white/5 border-b border-white/10">
            {headers.map((h, i) => (
              <th key={i} className="text-left px-4 py-3 text-white/60 font-semibold text-xs uppercase tracking-wider">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-white/5 hover:bg-white/3 transition-colors">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-white/80">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
