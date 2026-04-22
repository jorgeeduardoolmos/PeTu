import streamlit as st
from styles import load_css, feature_widget, divider, section_header

st.set_page_config(
    page_title="La PeTu App",
    page_icon="⚽",
    layout="wide",
    initial_sidebar_state="expanded",
)

st.markdown(load_css(), unsafe_allow_html=True)

# ══════════════════════════════════════
# HERO
# ══════════════════════════════════════
st.markdown("""
<div style="padding:60px 6vw 0;text-align:center;">
  <div style="display:inline-block;background:rgba(255,220,80,0.14);border:1px solid rgba(255,220,80,0.45);color:#ffd94d;font-size:11px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;padding:6px 20px;border-radius:100px;font-family:sans-serif;">
    ⚽ Plataforma integral de fútbol
  </div>
</div>
""", unsafe_allow_html=True)

st.markdown("""
<div style="padding:12px 6vw 0;text-align:center;">
  <div style="font-family:'Bebas Neue',Impact,sans-serif;font-size:clamp(72px,12vw,140px);line-height:0.9;color:#eef2ff;">
    LA <span style="color:#ffd94d;">PETU</span><br>APP
  </div>
</div>
""", unsafe_allow_html=True)

st.markdown("""
<div style="padding:12px 6vw 0;text-align:center;">
  <p style="font-family:sans-serif;font-size:18px;color:rgba(238,242,255,0.6);font-weight:300;max-width:520px;margin:20px auto 0;line-height:1.65;">
    Todo lo que tu club necesita en un solo lugar.<br>
    Entrenadores, directivos y jugadores, conectados y organizados.
  </p>
</div>
""", unsafe_allow_html=True)

st.markdown("""
<div style="padding:28px 6vw 40px;text-align:center;">
  <div style="display:inline-flex;flex-wrap:wrap;justify-content:center;gap:8px;max-width:800px;">
    <span style="display:inline-block;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.14);border-radius:100px;padding:7px 18px;font-size:13px;color:rgba(238,242,255,0.7);font-family:sans-serif;">📊 <b style="color:#eef2ff;">Estadísticas</b> en tiempo real</span>
    <span style="display:inline-block;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.14);border-radius:100px;padding:7px 18px;font-size:13px;color:rgba(238,242,255,0.7);font-family:sans-serif;">🗓️ <b style="color:#eef2ff;">Fixture</b> y resultados</span>
    <span style="display:inline-block;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.14);border-radius:100px;padding:7px 18px;font-size:13px;color:rgba(238,242,255,0.7);font-family:sans-serif;">📍 <b style="color:#eef2ff;">Canchas</b> geolocalizadas</span>
    <span style="display:inline-block;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.14);border-radius:100px;padding:7px 18px;font-size:13px;color:rgba(238,242,255,0.7);font-family:sans-serif;">💼 <b style="color:#eef2ff;">Contratos</b> y fichajes</span>
    <span style="display:inline-block;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.14);border-radius:100px;padding:7px 18px;font-size:13px;color:rgba(238,242,255,0.7);font-family:sans-serif;">💬 <b style="color:#eef2ff;">Comunicación</b> por roles</span>
    <span style="display:inline-block;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.14);border-radius:100px;padding:7px 18px;font-size:13px;color:rgba(238,242,255,0.7);font-family:sans-serif;">🏋️ <b style="color:#eef2ff;">Entrenamientos</b> planificados</span>
  </div>
</div>
""", unsafe_allow_html=True)

# ── CTA → FLUJOS ─────────────────────────────────────────────────────────────
st.markdown("""
<div style="padding:0 6vw 8px;text-align:center;">
  <div style="font-family:sans-serif;font-size:13px;color:rgba(238,242,255,0.40);">¿Querés ver cómo funciona por dentro?</div>
</div>
""", unsafe_allow_html=True)

