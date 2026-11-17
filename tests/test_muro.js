/* Muro «Nuestras palabras» (paso 5.4): tests 76-80 de docs/aula.md. Usa las 60 fichas de docs/. Uso: node tests/test_muro.js */
const fs = require('fs'), vm = require('vm'), path = require('path'), assert = require('assert');
const { leerDocs } = require('../tools/validar-docs.js');
const R = path.join(__dirname, '..', 'src', 'js');
const codigo = ['00-util.js', '30-escala-logica.js', '32-eleccion.js', '34-hoy.js', '36-muro.js'].map(f => fs.readFileSync(path.join(R, f), 'utf8')).join('\n');
const A = vm.runInContext('const PALABRAS = [];\n' + codigo + '\n;({palabraNueva,presentarRegistro,valorarPalabra,muroSemanas,muroCuenta,azarSiguiente,PETICIONES_AZAR})', vm.createContext({ console }));
const { palabraNueva, presentarRegistro, valorarPalabra: valorar, muroSemanas, muroCuenta, azarSiguiente, PETICIONES_AZAR } = A;
const { todas } = leerDocs(path.resolve(__dirname, '../docs'));
const P = JSON.parse(JSON.stringify(todas.filter(p => p.curso === 1)));
const ids = l => JSON.parse(JSON.stringify(l));
let n = 0; const t = (nombre, f) => { f(); n++; console.log('  ok ' + nombre); };
const pres = (pal, id, dia) => { pal[id] = presentarRegistro(pal[id] || palabraNueva(), dia); };
const pal = {}; pres(pal, 'ordenar', '2026-11-16'); pres(pal, 'observar', '2026-11-16'); pres(pal, 'comparar', '2026-11-17');
const sem2 = P.find(p => p.semana === 2).id; pres(pal, sem2, '2026-11-18');

t('76. solo presentadas, semana más reciente arriba, orden de presentación y sin huecos (MU1, MU2)', () => {
  const m = muroSemanas(pal, P);
  assert.deepStrictEqual(ids(m.map(s => s.semana)), [2, 1]);
  assert.deepStrictEqual(ids(m[1].palabras.map(p => p.id)), ['observar', 'ordenar', 'comparar']);
  assert.strictEqual(m.reduce((s, x) => s + x.palabras.length, 0), 4);
  assert.deepStrictEqual(ids(muroSemanas({}, P)), []);
});
t('77. «Ya son N» = palabras presentadas (MU3)', () => { assert.strictEqual(muroCuenta(pal, P), 4); assert.strictEqual(muroCuenta({}, P), 0); });
t('78. las funciones del muro no cambian el perfil (MU4, MU5)', () => {
  const antes = JSON.stringify(pal); muroSemanas(pal, P); muroCuenta(pal, P); azarSiguiente(pal, P, '', 0, .3); assert.strictEqual(JSON.stringify(pal), antes);
});
t('79. «Una al azar»: nunca repite la anterior si hay más de una, rota las 3 peticiones, solo presentadas (MU5)', () => {
  for (let k = 0; k < 40; k++) { const s = azarSiguiente(pal, P, 'observar', k, (k % 10) / 10); assert.notStrictEqual(s.id, 'observar'); assert.strictEqual(s.pet, PETICIONES_AZAR[k % 3]); assert(pal[s.id]); }
  assert.deepStrictEqual(ids(PETICIONES_AZAR), ['gesto', 'def', 'frase']);
  const una = {}; pres(una, 'observar', '2026-11-16'); assert.strictEqual(azarSiguiente(una, P, 'observar', 0, .9).id, 'observar');
  assert.strictEqual(azarSiguiente({}, P, '', 0), null);
});
t('80. una palabra que baja de paso se ve con su paso nuevo y sin marca de bajada (MU6)', () => {
  const p = { ...pal }; p.observar = { ...palabraNueva(), e: 3, pres: '2026-11-16' }; p.observar = { ...p.observar, e: 2 };
  const m = muroSemanas(p, P); assert(m[1].palabras.some(x => x.id === 'observar')); assert.strictEqual(p.observar.e, 2);
});
console.log(n + ' pruebas correctas');
