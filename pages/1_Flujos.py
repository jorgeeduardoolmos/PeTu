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
  <a href="/" style="font-family:sans-serif;font-size:12px;color:rgba(238,242,255,0.4);text-decoration:none;letter-spacing:0.1em;">← Volver al inicio</a>
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

# ─────────────────────────────────────────────────────────────────────────────
# Helpers
# ─────────────────────────────────────────────────────────────────────────────
PHONE_TOP = """
<div style="display:flex;justify-content:center;padding:0 6vw;">
<div style="width:280px;background:#111827;border-radius:40px;border:6px solid #1e293b;box-shadow:0 40px 80px rgba(0,0,0,0.6);overflow:hidden;">
<div style="background:#111827;height:28px;display:flex;justify-content:center;align-items:center;">
<div style="width:80px;height:10px;background:#0a0f1a;border-radius:10px;"></div>
</div>"""

PHONE_BOTTOM = """
<div style="background:#111827;height:24px;display:flex;justify-content:center;align-items:center;">
<div style="width:80px;height:4px;background:#2d3748;border-radius:4px;"></div>
</div>
</div></div>"""

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

def pending_box(text):
    lines = "".join(f"· {l}<br>" for l in text)
    return f"""
<div style="background:rgba(255,220,80,0.08);border:1px solid rgba(255,220,80,0.25);border-radius:14px;padding:18px 20px;margin-top:4px;">
  <div style="font-family:sans-serif;font-size:12px;font-weight:700;color:#ffd94d;margin-bottom:8px;">⚡ Decisiones pendientes</div>
  <div style="font-family:sans-serif;font-size:12px;color:rgba(238,242,255,0.55);line-height:1.8;">{lines}</div>
</div>"""

# ═════════════════════════════════════════════════════════════════
# FLUJO 1 — APP LANDING
# ═════════════════════════════════════════════════════════════════
if selected == "📱 App Landing":

    st.markdown("""
    <div style="padding:0 6vw;margin-bottom:24px;">
      <div style="font-family:sans-serif;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#ffd94d;font-weight:700;margin-bottom:6px;">Pantalla 01</div>
      <div style="font-family:'Bebas Neue',Impact,sans-serif;font-size:36px;color:#eef2ff;">SPLASH SCREEN — Apertura de la app</div>
      <p style="font-family:sans-serif;font-size:13px;color:rgba(238,242,255,0.45);margin:6px 0 0;">Lo primero que ve el usuario al abrir la app por primera vez o cuando no hay sesión activa.</p>
    </div>
    """, unsafe_allow_html=True)

    col_phone, col_notes = st.columns([1, 1], gap="large")

    with col_phone:
        # Frame superior
        st.markdown(PHONE_TOP, unsafe_allow_html=True)
        # Contenido pantalla — partido en bloques
        st.markdown("""
        <div style="background:linear-gradient(160deg,#0f1b2d 0%,#152540 100%);padding:40px 24px 0;text-align:center;position:relative;">
          <div style="position:absolute;top:40px;left:50%;transform:translateX(-50%);width:180px;height:180px;background:radial-gradient(circle,rgba(255,220,80,0.10) 0%,transparent 70%);pointer-events:none;"></div>
          <div style="font-size:48px;margin-bottom:6px;">⚽</div>
        </div>
        """, unsafe_allow_html=True)
        st.markdown("""
        <div style="background:linear-gradient(160deg,#0f1b2d 0%,#152540 100%);padding:0 24px;text-align:center;">
          <div style="font-family:'Bebas Neue',Impact,sans-serif;font-size:38px;color:#eef2ff;line-height:0.95;">LA <span style="color:#ffd94d;">PETU</span><br>APP</div>
          <p style="font-family:sans-serif;font-size:11px;color:rgba(238,242,255,0.40);margin:12px 0 32px;line-height:1.5;">Tu club, tu equipo,<br>todo en un lugar.</p>
        </div>
        """, unsafe_allow_html=True)
        st.markdown("""
        <div style="background:linear-gradient(160deg,#0f1b2d 0%,#152540 100%);padding:0 24px 32px;text-align:center;">
          <div style="background:#ffd94d;color:#0f1b2d;font-family:sans-serif;font-size:13px;font-weight:700;padding:13px;border-radius:13px;margin-bottom:10px;">Iniciar sesión</div>
          <div style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.12);color:rgba(238,242,255,0.65);font-family:sans-serif;font-size:13px;font-weight:600;padding:13px;border-radius:13px;">Soy nuevo aquí</div>
          <p style="font-family:sans-serif;font-size:9px;color:rgba(238,242,255,0.18);margin:20px 0 0;">Versión 1.0 · Beta</p>
        </div>
        """, unsafe_allow_html=True)
        st.markdown(PHONE_BOTTOM, unsafe_allow_html=True)

    with col_notes:
        st.markdown('<div style="font-family:sans-serif;font-size:13px;font-weight:700;color:#ffd94d;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:16px;">Notas de diseño</div>', unsafe_allow_html=True)
        st.markdown(note_card("🎨", "Identidad visual", "Fondo azul marino con acento amarillo. Logo centrado. Transmite seriedad deportiva sin ser fría."), unsafe_allow_html=True)
        st.markdown(note_card("🔘", "Dos acciones claras", "'Iniciar sesión' es el CTA principal. 'Soy nuevo aquí' es secundario. Sin ambigüedad."), unsafe_allow_html=True)
        st.markdown(note_card("✨", "Sin ruido", "Splash minimalista. El usuario sabe exactamente qué hacer en 2 segundos."), unsafe_allow_html=True)
        st.markdown(note_card("📲", "Próximo paso", "Al tocar 'Iniciar sesión' → pantalla de Login. Al tocar 'Soy nuevo' → flujo de registro."), unsafe_allow_html=True)
        st.markdown(pending_box(["¿El registro lo hace solo el admin o puede auto-registrarse cualquier jugador?"]), unsafe_allow_html=True)

