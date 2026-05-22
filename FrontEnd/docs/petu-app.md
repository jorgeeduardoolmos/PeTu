# La PeTu App — Documentación técnica

**Atlanta Futsal Inferiores** · Aplicación móvil de gestión deportiva
Diseño hi-fi · React + JSX inline · 2 entregas

---

## 📦 Qué hay acá

Este proyecto contiene **dos entregables visuales** independientes:

| Archivo | Qué es | Cuándo usarlo |
|---|---|---|
| `petu-app-prototipo.html` | **Prototipo interactivo navegable** — dos teléfonos lado a lado (iOS + Android) con estado compartido en vivo, 8 pantallas estrella, flujos reales | Demo del flujo de convocatoria, pitch a comisión, validación con entrenadores |
| `petu-app-wireframes.html` | **20 pantallas estáticas** en un canvas pan/zoom, organizadas por rol | Documentación de scope, handoff a desarrollo, referencia visual completa |

Ambos archivos son **HTML self-contained** (todo embebido: fuentes, React, código). No tienen dependencias externas — los abrís haciendo doble click o los subís a cualquier servidor estático y funcionan.

---

## 🚀 Cómo subirlo a tu web

### Opción 1 — Hosting estático (recomendado)

Subí los dos `.html` de la carpeta `dist/` a cualquiera de estos servicios. **Cero configuración**, gratis, listo en 5 minutos:

