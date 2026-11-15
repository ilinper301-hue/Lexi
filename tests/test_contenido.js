// Contenido: cada ficha de src/js/palabras/ cumple las reglas, tiene su imagen y es igual a docs/semana-NN.md
// Uso: node tests/test_contenido.js
const fs = require('fs');
const path = require('path');
const { revisa } = require('../tools/reglas-ficha.js');
const R = path.resolve(__dirname, '..');
let hechas = 0, fallos = [];
const ok = (cond, msg) => { hechas++; if (!cond) fallos.push(msg); };

function cargar(codigo) { const l = []; new Function('PALABRA', codigo)(p => l.push(p)); return l; }

// 1. Las fichas del código
const dirP = path.join(R, 'src/js/palabras');
const archivos = fs.readdirSync(dirP).filter(f => /^s\d\d-.+\.js$/.test(f)).sort();
const porSemana = {};
for (const f of archivos) {
  const l = cargar(fs.readFileSync(path.join(dirP, f), 'utf8'));
  ok(l.length === 1, f + ': debe tener una sola palabra');
  const p = l[0], sem = Number(f.slice(1, 3));
  ok(f === `s${String(sem).padStart(2, '0')}-${p.id}.js`, f + ': el nombre no coincide con semana e id');
  (porSemana[sem] = porSemana[sem] || []).push(p);
}
for (const [sem, lista] of Object.entries(porSemana)) {
  ok(lista.length === 6, `semana ${sem}: ${lista.length} palabras (deben ser 6)`);
  const gestos = new Set();
  for (const p of lista) {
    revisa(p, Number(sem), gestos, t => fallos.push(`${p.id}: ${t}`)); hechas++;
    // 2. Imagen
    const img = path.join(R, 'img/palabras', p.escena.img);
    ok(fs.existsSync(img), `${p.id}: falta la imagen ${p.escena.img}`);
    if (fs.existsSync(img)) ok(fs.statSync(img).size < 90 * 1024, `${p.id}: la imagen pesa más de 90 KB`);
    // 3. Igual que el documento
    const md = fs.readFileSync(path.join(R, `docs/semana-${String(sem).padStart(2, '0')}.md`), 'utf8');
    const doc = cargar(md.match(/```js\n([\s\S]*?)```/)[1]).find(d => d.id === p.id);
    ok(doc && JSON.stringify(doc) === JSON.stringify(p), `${p.id}: no coincide con docs/semana-${sem}.md`);
  }
}
const ids = Object.values(porSemana).flat().map(p => p.id);
ok(new Set(ids).size === ids.length, 'ids repetidos');
ok(ids.length > 0, 'no hay palabras');

// 4. El comprobador de verdad detecta fallos
const mala = JSON.parse(JSON.stringify(Object.values(porSemana)[0][0]));
mala.ejemplos = mala.ejemplos.slice(0, 4); mala.silabas = ['no'];
const errs = []; revisa(mala, 1, new Set(), t => errs.push(t));
ok(errs.length >= 2, 'el comprobador no detecta una ficha rota');

// 5. Test 75: ningún gesto nombra su palabra; nada de parecida o contraria es de su familia; rel.mas bien formado
const base = () => JSON.parse(JSON.stringify(Object.values(porSemana)[0].find(p => p.id === 'ordenar')));
const falla = (cambia, trozo, msg) => {
  const p = base(); cambia(p); const er = []; revisa(p, 1, new Set(), t => er.push(t));
  ok(er.some(t => t.includes(trozo)), msg);
};
{ const er = []; revisa(base(), 1, new Set(), t => er.push(t)); ok(er.length === 0, 'ordenar debería pasar sin errores: ' + er.join(' | ')); }
ok(base().rel.mas.includes('desordenar') && !base().rel.contraria.includes('desordenar'), 'ordenar: «desordenar» debe estar en rel.mas y no en contraria');
falla(p => { p.gesto = 'Haz como que ordenas la mesa.'; }, 'el gesto nombra', 'test 75: no detecta un gesto que nombra la palabra');
falla(p => { p.rel.parecida.push('ordenado'); }, 'misma familia', 'test 75: no detecta una parecida de la misma familia');
falla(p => { p.rel.parecida.push('mezclar'); }, 'parecida y contraria', 'no detecta la misma palabra en parecida y contraria');
falla(p => { p.rel.mas = []; }, 'rel.mas', 'no detecta un rel.mas vacío');
falla(p => { p.rel.mas.push('colocar'); }, 'también en rel.mas', 'no detecta una palabra repetida en rel.mas');

console.log(`${hechas} comprobaciones, ${fallos.length} fallos`);
if (fallos.length) { console.log(fallos.join('\n')); process.exit(1); }
