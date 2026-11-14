// Comprueba la estructura de docs/semana-NN.md (uso: node validar.js <carpeta docs>)
const fs = require('fs');
const path = require('path');
const dir = process.argv[2];
const errores = [];
const todas = [];
const { revisa } = require('./reglas-ficha.js');

for (const f of fs.readdirSync(dir).filter(f => /^semana-\d+\.md$/.test(f)).sort()) {
  const md = fs.readFileSync(path.join(dir, f), 'utf8');
  const m = md.match(/```js\n([\s\S]*?)```/);
  if (!m) { errores.push(f + ': sin bloque js'); continue; }
  const lista = [];
  try { new Function('PALABRA', m[1])(p => lista.push(p)); }
  catch (e) { errores.push(f + ': no se puede leer: ' + e.message); continue; }
  const sem = Number(f.match(/\d+/)[0]);
  if (lista.length !== 6) errores.push(f + ': ' + lista.length + ' palabras (deben ser 6)');
  const gestos = new Set();
  for (const p of lista) {
    const e = t => errores.push(f + ' · ' + p.id + ': ' + t);
    todas.push(p);
    revisa(p, sem, gestos, e);
  }
}
const ids = todas.map(p => p.id);
ids.forEach((id, i) => { if (ids.indexOf(id) !== i) errores.push('id repetido: ' + id); });
console.log(todas.length + ' palabras leídas');
console.log(errores.length ? errores.join('\n') : 'Sin errores');
if (process.argv[3] === 'lista') {
  const porSem = {};
  todas.forEach(p => (porSem[p.semana] = porSem[p.semana] || []).push(p.palabra));
  Object.keys(porSem).forEach(s => console.log(s + ': ' + porSem[s].join(', ')));
}
