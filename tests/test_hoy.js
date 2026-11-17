/* Botón «Hoy» (paso 3.3): qué entra en cada parte (H1-H4, H7-H10), tests 40-49 y 52-53 de docs/pedagogia.md (apartado 12).
   Usa las 60 fichas de docs/semana-NN.md (aún no están todas en src/js/palabras/). Uso: node tests/test_hoy.js */
const fs = require('fs'), vm = require('vm'), path = require('path'), assert = require('assert');
const { leerDocs } = require('../tools/validar-docs.js');
const R = path.join(__dirname, '..', 'src', 'js');
const codigo = ['00-util.js', '30-escala-logica.js', '32-eleccion.js', '34-hoy.js'].map(f => fs.readFileSync(path.join(R, f), 'utf8')).join('\n');
const A = vm.runInContext('const PALABRAS = [];\n' + codigo + '\n;({palabraNueva,presentarRegistro,valorarPalabra,sumarDias,diaNum,lunesDe,cupoNuevas,nuevasPorPresentar,recordamosHoy,jugamosHoy,colaTareas,estaPendiente,pendientes,ordenPaquete,PALABRAS,MAX_RECORDAMOS,muestraOtro,conOtroVisto,subieronHoy})', vm.createContext({ console }));
const { palabraNueva, presentarRegistro, valorarPalabra: valorar, sumarDias, lunesDe, cupoNuevas, nuevasPorPresentar, recordamosHoy, jugamosHoy, colaTareas, estaPendiente, muestraOtro, conOtroVisto, subieronHoy } = A;
const { todas } = leerDocs(path.resolve(__dirname, '../docs'));
const P = JSON.parse(JSON.stringify(todas.filter(p => p.curso === 1)));
const ids = l => JSON.parse(JSON.stringify(l.map(x => x.id)));
const igual = (x, y, m) => assert.deepStrictEqual(JSON.parse(JSON.stringify(x)), JSON.parse(JSON.stringify(y)), m);
const d = n => sumarDias('2026-11-16', n - 16); /* d(16) = lunes 16-11-2026 */
let n = 0; const t = (nombre, f) => { f(); n++; console.log('  ok ' + nombre); };

/** Una sesión «Hoy» completa con el docente que siempre dice «casi todos». Devuelve lo que ha salido en cada parte. */
function sesion(pal, dia, ajuste = 2, valor = 'todos') {
  const reg = id => pal[id] || palabraNueva(), pres = () => P.filter(p => reg(p.id).e >= 2);
  const rec = recordamosHoy(pal, dia, P), cr = colaTareas(rec, reg, pres(), dia);
  cr.forEach(q => { pal[q.id] = valorar(reg(q.id), q.t, valor, dia); });
  const nu = nuevasPorPresentar(pal, dia, ajuste, P); nu.forEach(p => { pal[p.id] = presentarRegistro(reg(p.id), dia); });
  const ju = jugamosHoy(pal, dia, { rec: ids(rec), nuevas: ids(nu) }, P), cj = colaTareas(ju, reg, pres(), dia);
  cj.forEach(q => { pal[q.id] = valorar(reg(q.id), q.t, valor, dia); });
  return { rec: ids(rec), nu: ids(nu), ju: ids(ju), cr, cj };
}
const presentar = (pal, lista, dia) => lista.forEach(id => { pal[id] = presentarRegistro(pal[id] || palabraNueva(), dia); });

