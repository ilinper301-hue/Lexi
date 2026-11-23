PALABRA({
  id: 'compartir', palabra: 'compartir', silabas: ['com', 'par', 'tir'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 9, orden: 1, bloque: 'convivir',
  def: 'Compartir es dar a otros una parte de lo que tienes o usarlo juntos.',
  otro: null,
  escena: { img: 'compartir.webp', texto: 'Jorge abre su bocadillo en el recreo. Su amigo se ha dejado el suyo en casa. Jorge lo parte por la mitad y le da un trozo. Jorge ha compartido su bocadillo.' },
  contextos: [
    'En la mesa compartimos los rotuladores.',
    'Mi hermana y yo compartimos habitación.',
    'En el parque compartimos el balón con otros niños.'
  ],
  gesto: 'Haz como que partes algo con las dos manos y tiende una hacia delante.',
  sentido: [
    { t: 'Compartí mis galletas: me comí dos y le di dos a Lía.', ok: true, por: 'Le dio una parte de lo suyo.' },
    { t: 'Compartí mis pinturas guardándolas para que nadie las tocara.', ok: false, por: 'Si nadie más las usa, no las compartes.' },
    { t: 'En el coche compartimos el asiento de atrás los tres primos.', ok: true, por: 'Lo usan juntos.' },
    { t: 'Compartí la merienda comiéndomela yo solo a escondidas.', ok: false, por: 'Compartir es dar una parte a otros.' }
  ],
  ejemplos: [
    { t: 'Dar la mitad de tu bocadillo', ok: true },
    { t: 'Dejar tus pinturas a toda la mesa', ok: true },
    { t: 'Jugar los dos con el mismo balón', ok: true },
    { t: 'Guardarte todo para ti', ok: false },
    { t: 'Quitarle el juguete a otro', ok: false },
    { t: 'Jugar solo sin dejar a nadie', ok: false }
  ],
  acaba: ['Me gusta compartir… con…', 'Cuando alguien comparte conmigo, yo me siento…'],
  habla: '¿Qué te gusta compartir y qué te cuesta más compartir?',
  rel: { parecida: ['repartir', 'dar una parte'], contraria: ['quedárselo todo'], familia: ['parte'], mas: ['guardarse'] }
});
