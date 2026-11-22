PALABRA({
  id: 'diminuto', palabra: 'diminuto', silabas: ['di', 'mi', 'nu', 'to'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 2, orden: 4, bloque: 'como-son',
  def: 'Algo es diminuto cuando es muy, muy pequeño, tan pequeño que cuesta verlo.',
  otro: null,
  escena: { img: 'diminuto.webp', texto: 'Omar mira la arena de la playa con una lupa. Entre los granos hay una concha. ¡Es más pequeña que una lenteja! La concha es diminuta.' },
  contextos: [
    'Las hormigas llevan migas diminutas a su hormiguero.',
    'Al bebé le compraron unos calcetines diminutos.',
    'Desde el avión, los coches parecen diminutos.'
  ],
  gesto: 'Junta el pulgar y el índice hasta que casi se toquen y míralos de cerca.',
  sentido: [
    { t: 'Necesité la lupa para ver el bicho diminuto.', ok: true, por: 'Era tan pequeño que costaba verlo.' },
    { t: 'El camión diminuto no cabía por la calle.', ok: false, por: 'Algo diminuto cabe en cualquier sitio.' },
    { t: 'En mi dedo se posó una mosca diminuta.', ok: true, por: 'Una mosca muy pequeña cabe en un dedo.' },
    { t: 'El elefante diminuto era más alto que la casa.', ok: false, por: 'Si es más alto que la casa, es enorme.' }
  ],
  ejemplos: [
    { t: 'Un grano de arena', ok: true },
    { t: 'Una pulga', ok: true },
    { t: 'Una semilla de fresa', ok: true },
    { t: 'Una manzana', ok: false },
    { t: 'Un balón', ok: false },
    { t: 'Una ballena', ok: false }
  ],
  acaba: ['Con la lupa vi algo diminuto: era…', 'Si yo fuera diminuto, podría…'],
  habla: '¿Qué cosa diminuta conoces? ¿Dónde la viste?',
  rel: { parecida: ['muy pequeño'], contraria: ['enorme'], familia: [], mas: ['minúsculo'] }
});
