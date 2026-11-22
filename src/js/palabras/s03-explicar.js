PALABRA({
  id: 'explicar', palabra: 'explicar', silabas: ['ex', 'pli', 'car'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 3, orden: 1, bloque: 'pensar',
  def: 'Explicar es contar algo paso a paso para que otra persona lo entienda.',
  otro: null,
  escena: { img: 'explicar.webp', texto: 'Aitana sabe jugar al dominó y su primo no. Ella le cuenta despacio cómo se ponen las fichas. Ahora su primo ya sabe jugar. Aitana se lo ha explicado.' },
  contextos: [
    'La maestra explica cómo se hace la suma.',
    'Mi padre me explica por qué cruzamos con el semáforo en verde.',
    'El cuidador del zoo explica qué comen los pingüinos.'
  ],
  gesto: 'Abre las manos hacia delante, con las palmas hacia arriba, como si ofrecieras algo.',
  sentido: [
    { t: 'Le expliqué el juego a mi amigo y ya sabe jugar.', ok: true, por: 'Se lo contó de forma que lo entendió.' },
    { t: 'Le expliqué el camino quedándome callado.', ok: false, por: 'Para explicar hay que contarlo.' },
    { t: 'No entendía el problema y la maestra me lo explicó con un dibujo.', ok: true, por: 'Lo contó de otra manera para que lo entendiera.' },
    { t: 'Lo expliqué tan bien que nadie entendió nada.', ok: false, por: 'Si se explica bien, los demás lo entienden.' }
  ],
  ejemplos: [
    { t: 'Contar cómo se juega al escondite', ok: true },
    { t: 'Decir por qué has elegido ese número', ok: true },
    { t: 'Enseñar a tu hermano a abrocharse, paso a paso', ok: true },
    { t: 'Decir «porque sí»', ok: false },
    { t: 'Dar la respuesta sin decir cómo la sabes', ok: false },
    { t: 'Quedarte callado', ok: false }
  ],
  acaba: ['Te explico cómo se juega al pilla-pilla: primero…', 'Cuando no entiendo algo, pido que me lo expliquen porque…'],
  habla: 'Explica a tu compañero cómo te lavas los dientes, paso a paso.',
  rel: { parecida: ['contar para que se entienda'], contraria: [], familia: ['explicación'], mas: ['aclarar'] }
});
