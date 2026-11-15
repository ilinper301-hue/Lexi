# 2.º · Semana 6 · contenido completo

Seis palabras y la pieza de la semana, escritas con las normas de `docs/pedagogia.md` y de
`docs/segundo.md`. Al programar, cada ficha pasa tal cual a `src/js/palabras/2s06-<id>.js` y la pieza
a `src/js/piezas/2s06-re.js`.

**Pendiente de la revisión de Iván.**

## Las seis palabras

```js
PALABRA({
  id: 'predecir', palabra: 'predecir', silabas: ['pre', 'de', 'cir'],
  tipo: 'accion', nivel: 2, curso: 2, semana: 6, bloque: 'pensar',
  def: 'Predecir es decir lo que crees que va a pasar, fijándote en las pistas que tienes.',
  otro: null,
  escena: { img: 'predecir.webp', texto: 'La maestra enseña la portada de un cuento: un lobo con un gorro de cocinero. «¿De qué irá?», pregunta. Abril piensa y dice: «El lobo va a hacer una cena». Abril acaba de predecir lo que pasará en el cuento.' },
  contextos: [
    'Antes del experimento predecimos: ¿flotará el corcho o se hundirá?',
    'Mi abuelo mira las nubes y predice si va a llover.',
    'Nadie pudo predecir quién iba a ganar el partido.'
  ],
  gesto: 'Llévate un dedo a la frente y luego apunta con él hacia delante, lejos: «creo que va a pasar esto».',
  sentido: [
    { t: 'Al ver las nubes negras, pude predecir que iba a llover.', ok: true, por: 'Las nubes negras son la pista.' },
    { t: 'Voy a predecir lo que cené ayer.', ok: false, por: 'Lo de ayer ya ha pasado: se recuerda, no se predice.' },
    { t: 'Por el dibujo de la portada predecimos de qué trata el libro.', ok: true, por: 'Dicen lo que creen antes de leerlo, fijándose en el dibujo.' },
    { t: 'Ya terminó el partido y ahora predigo quién ha ganado.', ok: false, por: 'Si ya ha terminado, se sabe quién ha ganado: no hay nada que predecir.' }
  ],
  ejemplos: [
    { t: 'Decir quién crees que ganará la carrera, antes de la salida', ok: true },
    { t: 'Decir qué pasará con el hielo si lo dejas al sol', ok: true },
    { t: 'Decir cómo crees que acaba un cuento que vas por la mitad', ok: true },
    { t: 'Contar lo que hiciste el domingo', ok: false },
    { t: 'Leer el final del cuento para saber cómo acaba', ok: false },
    { t: 'Mirar por la ventana y decir que está lloviendo', ok: false }
  ],
  acaba: ['Si dejo un helado al sol, puedo predecir que…', 'Predigo que esta tarde… porque…'],
  habla: '¿Qué tiempo crees que hará mañana? Díselo a tu compañero y cuéntale en qué pistas te fijas.',
  rel: { parecida: ['decir lo que va a pasar'], contraria: [], familia: ['decir', 'predicción'], mas: ['adivinar', 'pronosticar', 'anticipar'] },
  fam: {
    si: [
      { p: 'decir', t: '¿Me puedes ___ qué hora es, por favor?' },
      { p: 'predicción', t: 'Mi ___ era que iba a llover, y acerté.' }
    ],
    no: [
      { p: 'precio', por: 'El precio es lo que cuesta algo; no tiene que ver con decir lo que va a pasar.' },
      { p: 'prado', por: 'Un prado es un campo de hierba; no tiene que ver con decir lo que va a pasar.' }
    ]
  }
});

PALABRA({
  id: 'organizar', palabra: 'organizar', silabas: ['or', 'ga', 'ni', 'zar'],
  tipo: 'accion', nivel: 2, curso: 2, semana: 6, bloque: 'pensar',
  def: 'Organizar es preparar con orden todo lo que hace falta para que algo salga bien.',
  otro: 'En los enunciados, organizar los datos es colocarlos en una tabla o en una lista para verlos claros.',
  escena: { img: 'organizar.webp', texto: 'El viernes es el cumpleaños del abuelo y Triana quiere darle una sorpresa. Hace una lista: su hermano infla los globos, su madre trae la tarta y ella avisa a los primos. Lo apunta todo, con el día y la hora. Triana está organizando la fiesta.' },
  contextos: [
    'Antes del viaje, mi padre organiza las maletas: qué va en cada una.',
    'El ayuntamiento organiza una carrera en las fiestas del barrio.',
    'Organizo los datos en una tabla: en una columna los animales y en otra lo que comen.'
  ],
  gesto: 'Mueve las dos manos en el aire como quien dirige una orquesta: «tú aquí, tú allí».',
  sentido: [
    { t: 'Organizamos la excursión: elegimos el día, el autobús y qué llevar.', ok: true, por: 'Prepararon con orden todo lo que hacía falta.' },
    { t: 'Organicé muy bien la fiesta: no avisé a nadie ni preparé nada.', ok: false, por: 'Sin avisar ni preparar nada no hay nada organizado.' },
    { t: 'Para el teatro nos organizamos: unos hacen los disfraces y otros el decorado.', ok: true, por: 'Decidieron quién hace cada cosa.' },
    { t: 'Organicé mis cromos tirándolos todos revueltos dentro de un cajón.', ok: false, por: 'Revueltos y tirados no están organizados.' }
  ],
  ejemplos: [
    { t: 'Preparar un torneo: equipos, horarios y árbitro', ok: true },
    { t: 'Repartir las tareas de un trabajo en grupo', ok: true },
    { t: 'Colocar los datos de un problema en una tabla', ok: true },
    { t: 'Ir a una fiesta que ha preparado otro', ok: false },
    { t: 'Empezar un trabajo sin pensar quién hace cada cosa', ok: false },
    { t: 'Guardarlo todo revuelto en la mochila', ok: false }
  ],
  acaba: ['Para organizar una fiesta de cumpleaños hace falta…', 'Si organizamos bien el trabajo en equipo, …'],
  habla: 'Vas a organizar con tu compañero un juego para el recreo: decidid a qué se juega, qué hace falta y quién lo trae.',
  rel: { parecida: ['preparar', 'planear'], contraria: [], familia: ['organización', 'organizador', 'organizadora', 'reorganizar', 'organizado'], mas: ['planificar', 'ordenar', 'improvisar'] },
  fam: {
    si: [
      { p: 'organización', t: 'La ___ de la fiesta nos llevó toda la semana.', pieza: 'cion' },
      { p: 'organizador', t: 'El ___ de la carrera dio la salida con un silbato.', pieza: 'or' },
      { p: 'reorganizar', t: 'Llegaron más niños y hubo que ___ los equipos.', pieza: 're' }
    ],
    no: [
      { p: 'orgulloso', por: 'Estar orgulloso es estar contento de lo que has hecho; no tiene que ver con organizar.' },
      { p: 'oruga', por: 'Una oruga es un animal que se arrastra; no tiene que ver con organizar.' }
    ]
  }
});

PALABRA({
  id: 'revisar', palabra: 'revisar', silabas: ['re', 'vi', 'sar'],
  tipo: 'accion', nivel: 2, curso: 2, semana: 6, bloque: 'pensar',
  def: 'Revisar es mirar despacio algo que ya está hecho para ver si está bien o falta algo.',
  otro: null,
  escena: { img: 'revisar.webp', texto: 'Unai termina el dictado y va a entregarlo. «Espera», piensa. Lo lee otra vez desde el principio, despacio, y encuentra una palabra a la que le falta una letra. Menos mal que Unai lo ha revisado.' },
  contextos: [
    'El mecánico revisa los frenos del coche antes del viaje.',
    'Mi madre revisa la mochila conmigo para ver que no falta nada.',
    'La pediatra me revisa los oídos y la garganta.'
  ],
  gesto: 'Toca con un dedo cuatro puntos en el aire, uno debajo de otro y despacio: «bien, bien, bien… ¡ay, aquí!».',
  sentido: [
    { t: 'Revisé la suma y encontré un fallo: había puesto un 3 en vez de un 8.', ok: true, por: 'Volvió a mirar lo que ya había hecho y vio el error.' },
    { t: 'Revisé el dibujo antes de empezar a hacerlo.', ok: false, por: 'Solo se revisa lo que ya está hecho.' },
    { t: 'El socorrista revisa cada mañana que la piscina esté limpia y segura.', ok: true, por: 'Mira con atención que todo esté bien.' },
    { t: 'Revisé la redacción sin mirarla, mientras jugaba a la pelota.', ok: false, por: 'Revisar es mirar despacio: sin mirar no se revisa nada.' }
  ],
  ejemplos: [
    { t: 'Leer otra vez tu cuento para ver si falta alguna letra', ok: true },
    { t: 'Mirar la mochila la noche antes para ver que está todo', ok: true },
    { t: 'Repasar las cuentas antes de entregar la ficha', ok: true },
    { t: 'Entregar la ficha nada más acabarla, sin mirarla', ok: false },
    { t: 'Escribir un cuento por primera vez', ok: false },
    { t: 'Borrarlo todo y empezar de nuevo', ok: false }
  ],
  acaba: ['Antes de entregar un trabajo lo reviso para…', 'Al revisar mi mochila me di cuenta de que…'],
  habla: '¿Qué revisas tú antes de salir de casa por la mañana? Cuéntaselo a tu compañero.',
  rel: { parecida: ['repasar', 'mirar otra vez'], contraria: [], familia: ['revisión', 'revisor', 'revisora'], mas: ['comprobar', 'examinar', 'corregir'] },
  fam: {
    si: [
      { p: 'revisión', t: 'El coche pasó la ___ y estaba todo bien.' },
      { p: 'revisor', t: 'En el tren, el ___ nos pidió los billetes.', pieza: 'or' }
    ],
    no: [
      { p: 'revés', por: 'Al revés es al contrario; no tiene que ver con mirar si algo está bien.' },
      { p: 'reventar', por: 'Reventar es explotar, como un globo; no tiene que ver con mirar si algo está bien.' }
    ]
  }
});

PALABRA({
  id: 'humedo', palabra: 'húmedo', silabas: ['hú', 'me', 'do'],
  tipo: 'cualidad', nivel: 2, curso: 2, semana: 6, bloque: 'como-son',
  def: 'Algo está húmedo cuando está un poco mojado, sin llegar a chorrear.',
  otro: 'También es húmedo un sitio donde llueve mucho.',
  escena: { img: 'humedo.webp', texto: 'Guille vuelve de la piscina y deja la toalla hecha una bola en la mochila. Por la tarde la saca. No chorrea, pero está fría y todavía un poco mojada. La toalla está húmeda.' },
  contextos: [
    'Por la mañana la hierba está húmeda por el rocío.',
    'Limpiamos la pizarra con un trapo húmedo.',
    'El sótano de mi abuela es húmedo y huele a cerrado.'
  ],
  gesto: 'Frota el pulgar con los otros dedos de la misma mano, despacio, como quien toca algo que moja un poquito.',
  sentido: [
    { t: 'Después de fregar, el suelo se queda húmedo un rato.', ok: true, por: 'Está un poco mojado hasta que se va el agua.' },
    { t: 'Dejé el bañador al sol todo el día y por eso seguía muy húmedo.', ok: false, por: 'Con todo el día al sol, el bañador se queda sin agua.' },
    { t: 'La nariz de mi perro está fresquita y húmeda.', ok: true, por: 'Está un poco mojada, sin chorrear.' },
    { t: 'Me tiré de cabeza a la piscina y salí solo un poco húmedo.', ok: false, por: 'Si te tiras a la piscina sales empapado, no un poco mojado.' }
  ],
  ejemplos: [
    { t: 'Una toalla después de usarla', ok: true },
    { t: 'La tierra de una maceta recién regada', ok: true },
    { t: 'El espejo del baño después de la ducha', ok: true },
    { t: 'Una galleta recién sacada del paquete', ok: false },
    { t: 'La arena del desierto', ok: false },
    { t: 'Una esponja que chorrea agua', ok: false }
  ],
  acaba: ['Mi ropa se quedó húmeda porque…', 'Sé que la tierra de la planta está húmeda porque…'],
  habla: '¿Qué cosas has tocado hoy que estuvieran húmedas? Piensa dos y díselas a tu compañero.',
  rel: { parecida: ['un poco mojado'], contraria: ['seco'], familia: ['humedad', 'humedecer'], mas: ['mojado', 'empapado'] }
});

PALABRA({
  id: 'seco', palabra: 'seco', silabas: ['se', 'co'],
  tipo: 'cualidad', nivel: 2, curso: 2, semana: 6, bloque: 'como-son',
  def: 'Algo está seco cuando no tiene nada de agua: ni una gota.',
  otro: 'También es seco un sitio donde casi nunca llueve, como el desierto.',
  escena: { img: 'seco.webp', texto: 'Guille tiende la toalla al sol, bien estirada. Pasa la tarde, y el sol y el aire hacen su trabajo. Guille la toca: no queda ni una gota de agua. La toalla ya está seca.' },
  contextos: [
    'En otoño pisamos las hojas secas y crujen.',
    'Guardo los rotuladores bien tapados para que no se queden secos.',
    'Tendemos la ropa y, cuando está seca, la doblamos.'
  ],
  gesto: 'Enseña las dos palmas bien abiertas y sopla sobre ellas: «ni una gota».',
  sentido: [
    { t: 'Me puse las botas de agua y los calcetines siguieron secos.', ok: true, por: 'Las botas no dejaron pasar ni una gota.' },
    { t: 'Salí de la ducha totalmente seco, sin usar la toalla.', ok: false, por: 'De la ducha se sale mojado.' },
    { t: 'Hace semanas que no llueve y el campo está seco.', ok: true, por: 'Sin lluvia, la tierra se queda sin agua.' },
    { t: 'El pez nadaba feliz en su pecera seca.', ok: false, por: 'En una pecera sin agua un pez no puede nadar.' }
  ],
  ejemplos: [
    { t: 'Una galleta recién sacada del paquete', ok: true },
    { t: 'La arena del desierto', ok: true },
    { t: 'La ropa que lleva todo el día tendida al sol', ok: true },
    { t: 'La tierra de una maceta recién regada', ok: false },
    { t: 'Una esponja que chorrea agua', ok: false },
    { t: 'El pelo al salir de la piscina', ok: false }
  ],
  acaba: ['Después de la lluvia, lo único que quedó seco fue…', 'Para que la ropa mojada se quede seca hay que…'],
  habla: 'Imagina que te pilla un chaparrón. ¿Qué harías para llegar seco a casa? Cuéntaselo a tu compañero.',
  rel: { parecida: ['sin nada de agua'], contraria: ['húmedo', 'mojado'], familia: ['secar', 'secador', 'sequía'], mas: ['árido', 'reseco'] },
  fam: {
    si: [
      { p: 'secar', t: 'Después de lavarte las manos, te las tienes que ___.' },
      { p: 'secador', t: 'Mi padre me arregla el pelo mojado con el ___.', pieza: 'or' }
    ],
    no: [
      { p: 'secreto', por: 'Un secreto es algo que no se cuenta; no tiene que ver con estar sin agua.' }
    ]
  }
});

PALABRA({
  id: 'decepcionado', palabra: 'decepcionado', silabas: ['de', 'cep', 'cio', 'na', 'do'],
  tipo: 'cualidad', nivel: 2, curso: 2, semana: 6, bloque: 'sentir',
  def: 'Alguien está decepcionado cuando esperaba algo bueno y al final no pasa o no es como creía.',
  otro: null,
  escena: { img: 'decepcionado.webp', texto: 'Rodrigo lleva semanas esperando el estreno de la película de dragones. Por fin entra en el cine, con sus palomitas. La película resulta lenta y aburrida, y casi no salen dragones. Rodrigo sale decepcionado.' },
  contextos: [
    'Estaba decepcionada: creía que venían mis primos y al final no pudieron.',
    'El equipo se quedó decepcionado al perder la final en el último minuto.',
    'Queríamos ver nevar y solo cayeron cuatro gotas: toda la clase quedó decepcionada.'
  ],
  gesto: 'Levanta las dos manos abiertas, con ilusión, y déjalas caer de golpe sobre las rodillas: «oooh…».',
  sentido: [
    { t: 'Pensaba que el regalo era un patinete y eran unos calcetines: me quedé decepcionado.', ok: true, por: 'Esperaba una cosa mejor y no fue así.' },
    { t: 'Me regalaron justo el patinete que quería y me sentí muy decepcionada.', ok: false, por: 'Si te dan lo que querías estás contenta, no decepcionada.' },
    { t: 'Ensayamos mucho el baile y, decepcionados, vimos que se suspendía la función.', ok: true, por: 'Esperaban actuar y al final no pudieron.' },
    { t: 'No esperaba nada de la fiesta, me lo pasé genial y volví decepcionado.', ok: false, por: 'No esperaba nada y salió bien: fue una sorpresa buena.' }
  ],
  ejemplos: [
    { t: 'Que un amigo prometa venir a jugar y no venga', ok: true },
    { t: 'Que el pastel que tenía tan buena pinta no sepa a nada', ok: true },
    { t: 'Que se suspenda la excursión que esperabas', ok: true },
    { t: 'Que te den una sorpresa mejor de lo que esperabas', ok: false },
    { t: 'Enfadarte porque te han quitado el balón', ok: false },
    { t: 'Estar nervioso antes de una función', ok: false }
  ],
  acaba: ['Me sentí decepcionado una vez que…', 'Si un amigo está decepcionado, puedo decirle…'],
  habla: '¿Qué le dirías a un amigo que está decepcionado porque ha perdido un partido? Díselo a tu compañero como si fuera él.',
  rel: { parecida: ['desilusionado'], contraria: [], familia: ['decepción', 'decepcionar', 'decepcionante'], mas: ['desencantado', 'chasco', 'satisfecho', 'ilusionado'] },
  fam: {
    si: [
      { p: 'decepción', t: '¡Qué ___! Creía que había natillas y no quedaban.' },
      { p: 'decepcionar', t: 'No quiero ___ a mi equipo: voy a entrenar mucho.' }
    ],
    no: [
      { p: 'decena', por: 'Una decena son diez cosas; no tiene que ver con estar decepcionado.' },
      { p: 'decorar', por: 'Decorar es poner bonito un sitio; no tiene que ver con estar decepcionado.' }
    ]
  }
});
```

