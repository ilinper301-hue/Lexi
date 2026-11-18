/* ===== Escala (reglas E1-E11) y cajas de repaso (R1-R9): funciones PURAS, sin pantalla y sin reloj =====
   Todas reciben el día («AAAA-MM-DD», hora local) como dato y devuelven un registro nuevo; no tocan nada guardado.
   Registro de una palabra (datos v4, docs/pedagogia.md apartado 13):
   { e: paso 1-4, pres: día de la presentación, val: historial [{d,t,v}], dA / dB: días buenos vigentes de entender / de usar,
     cam: día del último cambio de paso, mal: día del último «pocos», caja: 1-5, prox: día en que vuelve ('' = descansa),
     u: {tarea: veces hecha}, ut: última tarea hecha, ov: segundo significado ya enseñado }
   Las reglas de la tarea y la frase que toca (T1-T7) son del paso 3.2: aquí solo se cuenta lo que se ha hecho (u, ut). */
const MAX_VAL = 30, MAX_DIAS_BUENOS = 4, DIAS_CAJA = [0, 1, 3, 7, 15, 30], DIAS_USAR = 7, MAX_RECORDAMOS = 3;
const TAREAS_ENTENDER = ['sentido', 'ejemplo', 'elige', 'gesto'], TAREAS_USAR = ['acaba', 'habla', 'relaciona', 'familia'];
const TAREAS_VAL = [...TAREAS_ENTENDER, ...TAREAS_USAR], TAREAS_SIGNIFICADO = ['sentido', 'ejemplo', 'elige'];
const VALORES = ['todos', 'mitad', 'pocos'];

const fechaOK = d => /^\d{4}-\d\d-\d\d$/.test(d || '') && !isNaN(Date.parse(d + 'T00:00:00Z'));
const diaNum = d => Math.round(Date.parse(d + 'T00:00:00Z') / 86400000);
/** Días de calendario entre dos fechas (b - a). */
const diasEntre = (a, b) => diaNum(b) - diaNum(a);
const sumarDias = (d, n) => new Date((diaNum(d) + n) * 86400000).toISOString().slice(0, 10);

function palabraNueva() { return { e: 1, pres: '', val: [], dA: [], dB: [], cam: '', mal: '', caja: 1, prox: '', u: {}, ut: '', ov: false }; }
const copiaPal = a => ({ ...palabraNueva(), ...a, val: [...(a.val || [])], dA: [...(a.dA || [])], dB: [...(a.dB || [])], u: { ...(a.u || {}) } });

/** E1 · Presentación completa: de «Nueva» a «La conocemos», caja 1 y vuelve al día siguiente. Presentarla otra vez no cambia nada. */
function presentarRegistro(a, dia) {
  a = a || palabraNueva();
  if (a.e >= 2 && a.pres) return a;
  const r = copiaPal(a); r.e = Math.max(2, r.e); r.pres = r.pres || dia;
  if (!r.prox && !(r.e === 4 && r.caja === 5)) { r.caja = 1; r.prox = sumarDias(r.pres, 1); }
  return r;
}
/** R2 · Pendiente: presentada y con fecha de vuelta de hoy o anterior. Si descansa (prox '') no está pendiente. */
const estaPendiente = (a, dia) => !!a && a.e >= 2 && fechaOK(a.prox) && a.prox <= dia;

/** Anota que se ha hecho una tarea con la palabra, se valore o no (R7, T7): solo avanza la cuenta y la última tarea. */
function tareaHecha(a, tarea) {
  if (!a || !TAREAS_VAL.includes(tarea)) return a;
  const r = copiaPal(a); r.u[tarea] = (r.u[tarea] | 0) + 1; r.ut = tarea; return r;
}
/** G8 · ¿Ese día bueno de entender viene de una tarea de significado (y no solo de `gesto`)? Se mira en el historial. */
const diaConSignificado = (a, d) => a.val.some(x => x.d === d && x.v === 'todos' && TAREAS_SIGNIFICADO.includes(x.t));

