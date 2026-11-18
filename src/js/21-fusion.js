/* ===== Fusión de dos dispositivos (reglas FU1-FU7 y VE2 de docs/nube.md): funciones PURAS, sin red y sin tocar `EST` =====
   Aquí solo se decide qué queda al juntar lo del dispositivo (`local`) con lo de la cuenta (`remoto`); quien sincroniza (paso 6.3) lee la nube, llama a
   `fusionarTodo` y escribe lo que ella diga. Las marcas (`mt`, `m`, `gmt`, `del`) y su reloj están en 20-datos.js.
   Forma de `remoto`: { aj, gmt, del, perfiles: [{ id, mt, v, d }] }; `d` = el perfil (texto JSON u objeto); si no se puede leer, el perfil se salta (FU6). */
const canon = x => JSON.stringify(x, (k, v) => (v && typeof v === 'object' && !Array.isArray(v) ? Object.fromEntries(Object.keys(v).sort().map(c => [c, v[c]])) : v));
const mismo = (a, b) => canon(a) === canon(b);
const copiaJSON = x => JSON.parse(JSON.stringify(x));
const idPerfilOK = id => /^[a-z0-9]{6,20}$/.test(id || '');
const marcaDe = r => nm(r && r.m);
/** FU4 · «La hemos encontrado»: la cuenta mayor de cada tipo y el día más reciente. */
function fusionarEnc(a, b) { const x = encDe(a), y = encDe(b); return { o: Math.max(x.o, y.o), v: Math.max(x.v, y.v), d: Math.max(x.d, y.d), ult: x.ult > y.ult ? x.ult : y.ult }; }
/** FU4 · Una palabra, entera, del lado donde se tocó más tarde (`m`); empate: la que tenga más valoraciones; si siguen igual, la del dispositivo (x).
    Nunca se mezcla campo a campo (paso, días buenos y repaso van juntos), salvo `enc`. */
function fusionarRegistro(x, y) {
  if (!x) return y; if (!y) return x;
  const mx = marcaDe(x), my = marcaDe(y), gana = my > mx || (my === mx && (y.val || []).length > (x.val || []).length) ? y : x;
  const r = { ...gana }, e = fusionarEnc(x, y);
  if (e.o + e.v + e.d) r.enc = e; else delete r.enc;
  return r;
}
/** FU4 · Un perfil que está en los dos lados: nombre y animal del lado con `mt` más reciente (empate: el del dispositivo, a); cada palabra con su regla;
    `ses` = el día más reciente; fecha de creación = la más antigua; `mt` = la mayor. */
function fusionarPerfil(a, b) {
  const nuevo = nm(b.mt) > nm(a.mt) ? b : a, pal = {};
  for (const id of new Set([...Object.keys(a.pal || {}), ...Object.keys(b.pal || {})])) pal[id] = fusionarRegistro((a.pal || {})[id], (b.pal || {})[id]);
  const c = a.c && b.c ? (a.c < b.c ? a.c : b.c) : (a.c || b.c || ''), ses = (a.ses || '') > (b.ses || '') ? (a.ses || '') : (b.ses || '');
  return { ...nuevo, id: a.id, t: a.t, mt: Math.max(nm(a.mt), nm(b.mt)), c, ses, pal };
}
/** VE2 · Lo que llega de la nube se sanea con la misma limpieza que los datos del disco (y se migra si es de antes de la v4). null si no se puede leer. */
function leerDocNube(doc) {
  if (!doc || !idPerfilOK(doc.id) || (doc.v | 0) > VERSION_DATOS || doc.d == null) return null;
  try {
    const o = typeof doc.d === 'string' ? JSON.parse(doc.d) : doc.d, p = limpiarPerfil({ ...o, id: doc.id }, (doc.v | 0) < 4);
    if (!p) return null; if (!nm(p.mt)) p.mt = nm(doc.mt); return p;
  } catch (e) { return null; }
}
/** FU1-FU7 · Junta el estado del dispositivo con el de la cuenta. Devuelve:
    { estado: lo que debe quedar en el dispositivo (conserva su `act` y `modo` si siguen existiendo),
      subir: ids de perfiles que hay que escribir en la nube, borrarNube: ids que hay que quitar de la nube (FU2),
      metaSube: hay que escribir `lexico/{uid}` (ajustes, `gmt` o `del`), cambiaLocal: el dispositivo cambia y hay que guardarlo }. */
function fusionarTodo(local, remoto) {
  remoto = remoto || {};
  const L = new Map((local.perfiles || []).map(p => [p.id, p])), R = new Map(), rotos = new Map();
  for (const doc of remoto.perfiles || []) {
    if (!doc || !idPerfilOK(doc.id)) continue;
    const p = leerDocNube(doc); if (p) R.set(doc.id, p); else rotos.set(doc.id, nm(doc.mt)); /* FU6: ni se borra ni se pisa */
  }
  /* FU2 · borrados de los dos lados (el más reciente de cada perfil) */
  const del = {}; for (const src of [local.del, remoto.del]) for (const [id, m] of Object.entries(src || {})) del[id] = Math.max(nm(del[id]), nm(m));
  const perfiles = [], borrarNube = [];
  for (const id of new Set([...L.keys(), ...R.keys()])) {
    const a = L.get(id), b = R.get(id), p = a && b ? fusionarPerfil(a, b) : (a || b), d = nm(del[id]);
    if (d && d >= nm(p.mt) && !(rotos.has(id) && nm(p.mt) < rotos.get(id))) { if (R.has(id) || rotos.has(id)) borrarNube.push(id); continue; } /* borrado: no resucita */
    if (d) delete del[id]; /* se cambió después de borrarlo: sobrevive */
    perfiles.push(p);
  }
  for (const [id, m] of rotos) if (!L.has(id) && nm(del[id]) >= m && nm(del[id])) borrarNube.push(id);
  /* FU1 · ajustes: gana el `gmt` más reciente (empate: el del dispositivo) */
  const lg = nm(local.gmt), rg = nm(remoto.gmt), ajR = remoto.aj ? limpiarAjustes(remoto.aj) : null;
  const ajustes = ajR && rg > lg ? ajR : limpiarAjustes(local.ajustes), gmt = Math.max(lg, rg), delFinal = limpiarDel(del);
  const estado = { ...local, perfiles, ajustes, gmt, del: delFinal };
  if (!perfiles.some(p => p.id === estado.act)) { estado.act = ''; estado.modo = ''; }
  const subir = perfiles.filter(p => (rotos.has(p.id) ? nm(p.mt) > rotos.get(p.id) : !R.has(p.id) || !mismo(p, R.get(p.id)))).map(p => p.id);
  const metaSube = !(ajR && mismo(ajustes, ajR) && gmt === rg && mismo(delFinal, limpiarDel(remoto.del)));
  const parte = e => ({ perfiles: e.perfiles, ajustes: e.ajustes, gmt: e.gmt, del: e.del, act: e.act, modo: e.modo });
  return { estado: copiaJSON(estado), subir, borrarNube: [...new Set(borrarNube)], metaSube, cambiaLocal: !mismo(parte(estado), parte(local)) };
}
/** Cómo queda la cuenta después de subir un estado: lo mismo que `remoto` en `fusionarTodo`. */
function aDocsNube(est) {
  return { aj: est.ajustes, gmt: nm(est.gmt), del: { ...(est.del || {}) }, perfiles: (est.perfiles || []).map(p => ({ id: p.id, mt: nm(p.mt), v: VERSION_DATOS, d: JSON.stringify(p) })) };
}
