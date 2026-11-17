/* Elección de tarea (T1-T6) y de frase (T7), docs/pedagogia.md apartado 5 y tests 32-39 del apartado 12.
   Funciones puras con el día como dato; presentación de referencia: lunes 16-11-2026. Uso: node tests/test_eleccion.js
   (El doc pone estos tests en test_tareas.js; aquí están aparte. Lo que toca a la pantalla de «Jugamos» está en test_tareas.js.) */
const fs = require('fs'), vm = require('vm'), path = require('path'), assert = require('assert');
const R = path.join(__dirname, '..', 'src', 'js');
const arch = ['00-util.js', '05-palabras.js', ...fs.readdirSync(path.join(R, 'palabras')).sort().map(f => 'palabras/' + f), '30-escala-logica.js', '32-eleccion.js'];
const codigo = arch.map(f => fs.readFileSync(path.join(R, f), 'utf8')).join('\n');
const A = vm.runInContext(codigo + '\n;({presentarRegistro,valorarPalabra,tareaHecha,palabraNueva,sumarDias,PALABRAS,palabraPorId,TAREAS_ENTENDER,TAREAS_USAR,elegirTarea,grupoQueToca,grupoDe,fraseDe,tareasDisponibles,distractoresElige,ordenPaquete})', vm.createContext({ console }));
const { presentarRegistro, valorarPalabra: valorar, tareaHecha, palabraNueva, sumarDias, elegirTarea, grupoQueToca, grupoDe, fraseDe, tareasDisponibles, distractoresElige, ordenPaquete } = A;
const d = n => sumarDias('2026-11-16', n - 16), L16 = d(16);
const pres = () => presentarRegistro(palabraNueva(), L16);
const ficha = id => JSON.parse(JSON.stringify(A.palabraPorId(id)));
const FRAGIL = ficha('fragil');
const ENT = A.TAREAS_ENTENDER, USA = A.TAREAS_USAR;
/** Palabra presentada el 16, en el paso y con las tareas hechas que se pidan (`u`) y la última (`ut`). */
const reg = (e, u = {}, ut = '', extra = {}) => ({ ...pres(), e, u, ut, ...extra });
/** Mismo generador pseudoaleatorio de siempre, para que el test sea repetible. */
let semilla = 12345; const azar = () => (semilla = (semilla * 1103515245 + 12345) % 2147483648) / 2147483648;
const igual = (x, y) => assert.deepStrictEqual(JSON.parse(JSON.stringify(x)), JSON.parse(JSON.stringify(y)));
const pick = l => l[Math.floor(azar() * l.length)];

let n = 0; const t = (nombre, f) => { f(); n++; console.log('  ok ' + nombre); };

t('32. grupo que toca: paso 2 entender; paso 3 usar; paso 4 alterna; tras «pocos» entender (T1)', () => {
  for (const ut of ['', 'sentido', 'acaba', 'habla']) {
    assert.strictEqual(grupoQueToca(reg(2, {}, ut), d(17)), 'entender');
    assert.strictEqual(grupoQueToca(reg(3, {}, ut), d(17)), 'usar');
    assert(ENT.includes(elegirTarea(reg(2, {}, ut), FRAGIL, d(17), { otras: 2 })));
    assert(USA.includes(elegirTarea(reg(3, {}, ut), FRAGIL, d(17), { otras: 2 })));
  }
  assert.strictEqual(grupoQueToca(reg(4, {}, ''), d(30)), 'usar'); /* sin última tarea: usar */
  assert.strictEqual(grupoQueToca(reg(4, { sentido: 1 }, 'sentido'), d(30)), 'usar');
  assert.strictEqual(grupoQueToca(reg(4, { acaba: 1 }, 'acaba'), d(30)), 'entender');
  assert(USA.includes(elegirTarea(reg(4, { ejemplo: 1 }, 'ejemplo'), FRAGIL, d(30), { otras: 2 })));
  assert(ENT.includes(elegirTarea(reg(4, { habla: 1 }, 'habla'), FRAGIL, d(30), { otras: 2 })));
  /* tras «pocos» (la última valoración), entender aunque esté en el paso 3 o 4 */
  for (const e of [3, 4]) {
    const a = valorar(reg(e, {}, '', { prox: d(20) }), e === 3 ? 'acaba' : 'sentido', 'pocos', d(20));
    assert.strictEqual(a.val[a.val.length - 1].v, 'pocos');
    assert.strictEqual(grupoQueToca(a, d(21)), 'entender');
    assert(ENT.includes(elegirTarea(a, FRAGIL, d(21), { otras: 2 })));
  }
  /* un «casi todos» posterior quita ese efecto */
  let a = valorar(reg(3, {}, '', { prox: d(20) }), 'acaba', 'pocos', d(20)); a = valorar(a, 'sentido', 'todos', d(21));
  assert.strictEqual(grupoQueToca(a, d(22)), 'usar');
});

