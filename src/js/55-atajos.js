/* ===== Pantalla completa y atajos de teclado o mando (reglas AT1-AT4 de docs/aula.md) =====
   Un solo listener de «keydown». La decisión «tecla + fase de la pantalla → acción» es una función pura (atajoAccion);
   la fase se saca de la pantalla activa (PANT) y de su estado (PRES, JUEGO, AZAR). Las acciones llaman a las mismas funciones que los botones. */
const TEXTO_ATAJOS = 'Atajos con teclado o mando: flecha derecha, espacio, Intro o AvPág para seguir o ver la respuesta; flecha izquierda o RePág para volver; 1, 2 y 3 para valorar (casi todos, la mitad, pocos) y 0 para seguir sin valorar.';
/** Pantallas donde sale el botón de pantalla completa (AT1). Cuando llegue Explorar, basta con añadir aquí su pantalla. */
const PANT_COMPLETA = ['semana', 'pres', 'juego', 'cierre', 'muro', 'consulta', 'azar'];

/* --- Pantalla completa (AT1): donde el navegador no la permite (iPhone) el botón no sale --- */
const completaPosible = () => typeof document !== 'undefined' && !!(document.fullscreenEnabled || document.webkitFullscreenEnabled)
  && !!(document.documentElement.requestFullscreen || document.documentElement.webkitRequestFullscreen);
const enCompleta = () => !!(document.fullscreenElement || document.webkitFullscreenElement);
function alternarCompleta() {
  try {
    if (enCompleta()) { (document.exitFullscreen || document.webkitExitFullscreen).call(document); return; }
    const e = document.documentElement; (e.requestFullscreen || e.webkitRequestFullscreen).call(e);
  } catch (err) { /* si el navegador lo rechaza, no pasa nada */ }
}
/** Botón para la barra de arriba (vacío donde no se puede o en pantallas sin él). */
function botonCompleta() {
  if (!PANT_COMPLETA.includes(PANT) || !completaPosible()) return '';
  const d = enCompleta();
  return `<button class="tema" onclick="alternarCompleta()" aria-label="${d ? 'Salir de pantalla completa' : 'Pantalla completa'}">${ico(d ? 'contract' : 'expand', 22)}</button>`;
}

/* --- Atajos (AT2-AT4) --- */
const VAL_TECLA = { 1: 'todos', 2: 'mitad', 3: 'pocos', 0: '' };
/** Fase de la pantalla activa para los atajos: '' si no hay atajos. */
function faseAtajos() {
  if (PANT === 'pres') {
    const i = PRES.i, ult = i === PRES_PASOS - 1;
    return ult ? (HOY ? 'pres-ult-hoy' : 'pres-ult') : i === 0 ? 'pres-ini' : 'pres';
  }
  if (PANT === 'juego' && JUEGO && JUEGO.cola.length) {
    if (JUEGO.otro) return 'otro';
    if (JUEGO.i >= JUEGO.cola.length) return JUEGO.hoy ? 'hecho-hoy' : '';
    const q = JUEGO.cola[JUEGO.i];
    return !CON_RESPUESTA[q.t] || q.rev ? 'valorar' : 'revelar';
  }
  if (PANT === 'cierre' && HOY) return 'cierre';
  if (PANT === 'azar') return AZAR.rev ? 'azar-otra' : 'azar-ver';
  return '';
}
/** Pura: qué se hace con una tecla (`e.key`) en una fase. Devuelve el nombre de la acción o '' si no hace nada.
    AT3: en 'valorar', «siguiente» no hace nada; solo los números. */
function atajoAccion(tecla, fase) {
  if (!fase) return '';
  if (tecla in VAL_TECLA && tecla.length === 1) return fase === 'valorar' ? 'valorar:' + VAL_TECLA[tecla] : '';
  if (['ArrowRight', ' ', 'Enter', 'PageDown'].includes(tecla)) {
    return { 'pres-ini': 'presMas', pres: 'presMas', 'pres-ult-hoy': 'hoyNuevaSiguiente', 'pres-ult': 'atras', revelar: 'juegoRevelar', otro: 'juegoSeguirOtro',
      'hecho-hoy': 'hoyAvanzar', cierre: 'hoyTerminar', 'azar-ver': 'azarVer', 'azar-otra': 'azarOtra' }[fase] || '';
  }
  if (['ArrowLeft', 'PageUp'].includes(tecla)) return fase === 'pres' || fase.startsWith('pres-ult') ? 'presMenos' : '';
  return '';
}
/** Pura: ¿se ignora la pulsación? (escribiendo, con Ctrl/Alt/Meta, repetida o ya atendida). */
function atajoIgnorado(e) {
  if (e.ctrlKey || e.altKey || e.metaKey || e.repeat || e.defaultPrevented || e.isComposing) return true;
  const t = e.target, n = t && t.tagName ? t.tagName.toUpperCase() : '';
  if (['INPUT', 'TEXTAREA', 'SELECT'].includes(n) || (t && t.isContentEditable)) return true;
  return (n === 'BUTTON' || n === 'A') && (e.key === 'Enter' || e.key === ' '); /* ahí el propio botón ya responde */
}
/** Hace la acción llamando a lo mismo que los botones (sin duplicar lógica). */
function hacerAtajo(a) {
  if (a.startsWith('valorar:')) return juegoValorar(a.slice(8));
  ({ presMas: () => presMover(1), presMenos: () => presMover(-1), hoyNuevaSiguiente: () => hoyNuevaSiguiente(), atras: () => atras(), juegoRevelar: () => juegoRevelar(),
    juegoSeguirOtro: () => juegoSeguirOtro(), hoyAvanzar: () => hoyAvanzar(), hoyTerminar: () => hoyTerminar(), azarVer: () => azarVer(), azarOtra: () => azarOtra() })[a]();
}
/** Atiende una pulsación; devuelve true si hizo algo. */
function atajoTecla(e) {
  if (atajoIgnorado(e)) return false;
  const a = atajoAccion(e.key, faseAtajos()); if (!a) return false;
  hacerAtajo(a); return true;
}
if (typeof document !== 'undefined') {
  document.addEventListener('keydown', e => { if (atajoTecla(e)) e.preventDefault(); });
  const cambio = () => { if (PANT_COMPLETA.includes(PANT)) pintar(); }; /* el icono cambia al entrar o salir */
  document.addEventListener('fullscreenchange', cambio); document.addEventListener('webkitfullscreenchange', cambio);
}
