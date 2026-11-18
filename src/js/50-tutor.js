/* ===== Zona del tutor (sobria, letra Inter), protegida con PIN de 4 cifras ===== */
const TZ = { fase: '', pin: '', pin1: '', hasta: 0, destino: 'tz', sub: '', borrar: '', imp: null, origen: 'pin' };

function abrirTutor(destino = 'tz') {
  TZ.destino = destino; TZ.pin = ''; TZ.sub = ''; TZ.borrar = ''; TZ.imp = null;
  if (Date.now() < TZ.hasta && EST.ajustes.pin) return irDestino();
  TZ.fase = EST.ajustes.pin ? 'pedir' : 'crear'; go('pin');
}
function irDestino() { if (TZ.destino === 'docente') entrarDocente(); else go('tz'); }
function entrarDocente() { MODO_DOCENTE = true; go('casa'); }

const botonArchivo = (txt, icono = 'upload') => `<label class="fila-t arch">${ico(icono, 22)}<span class="tx2"><b>${txt}</b></span><input type="file" id="fi" accept="application/json,.json" onchange="leerArchivo(this)"></label>`;
SC.pin = function () {
  const T = { crear: ['Crea un PIN de 4 cifras', 'Se pedirá para entrar en la zona del tutor y en el Modo Docente. Tras escribirlo, no se vuelve a pedir durante 5 minutos.'],
    repetir: ['Repite el PIN', 'Escríbelo otra vez para confirmarlo.'], nuevo: ['Nuevo PIN', 'Escribe el PIN nuevo de 4 cifras.'], pedir: ['Zona del tutor', 'Escribe el PIN de 4 cifras.'] }[TZ.fase];
  const k = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => `<button onclick="pinTecla('${n}')">${n}</button>`).join('');
  return `<main class="pantalla tutor"><div class="tarjeta pinw"><span class="lk">${ico('lock', 26)}</span><h2>${T[0]}</h2><p class="mu">${T[1]}</p>
  <div class="pd" id="pd" role="img" aria-label="${TZ.pin.length} de 4 cifras">${[0, 1, 2, 3].map(i => `<i class="${i < TZ.pin.length ? 'f' : ''}"></i>`).join('')}</div>
  <div class="pk">${k}<span></span><button onclick="pinTecla('0')">0</button><button onclick="pinTecla('b')" aria-label="Borrar">${ico('backspace', 22)}</button></div>
  ${TZ.fase === 'pedir' ? `<p class="mu pq">¿Lo has olvidado? No hace falta borrar nada: restaura una copia de seguridad, que trae su PIN.</p>${botonArchivo('Restaurar copia')}` : ''}</div></main>`;
};
function pinTecla(t) {
  if (t === 'b') TZ.pin = TZ.pin.slice(0, -1); else if (TZ.pin.length < 4) TZ.pin += t;
  pintar(); if (TZ.pin.length < 4) return;
  setTimeout(() => {
    if (TZ.fase === 'crear' || TZ.fase === 'nuevo') { TZ.pin1 = TZ.pin; TZ.pin = ''; TZ.fase = 'repetir'; pintar(); }
    else if (TZ.fase === 'repetir') {
      if (TZ.pin === TZ.pin1) { fijarPin(TZ.pin); TZ.hasta = Date.now() + 3e5; toast('PIN guardado'); irDestino(); }
      else { TZ.pin = ''; TZ.fase = EST.ajustes.pin ? 'nuevo' : 'crear'; mal(); }
    } else { if (TZ.pin === EST.ajustes.pin) { TZ.hasta = Date.now() + 3e5; irDestino(); } else { TZ.pin = ''; mal(); } }
  }, 180);
  function mal() { pintar(); const d = $('#pd'); if (d) d.classList.add('mal'); }
}

