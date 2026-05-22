"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "🏠 Overview", },
  { href: "/casos-de-uso", label: "👥 Casos de uso" },
  { href: "/reglas-negocio", label: "📋 Reglas de negocio" },
  { href: "/wireframes", label: "📱 Wireframes" },
  { href: "/arquitectura", label: "🏗️ Arquitectura" },
  { href: "/roadmap", label: "🗓️ Roadmap" },
];

export default function Sidebar() {
  const path = usePathname();
  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-[#1a2744] border-r border-white/10 flex flex-col z-50">
      {/* Logo */}
      <div className="px-6 py-6 border-b border-white/10">
        <div className="text-[#ffd94d] font-bold text-xl tracking-wide">⚽ La PeTu App</div>
        <div className="text-white/40 text-xs mt-1">Documentación técnica</div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {nav.map((item) => {
          const active = path === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm transition-all ${
                active
                  ? "bg-[#ffd94d] text-[#0f1b2d] font-semibold"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-white/10">
        <div className="text-white/25 text-xs">Atlanta Futsal · 2026</div>
      </div>
    </aside>
  );
}
