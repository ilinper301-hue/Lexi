/* ===== Qué tarea toca (T1-T6) y qué frase sale (T7): funciones PURAS, sin pantalla y sin reloj =====
   Reglas en docs/pedagogia.md, apartado 5. Reciben el registro de la palabra (ver 30-escala-logica.js), su ficha y el día; no cambian nada.
   Lo que se ha hecho con la palabra sale de `u` (veces de cada tarea) y `ut` (la última), que apunta tareaHecha aunque no se valore. */
const ORDEN_TAREAS = [...TAREAS_ENTENDER, ...TAREAS_USAR]; /* T5: desempate cuando dos tareas se han hecho las mismas veces */
const grupoDe = t => (TAREAS_ENTENDER.includes(t) ? 'entender' : 'usar');
const otroGrupo = g => (g === 'entender' ? 'usar' : 'entender');
/** T2 · Tareas programadas y qué necesitan de la ficha. Las que aún no tienen pantalla (gesto, relaciona, familia) se añaden aquí al programarlas.
    `otras` = cuántas palabras presentadas, distintas de ésta, hay para ponerle a `elige` sus opciones. */
const CONTENIDO_TAREA = {
  sentido: p => !!(p.sentido && p.sentido.length), ejemplo: p => !!(p.ejemplos && p.ejemplos.length),
  elige: (p, otras) => otras >= 2, gesto: p => !!p.gesto, acaba: p => !!(p.acaba && p.acaba.length), habla: p => !!p.habla
};
const tareasDisponibles = (p, otras = 0) => ORDEN_TAREAS.filter(t => CONTENIDO_TAREA[t] && CONTENIDO_TAREA[t](p, otras));

/** T1 · Grupo de tareas que toca hoy: «entender» o «usar».
    (a) Si la última valoración fue «pocos»: entender. (b) Si no: paso 2, entender; paso 3, usar; paso 4, el contrario al de su última tarea
    (si no hay, usar). (c) Si hoy ya es día bueno de ese grupo, el otro. */
function grupoQueToca(a, dia) {
  const val = a.val || [], pocos = val.length > 0 && val[val.length - 1].v === 'pocos';
  let g;
  if (pocos || a.e <= 2) g = 'entender';
  else if (a.e === 3) g = 'usar';
  else g = a.ut ? otroGrupo(grupoDe(a.ut)) : 'usar';
  return ((g === 'entender' ? a.dA : a.dB) || []).includes(dia) ? otroGrupo(g) : g;
}
/** T5 · De varias tareas, la que menos veces se ha hecho con la palabra; si empatan, el orden fijo de ORDEN_TAREAS. */
const menosHecha = (a, lista) => lista.slice().sort((x, y) => ((a.u[x] | 0) - (a.u[y] | 0)) || ORDEN_TAREAS.indexOf(x) - ORDEN_TAREAS.indexOf(y))[0];

/** Elige la tarea de una palabra (T1-T6). Opciones: `otras` (palabras presentadas distintas de ésta, para `elige`) y
    `evitar` (tipos de tarea ya puestos en la sesión o justo antes, T4). Devuelve el id de la tarea, o null si no hay ninguna posible.
    T3: nunca la última tarea hecha con la palabra. T6: si en el grupo no queda ninguna, se olvida T4; si aun así no hay, se pasa al otro grupo
    (en el otro grupo se prefiere también la variedad de T4 y solo se olvida si no hay más remedio). */
function elegirTarea(a, p, dia, op = {}) {
  a = a || palabraNueva();
  const evitar = op.evitar || [], g = grupoQueToca(a, dia);
  const libres = tareasDisponibles(p, op.otras | 0).filter(t => t !== a.ut);
  for (const [grupo, variedad] of [[g, true], [g, false], [otroGrupo(g), true], [otroGrupo(g), false]]) {
    const c = libres.filter(t => grupoDe(t) === grupo && !(variedad && evitar.includes(t)));
    if (c.length) return menosHecha(a, c);
  }
  return null;
}

/** T7 · Frase que sale la vez número `k` (k = veces que ya se ha hecho esa tarea con la palabra; al acabar la lista se vuelve a empezar).
    `sentido` y `acaba`, en el orden de la ficha; `ejemplo`, un sí y un no alternados; `habla`, su única pregunta. */
