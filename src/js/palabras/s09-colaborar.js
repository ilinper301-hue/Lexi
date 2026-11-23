PALABRA({
  id: 'colaborar', palabra: 'colaborar', silabas: ['co', 'la', 'bo', 'rar'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 9, orden: 2, bloque: 'convivir',
  def: 'Colaborar es trabajar con otros, cada uno haciendo su parte, para conseguir algo juntos.',
  otro: null,
  escena: { img: 'colaborar.webp', texto: 'Hay que mover la mesa grande y pesa mucho. Irene llama a tres amigos. Cada uno coge una esquina y cuentan: «una, dos y… ¡tres!». Los cuatro han sabido colaborar.' },
  contextos: [
    'En casa todos colaboramos: yo pongo la mesa y mi padre cocina.',
    'Las hormigas colaboran para llevar una hoja muy grande.',
    'En el mural de la clase colaboramos todos: unos pintan y otros recortan.'
  ],
  gesto: 'Entrelaza los dedos de las dos manos y aprieta.',
  sentido: [
    { t: 'Colaboramos para recoger la clase y acabamos enseguida.', ok: true, por: 'Todos hicieron su parte.' },
    { t: 'Colaboré mirando cómo trabajaban los demás.', ok: false, por: 'Mirar no es hacer tu parte.' },
    { t: 'Los bomberos colaboran: unos traen el agua y otros la echan.', ok: true, por: 'Cada uno hace una parte del trabajo.' },
    { t: 'Colaboramos mucho: cada uno fue por su lado sin hablar con nadie.', ok: false, por: 'Colaborar es trabajar juntos.' }
  ],
  ejemplos: [
    { t: 'Montar una cabaña entre cuatro', ok: true },
    { t: 'Poner la mesa mientras otro cocina', ok: true },
    { t: 'Remar todos a la vez en la barca', ok: true },
    { t: 'Mirar cómo recogen los demás', ok: false },
    { t: 'Hacer un dibujo tú solo', ok: false },
    { t: 'Estropear lo que hace otro', ok: false }
  ],
  acaba: ['En mi casa colaboro cuando…', 'Colaborando es más fácil… porque…'],
  habla: '¿En qué has colaborado esta semana, en casa o en el cole?',
  rel: { parecida: ['trabajar en equipo'], contraria: [], familia: ['colaboración', 'colaborador'], mas: ['cooperar'] }
});
