/* Pantallas: inicio (Docente / Familias) → quién (elegir o crear perfil) → casa del perfil */
let PANT = 'inicio', MODO = '', NUEVO_AV = null, ERR = '';
const SC = {};
const TXT = { doc: { quien: '¿Qué clase?', nuevo: 'Nueva clase', ph: 'Nombre de la clase (1.º A)', crear: 'Crear clase', vacia: 'Aún no hay clases' },
              fam: { quien: '¿Quién eres?', nuevo: 'Nuevo niño o niña', ph: 'Tu nombre', crear: 'Crear', vacia: 'Aún no hay nadie' } };

function mascotaHTML() {
  return `<div class="lexi-mascota">${mascota(440)}</div>`;
}
const avatarHTML = p => p.t === 'fam'
  ? `<span class="av" style="background:${(AVATARES[p.av] || AVATARES[0])[1]}" aria-hidden="true">${(AVATARES[p.av] || AVATARES[0])[0]}</span>`
  : '<span class="av" style="background:var(--lx-claro)" aria-hidden="true">📚</span>';
const elegirAnimal = (sel, fn = 'animalNuevo') => `<div class="animales" role="group" aria-label="Elige un animal">${AVATARES.map(([e, c], i) =>
  `<button type="button" class="${i === sel ? 'on' : ''}" style="background:${c}" onclick="${fn}(${i})" aria-pressed="${i === sel}" aria-label="Animal ${i + 1}">${e}</button>`).join('')}</div>`;

