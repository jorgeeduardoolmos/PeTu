import streamlit as st
import sys, os
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from styles import load_css

st.set_page_config(
    page_title="Flujos — La PeTu App",
    page_icon="⚽",
    layout="wide",
    initial_sidebar_state="expanded",
)

st.markdown(load_css(), unsafe_allow_html=True)

# ── HEADER ───────────────────────────────────────────────────────────────────
st.markdown("""
<div style="padding:48px 6vw 36px;border-bottom:1px solid rgba(255,220,80,0.15);">
  <a href="/" style="font-family:sans-serif;font-size:12px;color:rgba(238,242,255,0.4);text-decoration:none;">← Volver al inicio</a>
  <div style="margin-top:16px;font-family:'Bebas Neue',Impact,sans-serif;font-size:clamp(36px,6vw,64px);color:#eef2ff;line-height:1;">
    FLUJOS DE <span style="color:#ffd94d;">LA APP</span>
  </div>
  <p style="font-family:sans-serif;font-size:14px;color:rgba(238,242,255,0.45);margin:10px 0 0;font-weight:300;">Mockups de pantallas · Fase 1 — Onboarding & Acceso</p>
</div>
""", unsafe_allow_html=True)

# ── NAV ──────────────────────────────────────────────────────────────────────
flujos = ["📱 App Landing", "🔐 Login", "🏠 Home Entrenador"]
selected = st.radio("", flujos, horizontal=True, label_visibility="collapsed")
st.markdown('<div style="height:1px;background:rgba(255,255,255,0.06);margin:16px 6vw 40px;"></div>', unsafe_allow_html=True)

# ── HELPERS ──────────────────────────────────────────────────────────────────
def note_card(icon, title, desc):
    return f"""
<div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:14px;padding:18px 20px;margin-bottom:12px;">
  <div style="display:flex;gap:12px;align-items:flex-start;">
    <span style="font-size:20px;flex-shrink:0;">{icon}</span>
    <div>
      <div style="font-family:sans-serif;font-size:13px;font-weight:700;color:#eef2ff;margin-bottom:4px;">{title}</div>
      <div style="font-family:sans-serif;font-size:12px;color:rgba(238,242,255,0.45);line-height:1.5;">{desc}</div>
    </div>
  </div>
</div>"""

def pending_box(items):
    lines = "".join(f"· {l}<br>" for l in items)
    return f"""
<div style="background:rgba(255,220,80,0.08);border:1px solid rgba(255,220,80,0.25);border-radius:14px;padding:18px 20px;margin-top:4px;">
  <div style="font-family:sans-serif;font-size:12px;font-weight:700;color:#ffd94d;margin-bottom:8px;">⚡ Decisiones pendientes</div>
  <div style="font-family:sans-serif;font-size:12px;color:rgba(238,242,255,0.55);line-height:1.8;">{lines}</div>
</div>"""

def screen_header(num, title, desc):
    st.markdown(f"""
<div style="padding:0 6vw;margin-bottom:24px;">
  <div style="font-family:sans-serif;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#ffd94d;font-weight:700;margin-bottom:6px;">Pantalla {num}</div>
  <div style="font-family:'Bebas Neue',Impact,sans-serif;font-size:36px;color:#eef2ff;">{title}</div>
  <p style="font-family:sans-serif;font-size:13px;color:rgba(238,242,255,0.45);margin:6px 0 0;">{desc}</p>
</div>
""", unsafe_allow_html=True)

# ═════════════════════════════════════════════════════════════════
# SVGs
# ═════════════════════════════════════════════════════════════════

