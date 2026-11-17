/* ===== Mascota de Lexi: un bocadillo de palabras (diseño de Iván, 17-11-2026) =====
   Dibujada en vectores, como las de Calculi, Lectori y Barri: se ve nítida a cualquier tamaño.
   Flota, parpadea y saluda con el brazo izquierdo. Los brazos son piezas aparte que nacen
   dentro del cuerpo: al girar nunca se abre un hueco. Colores en --m1…--mlengua (estilos.css). */
function mascota(tam = 240, quieta = false) {
  const ojo = (cx, cy, r) => `<g class="ojo"><circle cx="${cx}" cy="${cy}" r="${r}" fill="#fff"/>`
    + `<circle cx="${cx + 3.5}" cy="${cy + 1.5}" r="${(r * .6).toFixed(1)}" fill="var(--mojo)"/>`
    + `<circle cx="${cx + 8}" cy="${cy - 4}" r="${(r * .22).toFixed(1)}" fill="#fff"/></g>`;
  const borde = 'M70 38C110 30 150 24 172 26C192 28 202 44 204 70C206 96 204 116 194 126C182 138 150 141 120 142C104 143 92 143 84 142C76 148 66 152 58 154C52 156 50 151 52 146C54 141 57 137 58 132C50 124 48 108 48 86C48 60 52 44 70 38Z';
  return `<svg class="mas${quieta ? ' quieta' : ''}" width="${tam}" height="${Math.round(tam * 176 / 240)}" viewBox="0 0 240 176" role="img" aria-label="Lexi, la mascota">
  <defs><linearGradient id="lexi-g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--m2)"/><stop offset=".75" style="stop-color:var(--m1)"/></linearGradient></defs>
  <ellipse class="sombra" cx="124" cy="166" rx="56" ry="6" fill="currentColor" opacity=".12"/>
  <g class="cuerpo">
    <g class="brazo-d"><path d="M194 84C216 86 228 106 214 128" fill="none" stroke="var(--mbr)" stroke-width="20" stroke-linecap="round"/>
      <path d="M204 88C212 92 215 98 215 104" fill="none" stroke="var(--m3)" stroke-width="9" stroke-linecap="round" opacity=".5"/></g>
    <g class="brazo-i"><path d="M62 106C44 104 31 95 26 80" fill="none" stroke="var(--mbr)" stroke-width="25" stroke-linecap="round"/>
      <path d="M53 94C48 99 48 108 51 114" fill="none" stroke="var(--m3)" stroke-width="11" stroke-linecap="round" opacity=".55"/></g>
    <path d="${borde}" fill="url(#lexi-g)"/>
    <path d="M50 112C56 132 84 138 120 137C152 136 184 132 200 114C199 120 197 123 194 126C182 138 150 141 120 142C104 143 92 143 84 142C70 140 54 132 50 112Z" fill="var(--m3)" opacity=".4"/>
    <path d="M77 66Q87 54 99 59M146 46Q158 40 168 49" fill="none" stroke="var(--mojo)" stroke-width="5.5" stroke-linecap="round"/>
    ${ojo(95, 86, 23)}${ojo(158, 77, 24)}
    <path d="M107 104C120 109 134 107 146 99C148 114 139 124 126 124C115 124 107 117 107 104Z" fill="var(--mboca)"/>
    <path d="M113 119C120 112 134 111 141 115C137 121 132 124 126 124C120 124 116 122 113 119Z" fill="var(--mlengua)"/>
  </g>
</svg>`;
}