_, center, _ = st.columns([1.5, 1, 1.5])
with center:
    st.page_link("pages/1_Flujos.py", label="📱  Ver flujos de la app", use_container_width=True)

st.markdown("<div style='height:48px;'></div>", unsafe_allow_html=True)

# ══════════════════════════════════════
# ROLES
# ══════════════════════════════════════
st.markdown(section_header("¿Quién usa la plataforma?", "TRES ROLES, UNA VISIÓN"), unsafe_allow_html=True)

fw = feature_widget

col1, col2, col3 = st.columns(3, gap="small")

with col1:
    st.markdown(f"""
    <div style="background:rgba(99,179,255,0.08);border:1px solid rgba(99,179,255,0.22);border-radius:20px;padding:32px 24px;margin:0 8px 24px;">
        <div style="height:3px;background:linear-gradient(90deg,#63b3ff,#3a8fd4);border-radius:3px;margin-bottom:24px;"></div>
        <div style="font-size:36px;margin-bottom:10px;">🧠</div>
        <div style="font-family:'Bebas Neue',Impact,sans-serif;font-size:32px;color:#a8d4ff;letter-spacing:0.04em;margin-bottom:6px;">Entrenador</div>
        <p style="font-family:sans-serif;font-size:13px;color:rgba(238,242,255,0.40);margin:0 0 20px;">Control total del rendimiento y planificación deportiva</p>
        {fw("📊","Ver estadísticas individuales y colectivas","#63b3ff")}
        {fw("🏋️","Planificar sesiones de entrenamiento","#63b3ff")}
        {fw("🗓️","Consultar fixture y cargar resultados","#63b3ff")}
        {fw("📋","Citar jugadores para los partidos","#63b3ff")}
        {fw("📢","Enviar comunicados al plantel","#63b3ff")}
        {fw("🩹","Seguimiento de lesiones y estado físico","#63b3ff")}
    </div>
    """, unsafe_allow_html=True)

with col2:
    st.markdown(f"""
    <div style="background:rgba(255,217,77,0.07);border:1px solid rgba(255,217,77,0.25);border-radius:20px;padding:32px 24px;margin:0 8px 24px;">
        <div style="height:3px;background:linear-gradient(90deg,#ffd94d,#f0b800);border-radius:3px;margin-bottom:24px;"></div>
        <div style="font-size:36px;margin-bottom:10px;">🏛️</div>
        <div style="font-family:'Bebas Neue',Impact,sans-serif;font-size:32px;color:#ffd94d;letter-spacing:0.04em;margin-bottom:6px;">Directivos</div>
        <p style="font-family:sans-serif;font-size:13px;color:rgba(238,242,255,0.40);margin:0 0 20px;">Visión estratégica, finanzas y mercado de pases</p>
        {fw("💼","Gestionar contratos y vencimientos","#ffd94d")}
        {fw("🔀","Seguimiento de fichajes y transferencias","#ffd94d")}
        {fw("💰","Reportes financieros y presupuesto del club","#ffd94d")}
        {fw("📊","Métricas de rendimiento del plantel","#ffd94d")}
        {fw("🗓️","Cargar fixture y partidos","#ffd94d")}
        {fw("💬","Comunicación con cuerpo técnico y jugadores","#ffd94d")}
    </div>
    """, unsafe_allow_html=True)

