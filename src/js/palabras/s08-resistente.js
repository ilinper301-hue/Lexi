PALABRA({
  id: 'resistente', palabra: 'resistente', silabas: ['re', 'sis', 'ten', 'te'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 8, orden: 4, bloque: 'como-son',
  def: 'Algo es resistente cuando aguanta mucho sin romperse ni estropearse.',
  otro: null,
  escena: { img: 'resistente.webp', texto: 'Mía se sube al puente de madera del parque. Salta una vez, y otra, y otra más. El puente no se mueve ni cruje. El puente es resistente.' },
  contextos: [
    'Mi mochila es resistente: lleva tres cursos conmigo.',
    'El casco es resistente para proteger la cabeza.',
    'La tela de araña parece frágil, pero es muy resistente.'
  ],
  gesto: 'Aprieta los dos puños y enseña los músculos de los brazos.',
  sentido: [
    { t: 'Estas botas son resistentes: piso charcos y piedras y siguen como nuevas.', ok: true, por: 'Aguantan mucho sin estropearse.' },
    { t: 'El vaso era tan resistente que se rompió al rozarlo.', ok: false, por: 'Lo que se rompe al rozarlo es frágil.' },
    { t: 'Hicimos la cabaña con palos resistentes para que aguantara el viento.', ok: true, por: 'Tenían que aguantar sin romperse.' },
    { t: 'La pompa de jabón es muy resistente: explota con un soplido.', ok: false, por: 'Si explota con un soplido, no aguanta nada.' }
  ],
  ejemplos: [
    { t: 'Un puente de piedra', ok: true },
    { t: 'Un martillo', ok: true },
    { t: 'Unas botas de montaña', ok: true },
    { t: 'Una pompa de jabón', ok: false },
    { t: 'Un huevo', ok: false },
    { t: 'Una hoja de papel mojada', ok: false }
  ],
  acaba: ['Mi juguete más resistente es… porque…', 'Una mochila tiene que ser resistente porque…'],
  habla: '¿Qué cosa resistente tienes desde hace mucho tiempo y no se rompe?',
  rel: { parecida: ['fuerte', 'duro'], contraria: ['frágil', 'delicado'], familia: ['resistir', 'resistencia'] }
});
