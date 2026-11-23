/* ===== Datos guardados: una sola clave, «lexi.v1» (prefijo propio: se comparte dominio con otras apps) =====
   Perfil Docente = una CLASE ({t:'doc'}); perfil Familias = un NIÑO ({t:'fam', av}). El progreso va por perfil, no por alumno:
   perfil.pal = { idPalabra: { e: paso de la escala 1..4 (1 Nueva, 2 La conocemos, 3 La entendemos, 4 La usamos), pres: fecha en que se presentó } }.
   v1 → v2: se añade «pal» a cada perfil (vacío).
   v2 → v3: cada palabra puede llevar «val» = valoraciones del docente [{d: fecha, t: tarea, v: 'todos'|'mitad'|'pocos'}] (las últimas 30).
   v3 → v4: cada palabra lleva además la escala y las cajas de repaso (dA, dB, cam, mal, caja, prox, u, ut, ov; ver 30-escala-logica.js) y
   el perfil lleva «ses» (día de la última sesión «Hoy»); ajustes.nuevas = palabras nuevas por sesión (1 o 2). La migración repite las «val»
   guardadas en orden con las reglas de la escala, así que no se pierde ningún paso ni ninguna valoración.
   v4 → v5 (paso 6.1, nube): marcas de «última modificación» para poder fusionar dos dispositivos: EST.gmt (ajustes), EST.del {idPerfil: marca} (borrados),
   perfil.mt (el perfil) y perfil.pal[id].m (la palabra). Marca = milisegundos, siempre mayor que cualquier marca ya vista (reloj atrasado, FU5). Sin marca = 0.
   Las reglas (valorarPalabra, presentarRegistro…) viven en 30-escala-logica.js; la fusión, en 21-fusion.js; aquí solo se leen, se sanean y se guardan. */
const VERSION_DATOS = 5,
  TAREAS_ID = ['sentido', 'ejemplo', 'elige', 'gesto', 'acaba', 'habla', 'relaciona'] /* las que ya existen en pantalla */, MAX_PERFILES = 40;
/* Mismos 30 animalitos y mismo orden que Calculi y Lectori (un niño conserva su animal en todas las apps) */
const AVATARES = [['🦊','#FED7AA'],['🐢','#BBF7D0'],['🐼','#E2E8F0'],['🦁','#FDE68A'],['🐸','#D9F99D'],['🐙','#F5D0FE'],['🐳','#BAE6FD'],['🦉','#E7D3B5'],
  ['🐝','#FEF08A'],['🐞','#FECACA'],['🦄','#FBCFE8'],['🐨','#CBD5E1'],['🐶','#FDE2C4'],['🐱','#FFE4B5'],['🐰','#FCE7F3'],['🐻','#E8CBA8'],
  ['🐯','#FED7AA'],['🐷','#FBCFE8'],['🐮','#E5E7EB'],['🐵','#E7D3B5'],['🐧','#C7D2FE'],['🐤','#FEF3C7'],['🦋','#BFDBFE'],['🐬','#A5F3FC'],
  ['🦒','#FDE68A'],['🦓','#E5E7EB'],['🐘','#CBD5E1'],['🦔','#E7D3B5'],['🐿️','#FED7AA'],['🦜','#BBF7D0']];

