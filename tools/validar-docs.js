// Comprueba las fichas de docs/semana-NN.md (1.º) y docs/2-semana-NN.md (2.º, con su pieza)
// Uso: node tools/validar-docs.js docs [lista]
const fs = require('fs');
const path = require('path');
const { revisa, revisaFam, revisaPieza, idsRepetidos, preguntasRepetidas } = require('./reglas-ficha.js');

/* leerDocs(dir) → { todas, piezas, errores, avisos }. Lo usa también tests/test_docs.js */
function leerDocs(dir) {
  const errores = [], todas = [], piezas = [], semanas = [];
  const archivos = fs.readdirSync(dir).filter(f => /^(2-)?semana-\d+\.md$/.test(f)).sort();
  for (const f of archivos) {
    const md = fs.readFileSync(path.join(dir, f), 'utf8');
    const bloques = [...md.matchAll(/```js\n([\s\S]*?)```/g)].map(m => m[1]);
    if (!bloques.length) { errores.push(f + ': sin bloque js'); continue; }
    const lista = [], pz = [];
    try { new Function('PALABRA', 'PIEZA', bloques.join('\n'))(p => lista.push(p), z => pz.push(z)); }
    catch (e) { errores.push(f + ': no se puede leer: ' + e.message); continue; }
    const curso = f.startsWith('2-') ? 2 : 1;
    const sem = Number(f.match(/semana-(\d+)/)[1]);
    if (lista.length !== 6) errores.push(f + ': ' + lista.length + ' palabras (deben ser 6)');
    if (pz.length !== (curso === 2 ? 1 : 0)) errores.push(f + ': ' + pz.length + ' piezas (en 2.º, una por semana; en 1.º, ninguna)');
    const gestos = new Set();
    for (const p of lista) {
      const e = t => errores.push(f + ' · ' + p.id + ': ' + t);
      if (p.curso !== curso) e('curso mal');
      revisa(p, sem, gestos, e);
      todas.push(p);
    }
    for (const z of pz) {
      revisaPieza(z, sem, lista.map(p => p.id), t => errores.push(f + ' · pieza ' + z.id + ': ' + t));
      piezas.push(z);
    }
    semanas.push({ f, lista });
  }
  // `fam` se revisa al final: una palabra puede llevar una pieza de una semana posterior
  const idsPieza = new Set(piezas.map(z => z.id));
  for (const { f, lista } of semanas) for (const p of lista) revisaFam(p, idsPieza, t => errores.push(f + ' · ' + p.id + ': ' + t));
  for (const id of idsRepetidos(todas)) errores.push('id repetido: ' + id);
  for (const id of idsRepetidos(piezas)) errores.push('id de pieza repetido: ' + id);
  return { todas, piezas, errores, avisos: preguntasRepetidas(todas) };
}
module.exports = { leerDocs };

if (require.main === module) {
  const { todas, piezas, errores, avisos } = leerDocs(process.argv[2]);
  const n = c => todas.filter(p => p.curso === c).length;
  console.log(todas.length + ' palabras leídas (1.º: ' + n(1) + ' · 2.º: ' + n(2) + ') y ' + piezas.length + ' piezas');
  console.log(n(2) ? 'En 2.º llevan `fam`: ' + todas.filter(p => p.curso === 2 && p.fam).length + ' de ' + n(2) : '');
  console.log(errores.length ? errores.join('\n') : 'Sin errores');
  if (avisos.length) console.log('Avisos (misma pregunta de «relaciona» en dos palabras; la app dirá «También vale»):\n' + avisos.join('\n'));
  if (process.argv[3] === 'lista') {
    const porSem = {};
    todas.forEach(p => { const k = p.curso + '.º · ' + p.semana; (porSem[k] = porSem[k] || []).push(p.palabra); });
    Object.keys(porSem).forEach(s => console.log(s + ': ' + porSem[s].join(', ')));
  }
  process.exit(errores.length ? 1 : 0);
}
