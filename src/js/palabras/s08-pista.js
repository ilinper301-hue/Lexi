PALABRA({
  id: 'pista', palabra: 'pista', silabas: ['pis', 'ta'],
  tipo: 'nombre', nivel: 2, curso: 1, semana: 8, orden: 3, bloque: 'pensar',
  def: 'Una pista es una ayuda pequeña o una señal que te sirve para descubrir algo.',
  otro: 'También es un sitio preparado para algo: la pista de baloncesto, la pista de baile.',
  escena: { img: 'pista.webp', texto: 'Alguien se ha comido las galletas. Tomás mira el suelo y ve unas huellas pequeñas, manchadas de harina. Las huellas van hasta la cesta del perro. Tomás ha encontrado una pista.' },
  contextos: [
    'En la adivinanza, la pista es: «tiene cuatro patas y maúlla».',
    'En la búsqueda del tesoro, cada pista nos lleva a la siguiente.',
    'El dibujo del problema nos da una pista para resolverlo.'
  ],
  gesto: 'Haz una lupa con una mano, cerrando los dedos en círculo, y póntela en un ojo.',
  sentido: [
    { t: 'Me dieron una pista y adiviné el animal.', ok: true, por: 'La pista le ayudó a descubrirlo.' },
    { t: 'La pista me ayudó tanto que supe menos que antes.', ok: false, por: 'Una pista sirve para saber más.' },
    { t: 'Las huellas en la nieve son una pista: por aquí pasó un zorro.', ok: true, por: 'Son una señal que ayuda a descubrirlo.' },
    { t: 'Me dieron una pista: me dijeron la respuesta entera.', ok: false, por: 'Una pista ayuda un poco; no lo dice todo.' }
  ],
  ejemplos: [
    { t: 'Unas huellas en el barro', ok: true },
    { t: '«Empieza por la letra m»', ok: true },
    { t: '«Frío, frío… ¡caliente!»', ok: true },
    { t: 'Decir la respuesta entera', ok: false },
    { t: 'No decir nada', ok: false },
    { t: 'Tapar el dibujo para que no se vea', ok: false }
  ],
  pregunta: '¿Es una pista?',
  acaba: ['Te doy una pista de mi animal favorito: …', 'Vi unas migas en el suelo; esa pista me dice que…'],
  habla: 'Piensa en un animal y dale tres pistas a tu compañero para que lo adivine.',
  rel: { parecida: ['una ayuda para adivinar'], contraria: [], familia: ['despistar', 'despistado'], mas: ['señal', 'ayuda'] }
});
