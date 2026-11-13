# Semana 7 · contenido completo (1.º)

Seis palabras escritas con las normas de `docs/pedagogia.md` y el modelo de `docs/semana-01.md`.
Al programar, cada bloque pasa tal cual a `src/js/palabras/s07-<id>.js`.

```js
PALABRA({
  id: 'repetir', palabra: 'repetir', silabas: ['re', 'pe', 'tir'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 7, bloque: 'pensar',
  def: 'Repetir es volver a decir o a hacer lo mismo otra vez.',
  otro: null,
  escena: { img: 'repetir.webp', texto: 'Aroa le dice al loro de su vecina: «¡Hola!». El loro la mira y dice: «¡Hola!». Aroa se ríe y prueba con «¡Guapo!». El loro lo repite todo.' },
  contextos: [
    'La maestra dice la palabra y nosotros la repetimos.',
    'Me gustó tanto el tobogán que repetí tres veces.',
    'El estribillo de la canción se repite muchas veces.'
  ],
  gesto: 'Haz girar un dedo en el aire, dando vueltas: otra vez, otra vez.',
  sentido: [
    { t: 'No oí bien y le pedí que lo repitiera.', ok: true, por: 'Quería que lo dijera otra vez.' },
    { t: 'Repetí el dibujo: era la primera vez que lo hacía.', ok: false, por: 'Si es la primera vez, no lo repites.' },
    { t: 'Repetimos el baile hasta que nos salió bien.', ok: true, por: 'Lo hicieron una y otra vez.' },
    { t: 'Repetí la frase diciendo otra distinta.', ok: false, por: 'Repetir es decir lo mismo.' }
  ],
  ejemplos: [
    { t: 'Decir otra vez la misma palabra', ok: true },
    { t: 'Volver a tirarte por el tobogán', ok: true },
    { t: 'El eco en la montaña', ok: true },
    { t: 'Hacer algo por primera vez', ok: false },
    { t: 'Decir una palabra nueva', ok: false },
    { t: 'Quedarte callado', ok: false }
  ],
  acaba: ['Me gustaría repetir…', 'Cuando algo no me sale, lo repito porque…'],
  habla: 'Di una frase divertida. Tu compañero la repite igual, igual.',
  rel: { parecida: ['volver a hacer'], contraria: [], familia: ['repetición', 'repetido'] }
});

PALABRA({
  id: 'cambiar', palabra: 'cambiar', silabas: ['cam', 'biar'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 7, bloque: 'pensar',
  def: 'Cambiar es hacer que algo sea diferente de como era, o poner una cosa en lugar de otra.',
  otro: null,
  escena: { img: 'cambiar.webp', texto: 'Martín tiene un cromo repetido y Sira también. Él le da el suyo y ella le da el de ella. Ahora cada uno tiene un cromo nuevo. Martín y Sira han cambiado los cromos.' },
  contextos: [
    'En otoño, las hojas cambian de color.',
    'En la frase cambiamos «perro» por «gato».',
    'Se fundió la bombilla y la cambiamos por otra.'
  ],
  gesto: 'Cruza las manos por delante de ti: la derecha a la izquierda y la izquierda a la derecha.',
  sentido: [
    { t: 'Me mojé y me cambié de camiseta.', ok: true, por: 'Se puso otra.' },
    { t: 'Cambié de sitio y me quedé en la misma silla.', ok: false, por: 'Si sigues en la misma silla, no has cambiado.' },
    { t: 'El semáforo cambió de rojo a verde.', ok: true, por: 'Antes era de un color y ahora de otro.' },
    { t: 'Cambié el dibujo dejándolo exactamente igual.', ok: false, por: 'Si queda igual, no ha cambiado nada.' }
  ],
  ejemplos: [
    { t: 'Ponerte otro jersey', ok: true },
    { t: 'La oruga que se vuelve mariposa', ok: true },
    { t: 'Poner un 5 donde había un 3', ok: true },
    { t: 'Dejarlo todo como estaba', ok: false },
    { t: 'Repetir lo mismo', ok: false },
    { t: 'Quedarte en tu sitio', ok: false }
  ],
  acaba: ['Si pudiera cambiar algo de mi cuarto, cambiaría…', 'Cuando llega el frío, cambiamos…'],
  habla: '¿En qué has cambiado tú desde que eras un bebé?',
  rel: { parecida: ['hacer diferente'], contraria: ['dejar igual'], familia: ['cambio'] }
});

PALABRA({
  id: 'comprobar', palabra: 'comprobar', silabas: ['com', 'pro', 'bar'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 7, bloque: 'pensar',
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
    { t: 'Comprobamos con la balanza cuál de las dos cajas pesaba más.', ok: true, por: 'Lo miraron para estar seguros.' },
    { t: 'No miré si estaba bien: así lo comprobé.', ok: false, por: 'Sin mirar no se comprueba nada.' }
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
  rel: { parecida: ['revisar', 'asegurarse'], contraria: [], familia: ['comprobación'] }
});

PALABRA({
  id: 'necesario', palabra: 'necesario', silabas: ['ne', 'ce', 'sa', 'rio'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 7, bloque: 'como-son',
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
  acaba: ['Para dibujar es necesario…', 'Dormir es necesario porque…'],
  habla: '¿Qué cosas son necesarias para ir de excursión? Pensad tres.',
  rel: { parecida: ['imprescindible', 'que hace falta'], contraria: ['innecesario'], familia: ['necesitar', 'necesidad'] }
});

PALABRA({
  id: 'sencillo', palabra: 'sencillo', silabas: ['sen', 'ci', 'llo'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 7, bloque: 'como-son',
  def: 'Algo es sencillo cuando es fácil de hacer o de entender.',
  otro: 'También es sencillo lo que no tiene adornos: un vestido sencillo.',
  escena: { img: 'sencillo.webp', texto: 'Carla mira el puzle de su hermano pequeño. Solo tiene cuatro piezas grandes. Las coloca en un momento, casi sin pensar. Para Carla, ese puzle es sencillo.' },
  contextos: [
    'La maestra empieza por una suma sencilla: 1 más 1.',
    'La receta es sencilla: solo hay que mezclar yogur y fruta.',
    'Las reglas del escondite son sencillas.'
  ],
  gesto: 'Sacúdete las manos una vez, como quien dice «¡hecho!».',
  sentido: [
    { t: 'El juego es sencillo: lo entendí a la primera.', ok: true, por: 'Es fácil de entender.' },
    { t: 'Era tan sencillo que nadie supo hacerlo en todo el día.', ok: false, por: 'Si nadie sabe hacerlo, es difícil.' },
    { t: 'Hice un dibujo sencillo: un sol y una casa.', ok: true, por: 'Es fácil de hacer.' },
    { t: 'La suma era sencilla: tardé una hora y pedí ayuda tres veces.', ok: false, por: 'Lo sencillo sale pronto y sin ayuda.' }
  ],
  ejemplos: [
    { t: 'Sumar 1 más 1', ok: true },
    { t: 'Un puzle de cuatro piezas', ok: true },
    { t: 'Dibujar un círculo', ok: true },
    { t: 'Un puzle de mil piezas', ok: false },
    { t: 'Contar todas las estrellas', ok: false },
    { t: 'Leer un libro en un idioma que no conoces', ok: false }
  ],
  acaba: ['Para mí es sencillo…', 'Antes me costaba y ahora me parece sencillo…'],
  habla: '¿Qué es sencillo para ti y qué te cuesta más? Cuéntaselo a tu compañero.',
  rel: { parecida: ['fácil', 'simple'], contraria: ['difícil', 'complicado'], familia: ['sencillez'] }
});

PALABRA({
  id: 'tranquilo', palabra: 'tranquilo', silabas: ['tran', 'qui', 'lo'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 7, bloque: 'sentir',
  def: 'Estás tranquilo cuando estás en calma, sin prisa, sin miedo y sin enfado.',
  otro: 'También es tranquilo un sitio sin ruido ni jaleo: una calle tranquila.',
  escena: { img: 'tranquilo.webp', texto: 'Amir está tumbado en la hierba del parque. Respira despacio y mira pasar las nubes. No tiene prisa ni le preocupa nada. Amir está tranquilo.' },
  contextos: [
    'Después de respirar hondo me quedé tranquila.',
    'El mar hoy está tranquilo: no hay olas.',
    'En la biblioteca todos leemos tranquilos.'
  ],
  gesto: 'Baja las dos manos despacio, con las palmas hacia el suelo, mientras sueltas el aire.',
  sentido: [
    { t: 'Mi madre me abrazó y me quedé tranquilo.', ok: true, por: 'El abrazo le dio calma.' },
    { t: 'Estaba tan tranquilo que gritaba y daba patadas.', ok: false, por: 'Gritar y dar patadas no es estar en calma.' },
    { t: 'El gato duerme tranquilo en el sofá.', ok: true, por: 'Está en calma, sin miedo.' },
    { t: 'Estoy tranquila: el corazón me va a mil y no paro de moverme.', ok: false, por: 'Así se está cuando uno está nervioso.' }
  ],
  ejemplos: [
    { t: 'Leer un cuento en el sofá', ok: true },
    { t: 'Respirar despacio tumbado', ok: true },
    { t: 'Un lago sin olas', ok: true },
    { t: 'Una rabieta', ok: false },
    { t: 'Correr porque llegas tarde', ok: false },
    { t: 'Una tormenta con truenos', ok: false }
  ],
  acaba: ['Me siento tranquilo cuando…', 'Si estoy enfadado, para quedarme tranquilo…'],
  habla: '¿Qué haces tú para tranquilizarte cuando estás enfadado o con miedo?',
  rel: { parecida: ['calmado', 'sereno'], contraria: ['nervioso', 'inquieto'], familia: ['tranquilidad', 'tranquilizar'] }
});
```

## Notas para quien programe

- `repetir` y `comprobar` cambian al conjugarse: «repite», «repitió»; «compruebo», «comprueba».
- `necesario`: los ejemplos tienen la forma «X para Y» («Agua para una planta»). La pregunta en pantalla
  debe leerse bien así: «¿Es necesario?». El no-ejemplo «Un caramelo después de comer» separa lo que
  apetece de lo que hace falta: conviene comentarlo.
- `necesario` (semana 7) y `necesitar` (semana 10) son de la misma familia: al llegar a la 10, enlazarlas.
- `sencillo` y `tranquilo` tienen segundo significado (`otro`): se enseña en un día distinto.
- `tranquilo` es la contraria de `nervioso` (semana 8).
- `comprobar` es la palabra que más conviene usar a diario en mates: «¿lo has comprobado?».
