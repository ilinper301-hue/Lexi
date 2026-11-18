/* ===== Explorar (reglas EX1-EX4 de docs/aula.md): mirar las palabras juntas. Funciones PURAS: no guardan nada ni cambian el perfil. =====
   Solo salen palabras presentadas. Las fichas dan `bloque` (EX1) y `rel.parecida` / `rel.contraria` (EX2). */
const BLOQUES_EXPLORAR = [['pensar', 'Para pensar'], ['como-son', 'Cómo son las cosas'], ['sentir', 'Cómo nos sentimos'], ['convivir', 'Para convivir'], ['medio', 'El mundo que nos rodea']];
const PREGUNTA_PAREJA = { contraria: '¿Por qué son lo contrario?', parecida: '¿En qué se parecen? ¿Son lo mismo del todo?' };
const presentadas = (pal, palabras = PALABRAS) => palabras.filter(p => presentadaEn(pal, p.id));
/** EX1 · «Por grupos»: las presentadas agrupadas por `bloque`, con su título y en el orden del paquete. Un grupo sin palabras no sale. */
function explorarGrupos(pal, palabras = PALABRAS) {
  const l = presentadas(pal, palabras).sort((x, y) => lugarPaquete(x) - lugarPaquete(y));
  return BLOQUES_EXPLORAR.map(([b, titulo]) => ({ bloque: b, titulo, palabras: l.filter(p => p.bloque === b) })).filter(g => g.palabras.length);
}
/** EX2 · «Parejas»: pares de palabras del paquete presentadas las dos, sacadas de `rel` (contrarias y parecidas; `rel.mas` nunca).
    Cada pareja sale una vez, aunque las dos fichas se nombren entre sí. Devuelve [{a, b, tipo, q}] por el lugar de la primera en el paquete. */
function explorarParejas(pal, palabras = PALABRAS) {
  const l = presentadas(pal, palabras), por = new Map();
  l.forEach(p => { por.set(sinTildes(p.id), p); por.set(sinTildes(p.palabra), p); });
  const vistos = new Set(), r = [];
  for (const p of l.slice().sort((x, y) => lugarPaquete(x) - lugarPaquete(y))) {
    for (const tipo of ['contraria', 'parecida']) for (const e of (p.rel && p.rel[tipo]) || []) {
      const q = por.get(sinTildes(e)); if (!q || q.id === p.id) continue;
      const k = [p.id, q.id].sort().join('|'); if (vistos.has(k)) continue;
      vistos.add(k); const [a, b] = lugarPaquete(p) <= lugarPaquete(q) ? [p, q] : [q, p];
      r.push({ a: a.id, b: b.id, tipo, q: PREGUNTA_PAREJA[tipo] });
    }
  }
  return r.sort((x, y) => lugarPaquete(palabras.find(p => p.id === x.a)) - lugarPaquete(palabras.find(p => p.id === y.a)));
}
/** EX3 · «Dos al azar»: dos presentadas de semanas distintas. `r1` y `r2` = números al azar entre 0 y 1. null si no hay dos semanas con palabras presentadas. */
function explorarDosAlAzar(pal, palabras = PALABRAS, r1 = Math.random(), r2 = Math.random()) {
  const l = presentadas(pal, palabras).sort((x, y) => lugarPaquete(x) - lugarPaquete(y));
  if (new Set(l.map(p => p.semana)).size < 2) return null;
  const a = l[Math.min(l.length - 1, Math.floor(r1 * l.length))], o = l.filter(p => p.semana !== a.semana);
  return [a.id, o[Math.min(o.length - 1, Math.floor(r2 * o.length))].id];
}
/** EX4 · Qué se ofrece: «Por grupos» desde 6 presentadas, «Parejas» desde la primera pareja, «Dos al azar» desde 2 semanas empezadas. */
function explorarDisponible(pal, palabras = PALABRAS) {
  const l = presentadas(pal, palabras);
  return { grupos: l.length >= 6, parejas: explorarParejas(pal, palabras).length > 0, azar: new Set(l.map(p => p.semana)).size >= 2 };
}
