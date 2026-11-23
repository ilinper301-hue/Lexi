/* Explorar (paso 5.7, tests 86-88 de docs/aula.md) y resumen «Cómo va la clase» (paso 5.6, test 91). Usa las 60 fichas de docs/. Uso: node tests/test_explorar.js */
const fs = require('fs'), vm = require('vm'), path = require('path'), assert = require('assert');
const { leerDocs } = require('../tools/validar-docs.js');
const R = path.join(__dirname, '..', 'src', 'js');
const codigo = ['00-util.js', '15-escala.js', '30-escala-logica.js', '32-eleccion.js', '34-hoy.js', '37-explorar.js', '38-resumen.js'].map(f => fs.readFileSync(path.join(R, f), 'utf8')).join('\n');
const A = vm.runInContext('const PALABRAS = [];\n' + codigo + '\n;({palabraNueva,presentarRegistro,valorarPalabra,conEncontrada,explorarGrupos,explorarParejas,explorarDosAlAzar,explorarDisponible,resumenPasos,resumenRepasar,resumenEncontradas,resumenDe,cuesta,BLOQUES_EXPLORAR})', vm.createContext({ console }));
const P = JSON.parse(JSON.stringify(leerDocs(path.resolve(__dirname, '../docs')).todas.filter(p => p.curso === 1)));
const J = x => JSON.parse(JSON.stringify(x));
let n = 0; const t = (nombre, f) => { f(); n++; console.log('  ok ' + nombre); };
const pres = (pal, id, dia = '2026-11-02') => { pal[id] = A.presentarRegistro(pal[id] || A.palabraNueva(), dia); return pal; };
const todas = () => { const pal = {}; P.forEach(p => pres(pal, p.id)); return pal; };
const de = (...ids) => { const pal = {}; ids.forEach(i => pres(pal, i)); return pal; };

