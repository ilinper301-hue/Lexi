/* ===== «La hemos encontrado»: pantallas (reglas EN1-EN10 de docs/aula.md; las cuentas viven en 30-escala-logica.js y 20-datos.js) =====
   Dos toques: la palabra y cómo (oída, vista escrita, dicha). No mueve la escala ni el repaso. En Modo Docente funciona pero no guarda (EN9). */
let ENC = { id: '', vuelta: 'muro', ficha: false, ant: null, des: false };
const ENC_COMO_TXT = { o: ['ear', 'La hemos oído'], v: ['eye', 'La hemos visto escrita'], d: ['mouth', 'La hemos dicho'] };

/** Empieza desde el muro ('muro'), desde una ficha ('consulta', con su palabra ya elegida) o desde «Hoy» ('hoy'). */
function encEmpezar(vuelta, id = '') {
  ENC = { id, vuelta, ficha: !!id, ant: null, des: false };
  go(id ? 'encComo' : 'enc');
}
function encElegir(id) { ENC.id = id; ENC.ficha = false; go('encComo'); }
/** EN2, EN4 · Apunta y enseña «¡Apuntada!» con «Deshacer» unos segundos. */
function encApuntar(como) {
  const r = apuntarEncontrada(ENC.id, como); /* en Modo Docente no guarda: la pantalla sale igual (EN9) */
  ENC.ant = r ? r.ant : undefined; ENC.des = !!r; go('encHecha');
  if (r) setTimeout(() => { if (PANT === 'encHecha' && ENC.des) { ENC.des = false; const b = $('#enc-des'); if (b) b.remove(); } }, 6000);
}
function encDeshacer() {
  if (!ENC.des) return;
  deshacerEncontrada(ENC.id, ENC.ant); ENC.des = false; toast('Deshecho'); go('encComo');
}
/** Adonde se vuelve al acabar o al ir atrás desde la primera pantalla. */
function encFin() { if (ENC.vuelta === 'hoy') return hoyAvanzar(); if (ENC.vuelta === 'consulta') return go('consulta'); go('muro'); }
function encAtras() {
  if (PANT === 'encComo' && !ENC.ficha) return go('enc');
  if (PANT === 'enc' && ENC.vuelta === 'hoy') return go('hoyPreg');
  encFin();
}
const encMenos = () => { ENC.des = false; };

/** EN1 · Primera pantalla de «Hoy». */
SC.hoyPreg = function () {
  return `<main class="pantalla infantil"><div class="lexi-mascota">${mascota(200)}</div>
  <h1 class="h-pant">¿Alguien ha encontrado alguna de nuestras palabras?</h1>
  <div class="dos"><button class="btn grande" onclick="encEmpezar('hoy')">Sí</button><button class="btn grande sec" onclick="hoyAvanzar()">Hoy no</button></div></main>`;
};
/** EN2 · Primer toque: la palabra (solo las presentadas, con su imagen). */
SC.enc = function () {
  const pal = palMuro(), sem = muroSemanas(pal, PALABRAS);
  if (!muroCuenta(pal, PALABRAS)) return SC.muro();
  return `<main class="pantalla infantil ancha"><h1 class="h-pant">¿Qué palabra hemos encontrado?</h1><p class="mu pq">${TEXTO_ENC3}</p>
  ${sem.map(s => `<p class="rotulo">Semana ${s.semana}</p><div class="palabras">${s.palabras.map(p => `<button class="pal" onclick="encElegir('${p.id}')"><img src="${esc(imgPal(p))}" alt="" loading="lazy">
  <span class="pal-pie"><span class="pal-n">${esc(p.palabra)}</span></span></button>`).join('')}</div>`).join('')}</main>`;
};
/** EN2, EN3 · Segundo toque: cómo la hemos encontrado (oreja, ojo, boca). */
SC.encComo = function () {
  const p = palabraPorId(ENC.id); if (!p) return SC.muro();
  return `<main class="pantalla infantil ancha"><div class="escena"><img class="esc-img" src="${esc(imgPal(p))}" alt=""></div>
  <h1 class="palabra-g" style="text-align:center">${esc(p.palabra)}</h1><p class="mu pq" style="text-align:center">${TEXTO_ENC3}</p>
  ${ENC_COMO_TIPOS.map(k => `<button class="btn grande enc-btn" onclick="encApuntar('${k}')">${ico(ENC_COMO_TXT[k][0], 40)}<span>${ENC_COMO_TXT[k][1]}</span></button>`).join('')}</main>`;
};
/** EN4 · «¡Apuntada!» con «Deshacer» unos segundos. */
SC.encHecha = function () {
  const p = palabraPorId(ENC.id);
  return `<main class="pantalla infantil"><div class="lexi-mascota">${mascota(200)}</div><h1 class="h-pant">¡Apuntada!</h1>${p ? `<p class="palabra-g" style="text-align:center">${esc(p.palabra)}</p>` : ''}
  ${ENC.des ? '<button class="btn sec" id="enc-des" onclick="encDeshacer()">Deshacer</button>' : ''}
  <div class="dos"><button class="btn sec" onclick="encMenos();go('enc')">Otra palabra</button><button class="btn" onclick="encFin()">${ENC.vuelta === 'hoy' ? 'Seguir con Hoy' : 'Listo'}</button></div></main>`;
};
const TEXTO_ENC3 = '¿Dónde? ¿Quién la dijo? ¿Qué quería decir?', ENC_COMO_TIPOS = ['o', 'v', 'd'];
