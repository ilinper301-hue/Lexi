# 2.º · Semana 3 · contenido completo

Seis palabras y la pieza de la semana, escritas con las normas de `docs/pedagogia.md` y de
`docs/segundo.md`. Al programar, cada ficha pasa tal cual a `src/js/palabras/2s03-<id>.js` y la pieza
a `src/js/piezas/2s03-or.js`.

**Pendiente de la revisión de Iván.**

## Las seis palabras

```js
PALABRA({
  id: 'relacionar', palabra: 'relacionar', silabas: ['re', 'la', 'cio', 'nar'],
  tipo: 'accion', nivel: 2, curso: 2, semana: 3, bloque: 'pensar',
  def: 'Relacionar es unir dos cosas que tienen algo que ver, con una flecha o con el pensamiento.',
  otro: null,
  escena: { img: 'relacionar.webp', texto: 'En la ficha hay tres animales y tres comidas. Aroa traza una flecha del conejo a la zanahoria, otra del mono al plátano y otra del ratón al queso. Cada animal queda junto a lo suyo. Aroa ha relacionado cada animal con su comida.' },
  contextos: [
    'En lengua relacionamos cada palabra con su dibujo.',
    'Cuando huelo a churros, lo relaciono con los domingos en casa de mi abuela.',
    'El abuelo relaciona las nubes negras con la lluvia.'
  ],
  gesto: 'Toca un punto en el aire con un dedo, haz un arco y toca otro punto: «de aquí a aquí».',
  sentido: [
    { t: 'Relacioné el paraguas con la lluvia porque uno sirve para la otra.', ok: true, por: 'El paraguas y la lluvia tienen que ver.' },
    { t: 'Relacioné el zapato con la sopa porque no tienen nada que ver.', ok: false, por: 'Se relacionan las cosas que sí tienen algo que ver.' },
    { t: 'En la ficha relacioné cada cría con su madre: el ternero con la vaca.', ok: true, por: 'Unió las dos que van juntas.' },
    { t: 'Relacioné las dos columnas tirando flechas al azar, sin mirar.', ok: false, por: 'Para relacionar hay que pensar qué va con qué.' }
  ],
  ejemplos: [
    { t: 'Unir con una flecha el gato y el maullido', ok: true },
    { t: 'Pensar «bufanda» y acordarte del invierno', ok: true },
    { t: 'Juntar cada calcetín con su pareja', ok: true },
    { t: 'Hacer flechas al azar', ok: false },
    { t: 'Colorear solo los animales', ok: false },
    { t: 'Escribir una lista de palabras sueltas', ok: false }
  ],
  acaba: ['Relaciono el verano con…', 'En esta ficha tengo que relacionar cada número con…'],
  habla: 'Di una palabra, por ejemplo «playa». Tu compañero dice otra que tenga que ver con ella y explica por qué.',
  rel: { parecida: ['unir con flechas'], contraria: [], familia: ['relación', 'relacionado'], mas: ['asociar', 'conectar'] },
  fam: {
    si: [
      { p: 'relación', t: '¿Qué ___ hay entre la abeja y la miel?' },
      { p: 'relacionado', t: 'El frío está ___ con el invierno.' }
    ],
    no: [
      { p: 'reloj', por: 'Un reloj da la hora; no tiene que ver con relacionar.' },
      { p: 'relámpago', por: 'Un relámpago es la luz de la tormenta; no tiene que ver con relacionar.' }
    ]
  }
});

PALABRA({
  id: 'sustituir', palabra: 'sustituir', silabas: ['sus', 'ti', 'tuir'],
  tipo: 'accion', nivel: 2, curso: 2, semana: 3, bloque: 'pensar',
  def: 'Sustituir es quitar una cosa o a una persona y poner otra en su lugar.',
  otro: null,
  escena: { img: 'sustituir.webp', texto: 'En el partido, Vera está muy cansada y pide el cambio. El entrenador llama a Hugo. Vera se sienta en el banquillo y Hugo sale a jugar en su puesto. Hugo ha sustituido a Vera.' },
  contextos: [
    'En la frase sustituimos el dibujo del sol por la palabra «sol».',
    'Hoy la maestra está enferma y la sustituye otro maestro.',
    'Se fundió la bombilla y mi padre la sustituyó por una nueva.'
  ],
  gesto: 'Coge algo imaginario con una mano y apártalo; con la otra, pon otra cosa en el mismo sitio.',
  sentido: [
    { t: 'Se gastó el lápiz rojo y lo sustituí por otro nuevo.', ok: true, por: 'Quitó uno y puso otro en su lugar.' },
    { t: 'Sustituí la pila gastada dejándola donde estaba.', ok: false, por: 'Si se queda la misma, no has puesto otra en su lugar.' },
    { t: 'En la receta sustituimos la mantequilla por aceite.', ok: true, por: 'Usaron una cosa en lugar de la otra.' },
    { t: 'Sustituí la silla rota añadiendo otra silla al lado.', ok: false, por: 'Añadir no es sustituir: la rota sigue ahí. Hay que quitar una y poner otra.' }
  ],
  ejemplos: [
    { t: 'Cambiar la bombilla fundida por una nueva', ok: true },
    { t: 'Un jugador entra y otro se va al banquillo', ok: true },
    { t: 'Borrar una palabra y escribir otra en su sitio', ok: true },
    { t: 'Añadir una silla más a la mesa', ok: false },
    { t: 'Quitar un cromo del álbum y dejar el hueco', ok: false },
    { t: 'Dejar la bombilla fundida donde está', ok: false }
  ],
  acaba: ['Si se pierde una pieza del juego, la puedo sustituir por…', 'En la frase «El perro es grande», sustituyo «grande» por…'],
  habla: 'Si pudieras sustituir una comida del comedor por otra, ¿cuál cambiarías y por cuál? Cuéntaselo a tu compañero.',
  rel: { parecida: ['cambiar por otro', 'poner en lugar de'], contraria: [], familia: ['sustituto', 'sustitución'], mas: ['reemplazar'] },
  fam: {
    si: [
      { p: 'sustituto', t: 'Hoy no está la maestra y ha venido un ___.' },
      { p: 'sustitución', t: 'El entrenador hizo una ___: salió Vera y entró Hugo.', pieza: 'cion' }
    ],
    no: [
      { p: 'susto', por: 'Un susto es lo que sientes cuando algo te asusta; no tiene que ver con sustituir.' }
    ]
  }
});

PALABRA({
  id: 'inventar', palabra: 'inventar', silabas: ['in', 'ven', 'tar'],
  tipo: 'accion', nivel: 2, curso: 2, semana: 3, bloque: 'pensar',
  def: 'Inventar es crear algo nuevo que antes no existía: un aparato, un juego, un cuento…',
  otro: 'También es contar algo que no es verdad: «Se inventó una excusa».',
  escena: { img: 'inventar.webp', texto: 'A Zoe se le caen siempre los lápices de la mesa. Coge un cartón, lo dobla y le pone una goma elástica. ¡Ahora los lápices no ruedan! Zoe ha inventado un sujetalápices.' },
  contextos: [
    'Hace mucho tiempo, alguien inventó la rueda.',
    'En el recreo inventamos un juego nuevo con una cuerda y dos aros.',
    'Mi abuelo inventa cuentos para dormirme.'
  ],
  gesto: 'Haz como que montas algo con las dos manos, atornillando en el aire, y enséñalo: «¡tachán!».',
  sentido: [
    { t: 'Inventé un juego de cartas que nadie conocía.', ok: true, por: 'Antes ese juego no existía.' },
    { t: 'Inventé la bicicleta: me la compraron ayer en la tienda.', ok: false, por: 'Si ya estaba en la tienda, la inventó otra persona hace mucho.' },
    { t: 'Una ingeniera inventó un robot que recoge la basura del mar.', ok: true, por: 'Creó una máquina nueva.' },
    { t: 'Inventé una canción: canté la que sale en la radio.', ok: false, por: 'Esa canción ya existía. Cantarla no es inventarla.' }
  ],
  ejemplos: [
    { t: 'Crear un juego con reglas nuevas', ok: true },
    { t: 'Construir un aparato que no existía', ok: true },
    { t: 'Pensar un cuento que nadie ha contado', ok: true },
    { t: 'Copiar un dibujo de un libro', ok: false },
    { t: 'Encontrar una moneda en el suelo', ok: false },
    { t: 'Aprenderte una canción de memoria', ok: false }
  ],
  acaba: ['Me gustaría inventar una máquina que…', 'Si invento un juego para el recreo, sus reglas serían…'],
  habla: '¿Qué te gustaría inventar para ayudar en casa o en el cole? Cuéntale a tu compañero para qué serviría.',
  rel: { parecida: ['crear algo nuevo'], contraria: ['copiar'], familia: ['invento', 'inventor', 'inventora'], mas: ['imaginar', 'idear'] },
  fam: {
    si: [
      { p: 'invento', t: 'La rueda fue un gran ___.' },
      { p: 'inventor', t: 'El ___ del teléfono se hizo muy famoso.', pieza: 'or' },
      { p: 'inventora', t: 'La ___ enseñó su robot a toda la clase.', pieza: 'or' }
    ],
    no: [
      { p: 'invierno', por: 'El invierno es la estación del frío; no tiene que ver con inventar.' },
      { p: 'ventana', por: 'Una ventana deja entrar la luz; no tiene que ver con inventar.' }
    ]
  }
});

PALABRA({
  id: 'flexible', palabra: 'flexible', silabas: ['fle', 'xi', 'ble'],
  tipo: 'cualidad', nivel: 2, curso: 2, semana: 3, bloque: 'como-son',
  def: 'Algo es flexible cuando se puede doblar con facilidad sin que se rompa.',
  otro: 'También decimos que una persona es flexible cuando sabe cambiar de planes sin enfadarse.',
  escena: { img: 'flexible.webp', texto: 'Lucas tiene una regla de goma. La dobla hasta que las dos puntas se tocan. La suelta y la regla no se ha roto. La regla de Lucas es flexible.' },
  contextos: [
    'Las ramas del sauce son flexibles: el viento las dobla y no se parten.',
    'La gimnasta es muy flexible y toca el suelo con la frente.',
    'La manguera del jardín es flexible y se puede enrollar.'
  ],
  gesto: 'Levanta un brazo y balancéalo de lado a lado, blandito, como un junco con el viento.',
  sentido: [
    { t: 'El alambre es flexible: lo doblé para hacer un corazón.', ok: true, por: 'Se dobla sin romperse.' },
    { t: 'La galleta es muy flexible: al doblarla se partió en dos.', ok: false, por: 'Si se parte al doblarla, no es flexible.' },
    { t: 'Necesito una pajita flexible para beber tumbado.', ok: true, por: 'Una pajita que se dobla sirve para eso.' },
    { t: 'El ladrillo es flexible, por eso las paredes se hacen con ladrillos.', ok: false, por: 'Un ladrillo es duro y no se dobla.' }
  ],
  ejemplos: [
    { t: 'Una goma elástica', ok: true },
    { t: 'Una manguera', ok: true },
    { t: 'Una rama verde y fina', ok: true },
    { t: 'Una piedra', ok: false },
    { t: 'Un palo seco que se parte', ok: false },
    { t: 'Una baldosa', ok: false }
  ],
  acaba: ['Una cosa flexible que tengo en mi estuche es…', 'Las ramas flexibles no se rompen con el viento porque…'],
  habla: 'Busca en tu estuche o en tu mochila algo flexible. Enséñaselo a tu compañero y demuestra que lo es.',
  rel: { parecida: ['que se dobla sin romperse'], contraria: ['rígido'], familia: ['flexibilidad', 'flexión'], mas: ['elástico', 'blando'] },
  fam: {
    si: [
      { p: 'flexibilidad', t: 'La gimnasta tiene mucha ___.' },
      { p: 'flexión', t: 'En Educación Física doblamos los brazos para hacer una ___.' }
    ],
    no: [
      { p: 'flecha', por: 'Una flecha marca hacia dónde ir; no tiene que ver con doblarse.' },
      { p: 'flequillo', por: 'El flequillo es el pelo que cae sobre la frente; no tiene que ver con doblarse.' }
    ]
  }
});

PALABRA({
  id: 'rigido', palabra: 'rígido', silabas: ['rí', 'gi', 'do'],
  tipo: 'cualidad', nivel: 2, curso: 2, semana: 3, bloque: 'como-son',
  def: 'Algo es rígido cuando está tieso y no se puede doblar.',
  otro: null,
  escena: { img: 'rigido.webp', texto: 'Ahora Lucas coge la regla de madera. Intenta doblarla con cuidado, pero no cede ni un poco. Su hermana le avisa: «Si aprietas más, se parte». La regla de madera es rígida.' },
  contextos: [
    'La tabla de la estantería es rígida y aguanta todos los libros.',
    'Con la escayola, el brazo de mi primo está rígido y no lo puede doblar.',
    'El tronco del roble es rígido; sus ramas finas, no.'
  ],
  gesto: 'Pon un brazo recto y tieso delante de ti, como una tabla, y empújalo con la otra mano sin que ceda.',
  sentido: [
    { t: 'Usamos un cartón rígido para que el dibujo no se arrugue.', ok: true, por: 'Como no se dobla, mantiene el dibujo plano.' },
    { t: 'La cuerda es rígida, por eso hice un nudo con ella.', ok: false, por: 'Para hacer un nudo hay que doblarla: la cuerda es flexible.' },
    { t: 'La puerta de hierro es rígida: por más que empujo, no se dobla.', ok: true, por: 'El hierro grueso está tieso.' },
    { t: 'El espagueti cocido es rígido y se enrolla en el tenedor.', ok: false, por: 'Si se enrolla, es flexible. Rígido está antes de cocerlo.' }
  ],
  ejemplos: [
    { t: 'Una tabla de madera', ok: true },
    { t: 'Un ladrillo', ok: true },
    { t: 'Un espagueti sin cocer', ok: true },
    { t: 'Una cuerda', ok: false },
    { t: 'Una bufanda', ok: false },
    { t: 'Un espagueti cocido', ok: false }
  ],
  acaba: ['Para hacer un puente de juguete necesito algo rígido porque…', 'Una cosa rígida de la clase es…'],
  habla: 'Piensa en una cosa que es mejor que sea rígida y otra que es mejor que sea flexible. Explícaselo a tu compañero.',
  rel: { parecida: ['tieso'], contraria: ['flexible'], familia: ['rigidez'], mas: ['duro', 'firme'] }
});

PALABRA({
  id: 'generoso', palabra: 'generoso', silabas: ['ge', 'ne', 'ro', 'so'],
  tipo: 'cualidad', nivel: 2, curso: 2, semana: 3, bloque: 'convivir',
  def: 'Alguien es generoso cuando da o comparte lo suyo con gusto, sin esperar nada a cambio.',
  otro: null,
  escena: { img: 'generoso.webp', texto: 'A Inés le han regalado una caja de rotuladores nuevos. Su amigo Saúl no tiene ninguno para hacer el mural. Inés abre la caja y le dice: «Coge los que necesites». Inés es generosa.' },
  contextos: [
    'Mi abuela es generosa: siempre hace comida de sobra para los vecinos.',
    'Fue generoso con su tiempo y se quedó a ayudarme a recoger.',
    'La gente del barrio fue generosa y llenó de comida las cajas para quien lo necesita.'
  ],
  gesto: 'Lleva las dos manos al pecho y ábrelas hacia delante, como dando algo tuyo.',
  sentido: [
    { t: 'Fue generosa y me dejó su bici toda la tarde.', ok: true, por: 'Compartió lo suyo con gusto.' },
    { t: 'Es muy generoso: se guardó todos los caramelos para él solo.', ok: false, por: 'Quien es generoso comparte; no se lo queda todo.' },
    { t: 'Mi tío es generoso con su tiempo: siempre tiene un rato para ayudarnos.', ok: true, por: 'También se puede dar tiempo y ayuda.' },
    { t: 'Fui generoso: le dejé mi goma, pero solo si él me daba sus cromos.', ok: false, por: 'Si pides algo a cambio, es un trato, no un regalo.' }
  ],
  ejemplos: [
    { t: 'Dejar tus pinturas a quien no tiene', ok: true },
    { t: 'Dar parte de tu merienda sin que te la pidan', ok: true },
    { t: 'Quedarte a ayudar a un amigo a recoger', ok: true },
    { t: 'Prestar un juguete solo si te dan otro', ok: false },
    { t: 'Esconder el balón para que nadie juegue', ok: false },
    { t: 'Dar a otro lo que no es tuyo', ok: false }
  ],
  acaba: ['Una persona generosa que conozco es… porque…', 'Puedo ser generoso con mi tiempo cuando…'],
  habla: 'Cuenta a tu compañero una vez que alguien fue generoso contigo. ¿Cómo te sentiste?',
  rel: { parecida: ['que da lo suyo con gusto'], contraria: ['egoísta', 'tacaño'], familia: ['generosidad'], mas: ['solidario', 'compartir'] }
});
```

