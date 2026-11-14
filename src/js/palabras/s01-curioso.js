PALABRA({
  id: 'curioso', palabra: 'curioso', silabas: ['cu', 'rio', 'so'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 1, bloque: 'sentir',
  def: 'Alguien es curioso cuando tiene muchas ganas de saber y descubrir cosas nuevas.',
  otro: 'También decimos que algo es curioso cuando es raro y nos llama la atención.',
  escena: { img: 'curioso.webp', texto: 'Leo ve una caja cerrada encima de la mesa. «¿Qué habrá dentro?», piensa. Se acerca, la mira por todos lados y pregunta a su madre. Leo es un niño curioso.' },
  contextos: [
    'Mi gata es curiosa: mete la cabeza en todas las bolsas.',
    'Sara es curiosa y siempre pregunta «¿por qué?».',
    'Las científicas son personas curiosas: quieren saber cómo funciona todo.'
  ],
  gesto: 'Ladea la cabeza y ponte un dedo en la barbilla: «¿y esto qué es?».',
  sentido: [
    { t: 'Como soy curioso, abrí el libro para saber cómo viven los pingüinos.', ok: true, por: 'Quería saber algo nuevo.' },
    { t: 'Pablo es muy curioso: nunca quiere saber nada.', ok: false, por: 'Quien es curioso quiere saber cosas.' },
    { t: 'La niña curiosa preguntó cómo se hace el pan.', ok: true, por: 'Preguntar es querer saber.' },
    { t: 'El perro curioso se quedó dormido sin mirar nada.', ok: false, por: 'Si fuera curioso, querría mirar y oler.' }
  ],
  ejemplos: [
    { t: 'Preguntar por qué llueve', ok: true },
    { t: 'Mirar un bicho con la lupa', ok: true },
    { t: 'Abrir un libro para saber de dinosaurios', ok: true },
    { t: 'Decir «me da igual»', ok: false },
    { t: 'No querer probar nada nuevo', ok: false },
    { t: 'Dormir la siesta', ok: false }
  ],
  acaba: ['Soy curioso y me gustaría saber…', 'La gata curiosa vio una caja y…'],
  habla: '¿Qué te gustaría descubrir a ti? Cuéntaselo a tu compañero.',
  rel: { parecida: [], contraria: [], familia: ['curiosidad', 'curiosear'] }
});
