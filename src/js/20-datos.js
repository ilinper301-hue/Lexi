/* ===== Datos guardados: una sola clave, «lexi.v1» (prefijo propio: se comparte dominio con otras apps) =====
   Perfil Docente = una CLASE ({t:'doc'}); perfil Familias = un NIÑO ({t:'fam', av}). El progreso va por perfil, no por alumno. */
const VERSION_DATOS = 1, MAX_PERFILES = 40;
/* Mismos 30 animalitos y mismo orden que Calculi y Lectori (un niño conserva su animal en todas las apps) */
const AVATARES = [['🦊','#FED7AA'],['🐢','#BBF7D0'],['🐼','#E2E8F0'],['🦁','#FDE68A'],['🐸','#D9F99D'],['🐙','#F5D0FE'],['🐳','#BAE6FD'],['🦉','#E7D3B5'],
  ['🐝','#FEF08A'],['🐞','#FECACA'],['🦄','#FBCFE8'],['🐨','#CBD5E1'],['🐶','#FDE2C4'],['🐱','#FFE4B5'],['🐰','#FCE7F3'],['🐻','#E8CBA8'],
  ['🐯','#FED7AA'],['🐷','#FBCFE8'],['🐮','#E5E7EB'],['🐵','#E7D3B5'],['🐧','#C7D2FE'],['🐤','#FEF3C7'],['🦋','#BFDBFE'],['🐬','#A5F3FC'],
  ['🦒','#FDE68A'],['🦓','#E5E7EB'],['🐘','#CBD5E1'],['🦔','#E7D3B5'],['🐿️','#FED7AA'],['🦜','#BBF7D0']];

const ss = (s, n) => String(s ?? '').replace(/[<>&"'`]/g, '').trim().slice(0, n);
const esFecha = d => /^\d{4}-\d\d-\d\d$/.test(d || '');
function estadoVacio() { return { v: VERSION_DATOS, modo: '', act: '', perfiles: [] }; }
let EST = estadoVacio();

function limpiarPerfil(p) {
  if (!p || typeof p !== 'object' || !['doc', 'fam'].includes(p.t)) return null;
  return { id: /^[a-z0-9]{6,20}$/.test(p.id || '') ? p.id : nid(), t: p.t,
    n: ss(p.n, 20) || (p.t === 'doc' ? 'Clase' : 'Niño'),
    av: p.t === 'fam' ? Math.max(0, Math.min(AVATARES.length - 1, p.av | 0)) : 0,
    c: esFecha(p.c) ? p.c : hoy() };
}
/** Sanea cualquier cosa leída del disco (o importada) y la deja en la versión actual. */
function limpiar(o) {
  o = o && typeof o === 'object' ? o : {};
  /* Migraciones: aquí se añadirá un «if (v < 2) {…}» por cada cambio de estructura. Nunca se pierde el progreso. */
  const vistos = new Set(), perfiles = [];
  for (const p of Array.isArray(o.perfiles) ? o.perfiles : []) {
    const q = limpiarPerfil(p); if (!q || vistos.has(q.id) || perfiles.length >= MAX_PERFILES) continue;
    vistos.add(q.id); perfiles.push(q);
  }
  const act = perfiles.find(p => p.id === o.act);
  return { v: VERSION_DATOS, modo: act ? act.t : (['doc', 'fam'].includes(o.modo) ? o.modo : ''), act: act ? act.id : '', perfiles };
}
/** Lee lexi.v1. Si está roto, guarda una copia en lexi.bk antes de empezar de cero; si es de una versión más nueva, no la pisa. */
function cargar() {
  let raw = null; try { raw = localStorage.getItem('lexi.v1'); } catch (e) {}
  EST = estadoVacio(); if (raw == null) return EST;
  let o; try { o = JSON.parse(raw); } catch (e) { try { localStorage.setItem('lexi.bk', raw); } catch (e2) {} return EST; }
  EST = limpiar(o); if ((o && o.v | 0) > VERSION_DATOS) EST.bloq = true;
  return EST;
}
function guardar() { if (EST.bloq) return false; return LS.set('v1', { v: EST.v, modo: EST.modo, act: EST.act, perfiles: EST.perfiles }); }

const perfilesDe = t => EST.perfiles.filter(p => p.t === t);
const perfilAct = () => EST.perfiles.find(p => p.id === EST.act) || null;
/** Primer animal que no usa ningún niño (si están todos, se repite por orden). */
function avLibre() { const u = new Set(perfilesDe('fam').map(p => p.av)); for (let i = 0; i < AVATARES.length; i++) if (!u.has(i)) return i; return perfilesDe('fam').length % AVATARES.length; }
/** Crea un perfil y lo deja activo. Devuelve null si falta el nombre, hay demasiados o el nombre ya existe en ese tipo. */
function crearPerfil(t, nombre, av) {
  const n = ss(nombre, 20);
  if (!n || EST.bloq || EST.perfiles.length >= MAX_PERFILES) return null;
  if (perfilesDe(t).some(p => p.n.toLowerCase() === n.toLowerCase())) return null;
  const p = limpiarPerfil({ t, n, av, c: hoy() }); EST.perfiles.push(p); EST.act = p.id; EST.modo = t; guardar(); return p;
}
function entrarPerfil(id) { const p = EST.perfiles.find(x => x.id === id); if (!p) return null; EST.act = p.id; EST.modo = p.t; guardar(); return p; }
