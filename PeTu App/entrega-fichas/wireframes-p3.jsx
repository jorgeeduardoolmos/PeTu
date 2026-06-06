// wireframes-p3.jsx — Screens P-21 through P-24 · FICHA DEL JUGADOR
// P-21 Ficha (Vista Entrenador · carga y edición)
// P-22 Lista de jugadores con fichas (Vista Entrenador)
// P-23 Ficha (Vista Coordinador · + historial)
// P-24 Resumen de planteles (Vista Directivo)

// ─────────────────────────────────────────────────────────────
// Helpers compartidos por las fichas
// ─────────────────────────────────────────────────────────────

// Etiqueta de sección de ficha (numerada)
function FichaSectionLabel({ n, children, lockHint }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 8,
      margin: "18px 4px 8px",
    }}>
      <span style={{
        width: 20, height: 20, borderRadius: 6, background: Wf.card2,
        color: Wf.dim, fontFamily: "var(--font-display)", fontSize: 12,
        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
      }}>{n}</span>
      <h3 style={{
        margin: 0, fontFamily: "var(--font-display)", fontSize: 14,
        letterSpacing: "0.08em", color: Wf.text, flex: 1,
      }}>{children}</h3>
      {lockHint && (
        <span style={{ fontSize: 10, color: Wf.textMute, fontWeight: 700, display: "inline-flex", alignItems: "center", gap: 4 }}>
          🔒 Solo coord.
        </span>
      )}
    </div>
  );
}

// Campo tipo "bottom sheet select" (Posición / Perfil / Categoría)
function FichaSelect({ label, value, locked }) {
  return (
    <div style={{ flex: 1, minWidth: 0 }}>
      <div style={{ fontSize: 10, color: Wf.dim, fontWeight: 800, letterSpacing: "0.1em", marginBottom: 6, textTransform: "uppercase" }}>
        {label}
      </div>
      {locked ? (
        <div style={{
          padding: "12px 12px", color: Wf.textDim, fontSize: 14, fontWeight: 700,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          border: `1px dashed ${Wf.border}`, borderRadius: 12, background: "transparent",
        }}>
          {value}
          <span style={{ fontSize: 13, opacity: 0.6 }}>🔒</span>
        </div>
      ) : (
        <div style={{
          background: Wf.card, border: `1px solid ${Wf.border}`, borderRadius: 12,
          padding: "12px 12px", color: Wf.text, fontSize: 14, fontWeight: 700,
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          {value}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={Wf.dim} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
        </div>
      )}
    </div>
  );
}

// Campo de texto libre multilinea (con o sin contenido)
function FichaTextarea({ label, value, placeholder, accent }) {
  return (
    <div style={{ marginBottom: 10 }}>
      {label && (
        <div style={{ fontSize: 10, color: accent || Wf.dim, fontWeight: 800, letterSpacing: "0.1em", marginBottom: 6, textTransform: "uppercase" }}>
          {label}
        </div>
      )}
      <div style={{
        background: Wf.card, border: `1px solid ${Wf.border}`, borderRadius: 12,
        padding: "12px 12px", minHeight: 64,
        fontSize: 13, lineHeight: 1.45, fontWeight: 600,
        color: value ? Wf.textDim : Wf.textMute,
        fontStyle: value ? "normal" : "italic",
      }}>
        {value || placeholder}
      </div>
    </div>
  );
}

// Chip de cuota pendiente (rojo)
function CuotaChip() {
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 5,
      background: "rgba(248,113,113,0.16)", color: Wf.danger,
      padding: "3px 10px", borderRadius: 999,
      fontSize: 11, fontWeight: 800, letterSpacing: "0.02em",
    }}>
      <span style={{ width: 7, height: 7, borderRadius: 99, background: Wf.danger }} />
      Cuota pendiente
    </span>
  );
}