t('33. si hoy ya es día bueno del grupo que toca, sale el otro (T1c)', () => {
  let a = valorar(pres(), 'ejemplo', 'todos', d(17)); /* paso 2, día bueno de entender hoy */
  assert.strictEqual(a.e, 2); igual(a.dA, [d(17)]);
  assert.strictEqual(grupoQueToca(a, d(17)), 'usar'); assert(USA.includes(elegirTarea(a, FRAGIL, d(17), { otras: 2 })));
  assert.strictEqual(grupoQueToca(a, d(18)), 'entender'); /* mañana vuelve a tocar entender */
  a = valorar(a, 'sentido', 'todos', d(18)); assert.strictEqual(a.e, 3);
  a = valorar(a, 'acaba', 'todos', d(19)); /* paso 3, día bueno de usar hoy */
  assert.strictEqual(a.e, 3); igual(a.dB, [d(19)]);
  assert.strictEqual(grupoQueToca(a, d(19)), 'entender'); assert(ENT.includes(elegirTarea(a, FRAGIL, d(19), { otras: 2 })));
  assert.strictEqual(grupoQueToca(a, d(20)), 'usar');
});

t('34. nunca la misma tarea que la última de esa palabra, valorada o no (300 pasos al azar) (T3)', () => {
  let a = pres(), dia = d(17), pasos = 0;
  while (pasos < 300) {
    const ut = a.ut, tarea = elegirTarea(a, FRAGIL, dia, { otras: pick([0, 1, 2, 3]), evitar: pick([[], ['sentido'], ['acaba', 'habla'], ['ejemplo']]) });
    assert(tarea, 'siempre hay alguna tarea con la ficha completa'); if (ut) assert.notStrictEqual(tarea, ut, `paso ${pasos}: repite ${ut}`);
    a = azar() < 0.3 ? tareaHecha(a, tarea) : valorar(a, tarea, pick(['todos', 'todos', 'mitad', 'pocos']), dia);
    if (azar() < 0.5) dia = sumarDias(dia, 1 + Math.floor(azar() * 3)); pasos++;
  }
});

t('35. rotación: paso 2 sentido, ejemplo, elige, sentido…; paso 3 acaba, habla, acaba… (T5)', () => {
  let a = reg(2), v = [];
  for (let i = 0; i < 7; i++) { const x = elegirTarea(a, FRAGIL, d(17), { otras: 2 }); v.push(x); a = tareaHecha(a, x); }
  igual(v, ['sentido', 'ejemplo', 'elige', 'sentido', 'ejemplo', 'elige', 'sentido']);
  a = reg(3); v = [];
  for (let i = 0; i < 6; i++) { const x = elegirTarea(a, FRAGIL, d(17), { otras: 2 }); v.push(x); a = tareaHecha(a, x); }
  igual(v, ['acaba', 'habla', 'acaba', 'habla', 'acaba', 'habla']);
  /* gana la que menos veces se ha hecho; a igualdad, el orden fijo */
  assert.strictEqual(elegirTarea(reg(2, { sentido: 3, ejemplo: 1, elige: 2 }, 'elige'), FRAGIL, d(17), { otras: 2 }), 'ejemplo');
  assert.strictEqual(elegirTarea(reg(2, { sentido: 1, ejemplo: 1, elige: 1 }, 'sentido'), FRAGIL, d(17), { otras: 2 }), 'ejemplo');
  assert.strictEqual(elegirTarea(reg(3, { acaba: 2, habla: 1 }, ''), FRAGIL, d(17), { otras: 2 }), 'habla');
});

