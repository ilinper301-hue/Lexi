/* ===== Botón «Hoy»: qué entra en cada parte de la sesión (reglas H1-H4 de docs/pedagogia.md, apartado 10) =====
   Funciones PURAS: reciben el registro de palabras `pal` ({id: registro}), el día y las fichas (`palabras`), y no cambian nada.
   Cada parte se monta al entrar en ella (así «Jugamos» ya ve las palabras que se acaban de presentar). */
const MAX_SEMANA = 6;
const lunesDe = d => sumarDias(d, -((new Date(diaNum(d) * 864e5).getUTCDay() + 6) % 7));
const regDe = (pal, id) => (pal && pal[id]) || palabraNueva();
const presentadaEn = (pal, id) => regDe(pal, id).e >= 2;
const fichaDe = (palabras, id) => palabras.find(p => p.id === id);

/** H3 · Cuántas palabras nuevas caben hoy: el ajuste (1 o 2) menos las presentadas hoy, y nunca más de 6 en la misma semana natural (lunes a domingo). */
function cupoNuevas(pal, dia, ajuste = 2) {
  const ids = Object.keys(pal || {}).filter(id => pal[id].e >= 2 && fechaOK(pal[id].pres));
  const hoyN = ids.filter(id => pal[id].pres === dia).length, semN = ids.filter(id => lunesDe(pal[id].pres) === lunesDe(dia)).length;
  return Math.max(0, Math.min((ajuste === 1 ? 1 : 2) - hoyN, MAX_SEMANA - semN));
}
/** H3 · Las siguientes palabras sin presentar, por semana y en el orden de la ficha. Dos con la misma marca `sep` no van el mismo día
    (tampoco si una ya se presentó hoy): la segunda es la siguiente que no choque. Devuelve fichas. */
function nuevasPorPresentar(pal, dia, ajuste = 2, palabras = PALABRAS) {
  const cupo = cupoNuevas(pal, dia, ajuste), res = [];
  const usados = new Set(palabras.filter(p => p.sep && presentadaEn(pal, p.id) && regDe(pal, p.id).pres === dia).map(p => p.sep));
  for (const id of ordenPaquete(palabras)) {
    if (res.length >= cupo) break;
    const p = fichaDe(palabras, id);
    if (presentadaEn(pal, id) || (p.sep && usados.has(p.sep))) continue;
    res.push(p); if (p.sep) usados.add(p.sep);
  }
  return res;
}
/** H2 · «Recordamos»: las de la regla R9 (como mucho 3). Devuelve fichas. */
function recordamosHoy(pal, dia, palabras = PALABRAS) {
  return pendientes(pal, dia, ordenPaquete(palabras)).map(id => fichaDe(palabras, id)).filter(Boolean);
}
/** H4 · «Jugamos»: 2 palabras ya presentadas de la semana en curso (la de la última presentada) que hoy no hayan salido en «Recordamos» ni se hayan valorado ya hoy
    (salvo las nuevas de esta sesión, `nuevas`). Primero las pendientes, luego las presentadas antes de hoy, luego las menos valoradas y, por último, el orden del paquete.
    Si no hay 2, se completa con pendientes de otras semanas; si aun así no hay, se juega con las que haya. Devuelve fichas. */
function jugamosHoy(pal, dia, { rec = [], nuevas = [] } = {}, palabras = PALABRAS, n = 2) {
  const libres = palabras.filter(p => presentadaEn(pal, p.id) && !rec.includes(p.id) && (nuevas.includes(p.id) || !regDe(pal, p.id).val.some(x => x.d === dia)));
  const ultima = palabras.filter(p => presentadaEn(pal, p.id)).sort((x, y) => (regDe(pal, y.id).pres > regDe(pal, x.id).pres ? 1 : regDe(pal, y.id).pres < regDe(pal, x.id).pres ? -1 : 0) || lugarPaquete(y) - lugarPaquete(x))[0];
  if (!ultima) return [];
  const clave = p => { const a = regDe(pal, p.id); return [estaPendiente(a, dia) ? 0 : 1, a.pres < dia ? 0 : 1, a.val.length, lugarPaquete(p)]; };
  const orden = (x, y) => { const a = clave(x), b = clave(y); for (let i = 0; i < 4; i++) if (a[i] !== b[i]) return a[i] - b[i]; return 0; };
  const res = libres.filter(p => p.semana === ultima.semana).sort(orden).slice(0, n);
  if (res.length < n) res.push(...libres.filter(p => p.semana !== ultima.semana && estaPendiente(regDe(pal, p.id), dia)).sort(orden).slice(0, n - res.length));
  return res;
}
/** Monta la cola de tareas de una parte: a cada ficha, la tarea y la frase que tocan (T1-T7), con tipos distintos entre sí (T4).
    `reg(id)` da el registro de la palabra y `pres` son las fichas presentadas (`elige` y `gesto` sacan de ahí sus otras palabras). */
function colaTareas(fichas, reg, pres, dia) {
  const evitar = [], cola = [];
  fichas.forEach(p => {
    const a = reg(p.id), t = elegirTarea(a, p, dia, { otras: pres.filter(x => x.id !== p.id).length, evitar });
    if (!t) return;
    const k = a.u[t] | 0, g = t === 'gesto' ? formaGesto(p, pres, k) : null; /* T7 y G2: la frase y la forma salen de k */
    evitar.push(t);
    cola.push({ id: p.id, t, k, otras: t === 'elige' ? distractoresElige(p, pres, k).map(x => x.id) : g ? g.otras.map(x => x.id) : [], forma: g ? g.forma : 0, pos: g ? g.pos : 0, rev: false });
  });
  return cola;
}
