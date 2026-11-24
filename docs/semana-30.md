# Semana 30 · contenido completo (1.º)

Seis palabras escritas con las normas de `docs/pedagogia.md` y el modelo de `docs/semana-01.md`.
Al programar, cada bloque pasa tal cual a `src/js/palabras/s30-<id>.js`.

Semana entera de Conocimiento del Medio, como la 10, la 15, la 20 y la 25. Cierra el paquete de 1.º
con el cuidado del planeta (planeta, medio ambiente, contaminar, residuo, reciclar, ahorrar).

```js
PALABRA({
  id: 'planeta', palabra: 'planeta', silabas: ['pla', 'ne', 'ta'],
  tipo: 'nombre', nivel: 2, curso: 1, semana: 30, orden: 1, bloque: 'medio', sep: 'planeta-medio-ambiente',
  def: 'Un planeta es un mundo enorme y redondo que gira alrededor del sol, como la Tierra.',
  otro: null,
  escena: { img: 'planeta.webp', texto: 'Por la noche, Alba mira el cielo con su abuelo. Ve un punto que brilla mucho y no parpadea. «No es una estrella», le dice el abuelo. «Es Venus: otro planeta, como la Tierra».' },
  contextos: [
    'En casa tengo un libro con fotos de todos los planetas.',
    'En clase hicimos los planetas con bolas de papel y pintura.',
    'En el campo, de noche, a veces se ve un planeta brillando como una estrella.'
  ],
  gesto: 'Deja un puño quieto y haz que la otra mano, cerrada, dé vueltas despacio a su alrededor.',
  sentido: [
    { t: 'Vivimos en un planeta que se llama Tierra.', ok: true, por: 'La Tierra es nuestro planeta.' },
    { t: 'Mi planeta favorito es la Luna.', ok: false, por: 'La Luna no es un planeta: gira alrededor de la Tierra.' },
    { t: 'Marte es un planeta rojo que está muy lejos.', ok: true, por: 'Marte es otro mundo que gira alrededor del sol.' },
    { t: 'Encontré un planeta en el jardín y lo metí en un bote.', ok: false, por: 'Un planeta es enorme: no cabe en un bote.' }
  ],
  ejemplos: [
    { t: 'La Tierra', ok: true },
    { t: 'Marte', ok: true },
    { t: 'Júpiter', ok: true },
    { t: 'La Luna', ok: false },
    { t: 'El Sol', ok: false },
    { t: 'Un balón', ok: false }
  ],
  pregunta: '¿Es un planeta?',
  acaba: ['Si pudiera viajar a otro planeta, me llevaría…', 'Tenemos que cuidar nuestro planeta porque…'],
  habla: 'Imaginad entre los dos un planeta inventado. ¿Cómo es y quién vive allí?',
  rel: { parecida: ['mundo'], contraria: [], familia: ['planetario'], mas: ['Tierra', 'Luna', 'Sol', 'estrella'] }
});

PALABRA({
  id: 'medio-ambiente', palabra: 'medio ambiente', silabas: ['me', 'dio', 'am', 'bien', 'te'],
  tipo: 'nombre', nivel: 3, curso: 1, semana: 30, orden: 2, bloque: 'medio', sep: 'planeta-medio-ambiente',
  def: 'El medio ambiente es la naturaleza que nos rodea: aire, agua, tierra, plantas y animales.',
  otro: null,
  escena: { img: 'medio-ambiente.webp', texto: 'La clase de Bruno va de excursión al río. Ven patos, peces, árboles y flores. Bruno encuentra un envoltorio en la hierba y lo guarda en su mochila. «Así cuidamos el medio ambiente», dice la maestra.' },
  contextos: [
    'En casa apagamos las luces que no usamos para cuidar el medio ambiente.',
    'En el cole tenemos un huerto para aprender a cuidar el medio ambiente.',
    'En el monte, el guarda forestal cuida el medio ambiente: los árboles, el agua y los animales.'
  ],
  gesto: 'Pon una mano plana, como la tierra, y haz crecer encima los dedos de la otra, como un bosque.',
  sentido: [
    { t: 'Si tiramos basura al río, hacemos daño al medio ambiente.', ok: true, por: 'El río es parte de todo lo que nos rodea.' },
    { t: 'El medio ambiente es solo el patio de mi casa.', ok: false, por: 'Es todo lo que nos rodea, no un solo sitio.' },
    { t: 'Plantar árboles es bueno para el medio ambiente.', ok: true, por: 'Los árboles limpian el aire y dan casa a los animales.' },
    { t: 'Mi medio ambiente es mi estuche nuevo.', ok: false, por: 'Un estuche es un objeto; el medio ambiente es el aire, el agua, la tierra…' }
  ],
  ejemplos: [
    { t: 'El aire que respiramos', ok: true },
    { t: 'El agua de los ríos y del mar', ok: true },
    { t: 'Los animales y las plantas del bosque', ok: true },
    { t: 'Un juguete de plástico', ok: false },
    { t: 'Un estuche', ok: false },
    { t: 'Un chiste', ok: false }
  ],
  pregunta: '¿Es parte del medio ambiente?',
  acaba: ['Para cuidar el medio ambiente, en mi casa…', 'Si no cuidamos el medio ambiente…'],
  habla: 'Pensad entre los dos tres cosas que podéis hacer en clase para cuidar el medio ambiente.',
  rel: { parecida: ['naturaleza'], contraria: [], familia: ['ambiental'], mas: ['planeta', 'paisaje', 'entorno'] }
});

PALABRA({
  id: 'contaminar', palabra: 'contaminar', silabas: ['con', 'ta', 'mi', 'nar'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 30, orden: 3, bloque: 'medio',
  def: 'Contaminar es ensuciar el aire, el agua o la tierra con cosas que hacen daño.',
  otro: null,
  escena: { img: 'contaminar.webp', texto: 'Rocío va al cole andando con su madre. Hay un atasco y los coches echan humo gris. Rocío se tapa la nariz: «¡Qué mal huele!». «Ese humo contamina el aire», le dice su madre.' },
  contextos: [
    'En casa no tiramos el aceite por el fregadero, porque contamina el agua.',
    'En el cole nos gusta venir andando, en bici o en autobús, que contamina menos.',
    'En la playa vimos plásticos en la arena: contaminan el mar.'
  ],
  gesto: 'Tápate la nariz con dos dedos y aparta con la otra mano un humo imaginario.',
  sentido: [
    { t: 'Las fábricas que echan humo negro contaminan el aire.', ok: true, por: 'Ese humo ensucia el aire y hace daño.' },
    { t: 'Regué las plantas y contaminé el jardín.', ok: false, por: 'Regar con agua limpia no ensucia ni hace daño.' },
    { t: 'Si tiramos pilas a la tierra, la contaminamos.', ok: true, por: 'Las pilas sueltan cosas que hacen daño a la tierra.' },
    { t: 'Planté un árbol para contaminar el bosque.', ok: false, por: 'Plantar árboles cuida el bosque, no lo ensucia.' }
  ],
  ejemplos: [
    { t: 'Tirar una lata al río', ok: true },
    { t: 'Un coche viejo que echa humo negro', ok: true },
    { t: 'Dejar bolsas de plástico en la playa', ok: true },
    { t: 'Plantar un árbol', ok: false },
    { t: 'Ir en bici al cole', ok: false },
    { t: 'Recoger los papeles del suelo del parque', ok: false }
  ],
  acaba: ['Si tiramos basura al mar…', 'Para no contaminar, yo puedo…'],
  habla: 'Buscad entre los dos algo de vuestra calle que contamine. ¿Qué se podría hacer para que contamine menos?',
  rel: { parecida: ['ensuciar'], contraria: [], familia: ['contaminación', 'contaminado'], mas: ['residuo', 'humo', 'medio ambiente', 'limpiar'] }
});

PALABRA({
  id: 'residuo', palabra: 'residuo', silabas: ['re', 'si', 'duo'],
  tipo: 'nombre', nivel: 3, curso: 1, semana: 30, orden: 4, bloque: 'medio',
  def: 'Un residuo es lo que sobra y tiramos: una lata, una cáscara, un papel usado…',
  otro: null,
  escena: { img: 'residuo.webp', texto: 'Después de merendar, a Pol le sobran una cáscara de plátano, un brik vacío y una servilleta sucia. No sabe dónde tirarlo todo. Su hermana Nuria le enseña tres contenedores de colores. «Cada residuo va en el suyo», le explica.' },
  contextos: [
    'En casa separamos los residuos en tres cubos: envases, papel y comida.',
    'En el comedor del cole, los restos de comida son residuos que van al cubo marrón.',
    'En el parque, cada uno lleva sus residuos a la papelera.'
  ],
  gesto: 'Con dos dedos, coge del suelo algo pequeño, como una cáscara, y suéltalo en un cubo a tu lado.',
  sentido: [
    { t: 'Las cáscaras de la naranja son residuos: van al contenedor marrón.', ok: true, por: 'Es lo que sobra y se tira.' },
    { t: 'Mi libro nuevo es un residuo.', ok: false, por: 'Lo usamos y lo cuidamos: no es algo que sobra y se tira.' },
    { t: 'Después del cumpleaños había muchos residuos: platos de papel, servilletas y vasos.', ok: true, por: 'Son cosas que sobran y se tiran.' },
    { t: 'El agua limpia que me bebo es un residuo.', ok: false, por: 'Nos la bebemos: no sobra ni se tira.' }
  ],
  ejemplos: [
    { t: 'Una lata de refresco vacía', ok: true },
    { t: 'Una piel de plátano', ok: true },
    { t: 'Un periódico viejo', ok: true },
    { t: 'Una manzana entera para el recreo', ok: false },
    { t: 'Un cuaderno nuevo', ok: false },
    { t: 'Tu jersey favorito', ok: false }
  ],
  pregunta: '¿Es un residuo?',
  acaba: ['Cuando acabo el desayuno, mis residuos son…', 'Si dejamos los residuos en el campo…'],
  habla: 'Pensad entre los dos qué residuos hay hoy en la clase y en qué contenedor va cada uno.',
  rel: { parecida: ['basura'], contraria: [], familia: [], mas: ['contenedor', 'reciclar', 'desperdicio'] }
});

PALABRA({
  id: 'reciclar', palabra: 'reciclar', silabas: ['re', 'ci', 'clar'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 30, orden: 5, bloque: 'medio',
  def: 'Reciclar es separar la basura en su contenedor para que con ella se hagan cosas nuevas.',
  otro: null,
  escena: { img: 'reciclar.webp', texto: 'En la clase de Amaia guardan los papeles usados en una caja azul. Un día, la maestra trae unos cuadernos nuevos hechos con papel viejo. «¡Son como nuestros papeles!», dice Amaia. ¡Para eso reciclamos!' },
  contextos: [
    'En casa, mi padre y yo bajamos las botellas de cristal al contenedor verde para reciclarlas.',
    'En el cole reciclamos el papel en la papelera azul.',
    'En la calle hay contenedores amarillos para reciclar latas, briks y plásticos.'
  ],
  gesto: 'Haz como que coges una botella y la metes por el agujero redondo de un contenedor.',
  sentido: [
    { t: 'Echamos las latas al contenedor amarillo para reciclarlas.', ok: true, por: 'Así, con ellas se pueden hacer cosas nuevas.' },
    { t: 'Reciclé el papel tirándolo al río.', ok: false, por: 'Tirarlo al río es ensuciar; reciclar es echarlo en su contenedor.' },
    { t: 'Con botellas de plástico recicladas se hacen bancos para los parques.', ok: true, por: 'Lo que se tiró sirve para hacer cosas nuevas.' },
    { t: 'Para reciclar, mezclé en la misma bolsa el cristal, el papel y la comida.', ok: false, por: 'Para reciclar hay que separar cada cosa en su contenedor.' }
  ],
  ejemplos: [
    { t: 'Echar el periódico viejo al contenedor azul', ok: true },
    { t: 'Llevar las botellas de cristal al contenedor verde', ok: true },
    { t: 'Separar los envases en el cubo amarillo', ok: true },
    { t: 'Tirar una lata al suelo del parque', ok: false },
    { t: 'Echarlo todo junto en la misma bolsa', ok: false },
    { t: 'Dejar las botellas en la arena de la playa', ok: false }
  ],
  acaba: ['Para reciclar en casa, yo…', 'Si reciclamos el papel…'],
  habla: 'Decid entre los dos en qué contenedor echáis el brik de leche, el periódico y el tarro de cristal.',
  rel: { parecida: [], contraria: [], familia: ['reciclaje', 'reciclado'], mas: ['reutilizar', 'residuo', 'contenedor', 'separar'] }
});

PALABRA({
  id: 'ahorrar', palabra: 'ahorrar', silabas: ['a', 'ho', 'rrar'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 30, orden: 6, bloque: 'medio',
  def: 'Ahorrar es gastar solo lo que hace falta, para que no se acabe: agua, luz, papel…',
  otro: 'También es guardar dinero en vez de gastarlo: «Ahorro en mi hucha».',
  escena: { img: 'ahorrar.webp', texto: 'Lucas se lava los dientes con el grifo abierto. El agua cae y cae sin parar. Su padre le enseña a cerrarlo mientras se cepilla. ¡Así Lucas ahorra agua!' },
  contextos: [
    'En casa apagamos la luz al salir de una habitación para ahorrar.',
    'En clase ahorramos papel: dibujamos por las dos caras de la hoja.',
    'En el campo, mi tío recoge el agua de la lluvia en un bidón para ahorrar agua.'
  ],
  gesto: 'Haz como que cierras un grifo, girándolo con los dedos de una mano.',
  sentido: [
    { t: 'Me ducho en vez de bañarme para ahorrar agua.', ok: true, por: 'En la ducha se gasta menos agua.' },
    { t: 'Dejé todas las luces encendidas toda la noche para ahorrar luz.', ok: false, por: 'Así se gasta más luz, no menos.' },
    { t: 'Uso las dos caras de la hoja para ahorrar papel.', ok: true, por: 'Así se gasta solo el papel que hace falta.' },
    { t: 'Para ahorrar agua, dejo el grifo abierto mientras me enjabono.', ok: false, por: 'El agua cae sin que haga falta: se gasta de más.' }
  ],
  ejemplos: [
    { t: 'Apagar la luz al salir', ok: true },
    { t: 'Cerrar el grifo mientras te enjabonas', ok: true },
    { t: 'Usar la hoja por las dos caras', ok: true },
    { t: 'Dejar la tele encendida sin verla', ok: false },
    { t: 'Tirar una hoja después de escribir una sola palabra', ok: false },
    { t: 'Dejar la nevera abierta un buen rato', ok: false }
  ],
  acaba: ['Para ahorrar agua en casa, yo…', 'Si no ahorramos luz…'],
  habla: 'Contad entre los dos cómo se ahorra agua en vuestra casa. ¿Se os ocurre otra forma?',
  rel: { parecida: [], contraria: ['malgastar'], familia: ['ahorro', 'ahorrador'], mas: ['gastar', 'hucha', 'reciclar'] }
});
```

