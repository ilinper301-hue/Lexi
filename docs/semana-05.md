# Semana 5 · contenido completo (1.º)

Seis palabras escritas con las normas de `docs/pedagogia.md` y el modelo de `docs/semana-01.md`.
Al programar, cada bloque pasa tal cual a `src/js/palabras/s05-<id>.js`.

Esta semana trae las tres primeras palabras de tipo `enlace` (primero, después, finalmente). Lee las
notas del final antes de programarlas.

```js
PALABRA({
  id: 'primero', palabra: 'primero', silabas: ['pri', 'me', 'ro'],
  tipo: 'enlace', nivel: 2, curso: 1, semana: 5, bloque: 'pensar',
  def: 'Decimos «primero» para contar lo que pasa o se hace antes que todo lo demás.',
  otro: 'También es el que va delante de todos: el primero de la fila.',
  escena: { img: 'primero.webp', texto: 'Lucía va a hacer un bizcocho con su tío. «¿Por dónde empezamos?», pregunta. «Antes de nada, nos lavamos las manos», dice él. Eso es lo que van a hacer primero.' },
  contextos: [
    'Primero me pongo los calcetines y luego los zapatos.',
    'En el problema, primero leemos y luego pensamos.',
    'La semilla primero echa raíces; las hojas salen más tarde.'
  ],
  gesto: 'Levanta un dedo, el índice, bien alto.',
  sentido: [
    { t: 'Primero abro la mochila y luego saco el estuche.', ok: true, por: 'Abrir la mochila va antes.' },
    { t: 'Primero me seco y luego me ducho.', ok: false, por: 'Hay que ducharse antes de secarse.' },
    { t: 'Para cruzar la calle, primero miro a los dos lados.', ok: true, por: 'Mirar es lo que se hace antes de cruzar.' },
    { t: 'Primero me como el plátano y luego lo pelo.', ok: false, por: 'Antes de comerlo hay que pelarlo.' }
  ],
  ejemplos: [
    { t: 'Al lavarte las manos: mojarlas', ok: true },
    { t: 'Al calzarte: ponerte los calcetines', ok: true },
    { t: 'En un cuento: «Érase una vez…»', ok: true },
    { t: 'Al lavarte las manos: secarlas', ok: false },
    { t: 'Al calzarte: atarte los cordones', ok: false },
    { t: 'En un cuento: «…y colorín colorado»', ok: false }
  ],
  acaba: ['Cuando me levanto, primero…', 'Para hacer un dibujo, primero…'],
  habla: 'Cuenta a tu compañero qué haces primero cuando llegas a casa.',
  rel: { parecida: ['para empezar', 'antes de nada'], contraria: ['finalmente', 'por último'], familia: ['primer', 'primera'] }
});

PALABRA({
  id: 'despues', palabra: 'después', silabas: ['des', 'pués'],
  tipo: 'enlace', nivel: 2, curso: 1, semana: 5, bloque: 'pensar',
  def: 'Decimos «después» para contar lo que pasa cuando ya ha terminado otra cosa.',
  otro: null,
  escena: { img: 'despues.webp', texto: 'Marcos tiene hambre y mira las galletas. «Ahora no», dice su abuelo, «ahora tocan las lentejas». Marcos se las come todas. Las galletas llegan después.' },
  contextos: [
    'Jugamos en el recreo y después volvemos a clase.',
    'Después de la lluvia sale el sol.',
    'Me lavo los dientes después de cenar.'
  ],
  gesto: 'Pon una mano delante de ti y hazla saltar hacia un lado: un paso más.',
  sentido: [
    { t: 'Me pongo el pijama y después me meto en la cama.', ok: true, por: 'La cama va cuando ya tiene el pijama.' },
    { t: 'Me comí la sopa y después me la sirvieron.', ok: false, por: 'Servir va antes de comer.' },
    { t: 'Después del verano llega el otoño.', ok: true, por: 'El otoño viene cuando acaba el verano.' },
    { t: 'Llegué al cole y después salí de mi casa.', ok: false, por: 'Hay que salir de casa antes de llegar al cole.' }
  ],
  ejemplos: [
    { t: 'Secarte después de ducharte', ok: true },
    { t: 'Los zapatos después de los calcetines', ok: true },
    { t: 'El martes después del lunes', ok: true },
    { t: 'Pelar la mandarina después de comértela', ok: false },
    { t: 'Mojarte las manos después de secártelas', ok: false },
    { t: 'Abrir el libro después de leerlo', ok: false }
  ],
  acaba: ['Después del recreo, en mi clase…', 'Me lavo las manos y después…'],
  habla: '¿Qué vas a hacer después del cole? Cuéntaselo a tu compañero.',
  rel: { parecida: ['luego', 'más tarde'], contraria: ['antes'], familia: [] }
});

PALABRA({
  id: 'finalmente', palabra: 'finalmente', silabas: ['fi', 'nal', 'men', 'te'],
  tipo: 'enlace', nivel: 2, curso: 1, semana: 5, bloque: 'pensar',
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
    { t: 'Para hacer zumo, finalmente cojo las naranjas, y luego las exprimo y me lo bebo.', ok: false, por: 'Coger las naranjas es lo primero, no lo último.' },
    { t: 'Buscamos al gato por toda la casa y, finalmente, apareció en el armario.', ok: true, por: 'Fue lo último que pasó.' },
    { t: 'Finalmente desayuné, y luego me levanté y me desperté.', ok: false, por: 'Lo último va al final: detrás ya no pasa nada más.' }
  ],
  ejemplos: [
    { t: 'En una carrera: cruzar la meta', ok: true },
    { t: 'En el comedor: recoger la bandeja', ok: true },
    { t: 'En una función: los aplausos', ok: true },
    { t: 'En una carrera: la salida', ok: false },
    { t: 'En el comedor: coger la bandeja vacía', ok: false },
    { t: 'En una función: abrir el telón', ok: false }
  ],
  acaba: ['Me levanté, desayuné, me vestí y, finalmente, …', 'Esperamos mucho rato en la parada y, finalmente, …'],
  habla: 'Cuenta tres cosas que haces antes de dormir. Usa «primero», «después» y «finalmente».',
  rel: { parecida: ['por último', 'al final', 'por fin'], contraria: ['primero'], familia: ['final', 'finalizar'] }
});

PALABRA({
  id: 'antiguo', palabra: 'antiguo', silabas: ['an', 'ti', 'guo'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 5, bloque: 'como-son',
  def: 'Algo es antiguo cuando existe desde hace muchísimos años.',
  otro: null,
  escena: { img: 'antiguo.webp', texto: 'Teo visita un castillo con su clase. Las piedras están gastadas y las puertas son de madera oscura. «Lo hicieron hace mil años», dice la guía. El castillo es antiguo.' },
  contextos: [
    'En el museo hay monedas antiguas.',
    'Mi bisabuela guarda fotos antiguas en blanco y negro.',
    'En la plaza hay una fuente antigua de piedra.'
  ],
  gesto: 'Acaríciate una barba larga imaginaria, muy despacio.',
  sentido: [
    { t: 'Ese reloj es antiguo: era del abuelo de mi abuelo.', ok: true, por: 'Existe desde hace muchísimos años.' },
    { t: 'Estrené unas zapatillas antiguas, recién salidas de la fábrica.', ok: false, por: 'Lo recién hecho es nuevo.' },
    { t: 'En el pueblo hay un puente antiguo por donde pasaban los carros.', ok: true, por: 'Es de hace mucho tiempo.' },
    { t: 'Este juguete es antiguo: lo inventaron ayer.', ok: false, por: 'Lo de ayer es de ahora.' }
  ],
  ejemplos: [
    { t: 'Un castillo', ok: true },
    { t: 'Una pirámide', ok: true },
    { t: 'Una moneda de hace mil años', ok: true },
    { t: 'Una tableta', ok: false },
    { t: 'Un coche recién comprado', ok: false },
    { t: 'Un juguete roto del año pasado', ok: false }
  ],
  acaba: ['En casa de mis abuelos hay algo antiguo: …', 'Sé que un castillo es antiguo porque…'],
  habla: '¿Qué cosa antigua has visto? ¿Dónde estaba?',
  rel: { parecida: ['de hace mucho tiempo'], contraria: ['moderno', 'nuevo'], familia: ['antigüedad'] }
});

PALABRA({
  id: 'moderno', palabra: 'moderno', silabas: ['mo', 'der', 'no'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 5, bloque: 'como-son',
  def: 'Algo es moderno cuando es de ahora, se ha hecho o inventado hace poco.',
  otro: null,
  escena: { img: 'moderno.webp', texto: 'El abuelo de Valeria guarda un teléfono con una rueda para marcar. El de Valeria no tiene botones y hace fotos. «¡Qué distintos!», dice ella. El teléfono de Valeria es moderno.' },
  contextos: [
    'El autobús moderno no hace ruido porque es eléctrico.',
    'En mi barrio hay un edificio moderno, todo de cristal.',
    'El hospital tiene máquinas modernas para ver los huesos.'
  ],
  gesto: 'Desliza un dedo por la palma de la otra mano, como en una pantalla.',
  sentido: [
    { t: 'El tren moderno es mucho más rápido que los de antes.', ok: true, por: 'Es de ahora.' },
    { t: 'Las pirámides son muy modernas: tienen miles de años.', ok: false, por: 'Lo que tiene miles de años es antiguo.' },
    { t: 'En el cole nuevo hay una pizarra moderna que se toca con el dedo.', ok: true, por: 'Se ha inventado hace poco.' },
    { t: 'Este carro de caballos de hace doscientos años es moderno.', ok: false, por: 'Es de hace mucho tiempo: es antiguo.' }
  ],
  ejemplos: [
    { t: 'Un coche eléctrico', ok: true },
    { t: 'Una pizarra digital', ok: true },
    { t: 'Un robot que limpia el suelo', ok: true },
    { t: 'Un castillo', ok: false },
    { t: 'Un carro de caballos', ok: false },
    { t: 'Una moneda de hace mil años', ok: false }
  ],
  acaba: ['Un invento moderno que uso es…', 'Los coches modernos no son como los antiguos porque…'],
  habla: '¿Qué cosa moderna hay en tu casa que tus abuelos no tenían de pequeños?',
  rel: { parecida: ['actual', 'nuevo'], contraria: ['antiguo'], familia: ['modernizar'] }
});

PALABRA({
  id: 'proteger', palabra: 'proteger', silabas: ['pro', 'te', 'ger'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 5, bloque: 'convivir',
  def: 'Proteger es cuidar a alguien o algo para que no le pase nada malo.',
  otro: null,
  escena: { img: 'proteger.webp', texto: 'Empieza a llover y Gael ve un gatito mojado en la calle. Se quita el chubasquero y lo tapa con él. El gatito deja de temblar. Gael protege al gatito.' },
  contextos: [
    'El casco protege la cabeza cuando vamos en bici.',
    'La gallina protege a sus pollitos debajo de las alas.',
    'La crema nos protege del sol en la playa.'
  ],
  gesto: 'Haz un tejado con las manos encima de la cabeza.',
  sentido: [
    { t: 'Me pongo las rodilleras para proteger las rodillas.', ok: true, por: 'Así no se hace daño si se cae.' },
    { t: 'Protegí mi dibujo dejándolo bajo la lluvia.', ok: false, por: 'La lluvia lo estropea.' },
    { t: 'El paraguas nos protege de la lluvia.', ok: true, por: 'Evita que nos mojemos.' },
    { t: 'Para proteger la planta, la pisé.', ok: false, por: 'Pisarla le hace daño.' }
  ],
  ejemplos: [
    { t: 'Ponerte casco para ir en patinete', ok: true },
    { t: 'Tapar a un pajarito del frío', ok: true },
    { t: 'Guardar el dibujo en una carpeta para que no se arrugue', ok: true },
    { t: 'Dejar la bici bajo la lluvia', ok: false },
    { t: 'Pisar las flores', ok: false },
    { t: 'Ver que molestan a un amigo y no hacer nada', ok: false }
  ],
  acaba: ['El abrigo me protege de…', 'Para proteger un libro, yo…'],
  habla: '¿Qué cosas llevas o usas para protegerte? Piensa tres con tu compañero.',
  rel: { parecida: ['cuidar', 'defender'], contraria: ['dañar'], familia: ['protección', 'protector'] }
});
```

