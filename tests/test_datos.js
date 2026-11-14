/* Lógica de perfiles y migración. Uso: node tests/test_datos.js */
const fs = require('fs'), vm = require('vm'), path = require('path'), assert = require('assert');
const R = path.join(__dirname, '..', 'src', 'js');
const codigo = ['00-util.js', '20-datos.js'].map(f => fs.readFileSync(path.join(R, f), 'utf8')).join('\n');
function nuevo(almacen = {}) {
  const ls = { getItem: k => (k in almacen ? almacen[k] : null), setItem: (k, v) => { almacen[k] = String(v); }, removeItem: k => { delete almacen[k]; } };
  const ctx = vm.createContext({ localStorage: ls, console });
  const api = vm.runInContext(codigo + '\n;({cargar,guardar,crearPerfil,entrarPerfil,perfilesDe,perfilAct,avLibre,limpiar,AVATARES,MAX_PERFILES,get EST(){return EST}})', ctx);
  return { api, almacen };
}
let n = 0; const t = (nombre, f) => { f(); n++; console.log('  ok', nombre); };

t('empieza vacío', () => { const { api } = nuevo(); api.cargar(); assert.strictEqual(api.EST.perfiles.length, 0); assert.strictEqual(api.EST.modo, ''); });
t('30 animales como Calculi', () => { const { api } = nuevo(); assert.strictEqual(api.AVATARES.length, 30); assert.strictEqual(api.AVATARES[0][0], '🦊'); });
t('crea clase y niño, y guarda solo en lexi.v1', () => {
  const { api, almacen } = nuevo(); api.cargar();
  const c = api.crearPerfil('doc', '1.º A'); const k = api.crearPerfil('fam', 'Lucía', 3);
  assert(c && k); assert.strictEqual(api.EST.act, k.id); assert.strictEqual(api.EST.modo, 'fam');
  assert.deepStrictEqual(Object.keys(almacen), ['lexi.v1']);
  const { api: b } = nuevo(almacen); b.cargar();
  assert.strictEqual(b.EST.perfiles.length, 2); assert.strictEqual(b.perfilAct().n, 'Lucía'); assert.strictEqual(b.perfilAct().av, 3);
  assert.strictEqual(b.perfilesDe('doc')[0].av, 0);
});
t('rechaza nombre vacío o repetido (sin mirar mayúsculas)', () => {
  const { api } = nuevo(); api.cargar();
  assert.strictEqual(api.crearPerfil('doc', '   '), null); api.crearPerfil('doc', '1.º A');
  assert.strictEqual(api.crearPerfil('doc', '1.º a'), null); assert(api.crearPerfil('fam', '1.º A'));
});
t('limpia caracteres peligrosos y recorta', () => {
  const { api } = nuevo(); api.cargar(); const p = api.crearPerfil('fam', '<b>Pablo</b>"\'' + 'x'.repeat(40), 99);
  assert(!/[<>&"']/.test(p.n)); assert(p.n.length <= 20); assert.strictEqual(p.av, 29);
});
t('avLibre elige un animal sin usar', () => {
  const { api } = nuevo(); api.cargar(); api.crearPerfil('fam', 'A', 0); api.crearPerfil('fam', 'B', 1); assert.strictEqual(api.avLibre(), 2);
});
t('entrarPerfil cambia el activo y el modo', () => {
  const { api } = nuevo(); api.cargar(); const c = api.crearPerfil('doc', 'Clase'); api.crearPerfil('fam', 'Ana', 0);
  api.entrarPerfil(c.id); assert.strictEqual(api.EST.modo, 'doc'); assert.strictEqual(api.entrarPerfil('nada'), null);
});
t('JSON roto: copia en lexi.bk y empieza de cero sin borrar nada', () => {
  const { api, almacen } = nuevo({ 'lexi.v1': '{roto' }); api.cargar();
  assert.strictEqual(almacen['lexi.bk'], '{roto'); assert.strictEqual(api.EST.perfiles.length, 0);
});
t('datos de una versión más nueva no se pisan', () => {
  const orig = JSON.stringify({ v: 9, perfiles: [{ id: 'abcdef12', t: 'fam', n: 'Ana', av: 1 }], extra: 'futuro' });
  const { api, almacen } = nuevo({ 'lexi.v1': orig }); api.cargar();
  assert.strictEqual(api.guardar(), false); assert.strictEqual(api.crearPerfil('fam', 'Otro'), null); assert.strictEqual(almacen['lexi.v1'], orig);
});
t('saneado: ids repetidos, tipos raros, act inexistente y tope', () => {
  const { api } = nuevo();
  const e = api.limpiar({ act: 'zzzzzzzz', modo: 'doc', perfiles: [{ id: 'aaaaaaaa', t: 'fam', n: 'A' }, { id: 'aaaaaaaa', t: 'fam', n: 'B' }, { t: 'otro', n: 'C' }, null, 'x'] });
  assert.strictEqual(e.perfiles.length, 1); assert.strictEqual(e.act, ''); assert.strictEqual(e.modo, 'doc');
  const muchos = api.limpiar({ perfiles: Array.from({ length: 80 }, (_, i) => ({ t: 'fam', n: 'N' + i })) });
  assert.strictEqual(muchos.perfiles.length, api.MAX_PERFILES);
});
t('limpiar es idempotente', () => {
  const { api } = nuevo(); api.cargar(); api.crearPerfil('fam', 'Ana', 5);
  const a = JSON.stringify(api.limpiar(api.EST)); assert.strictEqual(JSON.stringify(api.limpiar(JSON.parse(a))), a);
});
console.log(n + ' pruebas correctas');
