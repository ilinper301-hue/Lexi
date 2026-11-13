// Comprueba la estructura de docs/semana-NN.md (uso: node validar.js <carpeta docs>)
const fs = require('fs');
const path = require('path');
const dir = process.argv[2];
const errores = [];
const todas = [];
const sinTilde = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
const nPal = s => s.replace(/[«»¡!¿?.,:;…()]/g, ' ').split(/\s+/).filter(Boolean).length;

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
    if (p.semana !== sem) e('semana mal');
    if (p.silabas.join('') !== p.palabra.replace(/ /g, '')) e('sílabas no forman la palabra');
    if (!['accion', 'cualidad', 'nombre', 'enlace'].includes(p.tipo)) e('tipo desconocido');
    if (!['pensar', 'como-son', 'sentir', 'convivir', 'medio'].includes(p.bloque)) e('bloque desconocido');
    if (nPal(p.def) > 18) e('definición de ' + nPal(p.def) + ' palabras');
    if (!/[.…]$/.test(p.def)) e('definición sin punto final');
    if (p.escena.img !== p.id + '.webp') e('imagen mal nombrada');
    const frases = p.escena.texto.split(/(?<=[.!?»])\s+(?=[A-ZÁÉÍÓÚÑ¡¿«])/);
    if (frases.length < 3 || frases.length > 5) e('escena con ' + frases.length + ' frases');
    const raiz = sinTilde(p.palabra).slice(0, 3);
    if (!sinTilde(frases[frases.length - 1]).includes(raiz)) e('la palabra no está en la última frase de la escena');
    if (p.contextos.length !== 3) e('contextos: ' + p.contextos.length);
    if (p.sentido.length !== 4 || p.sentido.filter(s => s.ok).length !== 2) e('sentido: deben ser 2 sí y 2 no');
    if (p.sentido.some(s => !s.por)) e('sentido sin porqué');
    if (p.ejemplos.length !== 6 || p.ejemplos.filter(s => s.ok).length !== 3) e('ejemplos: deben ser 3 sí y 3 no');
    if (p.acaba.length !== 2 || p.acaba.some(a => !a.includes('…'))) e('acaba: 2 frases con «…»');
    if (!p.habla) e('falta habla');
    if (!p.gesto) e('falta gesto');
    if (gestos.has(p.gesto)) e('gesto repetido en la semana');
    gestos.add(p.gesto);
    for (const k of ['parecida', 'contraria', 'familia']) if (!Array.isArray(p.rel[k])) e('rel.' + k);
    const textos = [p.def, p.otro || '', p.escena.texto, ...p.contextos, p.gesto, p.habla, ...p.acaba,
      ...p.sentido.flatMap(s => [s.t, s.por]), ...p.ejemplos.map(x => x.t)];
    if (new Set(textos.filter(Boolean)).size !== textos.filter(Boolean).length) e('hay un texto repetido');
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
