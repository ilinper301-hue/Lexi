/* ===== Nuestros jardines: pantalla y aviso del cierre (reglas JA5-JA8 de docs/jardines.md; qué cuenta: 35-jardin.js) =====
   Solo consulta: abrir la pantalla o tocar una planta no cambia nada del perfil. El jardín se apunta al terminar «Hoy» (terminarSesionHoy). */
let JARD_SEL = -1;
const jardinHueco = () => '<svg class="jar-hueco" viewBox="0 0 286 577" role="img" aria-label="Aún por conseguir"><rect x="19" y="313" width="255" height="42" rx="12"/><path d="M30 355h226l-38 214H68z"/><text x="143" y="515" text-anchor="middle">?</text></svg>';
/** El cielo del jardín: sol (luna de noche), nubes y dos colinas; el césped sigue por debajo con el fondo del contenedor. */
const jardinCielo = () => `<svg class="jar-cielo" viewBox="0 0 400 110" aria-hidden="true" focusable="false"><defs><linearGradient id="jcg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--jar-cielo1)"/><stop offset="1" style="stop-color:var(--jar-cielo2)"/></linearGradient></defs>
  <rect width="400" height="110" fill="url(#jcg)"/><circle cx="332" cy="36" r="20" style="fill:var(--jar-sol)"/>
  <g style="fill:var(--jar-nube)"><ellipse cx="70" cy="34" rx="28" ry="9"/><ellipse cx="92" cy="28" rx="18" ry="9"/><ellipse cx="200" cy="52" rx="22" ry="7"/><ellipse cx="216" cy="47" rx="14" ry="7"/></g>
  <path d="M0 84Q70 44 150 76T300 70T400 74V110H0z" style="fill:var(--jar-col1)"/><path d="M0 100Q100 70 200 94T400 88V110H0z" style="fill:var(--jar-col2)"/></svg>`;
const JAR_FILAS = [4, 3, 3];
/** La planta en su fase: su imagen si ya está subida y, si no, la planta de la escala (brote → crecida → con flor). */
function jardinImg(curso, i, fase) {
  const pl = JARDINES[curso].plantas[i];
  if ((IMG_JARDIN[curso] || []).includes(pl.id)) return `<img src="img/jardines/j${curso}-${pl.id}-${fase}.webp" alt="" width="286" height="577" loading="lazy">`;
  return escalaSVG(fase + 1);
}
function jardinSel(i) { JARD_SEL = JARD_SEL === i ? -1 : i; pintar(); }
const tituloJardines = () => { const p = MODO_DOCENTE ? null : perfilAct(); return p && p.t !== 'doc' ? 'Mis jardines' : 'Nuestros jardines'; };
/** El aviso grande del cierre de «Hoy» (JA5): una sola vez por sesión, con la planta en su fase nueva. */
function jardinAvisoHTML(p) {
  const av = jardinAvisosPerfil(p); if (!av.length) return '';
  const a = av[av.length - 1];
  return `<div class="jar-aviso"><div class="jar-foto">${jardinImg(a.curso, a.planta, a.fase)}</div><p class="gr">${esc(a.texto)}</p></div>`;
}
SC.jardines = function () {
  const p = MODO_DOCENTE ? null : perfilAct();
  if (!MODO_DOCENTE && !p) { PANT = 'inicio'; return SC.inicio(); }
  return `<main class="pantalla infantil ancha"><h1 class="h-pant">${tituloJardines()}</h1>${Object.keys(JARDINES).map(Number).map(c => {
    const J = JARDINES[c], sem = MODO_DOCENTE ? Array.from({ length: MAX_AVANCES }, (_, k) => k + 1) : jardinSemanasAhora(p.jar, jardinCompletas(p.pal, PALABRAS, c), c);
    const fases = jardinFases(sem.length, J.plantas.length), hechas = fases.filter(f => f === 3).length, crece = fases.findIndex(f => f > 0 && f < 3);
    const sel = JARD_SEL >= 0 && fases[JARD_SEL] > 0 ? JARD_SEL : -1, pl = J.plantas[sel];
    const filas = J.plantas.length === JAR_FILAS.reduce((x, y) => x + y, 0) ? JAR_FILAS : [J.plantas.length], tam = Math.max(...filas); let k = 0;
    const maceta = i => { const q = J.plantas[i]; return fases[i]
      ? `<button class="jar-card${i === crece ? ' crece' : ''}${i === sel ? ' sel' : ''}" onclick="jardinSel(${i})" aria-pressed="${i === sel}" aria-label="${esc(q.n)}, fase ${fases[i]} de 3"><span class="jar-foto">${jardinImg(c, i, fases[i])}</span><span class="jar-n">${esc(q.n)}</span></button>`
      : `<div class="jar-card hueco"><span class="jar-foto">${jardinHueco()}</span><span class="jar-n">&nbsp;</span></div>`; };
    return `<p class="rotulo">${esc(J.nombre)} · ${c}.º</p><p class="mu">${hechas} planta${hechas === 1 ? '' : 's'} de ${J.plantas.length}</p>
    <div class="jar-rejilla" style="--jar-n:${tam}">${jardinCielo()}<div class="jar-macetas">${filas.map(n => `<div class="jar-fila">${Array.from({ length: n }, () => maceta(k++)).join('')}</div>`).join('')}</div></div>
    ${sel >= 0 ? `<p class="gr jar-det">${esc(pl.art === 'el' ? 'El' : 'La')} ${esc(pl.n)} ha crecido con ${sem.slice(sel * 3, sel * 3 + 3).length === 1 ? 'la semana' : 'las semanas'} ${sem.slice(sel * 3, sel * 3 + 3).join(' · ')}${fases[sel] < 3 ? `. Falta${3 - fases[sel] === 1 ? '' : 'n'} ${3 - fases[sel]} semana${3 - fases[sel] === 1 ? '' : 's'} para que crezca del todo` : ''}</p>` : ''}`;
  }).join('')}</main>`;
};
