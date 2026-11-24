# Semana 25 · contenido completo (1.º)

Seis palabras escritas con las normas de `docs/pedagogia.md` y el modelo de `docs/semana-01.md`.
Al programar, cada bloque pasa tal cual a `src/js/palabras/s25-<id>.js`.

Semana entera de Conocimiento del Medio, como la 10, la 15 y la 20: los objetos, los materiales de
los que están hechos y las máquinas (objeto, material, natural, artificial, impermeable, máquina).

```js
PALABRA({
  id: 'objeto', palabra: 'objeto', silabas: ['ob', 'je', 'to'],
  tipo: 'nombre', nivel: 2, curso: 1, semana: 25, orden: 1, bloque: 'medio', sep: 'objeto-material',
  def: 'Un objeto es una cosa que no está viva y se puede tocar, como un lápiz.',
  otro: null,
  escena: { img: 'objeto.webp', texto: 'La maestra trae una caja misteriosa. Leo mete la mano sin mirar y dice: «¡Algo redondo y blandito!». Saca una pelota, y después una cuchara, un peine y una llave. ¡En la caja hay muchos objetos!' },
  contextos: [
    'En casa, mi objeto favorito es una caja de música de mi abuela.',
    'En clase guardamos los objetos perdidos en una caja grande.',
    'En la playa encontré un objeto raro enterrado en la arena.'
  ],
  gesto: 'Cierra los ojos y palpa con las dos manos algo imaginario, como dentro de una caja misteriosa.',
  sentido: [
    { t: 'La goma, la regla y el sacapuntas son objetos de clase.', ok: true, por: 'Son cosas que se pueden tocar y no están vivas.' },
    { t: 'Mi perro es mi objeto favorito.', ok: false, por: 'Un perro está vivo: es un animal, no un objeto.' },
    { t: 'En la mochila llevo muchos objetos: un estuche, un libro y una botella.', ok: true, por: 'El estuche, el libro y la botella son cosas.' },
    { t: 'Mi sueño de anoche era un objeto muy bonito.', ok: false, por: 'Un sueño está en tu cabeza: no se puede tocar.' }
  ],
  ejemplos: [
    { t: 'Una llave', ok: true },
    { t: 'Un vaso', ok: true },
    { t: 'Una mochila', ok: true },
    { t: 'Un gato', ok: false },
    { t: 'Un árbol', ok: false },
    { t: 'Una nube', ok: false }
  ],
  pregunta: '¿Es un objeto?',
  acaba: ['Un objeto que llevo siempre en la mochila es…', 'Si solo pudiera llevarme un objeto de excursión, sería… porque…'],
  habla: 'Cierra los ojos: tu compañero te describe un objeto de la clase y tú adivinas cuál es.',
  rel: { parecida: ['cosa'], contraria: [], familia: [], mas: ['material', 'ser vivo', 'herramienta'] }
});

PALABRA({
  id: 'material', palabra: 'material', silabas: ['ma', 'te', 'rial'],
  tipo: 'nombre', nivel: 2, curso: 1, semana: 25, orden: 2, bloque: 'medio', sep: 'objeto-material',
  def: 'Un material es lo que se usa para hacer las cosas: madera, plástico, cristal, tela…',
  otro: null,
  escena: { img: 'material.webp', texto: 'Sara y su padre van a hacer una casita para pájaros. «¿Con qué la hacemos?», pregunta Sara. «Con madera», dice su padre, «que es fuerte». ¡Ya han elegido el material!' },
  contextos: [
    'En casa, mis vasos son de un material que no se rompe: el plástico.',
    'En clase hacemos máscaras con materiales como cartón, lana y papel.',
    'En la calle, los obreros descargan materiales: ladrillos, arena y cemento.'
  ],
  gesto: 'Pellizca con cuidado la tela de tu manga y frótala entre los dedos.',
  sentido: [
    { t: 'Mi botella es de cristal y la de mi hermano, de plástico: son de materiales distintos.', ok: true, por: 'El cristal y el plástico son materiales.' },
    { t: 'El material de mi jersey es el color rojo.', ok: false, por: 'El rojo es su color; su material es la lana o el algodón.' },
    { t: 'Para el disfraz, la maestra trajo materiales: telas, cartón y cinta.', ok: true, por: 'Con ellos se puede hacer el disfraz.' },
    { t: 'Mi mesa es de un material muy grande.', ok: false, por: 'Grande es su tamaño; su material es la madera o el metal.' }
  ],
  ejemplos: [
    { t: 'La madera', ok: true },
    { t: 'El plástico', ok: true },
    { t: 'La lana', ok: true },
    { t: 'Una silla', ok: false },
    { t: 'El color azul', ok: false },
    { t: 'Un balón', ok: false }
  ],
  pregunta: '¿Es un material?',
  acaba: ['Mi juguete favorito está hecho de un material que se llama…', 'Para hacer un barco que flote, yo usaría un material como…'],
  habla: 'Elegid entre los dos un objeto de la clase. ¿De qué material está hecho? ¿Lo haríais de otro?',
  rel: { parecida: [], contraria: [], familia: [], mas: ['objeto', 'madera', 'plástico', 'metal'] }
});

PALABRA({
  id: 'natural', palabra: 'natural', silabas: ['na', 'tu', 'ral'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 25, orden: 3, bloque: 'medio', sep: 'natural-artificial',
  def: 'Algo es natural cuando nadie lo ha fabricado: lo da la tierra, una planta o un animal.',
  otro: null,
  escena: { img: 'natural.webp', texto: 'Lucía va de excursión al bosque con su clase. Coge una piña, una pluma y una piedra lisa. Nadie las ha fabricado: las ha dado el bosque. ¡Son cosas naturales!' },
  contextos: [
    'En casa, mi abuela endulza la leche con miel, que es natural.',
    'En clase hicimos un mural con hojas, piñas y otras cosas naturales.',
    'En la playa, las conchas y la arena son naturales.'
  ],
  gesto: 'Haz como que coges una flor del suelo y la hueles.',
  sentido: [
    { t: 'La lana de mi bufanda es natural: viene de una oveja.', ok: true, por: 'La da un animal; nadie la fabrica.' },
    { t: 'Este bote de plástico es natural: lo encontré en el campo.', ok: false, por: 'El plástico lo fabrican las personas, aunque esté en el campo.' },
    { t: 'El agua del río es natural.', ok: true, por: 'Viene de la naturaleza.' },
    { t: 'Mi coche de juguete es natural porque es verde como las hojas.', ok: false, por: 'Lo han fabricado; el color no lo hace natural.' }
  ],
  ejemplos: [
    { t: 'Una piedra del río', ok: true },
    { t: 'Una manzana del árbol', ok: true },
    { t: 'Una pluma de pájaro', ok: true },
    { t: 'Una botella de plástico', ok: false },
    { t: 'Un globo', ok: false },
    { t: 'Una flor de papel', ok: false }
  ],
  pregunta: '¿Es natural?',
  acaba: ['Una cosa natural que me gusta mucho es…', 'Sé que una cosa es natural cuando…'],
  habla: 'Buscad entre los dos tres cosas naturales que haya en la clase o que se vean por la ventana.',
  rel: { parecida: [], contraria: ['artificial'], familia: ['naturaleza'], mas: ['fabricado', 'material'] }
});

PALABRA({
  id: 'artificial', palabra: 'artificial', silabas: ['ar', 'ti', 'fi', 'cial'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 25, orden: 4, bloque: 'medio', sep: 'natural-artificial',
  def: 'Algo es artificial cuando no viene de la naturaleza: lo han fabricado las personas.',
  otro: null,
  escena: { img: 'artificial.webp', texto: 'En una tienda, Hugo ve una planta preciosa con flores rojas. Va a olerla, pero no huele a nada. La toca: ¡es de plástico! Su madre le dice: «Es una planta artificial».' },
  contextos: [
    'En casa tenemos un árbol de Navidad artificial que guardamos en una caja.',
    'En clase, la luz de las lámparas es artificial; la del sol, no.',
    'En el parque nuevo, el césped del campo de fútbol es artificial.'
  ],
  gesto: 'Da golpecitos con una uña sobre una fruta imaginaria: suena «toc, toc», como el plástico.',
  sentido: [
    { t: 'Las flores de plástico del jarrón son artificiales.', ok: true, por: 'Las han fabricado las personas.' },
    { t: 'Esta manzana es artificial: la cogí del árbol del huerto.', ok: false, por: 'Si sale del árbol, es natural.' },
    { t: 'El lago del parque es artificial: lo hicieron con máquinas y lo llenaron de agua.', ok: true, por: 'Ese lago lo hicieron las personas.' },
    { t: 'Las nubes del cielo son artificiales.', ok: false, por: 'Las nubes no las fabrica nadie: son naturales.' }
  ],
  ejemplos: [
    { t: 'Un plátano de juguete', ok: true },
    { t: 'Un árbol de plástico', ok: true },
    { t: 'Una pelota', ok: true },
    { t: 'Un plátano', ok: false },
    { t: 'Una piña del bosque', ok: false },
    { t: 'El agua del mar', ok: false }
  ],
  pregunta: '¿Es artificial?',
  acaba: ['Una cosa artificial que parece natural es…', 'En mi clase hay cosas artificiales, como…'],
  habla: 'Pensad entre los dos algo artificial que se parezca a algo natural. ¿Cómo os dais cuenta?',
  rel: { parecida: ['fabricado'], contraria: ['natural'], familia: [], mas: ['de plástico', 'falso'] }
});

PALABRA({
  id: 'impermeable', palabra: 'impermeable', silabas: ['im', 'per', 'me', 'a', 'ble'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 25, orden: 5, bloque: 'medio',
  def: 'Algo es impermeable cuando no deja pasar el agua: lo de dentro no se moja.',
  otro: 'También es un abrigo que te pones para no mojarte cuando llueve.',
  escena: { img: 'impermeable.webp', texto: 'Llueve y Rocío tiene que llevar su dibujo al cole. Lo mete en una bolsa de papel, pero se moja enseguida. Entonces lo mete en una bolsa de plástico, y el dibujo llega sequito. ¡El plástico es impermeable!' },
  contextos: [
    'En casa, el mantel de la cocina es impermeable: si se cae el zumo, se limpia con un trapo.',
    'En el cole, los días de lluvia venimos con botas impermeables.',
    'En el campo, las plumas de los patos son impermeables.'
  ],
  gesto: 'Cierra una mano en puño y, con los dedos de la otra, deja caer gotas encima: resbalan y no entran.',
  sentido: [
    { t: 'Mis botas de agua son impermeables: salté en los charcos y no me mojé.', ok: true, por: 'No dejan pasar el agua.' },
    { t: 'Mi camiseta de algodón es impermeable: con la lluvia me calé entera.', ok: false, por: 'Si te calas, deja pasar el agua.' },
    { t: 'La tienda de campaña es impermeable, y dentro no entra la lluvia.', ok: true, por: 'El agua se queda fuera.' },
    { t: 'La esponja es impermeable porque se llena de agua.', ok: false, por: 'La esponja chupa el agua: es lo contrario.' }
  ],
  ejemplos: [
    { t: 'Un paraguas', ok: true },
    { t: 'Unas botas de agua', ok: true },
    { t: 'Una bolsa de plástico', ok: true },
    { t: 'Una servilleta de papel', ok: false },
    { t: 'Un calcetín de lana', ok: false },
    { t: 'Una toalla', ok: false }
  ],
  pregunta: '¿Es impermeable?',
  acaba: ['Si fuera de excursión con lluvia, me llevaría algo impermeable, como…', 'Las botas de agua tienen que ser impermeables porque…'],
  habla: 'Pensad entre los dos cómo haríais un barquito que no se hunda. ¿Qué material impermeable usaríais?',
  rel: { parecida: ['que no se moja'], contraria: [], familia: ['impermeabilizar'], mas: ['chubasquero', 'material', 'transparente'] }
});

PALABRA({
  id: 'maquina', palabra: 'máquina', silabas: ['má', 'qui', 'na'],
  tipo: 'nombre', nivel: 2, curso: 1, semana: 25, orden: 6, bloque: 'medio',
  def: 'Una máquina es un aparato que hace un trabajo por nosotros o nos lo hace más fácil.',
  otro: null,
  escena: { img: 'maquina.webp', texto: 'En casa de Martín se ha roto la lavadora. Toda la familia lava la ropa a mano en la bañera. ¡Qué cansancio! Por fin llega la lavadora nueva y Martín aplaude: «¡Viva la máquina!».' },
  contextos: [
    'En casa, la batidora es una máquina que hace el puré en un momento.',
    'En la calle, una máquina enorme hacía un agujero en el suelo.',
    'En el campo, mi tío recoge el trigo con una máquina.'
  ],
  gesto: 'Mueve los brazos doblados arriba y abajo, a saltitos, como un robot que hace «bip, bip».',
  sentido: [
    { t: 'La aspiradora es una máquina que recoge el polvo.', ok: true, por: 'Hace un trabajo por nosotros.' },
    { t: 'Mi perro es una máquina: me trae la pelota.', ok: false, por: 'Un perro es un ser vivo; las máquinas son aparatos.' },
    { t: 'Con la máquina de coser, mi abuela hace vestidos más deprisa.', ok: true, por: 'La máquina le hace el trabajo más fácil.' },
    { t: 'La almohada es una máquina para dormir.', ok: false, por: 'La almohada no hace ningún trabajo: solo es blandita.' }
  ],
  ejemplos: [
    { t: 'Una lavadora', ok: true },
    { t: 'Una grúa', ok: true },
    { t: 'Una bicicleta', ok: true },
    { t: 'Una mesa', ok: false },
    { t: 'Un caballo', ok: false },
    { t: 'Una caja de cartón', ok: false }
  ],
  pregunta: '¿Es una máquina?',
  acaba: ['Me gustaría tener una máquina que…', 'Sin la máquina de… sería más difícil…'],
  habla: 'Contad entre los dos qué máquinas hay en vuestra cocina. ¿Qué trabajo hace cada una?',
  rel: { parecida: ['aparato'], contraria: [], familia: ['maquinaria', 'maquinista'], mas: ['robot', 'herramienta', 'objeto'] }
});
```

