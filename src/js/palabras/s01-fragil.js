PALABRA({
  id: 'fragil', palabra: 'frágil', silabas: ['frá', 'gil'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 1, orden: 5, bloque: 'como-son',
  def: 'Algo es frágil cuando se rompe con facilidad y hay que tratarlo con cuidado.',
  otro: null,
  escena: { img: 'fragil.webp', texto: 'Ana lleva un huevo en la mano. Camina muy despacio para que no se le caiga. Si se cae, se rompe. El huevo es frágil.' },
  contextos: [
    'Los vasos de cristal son frágiles: los cogemos con las dos manos.',
    'Las alas de la mariposa son frágiles; por eso no las tocamos.',
    'En la caja pone «frágil» porque dentro hay un jarrón.'
  ],
  gesto: 'Junta las manos como si llevaras un pajarito y muévelas muy despacio.',
  sentido: [
    { t: 'Cogí la copa con cuidado porque es frágil.', ok: true, por: 'Lo frágil se trata con cuidado.' },
    { t: 'La piedra es tan frágil que no se rompe nunca.', ok: false, por: 'Si no se rompe nunca, es resistente.' },
    { t: 'Envolvimos el jarrón frágil con mucho papel.', ok: true, por: 'Así lo protegemos para que no se rompa.' },
    { t: 'Mi martillo de hierro es muy frágil.', ok: false, por: 'El hierro es duro y resistente.' }
  ],
  ejemplos: [
    { t: 'Un huevo', ok: true },
    { t: 'Una copa de cristal', ok: true },
    { t: 'Una pompa de jabón', ok: true },
    { t: 'Un martillo', ok: false },
    { t: 'Una piedra', ok: false },
    { t: 'Un balón de fútbol', ok: false }
  ],
  acaba: ['Hay que tener cuidado con las cosas frágiles porque…', 'En mi casa hay algo frágil: …'],
  habla: '¿Qué cosa frágil hay en tu casa? ¿Cómo la cuidáis?',
  rel: { parecida: ['delicado'], contraria: ['resistente', 'duro'], familia: ['fragilidad'] }
});