t('40. primer día: sin «Recordamos»; nuevas = observar y comparar (orden de la ficha); «Jugamos» con esas dos y tareas de entender distintas', () => {
  const pal = {}, s = sesion(pal, d(16));
  igual([s.rec, s.nu, s.ju], [[], ['observar', 'comparar'], ['observar', 'comparar']]);
  assert.strictEqual(s.cj.length, 2); assert.notStrictEqual(s.cj[0].t, s.cj[1].t);
  s.cj.forEach(q => assert(['sentido', 'ejemplo', 'gesto'].includes(q.t), q.t)); /* `elige` necesita 2 más presentadas */
});
t('41. la semana de ejemplo del apartado 11, día a día (mismas palabras en cada parte)', () => {
  const pal = {}, esperado = [
    [16, [], ['observar', 'comparar'], ['observar', 'comparar']],
    [17, ['observar', 'comparar'], ['ordenar', 'enorme'], ['ordenar', 'enorme']],
    [18, ['ordenar', 'enorme'], ['fragil', 'curioso'], ['observar', 'comparar']],
    [19, ['fragil', 'curioso'], [], ['ordenar', 'enorme']],
    [20, ['observar', 'comparar'], [], ['fragil', 'curioso']],
    [23, ['ordenar', 'enorme', 'fragil'], ['reconocer', 'rapido'], null]];
  for (const [dia, rec, nu, ju] of esperado) {
    const s = sesion(pal, d(dia)); igual(s.rec, rec, 'recordamos ' + dia); if (dia < 23) igual(s.nu, nu, 'nuevas ' + dia); else assert.strictEqual(s.nu.length, 2);
    if (ju) igual(s.ju, ju, 'jugamos ' + dia); else igual(s.ju, s.nu, 'jugamos con las 2 nuevas');
  }
  /* viernes 20 en adelante: los pasos que dice la tabla */
  assert.strictEqual(pal.observar.e, 3);
});

