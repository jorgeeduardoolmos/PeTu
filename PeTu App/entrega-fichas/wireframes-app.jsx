// wireframes-app.jsx — DesignCanvas with all 20 screens organized by role

function WireframesApp() {
  return (
    <DesignCanvas
      title="LA PETU APP — 24 PANTALLAS"
      subtitle="Atlanta Futsal Inferiores · Wireframes hi-fi · 390×844 · iPhone 14"
    >
      <DCSection id="onboarding" title="01 · Onboarding" subtitle="Splash + Login — todos los roles">
        <DCArtboard id="p01" label="P-01 · Splash" width={390} height={844}><P01_Splash /></DCArtboard>
        <DCArtboard id="p02" label="P-02 · Login"  width={390} height={844}><P02_Login /></DCArtboard>
      </DCSection>

      <DCSection id="coord" title="02 · Coordinador" subtitle="Mati Maranzano — carga contenido + seguimiento semanal">
        <DCArtboard id="p03" label="P-03 · Home Coordinador"        width={390} height={844}><P03_HomeCoord /></DCArtboard>
        <DCArtboard id="p04" label="P-04 · Carga modelo de juego"   width={390} height={844}><P04_ModeloJuego /></DCArtboard>
        <DCArtboard id="p05" label="P-05 · Dashboard planificaciones" width={390} height={844}><P05_DashPlanif /></DCArtboard>
      </DCSection>

      <DCSection id="entrenador" title="03 · Entrenador" subtitle="Tito, Panchi, Facu, Pablito — usuario diario, máxima fricción si falla">
        <DCArtboard id="p06" label="P-06 · Home Entrenador"      width={390} height={844}><P06_HomeEntrenador /></DCArtboard>
        <DCArtboard id="p07" label="P-07 · Convocatoria"         width={390} height={844}><P07_Convocatoria /></DCArtboard>
        <DCArtboard id="p08" label="P-08 · Estado confirmaciones" width={390} height={844}><P08_Confirmaciones /></DCArtboard>
        <DCArtboard id="p09" label="P-09 · Planificación semanal" width={390} height={844}><P09_PlanSemanal /></DCArtboard>
        <DCArtboard id="p10" label="P-10 · Carga de resultado"    width={390} height={844}><P10_Resultado /></DCArtboard>
        <DCArtboard id="p11" label="P-11 · Registro asistencia"   width={390} height={844}><P11_Asistencia /></DCArtboard>
      </DCSection>

      <DCSection id="jugador" title="04 · Jugador" subtitle="Lautaro 'Tuku' Méndez — vista del pibe, lenguaje cercano y positivo">
        <DCArtboard id="p12" label="P-12 · Home Jugador"          width={390} height={844}><P12_HomeJugador /></DCArtboard>
        <DCArtboard id="p13" label="P-13 · Confirmación"          width={390} height={844}><P13_ConfirmJugador /></DCArtboard>
        <DCArtboard id="p14" label="P-14 · Mi fixture"            width={390} height={844}><P14_FixtureJugador /></DCArtboard>
        <DCArtboard id="p15" label="P-15 · Modelo de juego"       width={390} height={844}><P15_ModeloJugador /></DCArtboard>
        <DCArtboard id="p16" label="P-16 · Mis estadísticas"      width={390} height={844}><P16_MisStats /></DCArtboard>
        <DCArtboard id="p17" label="P-17 · Autoevaluación (F3)"   width={390} height={844}><P17_Autoeval /></DCArtboard>
      </DCSection>

      <DCSection id="directivo" title="05 · Directivos" subtitle="Andrés Lobo — visión institucional">
        <DCArtboard id="p18" label="P-18 · Dashboard Directivo"   width={390} height={844}><P18_Directivo /></DCArtboard>
        <DCArtboard id="p19" label="P-19 · Gestión de fichajes"   width={390} height={844}><P19_Fichajes /></DCArtboard>
      </DCSection>

      <DCSection id="familia" title="06 · Familia" subtitle="Padres de jugadores — solo lectura, info pública">
        <DCArtboard id="p20" label="P-20 · Home Familia"          width={390} height={844}><P20_Familia /></DCArtboard>
      </DCSection>

      <DCSection id="ficha" title="07 · Ficha del Jugador" subtitle="Seguimiento individual por temporada · permisos por rol · valoración interna confidencial">
        <DCArtboard id="p21" label="P-21 · Ficha — Entrenador (edición)" width={390} height={844}><P21_FichaEntrenador /></DCArtboard>
        <DCArtboard id="p22" label="P-22 · Lista de jugadores con fichas" width={390} height={844}><P22_ListaFichas /></DCArtboard>
        <DCArtboard id="p23" label="P-23 · Ficha — Coordinador (+ historial)" width={390} height={844}><P23_FichaCoordinador /></DCArtboard>
        <DCArtboard id="p24" label="P-24 · Resumen planteles — Directivo" width={390} height={844}><P24_ResumenDirectivo /></DCArtboard>
      </DCSection>
    </DesignCanvas>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<WireframesApp />);