const ss = (s, n) => String(s ?? '').replace(/[<>&"'`]/g, '').trim().slice(0, n);
const esFecha = d => fechaOK(d);
function estadoVacio() { return { v: VERSION_DATOS, modo: '', act: '', perfiles: [], ajustes: { pin: '', nuevas: 2, preg: true }, gmt: 0, del: {} }; }
/* Modo Docente: todo abierto y NO se guarda progreso (los ajustes sí, con guardarAjustes) */
let MODO_DOCENTE = false;
let EST = estadoVacio();

/** Valoraciones del docente: solo tarea y valor conocidos y fecha válida; se quedan las últimas MAX_VAL. */
/* ===== Marcas de modificación (FU5 de docs/nube.md) ===== */
const nm = x => { const n = Math.floor(Number(x)); return Number.isFinite(n) && n > 0 ? Math.min(n, 8.64e15) : 0; };
const MAX_DEL = 200;
let AHORA = () => Date.now(); /* la hora, aparte para poder probar relojes atrasados */
/** Borrados: { idPerfil: marca }, solo ids con forma válida y los 200 más recientes. */
function limpiarDel(o) {
  if (!o || typeof o !== 'object') return {};
  const l = Object.entries(o).filter(([k, v]) => /^[a-z0-9]{6,20}$/.test(k) && nm(v)).map(([k, v]) => [k, nm(v)]).sort((a, b) => b[1] - a[1] || (a[0] < b[0] ? -1 : 1)).slice(0, MAX_DEL);
  return Object.fromEntries(l);
}
/** La marca más alta que hay en un estado (ajustes, borrados, perfiles y palabras). */
function maxMarca(est) {
  let m = nm(est && est.gmt); for (const k in (est && est.del) || {}) m = Math.max(m, nm(est.del[k]));
  for (const p of (est && est.perfiles) || []) { m = Math.max(m, nm(p.mt)); for (const id in p.pal || {}) m = Math.max(m, nm(p.pal[id].m)); }
  return m;
}
/** FU5 · La marca de un cambio nuevo: la hora, o la más alta ya vista + 1 si el reloj va atrasado. Así un cambio hecho después de sincronizar siempre gana. */
const siguienteMarca = (est, ahora = AHORA()) => Math.max(nm(ahora), maxMarca(est) + 1);
/** Un solo sitio para marcar un cambio en un perfil (y, si hay id, en esa palabra). Renombrar o cambiar animal marcan solo el perfil. */
function tocar(p, id) { const m = siguienteMarca(EST); p.mt = m; if (id && p.pal && p.pal[id]) p.pal[id].m = m; return m; }
function marcarAjustes() { EST.gmt = siguienteMarca(EST); }
function limpiarVal(a) {
  return (Array.isArray(a) ? a : []).filter(x => x && typeof x === 'object' && esFecha(x.d) && TAREAS_VAL.includes(x.t) && VALORES.includes(x.v))
    .map(x => ({ d: x.d, t: x.t, v: x.v })).slice(-MAX_VAL);
}
const limpiarDias = a => [...new Set((Array.isArray(a) ? a : []).filter(esFecha))].slice(-MAX_DIAS_BUENOS);
/** Cuentas de tareas hechas: solo tareas conocidas y números enteros no negativos. */
function limpiarCuentas(o) {
  const r = {}; if (!o || typeof o !== 'object') return r;
  for (const t of TAREAS_VAL) { const n = Number(o[t]); if (Number.isFinite(n) && n > 0) r[t] = Math.min(Math.floor(n), 100000); }
  return r;
}
/** Registro de una palabra ya en v4: sanea cada campo sin tocar el paso (solo lo acota a 1-4) y arregla caja o fecha de vuelta rotas. */
function limpiarRegistro(v) {
  const r = palabraNueva();
  r.e = Math.max(1, Math.min(4, v.e | 0)); r.pres = esFecha(v.pres) ? v.pres : ''; r.val = limpiarVal(v.val);
  r.dA = limpiarDias(v.dA); r.dB = limpiarDias(v.dB); r.cam = esFecha(v.cam) ? v.cam : ''; r.mal = esFecha(v.mal) ? v.mal : '';
  const c = Number(v.caja); r.caja = Number.isFinite(c) ? Math.max(1, Math.min(5, Math.round(c))) : 1;
  r.prox = esFecha(v.prox) ? v.prox : '';
  const mm = nm(v.m); if (mm) r.m = mm; /* marca de la palabra (sin marca = 0) */
  r.u = limpiarCuentas(v.u); r.ut = TAREAS_VAL.includes(v.ut) ? v.ut : ''; r.ov = v.ov === true;
  if (encTotal(v)) r.enc = encDe(v); /* «La hemos encontrado» (EN7): solo si se ha apuntado alguna vez */
  if (r.e < 2) { r.caja = 1; r.prox = ''; r.dA = []; r.dB = []; }
  else if (!r.prox && !(r.e === 4 && r.caja === 5)) r.prox = sumarDias(esFecha(r.pres) ? r.pres : hoy(), 1); /* solo descansa la de «La usamos» en la caja 5 */
  return r;
}
/** Migración v1-v3 → v4: parte de «recién presentada» y repite las valoraciones guardadas, en orden, con las reglas de la escala. */
function migrarRegistro(v) {
  const val = limpiarVal(v.val), e = Math.max(1, Math.min(4, v.e | 0)), pres = esFecha(v.pres) ? v.pres : '';
  if (e < 2 || !pres) return limpiarRegistro({ e, pres, val });
  let r = presentarRegistro(palabraNueva(), pres);
  for (const x of val) r = valorarPalabra(r, x.t, x.v, x.d);
  r.val = val; /* el historial queda tal cual estaba, también lo anterior a la presentación */
  r.e = Math.max(r.e, e);
  return limpiarRegistro(r);
}
/** Progreso por palabra: solo ids con forma válida. `migrar`: los datos son de antes de la v4. */
function limpiarPal(o, migrar) {
  const r = {}; if (!o || typeof o !== 'object') return r;
  for (const [k, v] of Object.entries(o)) {
    if (!/^[a-z0-9-]{1,30}$/.test(k) || !v || typeof v !== 'object') continue;
    r[k] = migrar ? migrarRegistro(v) : limpiarRegistro(v);
    if (Object.keys(r).length >= 1000) break;
  }
  return r;
}
/** Jardines (docs/jardines.md, JA3): semanas completas ya apuntadas por curso, {curso: [semanas]} (sin repetir, de menor a mayor, 30 como mucho). Campo opcional, como `rst`: no sube la versión. */
function limpiarJar(j) {
  const r = {}; if (!j || typeof j !== 'object') return r;
  for (let c = 1; c <= 6; c++) {
    const l = j[c]; if (!Array.isArray(l)) continue;
    const s = [...new Set(l.map(x => x | 0).filter(x => x >= 1 && x <= 99))].sort((a, b) => a - b).slice(0, 30); if (s.length) r[c] = s;
  }
  return r;
}
function limpiarPerfil(p, migrar) {
  const jar = limpiarJar(p && p.jar);
  if (!p || typeof p !== 'object' || !['doc', 'fam'].includes(p.t)) return null;
  return { id: /^[a-z0-9]{6,20}$/.test(p.id || '') ? p.id : nid(), t: p.t,
    n: ss(p.n, 20) || (p.t === 'doc' ? 'Clase' : 'Niño'),
    av: p.t === 'fam' ? Math.max(0, Math.min(AVATARES.length - 1, p.av | 0)) : 0,
    c: esFecha(p.c) ? p.c : hoy(), ses: esFecha(p.ses) ? p.ses : '', mt: nm(p.mt), pal: limpiarPal(p.pal, migrar), ...(nm(p.rst) ? { rst: nm(p.rst) } : {}), ...(Object.keys(jar).length ? { jar } : {}) }; /* `rst`: marca de «restaurado desde una copia» (BO2); solo existe si se restauró con cuenta */
}
/** Ajustes saneados (también los que llegan de la nube). */
function limpiarAjustes(aj) { aj = aj && typeof aj === 'object' ? aj : {}; return { pin: /^\d{4}$/.test(aj.pin || '') ? aj.pin : '', nuevas: aj.nuevas === 1 ? 1 : 2, preg: aj.preg !== false }; }
/** Sanea cualquier cosa leída del disco (o importada) y la deja en la versión actual. */
function limpiar(o) {
  o = o && typeof o === 'object' ? o : {};
  /* Migraciones: v1 → v2 añade «pal», v2 → v3 añade «val» y v3 → v4 añade escala y cajas (limpiarPal con migrar=true repite las «val»). Nunca se pierde el progreso. */
  const migrar = (o.v | 0) < 4;
  const vistos = new Set(), perfiles = [];
  for (const p of Array.isArray(o.perfiles) ? o.perfiles : []) {
    const q = limpiarPerfil(p, migrar); if (!q || vistos.has(q.id) || perfiles.length >= MAX_PERFILES) continue;
    vistos.add(q.id); perfiles.push(q);
  }
  const act = perfiles.find(p => p.id === o.act);
  return { v: VERSION_DATOS, modo: act ? act.t : (['doc', 'fam'].includes(o.modo) ? o.modo : ''), act: act ? act.id : '', perfiles, ajustes: limpiarAjustes(o.ajustes), gmt: nm(o.gmt), del: limpiarDel(o.del) };
}
/** Lee lexi.v1. Si está roto, guarda una copia en lexi.bk antes de empezar de cero; si es de una versión más nueva, no la pisa. */
function cargar() {
  let raw = null; try { raw = localStorage.getItem('lexi.v1'); } catch (e) {}
  EST = estadoVacio(); if (raw == null) return EST;
  let o; try { o = JSON.parse(raw); } catch (e) { try { localStorage.setItem('lexi.bk', raw); } catch (e2) {} return EST; }
  EST = limpiar(o); if ((o && o.v | 0) > VERSION_DATOS) EST.bloq = true;
  return EST;
}
function guardar() { if (EST.bloq || MODO_DOCENTE) return false; const ok = LS.set('v1', { v: EST.v, modo: EST.modo, act: EST.act, perfiles: EST.perfiles, ajustes: EST.ajustes, gmt: EST.gmt, del: EST.del }); if (ok && typeof alGuardar === 'function') alGuardar(); return ok; } /* SI2: la cuenta (52-cuenta.js) sincroniza 15 s después */
/** Los ajustes (PIN) se guardan también en Modo Docente; el progreso no. */
function guardarAjustes() { const m = MODO_DOCENTE; MODO_DOCENTE = false; const r = guardar(); MODO_DOCENTE = m; return r; }

const perfilesDe = t => EST.perfiles.filter(p => p.t === t);
const perfilAct = () => EST.perfiles.find(p => p.id === EST.act) || null;
/** Primer animal que no usa ningún niño (si están todos, se repite por orden). */
function avLibre() { const u = new Set(perfilesDe('fam').map(p => p.av)); for (let i = 0; i < AVATARES.length; i++) if (!u.has(i)) return i; return perfilesDe('fam').length % AVATARES.length; }
/** Texto de error para un nombre de perfil, o '' si vale. idExcluir: el propio perfil al renombrar. */
function errorNombre(t, nombre, idExcluir = '') {
  const n = ss(nombre, 20);
  if (!n) return 'Escribe un nombre';
  if (perfilesDe(t).some(p => p.id !== idExcluir && p.n.toLowerCase() === n.toLowerCase())) return 'Ese nombre ya existe';
  return '';
}
/** Crea un perfil y lo deja activo. Devuelve null si falta el nombre, hay demasiados o el nombre ya existe en ese tipo. */
function crearPerfil(t, nombre, av) {
  const n = ss(nombre, 20);
  if (EST.bloq || EST.perfiles.length >= MAX_PERFILES || errorNombre(t, n)) return null;
  const p = limpiarPerfil({ t, n, av, c: hoy() }); EST.perfiles.push(p); tocar(p); EST.act = p.id; EST.modo = t; guardar(); return p;
}
function entrarPerfil(id) { const p = EST.perfiles.find(x => x.id === id); if (!p) return null; EST.act = p.id; EST.modo = p.t; guardar(); return p; }

function renombrarPerfil(id, nombre) { const p = EST.perfiles.find(x => x.id === id); if (!p || EST.bloq || errorNombre(p.t, nombre, id)) return false; p.n = ss(nombre, 20); tocar(p); return guardar() || MODO_DOCENTE; }
function cambiarAnimal(id, av) { const p = EST.perfiles.find(x => x.id === id); if (!p || p.t !== 'fam' || EST.bloq) return false; p.av = Math.max(0, Math.min(AVATARES.length - 1, av | 0)); tocar(p); guardar(); return true; }
/** Borra el perfil (su progreso va dentro, así que se borra con él). */
function borrarPerfil(id) {
  if (EST.bloq || !EST.perfiles.some(x => x.id === id)) return false;
  EST.del = limpiarDel({ ...EST.del, [id]: siguienteMarca(EST) }); /* FU2: queda apuntado el borrado, con una marca posterior a todo lo suyo */
  EST.perfiles = EST.perfiles.filter(x => x.id !== id);
  if (EST.act === id) { EST.act = ''; EST.modo = ''; }
  guardar(); return true;
}
/* ===== Progreso de palabras ===== */
const estadoPal = (p, id) => (p && p.pal && p.pal[id]) || palabraNueva();
const idOK = id => /^[a-z0-9-]{1,30}$/.test(id || '');
/** La clase (o el niño) acaba de ver la presentación completa: la palabra pasa a «La conocemos» (E1). Nunca baja ni se salta pasos.
    En Modo Docente no guarda nada. Devuelve true si guardó. */
function presentarPalabra(id) {
  const p = perfilAct();
  if (MODO_DOCENTE || !p || EST.bloq || !idOK(id)) return false;
  const antes = JSON.stringify(p.pal[id] || null); p.pal[id] = presentarRegistro(estadoPal(p, id), hoy());
  if (JSON.stringify(p.pal[id]) !== antes) tocar(p, id); /* si no cambió nada (ya presentada), no hay marca nueva */
  return guardar();
}
/** El docente valora una tarea hecha con la clase («todos», «mitad» o «pocos»): se apunta y mueve la escala y el repaso (E2-E8, R3-R6).
    Una palabra sin presentar no cambia. En Modo Docente no guarda. Devuelve true si guardó. */
function valorarTarea(id, tarea, valor) {
  const p = perfilAct();
  if (MODO_DOCENTE || !p || EST.bloq || !idOK(id) || !TAREAS_VAL.includes(tarea) || !VALORES.includes(valor) || estadoPal(p, id).e < 2) return false;
  p.pal[id] = valorarPalabra(estadoPal(p, id), tarea, valor, hoy()); tocar(p, id);
  return guardar();
}
/** La tarea salió pero el docente siguió sin valorar (R7): la palabra sigue pendiente; solo avanza la cuenta de esa tarea. */
function tareaSinValorar(id, tarea) {
  const p = perfilAct();
  if (MODO_DOCENTE || !p || EST.bloq || !idOK(id) || !TAREAS_VAL.includes(tarea) || estadoPal(p, id).e < 2) return false;
  p.pal[id] = tareaHecha(estadoPal(p, id), tarea); tocar(p, id);
  return guardar();
}
/** H6 · Se acaba de enseñar «También quiere decir…» de esta palabra: no vuelve a salir. En Modo Docente no guarda. */
function otroVisto(id) {
  const p = perfilAct();
  if (MODO_DOCENTE || !p || EST.bloq || !idOK(id) || estadoPal(p, id).e < 2) return false;
  const antes = JSON.stringify(p.pal[id] || null); p.pal[id] = conOtroVisto(estadoPal(p, id));
  if (JSON.stringify(p.pal[id]) !== antes) tocar(p, id);
  return guardar();
}
/** EN2, EN4, EN5, EN7 · La clase ha encontrado una palabra presentada (como = 'o' oída, 'v' vista, 'd' dicha). No mueve la escala ni el repaso.
    Devuelve {ant} (las cuentas de antes, para «Deshacer») o null si no se apuntó (sin presentar, Modo Docente o datos bloqueados). */
function apuntarEncontrada(id, como) {
  const p = perfilAct();
  if (MODO_DOCENTE || !p || EST.bloq || !idOK(id) || !ENC_COMO.includes(como) || estadoPal(p, id).e < 2) return null;
  const a = estadoPal(p, id), ant = a.enc ? { ...a.enc } : null;
  p.pal[id] = conEncontrada(a, como, hoy()); tocar(p, id); guardar();
  return { ant };
}
/** EN4 · «Deshacer»: deja las cuentas de la palabra como estaban antes de apuntar. */
function deshacerEncontrada(id, ant) {
  const p = perfilAct();
  if (MODO_DOCENTE || !p || EST.bloq || !idOK(id) || !p.pal[id]) return false;
  const r = { ...p.pal[id] }; if (ant) r.enc = encDe({ enc: ant }); else delete r.enc;
  p.pal[id] = r; tocar(p, id); return guardar();
}
/** EN1 · Ajuste del tutor: preguntar o no «¿Alguien ha encontrado alguna de nuestras palabras?» al empezar «Hoy». Se guarda también en Modo Docente. */
function fijarPreg(b) { if (EST.bloq) return false; b = b !== false; if (EST.ajustes.preg !== b) { EST.ajustes.preg = b; marcarAjustes(); } return guardarAjustes(); }
const PIN_OK = p => /^\d{4}$/.test(p || '');
/** H3 · Ajuste del tutor «Palabras nuevas por sesión» (1 o 2). Se guarda también en Modo Docente. */
function fijarNuevas(n) { if (EST.bloq) return false; n = n === 1 ? 1 : 2; if (EST.ajustes.nuevas !== n) { EST.ajustes.nuevas = n; marcarAjustes(); } return guardarAjustes(); }
/** H7 · Se ha terminado una sesión «Hoy»: se apunta el día. En Modo Docente no guarda nada. */
function terminarSesionHoy() { const p = perfilAct(); if (MODO_DOCENTE || !p || EST.bloq) return false; p.ses = hoy(); if (typeof jardinRegistrar === 'function') jardinRegistrar(p); tocar(p); const ok = guardar(); if (ok && typeof syncYa === 'function') syncYa(); return ok; } /* SI3: al cerrar «Hoy» se sincroniza al momento */
function fijarPin(pin) { if (!PIN_OK(pin) || EST.bloq) return false; if (EST.ajustes.pin !== pin) { EST.ajustes.pin = pin; marcarAjustes(); } guardarAjustes(); return true; }

/* ===== Copia de seguridad ===== */
function exportarTexto() { return JSON.stringify({ app: 'lexi', v: EST.v, exportado: hoy(), modo: EST.modo, act: EST.act, perfiles: EST.perfiles, ajustes: EST.ajustes, gmt: EST.gmt, del: EST.del }, null, 1); }
/** Comprueba un texto de copia. Devuelve {datos} o {error}. No toca nada. */
function leerCopia(texto) {
  let o; try { o = JSON.parse(texto); } catch (e) { return { error: 'Ese archivo no es una copia de Lexi' }; }
  if (!o || typeof o !== 'object' || o.app !== 'lexi' || !Array.isArray(o.perfiles)) return { error: 'Ese archivo no es una copia de Lexi' };
  if ((o.v | 0) > VERSION_DATOS) return { error: 'Esta copia es de una versión más nueva de Lexi' };
  return { datos: limpiar(o) };
}
/** BO2 · Con sesión iniciada, la copia manda en todas partes: sus perfiles, sus palabras y sus ajustes se marcan como recién cambiados (más nuevos que
    cualquier cosa de la cuenta), salen de `del` y los perfiles que había y no están en la copia se apuntan como borrados. Si no, la nube desharía la restauración. */
function copiaMandando(datos, ant) {
  const m = Math.max(nm(AHORA()), maxMarca(ant), maxMarca(datos)) + 1, ids = new Set(datos.perfiles.map(p => p.id)), del = { ...(ant.del || {}) };
  for (const id of ids) delete del[id];
  for (const p of ant.perfiles || []) if (!ids.has(p.id)) del[p.id] = m;
  for (const p of datos.perfiles) { p.mt = m; p.rst = m; for (const id in p.pal || {}) p.pal[id].m = m; }
  return { ...datos, gmt: m, del: limpiarDel(del) };
}
/** Sustituye los datos por los de la copia. Antes guarda lo que hubiera en «lexi.bk» para no perder nada. `conCuenta`: hay sesión iniciada (BO2). */
function aplicarCopia(datos, conCuenta = false) {
  try { const ant = localStorage.getItem('lexi.v1'); if (ant != null) localStorage.setItem('lexi.bk', ant); } catch (e) {}
  EST = conCuenta ? copiaMandando(datos, EST) : datos; const m = MODO_DOCENTE; MODO_DOCENTE = false; const r = guardar(); MODO_DOCENTE = m; return r;
}