with col3:
    st.markdown(f"""
    <div style="background:rgba(80,200,140,0.07);border:1px solid rgba(80,200,140,0.22);border-radius:20px;padding:32px 24px;margin:0 8px 24px;">
        <div style="height:3px;background:linear-gradient(90deg,#50c88c,#2da869);border-radius:3px;margin-bottom:24px;"></div>
        <div style="font-size:36px;margin-bottom:10px;">⚡</div>
        <div style="font-family:'Bebas Neue',Impact,sans-serif;font-size:32px;color:#7de0b0;letter-spacing:0.04em;margin-bottom:6px;">Jugadores</div>
        <p style="font-family:sans-serif;font-size:13px;color:rgba(238,242,255,0.40);margin:0 0 20px;">Todo lo que necesitás saber sobre vos y el equipo</p>
        {fw("📈","Ver tus estadísticas y evolución personal","#50c88c")}
        {fw("🗓️","Consultar fixture y próximos partidos","#50c88c")}
        {fw("📍","Ubicación y cómo llegar a las canchas","#50c88c")}
        {fw("🔔","Recibir avisos de entrenamientos y convocatorias","#50c88c")}
        {fw("📄","Acceder a tu contrato y situación contractual","#50c88c")}
        {fw("💬","Mensajería con el cuerpo técnico","#50c88c")}
    </div>
    """, unsafe_allow_html=True)

# ══════════════════════════════════════
# FEATURES
# ══════════════════════════════════════
st.markdown(divider(), unsafe_allow_html=True)
st.markdown(section_header("Funcionalidades", "TODO EN UN SOLO LUGAR"), unsafe_allow_html=True)

features = [
    ("📊", "Estadísticas & Métricas", "Goles, asistencias, minutos y más. Datos por partido y temporada, individuales y colectivos."),
    ("🗓️", "Fixture & Resultados", "Calendario actualizado, resultados y posición en la tabla. Toda la temporada al alcance."),
    ("🏋️", "Gestión de Entrenamientos", "Planificación de sesiones, asistencia y seguimiento de carga física semana a semana."),
    ("📍", "Ubicación de Canchas", "Mapa con canchas disponibles, horarios y navegación GPS sin complicaciones."),
    ("💼", "Contratos & Fichajes", "Alertas de vencimiento, negociaciones y control de transferencias del club."),
    ("💬", "Comunicación por Roles", "Mensajería segmentada: convocatorias, avisos y chats entre todos los roles."),
]

cols = st.columns(3, gap="small")
for i, (icon, title, desc) in enumerate(features):
    with cols[i % 3]:
        st.markdown(f"""
        <div style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.10);border-radius:16px;padding:28px 24px;margin:0 8px 16px;">
            <div style="font-size:26px;margin-bottom:12px;">{icon}</div>
            <div style="font-family:'Bebas Neue',Impact,sans-serif;font-size:20px;color:#eef2ff;letter-spacing:0.03em;margin-bottom:8px;">{title}</div>
            <p style="font-family:sans-serif;font-size:13px;color:rgba(238,242,255,0.45);line-height:1.55;margin:0;">{desc}</p>
        </div>
        """, unsafe_allow_html=True)

# ══════════════════════════════════════
# ROADMAP
# ══════════════════════════════════════
st.markdown(divider(), unsafe_allow_html=True)
st.markdown(section_header(
    "Plan de desarrollo", "ROADMAP",
    subtitle="Construimos de adentro hacia afuera: primero lo que duele hoy, después lo que genera retención, y finalmente lo que escala el negocio."
), unsafe_allow_html=True)

phases = [
    {
        "num": "01", "tag": "Semanas 1 — 4", "title": "Lo que duele hoy",
        "subtitle": "Reemplazar el caos del WhatsApp",
        "color": "#ffd94d", "border": "rgba(255,217,77,0.30)", "status": "🟡 En desarrollo",
        "items": [
            ("📋", "Citaciones para partidos", "Quién va, quién no. Confirmación de presencia sin grupos de WhatsApp."),
            ("🗓️", "Fixture de la temporada", "Fechas, rivales y horarios visibles para todos los roles."),
            ("📍", "Ubicación de canchas", "Dirección con mapa. Que nadie pregunte más '¿dónde es?'."),
        ]
    },
    {
        "num": "02", "tag": "Meses 2 — 3", "title": "Lo que genera retención",
        "subtitle": "Datos que hacen volver cada semana",
        "color": "#63b3ff", "border": "rgba(99,179,255,0.25)", "status": "⚪ Próximamente",
        "items": [
            ("⚽", "Resultados de partidos", "Marcador final y goles por jugador cargados al instante."),
            ("📊", "Estadísticas básicas", "Partidos jugados, goles y asistencias por jugador en la temporada."),
            ("💬", "Comunicación interna", "Avisos y comunicados segmentados por rol. Adiós al grupo general."),
        ]
    },
    {
        "num": "03", "tag": "Meses 4 — 6", "title": "Lo que atrae directivos",
        "subtitle": "Gestión institucional del club",
        "color": "#7de0b0", "border": "rgba(80,200,140,0.25)", "status": "⚪ Futuro",
        "items": [
            ("💼", "Contratos y vencimientos", "Alertas automáticas antes de que venza un contrato."),
            ("🔀", "Gestión de fichajes", "Seguimiento de negociaciones y transferencias del plantel."),
            ("💰", "Reportes del club", "Visión financiera y métricas de rendimiento para la dirigencia."),
        ]
    },
]