t('36. «elige» no sale si no hay otras 2 palabras presentadas y sus opciones son siempre presentadas (T2)', () => {
  assert(!tareasDisponibles(FRAGIL, 0).includes('elige')); assert(!tareasDisponibles(FRAGIL, 1).includes('elige')); assert(tareasDisponibles(FRAGIL, 2).includes('elige'));
  for (const otras of [0, 1]) { let a = reg(2); for (let i = 0; i < 30; i++) { const x = elegirTarea(a, FRAGIL, d(17), { otras }); assert.notStrictEqual(x, 'elige'); a = tareaHecha(a, x); } }
  const F = (id, semana, orden) => ({ id, semana, orden });
  const p = F('p', 2, 3), todas = [F('a', 1, 1), F('b', 1, 2), F('c', 2, 1), F('d', 2, 2), F('e', 2, 4), F('p', 2, 3), F('f', 3, 1)];
  const ids = (pr, k = 0) => distractoresElige(p, pr, k).map(x => x.id);
  for (let k = 0; k < 8; k++) { const r = ids(todas.filter(x => x.id !== 'f'), k); assert.strictEqual(r.length, 2); r.forEach(id => assert(['c', 'd', 'e'].includes(id), 'primero de su semana: ' + id)); }
  assert.strictEqual(new Set([0, 1, 2].map(k => ids(todas, k).join())).size, 3, 'las opciones cambian de una vuelta a otra');
  assert.strictEqual(ids([F('p', 2, 3), F('d', 2, 2), F('b', 1, 2), F('a', 1, 1)])[0], 'd'); /* si faltan, de semanas anteriores */
  assert(['a', 'b'].includes(ids([F('p', 2, 3), F('d', 2, 2), F('b', 1, 2), F('a', 1, 1)])[1]));
  igual(ids([F('p', 2, 3), F('d', 2, 2)]), ['d']); /* con solo 1 no se inventa otra: elige no sale (arriba) */
  igual(ids([F('p', 2, 3)]), []);
  assert(!ids(todas).includes('p'));
});

t('37. «Jugamos» pone 2 tareas de tipo distinto; «Recordamos» no repite el tipo de la anterior si hay otra del grupo (T4)', () => {
  let casos = 0;
  for (let i = 0; i < 600; i++) {
    const nr = () => reg(pick([2, 3, 4]), { sentido: Math.floor(azar() * 4), ejemplo: Math.floor(azar() * 4), elige: Math.floor(azar() * 4), acaba: Math.floor(azar() * 4), habla: Math.floor(azar() * 4) },
      pick(['', 'sentido', 'ejemplo', 'elige', 'acaba', 'habla']));
    const otras = pick([0, 2, 3]), ev = [];
    for (let k = 0; k < 3; k++) {
      const a = nr(), dia = d(17), x = elegirTarea(a, FRAGIL, dia, { otras, evitar: ev });
      if (ev.length) { /* ¿había otra del mismo grupo que ni repitiera tipo ni la última tarea de esa palabra? */
        const g = grupoQueToca(a, dia), otraDelGrupo = tareasDisponibles(FRAGIL, otras).some(c => grupoDe(c) === g && c !== a.ut && !ev.includes(c));
        if (otraDelGrupo) { assert(!ev.includes(x), `repite el tipo ${x}`); assert.strictEqual(grupoDe(x), g); casos++; }
      }
      ev.push(x);
    }
  }
  assert(casos > 300);
});

