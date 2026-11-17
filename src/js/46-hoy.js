/* ===== Botón «Hoy»: la sesión guiada (reglas H1-H4 y H7-H10; qué entra en cada parte: 34-hoy.js) =====
   Orden fijo: Recordamos → Palabra nueva → Jugamos → Cierre. Cada parte se monta al entrar en ella y tiene «Saltar esta parte».
   Nada de la sesión se guarda aparte: lo presentado y lo valorado ya está guardado (H8); solo se apunta el día en que se termina (H7).
   Las partes de tareas reutilizan la pantalla «juego» y la de presentación «pres». */
let HOY = null;
const PARTES_HOY = ['rec', 'nueva', 'jug', 'cierre'];

function empezarHoy() {
  const pr = MODO_DOCENTE ? null : perfilAct(), e0 = {}; /* paso de cada palabra al empezar: así el cierre sabe cuáles han subido (H5) */
  if (pr) Object.keys(pr.pal).forEach(id => { e0[id] = pr.pal[id].e; });
  HOY = { parte: '', rec: [], nuevas: [], sube: [], e0, j: 0 }; hoyAvanzar();
}
function hoyAvanzar() {
  if (!HOY) return go('casa');
  const sig = PARTES_HOY[PARTES_HOY.indexOf(HOY.parte) + 1];
  if (!sig) return hoyTerminar();
  HOY.parte = sig; hoyEntrar();
}
function hoyTerminar() { terminarSesionHoy(); HOY = null; go('casa'); toast('Sesión terminada'); }
function hoyCola(fichas, pr, titulo) {
  const cola = colaTareas(fichas, id => registroJuego(pr, id), fichasPresentadas(pr), hoy());
  if (!cola.length) return false;
  if (titulo === 'Recordamos') cola.forEach(q => { q.otro = muestraOtro(registroJuego(pr, q.id), palabraPorId(q.id)); }); /* H6 */
  JUEGO = { cola, i: 0, hoy: titulo }; go('juego'); return true;
}
function hoyEntrar() {
  const pr = MODO_DOCENTE ? null : perfilAct(), pal = pr ? pr.pal : {}, dia = hoy();
  const muestra = MODO_DOCENTE ? palabrasSemana(SEMANA_ACT) : null; /* H9: 2 + 1 + 2 de la semana elegida; no lee ni guarda nada */
  if (HOY.parte === 'rec') {
    const f = muestra ? muestra.slice(0, 2) : recordamosHoy(pal, dia, PALABRAS);
    HOY.rec = f.map(p => p.id); if (!hoyCola(f, pr, 'Recordamos')) hoyAvanzar();
  } else if (HOY.parte === 'nueva') {
    const f = muestra ? muestra.slice(2, 3) : nuevasPorPresentar(pal, dia, EST.ajustes.nuevas, PALABRAS);
    if (!f.length) return hoyAvanzar();
    HOY.nuevas = f.map(p => p.id); HOY.j = 0; abrirPalabra(HOY.nuevas[0]);
  } else if (HOY.parte === 'jug') {
    const f = muestra ? muestra.slice(3, 5) : jugamosHoy(pal, dia, { rec: HOY.rec, nuevas: HOY.nuevas }, PALABRAS);
    if (!hoyCola(f, pr, 'Jugamos')) hoyAvanzar();
  } else {
    HOY.sube = MODO_DOCENTE ? [] : subieronHoy(pal, HOY.e0, HOY.nuevas).map(p => p.id); /* H5 */
    if (!HOY.nuevas.length && !HOY.sube.length) hoyTerminar(); else go('cierre');
  }
}
/** Al final de la presentación de una palabra nueva: la siguiente de hoy, o la parte siguiente. */
function hoyNuevaSiguiente() {
  HOY.j++;
  if (HOY.j < HOY.nuevas.length) { PRES = { id: HOY.nuevas[HOY.j], i: 0 }; pintar(); window.scrollTo(0, 0); } else hoyAvanzar();
}
/** H5 · Cierre: se dicen por última vez las palabras nuevas de hoy, con su gesto, y se enseñan las que hoy han subido de paso (la planta crece).
    Las que han bajado no se enseñan a la clase. Sin valoración propia. Si no hay nada que decir, el cierre no sale. */
SC.cierre = function () {
  if (!HOY) return SC.casa();
  const pr = MODO_DOCENTE ? null : perfilAct(), l = HOY.nuevas.map(palabraPorId).filter(p => p && (MODO_DOCENTE || estadoPal(pr, p.id).e >= 2));
  const s = (HOY.sube || []).map(palabraPorId).filter(Boolean);
  return `<main class="pantalla infantil ancha pres"><p class="rotulo">${l.length ? 'Cierre · la decimos otra vez' : 'Cierre'}</p>
  <div class="cuerpo">${l.map(p => `<p class="palabra-g">${esc(p.palabra)}</p><p class="gr">${esc(p.gesto)}</p>`).join('')}
  ${s.length ? `<p class="mu gr-p" style="text-align:center">Hoy han crecido</p><div class="escala-fila">${s.map(p => `<figure>${escalaSVG(estadoPal(pr, p.id).e)}<figcaption>${esc(p.palabra)}</figcaption></figure>`).join('')}</div>` : ''}</div>
  <div class="nav"><span></span><button class="btn" onclick="hoyTerminar()">Terminar</button></div></main>`;
};