# ═════════════════════════════════════════════════════════════════
# FLUJO 2 — LOGIN
# ═════════════════════════════════════════════════════════════════
elif selected == "🔐 Login":

    st.markdown("""
    <div style="padding:0 6vw;margin-bottom:24px;">
      <div style="font-family:sans-serif;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#ffd94d;font-weight:700;margin-bottom:6px;">Pantalla 02</div>
      <div style="font-family:'Bebas Neue',Impact,sans-serif;font-size:36px;color:#eef2ff;">LOGIN — Acceso a la cuenta</div>
      <p style="font-family:sans-serif;font-size:13px;color:rgba(238,242,255,0.45);margin:6px 0 0;">El sistema detecta el rol del usuario y redirige al home correspondiente.</p>
    </div>
    """, unsafe_allow_html=True)

    col_phone, col_notes = st.columns([1, 1], gap="large")

    with col_phone:
        st.markdown(PHONE_TOP, unsafe_allow_html=True)
        st.markdown("""
        <div style="background:#0f1b2d;padding:20px 20px 0;">
          <div style="font-family:sans-serif;font-size:10px;color:rgba(238,242,255,0.30);margin-bottom:24px;">← Volver</div>
          <div style="font-family:'Bebas Neue',Impact,sans-serif;font-size:26px;color:#eef2ff;margin-bottom:4px;">Bienvenido</div>
          <p style="font-family:sans-serif;font-size:11px;color:rgba(238,242,255,0.35);margin:0 0 24px;">Ingresá con tu cuenta del club</p>
        </div>
        """, unsafe_allow_html=True)
        st.markdown("""
        <div style="background:#0f1b2d;padding:0 20px;">
          <div style="font-family:sans-serif;font-size:9px;font-weight:700;color:rgba(238,242,255,0.45);letter-spacing:0.1em;text-transform:uppercase;margin-bottom:5px;">Email</div>
          <div style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.12);border-radius:10px;padding:11px 13px;font-family:sans-serif;font-size:11px;color:rgba(238,242,255,0.30);margin-bottom:12px;">tucorreo@club.com</div>
          <div style="font-family:sans-serif;font-size:9px;font-weight:700;color:rgba(238,242,255,0.45);letter-spacing:0.1em;text-transform:uppercase;margin-bottom:5px;">Contraseña</div>
          <div style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.12);border-radius:10px;padding:11px 13px;font-family:sans-serif;font-size:11px;color:rgba(238,242,255,0.30);margin-bottom:6px;">••••••••</div>
          <div style="text-align:right;margin-bottom:22px;"><span style="font-family:sans-serif;font-size:10px;color:#ffd94d;">¿Olvidaste tu contraseña?</span></div>
        </div>
        """, unsafe_allow_html=True)
        st.markdown("""
        <div style="background:#0f1b2d;padding:0 20px 28px;">
          <div style="background:#ffd94d;color:#0f1b2d;font-family:sans-serif;font-size:13px;font-weight:700;padding:13px;border-radius:13px;text-align:center;margin-bottom:16px;">Entrar</div>
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:16px;">
            <div style="flex:1;height:1px;background:rgba(255,255,255,0.08);"></div>
            <span style="font-family:sans-serif;font-size:10px;color:rgba(238,242,255,0.22);">o</span>
            <div style="flex:1;height:1px;background:rgba(255,255,255,0.08);"></div>
          </div>
          <div style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.10);border-radius:13px;padding:11px;text-align:center;font-family:sans-serif;font-size:11px;color:rgba(238,242,255,0.55);margin-bottom:14px;">🔵 Continuar con Google</div>
          <div style="background:rgba(99,179,255,0.08);border:1px solid rgba(99,179,255,0.20);border-radius:10px;padding:10px 12px;">
            <div style="font-family:sans-serif;font-size:9px;color:#63b3ff;font-weight:700;">🔍 Detectando rol automáticamente...</div>
            <div style="font-family:sans-serif;font-size:9px;color:rgba(238,242,255,0.30);margin-top:2px;">Entrenador · Directivo · Jugador</div>
          </div>
        </div>
        """, unsafe_allow_html=True)
        st.markdown(PHONE_BOTTOM, unsafe_allow_html=True)

    with col_notes:
        st.markdown('<div style="font-family:sans-serif;font-size:13px;font-weight:700;color:#ffd94d;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:16px;">Notas de diseño</div>', unsafe_allow_html=True)
        st.markdown(note_card("🎭", "Rol automático", "El sistema detecta el rol según el email registrado. No hay selector de rol visible — reduce fricción y errores."), unsafe_allow_html=True)
        st.markdown(note_card("📧", "Email + contraseña", "Acceso básico y familiar para todos los perfiles, incluidos jugadores mayores."), unsafe_allow_html=True)
        st.markdown(note_card("🔵", "Google OAuth", "Opción secundaria para quienes prefieren no recordar contraseñas."), unsafe_allow_html=True)
        st.markdown(note_card("🔀", "Redirección por rol", "Login exitoso → Entrenador va a su dashboard. Jugador a su perfil. Directivo al panel."), unsafe_allow_html=True)
        st.markdown(pending_box([
            "¿Usamos autenticación propia o Firebase/Supabase?",
            "¿El primer login tiene un paso de 'elegir club'?",
            "¿Hay PIN rápido para acceso sin contraseña?"
        ]), unsafe_allow_html=True)