const sem1 = ['observar', 'comparar', 'ordenar', 'enorme', 'fragil', 'curioso'];
t('42. cupo diario: con el ajuste en 1 sale 1 nueva; si hoy ya se han presentado 2, ninguna (H3)', () => {
  const pal = {}; igual(ids(nuevasPorPresentar(pal, d(16), 1, P)), ['observar']);
  igual(ids(nuevasPorPresentar(pal, d(16), 2, P)), ['observar', 'comparar']);
  presentar(pal, ['observar', 'comparar'], d(16)); igual(nuevasPorPresentar(pal, d(16), 2, P), []);
  presentar(pal, ['ordenar'], d(17)); assert.strictEqual(cupoNuevas(pal, d(17), 1), 0); assert.strictEqual(cupoNuevas(pal, d(17), 2), 1);
});
t('43. cupo semanal: con 6 presentadas esta semana natural no sale ninguna; el lunes siguiente salen 2 de la semana 2 (H3)', () => {
  const pal = {}; presentar(pal, sem1, d(18)); /* también las presentadas a mano cuentan */
  igual(nuevasPorPresentar(pal, d(19), 2, P), []); igual(nuevasPorPresentar(pal, d(22), 2, P), []); /* domingo 22-11 */
  const lu = nuevasPorPresentar(pal, d(23), 2, P); assert.strictEqual(lu.length, 2); lu.forEach(p => assert.strictEqual(p.semana, 2));
  assert.strictEqual(lunesDe(d(22)), d(16)); assert.strictEqual(lunesDe(d(23)), d(23));
});
t('44. `sep`: primero, después y finalmente salen en tres días distintos y en ese orden; el primer día van `primero` y `antiguo` (H3)', () => {
  const pal = {}; P.filter(p => p.semana < 5).forEach(p => { pal[p.id] = presentarRegistro(palabraNueva(), d(1)); });
  const dias = [d(100), d(101), d(102)].map(dia => { const nu = ids(nuevasPorPresentar(pal, dia, 2, P)); presentar(pal, nu, dia); return nu; });
  assert.deepStrictEqual(dias[0], ['primero', 'antiguo']); assert(dias[1].includes('despues') || dias[1].includes('después'), dias[1].join()); assert(dias[2].includes('finalmente'), dias[2].join());
  /* y dos con la misma marca nunca van el mismo día */
  const sep = id => P.find(p => p.id === id).sep; dias.forEach(l => { const m = l.map(sep).filter(Boolean); assert.strictEqual(new Set(m).size, m.length); });
});
t('45. sin palabras por presentar: la sesión tiene «Recordamos» y «Jugamos» y no da error (H1)', () => {
  const pal = {}; P.forEach(p => { pal[p.id] = presentarRegistro(palabraNueva(), d(1)); });
  const s = sesion(pal, d(200)); assert.strictEqual(s.nu.length, 0); assert.strictEqual(s.rec.length, 3); assert(s.ju.length >= 1);
});
t('46. «Jugamos» nunca repite una palabra que ha salido hoy en «Recordamos» (H4)', () => {
  const pal = {}; for (let i = 0; i < 40; i++) { const dia = d(16 + i + 2 * Math.floor(i / 5)); const s = sesion(pal, dia); s.ju.forEach(id => assert(!s.rec.includes(id), dia + ' ' + id)); }
});
t('47. «Jugamos»: primero pendientes de la semana, luego presentadas antes de hoy, luego las menos valoradas; completa con pendientes de otras semanas (H4)', () => {
  const pal = {}; presentar(pal, ['observar', 'comparar', 'ordenar', 'enorme'], d(16)); presentar(pal, ['fragil'], d(17));
  /* hoy 19: observar, comparar, ordenar y enorme están pendientes; frágil también; las de Recordamos no entran */
  const rec = ids(recordamosHoy(pal, d(19), P)); assert.strictEqual(rec.length, 3);
  const ju = ids(jugamosHoy(pal, d(19), { rec }, P)); assert.strictEqual(ju.length, 2); ju.forEach(id => assert(!rec.includes(id)));
  /* las más valoradas pasan detrás: curioso (sin valoraciones, presentada antes) gana a comparar (con 3) */
  const q = {}; presentar(q, ['observar', 'comparar', 'curioso'], d(16));
  q.comparar = valorar(valorar(valorar(q.comparar, 'sentido', 'mitad', d(17)), 'sentido', 'mitad', d(18)), 'ejemplo', 'mitad', d(19));
  q.observar = valorar(q.observar, 'sentido', 'mitad', d(17)); /* observar: 1 valoración; ya no está pendiente tras la valoración y la mitad la deja para el día siguiente */
  const j2 = ids(jugamosHoy({ ...q, observar: { ...q.observar, prox: d(30) }, comparar: { ...q.comparar, prox: d(30) }, curioso: { ...q.curioso, prox: d(30) } }, d(19), {}, P));
  igual(j2, ['curioso', 'observar']);
  /* completa con pendientes de otras semanas: solo hay 1 de la semana en curso (2) y 1 pendiente de la 1 */
  const r = {}; presentar(r, ['observar'], d(1)); presentar(r, ['senalar'], d(17)); r.senalar = { ...r.senalar, prox: d(40) };
  igual(ids(jugamosHoy(r, d(18), {}, P)), ['senalar', 'observar']);
  /* si no hay, se juega con las que haya */
  const u = {}; presentar(u, ['senalar'], d(17)); igual(ids(jugamosHoy(u, d(18), {}, P)), ['senalar']);
});
t('48. sesión interrumpida: tras valorar 1 de 3 en «Recordamos», al montar otra vez no vuelve a salir la valorada (H8)', () => {
  const pal = {}; presentar(pal, ['observar', 'comparar', 'ordenar'], d(16));
  const antes = ids(recordamosHoy(pal, d(18), P)); assert.strictEqual(antes.length, 3);
  const q = colaTareas(recordamosHoy(pal, d(18), P), id => pal[id], P.filter(p => pal[p.id]), d(18))[0];
  pal[q.id] = valorar(pal[q.id], q.t, 'todos', d(18));
  const despues = ids(recordamosHoy(pal, d(18), P)); assert.strictEqual(despues.length, 2); assert(!despues.includes(q.id));
  /* y «Jugamos» tampoco la coge: ya se valoró hoy */
  assert(!ids(jugamosHoy(pal, d(18), {}, P)).includes(q.id));
});
t('49. segunda sesión el mismo día: sin palabra nueva y sin las ya valoradas hoy (H7)', () => {
  const pal = {}; sesion(pal, d(16)); sesion(pal, d(17)); const s = sesion(pal, d(17));
  assert.strictEqual(s.nu.length, 0, 'ya van 2 nuevas hoy'); assert.strictEqual(s.rec.length, 0);
  const pal2 = {}; sesion(pal2, d(16)); sesion(pal2, d(17));
  const hechasHoy = Object.keys(pal2).filter(id => pal2[id].val.some(x => x.d === d(17)));
  const s2 = { rec: ids(recordamosHoy(pal2, d(17), P)), ju: ids(jugamosHoy(pal2, d(17), {}, P)) };
  s2.rec.concat(s2.ju).forEach(id => assert(!hechasHoy.includes(id), id));
});
t('52. Familias: con los mismos datos sale la misma sesión que en Docente (H10)', () => {
  /* las funciones no miran el tipo de perfil: la misma entrada da la misma salida */
  const a = {}, b = {}; for (let i = 0; i < 6; i++) { const dia = d(16 + i); igual(sesion(a, dia), sesion(b, dia)); }
  igual(a, b);
});
t('53. simulación: 10 semanas de lunes a viernes, 2 nuevas por sesión → las 60 en «La usamos»; ≤3 en «Recordamos», ≤6 nuevas por semana, ≤20 pendientes', () => {
  const pal = {}; let maxPend = 0, dia = d(16);
  for (let sem = 0; sem < 10; sem++) {
    let nuevasSem = 0;
    for (let k = 0; k < 5; k++) {
      const s = sesion(pal, sumarDias(dia, sem * 7 + k)); assert(s.rec.length <= 3); nuevasSem += s.nu.length;
      maxPend = Math.max(maxPend, Object.keys(pal).filter(id => estaPendiente(pal[id], sumarDias(dia, sem * 7 + k + 1))).length);
    }
    assert(nuevasSem <= 6, 'semana ' + sem + ': ' + nuevasSem);
  }
  assert.strictEqual(Object.keys(pal).length, 60);
  assert(maxPend <= 20, 'pendientes: ' + maxPend);
  for (let k = 0; k < 40; k++) sesion(pal, sumarDias(dia, 70 + k + 2 * Math.floor(k / 5))); /* unas semanas más para que lleguen al final */
  const nivel = Object.values(pal).map(r => r.e); assert(nivel.every(e => e === 4), 'pasos: ' + JSON.stringify(nivel.reduce((o, e) => (o[e] = (o[e] | 0) + 1, o), {})));
});

