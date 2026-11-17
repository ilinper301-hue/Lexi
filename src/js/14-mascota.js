/* ===== Mascota de Lexi: un bocadillo de palabras (diseño de Iván, 17-11-2026) =====
   Dibujada a mano en vectores con formas limpias (círculos y curvas suaves de pocos puntos),
   como las mascotas de Calculi, Lectori y Barri. Flota, parpadea y saluda con el brazo izquierdo;
   el brazo nace dentro del cuerpo, así que al girar nunca se abre un hueco.
   Colores en --m0…--mlengua (estilos.css). */
function mascota(tam = 240, quieta = false) {
  const cuerpo = 'M62 16C88 8 120 3 144 4C170 5 182 14 185 36C188 56 188 76 182 92C176 104 160 110 140 113C112 117 92 119 74 119C66 122 54 127 45 128.5C38 129.5 35.5 124 39 120C42 115 45 109 46 104C38 92 35 76 36 60C37 40 44 24 62 16Z';
  const boca = 'M96 80.5C107 81.5 119 79 128 74.5C131 73 132.4 75.5 131.8 79C130 91 121.5 98.5 112 98.5C102 98.5 95 90.5 94.5 84.5C94.2 82 94.8 80.4 96 80.5Z';
  const ojo = (cx, cy, r, px, py) => `<g class="ojo"><circle cx="${cx}" cy="${cy}" r="${r}" fill="#fff"/>`
    + `<circle cx="${px}" cy="${py}" r="${(r * .63).toFixed(1)}" fill="var(--mojo)"/>`
    + `<circle cx="${px + 5.5}" cy="${py - 6.5}" r="${(r * .25).toFixed(1)}" fill="#fff"/></g>`;
  return `<svg class="mas${quieta ? ' quieta' : ''}" width="${tam}" height="${Math.round(tam * 148 / 216)}" viewBox="0 0 216 148" role="img" aria-label="Lexi, la mascota">
  <defs>
    <linearGradient id="lexi-g" gradientUnits="userSpaceOnUse" x1="0" y1="4" x2="0" y2="120"><stop offset="0" style="stop-color:var(--m2)"/><stop offset="1" style="stop-color:var(--m0)"/></linearGradient>
    <clipPath id="lexi-d"><path d="M180 60C194 60 206 70 209 84C211 95 207 105 199 105C192 105 188 98 190 90C191 84 188 78 180 76Z"/></clipPath><clipPath id="lexi-i"><path d="M54 70C42 66 31 59 24 52C18 46 9 47 5 54C1 61 4 70 12 76C22 84 36 89 54 88Z"/></clipPath><clipPath id="lexi-c"><path d="${cuerpo}"/></clipPath><clipPath id="lexi-b"><path d="${boca}"/></clipPath>
  </defs>
  <ellipse class="sombra" cx="111" cy="138" rx="55" ry="6.5" fill="currentColor" opacity=".12"/>
  <g class="cuerpo">
    <path d="M180 60C194 60 206 70 209 84C211 95 207 105 199 105C192 105 188 98 190 90C191 84 188 78 180 76Z" fill="var(--mbr)"/>
    <path d="M182 57C190 62 193.5 77 189 92L176 92L176 57Z" fill="var(--m3)" opacity=".8" clip-path="url(#lexi-d)"/>
    <g class="brazo-i">
      <path d="M54 70C42 66 31 59 24 52C18 46 9 47 5 54C1 61 4 70 12 76C22 84 36 89 54 88Z" fill="var(--mbr)"/>
      <path d="M39 63C32 69 30.5 79 34 87.5L50 88L50 63Z" fill="var(--m3)" opacity=".8" clip-path="url(#lexi-i)"/>
    </g>
    <path d="${cuerpo}" fill="url(#lexi-g)"/>
    <g clip-path="url(#lexi-c)">
      <path d="M28 94C56 112 102 116 142 109C162 105.5 178 97 192 82L192 140L28 140Z" fill="var(--mbr)" opacity=".75"/>
    </g>
    <path d="M67.5 39Q72 31 80.5 32.5M135 21Q143 18.5 149 26.5" fill="none" stroke="var(--mojo)" stroke-width="3.8" stroke-linecap="round"/>
    ${ojo(82, 62, 20, 85.5, 61.5)}${ojo(140, 53.5, 20.5, 137.5, 53.5)}
    <path d="${boca}" fill="var(--mboca)"/>
    <ellipse cx="115" cy="96.5" rx="14.5" ry="9.5" fill="var(--mlengua)" clip-path="url(#lexi-b)"/>
  </g>
</svg>`;
}