SVG_SPLASH = """
<div style="display:flex;justify-content:center;padding:0 0 32px;">
<svg viewBox="0 0 220 480" width="220" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif;">
  <rect x="0" y="0" width="220" height="480" rx="32" fill="#111827" stroke="#2d3748" stroke-width="5"/>
  <rect x="8" y="18" width="204" height="444" rx="16" fill="#0f1b2d"/>
  <rect x="75" y="20" width="70" height="9" rx="4" fill="#0a0f1a"/>
  <ellipse cx="110" cy="175" rx="65" ry="55" fill="rgba(255,217,77,0.07)"/>
  <text x="110" y="175" text-anchor="middle" font-size="40" fill="#ffd94d">⚽</text>
  <text x="110" y="222" text-anchor="middle" font-size="28" font-weight="700" fill="#eef2ff" font-family="Impact,sans-serif">LA PETU</text>
  <text x="110" y="252" text-anchor="middle" font-size="28" font-weight="700" fill="#ffd94d" font-family="Impact,sans-serif">APP</text>
  <text x="110" y="275" text-anchor="middle" font-size="10" fill="#556688">Tu club, tu equipo, todo en un lugar.</text>
  <rect x="52" y="298" width="116" height="34" rx="10" fill="#ffd94d"/>
  <text x="110" y="319" text-anchor="middle" font-size="12" font-weight="700" fill="#0f1b2d">Iniciar sesión</text>
  <rect x="52" y="340" width="116" height="34" rx="10" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
  <text x="110" y="361" text-anchor="middle" font-size="12" fill="#8899bb">Soy nuevo aquí</text>
  <text x="110" y="400" text-anchor="middle" font-size="8" fill="rgba(238,242,255,0.18)">Versión 1.0 · Beta</text>
  <rect x="75" y="456" width="70" height="4" rx="2" fill="#2d3748"/>
</svg>
</div>
"""

SVG_LOGIN = """
<div style="display:flex;justify-content:center;padding:0 0 32px;">
<svg viewBox="0 0 220 480" width="220" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif;">
  <rect x="0" y="0" width="220" height="480" rx="32" fill="#111827" stroke="#2d3748" stroke-width="5"/>
  <rect x="8" y="18" width="204" height="444" rx="16" fill="#0f1b2d"/>
  <rect x="75" y="20" width="70" height="9" rx="4" fill="#0a0f1a"/>
  <text x="20" y="52" font-size="9" fill="rgba(238,242,255,0.28)">← Volver</text>
  <text x="20" y="82" font-size="20" font-weight="700" fill="#eef2ff" font-family="Impact,sans-serif">BIENVENIDO</text>
  <text x="20" y="96" font-size="9" fill="#556688">Ingresá con tu cuenta del club</text>
  <text x="20" y="118" font-size="8" font-weight="700" fill="#556688" letter-spacing="1">EMAIL</text>
  <rect x="20" y="122" width="180" height="28" rx="8" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.10)" stroke-width="0.5"/>
  <text x="32" y="140" font-size="9" fill="rgba(238,242,255,0.25)">tucorreo@club.com</text>
  <text x="20" y="164" font-size="8" font-weight="700" fill="#556688" letter-spacing="1">CONTRASEÑA</text>
  <rect x="20" y="168" width="180" height="28" rx="8" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.10)" stroke-width="0.5"/>
  <text x="32" y="186" font-size="9" fill="rgba(238,242,255,0.25)">••••••••</text>
  <text x="200" y="210" text-anchor="end" font-size="8" fill="#ffd94d">¿Olvidaste tu contraseña?</text>
  <rect x="20" y="218" width="180" height="32" rx="10" fill="#ffd94d"/>
  <text x="110" y="238" text-anchor="middle" font-size="12" font-weight="700" fill="#0f1b2d">Entrar</text>
  <line x1="20" y1="266" x2="95" y2="266" stroke="rgba(255,255,255,0.08)" stroke-width="0.5"/>
  <text x="110" y="270" text-anchor="middle" font-size="8" fill="rgba(238,242,255,0.2)">o</text>
  <line x1="125" y1="266" x2="200" y2="266" stroke="rgba(255,255,255,0.08)" stroke-width="0.5"/>
  <rect x="20" y="276" width="180" height="28" rx="9" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.10)" stroke-width="0.5"/>
  <text x="110" y="294" text-anchor="middle" font-size="9" fill="rgba(238,242,255,0.50)">Continuar con Google</text>
  <rect x="20" y="316" width="180" height="36" rx="8" fill="rgba(99,179,255,0.08)" stroke="rgba(99,179,255,0.20)" stroke-width="0.5"/>
  <text x="30" y="331" font-size="8" font-weight="700" fill="#63b3ff">Detectando rol automáticamente...</text>
  <text x="30" y="344" font-size="8" fill="rgba(238,242,255,0.30)">Entrenador · Directivo · Jugador</text>
  <rect x="75" y="456" width="70" height="4" rx="2" fill="#2d3748"/>
</svg>
</div>
"""

