PALABRA({
  id: 'amable', palabra: 'amable', silabas: ['a', 'ma', 'ble'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 9, orden: 5, bloque: 'convivir',
  def: 'Alguien es amable cuando habla con cariño y ayuda a los demás con una sonrisa.',
  otro: null,
  escena: { img: 'amable.webp', texto: 'Un niño nuevo llega al cole y no conoce a nadie. Marta se acerca, sonríe y le pregunta: «¿Quieres jugar con nosotros?». Luego le enseña dónde está el baño. Marta es amable.' },
  contextos: [
    'Mi hermano es amable: me pregunta cómo estoy cuando llego a casa.',
    'Mi compañera fue amable: me prestó el borrador y me sonrió.',
    'La vecina es muy amable: siempre nos saluda con una sonrisa.'
  ],
  gesto: 'Sonríe y saluda con la mano, despacio, hacia un lado.',
  sentido: [
    { t: 'Lucas fue amable y me ayudó a levantarme cuando me caí.', ok: true, por: 'Ayudó con cariño.' },
    { t: 'Fue muy amable: me gritó que me apartara y me empujó.', ok: false, por: 'Gritar y empujar no es tratar con cariño.' },
    { t: 'La panadera es amable: nos saluda y nos sonríe.', ok: true, por: 'Habla bien y sonríe.' },
    { t: 'Fue amable con su amiga: no le contestó y le dio la espalda.', ok: false, por: 'Ignorar a alguien no es ser amable.' }
  ],
  ejemplos: [
    { t: 'Decir «buenos días» con una sonrisa', ok: true },
    { t: 'Ayudar a llevar la mochila a un compañero', ok: true },
    { t: 'Decir «por favor» y «gracias»', ok: true },
    { t: 'Contestar de mala manera', ok: false },
    { t: 'Poner mala cara a quien te saluda', ok: false },
    { t: 'Decirle «¡quítate!» a un compañero', ok: false }
  ],
  acaba: ['Soy amable cuando…', 'Me siento bien cuando alguien es amable conmigo porque…'],
  habla: '¿Qué puedes hacer o decir hoy para ser amable con alguien?',
  rel: { parecida: ['cariñoso', 'educado'], contraria: ['antipático'], familia: ['amabilidad'] }
});