## Notas para quien programe

- **Semana de Medio**, como la 10, la 15, la 20 y la 25, y **cierre del paquete de 1.º**: del planeta
  y lo que nos rodea a lo que hacemos para cuidarlo. Enlaza con `ser vivo` y `paisaje` (semana 10),
  `natural` y `material` (semana 25) y con el huerto del jardín de 1.º.
- `planeta` y `medio ambiente` se confunden (los dos son «todo»): el planeta es **el mundo redondo que
  gira alrededor del sol**; el medio ambiente es **lo que nos rodea: aire, agua, tierra, plantas y
  animales**. No se presentan el mismo día (`sep: 'planeta-medio-ambiente'`). Los no-ejemplos de
  `planeta` son la Luna, el Sol y un balón (redondo, pero pequeño).
- **`pregunta`:** la llevan los tres nombres (`planeta`, `medio ambiente`, `residuo`). La de
  `medio ambiente` es «¿Es parte del medio ambiente?», porque sus ejemplos son partes de él.
- `medio ambiente` y `residuo` son de **nivel 3** (como `articulación` y `ser vivo`). `medio ambiente`
  es de dos palabras: id con guion (`medio-ambiente`), como `ser-vivo`. Pregunta «naturaleza».
- `contaminar` pregunta «ensuciar». No lleva contraria: «limpiar» no es siempre lo contrario (va en
  `rel.mas`).