## Notas para quien programe

- **Semana de Medio**, como la 10, la 15 y la 20: el tema de los objetos y los materiales del libro
  de 1.º. `objeto` enlaza con `ser vivo` (semana 10): un objeto **no está vivo**; por eso los
  no-ejemplos «Un gato», «Un árbol» y el sentido del perro. `máquina` cierra la semana: es un objeto
  que hace un trabajo.
- `objeto` y `material` se confunden fácil (la silla es el objeto; la madera, su material): no se
  presentan el mismo día (`sep: 'objeto-material'`). Los no-ejemplos de `material` son objetos
  («Una silla», «Un balón») y un color, y sus sentidos «no» confunden material con color y con tamaño.
- `natural` y `artificial` son contrarias (`sep: 'natural-artificial'`) y se preguntan una a otra en
  `relaciona`, como `antiguo` y `moderno`. «Una flor de papel» y «Un plátano de juguete» son los
  no-ejemplos cercanos. `artificial` pregunta además «fabricado»; `natural` lo tiene en `rel.mas`.
- **`pregunta`:** la llevan los tres nombres (con artículo) y las tres cualidades (`¿Es natural?`,
  `¿Es artificial?`, `¿Es impermeable?`), porque los ejemplos son cosas sueltas y «¿Es un ejemplo de
  «natural»?» no se lee bien. Las tres cualidades van en `CON_PREG` de `test_docs`.
- `impermeable` lleva segundo significado: el abrigo para la lluvia (`chubasquero` va en `rel.mas`).
  Pregunta «que no se moja». `transparente` (2.º, semana 4) va en `rel.mas`: es otra propiedad de los
  materiales.
- `material` no tiene preguntas de `relaciona` (le quedan `acaba` y `habla`). `objeto` pregunta «cosa».
  `máquina` pregunta «aparato»; `herramienta` (2.º, semana 10) va en `rel.mas` de las dos.
- **Gestos cercanos a vigilar:** `objeto` (palpar con los ojos cerrados) y `detalle` (recorrer la
  palma con un dedo, semana 22); `material` (frotar la tela de la manga) y `áspero` (rascar la palma,
  semana 4); `natural` (oler una flor) y `agradable` (cara al sol, semana 16); `artificial` (golpecitos
  con la uña) y `estropeado` (pulsar un botón, semana 23); `impermeable` (gotas que resbalan sobre el
  puño) y `proteger` (tejado sobre la cabeza, semana 5); `máquina` (robot) y `saludable` (brazos que
  corren, semana 15).
- Orden recomendado dentro de la semana: objeto, material, natural, artificial, impermeable, máquina.
