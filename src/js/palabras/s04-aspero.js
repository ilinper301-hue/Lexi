PALABRA({
  id: 'aspero', palabra: 'áspero', silabas: ['ás', 'pe', 'ro'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 4, orden: 5, bloque: 'como-son', sep: 'suave-aspero',
  def: 'Algo es áspero cuando raspa al tocarlo porque no es liso.',
  otro: null,
  escena: { img: 'aspero.webp', texto: 'Paula pasa la mano por el tronco de un pino. Nota bultos y rayas, y le raspa un poco los dedos. No es nada liso. El tronco es áspero.' },
  contextos: [
    'La lengua del gato es áspera: cuando te lame, raspa.',
    'La toalla vieja se ha quedado áspera.',
    'La pared del patio es áspera y, si te rozas, te arañas.'
  ],
  gesto: 'Rasca la palma de una mano con las uñas de la otra.',
  sentido: [
    { t: 'La lija es áspera: sirve para raspar la madera.', ok: true, por: 'Raspa porque no es lisa.' },
    { t: 'El algodón es áspero y por eso es tan blandito.', ok: false, por: 'Lo blandito y liso es suave.' },
    { t: 'Tengo las manos ásperas de jugar con la arena.', ok: true, por: 'Se le han quedado rasposas.' },
    { t: 'El cristal de la ventana es áspero: el dedo resbala.', ok: false, por: 'Si el dedo resbala, es liso.' }
  ],
  ejemplos: [
    { t: 'Un papel de lija', ok: true },
    { t: 'La corteza de un árbol', ok: true },
    { t: 'Un estropajo de cocina', ok: true },
    { t: 'Un espejo', ok: false },
    { t: 'Un papel liso', ok: false },
    { t: 'La piel de un bebé', ok: false }
  ],
  acaba: ['Toqué algo áspero y noté que…', 'Una cosa áspera que conozco es…'],
  habla: '¿Qué prefieres tocar: algo suave o algo áspero? ¿Por qué?',
  rel: { parecida: ['que raspa'], contraria: ['suave', 'liso'], familia: ['aspereza'], mas: ['rasposo', 'rugoso'] }
});
