/* ===== Datos guardados: una sola clave, «lexi.v1» (prefijo propio: se comparte dominio con otras apps) =====
   Perfil Docente = una CLASE ({t:'doc'}); perfil Familias = un NIÑO ({t:'fam', av}). El progreso va por perfil, no por alumno:
   perfil.pal = { idPalabra: { e: paso de la escala 1..4 (1 Nueva, 2 La conocemos, 3 La entendemos, 4 La usamos), pres: fecha en que se presentó } }.
   v1 → v2: se añade «pal» a cada perfil (vacío).
   v2 → v3: cada palabra puede llevar «val» = valoraciones del docente [{d: fecha, t: tarea, v: 'todos'|'mitad'|'pocos'}] (las últimas 30). */
const VERSION_DATOS = 3, MAX_VAL = 30,
  TAREAS_ID = ['sentido', 'ejemplo', 'elige', 'acaba', 'habla'], VALORES = ['todos', 'mitad', 'pocos'], MAX_PERFILES = 40;
/* Mismos 30 animalitos y mismo orden que Calculi y Lectori (un niño conserva su animal en todas las apps) */
const AVATARES = [['🦊','#FED7AA'],['🐢','#BBF7D0'],['🐼','#E2E8F0'],['🦁','#FDE68A'],['🐸','#D9F99D'],['🐙','#F5D0FE'],['🐳','#BAE6FD'],['🦉','#E7D3B5'],
  ['🐝','#FEF08A'],['🐞','#FECACA'],['🦄','#FBCFE8'],['🐨','#CBD5E1'],['🐶','#FDE2C4'],['🐱','#FFE4B5'],['🐰','#FCE7F3'],['🐻','#E8CBA8'],
  ['🐯','#FED7AA'],['🐷','#FBCFE8'],['🐮','#E5E7EB'],['🐵','#E7D3B5'],['🐧','#C7D2FE'],['🐤','#FEF3C7'],['🦋','#BFDBFE'],['🐬','#A5F3FC'],
  ['🦒','#FDE68A'],['🦓','#E5E7EB'],['🐘','#CBD5E1'],['🦔','#E7D3B5'],['🐿️','#FED7AA'],['🦜','#BBF7D0']];