## Notas para quien programe

- El `id` de «después» es `despues` (sin tilde).
- **Palabras de tipo `enlace`** (primero, después, finalmente): no nombran una cosa ni una acción, sino
  el orden. Por eso:
  - En la tarea `ejemplo` cada texto ya dice la situación («Al lavarte las manos: mojarlas»). La
    pregunta en pantalla debe ser «¿Va primero?», «¿Está bien dicho con "después"?» y «¿Es lo último?»,
    no «¿Es o no es…?». Hace falta un texto de pregunta por tipo de palabra (o un campo opcional
    `pregunta` en la ficha).
  - En la presentación, «la decimos con palmadas» funciona igual.
  - Son las mejores palabras para la tarea `habla`: contar algo en orden.
- Las tres se presentan en este orden y en días distintos: primero, después, finalmente.
- `primero` tiene segundo significado (`otro`): el primero de la fila.
- `antiguo` y `moderno` son contrarias y comparten ejemplos a propósito (castillo, moneda).
- `antiguo`: el no-ejemplo «Un juguete roto del año pasado» distingue antiguo de viejo o estropeado.
- `proteger` cambia al conjugarse: «protejo», «protege».
- Bloque nuevo `convivir` (proteger; en la semana 9: compartir, colaborar, respetar). Ver `docs/pedagogia.md`.
