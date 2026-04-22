import streamlit as st

st.set_page_config(
    page_title="PeTu App — Plataforma de Fútbol",
    page_icon="⚽",
    layout="wide",
    initial_sidebar_state="collapsed",
)

st.markdown("""
<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Nunito:wght@300;400;600;700&display=swap');

/* ── BASE ── */
html, body, [data-testid="stAppViewContainer"],
[data-testid="stMain"], [data-testid="stMainBlockContainer"] {
    background: #0f1b2d !important;
    font-family: 'Nunito', sans-serif;
    color: #eef2ff;
}
[data-testid="stHeader"]      { display: none; }
[data-testid="stDecoration"]  { display: none; }
.block-container               { padding: 0 !important; max-width: 100% !important; }

/* ══════════════════════════════════════
   HERO
══════════════════════════════════════ */
.hero {
    background: linear-gradient(160deg, #0f1b2d 0%, #152540 60%, #1a2f52 100%);
    padding: 90px 6vw 80px;
    text-align: center;
    border-bottom: 1px solid rgba(255,220,80,0.15);
    position: relative;
    overflow: hidden;
}
.hero::before {
    content: '';
    position: absolute;
    width: 600px; height: 600px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,220,80,0.07) 0%, transparent 70%);
    top: -200px; left: 50%; transform: translateX(-50%);
    pointer-events: none;
}
.badge {
    display: inline-block;
    background: rgba(255,220,80,0.12);
    border: 1px solid rgba(255,220,80,0.40);
    color: #ffd94d;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    padding: 6px 20px;
    border-radius: 100px;
    margin-bottom: 28px;
}
.hero-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(72px, 12vw, 140px);
    line-height: 0.9;
    color: #eef2ff;
    margin: 0 0 8px;
}
.hero-title .accent { color: #ffd94d; }
.hero-tagline {
    font-size: clamp(15px, 2vw, 19px);
    color: rgba(238,242,255,0.55);
    font-weight: 300;
    max-width: 520px;
    margin: 16px auto 44px;
    line-height: 1.65;
}
.pills {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
}
.pill {
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.10);
    border-radius: 100px;
    padding: 7px 18px;
    font-size: 13px;
    color: rgba(238,242,255,0.65);
}
.pill b { color: #eef2ff; }

/* ══════════════════════════════════════
   SECTION WRAPPER
══════════════════════════════════════ */
.section {
    max-width: 1160px;
    margin: 0 auto;
    padding: 80px 6vw;
}
.section-label {
    font-size: 11px;
    letter-spacing: 0.20em;
    text-transform: uppercase;
    color: #ffd94d;
    font-weight: 700;
    margin-bottom: 10px;
}
.section-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(38px, 5.5vw, 68px);
    line-height: 1;
    color: #eef2ff;
    margin: 0 0 52px;
}
.divider {
    height: 1px;
    background: rgba(255,255,255,0.06);
    margin: 0;
}

/* ══════════════════════════════════════
   ROLE CARDS
══════════════════════════════════════ */
.roles {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 16px;
}
.rcard {
    border-radius: 20px;
    padding: 40px 32px;
    position: relative;
    overflow: hidden;
}
.rcard-coach    { background: linear-gradient(145deg, #1a3a5c, #142d4a); border: 1px solid rgba(99,179,255,0.25); }
.rcard-director { background: linear-gradient(145deg, #2a2a0a, #1e1e06); border: 1px solid rgba(255,220,80,0.30); }
.rcard-player   { background: linear-gradient(145deg, #0d2e1e, #0a2418); border: 1px solid rgba(80,200,140,0.25); }

.rcard-top-bar {
    height: 3px;
    border-radius: 3px;
    margin-bottom: 28px;
}
.bar-coach    { background: linear-gradient(90deg, #63b3ff, #3a8fd4); }
.bar-director { background: linear-gradient(90deg, #ffd94d, #f0b800); }
.bar-player   { background: linear-gradient(90deg, #50c88c, #2da869); }

.rcard-icon  { font-size: 40px; margin-bottom: 12px; display: block; }
.rcard-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 34px;
    letter-spacing: 0.04em;
    margin: 0 0 6px;
}
.title-coach    { color: #a8d4ff; }
.title-director { color: #ffd94d; }
.title-player   { color: #7de0b0; }

.rcard-desc {
    font-size: 13px;
    color: rgba(238,242,255,0.42);
    margin: 0 0 24px;
    font-weight: 300;
}
.flist { list-style: none; padding: 0; margin: 0; }
.flist li {
    display: flex;
    gap: 10px;
    align-items: flex-start;
    padding: 9px 0;
    border-bottom: 1px solid rgba(255,255,255,0.05);
    font-size: 13.5px;
    color: rgba(238,242,255,0.75);
    line-height: 1.4;
}
.flist li:last-child { border-bottom: none; }
.dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    flex-shrink: 0;
    margin-top: 5px;
}
.dot-coach    { background: #63b3ff; }
.dot-director { background: #ffd94d; }
.dot-player   { background: #50c88c; }

/* ══════════════════════════════════════
   FEATURES GRID
══════════════════════════════════════ */
.fgrid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 14px;
}
.ftile {
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 16px;
    padding: 30px 26px;
}
.ftile-icon  { font-size: 26px; margin-bottom: 14px; display: block; }
.ftile-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 21px;
    color: #eef2ff;
    margin: 0 0 7px;
    letter-spacing: 0.03em;
}
.ftile-desc {
    font-size: 13px;
    color: rgba(238,242,255,0.42);
    line-height: 1.55;
    font-weight: 300;
}

/* ══════════════════════════════════════
   FOOTER
══════════════════════════════════════ */
.footer {
    padding: 56px 6vw;
    text-align: center;
    border-top: 1px solid rgba(255,255,255,0.06);
    color: rgba(238,242,255,0.28);
    font-size: 13px;
}
.footer b { color: #ffd94d; }
</style>
""", unsafe_allow_html=True)

