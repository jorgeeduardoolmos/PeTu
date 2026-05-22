import type { Metadata } from "next";
import "./globals.css";
import AuthLayout from "@/components/AuthLayout";

export const metadata: Metadata = {
  title: "La PeTu App — Docs",
  description: "Documentación técnica — Atlanta Futsal Inferiores",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-[#0f1b2d]">
        <AuthLayout>{children}</AuthLayout>
      </body>
    </html>
  );
}