t('38. frases: 12 veces `sentido` recorre las 4 sin repetir seguidas; `ejemplo` alterna sí y no; `acaba` alterna sus 2 (T7)', () => {
  let a = reg(2), vistas = [];
  for (let i = 0; i < 12; i++) { const k = a.u.sentido | 0; vistas.push(fraseDe(FRAGIL, 'sentido', k).t); a = tareaHecha(a, 'sentido'); }
  assert.strictEqual(new Set(vistas).size, 4); vistas.forEach((v, i) => { if (i) assert.notStrictEqual(v, vistas[i - 1]); });
  igual(vistas.slice(0, 4), FRAGIL.sentido.map(s => s.t)); igual(vistas.slice(4, 8), vistas.slice(0, 4)); /* al acabar se vuelve a empezar */
  a = reg(2); vistas = [];
  for (let i = 0; i < 12; i++) { const e = fraseDe(FRAGIL, 'ejemplo', a.u.ejemplo | 0); vistas.push(e); a = tareaHecha(a, 'ejemplo'); }
  vistas.forEach((e, i) => assert.strictEqual(e.ok, i % 2 === 0, `ejemplo ${i}: sí y no alternados`));
  assert.strictEqual(new Set(vistas.slice(0, 6).map(e => e.t)).size, 6); igual(vistas.slice(6).map(e => e.t), vistas.slice(0, 6).map(e => e.t));
  a = reg(3); vistas = [];
  for (let i = 0; i < 6; i++) { vistas.push(fraseDe(FRAGIL, 'acaba', a.u.acaba | 0)); a = tareaHecha(a, 'acaba'); }
  igual(vistas, [0, 1, 0, 1, 0, 1].map(i => FRAGIL.acaba[i]));
  assert.strictEqual(fraseDe(FRAGIL, 'habla', 5), FRAGIL.habla);
  /* sin valorar también avanza la cuenta (R7, T7): la siguiente vez sale otra frase */
  const sin = tareaHecha(reg(2), 'sentido'); assert.notStrictEqual(fraseDe(FRAGIL, 'sentido', sin.u.sentido), fraseDe(FRAGIL, 'sentido', 0));
  /* y con todas las fichas de verdad */
  for (const p of A.PALABRAS) { assert.strictEqual(new Set([0, 1, 2, 3].map(k => fraseDe(p, 'sentido', k).t)).size, 4); assert.strictEqual(new Set([0, 1, 2, 3, 4, 5].map(k => fraseDe(p, 'ejemplo', k).t)).size, 6); }
});

t('39. si del grupo que toca solo queda la última tarea hecha, se coge una del otro grupo; antes se olvida T4 (T6, T3)', () => {
  const solo = JSON.parse(JSON.stringify(FRAGIL)); solo.ejemplos = []; /* entender sin `ejemplo` y sin `elige` (otras 0): solo `sentido` */
  const a = reg(2, { sentido: 1 }, 'sentido');
  igual(tareasDisponibles(solo, 0).filter(x => ENT.includes(x)), ['sentido']);
  const x = elegirTarea(a, solo, d(17), { otras: 0 }); assert(USA.includes(x), 'sale una de usar: ' + x);
  /* T6: antes de dejar el grupo se olvida la variedad de T4 */
  assert.strictEqual(elegirTarea(reg(2, { sentido: 1 }, 'sentido'), FRAGIL, d(17), { otras: 0, evitar: ['ejemplo'] }), 'ejemplo');
  /* T4 sí se respeta mientras haya otra opción en el grupo */
  assert.strictEqual(elegirTarea(reg(3, {}, ''), FRAGIL, d(17), { otras: 0, evitar: ['acaba'] }), 'habla');
  /* en el otro grupo también se prefiere variar */
  assert.strictEqual(elegirTarea(a, solo, d(17), { otras: 0, evitar: ['acaba'] }), 'habla');
  /* T3 no se rompe nunca: si lo único posible es la última tarea, no hay tarea */
  const unica = { ...FRAGIL, ejemplos: [], acaba: [], habla: '' };
  assert.strictEqual(elegirTarea(reg(2, { sentido: 1 }, 'sentido'), unica, d(17), { otras: 0 }), null);
});

t('orden del paquete: el de docs/semana-01.md, no el alfabético', () => {
  igual(ordenPaquete().filter(id => A.palabraPorId(id).semana === 1), ['observar', 'comparar', 'ordenar', 'enorme', 'fragil', 'curioso']);
  igual(ordenPaquete([{ id: 'x', semana: 2, orden: 1 }, { id: 'y', semana: 1, orden: 6 }, { id: 'z', semana: 1, orden: 2 }]), ['z', 'y', 'x']);
});

console.log(n + ' pruebas correctas');