SVG_HOME = """
<div style="display:flex;justify-content:center;padding:0 0 32px;">
<svg viewBox="0 0 220 480" width="220" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif;">
  <rect x="0" y="0" width="220" height="480" rx="32" fill="#111827" stroke="#2d3748" stroke-width="5"/>
  <rect x="8" y="18" width="204" height="444" rx="16" fill="#0f1b2d"/>
  <rect x="75" y="20" width="70" height="9" rx="4" fill="#0a0f1a"/>
  <!-- top bar -->
  <text x="20" y="50" font-size="8" fill="rgba(238,242,255,0.28)">Buenos días,</text>
  <text x="20" y="64" font-size="14" font-weight="700" fill="#eef2ff" font-family="Impact,sans-serif">PROFE GARCÍA 🧠</text>
  <circle cx="196" cy="55" r="13" fill="rgba(255,217,77,0.12)" stroke="rgba(255,217,77,0.30)" stroke-width="0.5"/>
  <text x="196" y="60" text-anchor="middle" font-size="12">🔔</text>
  <!-- partido card -->
  <rect x="20" y="78" width="180" height="52" rx="10" fill="rgba(99,179,255,0.10)" stroke="rgba(99,179,255,0.22)" stroke-width="0.5"/>
  <text x="30" y="92" font-size="7" font-weight="700" fill="#63b3ff" letter-spacing="1">PRÓXIMO PARTIDO</text>
  <text x="30" y="106" font-size="11" font-weight="700" fill="#eef2ff" font-family="Impact,sans-serif">ATLÉTICO VS RIVALES FC</text>
  <text x="30" y="120" font-size="8" fill="rgba(238,242,255,0.40)">Sáb 28 Jun · 16:00 hs</text>
  <rect x="168" y="90" width="26" height="18" rx="5" fill="#ffd94d"/>
  <text x="181" y="102" text-anchor="middle" font-size="7" font-weight="700" fill="#0f1b2d">Citar</text>
  <!-- stats 2x2 -->
  <rect x="20" y="140" width="84" height="44" rx="8" fill="rgba(255,255,255,0.05)"/>
  <text x="62" y="158" text-anchor="middle" font-size="18" font-weight="700" fill="#ffd94d">18</text>
  <text x="62" y="174" text-anchor="middle" font-size="7" fill="rgba(238,242,255,0.38)">Jugadores activos</text>
  <rect x="112" y="140" width="88" height="44" rx="8" fill="rgba(255,255,255,0.05)"/>
  <text x="156" y="158" text-anchor="middle" font-size="18" font-weight="700" fill="#50c88c">3 — 1</text>
  <text x="156" y="174" text-anchor="middle" font-size="7" fill="rgba(238,242,255,0.38)">Último resultado</text>
  <rect x="20" y="192" width="84" height="44" rx="8" fill="rgba(255,255,255,0.05)"/>
  <text x="62" y="210" text-anchor="middle" font-size="18" font-weight="700" fill="#63b3ff">12</text>
  <text x="62" y="226" text-anchor="middle" font-size="7" fill="rgba(238,242,255,0.38)">Fechas jugadas</text>
  <rect x="112" y="192" width="88" height="44" rx="8" fill="rgba(255,255,255,0.05)"/>
  <text x="156" y="210" text-anchor="middle" font-size="18" font-weight="700" fill="#f87171">2</text>
  <text x="156" y="226" text-anchor="middle" font-size="7" fill="rgba(238,242,255,0.38)">Con molestias</text>
  <!-- acciones label -->
  <text x="20" y="252" font-size="7" font-weight="700" fill="rgba(238,242,255,0.28)" letter-spacing="1">ACCIONES RÁPIDAS</text>
  <!-- 3 tiles -->
  <rect x="20" y="258" width="52" height="52" rx="8" fill="rgba(255,255,255,0.05)"/>
  <text x="46" y="280" text-anchor="middle" font-size="16">📋</text>
  <text x="46" y="298" text-anchor="middle" font-size="7" fill="rgba(238,242,255,0.45)">Citar</text>
  <rect x="80" y="258" width="60" height="52" rx="8" fill="rgba(255,255,255,0.05)"/>
  <text x="110" y="280" text-anchor="middle" font-size="16">🗓️</text>
  <text x="110" y="298" text-anchor="middle" font-size="7" fill="rgba(238,242,255,0.45)">Fixture</text>
  <rect x="148" y="258" width="52" height="52" rx="8" fill="rgba(255,255,255,0.05)"/>
  <text x="174" y="280" text-anchor="middle" font-size="16">📍</text>
  <text x="174" y="298" text-anchor="middle" font-size="7" fill="rgba(238,242,255,0.45)">Cancha</text>
  <!-- bottom nav -->
  <rect x="8" y="402" width="204" height="46" rx="0" fill="#0d1623"/>
  <line x1="8" y1="402" x2="212" y2="402" stroke="rgba(255,255,255,0.06)" stroke-width="0.5"/>
  <text x="55" y="430" text-anchor="middle" font-size="18">🏠</text>
  <text x="95" y="430" text-anchor="middle" font-size="18" opacity="0.28">👥</text>
  <text x="135" y="430" text-anchor="middle" font-size="18" opacity="0.28">📊</text>
  <text x="175" y="430" text-anchor="middle" font-size="18" opacity="0.28">⚙️</text>
  <rect x="75" y="456" width="70" height="4" rx="2" fill="#2d3748"/>
</svg>
</div>
"""

