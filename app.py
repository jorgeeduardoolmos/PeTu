import streamlit as st

st.set_page_config(
    page_title="La PeTu App",
    page_icon="⚽",
    layout="wide",
    initial_sidebar_state="collapsed",
)

st.markdown("""
<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Nunito:wght@300;400;600;700&display=swap');
[data-testid="stAppViewContainer"] { background: #0f1b2d; }
[data-testid="stHeader"] { display: none; }
[data-testid="stDecoration"] { display: none; }
.block-container { padding: 0 !important; max-width: 100% !important; }
section[data-testid="stMain"] > div { padding: 0 !important; }
</style>
""", unsafe_allow_html=True)

# ══════════════════════════════════════
# HERO — partido en bloques pequeños
# ══════════════════════════════════════

# Fondo del hero — abre el div
st.markdown("""<div style="background:linear-gradient(160deg,#0f1b2d 0%,#152540 60%,#1a2f52 100%);padding:80px 6vw 60px;text-align:center;border-bottom:1px solid rgba(255,220,80,0.15);">""", unsafe_allow_html=True)

# Badge
st.markdown("""<div style="display:inline-block;background:rgba(255,220,80,0.12);border:1px solid rgba(255,220,80,0.40);color:#ffd94d;font-size:11px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;padding:6px 20px;border-radius:100px;margin-bottom:24px;font-family:sans-serif;">⚽ Plataforma integral de fútbol</div>""", unsafe_allow_html=True)

# Título
st.markdown("""<div style="font-family:'Bebas Neue',Impact,sans-serif;font-size:clamp(72px,12vw,140px);line-height:0.9;color:#eef2ff;margin-bottom:8px;">LA <span style="color:#ffd94d;">PETU</span><br>APP</div>""", unsafe_allow_html=True)

# Tagline
st.markdown("""<p style="font-family:sans-serif;font-size:18px;color:rgba(238,242,255,0.6);font-weight:300;max-width:520px;margin:16px auto 40px;line-height:1.65;text-align:center;">Todo lo que tu club necesita en un solo lugar.<br>Entrenadores, directivos y jugadores, conectados y organizados.</p>""", unsafe_allow_html=True)

# Pills — cada una por separado para evitar bloqueo
st.markdown("""<div style="display:flex;flex-wrap:wrap;justify-content:center;gap:8px;padding-bottom:10px;">""", unsafe_allow_html=True)

pills = [
    ("📊", "Estadísticas", "en tiempo real"),
    ("🗓️", "Fixture", "y resultados"),
    ("📍", "Canchas", "geolocalizadas"),
    ("💼", "Contratos", "y fichajes"),
    ("💬", "Comunicación", "por roles"),
    ("🏋️", "Entrenamientos", "planificados"),
]
for icon, bold, rest in pills:
    st.markdown(f"""<span style="display:inline-block;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.12);border-radius:100px;padding:7px 18px;font-size:13px;color:rgba(238,242,255,0.7);font-family:sans-serif;">{icon} <b style="color:#eef2ff;">{bold}</b> {rest}</span>""", unsafe_allow_html=True)

st.markdown("""</div></div>""", unsafe_allow_html=True)


# ══════════════════════════════════════
# ROLES
# ══════════════════════════════════════
st.markdown("""<div style="background:#0f1b2d;padding:70px 6vw 20px;">""", unsafe_allow_html=True)
st.markdown("""<div style="font-family:sans-serif;font-size:11px;letter-spacing:0.20em;text-transform:uppercase;color:#ffd94d;font-weight:700;margin-bottom:10px;">¿Quién usa la plataforma?</div>""", unsafe_allow_html=True)
st.markdown("""<div style="font-family:'Bebas Neue',Impact,sans-serif;font-size:clamp(38px,5.5vw,68px);line-height:1;color:#eef2ff;margin:0 0 40px;">TRES ROLES, UNA VISIÓN</div>""", unsafe_allow_html=True)
st.markdown("""</div>""", unsafe_allow_html=True)

