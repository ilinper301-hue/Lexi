PALABRA({
  id: 'finalmente', palabra: 'finalmente', silabas: ['fi', 'nal', 'men', 'te'],
  tipo: 'enlace', nivel: 2, curso: 1, semana: 5, orden: 3, bloque: 'pensar', sep: 'primero-despues-finalmente',
  def: 'Decimos «finalmente» para contar lo último que pasa, cuando todo lo demás ya ha pasado.',
  otro: null,
  escena: { img: 'finalmente.webp', texto: 'Inés planta una semilla. La riega cada día y espera. Sale un tallo, luego unas hojas… y un día, por fin, se abre una flor. Finalmente, Inés tiene su flor.' },
  contextos: [
    'Mezclamos la harina, metemos el bizcocho al horno y, finalmente, nos lo comemos.',
    'Leímos el problema, hicimos el dibujo y, finalmente, escribimos la respuesta.',
    'La oruga come, se envuelve y, finalmente, sale convertida en mariposa.'
  ],
  gesto: 'Junta las dos manos de golpe, como si cerraras un libro.',
  sentido: [
    { t: 'Me puse los calcetines, los zapatos y, finalmente, me até los cordones.', ok: true, por: 'Atarse es lo último.' },
    { t: 'Finalmente cojo las naranjas, y luego hago el zumo.', ok: false, por: 'Coger las naranjas es lo primero, no lo último.' },
    { t: 'Buscamos al gato por toda la casa y, finalmente, apareció en el armario.', ok: true, por: 'Fue lo último que pasó.' },
    { t: 'Finalmente me desperté, y luego me levanté.', ok: false, por: 'Lo último va al final: detrás ya no pasa nada más.' }
  ],
  ejemplos: [
    { t: 'En una carrera: cruzar la meta', ok: true },
    { t: 'En el comedor: recoger la bandeja', ok: true },
    { t: 'En una función: los aplausos', ok: true },
    { t: 'En una carrera: la salida', ok: false },
    { t: 'En el comedor: coger la bandeja vacía', ok: false },
    { t: 'En una función: abrir el telón', ok: false }
  ],
  pregunta: '¿Es lo último?',
  acaba: ['Me levanté, desayuné, me vestí y, finalmente, …', 'Esperamos mucho rato en la parada y, finalmente, …'],
  habla: 'Cuenta tres cosas que haces antes de dormir. Usa «primero», «después» y «finalmente».',
  rel: { parecida: ['por último', 'al final', 'por fin'], contraria: ['primero'], familia: ['final', 'finalizar'] }
});
