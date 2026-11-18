/* Tarjetas para imprimir (paso 5.1): tests 90 de docs/aula.md. Usa las 60 fichas de docs/. Uso: node tests/test_tarjetas.js */
const fs = require('fs'), vm = require('vm'), path = require('path'), assert = require('assert');
const { leerDocs } = require('../tools/validar-docs.js');
const R = path.join(__dirname, '..', 'src', 'js');
const codigo = ['00-util.js', '49-hoja.js', '51-tarjetas.js'].map(f => fs.readFileSync(path.join(R, f), 'utf8')).join('\n');
const A = vm.runInContext('const PALABRAS = [], SC = {}; const presentadaEn = (pal, id) => !!(pal[id] && pal[id].e >= 2);\n' + codigo + '\n;({palabrasTarjetas,tarjetasHTML})', vm.createContext({ console }));
const { todas } = leerDocs(path.resolve(__dirname, '../docs'));
const P = JSON.parse(JSON.stringify(todas.filter(p => p.curso === 1)));
const e = x => x.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
let n = 0; const t = (nombre, f) => { f(); n++; console.log('  ok ' + nombre); };
const s1 = A.palabrasTarjetas(1, null, P);

t('TA1 · una semana da sus 6 palabras en el orden de la ficha', () => {
  assert.deepStrictEqual(JSON.parse(JSON.stringify(s1.map(p => p.orden))), [1, 2, 3, 4, 5, 6]);
});
t('TA1 · «todas las presentadas» usa solo las presentadas (y sin perfil, ninguna)', () => {
  const pal = { ordenar: { e: 2 }, comparar: { e: 1 }, [P.find(p => p.semana === 2).id]: { e: 3 } };
  assert.strictEqual(A.palabrasTarjetas(0, pal, P).length, 2); assert.strictEqual(A.palabrasTarjetas(0, null, P).length, 0);
});
t('90 · pequeñas: 6 por hoja, solo imagen y palabra (TA3)', () => {
  const h = A.tarjetasHTML(s1, 'p'); assert.strictEqual((h.match(/<section class="tj-hoja">/g) || []).length, 1); assert.strictEqual((h.match(/<figure>/g) || []).length, 6);
  for (const p of s1) { assert(h.includes('<figcaption>' + e(p.palabra) + '</figcaption>')); for (const x of [p.def, p.gesto, p.acaba[0]]) assert(!h.includes(e(x)), 'no debe salir «' + x + '»'); }
  const dos = A.tarjetasHTML(P.filter(p => p.semana <= 2).slice(0, 7), 'p'); assert.strictEqual((dos.match(/<section class="tj-hoja">/g) || []).length, 2);
});
t('TA2 · grandes: una por hoja con imagen, palabra y explicación', () => {
  const h = A.tarjetasHTML(s1, 'g'); assert.strictEqual((h.match(/<section class="tj-hoja">/g) || []).length, 6);
  for (const p of s1) assert(h.includes('<h2>' + e(p.palabra) + '</h2>') && h.includes(e(p.def)) && h.includes('img/palabras/' + p.escena.img));
});
t('TA5 · sin paso de la escala, progreso ni nombres', () => {
  for (const tam of ['g', 'p']) { const h = A.tarjetasHTML(s1, tam).toLowerCase(); for (const x of ['la conocemos', 'la entendemos', 'la usamos', 'progreso', 'lexi']) assert(!h.includes(x), x); }
});
console.log(n + ' pruebas correctas');
