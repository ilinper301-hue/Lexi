# Semana 3 · contenido completo (1.º)

Seis palabras escritas con las normas de `docs/pedagogia.md` y el modelo de `docs/semana-01.md`.
Al programar, cada bloque pasa tal cual a `src/js/palabras/s03-<id>.js`.

```js
PALABRA({
  id: 'explicar', palabra: 'explicar', silabas: ['ex', 'pli', 'car'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 3, bloque: 'pensar',
  def: 'Explicar es contar algo paso a paso para que otra persona lo entienda.',
  otro: null,
  escena: { img: 'explicar.webp', texto: 'Aitana sabe jugar al dominó y su primo no. Ella le cuenta despacio cómo se ponen las fichas. Ahora su primo ya sabe jugar. Aitana se lo ha explicado.' },
  contextos: [
    'La maestra explica cómo se hace la suma.',
    'Mi padre me explica por qué cruzamos con el semáforo en verde.',
    'El cuidador del zoo explica qué comen los pingüinos.'
  ],
  gesto: 'Abre las manos hacia delante, con las palmas hacia arriba, como si ofrecieras algo.',
  sentido: [
    { t: 'Le expliqué el juego a mi amigo y ya sabe jugar.', ok: true, por: 'Se lo contó de forma que lo entendió.' },
    { t: 'Le expliqué el camino quedándome callado.', ok: false, por: 'Para explicar hay que contarlo.' },
    { t: 'No entendía el problema y la maestra me lo explicó con un dibujo.', ok: true, por: 'Lo contó de otra manera para que lo entendiera.' },
    { t: 'Lo expliqué tan bien que nadie entendió nada.', ok: false, por: 'Si se explica bien, los demás lo entienden.' }
  ],
  ejemplos: [
    { t: 'Contar cómo se juega al escondite', ok: true },
    { t: 'Decir por qué has elegido ese número', ok: true },
    { t: 'Enseñar a tu hermano a abrocharse, paso a paso', ok: true },
    { t: 'Decir «porque sí»', ok: false },
    { t: 'Dar la respuesta sin decir cómo la sabes', ok: false },
    { t: 'Quedarte callado', ok: false }
  ],
  acaba: ['Te explico cómo se juega al pilla-pilla: primero…', 'Cuando no entiendo algo, pido que me lo expliquen porque…'],
  habla: 'Explica a tu compañero cómo te lavas los dientes, paso a paso.',
  rel: { parecida: ['aclarar'], contraria: [], familia: ['explicación'] }
});

PALABRA({
  id: 'elegir', palabra: 'elegir', silabas: ['e', 'le', 'gir'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 3, bloque: 'pensar',
  def: 'Elegir es quedarte con una cosa entre varias, la que tú prefieres o la que es mejor.',
  otro: null,
  escena: { img: 'elegir.webp', texto: 'En la biblioteca hay tres cuentos. Bruno los mira: uno de piratas, uno de dragones y uno de gatos. Se queda con el de dragones. Bruno ha elegido un cuento.' },
  contextos: [
    'En la ficha elegimos la respuesta correcta entre tres.',
    'En la heladería me dejan elegir un sabor.',
    'El capitán elige quién saca primero.'
  ],
  gesto: 'Pon las dos manos abiertas delante de ti y cierra una, como si cogieras algo.',
  sentido: [
    { t: 'Había dos camisetas y elegí la roja.', ok: true, por: 'Se quedó con una de las dos.' },
    { t: 'Solo quedaba un yogur, así que elegí entre muchos.', ok: false, por: 'Con uno solo no se puede elegir.' },
    { t: 'Elegimos el nombre del pez entre tres que nos gustaban.', ok: true, por: 'Había varios y se quedaron con uno.' },
    { t: 'Elegí un juego quedándome con todos a la vez.', ok: false, por: 'Elegir es quedarte con uno, no con todos.' }
  ],
  ejemplos: [
    { t: 'Coger un cuento entre tres', ok: true },
    { t: 'Decidir a qué jugáis en el recreo', ok: true },
    { t: 'Marcar una respuesta entre varias', ok: true },
    { t: 'Llevarte todos los cuentos', ok: false },
    { t: 'Coger el único lápiz que queda', ok: false },
    { t: 'Que otra persona lo decida por ti', ok: false }
  ],
  acaba: ['Si tengo que elegir un animal, elijo… porque…', 'Antes de elegir la respuesta tengo que…'],
  habla: '¿Qué prefieres: playa o montaña? Elige y explica por qué.',
  rel: { parecida: ['escoger'], contraria: [], familia: ['elección'] }
});

PALABRA({
  id: 'clasificar', palabra: 'clasificar', silabas: ['cla', 'si', 'fi', 'car'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 3, bloque: 'pensar',
  def: 'Clasificar es hacer grupos poniendo juntas las cosas que tienen algo igual.',
  otro: null,
  escena: { img: 'clasificar.webp', texto: 'Nora tiene un montón de botones mezclados. Pone los rojos en un bote, los azules en otro y los verdes en otro. Ya no están revueltos. Nora ha clasificado los botones.' },
  contextos: [
    'En casa clasificamos la basura: papel, vidrio y envases.',
    'En clase clasificamos los animales: los que vuelan, los que nadan y los que andan.',
    'En la frutería clasifican la fruta: manzanas con manzanas y peras con peras.'
  ],
  gesto: 'Con una mano, reparte cosas imaginarias: una a la izquierda y otra a la derecha.',
  sentido: [
    { t: 'Clasifiqué mis pinturas por colores.', ok: true, por: 'Hizo grupos: cada color con los suyos.' },
    { t: 'Clasifiqué los juguetes metiéndolos todos revueltos en una caja.', ok: false, por: 'Revolver no es hacer grupos.' },
    { t: 'Clasificamos las hojas: las grandes aquí y las pequeñas allí.', ok: true, por: 'Las juntaron por tamaño.' },
    { t: 'Clasifiqué un solo botón.', ok: false, por: 'Para hacer grupos hacen falta varias cosas.' }
  ],
  ejemplos: [
    { t: 'Separar la ropa blanca de la de color', ok: true },
    { t: 'Poner los coches con los coches y los muñecos con los muñecos', ok: true },
    { t: 'Juntar las figuras que tienen tres lados', ok: true },
    { t: 'Poner los números del 1 al 5 en fila', ok: false },
    { t: 'Mezclar todas las piezas', ok: false },
    { t: 'Contar los botones', ok: false }
  ],
  acaba: ['Puedo clasificar mis juguetes por…', 'Si clasifico los animales por dónde viven, el pez va con…'],
  habla: '¿Cómo clasificarías lo que hay en tu estuche? Cuéntaselo a tu compañero.',
  rel: { parecida: ['agrupar', 'separar por grupos'], contraria: ['mezclar'], familia: ['clasificación', 'clase'] }
});

PALABRA({
  id: 'parecido', palabra: 'parecido', silabas: ['pa', 're', 'ci', 'do'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 3, bloque: 'como-son',
  def: 'Dos cosas son parecidas cuando tienen algo igual, pero no son iguales del todo.',
  otro: null,
  escena: { img: 'parecido.webp', texto: 'Samuel y su hermano tienen el pelo rizado y la misma sonrisa. Pero Samuel es más alto y lleva gafas. No son iguales del todo. Samuel y su hermano son parecidos.' },
  contextos: [
    'El lobo y el perro son parecidos.',
    'La b y la d son letras parecidas: hay que fijarse bien.',
    'Mi abrigo es parecido al tuyo, pero el mío tiene capucha.'
  ],
  gesto: 'Acerca los dos dedos índices hasta ponerlos uno al lado del otro.',
  sentido: [
    { t: 'El limón y la naranja son parecidos: los dos son frutas redondas con cáscara.', ok: true, por: 'Tienen cosas iguales, aunque no son lo mismo.' },
    { t: 'Un pez y una bicicleta son muy parecidos.', ok: false, por: 'No tienen casi nada igual.' },
    { t: 'Tu letra es parecida a la mía: casi no las distingo.', ok: true, por: 'Tienen mucho en común.' },
    { t: 'Estos dos lápices son parecidos porque no tienen nada igual.', ok: false, por: 'Si no tienen nada igual, son diferentes.' }
  ],
  ejemplos: [
    { t: 'Un tigre y un gato', ok: true },
    { t: 'Una mandarina y una naranja', ok: true },
    { t: 'Un 6 y un 9', ok: true },
    { t: 'Una cuchara y una nube', ok: false },
    { t: 'Un zapato y un árbol', ok: false },
    { t: 'Un pez y un paraguas', ok: false }
  ],
  acaba: ['Mi mochila es parecida a la de… porque las dos…', 'Un caballo y una cebra son parecidos porque…'],
  habla: '¿A quién de tu familia te pareces? ¿En qué?',
  rel: { parecida: ['semejante'], contraria: ['diferente'], familia: ['parecerse'] }
});

PALABRA({
  id: 'diferente', palabra: 'diferente', silabas: ['di', 'fe', 'ren', 'te'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 3, bloque: 'como-son',
  def: 'Dos cosas son diferentes cuando no son iguales: cambia el color, la forma, el tamaño…',
  otro: null,
  escena: { img: 'diferente.webp', texto: 'Alba se ha vestido medio dormida. Lleva un calcetín de rayas y otro de lunares. Sus amigos se ríen y ella también. Los calcetines de Alba son diferentes.' },
  contextos: [
    'En el juego buscamos las cinco cosas diferentes entre los dos dibujos.',
    'Mi hermana y yo tenemos gustos diferentes: a ella le gusta el fútbol y a mí pintar.',
    'Cada copo de nieve es diferente de los demás.'
  ],
  gesto: 'Cruza los dos dedos índices formando una X.',
  sentido: [
    { t: 'Un perro y un pez son diferentes: uno tiene patas y el otro, aletas.', ok: true, por: 'No son iguales.' },
    { t: 'Estas dos pelotas son diferentes porque son exactamente iguales.', ok: false, por: 'Si son iguales, no son diferentes.' },
    { t: 'Hoy vengo por un camino diferente al de ayer.', ok: true, por: 'No es el mismo camino.' },
    { t: 'Las dos camisetas son diferentes: mismo color, mismo dibujo y misma talla.', ok: false, por: 'Si todo es lo mismo, son iguales.' }
  ],
  ejemplos: [
    { t: 'Un calcetín rojo y otro verde', ok: true },
    { t: 'Un círculo y un cuadrado', ok: true },
    { t: 'El día y la noche', ok: true },
    { t: 'Dos monedas iguales', ok: false },
    { t: 'Dos cromos repetidos', ok: false },
    { t: 'Dos gotas de agua', ok: false }
  ],
  acaba: ['Mi compañero y yo somos diferentes en…', 'Un gato y un pájaro son diferentes porque…'],
  habla: 'Busca con tu compañero una cosa en la que sois parecidos y otra en la que sois diferentes.',
  rel: { parecida: ['distinto'], contraria: ['igual', 'parecido'], familia: ['diferencia', 'diferenciar'] }
});

PALABRA({
  id: 'sorprendido', palabra: 'sorprendido', silabas: ['sor', 'pren', 'di', 'do'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 3, bloque: 'sentir',
  def: 'Estás sorprendido cuando pasa algo que no esperabas y te quedas con la boca abierta.',
  otro: null,
  escena: { img: 'sorprendido.webp', texto: 'Yusef llega a casa y está todo apagado. De pronto se enciende la luz. «¡Feliz cumpleaños!», gritan sus amigos. Yusef está sorprendido.' },
  contextos: [
    'Me quedé sorprendida cuando vi nevar en mi pueblo.',
    'El mago sacó una paloma del sombrero y todos nos quedamos sorprendidos.',
    'La maestra se quedó sorprendida: ¡habíamos recogido la clase solos!'
  ],
  gesto: 'Abre mucho los ojos y la boca y pon las manos en las mejillas.',
  sentido: [
    { t: 'Abrí la caja, saltó un muñeco de muelle y me quedé sorprendido.', ok: true, por: 'No se lo esperaba.' },
    { t: 'Estoy sorprendido porque ha pasado justo lo que yo sabía.', ok: false, por: 'Si ya lo sabías, no es una sorpresa.' },
    { t: 'Mi abuela se quedó sorprendida al verme: no sabía que iba a ir.', ok: true, por: 'No lo esperaba.' },
    { t: 'Estaba sorprendido porque todo era igual que siempre.', ok: false, por: 'Lo de siempre no sorprende.' }
  ],
  ejemplos: [
    { t: 'Encontrar un regalo debajo de la almohada', ok: true },
    { t: 'Ver un arcoíris doble', ok: true },
    { t: 'Que tu perro abra la puerta solo', ok: true },
    { t: 'Desayunar lo de todos los días', ok: false },
    { t: 'Ponerte los zapatos', ok: false },
    { t: 'Que llegue el recreo a su hora', ok: false }
  ],
  acaba: ['Me quedé sorprendido cuando…', 'Mi madre se quedaría sorprendida si yo…'],
  habla: '¿Qué es lo último que te ha sorprendido? Cuéntaselo a tu compañero.',
  rel: { parecida: ['asombrado'], contraria: [], familia: ['sorpresa', 'sorprender'] }
});
```

## Notas para quien programe

- `elegir` cambia al conjugarse: «elijo», «elige», «elegí». La voz del navegador lo lee bien; no lo corrijas.
- `parecido` y `diferente`: los ejemplos son **parejas** («Un tigre y un gato»). La pregunta de la tarea
  `ejemplo` debe leerse bien con parejas: «¿Son parecidos?», «¿Son diferentes?».
- `parecido` y `diferente` son contrarias y se presentan en días distintos; sus gestos forman pareja
  (índices juntos / índices cruzados).
- `clasificar`: el no-ejemplo «Poner los números del 1 al 5 en fila» sirve para distinguirlo de `ordenar`.