## La pieza de la semana: `re-`

Sale cuando `revisar` ya está presentada (regla P2). Los ejemplos son los aprobados en el punto 31 de
`ESTADO.md` (releer, rehacer, reordenar, recontar), más «reescribir»: todos se pueden desmontar en
«pieza + palabra que ya sé».

```js
PIEZA({
  id: 're', curso: 2, semana: 6, tipo: 'prefijo', forma: 're-',
  idea: 'Con re- delante, decimos que algo se hace otra vez: releer es leer otra vez.',
  ancla: ['revisar'],
  ejemplos: [
    { a: 'leer', b: 'releer', t: 'Leo el problema y, si no lo entiendo, lo releo.' },
    { a: 'hacer', b: 'rehacer', t: 'El dibujo se me mojó: lo tengo que rehacer.' },
    { a: 'ordenar', b: 'reordenar', t: 'Ordené los cromos por colores y ahora los reordeno por tamaños.' },
    { a: 'contar', b: 'recontar', t: 'Conté las sillas y no me salían: las reconté.' },
    { a: 'escribir', b: 'reescribir', t: 'Escribí la frase con mala letra: la reescribo despacio.' }
  ],
  prueba: [
    { t: '«Recolocar» los libros es colocarlos otra vez.', ok: true, por: 'Re- y colocar: volver a colocar.' },
    { t: '«Reloj» lleva la pieza re-.', ok: false, por: 'Empieza igual, pero no es «re + loj»: «loj» no existe.' },
    { t: '«Repintar» la valla es pintarla otra vez.', ok: true, por: 'Re- y pintar: volver a pintar.' },
    { t: '«Reír» es «ir» otra vez.', ok: false, por: 'Empieza por re-, pero reír no tiene que ver con ir: es soltar una carcajada.' }
  ],
  habla: 'Di a tu compañero algo que hayas tenido que rehacer, releer o recontar, y por qué.'
});
```