# ═════════════════════════════════════════════════════════════════
# FLUJO 1 — APP LANDING
# ═════════════════════════════════════════════════════════════════
if selected == "📱 App Landing":
    screen_header("01", "SPLASH SCREEN — Apertura de la app",
        "Lo primero que ve el usuario al abrir la app por primera vez o cuando no hay sesión activa.")

    col_phone, col_notes = st.columns([1, 1], gap="large")
    with col_phone:
        st.markdown(SVG_SPLASH, unsafe_allow_html=True)
    with col_notes:
        st.markdown('<div style="font-family:sans-serif;font-size:13px;font-weight:700;color:#ffd94d;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:16px;">Notas de diseño</div>', unsafe_allow_html=True)
        st.markdown(note_card("🎨", "Identidad visual", "Fondo azul marino con acento amarillo. Logo centrado. Transmite seriedad deportiva sin ser fría."), unsafe_allow_html=True)
        st.markdown(note_card("🔘", "Dos acciones claras", "'Iniciar sesión' es el CTA principal en amarillo. 'Soy nuevo aquí' es secundario. Sin ambigüedad."), unsafe_allow_html=True)
        st.markdown(note_card("✨", "Sin ruido", "Splash minimalista. El usuario sabe exactamente qué hacer en 2 segundos."), unsafe_allow_html=True)
        st.markdown(note_card("📲", "Próximo paso", "Iniciar sesión → pantalla de Login. Soy nuevo → flujo de registro (Fase 2)."), unsafe_allow_html=True)
        st.markdown(pending_box(["¿El registro lo hace solo el admin o puede auto-registrarse cualquier jugador?"]), unsafe_allow_html=True)

