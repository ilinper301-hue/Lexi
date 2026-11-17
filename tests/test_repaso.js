/* Cajas de repaso (reglas R1-R9, docs/pedagogia.md apartado 5) y caso 1 del apartado 11. Tests 21-31.
   Cajas: 1 → 1 día, 2 → 3, 3 → 7, 4 → 15, 5 → 30. Presentación de referencia: lunes 16-11-2026. Uso: node tests/test_repaso.js */
const fs = require('fs'), vm = require('vm'), path = require('path'), assert = require('assert');
const R = path.join(__dirname, '..', 'src', 'js');
const codigo = ['00-util.js', '30-escala-logica.js'].map(f => fs.readFileSync(path.join(R, f), 'utf8')).join('\n');
const { presentarRegistro, valorarPalabra: valorar, tareaHecha, palabraNueva, estaPendiente, pendientes, sumarDias } =
  vm.runInContext(codigo + '\n;({presentarRegistro,valorarPalabra,tareaHecha,palabraNueva,estaPendiente,pendientes,sumarDias})', vm.createContext({ console }));
const d = n => sumarDias('2026-11-16', n - 16), L16 = d(16);
const pres = (dia = L16) => presentarRegistro(palabraNueva(), dia);
/** Palabra presentada el 16 con la caja, la fecha de vuelta y el paso que se pidan. */
const reg = (caja, prox, e = 2) => ({ ...pres(), caja, prox, e });
const igual = (x, y) => assert.deepStrictEqual(JSON.parse(JSON.stringify(x)), JSON.parse(JSON.stringify(y)));
const ids = x => JSON.parse(JSON.stringify(x));
let n = 0; const t = (num, nombre, f) => { f(); n++; console.log('  ok', num + '.', nombre); };

