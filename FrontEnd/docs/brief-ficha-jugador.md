# Brief: Pantallas — Ficha del Jugador

> Para uso de Claude Design / diseñador UX.  
> Stack: React Native / mobile-first. Design system: fondo oscuro `#0f1b2d`, acento amarillo `#ffd94d`, tipografía blanca con opacidad.

---

## Contexto

Los entrenadores de Atlanta Futsal Inferiores utilizan una **ficha individual por jugador** para registrar y hacer seguimiento de su evolución a lo largo de la temporada. Actualmente lo hacen en un Excel/PDF impreso. Queremos digitalizar ese proceso dentro de la app.

La ficha tiene dos bloques:
1. **Información general** — datos objetivos
2. **Valoración interna** — criterio técnico del entrenador, confidencial

---

## Roles y permisos

| Campo / Sección           | Entrenador      | Coordinador     | Directivo       | Jugador         |
|---------------------------|-----------------|-----------------|-----------------|-----------------|
| Info general              | Carga y edita   | Lee y edita     | Lee (resumen)   | ❌ No ve        |
| Hábito de entrenamiento   | Carga y edita   | Lee             | ❌              | ❌              |
| Características           | Carga y edita   | Lee             | ❌              | ❌              |
| Fortalezas                | Carga y edita   | Lee             | ❌              | ❌              |
| Aspectos a mejorar        | Carga y edita   | Lee             | ❌              | ❌              |
| Personalidad              | Carga y edita   | Lee             | ❌              | ❌              |
| Observaciones             | Carga y edita   | Lee             | ❌              | ❌              |
| Historial de cambios      | Lee (los suyos) | Lee todos       | ❌              | ❌              |

---

## Pantallas a diseñar

### P-21 · Ficha del Jugador — Vista Entrenador (carga y edición)

**Acceso:** desde la lista de jugadores de su categoría → tap en un jugador.

**Layout sugerido (scroll vertical):**

```
[ ← Volver ]         [ Guardar ]

LUCAS FERNÁNDEZ                     4ta División
——————————————————————————————————————

SECCIÓN 1 · INFORMACIÓN GENERAL
  Posición        [ Cierre ▼ ]   (dropdown: Cierre / Pivot / Ala / Arquero)
  Perfil dominante [ Derecho ▼ ] (dropdown: Derecho / Zurdo / Ambidiestro)
  Categoría       [ 4ta ▼ ]     (solo coordinador puede editar esto)

SECCIÓN 2 · HÁBITO DE ENTRENAMIENTO
  [ campo de texto libre multilinea ]
  Ej.: "Asiste regularmente, puntual, actitud positiva"

SECCIÓN 3 · CARACTERÍSTICAS DEL JUGADOR
  [ campo de texto libre multilinea ]
  Ej.: "Rápido, buen 1v1, presión alta intensa"

SECCIÓN 4 · VALORACIÓN INTERNA
  ┌─ Fortalezas ────────────────────────┐
  │ [ campo de texto libre multilinea ] │
  └─────────────────────────────────────┘
  ┌─ Aspectos a mejorar ────────────────┐
  │ [ campo de texto libre multilinea ] │
  └─────────────────────────────────────┘
  ┌─ Personalidad ──────────────────────┐
  │ [ campo de texto libre multilinea ] │
  └─────────────────────────────────────┘
  ┌─ Observaciones ─────────────────────┐
  │ [ campo de texto libre multilinea ] │
  └─────────────────────────────────────┘

ÚLTIMA ACTUALIZACIÓN
  Por: Matías C. · 15 may 2026
```

**Comportamiento:**
- Botón "Guardar" se activa solo cuando hay cambios sin guardar.
- Al guardar, muestra toast de confirmación con fecha/hora.
- Los campos de valoración interna van dentro de un bloque con badge `🔒 Solo visible para entrenadores y coordinador`.
- Si el jugador tiene alerta de cuota impaga, mostrar chip rojo debajo del nombre: `● Cuota pendiente`.

---

### P-22 · Lista de Jugadores con Fichas — Vista Entrenador

**Acceso:** desde Home del Entrenador → "Mis jugadores".

**Layout:**

```
Mis Jugadores                    4ta División ▼

[ Buscar jugador... ]

  LUCAS FERNÁNDEZ    Cierre · Derecho      ✅ Ficha completa
  TOMÁS GUERRA       Pivot · Zurdo         ⚠️ Ficha incompleta
  BAUTISTA RÍOS      Ala · Derecho         ➕ Sin ficha
  NICOLÁS MENA       Cierre · Derecho      ✅ Ficha completa  🔴 Cuota
  ...
```

**Estados de ficha:**
- `✅ Ficha completa` — todos los campos de valoración interna cargados
- `⚠️ Ficha incompleta` — info general cargada pero faltan campos de valoración
- `➕ Sin ficha` — ficha vacía, solo el nombre registrado
- `🔴 Cuota` — badge rojo adicional si tiene cuota impaga

---

### P-23 · Ficha del Jugador — Vista Coordinador

**Igual que P-21 pero:**
- Puede editar todos los campos incluyendo "Categoría"
- Ve el **historial de cambios** al final:

```
HISTORIAL
  ─ 15 may  Matías C. actualizó Fortalezas y Observaciones
  ─ 3 may   Matías C. cargó la ficha inicial
  ─ 12 abr  Matías M. creó el jugador
```

- Puede filtrar por categoría desde el encabezado
- Ve el chip de cuota impaga si aplica

---

### P-24 · Resumen de Jugadores — Vista Directivo

**Acceso:** desde Dashboard Directivo → "Planteles".

**Layout (tabla / cards):**

```
Planteles                     [ 4ta ▼ ] [ Todas las cat. ]

  LUCAS FERNÁNDEZ    4ta · Cierre
  TOMÁS GUERRA       4ta · Pivot
  BAUTISTA RÍOS      4ta · Ala
  ...

  ┄ 5ta División ┄
  ...
```

**Lo que VE el directivo:**
- Nombre, categoría, posición, perfil dominante
- Estado de cuota (solo el semáforo, sin monto)

**Lo que NO VE el directivo:**
- Fortalezas, aspectos a mejorar, personalidad, observaciones del entrenador

---

## Notas de diseño

- Todos los campos de texto libre deben ser `multiline`, con altura mínima de 3 líneas y expansión automática.
- El bloque de **Valoración interna** debe diferenciarse visualmente del bloque de info general (borde o fondo ligeramente distinto, badge de confidencialidad).
- En mobile, los dropdowns de Posición y Perfil dominante deben usar bottom sheet nativo, no dropdown convencional.
- El estado de la ficha (completa / incompleta / sin ficha) debe calcularse automáticamente según qué campos tienen contenido.
- Los campos no editables para el rol que está logueado deben mostrarse como texto plano (read-only), no como inputs deshabilitados.

---

## Casos de uso relacionados
- CU-40: Cargar ficha del jugador (Entrenador)
- CU-41: Actualizar ficha del jugador (Entrenador)
- CU-42: Consultar fichas (Coordinador)
- CU-43: Resumen de fichas (Directivo)

## Reglas de negocio relacionadas
- RN-47 a RN-52 (Ficha del Jugador)
- RN-18 (Datos básicos vs. valoración interna)
- RN-41/42/43 (Cuota impaga — indicador rojo)