# ── HERO ────────────────────────────────────────────────────────────────────
st.markdown("""
<div class="hero">
    <div class="badge">⚽ Plataforma integral de fútbol</div>
    <div class="hero-title">LA <span class="accent">PETU</span><br>APP</div>
    <p class="hero-tagline">
        Todo lo que tu club necesita en un solo lugar.
        Entrenadores, directivos y jugadores, conectados y organizados.
    </p>
    <div class="pills">
        <span class="pill">📊 <b>Estadísticas</b> en tiempo real</span>
        <span class="pill">🗓️ <b>Fixture</b> y resultados</span>
        <span class="pill">📍 <b>Canchas</b> geolocalizadas</span>
        <span class="pill">💼 <b>Contratos</b> y fichajes</span>
        <span class="pill">💬 <b>Comunicación</b> por roles</span>
        <span class="pill">🏋️ <b>Planificación</b> de entrenamientos</span>
    </div>
</div>
""", unsafe_allow_html=True)

# ── ROLES ───────────────────────────────────────────────────────────────────
st.markdown("""
<div class="section">
    <div class="section-label">¿Quién usa la plataforma?</div>
    <div class="section-title">TRES ROLES,<br>UNA VISIÓN</div>
    <div class="roles">

        <div class="rcard rcard-coach">
            <div class="rcard-top-bar bar-coach"></div>
            <span class="rcard-icon">🧠</span>
            <div class="rcard-title title-coach">Entrenador</div>
            <p class="rcard-desc">Control total del rendimiento y la planificación deportiva</p>
            <ul class="flist">
                <li><span class="dot dot-coach"></span>Ver estadísticas individuales y colectivas del equipo</li>
                <li><span class="dot dot-coach"></span>Planificar y gestionar sesiones de entrenamiento</li>
                <li><span class="dot dot-coach"></span>Consultar el fixture y cargar resultados de partidos</li>
                <li><span class="dot dot-coach"></span>Elegir y reservar canchas según ubicación</li>
                <li><span class="dot dot-coach"></span>Enviar comunicados a jugadores y directivos</li>
                <li><span class="dot dot-coach"></span>Seguimiento de lesiones y estado físico del plantel</li>
            </ul>
        </div>

        <div class="rcard rcard-director">
            <div class="rcard-top-bar bar-director"></div>
            <span class="rcard-icon">🏛️</span>
            <div class="rcard-title title-director">Directivos</div>
            <p class="rcard-desc">Visión estratégica del club, finanzas y mercado de pases</p>
            <ul class="flist">
                <li><span class="dot dot-director"></span>Gestionar contratos, salarios y vencimientos</li>
                <li><span class="dot dot-director"></span>Seguimiento de fichajes y mercado de transferencias</li>
                <li><span class="dot dot-director"></span>Ver reportes financieros y presupuesto del club</li>
                <li><span class="dot dot-director"></span>Acceder a métricas de rendimiento del plantel</li>
                <li><span class="dot dot-director"></span>Consultar fixture y resultados de la temporada</li>
                <li><span class="dot dot-director"></span>Comunicación con cuerpo técnico y jugadores</li>
            </ul>
        </div>

        <div class="rcard rcard-player">
            <div class="rcard-top-bar bar-player"></div>
            <span class="rcard-icon">⚡</span>
            <div class="rcard-title title-player">Jugadores</div>
            <p class="rcard-desc">Todo lo que el jugador necesita saber sobre sí mismo y el equipo</p>
            <ul class="flist">
                <li><span class="dot dot-player"></span>Ver sus propias estadísticas y evolución personal</li>
                <li><span class="dot dot-player"></span>Consultar el fixture y próximos partidos</li>
                <li><span class="dot dot-player"></span>Ver la ubicación y cómo llegar a las canchas</li>
                <li><span class="dot dot-player"></span>Recibir avisos de entrenamientos y convocatorias</li>
                <li><span class="dot dot-player"></span>Acceder a su contrato y situación contractual</li>
                <li><span class="dot dot-player"></span>Mensajería con el cuerpo técnico</li>
            </ul>
        </div>

    </div>
</div>
""", unsafe_allow_html=True)