const fila = (icono, t, sub, fn) => `<button class="fila-t" onclick="${fn}">${ico(icono, 22)}<span class="tx2"><b>${t}</b>${sub ? `<small>${sub}</small>` : ''}</span>${ico('chev', 18)}</button>`;
SC.tz = function () {
  if (TZ.sub.startsWith('p:')) { const p = EST.perfiles.find(x => x.id === TZ.sub.slice(2)); if (p) return vistaPerfilTZ(p); TZ.sub = ''; }
  const fila_p = p => `<button class="fila-t" onclick="TZ.sub='p:${p.id}';TZ.borrar='';ERR='';pintar()">${avatarHTML(p)}<span class="tx2"><b>${esc(p.n)}</b><small>${p.t === 'doc' ? 'Clase' : 'Niño o niña'}${p.id === EST.act ? ' · activo' : ''}</small></span>${ico('chev', 18)}</button>`;
  const doc = perfilesDe('doc'), fam = perfilesDe('fam');
  return `<main class="pantalla tutor"><h1 class="h-t">Zona del tutor</h1>
  ${EST.bloq ? '<p class="aviso">Estos datos son de una versión más nueva de Lexi: no se modifican desde aquí.</p>' : ''}
  <h2 class="h-s">Clases</h2><div class="lista">${doc.length ? doc.map(fila_p).join('') : '<p class="mu">Aún no hay clases.</p>'}</div>
  <h2 class="h-s">Niños y niñas</h2><div class="lista">${fam.length ? fam.map(fila_p).join('') : '<p class="mu">Aún no hay niños.</p>'}</div>
  <h2 class="h-s">Sesión «Hoy»</h2><div class="tarjeta"><b>Palabras nuevas por sesión</b>
  <div class="dos"><button class="btn${EST.ajustes.nuevas === 1 ? '' : ' sec'}" onclick="nuevasTZ(1)" aria-pressed="${EST.ajustes.nuevas === 1}">1</button><button class="btn${EST.ajustes.nuevas === 1 ? ' sec' : ''}" onclick="nuevasTZ(2)" aria-pressed="${EST.ajustes.nuevas !== 1}">2</button></div>
  <p class="mu pq">Nunca más de 6 palabras nuevas por semana. Con sesión todos los días van bien 2; con 3 o 4 sesiones a la semana conviene 1.</p></div>
  <h2 class="h-s">Aula</h2><div class="lista">${fila('grad', 'Modo Docente', 'Todo abierto, sin guardar: para explicar', "entrarDocente()")}</div>
  <p class="mu pq">${TEXTO_ATAJOS}</p>
  <h2 class="h-s">Datos</h2><div class="lista">${fila('download', 'Guardar copia de seguridad', 'Archivo con clases, niños y PIN', 'exportar()')}${botonArchivo('Restaurar copia')}${fila('key', 'Cambiar PIN', '', "TZ.fase='nuevo';TZ.pin='';go('pin')")}</div>
  <button class="btn sec" onclick="go('inicio')">Salir de la zona del tutor</button></main>`;
};
function vistaPerfilTZ(p) {
  const T = TXT[p.t];
  return `<main class="pantalla tutor"><div class="casa-cab">${avatarHTML(p)}<h1 class="h-t" style="margin:0">${esc(p.n)}</h1></div>
  <form class="tarjeta" onsubmit="renombrarTZ(event,'${p.id}')" novalidate><h2 class="h-s">Nombre</h2>
  <input id="nom" class="campo" maxlength="20" autocomplete="off" value="${esc(NUEVO_NOM || p.n)}" aria-label="Nombre" oninput="NUEVO_NOM=this.value;ERR=''">
  <p class="error" id="err" role="alert">${esc(ERR)}</p><button class="btn" type="submit">Guardar nombre</button></form>
  ${p.t === 'fam' ? `<div class="tarjeta"><h2 class="h-s">Animal</h2>${elegirAnimal(p.av, `animalTZ`)}</div>` : ''}
  <div class="tarjeta">${TZ.borrar === p.id
    ? `<p><b>¿Borrar «${esc(p.n)}»?</b> Se pierde todo lo suyo y no se puede deshacer. Puedes guardar antes una copia de seguridad.</p><div class="dos"><button class="btn peligro" onclick="borrarTZ('${p.id}')">Sí, borrar</button><button class="btn sec" onclick="TZ.borrar='';pintar()">No</button></div>`
    : `<button class="btn peligro sec" onclick="TZ.borrar='${p.id}';pintar()">${ico('trash', 20)} Borrar ${p.t === 'doc' ? 'esta clase' : 'este perfil'}</button>`}</div></main>`;
}
function renombrarTZ(ev, id) {
  ev.preventDefault(); const p = EST.perfiles.find(x => x.id === id); if (!p) return;
  const e = errorNombre(p.t, NUEVO_NOM || p.n, id);
  if (e) { ERR = e; pintar(); return; }
  renombrarPerfil(id, NUEVO_NOM || p.n); NUEVO_NOM = ''; ERR = ''; pintar(); toast('Nombre guardado');
}
function nuevasTZ(n) { fijarNuevas(n); pintar(); toast(n === 1 ? '1 palabra nueva por sesión' : '2 palabras nuevas por sesión'); }
function animalTZ(i) { const id = TZ.sub.slice(2); cambiarAnimal(id, i); pintar(); }
function borrarTZ(id) { borrarPerfil(id); TZ.sub = ''; TZ.borrar = ''; NUEVO_NOM = ''; pintar(); toast('Perfil borrado'); }

function exportar() {
  const b = new Blob([exportarTexto()], { type: 'application/json' }), u = URL.createObjectURL(b), l = document.createElement('a');
  l.href = u; l.download = `lexi-copia-${hoy()}.json`; document.body.appendChild(l); l.click(); l.remove(); setTimeout(() => URL.revokeObjectURL(u), 2000); toast('Copia descargada');
}
function leerArchivo(inp) {
  const f = inp.files[0]; if (!f) return;
  f.text().then(t => { const r = leerCopia(t); TZ.origen = PANT === 'pin' ? 'pin' : 'tz'; TZ.imp = r.datos || null; const e = r.error || ''; go('imp'); ERR = e; pintar(); });
}
SC.imp = function () {
  if (!TZ.imp) return `<main class="pantalla tutor"><h1 class="h-t">Restaurar copia</h1><p class="aviso" role="alert">${esc(ERR || 'No se pudo leer la copia')}</p><button class="btn sec" onclick="ERR='';go(TZ.origen)">Volver</button></main>`;
  const n = TZ.imp.perfiles.length;
  return `<main class="pantalla tutor"><h1 class="h-t">Restaurar copia</h1>
  <p>La copia tiene <b>${n} ${n === 1 ? 'perfil' : 'perfiles'}</b>. Si sigues, sustituye los datos actuales (se guardan antes por si acaso).</p>
  <div class="dos"><button class="btn" onclick="confirmarCopia()">Sustituir</button><button class="btn sec" onclick="TZ.imp=null;go(TZ.origen)">Cancelar</button></div></main>`;
};
function confirmarCopia() { aplicarCopia(TZ.imp); TZ.imp = null; TZ.sub = ''; TZ.hasta = 0; toast('Copia restaurada'); go('inicio'); }