def feature_widget(icon, text, accent):
    return f"""<div style="display:flex;align-items:center;gap:12px;background:rgba(255,255,255,0.04);border-radius:12px;padding:12px 14px;margin-bottom:8px;border-left:3px solid {accent};"><span style="font-size:20px;flex-shrink:0;">{icon}</span><span style="font-family:sans-serif;font-size:13px;color:rgba(238,242,255,0.82);line-height:1.35;">{text}</span></div>"""

col1, col2, col3 = st.columns(3, gap="small")

with col1:
    st.markdown(f"""
    <div style="background:linear-gradient(145deg,#1a3a5c,#142d4a);border:1px solid rgba(99,179,255,0.25);border-radius:20px;padding:32px 24px;margin:0 8px 24px;">
        <div style="height:3px;background:linear-gradient(90deg,#63b3ff,#3a8fd4);border-radius:3px;margin-bottom:24px;"></div>
        <div style="font-size:36px;margin-bottom:10px;">🧠</div>
        <div style="font-family:'Bebas Neue',Impact,sans-serif;font-size:32px;color:#a8d4ff;letter-spacing:0.04em;margin-bottom:6px;">Entrenador</div>
        <p style="font-family:sans-serif;font-size:13px;color:rgba(238,242,255,0.40);margin:0 0 20px;">Control total del rendimiento y planificación deportiva</p>
        {feature_widget("📊","Ver estadísticas individuales y colectivas","#63b3ff")}
        {feature_widget("🏋️","Planificar sesiones de entrenamiento","#63b3ff")}
        {feature_widget("🗓️","Consultar fixture y cargar resultados","#63b3ff")}
        {feature_widget("📍","Elegir y reservar canchas","#63b3ff")}
        {feature_widget("📢","Enviar comunicados al plantel","#63b3ff")}
        {feature_widget("🩹","Seguimiento de lesiones y estado físico","#63b3ff")}
    </div>
    """, unsafe_allow_html=True)

with col2:
    st.markdown(f"""
    <div style="background:linear-gradient(145deg,#25250a,#1a1a06);border:1px solid rgba(255,220,80,0.30);border-radius:20px;padding:32px 24px;margin:0 8px 24px;">
        <div style="height:3px;background:linear-gradient(90deg,#ffd94d,#f0b800);border-radius:3px;margin-bottom:24px;"></div>
        <div style="font-size:36px;margin-bottom:10px;">🏛️</div>
        <div style="font-family:'Bebas Neue',Impact,sans-serif;font-size:32px;color:#ffd94d;letter-spacing:0.04em;margin-bottom:6px;">Directivos</div>
        <p style="font-family:sans-serif;font-size:13px;color:rgba(238,242,255,0.40);margin:0 0 20px;">Visión estratégica, finanzas y mercado de pases</p>
        {feature_widget("💼","Gestionar contratos, salarios y vencimientos","#ffd94d")}
        {feature_widget("🔀","Seguimiento de fichajes y transferencias","#ffd94d")}
        {feature_widget("💰","Reportes financieros y presupuesto del club","#ffd94d")}
        {feature_widget("📊","Métricas de rendimiento del plantel","#ffd94d")}
        {feature_widget("🗓️","Consultar fixture y resultados","#ffd94d")}
        {feature_widget("💬","Comunicación con cuerpo técnico","#ffd94d")}
    </div>
    """, unsafe_allow_html=True)

with col3:
    st.markdown(f"""
    <div style="background:linear-gradient(145deg,#0d2e1e,#0a2418);border:1px solid rgba(80,200,140,0.25);border-radius:20px;padding:32px 24px;margin:0 8px 24px;">
        <div style="height:3px;background:linear-gradient(90deg,#50c88c,#2da869);border-radius:3px;margin-bottom:24px;"></div>
        <div style="font-size:36px;margin-bottom:10px;">⚡</div>
        <div style="font-family:'Bebas Neue',Impact,sans-serif;font-size:32px;color:#7de0b0;letter-spacing:0.04em;margin-bottom:6px;">Jugadores</div>
        <p style="font-family:sans-serif;font-size:13px;color:rgba(238,242,255,0.40);margin:0 0 20px;">Todo lo que necesitás saber sobre vos y el equipo</p>
        {feature_widget("📈","Ver tus estadísticas y evolución personal","#50c88c")}
        {feature_widget("🗓️","Consultar fixture y próximos partidos","#50c88c")}
        {feature_widget("📍","Ubicación y cómo llegar a las canchas","#50c88c")}
        {feature_widget("🔔","Recibir avisos de entrenamientos y convocatorias","#50c88c")}
        {feature_widget("📄","Acceder a tu contrato y situación contractual","#50c88c")}
        {feature_widget("💬","Mensajería con el cuerpo técnico","#50c88c")}
    </div>
    """, unsafe_allow_html=True)


