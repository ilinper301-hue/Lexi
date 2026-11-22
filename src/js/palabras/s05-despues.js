PALABRA({
  id: 'despues', palabra: 'después', silabas: ['des', 'pués'],
  tipo: 'enlace', nivel: 2, curso: 1, semana: 5, orden: 2, bloque: 'pensar', sep: 'primero-despues-finalmente',
  def: 'Decimos «después» para contar lo que pasa cuando ya ha terminado otra cosa.',
  otro: null,
  escena: { img: 'despues.webp', texto: 'Marcos tiene hambre y mira las galletas. «Ahora no», dice su abuelo, «ahora tocan las lentejas». Marcos se las come todas. Las galletas llegan después.' },
  contextos: [
    'Jugamos en el recreo y después volvemos a clase.',
    'Después de la lluvia sale el sol.',
    'Me lavo los dientes después de cenar.'
  ],
  gesto: 'Pon una mano y, a su lado, la otra, como dos pasos seguidos.',
  sentido: [
    { t: 'Me pongo el pijama y después me meto en la cama.', ok: true, por: 'La cama va cuando ya tiene el pijama.' },
    { t: 'Me comí la sopa y después me la sirvieron.', ok: false, por: 'Servir va antes de comer.' },
    { t: 'Después del verano llega el otoño.', ok: true, por: 'El otoño viene cuando acaba el verano.' },
    { t: 'Llegué al cole y después salí de mi casa.', ok: false, por: 'Hay que salir de casa antes de llegar al cole.' }
  ],
  ejemplos: [
    { t: 'Secarte después de ducharte', ok: true },
    { t: 'Los zapatos después de los calcetines', ok: true },
    { t: 'El martes después del lunes', ok: true },
    { t: 'Pelar la mandarina después de comértela', ok: false },
    { t: 'Mojarte las manos después de secártelas', ok: false },
    { t: 'Abrir el libro después de leerlo', ok: false }
  ],
  pregunta: '¿Está bien dicho con «después»?',
  acaba: ['Después del recreo, en mi clase…', 'Me lavo las manos y después…'],
  habla: '¿Qué vas a hacer después del cole? Cuéntaselo a tu compañero.',
  rel: { parecida: ['luego', 'más tarde'], contraria: ['antes'], familia: [] }
});