# ═════════════════════════════════════════════════════════════════
# FLUJO 2 — LOGIN
# ═════════════════════════════════════════════════════════════════
elif selected == "🔐 Login":
    screen_header("02", "LOGIN — Acceso a la cuenta",
        "El sistema detecta el rol del usuario y redirige al home correspondiente.")

    col_phone, col_notes = st.columns([1, 1], gap="large")
    with col_phone:
        st.markdown(SVG_LOGIN, unsafe_allow_html=True)
    with col_notes:
        st.markdown('<div style="font-family:sans-serif;font-size:13px;font-weight:700;color:#ffd94d;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:16px;">Notas de diseño</div>', unsafe_allow_html=True)
        st.markdown(note_card("🎭", "Rol automático", "El sistema detecta el rol según el email registrado. No hay selector visible — reduce fricción y errores."), unsafe_allow_html=True)
        st.markdown(note_card("📧", "Email + contraseña", "Acceso familiar para todos los perfiles, incluidos jugadores mayores no nativos digitales."), unsafe_allow_html=True)
        st.markdown(note_card("🔵", "Google OAuth", "Opción secundaria para quienes prefieren no recordar contraseñas."), unsafe_allow_html=True)
        st.markdown(note_card("🔀", "Redirección por rol", "Entrenador → dashboard. Jugador → perfil. Directivo → panel de gestión."), unsafe_allow_html=True)
        st.markdown(pending_box([
            "¿Autenticación propia o Firebase/Supabase?",
            "¿El primer login tiene un paso de 'elegir club'?",
            "¿Hay PIN rápido para acceso sin contraseña?"
        ]), unsafe_allow_html=True)

# ═════════════════════════════════════════════════════════════════
# FLUJO 3 — HOME ENTRENADOR
# ═════════════════════════════════════════════════════════════════
elif selected == "🏠 Home Entrenador":
    screen_header("03", "HOME — Dashboard del Entrenador",
        "Vista principal tras el login. Resumen del equipo y accesos directos a las acciones más frecuentes.")

    col_phone, col_notes = st.columns([1, 1], gap="large")
    with col_phone:
        st.markdown(SVG_HOME, unsafe_allow_html=True)
    with col_notes:
        st.markdown('<div style="font-family:sans-serif;font-size:13px;font-weight:700;color:#ffd94d;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:16px;">Notas de diseño</div>', unsafe_allow_html=True)
        st.markdown(note_card("👋", "Saludo personalizado", "El nombre del entrenador aparece arriba. Confirma que el login fue al rol correcto."), unsafe_allow_html=True)
        st.markdown(note_card("🎯", "Card de próximo partido", "Lo más urgente al frente. Botón directo a 'Citar' sin tener que navegar."), unsafe_allow_html=True)
        st.markdown(note_card("📊", "4 métricas clave", "Jugadores activos, resultado, fechas y lesionados. Todo de un vistazo."), unsafe_allow_html=True)
        st.markdown(note_card("⚡", "Acciones rápidas", "Las 3 acciones de Fase 1 siempre visibles. Tap directo sin navegar."), unsafe_allow_html=True)
        st.markdown(note_card("🔻", "Bottom nav", "Navegación fija: Home, Plantel, Estadísticas, Configuración."), unsafe_allow_html=True)
        st.markdown(pending_box([
            "Pantalla de Citación de jugadores",
            "Pantalla de Fixture / calendario",
            "Home del Jugador (vista diferente)"
        ]), unsafe_allow_html=True)

# ── FOOTER ───────────────────────────────────────────────────────────────────
st.markdown("<div style='height:48px'></div>", unsafe_allow_html=True)
st.markdown("""
<div style="padding:32px 6vw;text-align:center;border-top:1px solid rgba(255,255,255,0.06);">
  <p style="font-family:sans-serif;color:rgba(238,242,255,0.25);font-size:12px;margin:0;">
    <b style="color:#ffd94d;">La PeTu App</b> · Flujos en construcción · 2025
  </p>
</div>
""", unsafe_allow_html=True)
