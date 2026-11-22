PALABRA({
  id: 'elegir', palabra: 'elegir', silabas: ['e', 'le', 'gir'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 3, orden: 2, bloque: 'pensar',
  def: 'Elegir es quedarte con una cosa entre varias, la que tú prefieres o la que es mejor.',
  otro: null,
  escena: { img: 'elegir.webp', texto: 'En la biblioteca hay tres cuentos. Bruno los mira: uno de piratas, uno de dragones y uno de gatos. Se queda con el de dragones. Bruno ha elegido un cuento.' },
  contextos: [
    'En la ficha elegimos la respuesta correcta entre tres.',
    'En la heladería me dejan elegir un sabor.',
    'El capitán elige quién saca primero.'
  ],
  gesto: 'Pon las dos manos abiertas delante de ti y cierra una, como si cogieras algo.',
  sentido: [
    { t: 'Había dos camisetas y elegí la roja.', ok: true, por: 'Se quedó con una de las dos.' },
    { t: 'Solo quedaba un yogur y elegí cuál quería.', ok: false, por: 'Con uno solo no se puede elegir.' },
    { t: 'Elegimos el nombre del pez entre tres que nos gustaban.', ok: true, por: 'Había varios y se quedaron con uno.' },
    { t: 'Elegí un juego quedándome con todos a la vez.', ok: false, por: 'Elegir es quedarte con uno, no con todos.' }
  ],
  ejemplos: [
    { t: 'Coger un cuento entre tres', ok: true },
    { t: 'Decidir a qué jugáis en el recreo', ok: true },
    { t: 'Marcar una respuesta entre varias', ok: true },
    { t: 'Llevarte todos los cuentos', ok: false },
    { t: 'Coger el único lápiz que queda', ok: false },
    { t: 'Que otra persona lo decida por ti', ok: false }
  ],
  acaba: ['Si tengo que elegir un animal, elijo… porque…', 'Antes de elegir la respuesta tengo que…'],
  habla: '¿Qué prefieres: playa o montaña? Elige y explica por qué.',
  rel: { parecida: ['escoger'], contraria: [], familia: ['elección'] }
});
