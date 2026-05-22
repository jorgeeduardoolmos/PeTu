import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "La PeTu App — Docs",
  description: "Documentación técnica del proyecto La PeTu App — Atlanta Futsal Inferiores",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="flex min-h-screen bg-[#0f1b2d]">
        <Sidebar />
        <main className="flex-1 ml-64 min-h-screen">
          <div className="max-w-5xl mx-auto px-8 py-10">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
