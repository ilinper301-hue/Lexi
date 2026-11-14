/* Escala de 4 pasos de cada palabra: el bocadillo de Lexi crece y se llena (elegido por Iván, 14-11-2026).
   1 Nueva · 2 La conocemos · 3 La entendemos · 4 La usamos */
const PASOS = ['Nueva', 'La conocemos', 'La entendemos', 'La usamos'];
const BOCADILLO = 'M-16 88 H16 Q28 88 28 100 V114 Q28 126 16 126 H-12 L-22 138 L-20 126 Q-28 126 -28 114 V100 Q-28 88 -16 88 Z';
function escalaSVG(paso) {
  const p = Math.max(1, Math.min(4, paso | 0)), k = [.62, .76, .9, 1][p - 1];
  const raya = (y, w) => `<rect x="-16" y="${y}" width="${w}" height="5" rx="2.5" fill="var(--lx-blanco)"/>`;
  const fondo = [`fill="none" stroke="var(--lx-coral)" stroke-width="3" stroke-dasharray="6 5"`, `fill="var(--lx-pale)"`, `fill="var(--lx-rosa)"`, `fill="var(--lx-coral)"`][p - 1];
  const dentro = [``, `<circle cx="0" cy="107" r="4" fill="var(--lx-blanco)"/>`, raya(98, 32) + raya(110, 20),
    raya(97, 32) + raya(107, 32) + raya(117, 18) + `<path d="M34 84 L40 76 M38 92 L46 90 M30 78 L30 70" stroke="var(--lx-coral)" stroke-width="2.5" stroke-linecap="round" fill="none"/>`][p - 1];
  return `<svg class="escala" viewBox="-34 62 84 84" role="img" aria-label="Paso ${p} de 4: ${PASOS[p - 1]}">`
    + `<g transform="translate(0,138) scale(${k}) translate(0,-138)"><path d="${BOCADILLO}" ${fondo}/>${dentro}</g></svg>`;
}
function escalaFila() {
  return '<div class="escala-fila">' + PASOS.map((n, i) => `<figure>${escalaSVG(i + 1)}<figcaption>${n}</figcaption></figure>`).join('') + '</div>';
}
