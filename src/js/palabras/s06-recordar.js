PALABRA({
  id: 'recordar', palabra: 'recordar', silabas: ['re', 'cor', 'dar'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 6, orden: 2, bloque: 'pensar',
  def: 'Recordar es traer a tu cabeza algo que pasó o que aprendiste antes.',
  otro: 'También es decirle algo a alguien para que no se le olvide: «recuérdame que riegue la planta».',
  escena: { img: 'recordar.webp', texto: 'Darío huele a bizcocho en la calle. De pronto le vienen a la cabeza el pueblo, la cocina de su abuela y las tardes de agosto. Sonríe. Darío está recordando el verano.' },
  contextos: [
    'Antes de empezar, recordamos lo que aprendimos ayer.',
    'Mi abuelo recuerda cuando era niño y jugaba en la calle.',
    'Miro las fotos y recuerdo la excursión a la granja.'
  ],
  gesto: 'Con el pulgar, señala hacia atrás por encima del hombro.',
  sentido: [
    { t: 'Recuerdo mi cumpleaños: hubo tarta de chocolate.', ok: true, por: 'Le viene a la cabeza algo que pasó.' },
    { t: 'Recuerdo perfectamente lo que va a pasar mañana.', ok: false, por: 'Solo se recuerda lo que ya ha pasado.' },
    { t: 'No recordaba dónde dejé el abrigo, pero al final me vino a la cabeza.', ok: true, por: 'Tardó, pero lo trajo a su cabeza.' },
    { t: 'Recordé toda la canción: no me venía ni una palabra.', ok: false, por: 'Si no te viene nada, la has olvidado.' }
  ],
  ejemplos: [
    { t: 'Contar qué hiciste el verano pasado', ok: true },
    { t: 'Decir el nombre de tu maestra del año pasado', ok: true },
    { t: 'Saber dónde guardaste el balón', ok: true },
    { t: 'Inventar un animal que no existe', ok: false },
    { t: 'Adivinar qué habrá de comer mañana', ok: false },
    { t: 'Dejarte el estuche en casa sin darte cuenta', ok: false }
  ],
  acaba: ['Del curso pasado recuerdo…', 'Para recordar algo importante, yo…'],
  habla: '¿Cuál es el recuerdo más bonito que tienes? Cuéntaselo a tu compañero.',
  rel: { parecida: ['acordarse'], contraria: ['olvidar'], familia: ['recuerdo'] }
});
