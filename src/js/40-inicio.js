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
  if (PANT === 'casa') return ''; /* la casa lleva su propia cabecera, como Calculi y Lectori */
  if (MODO_DOCENTE) return `<div class="top"><span class="izq">${PANT === 'semana' || PANT === 'pres' || PANT === 'juego' || PANT === 'cierre' || PANT === 'muro' || PANT === 'jardines' || PANT === 'consulta' || PANT === 'azar' || PANT === 'enc' || PANT === 'encComo' || PANT === 'encHecha' || PANT === 'hoyPreg' || PANT.startsWith('exp') ? '<button class="tema" onclick="atras()" aria-label="Atrás">←</button>' : ''}<span class="pill-md">${ico('grad', 20)} Modo Docente</span></span><span class="dcha">${botonCompleta()}<button class="pill-md salir" onclick="salirDocente()">Salir</button></span></div>`;
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
/* Casa del perfil con el mismo esquema que Calculi y Lectori: cabecera (logo + nombre, avatar, tema),
   saludo con la mascota, tarjeta principal, tarjetas con icono, pareja de botones y «Zona del tutor» discontinua */
function cabeceraCasa(p) {
  const der = MODO_DOCENTE
    ? `<button class="pill-md salir" onclick="salirDocente()">${ico('grad', 20)} Salir</button>`
    : `<button class="av-bt" onclick="go('quien')" aria-label="Cambiar ${p.t === 'doc' ? 'de clase' : 'de niño'}">${avatarHTML(p)}</button>`;
  const osc = document.documentElement.dataset.theme === 'dark';
  return `<div class="hd casa-cab"><div class="brand"><img class="logo" src="icons/icon-192.png" alt="" width="42" height="42"><span class="wm">Lexi</span></div>
  <div class="hr">${der}<button class="rnd" onclick="TEMA.alternar();pintar()" aria-label="Cambiar tema">${ico(osc ? 'sun' : 'moon', 22)}</button></div></div>`;
}
const tarjeta = (cls, icono, txt, act) => `<button class="lc${cls}" onclick="${act}"><span class="ico">${ico(icono, 28)}</span>${txt}</button>`;
SC.casa = function () {
  const p = MODO_DOCENTE ? null : perfilAct();
  if (!MODO_DOCENTE && !p) { PANT = 'inicio'; return SC.inicio(); }
  const saludo = MODO_DOCENTE ? '¡Modo Docente!' : `¡Hola, ${esc(p.n)}!`;
  const frase = MODO_DOCENTE ? 'Todo abierto y sin guardar' : '¿Aprendemos palabras?';
  return `<main class="casa infantil">${cabeceraCasa(p)}
  <div class="greet">${mascota(132)}<div><h1 class="hi">${saludo}</h1><p>${frase}</p></div></div>
  <div class="home-grid">${tarjeta(' hero', 'play', p && p.ses === hoy() ? 'Hoy · hecha' : 'Hoy', 'empezarHoy()')}
  ${tarjeta('', 'book', `Palabras de la semana ${SEMANA_ACT}`, "go('semana')")}${tarjeta('', 'sprout', tituloMuro(), 'abrirMuro()')}${tarjeta('', 'flower', tituloJardines(), "go('jardines')")}</div>
  <div class="duo"><button class="hc" onclick="go('explorar')">${ico('compass', 26)}Explorar</button>${MODO_DOCENTE ? '' : `<button class="hc" onclick="go('quien')">${ico('users', 26)}Cambiar ${p.t === 'doc' ? 'de clase' : 'de niño'}</button>`}</div>
  <div class="crece">${escalaFila()}</div>
  ${MODO_DOCENTE ? '' : `<button class="tzb" onclick="abrirTutor()" aria-label="Zona del tutor">${ico('lock', 20)}Zona del tutor</button>`}</main>`;
};
let NUEVO_NOM = '';
function pintar() {
  $('#app').dataset.sc = PANT;
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
  if (PANT === 'semana' || PANT === 'muro' || PANT === 'jardines') return go('casa');
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