## Notas para quien programe

- **Orden dentro de la semana:** predecir, organizar, revisar, húmedo, seco, decepcionado.
- El `id` de «húmedo» es `humedo` (sin tilde).
- `húmedo` y `seco` son contrarias y **comparten historia** (la toalla de Guille): se presentan en
  días distintos y en ese orden (marca `sep` común). Las dos imágenes deben mostrar al mismo niño y
  la misma toalla. Comparten ejemplos a propósito (la galleta, el desierto, la maceta, la esponja).
- `húmedo` es el punto medio: el no-ejemplo «Una esponja que chorrea agua» y la frase de la piscina
  lo separan de «empapado». Por eso «mojado» está en `rel.mas` de `húmedo` y es contraria de `seco`.
- `húmedo` y `seco` tienen segundo significado (`otro`): el clima de un sitio. Sirve para
  Conocimiento del Medio.
- `predecir` cambia al conjugarse: «predigo», «predice», «predijo». La escena acaba en infinitivo a
  propósito, como la de `resolver`. Predecir no es adivinar por arte de magia: es decirlo **por las
  pistas** (enlaza con `pista`, 1.º, semana 8); por eso «adivinar» está en `rel.mas` y no se pregunta.
  Los no-ejemplos importantes: lo que ya pasó se recuerda y lo que está pasando se observa.
