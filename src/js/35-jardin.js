/* ===== Nuestros jardines (docs/jardines.md, reglas JA1-JA9): lógica PURA, sin pantalla y sin reloj =====
   Un jardín por curso: 10 plantas con 3 fases cada una = 30 avances, uno por semana completa.
   Semana completa (JA1): sus palabras están todas en «La usamos» (e = 4). Las semanas ya apuntadas viven en `perfil.jar` ({curso: [semanas]}):
   una semana apuntada no se pierde aunque luego una palabra baje de paso (JA3). Cuenta cuántas, no cuáles (JA4). */
const JARDINES = {
  1: { nombre: 'El huerto', plantas: [
    { id: 'girasol', n: 'girasol', art: 'el' }, { id: 'tomatera', n: 'tomatera', art: 'la' }, { id: 'fresa', n: 'fresa', art: 'la' },
    { id: 'lechuga', n: 'lechuga', art: 'la' }, { id: 'zanahoria', n: 'zanahoria', art: 'la' }, { id: 'pimiento', n: 'pimiento', art: 'el' },
    { id: 'judia', n: 'judía', art: 'la' }, { id: 'calabaza', n: 'calabaza', art: 'la' }, { id: 'maiz', n: 'maíz', art: 'el' }, { id: 'naranjo', n: 'naranjo', art: 'el' }] }
};
/** Plantas con sus tres imágenes ya subidas a img/jardines/ (`j<curso>-<planta>-<fase>.webp`). Las demás se dibujan con la planta de la escala hasta que lleguen. */
const IMG_JARDIN = { 1: ['girasol'] };
const MAX_AVANCES = 30, FASES = 3;
const ordenNum = (a, b) => a - b;

/** JA1 · Semanas del curso cuyas palabras están todas en «La usamos». */
function jardinCompletas(pal, palabras, curso) {
  const por = {};
  for (const p of palabras || []) if (p.curso === curso) (por[p.semana] = por[p.semana] || []).push(p.id);
  return Object.keys(por).map(Number).filter(s => por[s].length && por[s].every(id => pal && pal[id] && pal[id].e >= 4)).sort(ordenNum);
}
/** Semanas completas que aún no están apuntadas (sin pasar de 30 avances en total). */
function jardinPendientes(jar, completas, curso) {
  const ya = (jar && jar[curso]) || [];
  return completas.filter(s => !ya.includes(s)).slice(0, Math.max(0, MAX_AVANCES - ya.length));
}
/** Semanas que cuentan ahora: las apuntadas más las completas aún sin apuntar, de menor a mayor. */
function jardinSemanasAhora(jar, completas, curso) {
  return [...new Set([...((jar && jar[curso]) || []), ...jardinPendientes(jar, completas, curso)])].sort(ordenNum).slice(0, MAX_AVANCES);
}
/** JA2 · Con n avances, la fase de cada planta: 0 = «?» (aún no), 1 brote, 2 crecida, 3 con flor o fruto. Las plantas salen siempre en el mismo orden. */
function jardinFases(n, plantas = 10) {
  return Array.from({ length: plantas }, (_, i) => Math.max(0, Math.min(FASES, n - FASES * i)));
}
/** JA5 · El aviso del cierre cuando n pasa de `antes` a `despues` (uno solo, el del último avance); null si no hay. */
function jardinAviso(curso, antes, despues) {
  const J = JARDINES[curso]; if (!J || despues <= antes) return null;
  const i = Math.floor((despues - 1) / FASES), fase = (despues - 1) % FASES + 1, pl = J.plantas[i]; if (!pl) return null;
  const Art = pl.art === 'el' ? 'El' : 'La';
  const texto = fase === 1 ? '¡Planta nueva en el jardín!' : fase === 2 ? `¡Ha crecido ${pl.art} ${pl.n}!` : `¡${Art} ${pl.n} ya está ${pl.art === 'el' ? 'completo' : 'completa'}!`;
  return { texto, curso, planta: i, fase };
}
/** Avisos pendientes de un perfil: lo que se apuntaría ahora y aún no está apuntado (lo que ha avanzado en esta sesión). */
function jardinAvisosPerfil(p) {
  const out = [];
  if (!p) return out;
  for (const c of Object.keys(JARDINES).map(Number)) {
    const antes = ((p.jar || {})[c] || []).length, pend = jardinPendientes(p.jar, jardinCompletas(p.pal, PALABRAS, c), c).length;
    const a = jardinAviso(c, antes, antes + pend); if (a) out.push(a);
  }
  return out;
}
/** JA2-JA3 · Apunta en el perfil las semanas que acaban de completarse. true si cambió algo. */
function jardinRegistrar(p) {
  if (!p) return false;
  let cambio = false;
  for (const c of Object.keys(JARDINES).map(Number)) {
    const pend = jardinPendientes(p.jar, jardinCompletas(p.pal, PALABRAS, c), c); if (!pend.length) continue;
    p.jar = p.jar || {}; p.jar[c] = [...(p.jar[c] || []), ...pend].sort(ordenNum); cambio = true;
  }
  return cambio;
}
