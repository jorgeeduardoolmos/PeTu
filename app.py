import streamlit as st

st.set_page_config(
    page_title="FootballOS — Plataforma de Fútbol",
    page_icon="⚽",
    layout="wide",
    initial_sidebar_state="collapsed",
)

# ── CSS ─────────────────────────────────────────────────────────────────────
st.markdown("""
<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600&display=swap');

/* Reset & base */
html, body, [data-testid="stAppViewContainer"] {
    background: #0a0a0f;
    color: #f0ede8;
    font-family: 'DM Sans', sans-serif;
}
[data-testid="stHeader"] { background: transparent; }
.block-container { padding: 0 !important; max-width: 100% !important; }
h1,h2,h3 { font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.04em; }

/* ── HERO ── */
.hero {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 80px 24px 60px;
    background:
        radial-gradient(ellipse 80% 60% at 50% 0%, rgba(20,200,80,0.13) 0%, transparent 70%),
        radial-gradient(ellipse 60% 40% at 80% 100%, rgba(20,200,80,0.07) 0%, transparent 60%),
        #0a0a0f;
    position: relative;
    overflow: hidden;
}
.hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
        linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
    background-size: 60px 60px;
    pointer-events: none;
}
.hero-badge {
    display: inline-block;
    background: rgba(20,200,80,0.12);
    border: 1px solid rgba(20,200,80,0.35);
    color: #14c850;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    padding: 6px 18px;
    border-radius: 100px;
    margin-bottom: 32px;
}
.hero-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(64px, 10vw, 130px);
    line-height: 0.92;
    letter-spacing: 0.02em;
    margin: 0 0 12px;
    color: #f0ede8;
}
.hero-title span { color: #14c850; }
.hero-subtitle {
    font-size: clamp(16px, 2vw, 20px);
    color: rgba(240,237,232,0.55);
    max-width: 560px;
    margin: 0 auto 48px;
    font-weight: 300;
    line-height: 1.6;
}
.hero-pill {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.10);
    border-radius: 100px;
    padding: 8px 20px;
    font-size: 13px;
    color: rgba(240,237,232,0.6);
    margin: 4px;
}
.hero-pill strong { color: #f0ede8; }

/* ── SECTION ── */
.section {
    padding: 100px 5vw;
    max-width: 1200px;
    margin: 0 auto;
}
.section-label {
    font-size: 11px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #14c850;
    font-weight: 600;
    margin-bottom: 16px;
}
.section-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(40px, 6vw, 72px);
    line-height: 1;
    margin: 0 0 60px;
    color: #f0ede8;
}

/* ── ROLE CARDS ── */
.roles-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2px;
    background: rgba(255,255,255,0.06);
    border-radius: 20px;
    overflow: hidden;
}
.role-card {
    background: #0f0f18;
    padding: 48px 36px;
    position: relative;
    overflow: hidden;
    transition: background 0.3s;
}
.role-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
}
.role-card.coach::before  { background: linear-gradient(90deg, #14c850, #0fa840); }
.role-card.director::before { background: linear-gradient(90deg, #f59e0b, #d97706); }
.role-card.player::before { background: linear-gradient(90deg, #3b82f6, #1d4ed8); }

.role-icon {
    font-size: 44px;
    margin-bottom: 20px;
    display: block;
}
.role-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 36px;
    letter-spacing: 0.04em;
    margin: 0 0 8px;
}
.role-card.coach .role-title   { color: #14c850; }
.role-card.director .role-title { color: #f59e0b; }
.role-card.player .role-title  { color: #3b82f6; }

.role-desc {
    font-size: 14px;
    color: rgba(240,237,232,0.45);
    margin: 0 0 28px;
    font-weight: 300;
}
.feature-list { list-style: none; padding: 0; margin: 0; }
.feature-list li {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 10px 0;
    border-bottom: 1px solid rgba(255,255,255,0.05);
    font-size: 14px;
    color: rgba(240,237,232,0.75);
    line-height: 1.4;
}
.feature-list li:last-child { border-bottom: none; }
.feature-dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    margin-top: 5px;
    flex-shrink: 0;
}
.coach .feature-dot   { background: #14c850; }
.director .feature-dot { background: #f59e0b; }
.player .feature-dot  { background: #3b82f6; }

/* ── FEATURES GRID ── */
.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 16px;
}
.feature-tile {
    background: linear-gradient(135deg, #111118 0%, #0d0d14 100%);
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 16px;
    padding: 32px 28px;
}
.feature-tile-icon { font-size: 28px; margin-bottom: 16px; display: block; }
.feature-tile-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 22px;
    color: #f0ede8;
    margin: 0 0 8px;
    letter-spacing: 0.03em;
}
.feature-tile-desc {
    font-size: 13px;
    color: rgba(240,237,232,0.45);
    line-height: 1.55;
    font-weight: 300;
}

/* ── DIVIDER ── */
.divider {
    height: 1px;
    background: rgba(255,255,255,0.06);
    margin: 0 5vw;
}

/* ── FOOTER ── */
.footer {
    padding: 60px 5vw;
    text-align: center;
    color: rgba(240,237,232,0.25);
    font-size: 13px;
}
.footer strong { color: #14c850; }
</style>
""", unsafe_allow_html=True)

