PALABRA({
  id: 'comprobar', palabra: 'comprobar', silabas: ['com', 'pro', 'bar'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 7, orden: 3, bloque: 'pensar',
  def: 'Comprobar es mirar otra vez para estar seguro de que algo está bien.',
  otro: null,
  escena: { img: 'comprobar.webp', texto: 'Jimena ha hecho una suma: 4 más 3 son 7. Para estar segura, saca siete garbanzos y los cuenta uno a uno. ¡Sí, son siete! Jimena lo ha comprobado.' },
  contextos: [
    'Antes de salir comprobamos que llevamos el agua y el bocadillo.',
    'Mi padre comprueba que la puerta está cerrada.',
    'La médica comprueba si tengo fiebre con el termómetro.'
  ],
  gesto: 'Dibuja en el aire, con el dedo, la marca de «bien»: baja un poco y sube.',
  sentido: [
    { t: 'Comprobé la mochila y vi que faltaba el estuche.', ok: true, por: 'Al mirar se dio cuenta.' },
    { t: 'Comprobé la suma sin volver a mirarla.', ok: false, por: 'Para comprobar hay que mirar otra vez.' },
    { t: 'Comprobamos pesándolas cuál de las dos cajas pesaba más.', ok: true, por: 'Lo miraron para estar seguros.' },
    { t: 'Lo comprobé sin mirarlo ni una vez.', ok: false, por: 'Sin mirar no se comprueba nada.' }
  ],
  ejemplos: [
    { t: 'Contar otra vez para ver si la suma está bien', ok: true },
    { t: 'Mirar si la puerta está cerrada', ok: true },
    { t: 'Probar si el rotulador pinta', ok: true },
    { t: 'Decir «seguro que está bien» sin mirar', ok: false },
    { t: 'Adivinar el resultado', ok: false },
    { t: 'Entregar la ficha sin repasarla', ok: false }
  ],
  acaba: ['Antes de entregar la ficha compruebo…', 'Para comprobar si llueve, yo…'],
  habla: '¿Qué compruebas tú antes de salir de casa por la mañana?',
  rel: { parecida: ['asegurarse'], contraria: [], familia: ['comprobación'], mas: ['revisar'] }
});
