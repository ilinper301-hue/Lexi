/* ===== Hoja para las familias «Nuestras palabras de la semana» (reglas FA1-FA5 de docs/aula.md) =====
   Todo sale de las fichas: no lleva notas, progreso, nombres de niños ni menciona otras apps. La app no envía nada: se imprime o se guarda en PDF. */
const HOJA_ARRIBA = 'Esta semana estamos aprendiendo estas palabras en clase. No hace falta estudiarlas: basta con usarlas en casa, hablando.';
const HOJA_IDEAS = ['Usa tú la palabra cuando venga a cuento.', 'Pídele que te enseñe el gesto y que te explique qué quiere decir.', 'Si la oye o la dice fuera del colegio, que lo cuente en clase: la apuntamos en nuestro muro.'];
let HOJA = { s: 0, img: true };

/** Semanas con fichas en la app (de menor a mayor). */
const semanasConFicha = (palabras = PALABRAS) => [...new Set(palabras.filter(p => p.curso === 1).map(p => p.semana))].sort((a, b) => a - b);
/** FA2 · HTML de la hoja de una semana: las 6 palabras en el orden de la ficha. `conImg` = false → sin imágenes (gasta menos tinta). */
function hojaFamilias(semana, conImg = true, palabras = PALABRAS) {
  const l = palabras.filter(p => p.curso === 1 && p.semana === semana).sort((a, b) => a.orden - b.orden);
  const f = p => `<li class="hoja-pal">${conImg ? `<img src="img/palabras/${esc(p.escena.img)}" alt="" onerror="this.style.display='none'">` : ''}<div><h3>${esc(p.palabra)}</h3><p>${esc(p.def)}</p><p><b>Su gesto:</b> ${esc(p.gesto)}</p><p><b>Empieza tú la frase y que la acabe:</b> ${esc(p.acaba[0])}</p></div></li>`;
  return `<article class="hoja"><h2>Nuestras palabras de la semana ${semana}</h2><p>${esc(HOJA_ARRIBA)}</p><ul class="hoja-lista">${l.map(f).join('')}</ul><h3 class="hoja-ideas">Tres ideas</h3><ol>${HOJA_IDEAS.map(x => `<li>${esc(x)}</li>`).join('')}</ol></article>`;
}
SC.hoja = function () {
  const sem = semanasConFicha(); if (!sem.includes(HOJA.s)) HOJA.s = sem[0] || 0;
  return `<main class="pantalla tutor"><h1 class="h-t hoja-ctl">Hoja para las familias</h1>
  <div class="tarjeta hoja-ctl"><b>Semana</b><div class="dos">${sem.map(s => `<button class="btn${s === HOJA.s ? '' : ' sec'}" onclick="HOJA.s=${s};pintar()" aria-pressed="${s === HOJA.s}">${s}</button>`).join('')}</div>
  <button class="btn${HOJA.img ? ' sec' : ''}" id="hoja-sin" onclick="HOJA.img=!HOJA.img;pintar()" aria-pressed="${!HOJA.img}">Sin imágenes (gasta menos tinta)</button>
  <button class="btn" onclick="window.print()">Imprimir o guardar en PDF</button>
  <p class="mu pq">Se envía por el canal del centro: Lexi no envía nada. No lleva notas ni nombres.</p></div>
  ${HOJA.s ? hojaFamilias(HOJA.s, HOJA.img) : '<p class="mu">Aún no hay palabras.</p>'}</main>`;
};
