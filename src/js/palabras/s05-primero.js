PALABRA({
  id: 'primero', palabra: 'primero', silabas: ['pri', 'me', 'ro'],
  tipo: 'enlace', nivel: 2, curso: 1, semana: 5, orden: 1, bloque: 'pensar', sep: 'primero-despues-finalmente',
  def: 'Decimos «primero» para contar lo que pasa o se hace antes que todo lo demás.',
  otro: 'También es el que va delante de todos: el primero de la fila.',
  escena: { img: 'primero.webp', texto: 'Lucía va a hacer un bizcocho con su tío. «¿Por dónde empezamos?», pregunta. «Antes de nada, nos lavamos las manos», dice él. Eso es lo que van a hacer primero.' },
  contextos: [
    'Primero me pongo los calcetines y luego los zapatos.',
    'En el problema, primero leemos y luego pensamos.',
    'La semilla primero echa raíces; las hojas salen más tarde.'
  ],
  gesto: 'Levanta un dedo, el índice, bien alto.',
  sentido: [
    { t: 'Primero abro la mochila y luego saco el estuche.', ok: true, por: 'Abrir la mochila va antes.' },
    { t: 'Primero me seco y luego me ducho.', ok: false, por: 'Hay que ducharse antes de secarse.' },
    { t: 'Para cruzar la calle, primero miro a los dos lados.', ok: true, por: 'Mirar es lo que se hace antes de cruzar.' },
    { t: 'Primero me como el plátano y luego lo pelo.', ok: false, por: 'Antes de comerlo hay que pelarlo.' }
  ],
  ejemplos: [
    { t: 'Al lavarte las manos: mojarlas', ok: true },
    { t: 'Al calzarte: ponerte los calcetines', ok: true },
    { t: 'En un cuento: «Érase una vez…»', ok: true },
    { t: 'Al lavarte las manos: secarlas', ok: false },
    { t: 'Al calzarte: atarte los cordones', ok: false },
    { t: 'En un cuento: «…y colorín colorado»', ok: false }
  ],
  pregunta: '¿Va primero?',
  acaba: ['Cuando me levanto, primero…', 'Para hacer un dibujo, primero…'],
  habla: 'Cuenta a tu compañero qué haces primero cuando llegas a casa.',
  rel: { parecida: ['para empezar', 'antes de nada'], contraria: ['finalmente', 'por último'], familia: ['primer', 'primera'] }
});