/** El docente valora una tarea hecha con la palabra. Aplica E2-E8 y R3-R6. Devuelve el registro nuevo (o el mismo si no cuenta nada). */
function valorarPalabra(a, tarea, valor, dia) {
  if (!a || a.e < 2 || !fechaOK(a.pres) || !fechaOK(dia) || !TAREAS_VAL.includes(tarea) || !VALORES.includes(valor)) return a || palabraNueva();
  if (dia < a.pres) return a; /* reloj mal puesto: no cuenta */
  const r = tareaHecha(a, tarea);
  r.val = [...r.val, { d: dia, t: tarea, v: valor }].slice(-MAX_VAL);
  if (dia === a.pres) return r; /* E2: el día de la presentación es práctica */
  const entender = TAREAS_ENTENDER.includes(tarea), pend = estaPendiente(r, dia), puedeCambiar = r.cam !== dia;
  if (valor === 'todos') {
    if (r.mal !== dia) { /* E3 */
      const lista = entender ? 'dA' : 'dB';
      if (entender ? r.e === 2 : (r.e === 2 || r.e === 3)) r[lista] = [...new Set([...r[lista], dia])].slice(-MAX_DIAS_BUENOS);
      if (puedeCambiar) {
        if (entender && r.e === 2 && r.dA.length >= 2 && r.dA.some(d => diaConSignificado(r, d))) { r.e = 3; r.dA = []; r.cam = dia; } /* E4 + G8 */
        else if (!entender && r.e === 3 && r.dB.length >= 2 && diasEntre(r.pres, dia) >= DIAS_USAR) { r.e = 4; r.dB = []; r.cam = dia; } /* E5 */
      }
    }
    if (pend) { /* R3 y R6 */
      if (r.e === 4 && r.caja === 5) r.prox = '';
      else { r.caja = Math.min(5, r.caja + 1); r.prox = sumarDias(dia, DIAS_CAJA[r.caja]); }
    }
  } else if (valor === 'mitad') { /* E7 y R4 */
    r.caja = Math.max(1, r.caja - 1); r.prox = sumarDias(dia, 1);
  } else { /* E8 y R5 */
    r.mal = dia; r.caja = 1; r.prox = sumarDias(dia, 1);
    if (entender) { r.dA = []; r.dB = []; if (r.e > 2 && puedeCambiar) { r.e--; r.cam = dia; } }
    else { r.dB = []; if (r.e === 4 && puedeCambiar) { r.e = 3; r.cam = dia; } }
  }
  return r;
}

/** R9 · Palabras para «Recordamos»: presentadas antes de hoy y pendientes; las más atrasadas primero; si empatan, paso más bajo,
    caja más baja y orden del paquete (`orden`: lista de ids). `pal` = {id: registro}. Como mucho `max`. No cambia nada. */
function pendientes(pal, dia, orden = [], max = MAX_RECORDAMOS) {
  const pos = id => { const i = orden.indexOf(id); return i < 0 ? 1e9 : i; };
  return Object.keys(pal || {}).filter(id => estaPendiente(pal[id], dia) && pal[id].pres < dia)
    .sort((x, y) => (pal[x].prox < pal[y].prox ? -1 : pal[x].prox > pal[y].prox ? 1 : 0) || pal[x].e - pal[y].e || pal[x].caja - pal[y].caja || pos(x) - pos(y) || (x < y ? -1 : 1))
    .slice(0, max);
}

/* ===== «La hemos encontrado» (reglas EN1-EN10 de docs/aula.md): lo que la clase oye, ve o dice fuera de la sesión =====
   EN7: por palabra, tres cuentas (o = oída, v = vista, d = dicha) y el último día, en `enc`; una palabra sin `enc` vale cero.
   EN5: no mueve nada: ni el paso de la escala, ni las cajas, ni las fechas de repaso, ni los días buenos. Funciones PURAS. */
const ENC_COMO = ['o', 'v', 'd'], ENC_NOMBRE = { o: 'oída', v: 'vista', d: 'dicha' }, ENC_MAX = 100000;
/** Las tres cuentas y el último día, con ceros si la palabra nunca se ha apuntado. */
const encDe = a => { const e = (a && a.enc) || {}, n = x => (Number.isFinite(Number(x)) && Number(x) > 0 ? Math.min(Math.floor(Number(x)), ENC_MAX) : 0); return { o: n(e.o), v: n(e.v), d: n(e.d), ult: fechaOK(e.ult) ? e.ult : '' }; };
const encTotal = a => { const e = encDe(a); return e.o + e.v + e.d; };
/** EN8 · «La hemos encontrado 3 veces: 2 oída · 1 dicha»; '' si nunca. */
function encTexto(a) {
  const e = encDe(a), t = encTotal(a); if (!t) return '';
  return `La hemos encontrado ${t} ${t === 1 ? 'vez' : 'veces'}: ${ENC_COMO.filter(k => e[k]).map(k => `${e[k]} ${ENC_NOMBRE[k]}`).join(' · ')}`;
}
/** EN2, EN7 · Apunta una vez («o», «v» o «d») y el día. Una palabra sin presentar (EN2) o un modo raro no cambian nada. Devuelve un registro nuevo. */
function conEncontrada(a, como, dia) {
  if (!a || a.e < 2 || !ENC_COMO.includes(como) || !fechaOK(dia)) return a || palabraNueva();
  const e = encDe(a); e[como] = Math.min(e[como] + 1, ENC_MAX); e.ult = dia;
  return { ...a, enc: e };
}