## La pieza de la semana: `-or`, `-ora`

Sale cuando `inventar` ya está presentada (regla P2). A los tres ejemplos de la lista (inventor,
observador, protector) se suman tres más para llegar a seis y enseñar que también vale para máquinas.

```js
PIEZA({
  id: 'or', curso: 2, semana: 3, tipo: 'sufijo', forma: '-or, -ora',
  idea: 'Con -or o -ora decimos quién hace algo, sea una persona o una máquina: inventor, calculadora.',
  ancla: ['inventar'],
  ejemplos: [
    { a: 'inventar', b: 'inventor', t: 'Quien inventa cosas es un inventor o una inventora.' },
    { a: 'observar', b: 'observador', t: 'Quien observa con atención es un buen observador.' },
    { a: 'proteger', b: 'protector', t: 'La crema que nos protege del sol es un protector solar.' },
    { a: 'pintar', b: 'pintora', t: 'Quien pinta cuadros es un pintor o una pintora.' },
    { a: 'jugar', b: 'jugador', t: 'Quien juega al fútbol es un jugador o una jugadora.' },
    { a: 'calcular', b: 'calculadora', t: 'La máquina que calcula es una calculadora.' }
  ],
  prueba: [
    { t: 'De «nadar» sale «nadadora».', ok: true, por: 'Nadar y -ora: una nadadora es la persona que nada.' },
    { t: '«Tambor» lleva la pieza -or.', ok: false, por: 'Acaba igual, pero no sale de ninguna acción: no existe «tambar». Un tambor es un instrumento.' },
    { t: 'De «vender» sale «vendedor».', ok: true, por: 'Vender y -or: un vendedor es la persona que vende.' },
    { t: 'Quien cocina es un «cocinador».', ok: false, por: 'Esa palabra no existe: decimos «cocinero» o «cocinera». No todas las acciones usan -or.' }
  ],
  habla: '¿Qué te gustaría ser: inventora, pintor, nadadora, jugador…? Díselo a tu compañero y cuéntale por qué.'
});
```

