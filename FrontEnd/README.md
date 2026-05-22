# La PeTu App — Documentación del Proyecto

Web de documentación técnica para **La PeTu App**, plataforma de gestión deportiva para Atlanta Futsal Inferiores.

## Stack

- **Frontend:** Next.js 14 (App Router) + TypeScript + Tailwind CSS
- **Deploy:** Vercel
- **Repo:** Monorepo con npm workspaces

## Estructura

```
petu-docs/
├── apps/
│   └── web/          # Next.js app → Vercel
└── package.json      # root workspaces
```

## Correr localmente

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

## Deploy en Vercel

1. Importar repo en [vercel.com](https://vercel.com)
2. Root directory: `apps/web`
3. Framework: Next.js
4. Deploy automático en cada push a `main`

## Secciones

| Sección | URL | Descripción |
|---|---|---|
| Home | `/` | Overview del proyecto |
| Casos de uso | `/casos-de-uso` | Por rol |
| Reglas de negocio | `/reglas-negocio` | RN-01 a RN-27 |
| Wireframes | `/wireframes` | Pantallas de la app |
| Arquitectura | `/arquitectura` | Diagrama técnico |
| Roadmap | `/roadmap` | Fases y estado |
