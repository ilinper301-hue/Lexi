/* Escala de 4 pasos de cada palabra: una planta que crece (decidido por Iván, 16-11-2026; antes, el bocadillo de Lexi).
   1 Nueva = semilla · 2 La conocemos = brote · 3 La entendemos = planta con hojas · 4 La usamos = planta con flor */
const PASOS = ['Nueva', 'La conocemos', 'La entendemos', 'La usamos'];
function hojaSVG(y, s, color, lado) {
  const L = 18 * s;
  return `<path transform="scale(${lado},1)" d="M0 ${y} Q${-L * .5} ${y - L * .8} ${-L} ${y - L * .3} Q${-L * .55} ${y + L * .3} 0 ${y} Z" fill="${color}"/>`;
}
function escalaSVG(paso) {
  const p = Math.max(1, Math.min(4, paso | 0)), k = [.85, .9, .95, 1][p - 1];
  const tallo = y => `<path d="M0 134 V${y}" stroke="var(--lx-prof)" stroke-width="4.5" stroke-linecap="round" fill="none"/>`;
  const par = (y, s, c) => hojaSVG(y, s, c, 1) + hojaSVG(y, s, c, -1);
  const suelo = `<path d="M-26 138 Q-20 130 0 130 Q20 130 26 138 Z" fill="var(--lx-prof)"/>`;
  const planta = [
    `<ellipse cx="0" cy="127" rx="6.5" ry="4.6" fill="var(--lx-tinta)" transform="rotate(-25 0 127)"/><circle cx="-2" cy="125.4" r="1.4" fill="var(--lx-blanco)"/>`,
    tallo(118) + par(118, .8, 'var(--lx-hoja)'),
    tallo(98) + par(120, 1.05, 'var(--lx-hoja)') + par(108, .9, 'var(--lx-claro)') + par(98, .6, 'var(--lx-hoja)'),
    tallo(92) + par(121, 1.15, 'var(--lx-hoja)') + par(110, 1, 'var(--lx-claro)') + par(100, .75, 'var(--lx-hoja)')
      + [0, 72, 144, 216, 288].map(a => `<circle cx="${(Math.sin(a * Math.PI / 180) * 7.5).toFixed(2)}" cy="${(84 - Math.cos(a * Math.PI / 180) * 7.5).toFixed(2)}" r="6" fill="var(--lx-flor)"/>`).join('')
      + `<circle cx="0" cy="84" r="4.4" fill="var(--lx-blanco)"/>`
  ][p - 1];
  return `<svg class="escala" viewBox="-42 62 84 84" role="img" aria-label="Paso ${p} de 4: ${PASOS[p - 1]}">`
    + `<g transform="translate(0,138) scale(${k}) translate(0,-138)">${suelo}${planta}</g></svg>`;
}
function escalaFila() {
  return '<div class="escala-fila">' + PASOS.map((n, i) => `<figure>${escalaSVG(i + 1)}<figcaption>${n}</figcaption></figure>`).join('') + '</div>';
}
