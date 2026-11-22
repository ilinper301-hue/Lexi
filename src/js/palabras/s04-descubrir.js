PALABRA({
  id: 'descubrir', palabra: 'descubrir', silabas: ['des', 'cu', 'brir'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 4, orden: 3, bloque: 'pensar',
  def: 'Descubrir es encontrar o enterarte de algo que antes no sabías o no veías.',
  otro: null,
  escena: { img: 'descubrir.webp', texto: 'Candela levanta una piedra del jardín. Debajo hay un montón de bichitos que se hacen una pelota. ¡No sabía que vivían ahí! Candela acaba de descubrir su escondite.' },
  contextos: [
    'Con la lupa descubrimos que la hoja tiene rayitas.',
    'Probé las lentejas y descubrí que me gustan.',
    'Leyendo el cuento descubrimos quién se comió la tarta.'
  ],
  gesto: 'Tápate los ojos con las manos y ábrelas de golpe: ¡oh!',
  sentido: [
    { t: 'Abrí el armario y descubrí dónde se escondía el gato.', ok: true, por: 'Antes no lo sabía y ahora sí.' },
    { t: 'Hoy descubrí mi nombre, que ya me sabía desde pequeño.', ok: false, por: 'Lo que ya sabes no lo descubres.' },
    { t: 'Mezclamos azul y amarillo y descubrimos que sale verde.', ok: true, por: 'Se enteraron de algo nuevo.' },
    { t: 'Descubrí el tesoro sin llegar a encontrarlo nunca.', ok: false, por: 'Descubrir es encontrarlo.' }
  ],
  ejemplos: [
    { t: 'Encontrar un nido escondido en un árbol', ok: true },
    { t: 'Enterarte de que el hielo se vuelve agua', ok: true },
    { t: 'Dar con un camino nuevo en el parque', ok: true },
    { t: 'Repetir lo que ya sabías', ok: false },
    { t: 'Buscar algo y no encontrarlo', ok: false },
    { t: 'Esconder un juguete', ok: false }
  ],
  acaba: ['Un día descubrí que…', 'Si miro debajo de una piedra, puedo descubrir…'],
  habla: '¿Qué has descubierto este curso que antes no sabías?',
  rel: { parecida: ['encontrar'], contraria: ['esconder'], familia: ['descubrimiento'], mas: ['averiguar'] }
});
