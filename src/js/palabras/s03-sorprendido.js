PALABRA({
  id: 'sorprendido', palabra: 'sorprendido', silabas: ['sor', 'pren', 'di', 'do'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 3, orden: 6, bloque: 'sentir',
  def: 'Estás sorprendido cuando pasa algo que no esperabas y te quedas con la boca abierta.',
  otro: null,
  escena: { img: 'sorprendido.webp', texto: 'Yusef llega a casa y está todo apagado. De pronto se enciende la luz. «¡Feliz cumpleaños!», gritan sus amigos. Yusef está sorprendido.' },
  contextos: [
    'Me quedé sorprendida cuando vi nevar en mi pueblo.',
    'El mago sacó una paloma del sombrero y todos nos quedamos sorprendidos.',
    'La maestra se quedó sorprendida: ¡habíamos recogido la clase solos!'
  ],
  gesto: 'Abre mucho los ojos y la boca y pon las manos en las mejillas.',
  sentido: [
    { t: 'Abrí la caja, saltó un muñeco de muelle y me quedé sorprendido.', ok: true, por: 'No se lo esperaba.' },
    { t: 'Estoy sorprendido porque ha pasado justo lo que yo sabía.', ok: false, por: 'Si ya lo sabías, no es una sorpresa.' },
    { t: 'Mi abuela se quedó sorprendida al verme: no sabía que iba a ir.', ok: true, por: 'No lo esperaba.' },
    { t: 'Estaba sorprendido porque todo era igual que siempre.', ok: false, por: 'Lo de siempre no sorprende.' }
  ],
  ejemplos: [
    { t: 'Encontrar un regalo debajo de la almohada', ok: true },
    { t: 'Ver un arcoíris doble', ok: true },
    { t: 'Que tu perro abra la puerta solo', ok: true },
    { t: 'Desayunar lo de todos los días', ok: false },
    { t: 'Ponerte los zapatos', ok: false },
    { t: 'Que llegue el recreo a su hora', ok: false }
  ],
  acaba: ['Me quedé sorprendido cuando…', 'Mi madre se quedaría sorprendida si yo…'],
  habla: '¿Qué es lo último que te ha sorprendido? Cuéntaselo a tu compañero.',
  rel: { parecida: ['que no se lo esperaba'], contraria: [], familia: ['sorpresa', 'sorprender'], mas: ['asombrado'] }
});
