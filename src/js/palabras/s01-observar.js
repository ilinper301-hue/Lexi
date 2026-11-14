PALABRA({
  id: 'observar', palabra: 'observar', silabas: ['ob', 'ser', 'var'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 1, bloque: 'pensar',
  def: 'Observar es mirar algo despacio y con mucha atención para fijarte en los detalles.',
  otro: null,
  escena: { img: 'observar.webp', texto: 'Lola encuentra una mariquita en el patio. Se agacha y la mira muy despacio. ¡Tiene siete puntos negros! Lola está observando la mariquita.' },
  contextos: [
    'En clase observamos una hoja con la lupa.',
    'La médica observa tu garganta para saber qué te pasa.',
    'Por la noche observamos la luna desde la ventana.'
  ],
  gesto: 'Haz unos prismáticos con las manos y mira despacio.',
  sentido: [
    { t: 'Observé la hormiga y vi que llevaba una miga de pan.', ok: true, por: 'Al mirarla con atención descubrió un detalle.' },
    { t: 'Observé el dibujo con los ojos cerrados.', ok: false, por: 'Para observar hay que mirar.' },
    { t: 'Observamos las nubes y una parecía un conejo.', ok: true, por: 'Se fijaron bien en su forma.' },
    { t: 'Pasé corriendo sin mirar y observé todas las flores.', ok: false, por: 'Observar es mirar despacio, no de pasada.' }
  ],
  ejemplos: [
    { t: 'Mirar una flor con la lupa', ok: true },
    { t: 'Fijarte en cómo come un pájaro', ok: true },
    { t: 'Buscar las diferencias entre dos dibujos', ok: true },
    { t: 'Ver algo un segundo y marcharte', ok: false },
    { t: 'Escuchar una canción', ok: false },
    { t: 'Cerrar los ojos', ok: false }
  ],
  acaba: ['Cuando observé el cielo, vi…', 'Para encontrar las diferencias tengo que observar porque…'],
  habla: '¿Qué te gusta observar a ti? Cuéntaselo a tu compañero.',
  rel: { parecida: ['fijarse', 'mirar con atención'], contraria: [], familia: ['observación', 'observador'] }
});
