/* ===== Explorar: pantallas (reglas EX1-EX4 de docs/aula.md; qué sale: 37-explorar.js) =====
   Para mirar las palabras juntas y hablar de ellas. No está dentro de «Hoy», no valora y no guarda nada. */
let EXP = { pareja: 0, dos: null };
const nombreDe = id => { const p = palabraPorId(id); return p ? p.palabra : ''; };
const tarjetaExp = (p, onclick) => `<button class="pal" onclick="${onclick}"><img src="${esc(imgPal(p))}" alt="" loading="lazy"><span class="pal-pie"><span class="pal-n">${esc(p.palabra)}</span></span></button>`;
function expDos() { EXP.dos = explorarDosAlAzar(palMuro(), PALABRAS); go('expAzar'); }
function expPareja(i) { EXP.pareja = i; go('expPareja'); }

SC.explorar = function () {
  const d = explorarDisponible(palMuro(), PALABRAS);
  if (!d.grupos && !d.parejas && !d.azar) return `<main class="pantalla infantil"><div class="lexi-mascota">${mascota(240)}</div><h1 class="h-pant">Explorar</h1><p class="mu">Aquí irá Explorar cuando haya más palabras</p></main>`;
  return `<main class="pantalla infantil"><h1 class="h-pant">Explorar</h1>
  ${d.grupos ? `<button class="btn grande" onclick="go('expGrupos')">Por grupos</button>` : ''}${d.parejas ? `<button class="btn grande" onclick="go('expParejas')">Parejas</button>` : ''}${d.azar ? `<button class="btn grande" onclick="expDos()">Dos al azar</button>` : ''}</main>`;
};
/** EX1 · Por grupos: cada grupo con su título; al tocar una palabra, su ficha de consulta. */
SC.expGrupos = function () {
  const g = explorarGrupos(palMuro(), PALABRAS); if (!g.length) return SC.explorar();
  return `<main class="pantalla infantil ancha"><h1 class="h-pant">Por grupos</h1>
  ${g.map(x => `<p class="rotulo">${esc(x.titulo)}</p><div class="palabras">${x.palabras.map(p => tarjetaExp(p, `abrirConsulta('${p.id}','expGrupos')`)).join('')}</div>`).join('')}</main>`;
};
/** EX2 · Parejas: lista de parejas; al tocar una, las dos imágenes en grande y su pregunta. */
SC.expParejas = function () {
  const l = explorarParejas(palMuro(), PALABRAS); if (!l.length) return SC.explorar();
  return `<main class="pantalla infantil ancha"><h1 class="h-pant">Parejas</h1><div class="parejas">${l.map((x, i) => `<button class="pal pareja-mini" onclick="expPareja(${i})"><span class="pal-n">${esc(nombreDe(x.a))} · ${esc(nombreDe(x.b))}</span></button>`).join('')}</div></main>`;
};
const parejaGrande = (a, b) => `<div class="pareja">${[a, b].map(id => { const p = palabraPorId(id); return p ? `<figure><img src="${esc(imgPal(p))}" alt=""><figcaption class="palabra-g">${esc(p.palabra)}</figcaption></figure>` : ''; }).join('')}</div>`;
SC.expPareja = function () {
  const l = explorarParejas(palMuro(), PALABRAS), x = l[EXP.pareja]; if (!x) return SC.expParejas();
  return `<main class="pantalla infantil ancha">${parejaGrande(x.a, x.b)}<p class="gr" style="text-align:center">${esc(x.q)}</p></main>`;
};
/** EX3 · Dos al azar. */
SC.expAzar = function () {
  const d = EXP.dos; if (!d) return SC.explorar();
  return `<main class="pantalla infantil ancha">${parejaGrande(d[0], d[1])}<p class="gr" style="text-align:center">¿Quién dice una frase con las dos?</p>
  <div class="nav"><span></span><button class="btn" onclick="expDos()">Otras dos</button></div></main>`;
};
