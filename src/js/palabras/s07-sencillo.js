PALABRA({
  id: 'sencillo', palabra: 'sencillo', silabas: ['sen', 'ci', 'llo'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 7, orden: 5, bloque: 'como-son',
  def: 'Algo es sencillo cuando es fácil de hacer o de entender.',
  otro: 'También es sencillo lo que no tiene adornos: un vestido sencillo.',
  escena: { img: 'sencillo.webp', texto: 'Carla mira el puzle de su hermano pequeño. Solo tiene cuatro piezas grandes. Las coloca en un momento, casi sin pensar. Para Carla, ese puzle es sencillo.' },
  contextos: [
    'La maestra empieza por una suma sencilla: 1 más 1.',
    'La receta es sencilla: solo hay que mezclar yogur y fruta.',
    'Las reglas del escondite son sencillas.'
  ],
  gesto: 'Sacúdete las manos una vez, como quien dice «¡hecho!».',
  sentido: [
    { t: 'El juego es sencillo: lo entendí a la primera.', ok: true, por: 'Es fácil de entender.' },
    { t: 'Era tan sencillo que nadie supo hacerlo en todo el día.', ok: false, por: 'Si nadie sabe hacerlo, es difícil.' },
    { t: 'Hice un dibujo sencillo: un sol y una casa.', ok: true, por: 'Es fácil de hacer.' },
    { t: 'La suma era sencilla: tardé una hora y pedí ayuda tres veces.', ok: false, por: 'Lo sencillo sale pronto y sin ayuda.' }
  ],
  ejemplos: [
    { t: 'Sumar 1 más 1', ok: true },
    { t: 'Un puzle de cuatro piezas', ok: true },
    { t: 'Dibujar un círculo', ok: true },
    { t: 'Un puzle de mil piezas', ok: false },
    { t: 'Contar todas las estrellas', ok: false },
    { t: 'Leer un libro en un idioma que no conoces', ok: false }
  ],
  acaba: ['Para mí es sencillo…', 'Antes me costaba y ahora me parece sencillo…'],
  habla: '¿Qué es sencillo para ti y qué te cuesta más? Cuéntaselo a tu compañero.',
  rel: { parecida: ['fácil'], contraria: ['difícil', 'complicado'], familia: ['sencillez'], mas: ['simple'] }
});
