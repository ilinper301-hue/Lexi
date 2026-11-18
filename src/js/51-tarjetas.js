/* ===== Tarjetas para imprimir (reglas TA1-TA5 de docs/aula.md): para el muro de la pared de la clase =====
   Salen de las fichas. No llevan datos de la clase ni el paso de la escala (TA5): valen de un año para otro. Papel blanco, se entienden en blanco y negro. */
let TARJ = { s: 0, tam: 'g' }; /* s: semana, o 0 = todas las presentadas */

/** Palabras que entran: de una semana (en el orden de la ficha) o, con 0, las que la clase ya ha presentado (`pal` = perfil.pal; en Modo Docente, null = ninguna). */
function palabrasTarjetas(semana, pal, palabras = PALABRAS) {
  const l = palabras.filter(p => p.curso === 1 && (semana ? p.semana === semana : !!pal && presentadaEn(pal, p.id)));
  return l.sort((a, b) => a.semana - b.semana || a.orden - b.orden);
}
const imgTarj = p => `<img src="img/palabras/${esc(p.escena.img)}" alt="" onerror="this.style.display='none'">`;
/** TA2 · «g» (grandes): una por hoja, A4 apaisado: imagen, la palabra muy grande y, pequeña, la explicación.
    TA3 · «p» (pequeñas): 6 por hoja para recortar: solo imagen y palabra. */
function tarjetasHTML(lista, tam) {
  if (tam === 'g') return `<div class="tj tj-g">${lista.map(p => `<section class="tj-hoja"><div class="tj-img">${imgTarj(p)}</div><h2>${esc(p.palabra)}</h2><p>${esc(p.def)}</p></section>`).join('')}</div>`;
  const hojas = []; for (let i = 0; i < lista.length; i += 6) hojas.push(lista.slice(i, i + 6));
  return `<div class="tj tj-p">${hojas.map(h => `<section class="tj-hoja">${h.map(p => `<figure>${imgTarj(p)}<figcaption>${esc(p.palabra)}</figcaption></figure>`).join('')}</section>`).join('')}</div>`;
}
SC.tarj = function () {
  const sem = semanasConFicha(), pr = perfilAct(), hay = !MODO_DOCENTE && pr && palabrasTarjetas(0, pr.pal).length > 0;
  if (!sem.includes(TARJ.s) && !(TARJ.s === 0 && hay)) TARJ.s = sem[0] || 0;
  const l = palabrasTarjetas(TARJ.s, pr && pr.pal), b = (v, t, f) => `<button class="btn${v ? '' : ' sec'}" onclick="${f};pintar()" aria-pressed="${!!v}">${t}</button>`;
  return `<main class="pantalla tutor"><h1 class="h-t hoja-ctl">Imprimir tarjetas</h1>
  <div class="tarjeta hoja-ctl"><b>Semana</b><div class="dos">${sem.map(s => b(s === TARJ.s, s, `TARJ.s=${s}`)).join('')}${hay ? b(TARJ.s === 0, 'Todas las presentadas', 'TARJ.s=0') : ''}</div>
  <b>Tamaño</b><div class="dos">${b(TARJ.tam === 'g', 'Grandes', "TARJ.tam='g'")}${b(TARJ.tam === 'p', 'Pequeñas', "TARJ.tam='p'")}</div>
  <p class="mu pq">${TARJ.tam === 'g' ? 'Una por hoja, A4 apaisado: imagen, palabra y explicación.' : 'Seis por hoja para recortar: imagen y palabra.'} Sin datos de la clase: valen de un año para otro.</p>
  <button class="btn" onclick="window.print()" ${l.length ? '' : 'disabled'}>Imprimir o guardar en PDF</button></div>
  ${l.length ? tarjetasHTML(l, TARJ.tam) : '<p class="mu hoja-ctl">Aún no hay palabras.</p>'}</main>`;
};