# ══════════════════════════════════════
# FEATURES
# ══════════════════════════════════════
st.markdown("""<div style="height:1px;background:rgba(255,255,255,0.06);margin:0 6vw;"></div>""", unsafe_allow_html=True)
st.markdown("""<div style="background:#0f1b2d;padding:70px 6vw 20px;">""", unsafe_allow_html=True)
st.markdown("""<div style="font-family:sans-serif;font-size:11px;letter-spacing:0.20em;text-transform:uppercase;color:#ffd94d;font-weight:700;margin-bottom:10px;">Funcionalidades</div>""", unsafe_allow_html=True)
st.markdown("""<div style="font-family:'Bebas Neue',Impact,sans-serif;font-size:clamp(38px,5.5vw,68px);line-height:1;color:#eef2ff;margin:0 0 40px;">TODO EN UN SOLO LUGAR</div>""", unsafe_allow_html=True)
st.markdown("""</div>""", unsafe_allow_html=True)

features = [
    ("📊", "Estadísticas & Métricas", "Goles, asistencias, minutos y más. Datos por partido y por temporada, individuales y colectivos."),
    ("🗓️", "Fixture & Resultados", "Calendario actualizado, resultados en tiempo real y posición en la tabla. Toda la temporada al alcance."),
    ("🏋️", "Gestión de Entrenamientos", "Planificación de sesiones, asistencia y seguimiento de carga física semana a semana."),
    ("📍", "Ubicación de Canchas", "Mapa con canchas disponibles, horarios y navegación GPS para llegar sin complicaciones."),
    ("💼", "Contratos & Fichajes", "Alertas de vencimiento, seguimiento de negociaciones y control de transferencias del club."),
    ("💬", "Comunicación por Roles", "Mensajería segmentada: convocatorias, avisos y chats entre entrenadores, directivos y jugadores."),
]

cols = st.columns(3, gap="small")
for i, (icon, title, desc) in enumerate(features):
    with cols[i % 3]:
        st.markdown(f"""
        <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:16px;padding:28px 24px;margin:0 8px 16px;">
            <div style="font-size:26px;margin-bottom:12px;">{icon}</div>
            <div style="font-family:'Bebas Neue',Impact,sans-serif;font-size:20px;color:#eef2ff;letter-spacing:0.03em;margin-bottom:8px;">{title}</div>
            <p style="font-family:sans-serif;font-size:13px;color:rgba(238,242,255,0.42);line-height:1.55;margin:0;">{desc}</p>
        </div>
        """, unsafe_allow_html=True)

# ══════════════════════════════════════
# FOOTER
# ══════════════════════════════════════
st.markdown("""<div style="padding:50px 6vw;text-align:center;border-top:1px solid rgba(255,255,255,0.06);margin-top:40px;">""", unsafe_allow_html=True)
st.markdown("""<p style="font-family:sans-serif;color:rgba(238,242,255,0.28);font-size:13px;margin:0;">Hecho con ❤️ para el fútbol · <b style="color:#ffd94d;">La PeTu App</b> · 2025</p>""", unsafe_allow_html=True)
st.markdown("""<p style="font-family:sans-serif;color:rgba(238,242,255,0.18);font-size:11px;margin:6px 0 0;">Plataforma en desarrollo · Todos los derechos reservados</p>""", unsafe_allow_html=True)
st.markdown("""</div>""", unsafe_allow_html=True)