const ss = (s, n) => String(s ?? '').replace(/[<>&"'`]/g, '').trim().slice(0, n);
const esFecha = d => /^\d{4}-\d\d-\d\d$/.test(d || '');
function estadoVacio() { return { v: VERSION_DATOS, modo: '', act: '', perfiles: [], ajustes: { pin: '' } }; }
/* Modo Docente: todo abierto y NO se guarda progreso (los ajustes sí, con guardarAjustes) */
let MODO_DOCENTE = false;
let EST = estadoVacio();

/** Valoraciones del docente: solo tarea y valor conocidos y fecha válida; se quedan las últimas MAX_VAL. */
function limpiarVal(a) {
  return (Array.isArray(a) ? a : []).filter(x => x && typeof x === 'object' && esFecha(x.d) && TAREAS_ID.includes(x.t) && VALORES.includes(x.v))
    .map(x => ({ d: x.d, t: x.t, v: x.v })).slice(-MAX_VAL);
}
/** Progreso por palabra: solo ids con forma válida, paso entre 1 y 4 y fecha válida. */
function limpiarPal(o) {
  const r = {}; if (!o || typeof o !== 'object') return r;
  for (const [k, v] of Object.entries(o)) {
    if (!/^[a-z0-9-]{1,30}$/.test(k) || !v || typeof v !== 'object') continue;
    r[k] = { e: Math.max(1, Math.min(4, v.e | 0)), pres: esFecha(v.pres) ? v.pres : '', val: limpiarVal(v.val) };
    if (Object.keys(r).length >= 1000) break;
  }
  return r;
}
function limpiarPerfil(p) {
  if (!p || typeof p !== 'object' || !['doc', 'fam'].includes(p.t)) return null;
  return { id: /^[a-z0-9]{6,20}$/.test(p.id || '') ? p.id : nid(), t: p.t,
    n: ss(p.n, 20) || (p.t === 'doc' ? 'Clase' : 'Niño'),
    av: p.t === 'fam' ? Math.max(0, Math.min(AVATARES.length - 1, p.av | 0)) : 0,
    c: esFecha(p.c) ? p.c : hoy(), pal: limpiarPal(p.pal) };
}
/** Sanea cualquier cosa leída del disco (o importada) y la deja en la versión actual. */
function limpiar(o) {
  o = o && typeof o === 'object' ? o : {};
  /* Migraciones: v1 → v2 añade «pal» y v2 → v3 añade «val» (lo hace limpiarPal, que rellena lo que falta). Un «if (v < N) {…}» más por cada cambio de estructura. Nunca se pierde el progreso. */
  const vistos = new Set(), perfiles = [];
  for (const p of Array.isArray(o.perfiles) ? o.perfiles : []) {
    const q = limpiarPerfil(p); if (!q || vistos.has(q.id) || perfiles.length >= MAX_PERFILES) continue;
    vistos.add(q.id); perfiles.push(q);
  }
  const act = perfiles.find(p => p.id === o.act);
  const aj = o.ajustes && typeof o.ajustes === 'object' ? o.ajustes : {};
  return { v: VERSION_DATOS, modo: act ? act.t : (['doc', 'fam'].includes(o.modo) ? o.modo : ''), act: act ? act.id : '', perfiles, ajustes: { pin: /^\d{4}$/.test(aj.pin || '') ? aj.pin : '' } };
}
/** Lee lexi.v1. Si está roto, guarda una copia en lexi.bk antes de empezar de cero; si es de una versión más nueva, no la pisa. */
function cargar() {
  let raw = null; try { raw = localStorage.getItem('lexi.v1'); } catch (e) {}
  EST = estadoVacio(); if (raw == null) return EST;
  let o; try { o = JSON.parse(raw); } catch (e) { try { localStorage.setItem('lexi.bk', raw); } catch (e2) {} return EST; }
  EST = limpiar(o); if ((o && o.v | 0) > VERSION_DATOS) EST.bloq = true;
  return EST;
}
function guardar() { if (EST.bloq || MODO_DOCENTE) return false; return LS.set('v1', { v: EST.v, modo: EST.modo, act: EST.act, perfiles: EST.perfiles, ajustes: EST.ajustes }); }
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
  const p = limpiarPerfil({ t, n, av, c: hoy() }); EST.perfiles.push(p); EST.act = p.id; EST.modo = t; guardar(); return p;
}
function entrarPerfil(id) { const p = EST.perfiles.find(x => x.id === id); if (!p) return null; EST.act = p.id; EST.modo = p.t; guardar(); return p; }

function renombrarPerfil(id, nombre) { const p = EST.perfiles.find(x => x.id === id); if (!p || EST.bloq || errorNombre(p.t, nombre, id)) return false; p.n = ss(nombre, 20); return guardar() || MODO_DOCENTE; }
function cambiarAnimal(id, av) { const p = EST.perfiles.find(x => x.id === id); if (!p || p.t !== 'fam' || EST.bloq) return false; p.av = Math.max(0, Math.min(AVATARES.length - 1, av | 0)); guardar(); return true; }
/** Borra el perfil (su progreso va dentro, así que se borra con él). */
function borrarPerfil(id) {
  if (EST.bloq || !EST.perfiles.some(x => x.id === id)) return false;
  EST.perfiles = EST.perfiles.filter(x => x.id !== id);
  if (EST.act === id) { EST.act = ''; EST.modo = ''; }
  guardar(); return true;
}
/* ===== Progreso de palabras ===== */
const estadoPal = (p, id) => (p && p.pal && p.pal[id]) || { e: 1, pres: '', val: [] };
/** La clase (o el niño) acaba de ver la presentación completa: la palabra pasa a «La conocemos». Nunca baja ni se salta pasos.
    En Modo Docente no guarda nada. Devuelve true si guardó. */
function presentarPalabra(id) {
  const p = perfilAct();
  if (MODO_DOCENTE || !p || EST.bloq || !/^[a-z0-9-]{1,30}$/.test(id || '')) return false;
  const a = estadoPal(p, id);
  p.pal[id] = { e: Math.max(2, a.e), pres: a.pres || hoy(), val: a.val || [] };
  return guardar();
}
/** El docente valora una tarea hecha con la clase («todos», «mitad» o «pocos»). No cambia el paso de la escala (eso es la Fase 3).
    En Modo Docente no guarda. Devuelve true si guardó. */
function valorarTarea(id, tarea, valor) {
  const p = perfilAct();
  if (MODO_DOCENTE || !p || EST.bloq || !/^[a-z0-9-]{1,30}$/.test(id || '') || !TAREAS_ID.includes(tarea) || !VALORES.includes(valor)) return false;
  const a = estadoPal(p, id);
  p.pal[id] = { e: a.e, pres: a.pres, val: [...(a.val || []), { d: hoy(), t: tarea, v: valor }].slice(-MAX_VAL) };
  return guardar();
}
const PIN_OK = p => /^\d{4}$/.test(p || '');
function fijarPin(pin) { if (!PIN_OK(pin) || EST.bloq) return false; EST.ajustes.pin = pin; guardarAjustes(); return true; }

/* ===== Copia de seguridad ===== */
function exportarTexto() { return JSON.stringify({ app: 'lexi', v: EST.v, exportado: hoy(), modo: EST.modo, act: EST.act, perfiles: EST.perfiles, ajustes: EST.ajustes }, null, 1); }
/** Comprueba un texto de copia. Devuelve {datos} o {error}. No toca nada. */
function leerCopia(texto) {
  let o; try { o = JSON.parse(texto); } catch (e) { return { error: 'Ese archivo no es una copia de Lexi' }; }
  if (!o || typeof o !== 'object' || o.app !== 'lexi' || !Array.isArray(o.perfiles)) return { error: 'Ese archivo no es una copia de Lexi' };
  if ((o.v | 0) > VERSION_DATOS) return { error: 'Esta copia es de una versión más nueva de Lexi' };
  return { datos: limpiar(o) };
}
/** Sustituye los datos por los de la copia. Antes guarda lo que hubiera en «lexi.bk» para no perder nada. */
function aplicarCopia(datos) {
  try { const ant = localStorage.getItem('lexi.v1'); if (ant != null) localStorage.setItem('lexi.bk', ant); } catch (e) {}
  EST = datos; const m = MODO_DOCENTE; MODO_DOCENTE = false; const r = guardar(); MODO_DOCENTE = m; return r;
}