- `predecir` no es `estimar` (semana 2): se estima **cuánto** hay; se predice **qué va a pasar**.
- `organizar` no es `ordenar` (1.º, semana 1): se ordenan cosas; se organiza una fiesta, un trabajo o
  un equipo. Tiene `otro`: organizar los datos de un enunciado en una tabla o una lista.
- `revisar` es pariente cercana de `comprobar` (1.º, semana 7): se comprueba una cosa concreta; se
  revisa todo lo hecho, de principio a fin. «comprobar» está en `rel.mas` y no se pregunta.
- **Para la revisión de 1.º:** `comprobar` (1.º, semana 7) tiene «revisar» como pregunta de
  `relaciona`. Ahora «revisar» es palabra del paquete: conviene pasarla a `rel.mas` de `comprobar`.
  No se ha tocado.
- `decepcionado`: el tono es el de `avergonzado` (semana 4): `acaba` y `habla` piden ayudar a quien
  lo está. Su gesto (manos que caen) se parece al de `agotado` (1.º, semana 4): no ponerlos juntos en
  «¿Qué palabra es?».
- El gesto de `predecir` (dedo a la frente) se parece al de `calcular` (semana 2) y el de `revisar`
  (tocar puntos en el aire) al de `relacionar` (semana 3): no ponerlos juntos en «¿Qué palabra es?».
- **`familia`:** la llevan predecir, organizar, revisar, seco y decepcionado. `húmedo` solo tiene
  «humedad» como palabra que un niño de 7 años haya oído (regla F10).
- «organización» lleva la pieza `cion` (semana 2); «organizador», «revisor» y «secador», la pieza `or`
  (semana 3); «reorganizar», la pieza `re` de esta semana. «predicción», «revisión» y «decepción» no
  llevan `cion`: no son «palabra + ción».
- `predecir` es «pre + decir»: por eso «decir» está en su familia. No hay pieza `pre-` (se cambió por
  `re-` al aprobar la lista).
- **La pieza y sus palabras:** `revisar` es la palabra ancla, pero **no es ejemplo** de la pieza: no
  se desmonta («visar» no existe para un niño). Lo mismo pasa con `repetir` (1.º). `rehacer` es
  palabra de la semana 7: la pieza la adelanta una semana. `ordenar` es de 1.º (regla P5).
- En la pieza, los dos «no» de `prueba` son palabras que empiezan igual sin llevar la pieza («reloj»,
  «reír»).
