PALABRA({
  id: 'paisaje', palabra: 'paisaje', silabas: ['pai', 'sa', 'je'],
  tipo: 'nombre', nivel: 2, curso: 1, semana: 10, orden: 3, bloque: 'medio',
  def: 'Un paisaje es todo lo que ves cuando miras a lo lejos desde un sitio.',
  otro: null,
  escena: { img: 'paisaje.webp', texto: 'Víctor sube a lo alto de un monte con su madre. Desde arriba ve montañas, un río que brilla y un pueblo pequeñito. «¡Qué bonito!», dice. Víctor está mirando el paisaje.' },
  contextos: [
    'Por la ventanilla del tren vemos el paisaje: campos y molinos.',
    'En la playa, el paisaje es de mar, arena y rocas.',
    'En plástica pintamos un paisaje nevado.'
  ],
  gesto: 'Ponte una mano de visera sobre los ojos y mira a lo lejos, de lado a lado.',
  sentido: [
    { t: 'Desde la montaña se ve un paisaje precioso.', ok: true, por: 'Desde arriba se ve muy lejos.' },
    { t: 'Cogí el paisaje con la mano y lo guardé en el bolsillo.', ok: false, por: 'Un paisaje se mira; no se puede coger.' },
    { t: 'El paisaje del desierto tiene arena y casi ninguna planta.', ok: true, por: 'Es lo que se ve allí al mirar a lo lejos.' },
    { t: 'Con los ojos cerrados veía muy bien el paisaje.', ok: false, por: 'Para ver el paisaje hay que mirar.' }
  ],
  ejemplos: [
    { t: 'Lo que ves desde lo alto de una montaña', ok: true },
    { t: 'El campo que se ve por la ventanilla del coche', ok: true },
    { t: 'La playa con el mar al fondo', ok: true },
    { t: 'Lo que hay dentro de tu estuche', ok: false },
    { t: 'Una hormiga vista con lupa', ok: false },
    { t: 'El interior de un cajón', ok: false }
  ],
  pregunta: '¿Es un paisaje?',
  acaba: ['Desde mi ventana, el paisaje tiene…', 'El paisaje que más me gusta es… porque…'],
  habla: 'Describe a tu compañero un paisaje que te guste. ¿Qué se ve?',
  rel: { parecida: ['lo que ves a lo lejos'], contraria: [], familia: [], mas: ['vista'] }
});
