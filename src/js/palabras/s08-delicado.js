PALABRA({
  id: 'delicado', palabra: 'delicado', silabas: ['de', 'li', 'ca', 'do'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 8, orden: 5, bloque: 'como-son',
  def: 'Algo es delicado cuando es fino y se estropea si no lo tratas con mucho cuidado.',
  otro: 'También es delicada una persona que trata las cosas y a los demás con suavidad.',
  escena: { img: 'delicado.webp', texto: 'Erik quiere tocar la flor del almendro. «Con un dedo y muy despacio», dice su tía, «que los pétalos se caen enseguida». Erik casi ni la roza. La flor es delicada.' },
  contextos: [
    'La piel del bebé es delicada y hay que ponerle crema.',
    'Este jersey es delicado: se lava a mano.',
    'Las alas de la libélula son delicadas.'
  ],
  gesto: 'Toca la palma de una mano con un solo dedo, muy flojito.',
  sentido: [
    { t: 'Pasé las hojas del libro antiguo despacio porque son delicadas.', ok: true, por: 'Se estropean si no se tratan con cuidado.' },
    { t: 'Como la flor es delicada, la apreté con todas mis fuerzas.', ok: false, por: 'Lo delicado se trata con cuidado.' },
    { t: 'Lavamos la blusa delicada con agua fría y sin frotar.', ok: true, por: 'Así no se estropea.' },
    { t: 'La roca del monte es muy delicada: nada la estropea.', ok: false, por: 'Si nada la estropea, es resistente.' }
  ],
  ejemplos: [
    { t: 'Un pétalo de flor', ok: true },
    { t: 'Una tela muy fina', ok: true },
    { t: 'Las alas de una mariposa', ok: true },
    { t: 'Un ladrillo', ok: false },
    { t: 'Unas botas de montaña', ok: false },
    { t: 'Una rueda de camión', ok: false }
  ],
  acaba: ['Hay que tocar con cuidado las cosas delicadas porque…', 'Algo delicado que conozco es…'],
  habla: '¿Qué cosa delicada has tenido en las manos? ¿Cómo la cogiste?',
  rel: { parecida: ['frágil'], contraria: ['resistente', 'fuerte'], familia: ['delicadeza'], mas: ['fino'] }
});
