PALABRA({
  id: 'estacion', palabra: 'estación', silabas: ['es', 'ta', 'ción'],
  tipo: 'nombre', nivel: 2, curso: 1, semana: 10, orden: 6, bloque: 'medio',
  def: 'Una estación es cada una de las cuatro partes del año: primavera, verano, otoño e invierno.',
  otro: 'También es el sitio donde paran los trenes y los autobuses.',
  escena: { img: 'estacion.webp', texto: 'Lía mira el árbol de su calle. Hace unos meses tenía flores; luego, hojas verdes. Hoy las hojas son amarillas y se caen. Ha llegado otra estación.' },
  contextos: [
    'El verano es la estación más calurosa.',
    'En cada estación nos ponemos ropa diferente.',
    'Mi estación favorita es la primavera porque salen las flores.'
  ],
  gesto: 'Cuenta cuatro con los dedos de una mano, uno a uno.',
  sentido: [
    { t: 'El invierno es la estación más fría.', ok: true, por: 'El invierno es una de las cuatro.' },
    { t: 'El martes es mi estación favorita.', ok: false, por: 'El martes es un día de la semana.' },
    { t: 'En otoño, la estación de las hojas secas, recogemos castañas.', ok: true, por: 'El otoño es una parte del año.' },
    { t: 'El año tiene doce estaciones.', ok: false, por: 'Tiene cuatro; doce son los meses.' }
  ],
  ejemplos: [
    { t: 'La primavera', ok: true },
    { t: 'El otoño', ok: true },
    { t: 'El invierno', ok: true },
    { t: 'El lunes', ok: false },
    { t: 'Enero', ok: false },
    { t: 'La mañana', ok: false }
  ],
  pregunta: '¿Es una estación?',
  acaba: ['Mi estación favorita es… porque…', 'En invierno, la estación más fría, yo…'],
  habla: '¿En qué estación es tu cumpleaños? ¿Qué tiempo suele hacer?',
  rel: { parecida: [], contraria: [], familia: [] }
});
