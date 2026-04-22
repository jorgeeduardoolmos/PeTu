BG = "#1a2744"

def load_css():
    return f"""
<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Nunito:wght@300;400;600;700&display=swap');

html, body, .stApp, .main,
[data-testid="stAppViewContainer"],
[data-testid="stMain"],
[data-testid="stMainBlockContainer"],
[data-testid="stVerticalBlock"] {{
    background: {BG} !important;
}}
[data-testid="stHeader"]     {{ display: none !important; }}
[data-testid="stDecoration"] {{ display: none !important; }}

.block-container {{ padding: 0 !important; max-width: 100% !important; }}
section[data-testid="stMain"] > div {{ padding: 0 !important; }}

/* page_link como botón amarillo */
[data-testid="stPageLink"] a {{
    display: inline-block !important;
    background: #ffd94d !important;
    color: #0f1b2d !important;
    font-family: sans-serif !important;
    font-size: 15px !important;
    font-weight: 700 !important;
    padding: 14px 44px !important;
    border-radius: 14px !important;
    text-decoration: none !important;
    border: none !important;
}}
[data-testid="stPageLink"] a:hover {{
    background: #ffe066 !important;
    color: #0f1b2d !important;
}}
[data-testid="stPageLink"] {{
    display: flex !important;
    justify-content: center !important;
}}
</style>
"""

def feature_widget(icon, text, accent):
    return f"""<div style="display:flex;align-items:center;gap:12px;background:rgba(255,255,255,0.05);border-radius:12px;padding:12px 14px;margin-bottom:8px;border-left:3px solid {accent};"><span style="font-size:20px;flex-shrink:0;">{icon}</span><span style="font-family:sans-serif;font-size:13px;color:rgba(238,242,255,0.82);line-height:1.35;">{text}</span></div>"""

def divider():
    return '<div style="height:1px;background:rgba(255,255,255,0.08);margin:0 6vw;"></div>'

def section_header(label, title, subtitle=None, pad_top="60px"):
    sub = f'<p style="font-family:sans-serif;font-size:15px;color:rgba(238,242,255,0.45);font-weight:300;max-width:560px;margin:0 0 48px;line-height:1.65;">{subtitle}</p>' if subtitle else ""
    return f"""
<div style="padding:{pad_top} 6vw 20px;">
  <div style="font-family:sans-serif;font-size:11px;letter-spacing:0.20em;text-transform:uppercase;color:#ffd94d;font-weight:700;margin-bottom:10px;">{label}</div>
  <div style="font-family:'Bebas Neue',Impact,sans-serif;font-size:clamp(38px,5.5vw,68px);line-height:1;color:#eef2ff;margin:0 0 12px;">{title}</div>
  {sub}
</div>
"""
