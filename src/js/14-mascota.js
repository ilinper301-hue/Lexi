/* ===== Mascota de Lexi: bocadillo coral (diseño de Iván, 28-11-2026) =====
   SVG de Iván pasado a función. Flota, parpadea y saluda con el brazo izquierdo;
   el brazo nace dentro del cuerpo, así que al girar nunca se abre un hueco.
   Colores en --m0, --m3, --mojo y --mlengua (estilos.css). */
function mascota(tam = 240, quieta = false) {
  const ojo = (bx, by, brx, bry, br, px, py, prx, pry, pr, hx, hy) => `<g class="ojo">`
    + `<ellipse cx="${bx}" cy="${by}" rx="${brx}" ry="${bry}" transform="rotate(${br} ${bx} ${by})" fill="#fffefd"/>`
    + `<ellipse cx="${px}" cy="${py}" rx="${prx}" ry="${pry}" transform="rotate(${pr} ${px} ${py})" fill="var(--mojo)"/>`
    + `<circle cx="${hx}" cy="${hy}" r="21" fill="#fffefd"/></g>`;
  return `<svg class="mas${quieta ? ' quieta' : ''}" width="${tam}" height="${Math.round(tam * 725 / 965)}" viewBox="295 140 965 725" role="img" aria-label="Lexi, la mascota">
  <ellipse class="sombra" cx="769" cy="818" rx="323" ry="36" fill="currentColor" opacity=".12"/>
  <g class="cuerpo">
    <g class="brazo-i">
      <path d="M455 478C416 478 408 444 392 420C373 391 338 394 317 419C289 449 308 479 336 507C370 541 410 561 461 562Z" fill="var(--m0)"/>
      <path d="M424 471Q440 478 455 480L466 561Q444 563 432 556Q415 516 424 471Z" fill="var(--m3)"/>
    </g>
    <path d="M1125 422C1190 437 1245 490 1245 553C1245 596 1221 626 1190 627C1161 628 1139 608 1143 581C1146 562 1163 550 1155 532C1150 519 1140 508 1127 502Z" fill="var(--m0)"/>
    <path d="M1126 422Q1140 425 1147 431Q1160 469 1151 518L1125 501Z" fill="var(--m3)"/>
    <path d="M437 409C431 314 452 253 508 216C573 174 711 157 846 153C969 149 1044 169 1086 230C1121 281 1133 374 1137 464C1142 552 1107 611 1033 649C941 696 806 705 691 707C652 708 623 704 597 698C559 719 511 741 483 741C459 740 451 725 462 700L491 636C456 589 443 513 437 409Z" fill="var(--m0)"/>
    ${ojo(645, 413, 85, 90, 17, 663, 415, 52, 61, 9, 685, 381)}${ojo(891, 374, 91, 92, 17, 878, 381, 54, 62, 8, 900, 348)}
    <path d="M575 303C587 283 608 269 629 268C644 267 649 284 634 289C614 294 601 306 592 317C581 327 570 315 575 303ZM877 223C900 219 924 230 936 244C946 256 933 269 922 258C909 246 896 243 879 245C861 247 861 226 877 223Z" fill="var(--mojo)"/>
    <path d="M724 496C765 501 804 487 838 472C852 465 861 477 861 497C860 541 834 580 791 585C750 590 717 556 706 522C700 504 709 494 724 496Z" fill="var(--mojo)"/>
    <path d="M737 569C753 542 780 521 810 520C829 519 844 525 853 534C840 565 819 582 791 585C770 588 751 581 737 569Z" fill="var(--mlengua)"/>
  </g>
</svg>`;
}
