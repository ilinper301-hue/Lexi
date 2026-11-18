/* ===== «Cómo va la clase» (reglas RE1-RE3 de docs/aula.md): lo que se ve del progreso. Funciones PURAS: no cambian nada. Sin notas ni porcentajes. ===== */
const MAX_REPASAR = 8, MAX_ENCONTRADAS = 5;
/** «Cuestan»: la última valoración fue «pocos», o dos de las tres últimas no fueron «casi todos». */
function cuesta(a) {
  const v = ((a && a.val) || []).slice(-3); if (!v.length) return false;
  return v[v.length - 1].v === 'pocos' || (v.length >= 2 && v.filter(x => x.v !== 'todos').length >= 2);
}
/** RE2 · Cuántas palabras hay en cada paso (solo presentadas: nada de huecos) y cuáles. Devuelve [{e, nombre, palabras}] del paso 2 al 4. */
function resumenPasos(pal, palabras = PALABRAS) {
  const l = presentadas(pal, palabras).sort((x, y) => lugarPaquete(x) - lugarPaquete(y));
  return [2, 3, 4].map(e => ({ e, nombre: PASOS[e - 1], palabras: l.filter(p => regDe(pal, p.id).e === e) }));
}
/** RE2 · «Para repasar»: primero las pendientes más atrasadas (R9) y después las que cuestan; sin repetir. Devuelve [id]. */
function resumenRepasar(pal, dia, palabras = PALABRAS, max = MAX_REPASAR) {
  const pres = new Set(presentadas(pal, palabras).map(p => p.id)), orden = ordenPaquete(palabras);
  const a = pendientes(pal, dia, orden, 1000).filter(id => pres.has(id));
  const c = orden.filter(id => pres.has(id) && !a.includes(id) && cuesta(regDe(pal, id)));
  return [...a, ...c].slice(0, max);
}
/** RE2 · «Las más encontradas»: las que más veces ha apuntado la clase (EN7), de más a menos; si empatan, en el orden del paquete. Solo con alguna cuenta. */
function resumenEncontradas(pal, palabras = PALABRAS, max = MAX_ENCONTRADAS) {
  return presentadas(pal, palabras).filter(p => encTotal(regDe(pal, p.id))).sort((x, y) => encTotal(regDe(pal, y.id)) - encTotal(regDe(pal, x.id)) || lugarPaquete(x) - lugarPaquete(y)).slice(0, max).map(p => p.id);
}
/** RE1-RE3 · Todo el resumen de un perfil. `titulo`: «Cómo va la clase» (clase) o «Cómo va» (niño, RE3). */
function resumenDe(perfil, dia, palabras = PALABRAS) {
  const pal = (perfil && perfil.pal) || {};
  return { titulo: perfil && perfil.t === 'fam' ? 'Cómo va' : 'Cómo va la clase', nombre: perfil ? perfil.n : '', dia,
    pasos: resumenPasos(pal, palabras), repasar: resumenRepasar(pal, dia, palabras), encontradas: resumenEncontradas(pal, palabras), total: presentadas(pal, palabras).length };
}