// Bloque confidencial — Valoración interna
function ValoracionInterna({ children }) {
  return (
    <div style={{
      marginTop: 14, marginBottom: 4,
      background: "rgba(99,179,255,0.06)",
      border: `1px solid rgba(99,179,255,0.28)`,
      borderRadius: 16, padding: "12px 12px 4px",
    }}>
      <div style={{
        display: "flex", alignItems: "center", gap: 8, marginBottom: 4,
      }}>
        <span style={{
          width: 22, height: 22, borderRadius: 6, background: Wf.card2,
          color: Wf.dim, fontFamily: "var(--font-display)", fontSize: 12,
          display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
        }}>4</span>
        <h3 style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: 14, letterSpacing: "0.08em", color: Wf.text, flex: 1 }}>
          VALORACIÓN INTERNA
        </h3>
      </div>
      <div style={{
        display: "inline-flex", alignItems: "center", gap: 6,
        background: "rgba(99,179,255,0.14)", color: Wf.coach,
        padding: "4px 10px", borderRadius: 999, marginBottom: 12,
        fontSize: 10, fontWeight: 800, letterSpacing: "0.04em",
      }}>
        🔒 Solo entrenadores y coordinador
      </div>
      {children}
    </div>
  );
}

// Botón "Guardar" para el header (estado activo = hay cambios)
function GuardarBtn({ active = true }) {
  return (
    <div style={{
      background: active ? Wf.accent : Wf.card2,
      color: active ? Wf.navyDeep : Wf.textMute,
      borderRadius: 10, padding: "9px 16px",
      fontWeight: 900, fontSize: 13, letterSpacing: "0.02em",
      display: "inline-flex", alignItems: "center", gap: 6,
      opacity: active ? 1 : 0.6,
    }}>
      Guardar
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// P-21 FICHA DEL JUGADOR — VISTA ENTRENADOR
// ─────────────────────────────────────────────────────────────
function P21_FichaEntrenador() {
  return (
    <PhoneFrame hideNav>
      <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <WfTopBar title="FICHA" sub="Entrenador · 8va" right={<GuardarBtn active />} />

        <div style={{ flex: 1, overflow: "auto", padding: "0 14px 16px" }}>
          {/* Identidad del jugador */}
          <div style={{
            display: "flex", alignItems: "center", gap: 12, padding: "4px 2px 12px",
            borderBottom: `1px solid ${Wf.border}`,
          }}>
            <WfAvatar initials="LF" color={Wf.coach} size={48} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <h1 style={{
                margin: 0, fontFamily: "var(--font-display)", fontSize: 24,
                letterSpacing: "0.02em", lineHeight: 1, color: Wf.text,
              }}>LUCAS FERNÁNDEZ</h1>
              <div style={{ fontSize: 12, color: Wf.dim, fontWeight: 700, marginTop: 5 }}>
                4ta División · #4
              </div>
            </div>
          </div>

          {/* SECCIÓN 1 — INFORMACIÓN GENERAL */}
          <FichaSectionLabel n="1">INFORMACIÓN GENERAL</FichaSectionLabel>
          <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
            <FichaSelect label="Posición" value="Cierre" />
            <FichaSelect label="Perfil dominante" value="Derecho" />
          </div>
          <FichaSelect label="Categoría" value="4ta División" locked />

          {/* SECCIÓN 2 — HÁBITO DE ENTRENAMIENTO */}
          <FichaSectionLabel n="2">HÁBITO DE ENTRENAMIENTO</FichaSectionLabel>
          <FichaTextarea
            value="Asiste regularmente, puntual y con buena actitud. Falta los martes por horario de estudio."
          />

          {/* SECCIÓN 3 — CARACTERÍSTICAS */}
          <FichaSectionLabel n="3">CARACTERÍSTICAS DEL JUGADOR</FichaSectionLabel>
          <FichaTextarea
            value="Rápido, fuerte en la marca y el anticipo. Lee bien los cruces. Buen 1v1 defensivo."
          />

          {/* SECCIÓN 4 — VALORACIÓN INTERNA (confidencial) */}
          <ValoracionInterna>
            <FichaTextarea label="Fortalezas" accent={Wf.coach}
              value="Marca, juego aéreo y liderazgo dentro de la cancha. Muy regular." />
            <FichaTextarea label="Aspectos a mejorar" accent={Wf.coach}
              value="Salida con pelota bajo presión. Definición de cara al arco." />
            <FichaTextarea label="Personalidad" accent={Wf.coach}
              value="Tímido al principio, muy compañero. Responde bien a la exigencia." />
            <FichaTextarea label="Observaciones" accent={Wf.coach}
              placeholder="Sin observaciones todavía…" />
          </ValoracionInterna>

          {/* Última actualización */}
          <div style={{
            marginTop: 16, display: "flex", alignItems: "center", gap: 10,
            padding: "10px 12px", background: Wf.card, borderRadius: 12, border: `1px solid ${Wf.border}`,
          }}>
            <WfAvatar initials="MC" color={Wf.coord} size={28} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 10, color: Wf.dim, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Última actualización
              </div>
              <div style={{ fontSize: 12, color: Wf.textDim, fontWeight: 700, marginTop: 2 }}>
                Matías C. · 15 may 2026
              </div>
            </div>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}

// ─────────────────────────────────────────────────────────────
// P-22 LISTA DE JUGADORES CON FICHAS — VISTA ENTRENADOR
// ─────────────────────────────────────────────────────────────
function P22_ListaFichas() {
  const players = [
    { n: "Lucas Fernández",   pos: "Cierre", perf: "Derecho", est: "completa" },
    { n: "Tomás Guerra",      pos: "Pivot",  perf: "Zurdo",   est: "incompleta" },
    { n: "Bautista Ríos",     pos: "Ala",    perf: "Derecho", est: "sin" },
    { n: "Nicolás Mena",      pos: "Cierre", perf: "Derecho", est: "completa", cuota: true },
    { n: "Joaquín Torres",    pos: "Arquero",perf: "Derecho", est: "completa" },
    { n: "Mateo Ledesma",     pos: "Ala",    perf: "Zurdo",   est: "incompleta" },
    { n: "Benjamín Ruiz",     pos: "Pivot",  perf: "Derecho", est: "sin" },
    { n: "Santino Aguirre",   pos: "Cierre", perf: "Ambidiestro", est: "completa" },
  ];
  const estMap = {
    completa:   { c: Wf.player, icon: "✓", lab: "Ficha completa" },
    incompleta: { c: Wf.warn,   icon: "!", lab: "Ficha incompleta" },
    sin:        { c: Wf.textMute, icon: "+", lab: "Sin ficha" },
  };

  return (
    <PhoneFrame navItems={[
      { k: "home", l: "Inicio" }, { k: "plantel", l: "Plantel" }, { k: "fixture", l: "Fixture" }, { k: "config", l: "Más" },
    ]} navActive="plantel" accentNav={Wf.coach}>
      <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <WfTopBar back={false} title="MIS JUGADORES" right={
          <div style={{
            background: Wf.card, border: `1px solid ${Wf.border}`, borderRadius: 10,
            padding: "8px 12px", display: "inline-flex", alignItems: "center", gap: 6,
            fontSize: 12, fontWeight: 800, color: Wf.text,
          }}>
            4ta
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={Wf.dim} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
          </div>
        } />

        <div style={{ padding: "0 14px", marginBottom: 10 }}>
          <div style={{
            background: Wf.card, border: `1px solid ${Wf.border}`, borderRadius: 12,
            padding: "11px 14px", display: "flex", alignItems: "center", gap: 10,
            color: Wf.textMute, fontSize: 13, fontWeight: 600,
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={Wf.textMute} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/></svg>
            Buscar jugador…
          </div>
        </div>

        {/* Resumen de estados */}
        <div style={{ padding: "0 14px", marginBottom: 10, display: "flex", gap: 8 }}>
          {[
            { c: Wf.player, v: 4, l: "Completas" },
            { c: Wf.warn, v: 2, l: "Incompletas" },
            { c: Wf.textMute, v: 2, l: "Sin ficha" },
          ].map((s, i) => (
            <div key={i} style={{
              flex: 1, padding: "8px 10px", borderRadius: 10,
              background: `color-mix(in srgb, ${s.c} 10%, transparent)`,
              border: `1px solid color-mix(in srgb, ${s.c} 26%, transparent)`,
            }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 20, color: s.c, lineHeight: 1 }}>{s.v}</div>
              <div style={{ fontSize: 9, color: Wf.dim, fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase", marginTop: 3 }}>{s.l}</div>
            </div>
          ))}
        </div>

        <div style={{ flex: 1, overflow: "auto", padding: "0 14px 14px", display: "flex", flexDirection: "column", gap: 6 }}>
          {players.map((p, i) => {
            const e = estMap[p.est];
            return (
              <WfCard key={i} padded={false}>
                <div style={{ padding: "10px 12px", display: "flex", alignItems: "center", gap: 10 }}>
                  <WfAvatar initials={p.n.split(" ").map(s=>s[0]).join("").slice(0,2)} color={e.c} size={34} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                      <span style={{ fontWeight: 800, fontSize: 13 }}>{p.n}</span>
                      {p.cuota && <span style={{ width: 8, height: 8, borderRadius: 99, background: Wf.danger, flexShrink: 0 }} />}
                    </div>
                    <div style={{ fontSize: 11, color: Wf.dim, marginTop: 2 }}>{p.pos} · {p.perf}</div>
                  </div>
                  <span style={{
                    display: "inline-flex", alignItems: "center", gap: 5,
                    background: `color-mix(in srgb, ${e.c} 14%, transparent)`,
                    color: e.c, padding: "4px 9px", borderRadius: 999,
                    fontSize: 10, fontWeight: 800, whiteSpace: "nowrap",
                  }}>
                    <span style={{
                      width: 15, height: 15, borderRadius: 99,
                      background: e.c, color: Wf.navyDeep,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 10, fontWeight: 900, lineHeight: 1,
                    }}>{e.icon}</span>
                    {e.lab}
                  </span>
                </div>
              </WfCard>
            );
          })}
        </div>
      </div>
    </PhoneFrame>
  );
}

// ─────────────────────────────────────────────────────────────
// P-23 FICHA DEL JUGADOR — VISTA COORDINADOR (+ historial)
// ─────────────────────────────────────────────────────────────
function P23_FichaCoordinador() {
  const historial = [
    { f: "15 may", quien: "Matías C.", txt: "actualizó Fortalezas y Observaciones" },
    { f: "3 may",  quien: "Matías C.", txt: "cargó la ficha inicial" },
    { f: "12 abr", quien: "Matías M.", txt: "creó el jugador" },
  ];
  return (
    <PhoneFrame hideNav>
      <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <WfTopBar title="FICHA" sub="Coordinador" right={<GuardarBtn active />} />

        <div style={{ flex: 1, overflow: "auto", padding: "0 14px 16px" }}>
          {/* Identidad + cuota chip */}
          <div style={{ padding: "4px 2px 12px", borderBottom: `1px solid ${Wf.border}` }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <WfAvatar initials="NM" color={Wf.coord} size={48} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <h1 style={{
                  margin: 0, fontFamily: "var(--font-display)", fontSize: 24,
                  letterSpacing: "0.02em", lineHeight: 1, color: Wf.text,
                }}>NICOLÁS MENA</h1>
                <div style={{ fontSize: 12, color: Wf.dim, fontWeight: 700, marginTop: 5 }}>
                  4ta División · #6
                </div>
              </div>
            </div>
            <div style={{ marginTop: 10 }}><CuotaChip /></div>
          </div>

          {/* SECCIÓN 1 — INFORMACIÓN GENERAL — Categoría editable */}
          <FichaSectionLabel n="1">INFORMACIÓN GENERAL</FichaSectionLabel>
          <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
            <FichaSelect label="Posición" value="Cierre" />
            <FichaSelect label="Perfil dominante" value="Derecho" />
          </div>
          <FichaSelect label="Categoría" value="4ta División" />

          {/* SECCIÓN 2 */}
          <FichaSectionLabel n="2">HÁBITO DE ENTRENAMIENTO</FichaSectionLabel>
          <FichaTextarea value="Constante y comprometido. Llega temprano y ayuda a armar la cancha." />

          {/* SECCIÓN 3 */}
          <FichaSectionLabel n="3">CARACTERÍSTICAS DEL JUGADOR</FichaSectionLabel>
          <FichaTextarea value="Defensor sólido, buen juego aéreo y salida prolija por abajo." />

          {/* SECCIÓN 4 — confidencial */}
          <ValoracionInterna>
            <FichaTextarea label="Fortalezas" accent={Wf.coach}
              value="Concentración, ubicación y temple en momentos clave." />
            <FichaTextarea label="Aspectos a mejorar" accent={Wf.coach}
              value="Velocidad en los primeros metros. Manejo de perfil cambiado." />
            <FichaTextarea label="Personalidad" accent={Wf.coach}
              value="Referente silencioso del grupo. Muy maduro para la edad." />
            <FichaTextarea label="Observaciones" accent={Wf.coach}
              value="Seguir de cerca la situación de cuota con la familia." />
          </ValoracionInterna>

          {/* HISTORIAL DE CAMBIOS — exclusivo coordinador */}
          <div style={{ marginTop: 18, marginBottom: 6 }}>
            <h3 style={{ margin: "0 4px 10px", fontFamily: "var(--font-display)", fontSize: 14, letterSpacing: "0.08em", color: Wf.text }}>
              HISTORIAL DE CAMBIOS
            </h3>
            <div style={{ position: "relative", paddingLeft: 18 }}>
              <div style={{ position: "absolute", left: 4, top: 4, bottom: 4, width: 2, background: Wf.border }} />
              {historial.map((h, i) => (
                <div key={i} style={{ position: "relative", marginBottom: i < historial.length - 1 ? 14 : 0 }}>
                  <div style={{
                    position: "absolute", left: -18, top: 2, width: 10, height: 10, borderRadius: 99,
                    background: i === 0 ? Wf.coord : Wf.card2, border: `2px solid ${Wf.bg}`,
                  }} />
                  <div style={{ fontSize: 12, color: Wf.textDim, fontWeight: 700, lineHeight: 1.4 }}>
                    <strong style={{ color: Wf.text }}>{h.quien}</strong> {h.txt}
                  </div>
                  <div style={{ fontSize: 10, color: Wf.dim, fontWeight: 700, letterSpacing: "0.04em", marginTop: 2 }}>
                    {h.f} · 2026
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}

// ─────────────────────────────────────────────────────────────
// P-24 RESUMEN DE PLANTELES — VISTA DIRECTIVO
// ─────────────────────────────────────────────────────────────
function P24_ResumenDirectivo() {
  const grupos = [
    { div: "4ta División", players: [
      { n: "Lucas Fernández", pos: "Cierre",  perf: "Derecho", cuota: "ok" },
      { n: "Nicolás Mena",    pos: "Cierre",  perf: "Derecho", cuota: "deuda" },
      { n: "Tomás Guerra",    pos: "Pivot",   perf: "Zurdo",   cuota: "ok" },
      { n: "Bautista Ríos",   pos: "Ala",     perf: "Derecho", cuota: "ok" },
    ]},
    { div: "5ta División", players: [
      { n: "Iván Sosa",       pos: "Arquero", perf: "Derecho", cuota: "ok" },
      { n: "Mateo Ledesma",   pos: "Ala",     perf: "Zurdo",   cuota: "pend" },
      { n: "Bruno Casas",     pos: "Pivot",   perf: "Derecho", cuota: "ok" },
    ]},
  ];
  const sem = {
    ok:    Wf.player,
    pend:  Wf.warn,
    deuda: Wf.danger,
  };

  return (
    <PhoneFrame navItems={[
      { k: "home", l: "Inicio" }, { k: "plantel", l: "Planteles" }, { k: "finanzas", l: "Finanzas" }, { k: "config", l: "Más" },
    ]} navActive="plantel" accentNav={Wf.dir}>
      <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <WfTopBar back={false} title="PLANTELES" sub="Visión institucional" right={
          <div style={{
            background: Wf.card, border: `1px solid ${Wf.border}`, borderRadius: 10,
            padding: "8px 12px", display: "inline-flex", alignItems: "center", gap: 6,
            fontSize: 12, fontWeight: 800, color: Wf.text,
          }}>
            Todas
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={Wf.dim} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
          </div>
        } />

        {/* Leyenda semáforo de cuota */}
        <div style={{ padding: "0 14px 10px", display: "flex", alignItems: "center", gap: 14 }}>
          <span style={{ fontSize: 10, color: Wf.dim, fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase" }}>Cuota</span>
          {[
            { c: Wf.player, l: "Al día" },
            { c: Wf.warn, l: "Por vencer" },
            { c: Wf.danger, l: "Deuda" },
          ].map((s, i) => (
            <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 11, color: Wf.textDim, fontWeight: 700 }}>
              <span style={{ width: 8, height: 8, borderRadius: 99, background: s.c }} />{s.l}
            </span>
          ))}
        </div>

        <div style={{ flex: 1, overflow: "auto", padding: "0 14px 16px" }}>
          {grupos.map((g, gi) => (
            <div key={gi} style={{ marginBottom: 16 }}>
              <div style={{
                display: "flex", alignItems: "center", gap: 8, margin: "4px 4px 8px",
                fontFamily: "var(--font-display)", fontSize: 13, letterSpacing: "0.08em", color: Wf.dim,
              }}>
                {g.div.toUpperCase()}
                <span style={{ flex: 1, height: 1, background: Wf.border }} />
                <span style={{ color: Wf.textMute, fontSize: 11, fontFamily: "var(--font-body)", fontWeight: 700, letterSpacing: 0 }}>
                  {g.players.length} jug.
                </span>
              </div>
              <WfCard padded={false}>
                {g.players.map((p, i) => (
                  <div key={i} style={{
                    padding: "11px 14px", display: "flex", alignItems: "center", gap: 12,
                    borderBottom: i < g.players.length - 1 ? `1px solid ${Wf.border}` : "none",
                  }}>
                    <span style={{ width: 9, height: 9, borderRadius: 99, background: sem[p.cuota], flexShrink: 0 }} />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontWeight: 800, fontSize: 13 }}>{p.n}</div>
                      <div style={{ fontSize: 11, color: Wf.dim, marginTop: 2 }}>{p.pos} · {p.perf}</div>
                    </div>
                  </div>
                ))}
              </WfCard>
            </div>
          ))}

          {/* Nota de permisos */}
          <div style={{
            marginTop: 4, padding: "10px 12px",
            background: Wf.card, border: `1px solid ${Wf.border}`, borderRadius: 12,
            fontSize: 11, color: Wf.dim, fontWeight: 600, lineHeight: 1.5, textAlign: "center",
          }}>
            La valoración interna del cuerpo técnico no es visible para directivos.
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}

Object.assign(window, {
  P21_FichaEntrenador, P22_ListaFichas, P23_FichaCoordinador, P24_ResumenDirectivo,
  FichaSectionLabel, FichaSelect, FichaTextarea, CuotaChip, ValoracionInterna, GuardarBtn,
});