function barra() {
  if (MODO_DOCENTE) return `<div class="top"><span class="izq">${PANT === 'semana' || PANT === 'pres' || PANT === 'juego' || PANT === 'cierre' || PANT === 'muro' || PANT === 'consulta' || PANT === 'azar' || PANT === 'enc' || PANT === 'encComo' || PANT === 'encHecha' || PANT === 'hoyPreg' || PANT.startsWith('exp') ? '<button class="tema" onclick="atras()" aria-label="Atrás">←</button>' : ''}<span class="pill-md">${ico('grad', 20)} Modo Docente</span></span><span class="dcha">${botonCompleta()}<button class="pill-md salir" onclick="salirDocente()">Salir</button></span></div>`;
  return `<div class="top">${PANT === 'inicio' ? '<span></span>' : '<button class="tema" onclick="atras()" aria-label="Atrás">←</button>'}
  <div class="dcha">${botonCompleta()}${PANT === 'pin' || PANT === 'tz' || PANT === 'imp' ? '' : `<button class="tema" onclick="abrirTutor()" aria-label="Zona del tutor">${ico('lock', 22)}</button>`}<button class="tema" id="bt-tema" onclick="TEMA.alternar()" aria-label="Cambiar tema">◐</button></div></div>`;
}
SC.inicio = function () {
  return `<main class="inicio infantil">${mascotaHTML()}<h1>Lexi</h1><p>Palabras nuevas para toda la clase</p>
  <div class="opciones"><button class="btn grande" onclick="elegirModo('doc')">Docente</button><button class="btn grande sec" onclick="elegirModo('fam')">Familias</button></div>${EST.perfiles.length || typeof fbLogin !== 'function' ? '' : '<button class="enlace" onclick="fbLogin()">Ya uso Lexi en otro dispositivo</button>'}</main>`; /* CU2: solo cuando aún no hay ningún perfil */
};
SC.quien = function () {
  const T = TXT[MODO], lista = perfilesDe(MODO);
  const av = NUEVO_AV ?? avLibre();
  return `<main class="pantalla infantil"><h1 class="h-pant">${T.quien}</h1>
  ${lista.length ? `<div class="quien">${lista.map(p => `<button class="qa${p.id === EST.act ? ' on' : ''}" onclick="entrar('${p.id}')">${avatarHTML(p)}<span>${esc(p.n)}</span></button>`).join('')}</div>` : `<p class="mu">${T.vacia}</p>`}
  <form class="nuevo" onsubmit="crearDesdeForm(event)" novalidate><h2 class="h-sec">${T.nuevo}</h2>
  <input id="nom" class="campo" maxlength="20" autocomplete="off" placeholder="${T.ph}" aria-label="${T.ph}" value="${esc(NUEVO_NOM)}" oninput="NUEVO_NOM=this.value;ERR=''">
  ${MODO === 'fam' ? `<p class="mu pq">Elige tu animal</p>${elegirAnimal(av)}` : ''}
  <p class="error" id="err" role="alert">${esc(ERR)}</p><button class="btn" type="submit">${T.crear}</button></form></main>`;
};
SC.casa = function () {
  if (MODO_DOCENTE) return `<main class="pantalla infantil"><h1 class="h-pant">Modo Docente</h1><p class="mu">Todo abierto y sin guardar nada: para explicar y probar.</p>${escalaFila()}<button class="btn grande" onclick="empezarHoy()">Hoy</button><button class="btn sec" onclick="go('semana')">Palabras de la semana ${SEMANA_ACT}</button><button class="btn sec" onclick="abrirMuro()">Nuestras palabras</button><button class="btn sec" onclick="go('explorar')">Explorar</button><p class="mu pq">Aquí irán las palabras de todas las semanas.</p></main>`;
  const p = perfilAct(); if (!p) { PANT = 'inicio'; return SC.inicio(); }
  return `<main class="pantalla infantil"><div class="casa-cab">${avatarHTML(p)}<h1 class="h-pant" style="margin:0">${esc(p.n)}</h1></div>
  <button class="btn grande" onclick="empezarHoy()">${p.ses === hoy() ? 'Hoy · hecha' : 'Hoy'}</button>
  <button class="btn sec" onclick="go('semana')">Palabras de la semana ${SEMANA_ACT}</button>
  <button class="btn sec" onclick="abrirMuro()">${tituloMuro()}</button><button class="btn sec" onclick="go('explorar')">Explorar</button>${escalaFila()}
  <button class="btn sec" onclick="go('quien')">Cambiar ${p.t === 'doc' ? 'de clase' : 'de niño'}</button></main>`;
};
let NUEVO_NOM = '';
function pintar() {
  $('#app').innerHTML = barra() + (SC[PANT] || SC.inicio)();
}
function go(p) { PANT = p; ERR = ''; pintar(); window.scrollTo(0, 0); }
function atras() {
  if (PANT === 'tz' && (TZ.sub || TZ.borrar)) { TZ.sub = ''; TZ.borrar = ''; TZ.imp = null; ERR = ''; return pintar(); }
  if (HOY && (PANT === 'pres' || PANT === 'juego' || PANT === 'cierre' || PANT === 'hoyPreg')) { HOY = null; return go('casa'); }
  if (PANT === 'enc' || PANT === 'encComo' || PANT === 'encHecha') return encAtras();
  if (PANT === 'pres' || PANT === 'juego') return go('semana');
  if (PANT === 'consulta') return go(CONS_DE);
  if (PANT === 'azar') return go('muro');
  if (PANT === 'expGrupos' || PANT === 'expParejas' || PANT === 'expAzar') return go('explorar');
  if (PANT === 'expPareja') return go('expParejas');
  if (PANT === 'explorar') return go('casa');
  if (PANT === 'resumen') return go('tz');
  if (PANT === 'hoja' || PANT === 'tarj') return go('tz');
  if (PANT === 'semana' || PANT === 'muro') return go('casa');
  if (PANT === 'casa') return go('quien');
  if (PANT === 'imp') { TZ.imp = null; return go(TZ.origen); }
  NUEVO_NOM = ''; NUEVO_AV = null; go('inicio');
}
function salirDocente() { MODO_DOCENTE = false; go('inicio'); }
function elegirModo(m) { MODO = m; NUEVO_NOM = ''; NUEVO_AV = null; go('quien'); }
function animalNuevo(i) { NUEVO_AV = i; pintar(); const f = $('#nom'); if (f) f.focus(); }
function entrar(id) { if (entrarPerfil(id)) go('casa'); }
function crearDesdeForm(ev) {
  ev.preventDefault();
  const n = ss(NUEVO_NOM, 20), e = errorNombre(MODO, n);
  if (e) ERR = e;
  else if (EST.bloq) ERR = 'Estos datos son de una versión más nueva de Lexi';
  else if (!crearPerfil(MODO, n, NUEVO_AV ?? avLibre())) ERR = 'No se ha podido crear';
  else { NUEVO_NOM = ''; NUEVO_AV = null; return go('casa'); }
  pintar(); const f = $('#nom'); if (f) f.focus();
}