- `residuo` frente a `reciclar`: el residuo es **lo que se tira**; reciclar es **separarlo para hacer
  cosas nuevas**. Pregunta «basura». Los contenedores siguen los colores de España: amarillo (envases),
  azul (papel), verde (cristal) y marrón (restos de comida). Su imagen, con tres contenedores de colores,
  sin marcas (nota de la lista).
- `reciclar` no tiene preguntas de `relaciona` (le quedan `acaba` y `habla`); `reutilizar` va en
  `rel.mas`.
- `ahorrar`: el significado principal es el de gastar solo lo que hace falta (agua, luz, papel), que es
  el del libro de Medio; el segundo, el de la hucha. Pregunta «lo contrario de malgastar».
- **Gestos cercanos a vigilar:** `planeta` (un puño gira alrededor del otro) y `rodear` (círculo en el
  aire con el dedo, semana 4); `medio ambiente` (dedos que crecen sobre la mano) y `crecer` (mano que
  sube, semana 10) y `raíz` (mano que baja, semana 20); `contaminar` (taparse la nariz) y `desagradable`
  (arrugar la nariz, semana 16); `residuo` (coger algo del suelo y soltarlo en un cubo) y `semilla`
  (meter algo en la tierra, semana 20); `reciclar` (meter una botella en un contenedor) y `colocar`
  (meter un libro en la estantería, semana 23); `ahorrar` (cerrar un grifo) y `cambiar` (girar las dos
  manos, semana 7).
- Orden recomendado dentro de la semana: planeta, medio ambiente, contaminar, residuo, reciclar, ahorrar.
