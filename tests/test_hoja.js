/* Hoja para las familias (paso 5.2): test 89 de docs/aula.md. Usa las 60 fichas de docs/. Uso: node tests/test_hoja.js */
const fs = require('fs'), vm = require('vm'), path = require('path'), assert = require('assert');
const { leerDocs } = require('../tools/validar-docs.js');
const R = path.join(__dirname, '..', 'src', 'js');
const codigo = ['00-util.js', '49-hoja.js'].map(f => fs.readFileSync(path.join(R, f), 'utf8')).join('\n');
const A = vm.runInContext('const PALABRAS = [], SC = {};\n' + codigo + '\n;({hojaFamilias,semanasConFicha,HOJA_ARRIBA,HOJA_IDEAS})', vm.createContext({ console }));
const { todas } = leerDocs(path.resolve(__dirname, '../docs'));
const P = JSON.parse(JSON.stringify(todas.filter(p => p.curso === 1)));
let n = 0; const t = (nombre, f) => { f(); n++; console.log('  ok ' + nombre); };

t('89. semana 1: las 6 palabras, cada una con explicación, gesto y frase (FA2)', () => {
  const h = A.hojaFamilias(1, true, P), s1 = P.filter(p => p.semana === 1);
  assert.strictEqual(s1.length, 6); assert.strictEqual((h.match(/class="hoja-pal"/g) || []).length, 6);
  const e = x => x.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  for (const p of s1) for (const x of [p.palabra, p.def, p.gesto, p.acaba[0]]) assert(h.includes(e(x)), p.id + ': falta «' + x + '»');
  assert(h.includes('Su gesto:') && h.includes('Empieza tú la frase y que la acabe:'));
  assert.deepStrictEqual([...h.matchAll(/<h3>([^<]+)<\/h3>/g)].map(m => m[1]).slice(0, 6), s1.sort((a, b) => a.orden - b.orden).map(p => p.palabra));
});
t('89. texto fijo de arriba y «Tres ideas» (FA4)', () => {
  const h = A.hojaFamilias(1, true, P);
  assert(h.includes('No hace falta estudiarlas') && h.includes('Tres ideas') && A.HOJA_IDEAS.length === 3 && (h.match(/<ol>[\s\S]*<\/ol>/)[0].match(/<li>/g) || []).length === 3);
});
t('89. sin paso de la escala, sin notas, sin nombres ni otras apps (FA3)', () => {
  const h = A.hojaFamilias(1, true, P).toLowerCase();
  for (const x of ['la conocemos', 'la entendemos', 'la usamos', 'progreso', 'lectori', 'barri', 'calculi', 'tabula', 'lexi']) assert(!h.includes(x), 'no debe salir «' + x + '»');
});
t('FA2 · «sin imágenes» quita todas las imágenes', () => {
  assert(A.hojaFamilias(1, true, P).includes('<img') && !A.hojaFamilias(1, false, P).includes('<img'));
});
t('las semanas disponibles salen de las fichas y cada una da una hoja de 6', () => {
  const s = JSON.parse(JSON.stringify(A.semanasConFicha(P))); assert.deepStrictEqual(s, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  for (const x of s) assert.strictEqual((A.hojaFamilias(x, false, P).match(/class="hoja-pal"/g) || []).length, 6);
});
console.log(n + ' pruebas correctas');
