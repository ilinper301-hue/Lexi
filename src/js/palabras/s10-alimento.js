PALABRA({
  id: 'alimento', palabra: 'alimento', silabas: ['a', 'li', 'men', 'to'],
  tipo: 'nombre', nivel: 2, curso: 1, semana: 10, orden: 2, bloque: 'medio',
  def: 'Un alimento es lo que comen o beben los seres vivos para crecer y tener fuerzas.',
  otro: null,
  escena: { img: 'alimento.webp', texto: 'Naia vuelve del mercado con su padre. En la cesta hay pan, tomates, lentejas, huevos y un melón. Con todo eso van a comer esta semana. La cesta está llena de alimentos.' },
  contextos: [
    'La leche es el primer alimento de los bebés.',
    'La hierba es el alimento de las vacas.',
    'En el comedor tomamos alimentos variados: verdura, fruta, lentejas, pescado…'
  ],
  gesto: 'Lleva una mano a la boca, como si comieras con cuchara.',
  sentido: [
    { t: 'El pan es un alimento.', ok: true, por: 'Se come y da fuerzas.' },
    { t: 'Mi goma de borrar es un alimento riquísimo.', ok: false, por: 'La goma no se come.' },
    { t: 'Los pájaros buscan alimento para sus crías.', ok: true, por: 'Las crías necesitan comer para crecer.' },
    { t: 'La arena es el alimento de los perros.', ok: false, por: 'Los perros no comen arena.' }
  ],
  ejemplos: [
    { t: 'Una manzana', ok: true },
    { t: 'Un plato de lentejas', ok: true },
    { t: 'Un vaso de leche', ok: true },
    { t: 'Una cuchara', ok: false },
    { t: 'Una piedra', ok: false },
    { t: 'Un lápiz', ok: false }
  ],
  pregunta: '¿Es un alimento?',
  acaba: ['Mi alimento favorito es… porque…', 'Necesitamos alimentos para…'],
  habla: '¿Qué alimentos has tomado hoy en el desayuno? Cuéntaselo a tu compañero.',
  rel: { parecida: ['comida'], contraria: [], familia: ['alimentar', 'alimentación'] }
});