# ═════════════════════════════════════════════════════════════════
# FLUJO 3 — HOME ENTRENADOR
# ═════════════════════════════════════════════════════════════════
elif selected == "🏠 Home Entrenador":

    st.markdown("""
    <div style="padding:0 6vw;margin-bottom:24px;">
      <div style="font-family:sans-serif;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#ffd94d;font-weight:700;margin-bottom:6px;">Pantalla 03</div>
      <div style="font-family:'Bebas Neue',Impact,sans-serif;font-size:36px;color:#eef2ff;">HOME — Dashboard del Entrenador</div>
      <p style="font-family:sans-serif;font-size:13px;color:rgba(238,242,255,0.45);margin:6px 0 0;">Vista principal tras el login. Resumen del equipo y accesos directos a las acciones más frecuentes.</p>
    </div>
    """, unsafe_allow_html=True)

    col_phone, col_notes = st.columns([1, 1], gap="large")

    with col_phone:
        st.markdown(PHONE_TOP, unsafe_allow_html=True)
        # Top bar
        st.markdown("""
        <div style="background:#0f1b2d;padding:18px 16px 0;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:18px;">
            <div>
              <div style="font-family:sans-serif;font-size:9px;color:rgba(238,242,255,0.30);">Buenos días,</div>
              <div style="font-family:'Bebas Neue',Impact,sans-serif;font-size:17px;color:#eef2ff;">PROFE GARCÍA 🧠</div>
            </div>
            <div style="width:32px;height:32px;background:rgba(255,220,80,0.15);border:1px solid rgba(255,220,80,0.3);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;">🔔</div>
          </div>
        </div>
        """, unsafe_allow_html=True)
        # Próximo partido
        st.markdown("""
        <div style="background:#0f1b2d;padding:0 16px 12px;">
          <div style="background:linear-gradient(135deg,rgba(99,179,255,0.12),rgba(58,143,212,0.08));border:1px solid rgba(99,179,255,0.22);border-radius:13px;padding:13px;">
            <div style="font-family:sans-serif;font-size:8px;font-weight:700;color:#63b3ff;letter-spacing:0.12em;text-transform:uppercase;margin-bottom:5px;">Próximo partido</div>
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <div>
                <div style="font-family:'Bebas Neue',Impact,sans-serif;font-size:13px;color:#eef2ff;">Atlético vs Rivales FC</div>
                <div style="font-family:sans-serif;font-size:9px;color:rgba(238,242,255,0.40);margin-top:2px;">Sáb 28 Jun · 16:00 hs</div>
              </div>
              <div style="background:#ffd94d;color:#0f1b2d;font-family:sans-serif;font-size:8px;font-weight:700;padding:5px 9px;border-radius:7px;">Citar</div>
            </div>
          </div>
        </div>
        """, unsafe_allow_html=True)
        # Stats
        st.markdown("""
        <div style="background:#0f1b2d;padding:0 16px 12px;">
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:7px;">
            <div style="background:rgba(255,255,255,0.05);border-radius:11px;padding:11px;">
              <div style="font-family:sans-serif;font-size:17px;font-weight:700;color:#ffd94d;">18</div>
              <div style="font-family:sans-serif;font-size:8px;color:rgba(238,242,255,0.38);">Jugadores activos</div>
            </div>
            <div style="background:rgba(255,255,255,0.05);border-radius:11px;padding:11px;">
              <div style="font-family:sans-serif;font-size:17px;font-weight:700;color:#50c88c;">3 — 1</div>
              <div style="font-family:sans-serif;font-size:8px;color:rgba(238,242,255,0.38);">Último resultado</div>
            </div>
            <div style="background:rgba(255,255,255,0.05);border-radius:11px;padding:11px;">
              <div style="font-family:sans-serif;font-size:17px;font-weight:700;color:#63b3ff;">12</div>
              <div style="font-family:sans-serif;font-size:8px;color:rgba(238,242,255,0.38);">Fechas jugadas</div>
            </div>
            <div style="background:rgba(255,255,255,0.05);border-radius:11px;padding:11px;">
              <div style="font-family:sans-serif;font-size:17px;font-weight:700;color:#f87171;">2</div>
              <div style="font-family:sans-serif;font-size:8px;color:rgba(238,242,255,0.38);">Con molestias</div>
            </div>
          </div>
        </div>
        """, unsafe_allow_html=True)
        # Acciones rápidas
        st.markdown("""
        <div style="background:#0f1b2d;padding:0 16px 8px;">
          <div style="font-family:sans-serif;font-size:8px;font-weight:700;color:rgba(238,242,255,0.30);letter-spacing:0.1em;text-transform:uppercase;margin-bottom:7px;">Acciones rápidas</div>
          <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;">
            <div style="background:rgba(255,255,255,0.05);border-radius:9px;padding:9px 5px;text-align:center;">
              <div style="font-size:15px;margin-bottom:4px;">📋</div>
              <div style="font-family:sans-serif;font-size:7px;color:rgba(238,242,255,0.50);">Citar jugadores</div>
            </div>
            <div style="background:rgba(255,255,255,0.05);border-radius:9px;padding:9px 5px;text-align:center;">
              <div style="font-size:15px;margin-bottom:4px;">🗓️</div>
              <div style="font-family:sans-serif;font-size:7px;color:rgba(238,242,255,0.50);">Ver fixture</div>
            </div>
            <div style="background:rgba(255,255,255,0.05);border-radius:9px;padding:9px 5px;text-align:center;">
              <div style="font-size:15px;margin-bottom:4px;">📍</div>
              <div style="font-family:sans-serif;font-size:7px;color:rgba(238,242,255,0.50);">Cancha</div>
            </div>
          </div>
        </div>
        """, unsafe_allow_html=True)
        # Bottom nav
        st.markdown("""
        <div style="background:#0d1623;border-top:1px solid rgba(255,255,255,0.06);padding:10px 16px;display:grid;grid-template-columns:repeat(4,1fr);gap:4px;">
          <div style="text-align:center;font-size:17px;">🏠</div>
          <div style="text-align:center;font-size:17px;opacity:0.30;">👥</div>
          <div style="text-align:center;font-size:17px;opacity:0.30;">📊</div>
          <div style="text-align:center;font-size:17px;opacity:0.30;">⚙️</div>
        </div>
        """, unsafe_allow_html=True)
        st.markdown(PHONE_BOTTOM, unsafe_allow_html=True)

    with col_notes:
        st.markdown('<div style="font-family:sans-serif;font-size:13px;font-weight:700;color:#ffd94d;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:16px;">Notas de diseño</div>', unsafe_allow_html=True)
        st.markdown(note_card("👋", "Saludo personalizado", "El nombre del entrenador aparece arriba. Confirma que el login fue al rol correcto."), unsafe_allow_html=True)
        st.markdown(note_card("🎯", "Card de próximo partido", "Lo más urgente al frente. Botón directo a 'Citar' sin navegar."), unsafe_allow_html=True)
        st.markdown(note_card("📊", "4 métricas clave", "Jugadores activos, resultado, fechas jugadas y lesionados. Todo de un vistazo."), unsafe_allow_html=True)
        st.markdown(note_card("⚡", "Acciones rápidas", "Las 3 acciones de Fase 1 siempre visibles. Tap directo sin navegar."), unsafe_allow_html=True)
        st.markdown(note_card("🔻", "Bottom nav", "Navegación fija abajo: Home, Plantel, Estadísticas, Config."), unsafe_allow_html=True)
        st.markdown(pending_box([
            "Pantalla de Citación de jugadores",
            "Pantalla de Fixture / calendario",
            "Home del Jugador (vista diferente)"
        ]), unsafe_allow_html=True)

# ── FOOTER ────────────────────────────────────────────────────────────────────
st.markdown("<div style='height:48px'></div>", unsafe_allow_html=True)
st.markdown("""
<div style="padding:32px 6vw;text-align:center;border-top:1px solid rgba(255,255,255,0.06);">
  <p style="font-family:sans-serif;color:rgba(238,242,255,0.25);font-size:12px;margin:0;">
    <b style="color:#ffd94d;">La PeTu App</b> · Flujos en construcción · 2025
  </p>
</div>
""", unsafe_allow_html=True)