t('50. segundo significado: `ordenar` en «Recordamos» en el paso 3 lo enseña una vez; la siguiente vez ya no; en el paso 2 o sin `otro` no sale (H6)', () => {
  const f = P.find(p => p.id === 'ordenar'), sin = P.find(p => !p.otro);
  assert(f && f.otro, 'ordenar debe tener otro');
  const a3 = { ...palabraNueva(), e: 3 };
  assert.strictEqual(muestraOtro(a3, f), true);
  assert.strictEqual(muestraOtro(conOtroVisto(a3), f), false);
  assert.strictEqual(muestraOtro({ ...palabraNueva(), e: 2 }, f), false);
  assert.strictEqual(muestraOtro({ ...palabraNueva(), e: 4 }, sin), false);
  assert.strictEqual(a3.ov, false, 'no cambia el registro original');
  assert.strictEqual(conOtroVisto(a3).e, 3, 'no cuenta para la escala');
});
t('50b. cierre: solo salen las que han subido de paso hoy (no las nuevas ni las que bajan) (H5)', () => {
  const pal = { observar: { ...palabraNueva(), e: 3 }, comparar: { ...palabraNueva(), e: 2 }, ordenar: { ...palabraNueva(), e: 2 }, enorme: { ...palabraNueva(), e: 2 } };
  const e0 = { observar: 2, comparar: 2, ordenar: 3, enorme: 1 };
  assert.deepStrictEqual(ids(subieronHoy(pal, e0, ['enorme'], P)), ['observar']);
  assert.deepStrictEqual(ids(subieronHoy(pal, e0, [], P)), ['observar', 'enorme']);
  assert.deepStrictEqual(ids(subieronHoy({}, {}, [], P)), []);
});

console.log(n + ' pruebas correctas');
