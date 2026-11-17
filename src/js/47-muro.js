/* ===== Muro «Nuestras palabras»: pantallas (reglas MU1-MU11 de docs/aula.md; qué sale: 36-muro.js) =====
   Solo consulta: abrir una ficha o sacar una al azar no valora, no cuenta tareas y no cambia nada del perfil. */
let CONS = '', AZAR = { id: '', pet: '', k: 0, rev: false };
/** Las palabras del muro: las presentadas del perfil; en Modo Docente, las de la semana elegida «en La conocemos», de muestra (MU10). */
function palMuro() {
  if (!MODO_DOCENTE) { const p = perfilAct(); return (p && p.pal) || {}; }
  const o = {}; palabrasSemana(SEMANA_ACT).forEach(p => { o[p.id] = { ...palabraNueva(), e: 2, pres: hoy() }; }); return o;
}
const tituloMuro = () => { const p = MODO_DOCENTE ? null : perfilAct(); return p && p.t !== 'doc' ? 'Mis palabras' : 'Nuestras palabras'; };
const abrirMuro = () => go('muro');
function abrirConsulta(id) { CONS = id; go('consulta'); }
function azarOtra() { const pal = palMuro(), s = azarSiguiente(pal, PALABRAS, AZAR.id, AZAR.k); if (!s) return go('muro'); AZAR = { id: s.id, pet: s.pet, k: AZAR.k + 1, rev: false }; go('azar'); }
function azarEmpezar() { AZAR = { id: '', pet: '', k: 0, rev: false }; azarOtra(); }
function azarVer() { AZAR.rev = true; pintar(); }

SC.muro = function () {
  const pal = palMuro(), sem = muroSemanas(pal, PALABRAS), n = muroCuenta(pal, PALABRAS);
  if (!n) return `<main class="pantalla infantil"><div class="lexi-mascota">${mascota(240)}</div><h1 class="h-pant">${tituloMuro()}</h1><p class="mu">Aquí irán nuestras palabras</p></main>`;
  setTimeout(() => sem.forEach(s => s.palabras.forEach(p => { const im = new Image(); im.src = imgPal(p); })), 0);
  return `<main class="pantalla infantil ancha"><h1 class="h-pant">${tituloMuro()}</h1><p class="mu">Ya son ${n}</p>
  <button class="btn grande" onclick="azarEmpezar()">Una al azar</button>
  ${sem.map(s => `<p class="rotulo">Semana ${s.semana}</p><div class="palabras">${s.palabras.map(p => `<button class="pal" onclick="abrirConsulta('${p.id}')"><img src="${esc(imgPal(p))}" alt="" loading="lazy">
  <span class="pal-pie"><span class="pal-n">${esc(p.palabra)}</span>${escalaSVG(regDe(pal, p.id).e)}</span></button>`).join('')}</div>`).join('')}</main>`;
};
/** MU4 · Ficha de consulta: imagen, palabra, explicación, gesto y los tres contextos; el segundo significado solo si ya se enseñó. */
SC.consulta = function () {
  const p = palabraPorId(CONS); if (!p) return SC.muro();
  const a = MODO_DOCENTE ? null : estadoPal(perfilAct(), p.id);
  return `<main class="pantalla infantil ancha"><div class="escena"><img class="esc-img" src="${esc(imgPal(p))}" alt=""></div>
  <h1 class="palabra-g" style="text-align:center">${esc(p.palabra)}</h1><p class="gr">${esc(p.def)}</p><p class="gr">${esc(p.gesto)}</p>
  ${p.contextos.map(c => `<p class="gr">${esc(c)}</p>`).join('')}${a && a.ov && p.otro ? `<p class="mu gr-p">También quiere decir…</p><p class="gr">${esc(p.otro)}</p>` : ''}</main>`;
};
/** MU5 · «Una al azar»: una petición suelta; no guarda nada. */
SC.azar = function () {
  const p = palabraPorId(AZAR.id); if (!p) return SC.muro();
  const rot = { gesto: 'Haz su gesto', def: '¿Qué quiere decir?', frase: 'Una frase con ella' }[AZAR.pet];
  const res = { gesto: p.gesto, def: p.def, frase: p.contextos[AZAR.k % p.contextos.length] }[AZAR.pet];
  return `<main class="pantalla infantil ancha pres"><p class="rotulo">${rot}</p>
  <div class="cuerpo"><p class="palabra-g">${esc(p.palabra)}</p>${AZAR.rev ? `<p class="gr">${esc(res)}</p>` : ''}</div>
  <div class="nav">${AZAR.rev ? '<span></span>' : '<button class="btn sec" onclick="azarVer()">Ver</button>'}<button class="btn" onclick="azarOtra()">Otra</button></div></main>`;
};
