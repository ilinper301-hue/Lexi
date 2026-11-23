PALABRA({
  id: 'necesario', palabra: 'necesario', silabas: ['ne', 'ce', 'sa', 'rio'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 7, orden: 4, bloque: 'como-son',
  def: 'Algo es necesario cuando hace falta de verdad: sin eso no se puede.',
  otro: null,
  escena: { img: 'necesario.webp', texto: 'Álex quiere pintar con acuarelas. Tiene el papel, el pincel y las pinturas, pero no sale ningún color. «¡Falta el agua!», dice su hermana. Para pintar, el agua es necesaria.' },
  contextos: [
    'Para las plantas, el agua es necesaria.',
    'Para montar en bici es necesario llevar casco.',
    'Dormir es necesario para tener fuerzas.'
  ],
  gesto: 'Golpea la palma de una mano con el puño de la otra: «hace falta».',
  sentido: [
    { t: 'Para hacer pan es necesaria la harina.', ok: true, por: 'Sin harina no sale el pan.' },
    { t: 'Para leer un cuento es necesario un paraguas.', ok: false, por: 'Se puede leer sin paraguas.' },
    { t: 'Para cruzar el río es necesario un puente o una barca.', ok: true, por: 'Sin eso no se puede pasar.' },
    { t: 'El abrigo es necesario cuando hace muchísimo calor.', ok: false, por: 'Con calor no hace falta abrigo.' }
  ],
  ejemplos: [
    { t: 'Agua para una planta', ok: true },
    { t: 'Aire para respirar', ok: true },
    { t: 'Luz para leer', ok: true },
    { t: 'Un sombrero para sumar', ok: false },
    { t: 'Una pelota para dormir', ok: false },
    { t: 'Un caramelo después de comer', ok: false }
  ],
  pregunta: '¿Es necesario?',
  acaba: ['Para dibujar es necesario…', 'Dormir es necesario porque…'],
  habla: '¿Qué cosas son necesarias para ir de excursión? Pensad tres.',
  rel: { parecida: ['que hace falta'], contraria: [], familia: ['necesitar', 'necesidad'], mas: ['imprescindible', 'innecesario'] }
});
