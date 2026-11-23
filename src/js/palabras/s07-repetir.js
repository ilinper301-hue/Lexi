PALABRA({
  id: 'repetir', palabra: 'repetir', silabas: ['re', 'pe', 'tir'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 7, orden: 1, bloque: 'pensar',
  def: 'Repetir es volver a decir o a hacer lo mismo otra vez.',
  otro: null,
  escena: { img: 'repetir.webp', texto: 'Aroa le dice al loro de su vecina: «¡Hola!». El loro la mira y dice: «¡Hola!». Aroa se ríe y prueba con «¡Guapo!». El loro lo repite todo.' },
  contextos: [
    'La maestra dice la palabra y nosotros la repetimos.',
    'Me gustó tanto el tobogán que repetí tres veces.',
    'La parte que se canta muchas veces se repite en la canción.'
  ],
  gesto: 'Haz girar un dedo en el aire, dando vueltas: otra vez, otra vez.',
  sentido: [
    { t: 'No oí bien y le pedí que lo repitiera.', ok: true, por: 'Quería que lo dijera otra vez.' },
    { t: 'Repetí el dibujo: era la primera vez que lo hacía.', ok: false, por: 'Si es la primera vez, no lo repites.' },
    { t: 'Repetimos el baile hasta que nos salió bien.', ok: true, por: 'Lo hicieron una y otra vez.' },
    { t: 'Repetí la frase diciendo otra distinta.', ok: false, por: 'Repetir es decir lo mismo.' }
  ],
  ejemplos: [
    { t: 'Decir otra vez la misma palabra', ok: true },
    { t: 'Volver a tirarte por el tobogán', ok: true },
    { t: 'El eco en la montaña', ok: true },
    { t: 'Hacer algo por primera vez', ok: false },
    { t: 'Decir una palabra nueva', ok: false },
    { t: 'Quedarte callado', ok: false }
  ],
  acaba: ['Me gustaría repetir…', 'Cuando algo no me sale, lo repito porque…'],
  habla: 'Di una frase divertida. Tu compañero la repite igual, igual.',
  rel: { parecida: ['volver a hacer'], contraria: [], familia: ['repetición', 'repetido'] }
});