t('86. «Por grupos»: sin grupos vacíos ni palabras sin presentar, con sus títulos y en el orden del paquete (EX1)', () => {
  const g = J(A.explorarGrupos(de('observar', 'enorme'), P));
  assert.deepStrictEqual(g.map(x => x.titulo), ['Para pensar', 'Cómo son las cosas']); assert.deepStrictEqual(g.map(x => x.palabras.map(p => p.id)), [['observar'], ['enorme']]);
  assert.deepStrictEqual(J(A.explorarGrupos({}, P)), []);
  const t60 = A.explorarGrupos(todas(), P); assert.deepStrictEqual(J(t60.map(x => x.titulo)), ['Para pensar', 'Cómo son las cosas', 'Cómo nos sentimos', 'Para convivir', 'El mundo que nos rodea']);
  assert.strictEqual(t60.reduce((s, x) => s + x.palabras.length, 0), 72);
});
t('87. «Parejas»: enorme y diminuto salen cuando las dos están presentadas, y no antes (EX2)', () => {
  const ya = J(A.explorarParejas(de('enorme', 'diminuto'), P)); assert.deepStrictEqual(ya.map(x => [x.a, x.b, x.tipo]), [['enorme', 'diminuto', 'contraria']]);
  assert.strictEqual(ya[0].q, '¿Por qué son lo contrario?');
  assert.deepStrictEqual(J(A.explorarParejas(de('enorme'), P)), []); assert.deepStrictEqual(J(A.explorarParejas(de('diminuto', 'observar'), P)), []);
  const fd = J(A.explorarParejas(de('fragil', 'delicado'), P)).find(x => x.tipo === 'parecida'); assert(fd); assert.strictEqual(fd.q, '¿En qué se parecen? ¿Son lo mismo del todo?');
  const todo = A.explorarParejas(todas(), P), claves = todo.map(x => [x.a, x.b].sort().join('|')); assert.strictEqual(new Set(claves).size, claves.length); /* ninguna repetida */
});
t('88. «Dos al azar»: dos palabras distintas y de semanas distintas; nada con una sola semana (EX3)', () => {
  const pal = todas();
  for (let k = 0; k < 200; k++) { const r = A.explorarDosAlAzar(pal, P, Math.random(), Math.random()), a = P.find(p => p.id === r[0]), b = P.find(p => p.id === r[1]); assert.notStrictEqual(a.id, b.id); assert.notStrictEqual(a.semana, b.semana); }
  assert.strictEqual(A.explorarDosAlAzar(de('observar', 'ordenar', 'enorme'), P, .3, .6), null); assert.strictEqual(A.explorarDosAlAzar({}, P), null);
});
t('EX4 · «Por grupos» desde 6 presentadas, «Parejas» desde la primera, «Dos al azar» desde 2 semanas', () => {
  const d = pal => J(A.explorarDisponible(pal, P));
  assert.deepStrictEqual(d({}), { grupos: false, parejas: false, azar: false });
  const sem1 = P.filter(p => p.semana === 1).map(p => p.id); assert.deepStrictEqual(d(de(...sem1)), { grupos: true, parejas: false, azar: false }); /* en la semana 1 sola no hay ninguna pareja completa */
  assert.deepStrictEqual(d(de(...sem1, 'diminuto')), { grupos: true, parejas: true, azar: true });
});
t('las funciones de Explorar no cambian el perfil', () => {
  const pal = todas(), antes = JSON.stringify(pal); A.explorarGrupos(pal, P); A.explorarParejas(pal, P); A.explorarDosAlAzar(pal, P, .2, .8); A.explorarDisponible(pal, P); assert.strictEqual(JSON.stringify(pal), antes);
});
t('91. resumen: las cuentas por paso suman las presentadas; una palabra con «pocos» en su última valoración sale en «Para repasar» (RE2)', () => {
  const pal = de('observar', 'ordenar', 'enorme', 'comparar'); pal.observar = A.valorarPalabra(pal.observar, 'sentido', 'pocos', '2026-11-03');
  pal.ordenar = A.valorarPalabra(pal.ordenar, 'sentido', 'todos', '2026-11-03');
  const r = A.resumenDe({ t: 'doc', n: '1.º A', pal }, '2026-11-18', P);
  assert.strictEqual(r.pasos.reduce((s, x) => s + x.palabras.length, 0), r.total); assert.strictEqual(r.total, 4);
  assert(r.repasar.includes('observar')); assert.strictEqual(r.titulo, 'Cómo va la clase');
  assert.deepStrictEqual(J(A.resumenDe({ t: 'fam', n: 'Lucía', pal }, '2026-11-18', P)).titulo, 'Cómo va');
});
t('«cuestan»: último «pocos», o dos de las tres últimas sin «casi todos»; una palabra sin presentar no sale (RE2)', () => {
  const v = (...x) => ({ val: x.map(y => ({ d: '2026-11-01', t: 'sentido', v: y })) });
  assert.strictEqual(A.cuesta(v('todos', 'pocos')), true); assert.strictEqual(A.cuesta(v('mitad', 'todos', 'mitad')), true); assert.strictEqual(A.cuesta(v('pocos', 'todos', 'todos')), false);
  assert.strictEqual(A.cuesta(v('todos')), false); assert.strictEqual(A.cuesta({ val: [] }), false);
  assert.deepStrictEqual(J(A.resumenRepasar({ comparar: { ...A.palabraNueva(), ...v('pocos') } }, '2026-11-18', P)), []); /* e = 1: sin presentar */
});
t('«las más encontradas»: de más a menos, solo las que tienen cuentas, y el resumen no cambia el perfil', () => {
  let pal = de('observar', 'ordenar', 'enorme'); pal.enorme = A.conEncontrada(pal.enorme, 'o', '2026-11-05'); pal.enorme = A.conEncontrada(pal.enorme, 'd', '2026-11-06'); pal.observar = A.conEncontrada(pal.observar, 'v', '2026-11-06');
  const antes = JSON.stringify(pal); assert.deepStrictEqual(J(A.resumenEncontradas(pal, P)), ['enorme', 'observar']); A.resumenDe({ t: 'doc', n: 'C', pal }, '2026-11-18', P); assert.strictEqual(JSON.stringify(pal), antes);
});
console.log(n + ' pruebas correctas');