- **Netlify Drop** — arrastrás la carpeta `dist/` a [app.netlify.com/drop](https://app.netlify.com/drop) y listo
- **Vercel** — `vercel deploy dist/` desde la terminal
- **GitHub Pages** — pusheás la carpeta a un repo y activás Pages
- **Cloudflare Pages** — conectás un repo o subís un ZIP

### Opción 2 — Tu propio servidor / WordPress / etc.

Subí los archivos al directorio público de tu web (típicamente `public/`, `www/` o `htdocs/`). Cualquier servidor que sirva HTML estático sirve — Apache, Nginx, IIS, etc. **No necesita PHP, Node, ni base de datos.**

Linkealos donde quieras:
```html
<a href="/petu-app-prototipo.html">Ver prototipo interactivo</a>
<a href="/petu-app-wireframes.html">Ver wireframes (20 pantallas)</a>
```

### Opción 3 — Compartir por link directo

Subí los archivos a Google Drive / Dropbox / OneDrive, hacelos públicos, y compartí el link. Los reproductores web modernos abren HTML directamente.

> **Nota:** Si los subís a Google Drive y querés que se vean inline (no como descarga), usá un wrapper como [drive.google.com/uc?export=view&id=...](https://drive.google.com)

---

## 🏗️ Arquitectura del proyecto fuente

```
.
├── La PeTu App.html              ← entrada principal: PROTOTIPO
├── PeTu App - Wireframes.html    ← entrada principal: WIREFRAMES
├── styles.css                    ← tokens globales (colors, fonts)
│
├── PROTOTIPO
│   ├── data.jsx                  ← mock data (plantel, fixture, etc.)
│   ├── ui.jsx                    ← design system (Card, Button, Avatar...)
│   ├── screens-entrenador.jsx    ← 4 pantallas del entrenador
│   ├── screens-jugador.jsx       ← 4 pantallas del jugador
│   ├── screens-otros.jsx         ← coordinador, directivo, familia
│   └── app.jsx                   ← shell con 2 teléfonos + state compartido
│
├── WIREFRAMES
│   ├── wireframes-shell.jsx      ← PhoneFrame (390x844), primitivas
│   ├── wireframes-p1.jsx         ← pantallas P-01 a P-11
│   ├── wireframes-p2.jsx         ← pantallas P-12 a P-20
│   └── wireframes-app.jsx        ← canvas DesignCanvas con secciones
│
├── COMPONENTES STARTER
│   ├── ios-frame.jsx             ← bezel iPhone (status bar, island, keyboard)
│   ├── android-frame.jsx         ← bezel Android (Material 3)
│   ├── design-canvas.jsx         ← canvas pan/zoom para wireframes
│   └── tweaks-panel.jsx          ← panel de tweaks en vivo (slider, color, etc.)
│
└── dist/
    ├── petu-app-prototipo.html   ← bundle standalone (todo inline)
    └── petu-app-wireframes.html  ← bundle standalone (todo inline)
```

---

## 🎨 Sistema de diseño

### Paleta

| Token | Hex | Uso |
|---|---|---|
| Fondo general | `#0f1b2d` | Background app |
| Fondo card | `#1a2744` | Superficies elevadas |
| Acento principal | `#ffd94d` | CTAs, highlights, coordinador |
| Azul claro | `#63b3ff` | Rol entrenador, info |
| Verde menta | `#50c88c` | Rol jugador, éxito, confirmado |
| Rojo suave | `#f87171` | Alertas, no convocado |
| Lila | `#c5a3ff` | Familia |
| Texto principal | `#eef2ff` | Body text |
| Texto secundario | `rgba(238,242,255,0.5)` | Captions, metadata |

### Tipografía

- **Títulos** — Bebas Neue (uppercase, tracking amplio, deportivo)
- **Cuerpo** — Nunito (400 / 600 / 700 / 800 / 900)

Ambas se cargan desde Google Fonts en el bundle.

### Layout

- Mobile-first **390×844px** (iPhone 14 estándar)
- Dark mode permanente
- Cards con border `rgba(255,255,255,0.10)`, `border-radius: 16-20px`
- Bottom nav fija con 4 ítems (varía por rol)
- Máximo **1 CTA principal por pantalla**, en amarillo `#ffd94d`

---

## 👥 Roles y pantallas

### 🧠 Coordinador (Mati Maranzano)
Define el contenido del año, sigue el cumplimiento semanal de entrenadores.
- P-03 Home · P-04 Carga modelo de juego · P-05 Dashboard planificaciones

### 🎽 Entrenador (Tito, Panchi, Facu, Pablito...)
Usuario diario. Máxima autoridad de su categoría.
- P-06 Home · P-07 Convocatoria · P-08 Confirmaciones · P-09 Planificación semanal · P-10 Carga de resultado · P-11 Registro de asistencia

### ⚡ Jugador (Lautaro "Tuku" Méndez)
Vista del pibe. Lenguaje cercano, refuerzo positivo.
- P-12 Home · P-13 Confirmación · P-14 Mi fixture · P-15 Modelo de juego · P-16 Mis stats · P-17 Autoevaluación (Fase 3)

### 🏛️ Directivos (Andrés Lobo)
Visión institucional, gestión del club.
- P-18 Dashboard · P-19 Gestión de fichajes

### 👨‍👩‍👦 Familia
Solo lectura, info pública.
- P-20 Home

---

## 🔄 Flujos principales (en el prototipo)

### Flujo 1 — Convocatoria completa
```
Entrenador selecciona jugadores
   ↓
Entrenador envía convocatoria
   ↓
Jugador recibe notificación (estado amarillo en home)
   ↓
Jugador confirma / rechaza con motivo
   ↓
Entrenador ve estado en tiempo real
```

### Flujo 2 — Planificación semanal
```
Coordinador carga contenidos del mesociclo
   ↓
Entrenador ve checklist
   ↓
Entrenador tilda 3-5 contenidos a trabajar
   ↓
Coordinador ve dashboard de cumplimiento (✅/❌ por DT)
```

### Flujo 3 — Partido del finde
```
Fixture visible para todos
   ↓
Delegado/entrenador carga resultado + goleadores
   ↓
Jugadores y familias ven el resultado
   ↓
Estadísticas se actualizan
```

---

## 🛠️ Stack técnico

- **React 18.3.1** (UMD, sin build step)
- **Babel Standalone 7.29.0** (transpila JSX en el navegador)
- **JSX inline** — todos los componentes están como `<script type="text/babel">`
- Sin bundler, sin Node, sin paquetes — **todo se sirve como HTML estático**

### Para volver al fuente y editar

Abrí cualquier `.jsx` con un editor (VSCode, Sublime, hasta Notepad). Los archivos son JavaScript con JSX — los componentes son `function NombreComponente() { return <div>...</div> }`.

Tras editar, **no necesitás compilar nada**. Refrescá el HTML y se aplican los cambios.

### Para regenerar los bundles standalone

Si tocás algún `.jsx` del fuente y querés regenerar los bundles de `dist/`, hay que volver a inlinearlos. Es un proceso de "empaquetado" que toma los `<script src="...">` externos y los incrusta en el HTML. Si querés hacerlo solo, podés usar herramientas como [inline-source-cli](https://www.npmjs.com/package/inline-source-cli) o pedirme que lo regenere acá.

---

## 📲 Próximos pasos sugeridos (no incluidos en esta entrega)

1. **Unificar prototipo + wireframes** en un solo flujo navegable end-to-end (20 pantallas con router real)
2. **Estados vacíos** para cada pantalla (sin jugadores, sin fixture, sin notificaciones)
3. **Error states** (sin conexión, falla de envío, datos corruptos)
4. **Variantes mobile small** (375px / iPhone SE) para no romper en pantallas chicas
5. **Versión light** opcional (los chicos a veces piden modo claro para usar al sol)
6. **Onboarding del usuario nuevo** — primer login, selección de hijo (familia), selección de categoría (entrenador)
7. **Notificaciones push** — pantallas de configuración + ejemplos de notificación lockscreen
8. **Modelo de datos backend** — esquema de DB sugerido (usuarios, roles, convocatorias, eventos)

---

## 📝 Licencia

Este diseño es propiedad de Atlanta Futsal. Uso interno del club.

---

## 🤝 Contacto

Cualquier cosa, dudas técnicas, o iteraciones — me decís y avanzamos.
