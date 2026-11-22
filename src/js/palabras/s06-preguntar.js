PALABRA({
  id: 'preguntar', palabra: 'preguntar', silabas: ['pre', 'gun', 'tar'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 6, orden: 3, bloque: 'pensar',
  def: 'Preguntar es decirle algo a alguien para que te conteste lo que quieres saber.',
  otro: null,
  escena: { img: 'preguntar.webp', texto: 'Chloe no encuentra el baño en el museo. Se acerca a una vigilante y dice: «Por favor, ¿dónde está el baño?». La vigilante se lo indica. Chloe ha sabido preguntar.' },
  contextos: [
    'Si no entiendo algo, le pregunto a la maestra.',
    'El médico pregunta: «¿Dónde te duele?».',
    'En la calle, mi padre pregunta por dónde se va a la estación.'
  ],
  gesto: 'Dibuja en el aire, con el dedo, un signo de interrogación.',
  sentido: [
    { t: 'No sabía la hora y le pregunté a mi madre.', ok: true, por: 'Quería saber algo y lo pidió.' },
    { t: 'Pregunté diciendo: «Me llamo Raúl y tengo seis años».', ok: false, por: 'Eso es contar algo, no preguntar.' },
    { t: 'Pregunté «¿cómo te llamas?» porque quería saber su nombre.', ok: true, por: 'Espera que le contesten.' },
    { t: 'Le pregunté cuántos años tenía diciéndole «¡qué abrigo más bonito!».', ok: false, por: 'Eso no pide ninguna respuesta.' }
  ],
  ejemplos: [
    { t: '«¿Cuántos años tienes?»', ok: true },
    { t: '«¿Puedo ir al baño?»', ok: true },
    { t: '«¿Por qué el cielo es azul?»', ok: true },
    { t: '«Tengo un perro.»', ok: false },
    { t: '«¡Qué frío hace!»', ok: false },
    { t: '«Cierra la puerta.»', ok: false }
  ],
  acaba: ['Si no entiendo una palabra, pregunto…', 'A un astronauta le preguntaría…'],
  habla: 'Pregunta a tu compañero dos cosas que no sepas de él.',
  rel: { parecida: [], contraria: ['responder', 'contestar'], familia: ['pregunta', 'preguntón'] }
});
