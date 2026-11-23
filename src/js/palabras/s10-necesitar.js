PALABRA({
  id: 'necesitar', palabra: 'necesitar', silabas: ['ne', 'ce', 'si', 'tar'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 10, orden: 5, bloque: 'medio',
  def: 'Necesitas algo cuando te hace falta de verdad: sin eso no puedes vivir o hacer algo.',
  otro: null,
  escena: { img: 'necesitar.webp', texto: 'La planta de Mario tiene las hojas caídas y la tierra seca. Mario le echa agua con la regadera. Al día siguiente las hojas están tiesas otra vez. La planta necesitaba agua.' },
  contextos: [
    'Los peces necesitan agua para vivir.',
    'Para pintar necesito un pincel.',
    'Cuando estoy triste, necesito un abrazo.'
  ],
  gesto: 'Tiende las dos manos juntas hacia delante, como pidiendo algo.',
  sentido: [
    { t: 'Necesito el abrigo porque hace mucho frío.', ok: true, por: 'Sin abrigo pasaría frío.' },
    { t: 'Los peces necesitan un paraguas para no mojarse.', ok: false, por: 'Los peces viven en el agua: no les hace falta.' },
    { t: 'Para cortar el papel necesito unas tijeras.', ok: true, por: 'Sin tijeras no puede cortarlo bien.' },
    { t: 'Necesito diez helados para poder respirar.', ok: false, por: 'Los helados apetecen, pero no hacen falta para respirar.' }
  ],
  ejemplos: [
    { t: 'Una planta, agua', ok: true },
    { t: 'Un pájaro, aire', ok: true },
    { t: 'Tú, dormir', ok: true },
    { t: 'Tú, un juguete más', ok: false },
    { t: 'Un pez, zapatos', ok: false },
    { t: 'Un gato, una tele', ok: false }
  ],
  pregunta: '¿Lo necesita de verdad?',
  acaba: ['Para vivir, los seres vivos necesitan…', 'Para hacer mi dibujo necesito…'],
  habla: 'Piensa en una mascota. ¿Qué necesita para estar bien? Díselo a tu compañero.',
  rel: { parecida: ['hacer falta'], contraria: [], familia: ['necesario', 'necesidad'] }
});