function fraseDe(p, tarea, k) {
  k = Math.max(0, k | 0);
  if (tarea === 'sentido') return p.sentido[k % p.sentido.length];
  if (tarea === 'acaba') return p.acaba[k % p.acaba.length];
  if (tarea === 'ejemplo') {
    const lista = p.ejemplos.filter(x => x.ok === (k % 2 === 0));
    return lista.length ? lista[Math.floor(k / 2) % lista.length] : p.ejemplos[k % p.ejemplos.length];
  }
  return p.habla;
}

/** Lugar de una ficha en el paquete: por semana y, dentro de la semana, el `orden` de docs/semana-NN.md. */
const lugarPaquete = p => p.semana * 100 + (p.orden || 99);
const ordenPaquete = (lista = PALABRAS) => lista.slice().sort((x, y) => lugarPaquete(x) - lugarPaquete(y)).map(p => p.id);
/** T2 · Las otras 2 opciones de `elige`: siempre palabras presentadas (`presentadas` = fichas), primero de su semana; si faltan, de las semanas
    anteriores (la más cercana primero) y, como último recurso, de las posteriores. La vuelta `k` las va cambiando. Devuelve 0, 1 o 2 fichas. */
function distractoresElige(p, presentadas, k = 0) {
  const rota = l => l.map((_, i) => l[(i + Math.max(0, k | 0)) % l.length]);
  const otras = presentadas.filter(x => x.id !== p.id);
  const mismas = otras.filter(x => x.semana === p.semana).sort((x, y) => lugarPaquete(x) - lugarPaquete(y));
  const antes = otras.filter(x => x.semana < p.semana).sort((x, y) => (y.semana - x.semana) || lugarPaquete(x) - lugarPaquete(y));
  const despues = otras.filter(x => x.semana > p.semana).sort((x, y) => lugarPaquete(x) - lugarPaquete(y));
  return [...rota(mismas), ...rota(antes), ...rota(despues)].slice(0, 2);
}

/** G3 · Gestos que se parecen entre semanas (docs/tareas-gesto-relaciona.md, apartado 5): nunca se ponen juntos como opciones de la forma 2. */
const GESTOS_PARECIDOS = [['descubrir', 'oscuro'], ['rodear', 'repetir'], ['primero', 'solucion'], ['respetar', 'ser-vivo'], ['agotado', 'tranquilo'], ['observar', 'pista', 'paisaje']];
const seParecen = (a, b) => GESTOS_PARECIDOS.some(g => g.includes(a) && g.includes(b));
/** G2 + G3 + G4 · Qué forma de `gesto` sale la vez número `k` y con qué opciones. Forma 1 («Haz el gesto») las veces pares; forma 2 («¿Qué palabra es?»)
    las impares, siempre que haya 2 palabras presentadas para acompañar: primero de su semana, si no de la anterior (la más cercana primero), nunca de una posterior
    ni de las de gesto parecido. Si no hay 2, forma 1. `presentadas` = fichas. La opción buena cambia de sitio y las otras rotan cada vez que sale la forma 2.
    Devuelve {forma: 1|2, otras: [ficha, ficha], pos: 0|1|2} (pos = lugar de la buena entre las 3 opciones). */
function formaGesto(p, presentadas, k = 0) {
  k = Math.max(0, k | 0);
  const otras = presentadas.filter(x => x.id !== p.id && !seParecen(x.id, p.id));
  const mismas = otras.filter(x => x.semana === p.semana).sort((x, y) => lugarPaquete(x) - lugarPaquete(y));
  const antes = otras.filter(x => x.semana < p.semana).sort((x, y) => (y.semana - x.semana) || lugarPaquete(x) - lugarPaquete(y));
  const cand = [...mismas, ...antes];
  if (k % 2 === 0 || cand.length < 2) return { forma: 1, otras: [], pos: 0 };
  const v = (k - 1) / 2, rota = l => l.map((_, i) => l[(i + v) % l.length]);
  return { forma: 2, otras: [...rota(mismas), ...rota(antes)].slice(0, 2), pos: v % 3 };
}
