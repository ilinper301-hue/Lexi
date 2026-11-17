/* ===== Botón «Hoy»: la sesión guiada (reglas H1-H4 y H7-H10; qué entra en cada parte: 34-hoy.js) =====
   Orden fijo: Recordamos → Palabra nueva → Jugamos → Cierre. Cada parte se monta al entrar en ella y tiene «Saltar esta parte».
   Nada de la sesión se guarda aparte: lo presentado y lo valorado ya está guardado (H8); solo se apunta el día en que se termina (H7).
   Las partes de tareas reutilizan la pantalla «juego» y la de presentación «pres». */
let HOY = null;
const PARTES_HOY = ['rec', 'nueva', 'jug', 'cierre'];

function empezarHoy() { HOY = { parte: '', rec: [], nuevas: [] , j: 0 }; hoyAvanzar(); }
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
  } else if (!HOY.nuevas.length) hoyTerminar();
  else go('cierre');
}
/** Al final de la presentación de una palabra nueva: la siguiente de hoy, o la parte siguiente. */
function hoyNuevaSiguiente() {
  HOY.j++;
  if (HOY.j < HOY.nuevas.length) { PRES = { id: HOY.nuevas[HOY.j], i: 0 }; pintar(); window.scrollTo(0, 0); } else hoyAvanzar();
}
/** H5 (primera versión) · Cierre: se dicen por última vez las palabras nuevas de hoy, con su gesto. */
SC.cierre = function () {
  if (!HOY) return SC.casa();
  const pr = MODO_DOCENTE ? null : perfilAct(), l = HOY.nuevas.map(palabraPorId).filter(p => p && (MODO_DOCENTE || estadoPal(pr, p.id).e >= 2));
  return `<main class="pantalla infantil ancha pres"><p class="rotulo">Cierre · la decimos otra vez</p>
  <div class="cuerpo">${l.map(p => `<p class="palabra-g">${esc(p.palabra)}</p><p class="gr">${esc(p.gesto)}</p>`).join('')}</div>
  <div class="nav"><span></span><button class="btn" onclick="hoyTerminar()">Terminar</button></div></main>`;
};