for phase in phases:
    st.markdown(f"""
    <div style="background:rgba(255,255,255,0.04);border:1px solid {phase['border']};border-radius:20px;padding:36px 32px 24px;margin:0 6vw 20px;">
      <div style="display:flex;align-items:center;gap:16px;flex-wrap:wrap;">
        <span style="font-family:'Bebas Neue',Impact,sans-serif;font-size:52px;color:{phase['color']};line-height:1;opacity:0.22;">{phase['num']}</span>
        <div>
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:4px;">
            <span style="font-family:sans-serif;font-size:11px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:{phase['color']};background:rgba(255,255,255,0.06);padding:4px 12px;border-radius:100px;">{phase['tag']}</span>
            <span style="font-family:sans-serif;font-size:12px;color:rgba(238,242,255,0.35);">{phase['status']}</span>
          </div>
          <div style="font-family:'Bebas Neue',Impact,sans-serif;font-size:28px;color:#eef2ff;letter-spacing:0.03em;">{phase['title']}</div>
          <p style="font-family:sans-serif;font-size:13px;color:rgba(238,242,255,0.40);margin:2px 0 0;font-weight:300;">{phase['subtitle']}</p>
        </div>
      </div>
    </div>
    """, unsafe_allow_html=True)

    c1, c2, c3 = st.columns(3, gap="small")
    for idx, (icon, title, desc) in enumerate(phase["items"]):
        with [c1, c2, c3][idx]:
            st.markdown(f"""
            <div style="background:rgba(255,255,255,0.05);border-radius:14px;padding:20px;margin:0 6vw 8px;border-top:3px solid {phase['color']};">
              <div style="font-size:24px;margin-bottom:10px;">{icon}</div>
              <div style="font-family:sans-serif;font-size:14px;font-weight:700;color:#eef2ff;margin-bottom:6px;">{title}</div>
              <div style="font-family:sans-serif;font-size:12px;color:rgba(238,242,255,0.42);line-height:1.5;">{desc}</div>
            </div>
            """, unsafe_allow_html=True)

    st.markdown("<div style='height:16px'></div>", unsafe_allow_html=True)

st.markdown("<div style='height:40px;'></div>", unsafe_allow_html=True)

# ══════════════════════════════════════
# FOOTER
# ══════════════════════════════════════
st.markdown("""
<div style="padding:50px 6vw;text-align:center;border-top:1px solid rgba(255,255,255,0.08);">
  <p style="font-family:sans-serif;color:rgba(238,242,255,0.28);font-size:13px;margin:0;text-align:center;">
    Hecho con ❤️ para el fútbol · <b style="color:#ffd94d;">La PeTu App</b> · 2025
  </p>
  <p style="font-family:sans-serif;color:rgba(238,242,255,0.18);font-size:11px;margin:6px 0 0;text-align:center;">
    Plataforma en desarrollo · Todos los derechos reservados
  </p>
</div>
""", unsafe_allow_html=True)
