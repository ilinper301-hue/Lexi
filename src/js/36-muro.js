/* ===== Muro «Nuestras palabras» (reglas MU1-MU6 de docs/aula.md): lo que sale y la palabra «al azar». Funciones PURAS, no cambian nada del perfil. ===== */
/** MU1 y MU2 · Solo las palabras presentadas, agrupadas por semana (la más reciente arriba) y, dentro de cada semana, en el orden en que se presentaron
    (y, el mismo día, en el orden de la ficha). No hay huecos de las que faltan. Devuelve [{semana, palabras: [fichas]}]. */
function muroSemanas(pal, palabras = PALABRAS) {
  const pres = palabras.filter(p => presentadaEn(pal, p.id)), cmp = (x, y) => (regDe(pal, x.id).pres > regDe(pal, y.id).pres ? 1 : regDe(pal, x.id).pres < regDe(pal, y.id).pres ? -1 : 0) || lugarPaquete(x) - lugarPaquete(y);
  return [...new Set(pres.map(p => p.semana))].sort((a, b) => b - a).map(s => ({ semana: s, palabras: pres.filter(p => p.semana === s).sort(cmp) }));
}
/** MU3 · «Ya son N»: las palabras presentadas. */
const muroCuenta = (pal, palabras = PALABRAS) => palabras.filter(p => presentadaEn(pal, p.id)).length;
const PETICIONES_AZAR = ['gesto', 'def', 'frase'];
/** MU5 · «Una al azar»: una palabra presentada, distinta de la anterior si hay más de una, con la petición que toca (rotan: gesto, qué quiere decir, frase).
    `k` = cuántas llevan; `rnd` = número al azar entre 0 y 1. Devuelve {id, pet} o null si no hay ninguna. No guarda nada. */
function azarSiguiente(pal, palabras = PALABRAS, antes = '', k = 0, rnd = Math.random()) {
  const l = palabras.filter(p => presentadaEn(pal, p.id)); if (!l.length) return null;
  const c = l.length > 1 ? l.filter(p => p.id !== antes) : l;
  return { id: c[Math.min(c.length - 1, Math.floor(rnd * c.length))].id, pet: PETICIONES_AZAR[k % PETICIONES_AZAR.length] };
}
