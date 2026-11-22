PALABRA({
  id: 'moderno', palabra: 'moderno', silabas: ['mo', 'der', 'no'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 5, orden: 5, bloque: 'como-son',
  def: 'Algo es moderno cuando es de ahora, se ha hecho o inventado hace poco.',
  otro: null,
  escena: { img: 'moderno.webp', texto: 'El abuelo de Valeria guarda un teléfono con una rueda para marcar. El de Valeria no tiene botones y hace fotos. «¡Qué distintos!», dice ella. El teléfono de Valeria es moderno.' },
  contextos: [
    'El autobús moderno no hace ruido porque es eléctrico.',
    'En mi barrio hay un edificio moderno, todo de cristal.',
    'El hospital tiene máquinas modernas para ver los huesos.'
  ],
  gesto: 'Desliza un dedo por la palma de la otra mano, como en una pantalla.',
  sentido: [
    { t: 'El tren moderno es mucho más rápido que los de antes.', ok: true, por: 'Es de ahora.' },
    { t: 'Las pirámides son muy modernas: tienen miles de años.', ok: false, por: 'Lo que tiene miles de años es antiguo.' },
    { t: 'En el cole nuevo hay una pizarra moderna que se toca con el dedo.', ok: true, por: 'Se ha inventado hace poco.' },
    { t: 'Este carro de caballos de hace doscientos años es moderno.', ok: false, por: 'Es de hace mucho tiempo: es antiguo.' }
  ],
  ejemplos: [
    { t: 'Un coche eléctrico', ok: true },
    { t: 'Una pizarra digital', ok: true },
    { t: 'Un robot que limpia el suelo', ok: true },
    { t: 'Un castillo', ok: false },
    { t: 'Un carro de caballos', ok: false },
    { t: 'Una moneda de hace mil años', ok: false }
  ],
  acaba: ['Un invento moderno que uso es…', 'Los coches modernos no son como los antiguos porque…'],
  habla: '¿Qué cosa moderna hay en tu casa que tus abuelos no tenían de pequeños?',
  rel: { parecida: ['nuevo'], contraria: ['antiguo'], familia: ['modernizar'], mas: ['actual'] }
});
