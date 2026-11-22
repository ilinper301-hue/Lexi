PALABRA({
  id: 'rodear', palabra: 'rodear', silabas: ['ro', 'de', 'ar'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 4, orden: 1, bloque: 'pensar',
  def: 'Rodear es dibujar una línea cerrada alrededor de algo para marcarlo.',
  otro: 'También es ponerse o ir alrededor de algo: entre todos rodeamos el árbol.',
  escena: { img: 'rodear.webp', texto: 'En la ficha hay cinco animales. «¿Cuál vuela?», lee la maestra. Elsa coge el lápiz y dibuja un círculo alrededor del pájaro. Elsa ha rodeado el pájaro.' },
  contextos: [
    'En mates rodeamos el número mayor.',
    'En el calendario de casa rodeamos el día de la excursión.',
    'En la sopa de letras rodeamos las palabras que encontramos.'
  ],
  gesto: 'Dibuja un círculo en el aire con el dedo.',
  sentido: [
    { t: 'Rodeé la manzana y quedó dentro de un círculo.', ok: true, por: 'La línea cerrada la deja dentro.' },
    { t: 'Rodeé el gato haciendo una raya debajo.', ok: false, por: 'Eso es subrayar; rodear es dibujar alrededor.' },
    { t: 'Rodeamos con rojo todas las letras a.', ok: true, por: 'Dibujaron una línea alrededor de cada una.' },
    { t: 'Rodeé el dibujo sin tocar la ficha con el lápiz.', ok: false, por: 'Para rodear hay que trazar la línea.' }
  ],
  ejemplos: [
    { t: 'Hacer un círculo alrededor de la respuesta', ok: true },
    { t: 'Dibujar una línea cerrada alrededor de tres peces', ok: true },
    { t: 'Encerrar un número dentro de un redondel', ok: true },
    { t: 'Tachar con una cruz', ok: false },
    { t: 'Subrayar una palabra', ok: false },
    { t: 'Colorear el dibujo', ok: false }
  ],
  acaba: ['Si me dicen «rodea las frutas», yo rodeo…', 'En el calendario rodearía el día de…'],
  habla: 'En un dibujo de tu clase te piden: «rodea lo que sirve para escribir». ¿Qué rodearías?',
  rel: { parecida: ['encerrar en un círculo'], contraria: [], familia: ['alrededor', 'rodeo'] }
});