# ── HERO ────────────────────────────────────────────────────────────────────
st.markdown("""
<div class="hero">
    <div class="hero-badge">⚽ Plataforma Integral de Fútbol</div>
    <h1 class="hero-title">FOOTBALL<span>OS</span></h1>
    <p class="hero-subtitle">
        Una plataforma unificada que conecta entrenadores, directivos y jugadores
        con todo lo que necesitan para gestionar un club moderno.
    </p>
    <div style="display:flex; flex-wrap:wrap; justify-content:center; gap:4px; margin-bottom: 16px;">
        <span class="hero-pill">📊 <strong>Estadísticas</strong> en tiempo real</span>
        <span class="hero-pill">🗓️ <strong>Fixture</strong> y resultados</span>
        <span class="hero-pill">📍 <strong>Canchas</strong> geolocalizadas</span>
        <span class="hero-pill">💼 <strong>Contratos</strong> y fichajes</span>
        <span class="hero-pill">💬 <strong>Comunicación</strong> por roles</span>
    </div>
</div>
""", unsafe_allow_html=True)

# ── ROLES ───────────────────────────────────────────────────────────────────
st.markdown("""
<div class="section">
    <div class="section-label">¿Quién usa la plataforma?</div>
    <div class="section-title">TRES ROLES,<br>UNA VISIÓN</div>
    <div class="roles-grid">

        <div class="role-card coach">
            <span class="role-icon">🧠</span>
            <div class="role-title">Entrenador</div>
            <p class="role-desc">Control total del rendimiento y la planificación deportiva</p>
            <ul class="feature-list">
                <li><span class="feature-dot"></span>Ver estadísticas individuales y colectivas del equipo</li>
                <li><span class="feature-dot"></span>Planificar y gestionar sesiones de entrenamiento</li>
                <li><span class="feature-dot"></span>Consultar el fixture y cargar resultados de partidos</li>
                <li><span class="feature-dot"></span>Elegir y reservar canchas según ubicación</li>
                <li><span class="feature-dot"></span>Enviar comunicados a jugadores y directivos</li>
                <li><span class="feature-dot"></span>Seguimiento de lesiones y estado físico del plantel</li>
            </ul>
        </div>

        <div class="role-card director">
            <span class="role-icon">🏛️</span>
            <div class="role-title">Directivos</div>
            <p class="role-desc">Visión estratégica del club, finanzas y mercado de pases</p>
            <ul class="feature-list">
                <li><span class="feature-dot"></span>Gestionar contratos, salarios y vencimientos</li>
                <li><span class="feature-dot"></span>Seguimiento de fichajes y mercado de transferencias</li>
                <li><span class="feature-dot"></span>Ver reportes financieros y presupuesto del club</li>
                <li><span class="feature-dot"></span>Acceder a métricas de rendimiento del plantel</li>
                <li><span class="feature-dot"></span>Consultar fixture y resultados de la temporada</li>
                <li><span class="feature-dot"></span>Comunicación con cuerpo técnico y jugadores</li>
            </ul>
        </div>

        <div class="role-card player">
            <span class="role-icon">⚡</span>
            <div class="role-title">Jugadores</div>
            <p class="role-desc">Todo lo que el jugador necesita saber sobre sí mismo y el equipo</p>
            <ul class="feature-list">
                <li><span class="feature-dot"></span>Ver sus propias estadísticas y evolución personal</li>
                <li><span class="feature-dot"></span>Consultar el fixture y próximos partidos</li>
                <li><span class="feature-dot"></span>Ver la ubicación y cómo llegar a las canchas</li>
                <li><span class="feature-dot"></span>Recibir avisos de entrenamientos y convocatorias</li>
                <li><span class="feature-dot"></span>Acceder a su contrato y situación contractual</li>
                <li><span class="feature-dot"></span>Mensajería con el cuerpo técnico</li>
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
    <div class="features-grid">

        <div class="feature-tile">
            <span class="feature-tile-icon">📊</span>
            <div class="feature-tile-title">Estadísticas & Métricas</div>
            <p class="feature-tile-desc">Datos de rendimiento individuales y colectivos. Goles, asistencias, minutos, pases, pressing y mucho más por partido y por temporada.</p>
        </div>

        <div class="feature-tile">
            <span class="feature-tile-icon">🗓️</span>
            <div class="feature-tile-title">Fixture & Resultados</div>
            <p class="feature-tile-desc">Calendario de partidos actualizado, resultados en tiempo real y posición en la tabla. Toda la temporada al alcance de la mano.</p>
        </div>

        <div class="feature-tile">
            <span class="feature-tile-icon">🏋️</span>
            <div class="feature-tile-title">Gestión de Entrenamientos</div>
            <p class="feature-tile-desc">Planificación de sesiones, carga de ejercicios, control de asistencia y seguimiento de la carga física del plantel semana a semana.</p>
        </div>

        <div class="feature-tile">
            <span class="feature-tile-icon">📍</span>
            <div class="feature-tile-title">Ubicación de Canchas</div>
            <p class="feature-tile-desc">Mapa interactivo con todas las canchas disponibles, horarios, disponibilidad y navegación GPS para llegar sin complicaciones.</p>
        </div>

        <div class="feature-tile">
            <span class="feature-tile-icon">💼</span>
            <div class="feature-tile-title">Contratos & Fichajes</div>
            <p class="feature-tile-desc">Gestión completa de contratos con alertas de vencimiento, seguimiento de negociaciones y control de transferencias entrantes y salientes.</p>
        </div>

        <div class="feature-tile">
            <span class="feature-tile-icon">💬</span>
            <div class="feature-tile-title">Comunicación por Roles</div>
            <p class="feature-tile-desc">Mensajería interna segmentada por rol. Convocatorias, avisos, circulares y chats directos entre entrenadores, directivos y jugadores.</p>
        </div>

    </div>
</div>
""", unsafe_allow_html=True)

st.markdown('<div class="divider"></div>', unsafe_allow_html=True)

# ── FOOTER ──────────────────────────────────────────────────────────────────
st.markdown("""
<div class="footer">
    <p>Construido con ❤️ para el fútbol · <strong>FootballOS</strong> · 2025</p>
    <p style="margin-top:8px; font-size:11px;">Plataforma en desarrollo · Todos los derechos reservados</p>
</div>
""", unsafe_allow_html=True)
