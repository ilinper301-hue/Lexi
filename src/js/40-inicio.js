/* Pantallas: inicio (Docente / Familias) → quién (elegir o crear perfil) → casa del perfil */
let PANT = 'inicio', MODO = '', NUEVO_AV = null, ERR = '';
const TXT = { doc: { quien: '¿Qué clase?', nuevo: 'Nueva clase', ph: 'Nombre de la clase (1.º A)', crear: 'Crear clase', vacia: 'Aún no hay clases' },
              fam: { quien: '¿Quién eres?', nuevo: 'Nuevo niño o niña', ph: 'Tu nombre', crear: 'Crear', vacia: 'Aún no hay nadie' } };

function mascotaHTML() {
  return '<div class="lexi-mascota" role="img" aria-label="Lexi, la mascota">'
    + '<span class="sombra" style="left:15.777%;top:88.977%;width:67.194%;height:10.229%"></span>'
    + '<div class="flota"><img class="brazo" src="img/mascota/brazo.png" alt="">'
    + '<img src="img/mascota/cuerpo.png" alt="">'
    + '<i class="lid" style="left:26.877%;top:24.603%;width:19.236%;height:25.750%"></i>'
    + '<i class="lid" style="left:52.306%;top:18.871%;width:19.631%;height:26.279%"></i></div></div>';
}
const avatarHTML = p => p.t === 'fam'
  ? `<span class="av" style="background:${(AVATARES[p.av] || AVATARES[0])[1]}" aria-hidden="true">${(AVATARES[p.av] || AVATARES[0])[0]}</span>`
  : '<span class="av" style="background:var(--lx-pale)" aria-hidden="true">📚</span>';
const elegirAnimal = sel => `<div class="animales" role="group" aria-label="Elige un animal">${AVATARES.map(([e, c], i) =>
  `<button type="button" class="${i === sel ? 'on' : ''}" style="background:${c}" onclick="animalNuevo(${i})" aria-pressed="${i === sel}" aria-label="Animal ${i + 1}">${e}</button>`).join('')}</div>`;

function barra() {
  return `<div class="top">${PANT === 'inicio' ? '<span></span>' : '<button class="tema" onclick="atras()" aria-label="Atrás">←</button>'}`
    + '<button class="tema" id="bt-tema" onclick="TEMA.alternar()" aria-label="Cambiar tema">◐</button></div>';
}
function vistaInicio() {
  return `<main class="inicio infantil">${mascotaHTML()}<h1>Lexi</h1><p>Palabras nuevas para toda la clase</p>
  <div class="opciones"><button class="btn grande" onclick="elegirModo('doc')">Docente</button><button class="btn grande sec" onclick="elegirModo('fam')">Familias</button></div></main>`;
}
function vistaQuien() {
  const T = TXT[MODO], lista = perfilesDe(MODO);
  const av = NUEVO_AV ?? avLibre();
  return `<main class="pantalla infantil"><h1 class="h-pant">${T.quien}</h1>
  ${lista.length ? `<div class="quien">${lista.map(p => `<button class="qa${p.id === EST.act ? ' on' : ''}" onclick="entrar('${p.id}')">${avatarHTML(p)}<span>${esc(p.n)}</span></button>`).join('')}</div>` : `<p class="mu">${T.vacia}</p>`}
  <form class="nuevo" onsubmit="crearDesdeForm(event)" novalidate><h2 class="h-sec">${T.nuevo}</h2>
  <input id="nom" class="campo" maxlength="20" autocomplete="off" placeholder="${T.ph}" aria-label="${T.ph}" value="${esc(NUEVO_NOM)}" oninput="NUEVO_NOM=this.value;ERR=''">
  ${MODO === 'fam' ? `<p class="mu pq">Elige tu animal</p>${elegirAnimal(av)}` : ''}
  <p class="error" id="err" role="alert">${esc(ERR)}</p><button class="btn" type="submit">${T.crear}</button></form></main>`;
}
function vistaCasa() {
  const p = perfilAct(); if (!p) { PANT = 'inicio'; return vistaInicio(); }
  return `<main class="pantalla infantil"><div class="casa-cab">${avatarHTML(p)}<h1 class="h-pant" style="margin:0">${esc(p.n)}</h1></div>
  <p class="mu">Aquí irá la sesión de hoy.</p>${escalaFila()}
  <button class="btn sec" onclick="go('quien')">Cambiar ${p.t === 'doc' ? 'de clase' : 'de niño'}</button></main>`;
}
let NUEVO_NOM = '';
function pintar() {
  $('#app').innerHTML = barra() + (PANT === 'quien' ? vistaQuien() : PANT === 'casa' ? vistaCasa() : vistaInicio());
}
function go(p) { PANT = p; ERR = ''; pintar(); }
function atras() { if (PANT === 'casa') return go('quien'); NUEVO_NOM = ''; NUEVO_AV = null; go('inicio'); }
function elegirModo(m) { MODO = m; NUEVO_NOM = ''; NUEVO_AV = null; go('quien'); }
function animalNuevo(i) { NUEVO_AV = i; pintar(); const f = $('#nom'); if (f) f.focus(); }
function entrar(id) { if (entrarPerfil(id)) go('casa'); }
function crearDesdeForm(ev) {
  ev.preventDefault();
  const n = ss(NUEVO_NOM, 20);
  if (!n) ERR = 'Escribe un nombre';
  else if (perfilesDe(MODO).some(p => p.n.toLowerCase() === n.toLowerCase())) ERR = 'Ese nombre ya existe';
  else if (EST.bloq) ERR = 'Estos datos son de una versión más nueva de Lexi';
  else if (!crearPerfil(MODO, n, NUEVO_AV ?? avLibre())) ERR = 'No se ha podido crear';
  else { NUEVO_NOM = ''; NUEVO_AV = null; return go('casa'); }
  pintar(); const f = $('#nom'); if (f) f.focus();
}
