PALABRA({
  id: 'parecido', palabra: 'parecido', silabas: ['pa', 're', 'ci', 'do'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 3, orden: 4, bloque: 'como-son', sep: 'parecido-diferente',
  def: 'Dos cosas son parecidas cuando tienen algo igual, pero no son iguales del todo.',
  otro: null,
  escena: { img: 'parecido.webp', texto: 'Samuel y su hermano tienen el pelo rizado y la misma sonrisa. Pero Samuel es más alto y lleva gafas. No son iguales del todo. Samuel y su hermano son parecidos.' },
  contextos: [
    'El lobo y el perro son parecidos.',
    'La b y la d son letras parecidas: hay que fijarse bien.',
    'Mi abrigo es parecido al tuyo, pero el mío tiene capucha.'
  ],
  gesto: 'Acerca los dos dedos índices hasta ponerlos uno al lado del otro.',
  sentido: [
    { t: 'El limón y la naranja son parecidos: los dos son frutas redondas con cáscara.', ok: true, por: 'Tienen cosas iguales, aunque no son lo mismo.' },
    { t: 'Un pez y una bicicleta son muy parecidos.', ok: false, por: 'No tienen casi nada igual.' },
    { t: 'Tu letra es parecida a la mía: casi no las distingo.', ok: true, por: 'Tienen mucho en común.' },
    { t: 'Estos dos lápices son parecidos porque no tienen nada igual.', ok: false, por: 'Si no tienen nada igual, son diferentes.' }
  ],
  ejemplos: [
    { t: 'Un tigre y un gato', ok: true },
    { t: 'Una mandarina y una naranja', ok: true },
    { t: 'Un 6 y un 9', ok: true },
    { t: 'Una cuchara y una nube', ok: false },
    { t: 'Un zapato y un árbol', ok: false },
    { t: 'Un pez y un paraguas', ok: false }
  ],
  pregunta: '¿Son parecidos?',
  acaba: ['Mi mochila es parecida a la de… porque las dos…', 'Un caballo y una cebra son parecidos porque…'],
  habla: '¿A quién de tu familia te pareces? ¿En qué?',
  rel: { parecida: ['casi igual'], contraria: ['diferente'], familia: ['parecerse'], mas: ['semejante'] }
});
