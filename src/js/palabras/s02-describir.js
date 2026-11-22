PALABRA({
  id: 'describir', palabra: 'describir', silabas: ['des', 'cri', 'bir'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 2, orden: 3, bloque: 'pensar',
  def: 'Describir es contar cómo es algo o alguien: su forma, su color, su tamaño…',
  otro: null,
  escena: { img: 'describir.webp', texto: 'Carmen ha perdido su mochila. «¿Cómo es?», pregunta el señor de la puerta. «Es azul, pequeña y tiene una estrella», dice ella. Carmen sabe describir su mochila.' },
  contextos: [
    'En clase describimos un elefante: es gris, tiene trompa y las orejas grandes.',
    'Por teléfono le describo a mi abuela mi disfraz.',
    'El cuento describe el castillo: alto, de piedra y con cuatro torres.'
  ],
  gesto: 'Abre las dos manos como si midieras algo con ellas.',
  sentido: [
    { t: 'Describí a mi perro: es pequeño, blanco y tiene las orejas caídas.', ok: true, por: 'Contó cómo es.' },
    { t: 'Describí mi casa diciendo solo «es mi casa».', ok: false, por: 'No ha contado cómo es.' },
    { t: 'Mi amiga describió su bici tan bien que la reconocí al verla.', ok: true, por: 'Dio tantos detalles que supo cuál era.' },
    { t: 'Describí el dibujo sin decir nada de cómo era.', ok: false, por: 'Describir es contar cómo es.' }
  ],
  ejemplos: [
    { t: 'Decir que el gato es negro y suave', ok: true },
    { t: 'Contar cómo es tu habitación', ok: true },
    { t: 'Decir que la pelota es redonda y roja', ok: true },
    { t: 'Decir solo «es un gato»', ok: false },
    { t: 'Contar qué hiciste ayer', ok: false },
    { t: 'Señalar el gato con el dedo', ok: false }
  ],
  acaba: ['Si describo a mi mejor amigo, digo que…', 'Te describo mi juguete favorito: es…'],
  habla: 'Describe un objeto de la clase sin decir su nombre. Tu compañero lo adivina.',
  rel: { parecida: ['contar cómo es'], contraria: [], familia: ['descripción'] }
});