t(21, '«casi todos» estando pendiente: caja 1→2 (+3), 2→3 (+7), 3→4 (+15), 4→5 (+30)', () => {
  [[1, 2, 3], [2, 3, 7], [3, 4, 15], [4, 5, 30]].forEach(([c, nueva, dias]) => {
    const a = valorar(reg(c, d(20)), 'sentido', 'todos', d(20)); assert.strictEqual(a.caja, nueva); assert.strictEqual(a.prox, sumarDias(d(20), dias));
  });
});
t(22, 'atrasada 10 días y «casi todos»: la fecha nueva se cuenta desde hoy', () => {
  const a = valorar(reg(1, d(20)), 'ejemplo', 'todos', d(30)); assert.strictEqual(a.caja, 2); assert.strictEqual(a.prox, d(33));
});
t(23, '«casi todos» sin estar pendiente: caja y fecha iguales, pero el día bueno se apunta', () => {
  const a = valorar(reg(2, d(25)), 'sentido', 'todos', d(20)); assert.strictEqual(a.caja, 2); assert.strictEqual(a.prox, d(25)); igual(a.dA, [d(20)]);
});
t(24, '«la mitad»: baja una caja (mínimo 1) y vuelve mañana, estuviera o no pendiente', () => {
  const a = valorar(reg(3, d(20)), 'sentido', 'mitad', d(20)), b = valorar(reg(3, d(30)), 'sentido', 'mitad', d(20)), c = valorar(reg(1, d(20)), 'sentido', 'mitad', d(20));
  [a, b].forEach(x => { assert.strictEqual(x.caja, 2); assert.strictEqual(x.prox, d(21)); }); assert.strictEqual(c.caja, 1); assert.strictEqual(c.prox, d(21));
});
t(25, '«pocos»: caja 1 y vuelve mañana', () => { const a = valorar(reg(4, d(40)), 'acaba', 'pocos', d(20)); assert.strictEqual(a.caja, 1); assert.strictEqual(a.prox, d(21)); });
t(26, 'descanso: paso 4, caja 5, pendiente y «casi todos» → sin fecha; un «pocos» la devuelve a la caja 1', () => {
  const a = valorar(reg(5, d(20), 4), 'sentido', 'todos', d(20)); assert.strictEqual(a.prox, ''); assert.strictEqual(a.e, 4); assert.strictEqual(estaPendiente(a, d(200)), false);
  igual(pendientes({ x: a }, d(200)), []);
  const b = valorar(a, 'acaba', 'pocos', d(100)); assert.strictEqual(b.caja, 1); assert.strictEqual(b.prox, d(101)); assert.ok(estaPendiente(b, d(101)));
  const c = valorar(a, 'habla', 'mitad', d(100)); assert.strictEqual(c.caja, 4); assert.strictEqual(c.prox, d(101));
});
t(27, 'paso 3, caja 5, pendiente y «casi todos»: sigue en caja 5 y vuelve a los 30 días', () => {
  const a = valorar(reg(5, d(20), 3), 'acaba', 'todos', d(20)); assert.strictEqual(a.caja, 5); assert.strictEqual(a.prox, d(50)); assert.strictEqual(a.e, 3);
});
t(28, 'sin valorar: sigue pendiente y la cuenta de esa tarea avanza', () => {
  const a = reg(2, d(20)), b = tareaHecha(tareaHecha(a, 'sentido'), 'sentido');
  assert.ok(estaPendiente(b, d(20))); assert.strictEqual(b.u.sentido, 2); assert.strictEqual(b.ut, 'sentido'); assert.strictEqual(b.caja, 2); assert.strictEqual(b.prox, d(20)); assert.strictEqual(b.e, 2);
  assert.strictEqual(tareaHecha(b, 'acaba').u.acaba, 1);
});
t(29, '«Recordamos»: máximo 3, la fecha más antigua primero, empates por paso, caja y paquete; ninguna presentada hoy', () => {
  const orden = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
  const pal = { a: reg(2, d(19), 3), b: reg(1, d(19), 2), c: reg(1, d(19), 2), d: reg(1, d(18), 3), e: reg(3, d(19), 2), f: reg(1, d(25), 2), g: pres(d(20)) };
  pal.g.prox = d(20);
  igual(pendientes(pal, d(20), orden), ['d', 'b', 'c']); /* d es la más atrasada; b y c empatan: paquete */
  igual(pendientes(pal, d(20), orden, 10), ['d', 'b', 'c', 'e', 'a']); /* f (vuelve el 25) y g (presentada hoy) no entran */
  igual(pendientes(pal, d(20), ['c', 'b'], 3), ['d', 'c', 'b']);
});
t(30, 'caso 12: 14 pendientes tras 3 semanas: entran 3 y nada cambia', () => {
  const orden = Array.from({ length: 14 }, (_, i) => 'p' + String(i).padStart(2, '0')), pal = {};
  orden.forEach(id => { pal[id] = pres(); }); const antes = JSON.stringify(pal);
  igual(pendientes(pal, d(16 + 21), orden), ['p00', 'p01', 'p02']); assert.strictEqual(JSON.stringify(pal), antes);
  orden.forEach(id => assert.ok(estaPendiente(pal[id], d(16 + 21))));
});
t(31, 'caso 1 completo con sus fechas exactas', () => {
  let a = pres(); assert.strictEqual([a.e, a.caja, a.prox].join(), '2,1,2026-11-17');
  a = valorar(a, 'ejemplo', 'todos', '2026-11-17'); assert.strictEqual([a.e, a.dA.length, a.caja, a.prox].join(), '2,1,2,2026-11-20');
  a = valorar(a, 'sentido', 'todos', '2026-11-18'); assert.strictEqual([a.e, a.caja, a.prox].join(), '3,2,2026-11-20');
  a = valorar(a, 'acaba', 'todos', '2026-11-20'); assert.strictEqual([a.e, a.dB.length, a.caja, a.prox].join(), '3,1,3,2026-11-27');
  a = valorar(a, 'habla', 'todos', '2026-11-27'); assert.strictEqual([a.e, a.caja, a.prox].join(), '4,4,2026-12-12');
  a = valorar(a, 'acaba', 'todos', '2026-12-14'); assert.strictEqual([a.e, a.caja, a.prox].join(), '4,5,2027-01-13');
  a = valorar(a, 'sentido', 'todos', '2027-01-13'); assert.strictEqual([a.e, a.caja, a.prox].join(), '4,5,');
  assert.strictEqual(estaPendiente(a, '2027-06-01'), false);
});
console.log(n + ' pruebas correctas');
