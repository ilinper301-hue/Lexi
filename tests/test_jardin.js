/* Nuestros jardines (docs/jardines.md, JA1-JA9): cuenta de avances, datos, fusión y aviso. Uso: node tests/test_jardin.js */
const fs = require('fs'), vm = require('vm'), path = require('path'), assert = require('assert');
const R = path.join(__dirname, '..', 'src', 'js'), RAIZ = path.join(__dirname, '..');
const { leerDocs } = require('../tools/validar-docs.js');
const { todas } = leerDocs(path.resolve(__dirname, '../docs'));
const P1 = JSON.parse(JSON.stringify(todas.filter(p => p.curso === 1)));
const codigo = ['00-util.js', '20-datos.js', '21-fusion.js', '30-escala-logica.js', '35-jardin.js'].map(f => fs.readFileSync(path.join(R, f), 'utf8')).join('\n');
const ls = { getItem: () => null, setItem: () => {}, removeItem: () => {} };
const ctx = vm.createContext({ console, localStorage: ls, window: {}, document: { documentElement: { dataset: {} } } });
vm.runInContext('const PALABRAS = ' + JSON.stringify(P1) + ';\n' + codigo, ctx);
const A = vm.runInContext('({limpiarJar,limpiarPerfil,fusionarPerfil,JARDINES,IMG_JARDIN,jardinCompletas,jardinPendientes,jardinSemanasAhora,jardinFases,jardinAviso,jardinAvisosPerfil,jardinRegistrar,palabraNueva})', ctx);
const J = x => JSON.parse(JSON.stringify(x));
let n = 0; const t = (nombre, f) => { f(); n++; console.log('  ok ' + nombre); };
const usada = () => ({ ...A.palabraNueva(), e: 4 });
const palSemanas = (...sem) => { const pal = {}; for (const p of P1) if (sem.includes(p.semana)) pal[p.id] = usada(); return pal; };

