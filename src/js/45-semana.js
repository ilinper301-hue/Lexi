/* ===== Palabras de la semana y presentación de una palabra nueva (la guía el docente; la app solo muestra texto) =====
   Orden de docs/pedagogia.md: escena · la decimos · palmadas · explicación · gesto · 3 contextos · fin. */
const SEMANA_ACT = 1;
let PRES = { id: '', i: 0 };
const PRES_PASOS = 9;
const palabrasSemana = n => PALABRAS.filter(p => p.semana === n);
const imgPal = p => 'img/palabras/' + p.escena.img;

SC.semana = function () {
  const pr = MODO_DOCENTE ? null : perfilAct(), lista = palabrasSemana(SEMANA_ACT);
  setTimeout(() => lista.forEach(p => { const im = new Image(); im.src = imgPal(p); }), 0); /* el service worker las guarda para usarlas sin conexión */
  return `<main class="pantalla infantil ancha"><h1 class="h-pant">Semana ${SEMANA_ACT}</h1>
  <p class="mu">Toca una palabra para presentarla a la clase.</p>
  <div class="palabras">${lista.map(p => `<button class="pal" onclick="abrirPalabra('${p.id}')"><img src="${esc(imgPal(p))}" alt="" loading="lazy">
  <span class="pal-pie"><span class="pal-n">${esc(p.palabra)}</span>${escalaSVG(estadoPal(pr, p.id).e)}</span></button>`).join('')}</div></main>`;
};

SC.pres = function () {
  const p = palabraPorId(PRES.id); if (!p) return SC.semana();
  const i = PRES.i, ult = i === PRES_PASOS - 1;
  let rot, cuerpo;
  if (i === 0) { rot = 'Escena'; cuerpo = `<div class="escena"><img class="esc-img" src="${esc(imgPal(p))}" alt=""><p class="gr">${esc(p.escena.texto)}</p></div>`; }
  else if (i === 1) { rot = 'La decimos todos'; cuerpo = `<p class="palabra-g">${esc(p.palabra)}</p><p class="mu gr-p">Todos juntos</p>`; }
  else if (i === 2) {
    rot = 'Con palmadas';
    cuerpo = `<p class="silabas">${p.silabas.map(s => `<span class="sil">${esc(s)}</span>`).join('<i class="pt" aria-hidden="true">·</i>')}</p><p class="mu gr-p">${p.silabas.length} ${p.silabas.length === 1 ? 'palmada' : 'palmadas'}</p>`;
  }
  else if (i === 3) { rot = 'Qué quiere decir'; cuerpo = `<p class="pal-ch">${esc(p.palabra)}</p><p class="gr">${esc(p.def)}</p>`; }
  else if (i === 4) { rot = 'Gesto'; cuerpo = `<p class="pal-ch">${esc(p.palabra)}</p><p class="gr">${esc(p.gesto)}</p>`; }
  else if (i <= 7) { rot = `Más ejemplos · ${i - 4} de 3`; cuerpo = `<p class="pal-ch">${esc(p.palabra)}</p><p class="gr">${esc(p.contextos[i - 5])}</p>`; }
  else { rot = 'Ya la conocemos'; cuerpo = `<p class="palabra-g">${esc(p.palabra)}</p><div class="fin-esc">${escalaSVG(2)}<span>${PASOS[1]}</span></div>`; }
  const pts = Array.from({ length: PRES_PASOS }, (_, k) => `<i class="${k === i ? 'on' : k < i ? 'hecho' : ''}"></i>`).join('');
  return `<main class="pantalla infantil ancha pres"><p class="rotulo">${rot}</p>
  <div class="cuerpo">${cuerpo}</div><div class="pts" aria-hidden="true">${pts}</div>
  <div class="nav">${i > 0 ? '<button class="btn sec" onclick="presMover(-1)">← Antes</button>' : '<span></span>'}
  ${ult ? '<button class="btn" onclick="atras()">Terminar</button>' : '<button class="btn" onclick="presMover(1)">Siguiente →</button>'}</div></main>`;
};
function abrirPalabra(id) { PRES = { id, i: 0 }; go('pres'); }
function presMover(d) {
  PRES.i = Math.max(0, Math.min(PRES_PASOS - 1, PRES.i + d));
  if (PRES.i === PRES_PASOS - 1) presentarPalabra(PRES.id); /* al llegar al final se da por presentada (en Modo Docente no se guarda) */
  pintar(); window.scrollTo(0, 0);
}
