/* Escala de 4 pasos (reglas E1-E11, docs/pedagogia.md apartado 4) y regla G8 (el gesto solo no sube). Tests 1-20 y 65.
   Funciones puras con el día como dato; presentación de referencia: lunes 16-11-2026. Uso: node tests/test_escala.js */
const fs = require('fs'), vm = require('vm'), path = require('path'), assert = require('assert');
const R = path.join(__dirname, '..', 'src', 'js');
const codigo = ['00-util.js', '20-datos.js', '30-escala-logica.js'].map(f => fs.readFileSync(path.join(R, f), 'utf8')).join('\n');
function cargar(almacen = {}) {
  const ls = { getItem: k => (k in almacen ? almacen[k] : null), setItem: (k, v) => { almacen[k] = String(v); }, removeItem: k => { delete almacen[k]; } };
  return vm.runInContext(codigo + '\n;({presentarRegistro,valorarPalabra,tareaHecha,palabraNueva,estaPendiente,sumarDias,cargar,crearPerfil,perfilAct,presentarPalabra,valorarTarea,tareaSinValorar,set MODO_DOCENTE(v){MODO_DOCENTE=v}})', vm.createContext({ localStorage: ls, console }));
}
const A = cargar(), { presentarRegistro, valorarPalabra: valorar, palabraNueva, sumarDias } = A;
const d = n => sumarDias('2026-11-16', n - 16); /* día del mes de noviembre (o siguientes) */
const L16 = d(16), pres = () => presentarRegistro(palabraNueva(), L16);
/** Aplica una lista de [día, tarea, valor] a una palabra recién presentada el lunes 16. */
const seq = (...pasos) => pasos.reduce((a, [dia, t, v]) => valorar(a, t, v, d(dia)), pres());
const mismo = (x, y) => assert.deepStrictEqual(JSON.parse(JSON.stringify(x)), JSON.parse(JSON.stringify(y)));
const sinHist = a => { const { val, u, ut, ...r } = a; return r; };
let n = 0; const t = (num, nombre, f) => { f(); n++; console.log('  ok', num + '.', nombre); };