## Notas para quien programe

- **Orden dentro de la semana:** relacionar, sustituir, inventar, flexible, rígido, generoso.
- El `id` de «rígido» es `rigido` (sin tilde).
- `flexible` y `rígido` son contrarias y **comparten historia** (las reglas de Lucas): se presentan en
  días distintos y en ese orden (marca `sep` común). Las dos imágenes deben mostrar al mismo niño.
- `relacionar` se llama casi igual que la tarea `relaciona`; no chocan, pero conviene saberlo.
- `sustituir` cambia al conjugarse: «sustituyo», «sustituyó». Sus no-ejemplos importantes: añadir sin
  quitar y quitar sin poner.
- `inventar` tiene segundo significado (`otro`): decir algo que no es verdad. El no-ejemplo
  «Encontrar una moneda…» separa inventar de encontrar o `descubrir` (lo que ya existía se descubre;
  lo que no existía se inventa).
- **Para la revisión de 1.º:** `imaginar` (1.º, semana 6) tiene «inventar» como pregunta de
  `relaciona`. Ahora «inventar» es palabra del paquete: conviene pasarla a `rel.mas` de `imaginar`.
  No se ha tocado.
- `flexible` tiene segundo significado (`otro`): una persona flexible.
- `rígido` no es lo mismo que `resistente` (1.º): el espagueti sin cocer es rígido y se parte.
- `generoso` va en el bloque `convivir`. Sus no-ejemplos importantes: «solo si te dan otro» (es un
  trato) y «dar lo que no es tuyo». Su gesto se parece al de `compartir` (1.º, semana 9): no ponerlos
  juntos en «¿Qué palabra es?».
- **`familia`:** la llevan relacionar, sustituir, inventar y flexible. `rígido` y `generoso` solo
  tienen una palabra de su familia («rigidez», «generosidad») y se quedan sin ella (regla F10).
- «inventor» e «inventora» llevan la pieza `or`; «sustitución», la pieza `cion` (semana 2).
- En la pieza, la terminación cambia un poco (invent**or**, observa**dor**, protec**tor**); para los
  niños basta con «acaba en -or o en -ora». «relación» no lleva `cion`: no es «relacionar + ción».
