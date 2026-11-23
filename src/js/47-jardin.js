/* ===== Nuestros jardines: pantalla y aviso del cierre (reglas JA5-JA8 de docs/jardines.md; qué cuenta: 35-jardin.js) =====
   Solo consulta: abrir la pantalla o tocar una planta no cambia nada del perfil. El jardín se apunta al terminar «Hoy» (terminarSesionHoy). */
let JARD_SEL = -1;
const jardinHueco = () => '<svg class="jar-hueco" viewBox="0 0 100 100" role="img" aria-label="Aún por conseguir"><rect x="22" y="36" width="56" height="12" rx="4"/><path d="M26 48h48l-6 40H32z"/><text x="50" y="78" text-anchor="middle">?</text></svg>';
/** La planta en su fase: su imagen si ya está subida y, si no, la planta de la escala (brote → crecida → con flor). */
function jardinImg(curso, i, fase) {
  const pl = JARDINES[curso].plantas[i];
  if ((IMG_JARDIN[curso] || []).includes(pl.id)) return `<img src="img/jardines/j${curso}-${pl.id}-${fase}.webp" alt="" width="600" height="600" loading="lazy">`;
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
    return `<p class="rotulo">${esc(J.nombre)} · ${c}.º</p><p class="mu">${hechas} planta${hechas === 1 ? '' : 's'} de ${J.plantas.length}</p>
    <div class="jar-rejilla">${J.plantas.map((q, i) => fases[i] ? `<button class="jar-card${i === crece ? ' crece' : ''}${i === sel ? ' sel' : ''}" onclick="jardinSel(${i})" aria-pressed="${i === sel}" aria-label="${esc(q.n)}, fase ${fases[i]} de 3">
      <span class="jar-foto">${jardinImg(c, i, fases[i])}</span><span class="jar-n">${esc(q.n)}</span><span class="jar-fases" aria-hidden="true">${[1, 2, 3].map(f => `<i class="${f <= fases[i] ? 'on' : ''}"></i>`).join('')}</span></button>`
      : `<div class="jar-card hueco"><span class="jar-foto">${jardinHueco()}</span><span class="jar-n">?</span></div>`).join('')}</div>
    ${sel >= 0 ? `<p class="gr jar-det">${esc(pl.art === 'el' ? 'El' : 'La')} ${esc(pl.n)} ha crecido con ${sem.slice(sel * 3, sel * 3 + 3).length === 1 ? 'la semana' : 'las semanas'} ${sem.slice(sel * 3, sel * 3 + 3).join(' · ')}${fases[sel] < 3 ? `. Falta${3 - fases[sel] === 1 ? '' : 'n'} ${3 - fases[sel]} semana${3 - fases[sel] === 1 ? '' : 's'} para que crezca del todo` : ''}</p>` : ''}`;
  }).join('')}</main>`;
};
