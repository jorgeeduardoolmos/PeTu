"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const USERS: Record<string, string> = {
  user: "pass",
  pela: "FernandoAndrés",
  tucu: "soloyo",
  Andres: "Presidente",
  MatiC: "coordinador",
  MatiM: "coordinador",
};

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (USERS[username] === password) {
      document.cookie = `auth=${username}; path=/; max-age=86400; SameSite=Lax`;
      router.push("/");
      router.refresh();
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  }

  return (
    <div className="min-h-screen bg-[#0f1b2d] flex items-center justify-center px-4">
      <div className="bg-[#1a2744] border border-white/10 rounded-2xl p-8 w-full max-w-sm shadow-xl">
        <div className="text-[#ffd94d] font-bold text-2xl tracking-wide mb-1">⚽ La PeTu App</div>
        <div className="text-white/40 text-sm mb-8">Documentación técnica</div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-white/60 text-xs font-semibold uppercase tracking-wider block mb-2">
              Usuario
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => { setUsername(e.target.value); setError(""); }}
              className="w-full bg-[#0f1b2d] border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#ffd94d] transition-colors"
              placeholder="tu usuario"
              autoFocus
              autoComplete="username"
            />
          </div>
          <div>
            <label className="text-white/60 text-xs font-semibold uppercase tracking-wider block mb-2">
              Contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(""); }}
              className="w-full bg-[#0f1b2d] border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#ffd94d] transition-colors"
              placeholder="••••••••"
              autoComplete="current-password"
            />
          </div>

          {error && (
            <p className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-lg px-3 py-2">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-[#ffd94d] text-[#0f1b2d] font-bold py-3 rounded-lg hover:bg-[#ffe566] transition-colors mt-2"
          >
            Ingresar
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-white/10 text-white/20 text-xs text-center">
          Atlanta Futsal · 2026
        </div>
      </div>
    </div>
  );
}
