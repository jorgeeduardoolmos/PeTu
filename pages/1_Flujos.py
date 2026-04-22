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
<div style="background:linear-gradient(160deg,#0f1b2d 0%,#152540 100%);padding:48px 6vw 36px;border-bottom:1px solid rgba(255,220,80,0.15);">
  <a href="/" style="font-family:sans-serif;font-size:12px;color:rgba(238,242,255,0.4);text-decoration:none;letter-spacing:0.1em;">← Volver al inicio</a>
  <div style="margin-top:16px;font-family:'Bebas Neue',Impact,sans-serif;font-size:clamp(36px,6vw,64px);color:#eef2ff;line-height:1;">
    FLUJOS DE <span style="color:#ffd94d;">LA APP</span>
  </div>
  <p style="font-family:sans-serif;font-size:14px;color:rgba(238,242,255,0.45);margin:10px 0 0;font-weight:300;">
    Mockups de pantallas · Fase 1 — Onboarding & Acceso
  </p>
</div>
""", unsafe_allow_html=True)

# ── NAV DE FLUJOS ─────────────────────────────────────────────────────────────
flujos = ["📱 App Landing", "🔐 Login", "🏠 Home Entrenador"]
selected = st.radio("", flujos, horizontal=True, label_visibility="collapsed")

st.markdown("<div style='height:8px'></div>", unsafe_allow_html=True)
st.markdown("""<div style="height:1px;background:rgba(255,255,255,0.06);margin:0 6vw 48px;"></div>""", unsafe_allow_html=True)


# ════════════════════════════════════════════════════════════════
# FLUJO 1 — APP LANDING (Splash screen)
# ════════════════════════════════════════════════════════════════
if selected == "📱 App Landing":

    st.markdown("""
    <div style="padding:0 6vw;margin-bottom:16px;">
      <div style="font-family:sans-serif;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#ffd94d;font-weight:700;margin-bottom:6px;">Pantalla 01</div>
      <div style="font-family:'Bebas Neue',Impact,sans-serif;font-size:36px;color:#eef2ff;">SPLASH SCREEN — Apertura de la app</div>
      <p style="font-family:sans-serif;font-size:13px;color:rgba(238,242,255,0.45);margin:6px 0 32px;">Lo primero que ve el usuario al abrir la app por primera vez o cuando no hay sesión activa.</p>
    </div>
    """, unsafe_allow_html=True)

    col_phone, col_notes = st.columns([1, 1], gap="large")

    with col_phone:
        st.markdown("""
        <div style="display:flex;justify-content:center;padding:0 6vw;">
          <!-- Phone frame -->
          <div style="
            width:280px;
            background:#111827;
            border-radius:40px;
            border:6px solid #1e293b;
            box-shadow:0 40px 80px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.05);
            overflow:hidden;
            position:relative;
          ">
            <!-- Notch -->
            <div style="background:#111827;height:28px;display:flex;justify-content:center;align-items:center;">
              <div style="width:80px;height:10px;background:#0a0f1a;border-radius:10px;"></div>
            </div>

            <!-- Screen content -->
            <div style="
              background:linear-gradient(160deg,#0f1b2d 0%,#152540 50%,#0f1b2d 100%);
              min-height:520px;
              display:flex;
              flex-direction:column;
              align-items:center;
              justify-content:center;
              padding:32px 24px;
              text-align:center;
              position:relative;
            ">
              <!-- Glow -->
              <div style="position:absolute;top:60px;left:50%;transform:translateX(-50%);width:200px;height:200px;background:radial-gradient(circle,rgba(255,220,80,0.12) 0%,transparent 70%);pointer-events:none;"></div>

              <!-- Logo -->
              <div style="font-size:52px;margin-bottom:8px;">⚽</div>
              <div style="font-family:'Bebas Neue',Impact,sans-serif;font-size:42px;color:#eef2ff;line-height:0.9;margin-bottom:4px;">
                LA <span style="color:#ffd94d;">PETU</span>
              </div>
              <div style="font-family:'Bebas Neue',Impact,sans-serif;font-size:42px;color:#eef2ff;line-height:0.9;margin-bottom:20px;">APP</div>

              <p style="font-family:sans-serif;font-size:12px;color:rgba(238,242,255,0.45);line-height:1.5;margin:0 0 48px;">
                Tu club, tu equipo,<br>todo en un lugar.
              </p>

              <!-- CTA -->
              <div style="
                width:100%;
                background:#ffd94d;
                color:#0f1b2d;
                font-family:sans-serif;
                font-size:14px;
                font-weight:700;
                padding:14px;
                border-radius:14px;
                text-align:center;
                margin-bottom:12px;
              ">Iniciar sesión</div>

              <div style="
                width:100%;
                background:rgba(255,255,255,0.06);
                border:1px solid rgba(255,255,255,0.12);
                color:rgba(238,242,255,0.7);
                font-family:sans-serif;
                font-size:14px;
                font-weight:600;
                padding:14px;
                border-radius:14px;
                text-align:center;
              ">Soy nuevo aquí</div>

              <p style="font-family:sans-serif;font-size:10px;color:rgba(238,242,255,0.2);margin:24px 0 0;">
                Versión 1.0 · Beta
              </p>
            </div>

            <!-- Home bar -->
            <div style="background:#111827;height:24px;display:flex;justify-content:center;align-items:center;">
              <div style="width:80px;height:4px;background:#2d3748;border-radius:4px;"></div>
            </div>
          </div>
        </div>
        """, unsafe_allow_html=True)

    with col_notes:
        st.markdown("""
        <div style="padding:8px 6vw 0 0;">
          <div style="font-family:sans-serif;font-size:13px;font-weight:700;color:#ffd94d;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:20px;">Notas de diseño</div>
        </div>
        """, unsafe_allow_html=True)

        notas = [
            ("🎨", "Identidad visual", "Fondo azul marino oscuro con acento amarillo. Logo centrado con ícono de pelota. Transmite seriedad deportiva sin ser fría."),
            ("🔘", "Dos acciones claras", "'Iniciar sesión' es el CTA principal (amarillo sólido). 'Soy nuevo aquí' es secundario (ghost button). Sin ambigüedad."),
            ("✨", "Sin ruido", "Splash minimalista. No hay menúes, no hay texto extra. El usuario sabe exactamente qué hacer en 2 segundos."),
            ("📲", "Próximo paso", "Al tocar 'Iniciar sesión' → va a pantalla de Login. Al tocar 'Soy nuevo' → flujo de registro (Fase 2)."),
        ]
        for icon, title, desc in notas:
            st.markdown(f"""
            <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:14px;padding:18px 20px;margin-bottom:12px;">
              <div style="display:flex;gap:12px;align-items:flex-start;">
                <span style="font-size:20px;flex-shrink:0;">{icon}</span>
                <div>
                  <div style="font-family:sans-serif;font-size:13px;font-weight:700;color:#eef2ff;margin-bottom:4px;">{title}</div>
                  <div style="font-family:sans-serif;font-size:12px;color:rgba(238,242,255,0.45);line-height:1.5;">{desc}</div>
                </div>
              </div>
            </div>
            """, unsafe_allow_html=True)

        st.markdown("""
        <div style="background:rgba(255,220,80,0.08);border:1px solid rgba(255,220,80,0.25);border-radius:14px;padding:18px 20px;margin-top:4px;">
          <div style="font-family:sans-serif;font-size:12px;font-weight:700;color:#ffd94d;margin-bottom:6px;">⚡ Decisión pendiente</div>
          <div style="font-family:sans-serif;font-size:12px;color:rgba(238,242,255,0.55);line-height:1.5;">¿El registro lo hace solo el club (admin) o puede auto-registrarse cualquier jugador? Esto cambia el flujo de onboarding.</div>
        </div>
        """, unsafe_allow_html=True)


# ════════════════════════════════════════════════════════════════
# FLUJO 2 — LOGIN
# ════════════════════════════════════════════════════════════════
elif selected == "🔐 Login":

    st.markdown("""
    <div style="padding:0 6vw;margin-bottom:16px;">
      <div style="font-family:sans-serif;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#ffd94d;font-weight:700;margin-bottom:6px;">Pantalla 02</div>
      <div style="font-family:'Bebas Neue',Impact,sans-serif;font-size:36px;color:#eef2ff;">LOGIN — Acceso a la cuenta</div>
      <p style="font-family:sans-serif;font-size:13px;color:rgba(238,242,255,0.45);margin:6px 0 32px;">El sistema detecta el rol del usuario (entrenador, directivo o jugador) y redirige al home correspondiente.</p>
    </div>
    """, unsafe_allow_html=True)

    col_phone, col_notes = st.columns([1, 1], gap="large")

    with col_phone:
        st.markdown("""
        <div style="display:flex;justify-content:center;padding:0 6vw;">
          <div style="
            width:280px;
            background:#111827;
            border-radius:40px;
            border:6px solid #1e293b;
            box-shadow:0 40px 80px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.05);
            overflow:hidden;
          ">
            <!-- Notch -->
            <div style="background:#111827;height:28px;display:flex;justify-content:center;align-items:center;">
              <div style="width:80px;height:10px;background:#0a0f1a;border-radius:10px;"></div>
            </div>

            <!-- Screen -->
            <div style="background:#0f1b2d;min-height:520px;padding:28px 20px;position:relative;">

              <!-- Back -->
              <div style="font-family:sans-serif;font-size:11px;color:rgba(238,242,255,0.35);margin-bottom:28px;">← Volver</div>

              <!-- Header -->
              <div style="font-family:'Bebas Neue',Impact,sans-serif;font-size:28px;color:#eef2ff;margin-bottom:4px;">Bienvenido</div>
              <p style="font-family:sans-serif;font-size:11px;color:rgba(238,242,255,0.40);margin:0 0 28px;">Ingresá con tu cuenta del club</p>

              <!-- Email field -->
              <div style="margin-bottom:14px;">
                <div style="font-family:sans-serif;font-size:10px;font-weight:700;color:rgba(238,242,255,0.5);letter-spacing:0.1em;text-transform:uppercase;margin-bottom:6px;">Email</div>
                <div style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.12);border-radius:10px;padding:12px 14px;font-family:sans-serif;font-size:12px;color:rgba(238,242,255,0.35);">tucorreo@club.com</div>
              </div>

              <!-- Password field -->
              <div style="margin-bottom:8px;">
                <div style="font-family:sans-serif;font-size:10px;font-weight:700;color:rgba(238,242,255,0.5);letter-spacing:0.1em;text-transform:uppercase;margin-bottom:6px;">Contraseña</div>
                <div style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.12);border-radius:10px;padding:12px 14px;font-family:sans-serif;font-size:12px;color:rgba(238,242,255,0.35);">••••••••</div>
              </div>

              <!-- Forgot -->
              <div style="text-align:right;margin-bottom:28px;">
                <span style="font-family:sans-serif;font-size:10px;color:#ffd94d;">¿Olvidaste tu contraseña?</span>
              </div>

              <!-- Login button -->
              <div style="background:#ffd94d;color:#0f1b2d;font-family:sans-serif;font-size:14px;font-weight:700;padding:14px;border-radius:14px;text-align:center;margin-bottom:20px;">
                Entrar
              </div>

              <!-- Divider -->
              <div style="display:flex;align-items:center;gap:10px;margin-bottom:20px;">
                <div style="flex:1;height:1px;background:rgba(255,255,255,0.08);"></div>
                <span style="font-family:sans-serif;font-size:10px;color:rgba(238,242,255,0.25);">o</span>
                <div style="flex:1;height:1px;background:rgba(255,255,255,0.08);"></div>
              </div>

              <!-- Google -->
              <div style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.10);border-radius:14px;padding:12px;text-align:center;font-family:sans-serif;font-size:12px;color:rgba(238,242,255,0.6);">
                🔵 Continuar con Google
              </div>

              <!-- Role indicator -->
              <div style="margin-top:24px;background:rgba(99,179,255,0.08);border:1px solid rgba(99,179,255,0.20);border-radius:10px;padding:10px 14px;">
                <div style="font-family:sans-serif;font-size:10px;color:#63b3ff;font-weight:700;">🔍 Detectando rol automáticamente...</div>
                <div style="font-family:sans-serif;font-size:10px;color:rgba(238,242,255,0.35);margin-top:2px;">Entrenador · Directivo · Jugador</div>
              </div>

            </div>

            <!-- Home bar -->
            <div style="background:#111827;height:24px;display:flex;justify-content:center;align-items:center;">
              <div style="width:80px;height:4px;background:#2d3748;border-radius:4px;"></div>
            </div>
          </div>
        </div>
        """, unsafe_allow_html=True)

    with col_notes:
        st.markdown("""
        <div style="padding:8px 6vw 0 0;">
          <div style="font-family:sans-serif;font-size:13px;font-weight:700;color:#ffd94d;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:20px;">Notas de diseño</div>
        </div>
        """, unsafe_allow_html=True)

        notas = [
            ("🎭", "Rol automático", "El sistema detecta el rol según el email registrado. No hay selector de rol visible — reduce fricción y errores."),
            ("📧", "Email + contraseña", "Acceso básico y familiar para todos los perfiles, incluidos jugadores mayores que no son nativos digitales."),
            ("🔵", "Google OAuth", "Opción secundaria para quienes prefieren no recordar contraseñas. Ideal para jugadores jóvenes."),
            ("🔀", "Redirección por rol", "Login exitoso → Entrenador va a su dashboard. Jugador va a su perfil. Directivo va a panel de gestión."),
        ]
        for icon, title, desc in notas:
            st.markdown(f"""
            <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:14px;padding:18px 20px;margin-bottom:12px;">
              <div style="display:flex;gap:12px;align-items:flex-start;">
                <span style="font-size:20px;flex-shrink:0;">{icon}</span>
                <div>
                  <div style="font-family:sans-serif;font-size:13px;font-weight:700;color:#eef2ff;margin-bottom:4px;">{title}</div>
                  <div style="font-family:sans-serif;font-size:12px;color:rgba(238,242,255,0.45);line-height:1.5;">{desc}</div>
                </div>
              </div>
            </div>
            """, unsafe_allow_html=True)

        st.markdown("""
        <div style="background:rgba(255,220,80,0.08);border:1px solid rgba(255,220,80,0.25);border-radius:14px;padding:18px 20px;margin-top:4px;">
          <div style="font-family:sans-serif;font-size:12px;font-weight:700;color:#ffd94d;margin-bottom:8px;">⚡ Decisiones pendientes</div>
          <div style="font-family:sans-serif;font-size:12px;color:rgba(238,242,255,0.55);line-height:1.6;">
            · ¿Usamos autenticación propia o Firebase/Supabase?<br>
            · ¿El primer login tiene un paso de "elegir club"?<br>
            · ¿Hay PIN rápido para acceso sin contraseña?
          </div>
        </div>
        """, unsafe_allow_html=True)


# ════════════════════════════════════════════════════════════════
# FLUJO 3 — HOME ENTRENADOR
# ════════════════════════════════════════════════════════════════
elif selected == "🏠 Home Entrenador":

    st.markdown("""
    <div style="padding:0 6vw;margin-bottom:16px;">
      <div style="font-family:sans-serif;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#ffd94d;font-weight:700;margin-bottom:6px;">Pantalla 03</div>
      <div style="font-family:'Bebas Neue',Impact,sans-serif;font-size:36px;color:#eef2ff;">HOME — Dashboard del Entrenador</div>
      <p style="font-family:sans-serif;font-size:13px;color:rgba(238,242,255,0.45);margin:6px 0 32px;">Vista principal tras el login. Resumen rápido del estado del equipo y accesos directos a las acciones más frecuentes.</p>
    </div>
    """, unsafe_allow_html=True)

    col_phone, col_notes = st.columns([1, 1], gap="large")

    with col_phone:
        st.markdown("""
        <div style="display:flex;justify-content:center;padding:0 6vw;">
          <div style="
            width:280px;
            background:#111827;
            border-radius:40px;
            border:6px solid #1e293b;
            box-shadow:0 40px 80px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.05);
            overflow:hidden;
          ">
            <div style="background:#111827;height:28px;display:flex;justify-content:center;align-items:center;">
              <div style="width:80px;height:10px;background:#0a0f1a;border-radius:10px;"></div>
            </div>

            <div style="background:#0f1b2d;min-height:560px;padding:20px 16px 16px;overflow:hidden;">

              <!-- Top bar -->
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">
                <div>
                  <div style="font-family:sans-serif;font-size:10px;color:rgba(238,242,255,0.35);">Buenos días,</div>
                  <div style="font-family:'Bebas Neue',Impact,sans-serif;font-size:18px;color:#eef2ff;">PROFE GARCÍA 🧠</div>
                </div>
                <div style="width:34px;height:34px;background:rgba(255,220,80,0.15);border:1px solid rgba(255,220,80,0.3);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;">🔔</div>
              </div>

              <!-- Próximo partido card -->
              <div style="background:linear-gradient(135deg,#1a3a5c,#142d4a);border:1px solid rgba(99,179,255,0.25);border-radius:14px;padding:14px;margin-bottom:12px;">
                <div style="font-family:sans-serif;font-size:9px;font-weight:700;color:#63b3ff;letter-spacing:0.12em;text-transform:uppercase;margin-bottom:6px;">Próximo partido</div>
                <div style="display:flex;justify-content:space-between;align-items:center;">
                  <div>
                    <div style="font-family:'Bebas Neue',Impact,sans-serif;font-size:15px;color:#eef2ff;">Club Atlético vs Rivales FC</div>
                    <div style="font-family:sans-serif;font-size:10px;color:rgba(238,242,255,0.45);margin-top:2px;">Sáb 28 Jun · 16:00 hs</div>
                  </div>
                  <div style="background:#ffd94d;color:#0f1b2d;font-family:sans-serif;font-size:9px;font-weight:700;padding:5px 10px;border-radius:8px;">Citar</div>
                </div>
              </div>

              <!-- Stats rápidas -->
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px;">
                <div style="background:rgba(255,255,255,0.04);border-radius:12px;padding:12px;">
                  <div style="font-family:sans-serif;font-size:18px;font-weight:700;color:#ffd94d;">18</div>
                  <div style="font-family:sans-serif;font-size:9px;color:rgba(238,242,255,0.40);">Jugadores activos</div>
                </div>
                <div style="background:rgba(255,255,255,0.04);border-radius:12px;padding:12px;">
                  <div style="font-family:sans-serif;font-size:18px;font-weight:700;color:#50c88c;">3 — 1</div>
                  <div style="font-family:sans-serif;font-size:9px;color:rgba(238,242,255,0.40);">Último resultado</div>
                </div>
                <div style="background:rgba(255,255,255,0.04);border-radius:12px;padding:12px;">
                  <div style="font-family:sans-serif;font-size:18px;font-weight:700;color:#63b3ff;">12</div>
                  <div style="font-family:sans-serif;font-size:9px;color:rgba(238,242,255,0.40);">Fechas jugadas</div>
                </div>
                <div style="background:rgba(255,255,255,0.04);border-radius:12px;padding:12px;">
                  <div style="font-family:sans-serif;font-size:18px;font-weight:700;color:#f87171;">2</div>
                  <div style="font-family:sans-serif;font-size:9px;color:rgba(238,242,255,0.40);">Con molestias</div>
                </div>
              </div>

              <!-- Acciones rápidas -->
              <div style="font-family:sans-serif;font-size:9px;font-weight:700;color:rgba(238,242,255,0.35);letter-spacing:0.1em;text-transform:uppercase;margin-bottom:8px;">Acciones rápidas</div>
              <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;">
                <div style="background:rgba(255,255,255,0.04);border-radius:10px;padding:10px 6px;text-align:center;">
                  <div style="font-size:16px;margin-bottom:4px;">📋</div>
                  <div style="font-family:sans-serif;font-size:8px;color:rgba(238,242,255,0.55);">Citar jugadores</div>
                </div>
                <div style="background:rgba(255,255,255,0.04);border-radius:10px;padding:10px 6px;text-align:center;">
                  <div style="font-size:16px;margin-bottom:4px;">🗓️</div>
                  <div style="font-family:sans-serif;font-size:8px;color:rgba(238,242,255,0.55);">Ver fixture</div>
                </div>
                <div style="background:rgba(255,255,255,0.04);border-radius:10px;padding:10px 6px;text-align:center;">
                  <div style="font-size:16px;margin-bottom:4px;">📍</div>
                  <div style="font-family:sans-serif;font-size:8px;color:rgba(238,242,255,0.55);">Cancha</div>
                </div>
              </div>

            </div>

            <!-- Bottom nav -->
            <div style="background:#0d1623;border-top:1px solid rgba(255,255,255,0.06);padding:10px 16px;display:grid;grid-template-columns:repeat(4,1fr);gap:4px;">
              <div style="text-align:center;font-size:18px;">🏠</div>
              <div style="text-align:center;font-size:18px;opacity:0.35;">👥</div>
              <div style="text-align:center;font-size:18px;opacity:0.35;">📊</div>
              <div style="text-align:center;font-size:18px;opacity:0.35;">⚙️</div>
            </div>

            <div style="background:#111827;height:20px;display:flex;justify-content:center;align-items:center;">
              <div style="width:80px;height:4px;background:#2d3748;border-radius:4px;"></div>
            </div>
          </div>
        </div>
        """, unsafe_allow_html=True)

    with col_notes:
        st.markdown("""
        <div style="padding:8px 6vw 0 0;">
          <div style="font-family:sans-serif;font-size:13px;font-weight:700;color:#ffd94d;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:20px;">Notas de diseño</div>
        </div>
        """, unsafe_allow_html=True)

        notas = [
            ("👋", "Saludo personalizado", "El nombre del entrenador aparece arriba. Genera pertenencia y confirma que el login fue al rol correcto."),
            ("🎯", "Card de próximo partido", "Lo más urgente al frente. Un botón directo a 'Citar' para no tener que navegar."),
            ("📊", "4 métricas clave", "Jugadores activos, último resultado, fechas jugadas y lesionados. Todo de un vistazo, sin entrar a ningún sub-menú."),
            ("⚡", "Acciones rápidas", "Las 3 acciones más frecuentes de la Fase 1 siempre visibles. Tap directo sin navegar."),
            ("🔻", "Bottom nav", "Navegación fija abajo: Home, Plantel, Estadísticas, Config. Patrón familiar para apps móviles."),
        ]
        for icon, title, desc in notas:
            st.markdown(f"""
            <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:14px;padding:18px 20px;margin-bottom:12px;">
              <div style="display:flex;gap:12px;align-items:flex-start;">
                <span style="font-size:20px;flex-shrink:0;">{icon}</span>
                <div>
                  <div style="font-family:sans-serif;font-size:13px;font-weight:700;color:#eef2ff;margin-bottom:4px;">{title}</div>
                  <div style="font-family:sans-serif;font-size:12px;color:rgba(238,242,255,0.45);line-height:1.5;">{desc}</div>
                </div>
              </div>
            </div>
            """, unsafe_allow_html=True)

        st.markdown("""
        <div style="background:rgba(255,220,80,0.08);border:1px solid rgba(255,220,80,0.25);border-radius:14px;padding:18px 20px;margin-top:4px;">
          <div style="font-family:sans-serif;font-size:12px;font-weight:700;color:#ffd94d;margin-bottom:8px;">⚡ Próximo flujo a diseñar</div>
          <div style="font-family:sans-serif;font-size:12px;color:rgba(238,242,255,0.55);line-height:1.6;">
            · Pantalla de Citación de jugadores<br>
            · Pantalla de Fixture / calendario<br>
            · Home del Jugador (vista diferente al del entrenador)
          </div>
        </div>
        """, unsafe_allow_html=True)

# ── FOOTER ────────────────────────────────────────────────────────────────────
st.markdown("<div style='height:48px'></div>", unsafe_allow_html=True)
st.markdown("""
<div style="padding:32px 6vw;text-align:center;border-top:1px solid rgba(255,255,255,0.06);">
  <p style="font-family:sans-serif;color:rgba(238,242,255,0.25);font-size:12px;margin:0;">
    <b style="color:#ffd94d;">La PeTu App</b> · Flujos en construcción · 2025
  </p>
</div>
""", unsafe_allow_html=True)