t('J1. semana completa = sus 6 palabras en «La usamos»; con una menos, no (JA1)', () => {
  assert.deepStrictEqual(J(A.jardinCompletas(palSemanas(1, 3), P1, 1)), [1, 3]);
  const pal = palSemanas(2), uno = P1.find(p => p.semana === 2).id; pal[uno] = { ...usada(), e: 3 };
  assert.deepStrictEqual(J(A.jardinCompletas(pal, P1, 1)), []);
  assert.deepStrictEqual(J(A.jardinCompletas({}, P1, 1)), []);
  assert.deepStrictEqual(J(A.jardinCompletas(palSemanas(1), P1, 2)), []);
});
t('J2. 10 plantas × 3 fases = 30 avances; el orden de las plantas es fijo (JA2)', () => {
  assert.strictEqual(A.JARDINES[1].plantas.length, 10);
  assert.deepStrictEqual(J(A.jardinFases(0)), [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  assert.deepStrictEqual(J(A.jardinFases(1)), [1, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  assert.deepStrictEqual(J(A.jardinFases(3)), [3, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  assert.deepStrictEqual(J(A.jardinFases(4)), [3, 1, 0, 0, 0, 0, 0, 0, 0, 0]);
  assert.deepStrictEqual(J(A.jardinFases(30)), Array(10).fill(3));
  assert.deepStrictEqual(J(A.jardinFases(99)), Array(10).fill(3));
});
t('J3. una semana apuntada no se pierde aunque una palabra baje de paso (JA3)', () => {
  const p = { pal: palSemanas(1) }; assert.strictEqual(A.jardinRegistrar(p), true); assert.deepStrictEqual(J(p.jar), { 1: [1] });
  p.pal[P1.find(x => x.semana === 1).id].e = 2;
  assert.strictEqual(A.jardinRegistrar(p), false); assert.deepStrictEqual(J(p.jar), { 1: [1] });
  assert.deepStrictEqual(J(A.jardinSemanasAhora(p.jar, A.jardinCompletas(p.pal, P1, 1), 1)), [1]);
});
t('J4. cuenta cuántas semanas, no cuáles; no repite ni pasa de 30 (JA4)', () => {
  const p = { pal: palSemanas(5, 2, 9) }; A.jardinRegistrar(p); assert.deepStrictEqual(J(p.jar), { 1: [2, 5, 9] });
  A.jardinRegistrar(p); assert.deepStrictEqual(J(p.jar), { 1: [2, 5, 9] });
  const lleno = { 1: Array.from({ length: 30 }, (_, i) => i + 40) };
  assert.deepStrictEqual(J(A.jardinPendientes(lleno, [1, 2], 1)), []);
});
t('J5. aviso del cierre: planta nueva, ha crecido, completa; un solo aviso aunque haya varios avances (JA5)', () => {
  assert.strictEqual(A.jardinAviso(1, 0, 0), null);
  assert.strictEqual(A.jardinAviso(1, 0, 1).texto, '¡Planta nueva en el jardín!');
  assert.strictEqual(A.jardinAviso(1, 1, 2).texto, '¡Ha crecido el girasol!');
  assert.strictEqual(A.jardinAviso(1, 2, 3).texto, '¡El girasol ya está completo!');
  assert.strictEqual(A.jardinAviso(1, 3, 4).texto, '¡Planta nueva en el jardín!');
  assert.strictEqual(A.jardinAviso(1, 4, 6).texto, '¡La tomatera ya está completa!');
  assert.strictEqual(A.jardinAviso(1, 0, 2).texto, '¡Ha crecido el girasol!');
  const p = { pal: palSemanas(1, 2) }; assert.strictEqual(J(A.jardinAvisosPerfil(p)).length, 1);
  A.jardinRegistrar(p); assert.strictEqual(A.jardinAvisosPerfil(p).length, 0);
});
t('J6. datos: `jar` se sanea y un perfil sin jardín queda igual que antes', () => {
  assert.deepStrictEqual(J(A.limpiarJar({ 1: [3, '2', 3, 0, 150, 'x'], 9: [1], 2: 'no' })), { 1: [2, 3] });
  assert.deepStrictEqual(J(A.limpiarJar(null)), {});
  const base = { id: 'abcdef12', t: 'doc', n: 'Clase', c: '2026-11-01', ses: '', mt: 5, pal: {} };
  assert.ok(!('jar' in A.limpiarPerfil(base)));
  assert.deepStrictEqual(J(A.limpiarPerfil({ ...base, jar: { 1: [4, 1] } }).jar), { 1: [1, 4] });
});
t('J7. fusión: se unen las semanas de los dos lados y no se pierde ninguna (JA3)', () => {
  const b = { id: 'abcdef12', t: 'doc', n: 'Clase', c: '2026-11-01', ses: '', pal: {} };
  const a = A.limpiarPerfil({ ...b, mt: 5, jar: { 1: [1, 2] } }), z = A.limpiarPerfil({ ...b, mt: 6, jar: { 1: [2, 3] } });
  assert.deepStrictEqual(J(A.fusionarPerfil(a, z).jar), { 1: [1, 2, 3] });
  assert.deepStrictEqual(J(A.fusionarPerfil(z, a).jar), { 1: [1, 2, 3] });
  assert.ok(!('jar' in A.fusionarPerfil(A.limpiarPerfil({ ...b, mt: 1 }), A.limpiarPerfil({ ...b, mt: 2 }))));
  assert.deepStrictEqual(J(A.fusionarPerfil(A.limpiarPerfil({ ...b, mt: 1 }), z).jar), { 1: [2, 3] });
});
t('J8. las imágenes anunciadas existen (3 fases por planta, cuadradas y ligeras)', () => {
  for (const [c, lista] of Object.entries(A.IMG_JARDIN)) for (const id of lista) {
    assert.ok(A.JARDINES[c].plantas.some(p => p.id === id), id);
    for (const f of [1, 2, 3]) { const r = path.join(RAIZ, 'img', 'jardines', `j${c}-${id}-${f}.webp`); assert.ok(fs.existsSync(r), r); assert.ok(fs.statSync(r).size < 90 * 1024, r); }
  }
});
console.log(`\n${n} pruebas del jardín: todo bien`);