t(1, 'presentar: paso 2, guarda fecha, caja 1 y vuelve al día siguiente; repetir no cambia nada', () => {
  const a = pres(); assert.strictEqual(a.e, 2); assert.strictEqual(a.pres, '2026-11-16'); assert.strictEqual(a.caja, 1); assert.strictEqual(a.prox, '2026-11-17');
  mismo(presentarRegistro(a, d(20)), a);
});
t(2, 'valorar una palabra sin presentar no hace nada', () => { const a = palabraNueva(); mismo(valorar(a, 'sentido', 'todos', L16), palabraNueva()); mismo(valorar(a, 'sentido', 'todos', d(17)), palabraNueva()); });
t(3, 'valoración el día de la presentación: solo el historial (E2)', () => {
  const a = seq([16, 'ejemplo', 'todos']); assert.strictEqual(a.val.length, 1); mismo(sinHist(a), sinHist(pres()));
  mismo(sinHist(seq([16, 'ejemplo', 'pocos'])), sinHist(pres()));
});
t(4, 'un solo día bueno de entender no sube', () => { const a = seq([17, 'sentido', 'todos']); assert.strictEqual(a.e, 2); mismo(a.dA, [d(17)]); });
t(5, 'dos «casi todos» de entender el mismo día son 1 día bueno (caso 2)', () => {
  const a = seq([17, 'ejemplo', 'todos'], [17, 'sentido', 'todos']); assert.strictEqual(a.e, 2); mismo(a.dA, [d(17)]);
});
t(6, 'entender el 17 y el 18: paso 3 el 18', () => {
  const a = seq([17, 'sentido', 'todos']), b = valorar(a, 'ejemplo', 'todos', d(18)); assert.strictEqual(a.e, 2); assert.strictEqual(b.e, 3); assert.strictEqual(b.cam, d(18)); mismo(b.dA, []);
});
t(7, 'usar el 17 y el 18 en el paso 2: sigue en 2 y conserva 2 días buenos de usar', () => {
  const a = seq([17, 'acaba', 'todos'], [18, 'habla', 'todos']); assert.strictEqual(a.e, 2); mismo(a.dB, [d(17), d(18)]);
});
t(8, 'caso 8: en el paso 3, usar el 19 y el 20 no basta; el 23 (7 días) sube al 4', () => {
  let a = seq([17, 'sentido', 'todos'], [18, 'sentido', 'todos'], [19, 'acaba', 'todos'], [20, 'habla', 'todos']); assert.strictEqual(a.e, 3);
  a = valorar(a, 'acaba', 'todos', d(22)); assert.strictEqual(a.e, 3); /* 6 días: aún no */
  a = valorar(a, 'habla', 'todos', d(23)); assert.strictEqual(a.e, 4);
});
t(9, 'caso 9 completo', () => {
  let a = seq([17, 'acaba', 'todos'], [24, 'habla', 'todos'], [25, 'sentido', 'todos']); assert.strictEqual(a.e, 2);
  a = valorar(a, 'ejemplo', 'todos', d(26)); assert.strictEqual(a.e, 3);
  a = valorar(a, 'sentido', 'todos', d(27)); assert.strictEqual(a.e, 3);
  a = valorar(a, 'acaba', 'todos', d(30)); assert.strictEqual(a.e, 4);
});
t(10, 'nunca dos pasos el mismo día (E6)', () => {
  let a = seq([17, 'acaba', 'todos'], [24, 'habla', 'todos'], [25, 'sentido', 'todos'], [26, 'ejemplo', 'todos'], [26, 'acaba', 'todos']);
  assert.strictEqual(a.e, 3); assert.strictEqual(a.dB.length, 3);
  a = valorar(a, 'habla', 'todos', d(27)); assert.strictEqual(a.e, 4);
});
t(11, '«la mitad»: paso y días buenos intactos', () => {
  const a = seq([17, 'sentido', 'todos']), b = valorar(a, 'ejemplo', 'mitad', d(18)); assert.strictEqual(b.e, 2); mismo(b.dA, a.dA); assert.strictEqual(b.mal, '');
  const c = seq([17, 'acaba', 'todos']), e = valorar(c, 'habla', 'mitad', d(18)); mismo(e.dB, c.dB);
});
t(12, '«pocos» de entender: del 3 al 2 sin días buenos; en el 2 sigue en 2 (E8, E10)', () => {
  const a = seq([17, 'sentido', 'todos'], [18, 'sentido', 'todos'], [19, 'elige', 'pocos']); assert.strictEqual(a.e, 2); mismo([a.dA, a.dB], [[], []]);
  const b = valorar(a, 'sentido', 'pocos', d(20)); assert.strictEqual(b.e, 2); assert.ok(b.e >= 2);
  const c = seq([17, 'acaba', 'todos'], [18, 'sentido', 'pocos']); assert.strictEqual(c.e, 2); mismo(c.dB, []);
});
t(13, '«pocos» de usar: en el 3 sigue en 3 y pierde los días de usar; en el 2 conserva los de entender', () => {
  const a = seq([17, 'sentido', 'todos'], [18, 'sentido', 'todos'], [19, 'acaba', 'todos']); mismo(a.dB, [d(19)]);
  const b = valorar(a, 'habla', 'pocos', d(20)); assert.strictEqual(b.e, 3); mismo(b.dB, []);
  const c = seq([17, 'sentido', 'todos'], [18, 'acaba', 'pocos']); assert.strictEqual(c.e, 2); mismo(c.dA, [d(17)]);
});
t(14, '«pocos» en el paso 4, de usar o de entender: paso 3 (caso 11)', () => {
  const a4 = seq([17, 'sentido', 'todos'], [18, 'sentido', 'todos'], [19, 'acaba', 'todos'], [23, 'habla', 'todos']); assert.strictEqual(a4.e, 4);
  const u = valorar(a4, 'acaba', 'pocos', d(24)), s = valorar(a4, 'sentido', 'pocos', d(24));
  assert.strictEqual(u.e, 3); assert.strictEqual(s.e, 3); assert.strictEqual(u.caja, 1); assert.strictEqual(u.prox, d(25));
});
t(15, '«pocos» y después «casi todos» el mismo día: el día no cuenta (caso 10)', () => {
  const a = seq([17, 'ejemplo', 'pocos'], [17, 'sentido', 'todos']); assert.strictEqual(a.e, 2); mismo(a.dA, []); assert.strictEqual(a.caja, 1); assert.strictEqual(a.prox, d(18));
  const b = valorar(a, 'sentido', 'todos', d(18)); mismo(b.dA, [d(18)]); /* al día siguiente ya cuenta */
});
t(16, 'sube y «pocos» el mismo día: no baja; el día siguiente, otro «pocos» de entender, baja (caso 7)', () => {
  let a = seq([17, 'sentido', 'todos'], [18, 'sentido', 'todos'], [18, 'elige', 'pocos']);
  assert.strictEqual(a.e, 3); assert.strictEqual(a.caja, 1); assert.strictEqual(a.prox, d(19)); mismo(a.dA, []);
  a = valorar(a, 'ejemplo', 'pocos', d(19)); assert.strictEqual(a.e, 2);
});
t(17, '100 días sin sesión: mismo paso y misma caja', () => {
  const a = seq([17, 'sentido', 'todos'], [18, 'sentido', 'todos']), antes = JSON.stringify(a);
  assert.ok(A.estaPendiente(a, sumarDias(L16, 100))); assert.strictEqual(JSON.stringify(a), antes); assert.strictEqual(a.e, 3);
});
t(18, 'fecha anterior a la presentación (reloj mal puesto): no cuenta y no da error', () => {
  const a = pres(), b = valorar(a, 'sentido', 'todos', d(10)); mismo(b, a); mismo(valorar(a, 'sentido', 'todos', 'mañana'), a);
});
t(19, 'Modo Docente: valorar y presentar dejan lexi.v1 exactamente igual (E11)', () => {
  const al = {}, a = cargar(al); a.cargar(); a.crearPerfil('doc', '1.º A'); a.presentarPalabra('observar'); const antes = al['lexi.v1'];
  a.MODO_DOCENTE = true;
  assert.strictEqual(a.presentarPalabra('comparar'), false); assert.strictEqual(a.valorarTarea('observar', 'sentido', 'todos'), false); assert.strictEqual(a.tareaSinValorar('observar', 'sentido'), false);
  assert.strictEqual(al['lexi.v1'], antes);
});
t(20, 'al azar: 2000 secuencias de 60 valoraciones, las reglas se cumplen siempre', () => {
  let semilla = 12345; const azar = k => { semilla = (semilla * 1664525 + 1013904223) >>> 0; return semilla % k; };
  const ENT = ['sentido', 'ejemplo', 'elige', 'gesto'], USO = ['acaba', 'habla', 'relaciona', 'familia'], V = ['todos', 'todos', 'mitad', 'pocos'];
  for (let s = 0; s < 2000; s++) {
    let a = pres(), dia = 16, cambios = {};
    for (let k = 0; k < 60; k++) {
      dia += azar(3); const tarea = azar(2) ? ENT[azar(4)] : USO[azar(4)], v = V[azar(4)], ant = a;
      a = valorar(a, tarea, v, d(dia));
      assert.ok(a.e >= 2 && a.e <= 4 && a.caja >= 1 && a.caja <= 5, 'paso o caja fuera de rango');
      assert.ok(Math.abs(a.e - ant.e) <= 1, 'más de un paso a la vez');
      if (a.e !== ant.e) {
        assert.ok(!cambios[dia], 'dos cambios el mismo día'); cambios[dia] = 1;
        if (a.e > ant.e) assert.ok(v === 'todos' && (a.e === 3 ? ENT : USO).includes(tarea) && dia > 16, 'sube con evidencia distinta');
      }
    }
  }
});
t(65, 'G8: el gesto solo no sube; con un día de sentido, ejemplo o elige sí', () => {
  let a = seq([17, 'gesto', 'todos'], [18, 'gesto', 'todos']); assert.strictEqual(a.e, 2); assert.strictEqual(a.dA.length, 2);
  a = valorar(a, 'sentido', 'todos', d(19)); assert.strictEqual(a.e, 3); /* tres días buenos y uno de significado */
  for (const sig of ['sentido', 'ejemplo', 'elige']) { const b = seq([17, 'gesto', 'todos'], [18, sig, 'todos']); assert.strictEqual(b.e, 3, sig); }
  const c = seq([17, 'sentido', 'todos'], [18, 'gesto', 'todos']); assert.strictEqual(c.e, 3);
  const e = seq([17, 'gesto', 'todos'], [18, 'gesto', 'todos'], [19, 'gesto', 'todos']); assert.strictEqual(e.e, 2);
});
console.log(n + ' pruebas correctas');