st.markdown('<div class="divider"></div>', unsafe_allow_html=True)

# ── FEATURES ────────────────────────────────────────────────────────────────
st.markdown("""
<div class="section">
    <div class="section-label">Funcionalidades</div>
    <div class="section-title">TODO EN<br>UN SOLO LUGAR</div>
    <div class="fgrid">

        <div class="ftile">
            <span class="ftile-icon">📊</span>
            <div class="ftile-title">Estadísticas & Métricas</div>
            <p class="ftile-desc">Datos de rendimiento individuales y colectivos. Goles, asistencias, minutos, pases y más por partido y por temporada.</p>
        </div>

        <div class="ftile">
            <span class="ftile-icon">🗓️</span>
            <div class="ftile-title">Fixture & Resultados</div>
            <p class="ftile-desc">Calendario de partidos actualizado, resultados en tiempo real y posición en la tabla. Toda la temporada al alcance.</p>
        </div>

        <div class="ftile">
            <span class="ftile-icon">🏋️</span>
            <div class="ftile-title">Gestión de Entrenamientos</div>
            <p class="ftile-desc">Planificación de sesiones, carga de ejercicios, control de asistencia y seguimiento de la carga física semana a semana.</p>
        </div>

        <div class="ftile">
            <span class="ftile-icon">📍</span>
            <div class="ftile-title">Ubicación de Canchas</div>
            <p class="ftile-desc">Mapa interactivo con canchas disponibles, horarios y navegación GPS para llegar sin complicaciones.</p>
        </div>

        <div class="ftile">
            <span class="ftile-icon">💼</span>
            <div class="ftile-title">Contratos & Fichajes</div>
            <p class="ftile-desc">Gestión de contratos con alertas de vencimiento, seguimiento de negociaciones y control de transferencias.</p>
        </div>

        <div class="ftile">
            <span class="ftile-icon">💬</span>
            <div class="ftile-title">Comunicación por Roles</div>
            <p class="ftile-desc">Mensajería interna segmentada. Convocatorias, avisos y chats directos entre entrenadores, directivos y jugadores.</p>
        </div>

    </div>
</div>
""", unsafe_allow_html=True)

# ── FOOTER ──────────────────────────────────────────────────────────────────
st.markdown("""
<div class="footer">
    <p>Hecho con ❤️ para el fútbol · <b>La PeTu App</b> · 2025</p>
    <p style="margin-top:6px;font-size:11px;">Plataforma en desarrollo · Todos los derechos reservados</p>
</div>
""", unsafe_allow_html=True)
