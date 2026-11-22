PALABRA({
  id: 'proteger', palabra: 'proteger', silabas: ['pro', 'te', 'ger'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 5, orden: 6, bloque: 'convivir',
  def: 'Proteger es cuidar a alguien o algo para que no le pase nada malo.',
  otro: null,
  escena: { img: 'proteger.webp', texto: 'Empieza a llover y Gael ve un gatito mojado en la calle. Se quita el chubasquero y lo tapa con él. El gatito deja de temblar. Gael protege al gatito.' },
  contextos: [
    'El casco protege la cabeza cuando vamos en bici.',
    'La gallina protege a sus pollitos debajo de las alas.',
    'La crema nos protege del sol en la playa.'
  ],
  gesto: 'Haz un tejado con las manos encima de la cabeza.',
  sentido: [
    { t: 'Me pongo las rodilleras para proteger las rodillas.', ok: true, por: 'Así no se hace daño si se cae.' },
    { t: 'Protegí mi dibujo dejándolo bajo la lluvia.', ok: false, por: 'La lluvia lo estropea.' },
    { t: 'El paraguas nos protege de la lluvia.', ok: true, por: 'Evita que nos mojemos.' },
    { t: 'Para proteger la planta, la pisé.', ok: false, por: 'Pisarla le hace daño.' }
  ],
  ejemplos: [
    { t: 'Ponerte casco para ir en patinete', ok: true },
    { t: 'Tapar a un pajarito del frío', ok: true },
    { t: 'Guardar el dibujo en una carpeta para que no se arrugue', ok: true },
    { t: 'Dejar la bici bajo la lluvia', ok: false },
    { t: 'Pisar las flores', ok: false },
    { t: 'Ver que molestan a un amigo y no hacer nada', ok: false }
  ],
  acaba: ['El abrigo me protege de…', 'Para proteger un libro, yo…'],
  habla: '¿Qué cosas llevas o usas para protegerte? Piensa tres con tu compañero.',
  rel: { parecida: ['cuidar', 'defender'], contraria: ['dañar'], familia: ['protección', 'protector'] }
});
