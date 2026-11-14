PALABRA({
  id: 'comparar', palabra: 'comparar', silabas: ['com', 'pa', 'rar'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 1, bloque: 'pensar',
  def: 'Comparar es fijarte en dos cosas para ver en qué se parecen y en qué son diferentes.',
  otro: null,
  escena: { img: 'comparar.webp', texto: 'Hugo tiene dos lápices. Los pone juntos, uno al lado del otro. El rojo es más largo que el azul. Hugo ha comparado los lápices.' },
  contextos: [
    'En mates comparamos dos números para saber cuál es mayor.',
    'Marta compara su mano con la de su abuelo: la del abuelo es más grande.',
    'En la frutería comparamos dos sandías para elegir una.'
  ],
  gesto: 'Sube las dos manos como una balanza y mira una y luego la otra.',
  sentido: [
    { t: 'Comparé mis zapatos con los de mi hermano y los suyos eran más grandes.', ok: true, por: 'Se fijó en los dos y vio la diferencia.' },
    { t: 'Comparé un gato.', ok: false, por: 'Para comparar hacen falta dos cosas.' },
    { t: 'Comparamos dos torres para ver cuál era más alta.', ok: true, por: 'Miraron las dos a la vez.' },
    { t: 'Comparé las dos manzanas sin mirar ninguna.', ok: false, por: 'Para comparar hay que fijarse en las dos.' }
  ],
  ejemplos: [
    { t: 'Poner dos lápices juntos para ver cuál es más largo', ok: true },
    { t: 'Mirar quién es más alto, tú o tu amiga', ok: true },
    { t: 'Decir en qué se parecen un perro y un gato', ok: true },
    { t: 'Contar cuántos lápices hay', ok: false },
    { t: 'Mirar solo un lápiz', ok: false },
    { t: 'Colorear un dibujo', ok: false }
  ],
  acaba: ['Si comparo un elefante con un ratón, veo que…', 'Comparé los dos dibujos y descubrí que…'],
  habla: 'Compara tu estuche con el de tu compañero. ¿En qué se parecen? ¿En qué son diferentes?',
  rel: { parecida: [], contraria: [], familia: ['comparación'] }
});
