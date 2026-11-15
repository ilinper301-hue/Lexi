# 2.º · Semana 1 · contenido completo

Seis palabras y la pieza de la semana, escritas con las normas de `docs/pedagogia.md` y de
`docs/segundo.md`. Al programar, cada ficha pasa tal cual a `src/js/palabras/2s01-<id>.js` y la pieza
a `src/js/piezas/2s01-contrarias.js`.

**Aprobada por Iván el 15-11-2026.**

## Las seis palabras

```js
PALABRA({
  id: 'subrayar', palabra: 'subrayar', silabas: ['sub', 'ra', 'yar'],
  tipo: 'accion', nivel: 2, curso: 2, semana: 1, bloque: 'pensar',
  def: 'Subrayar es hacer una raya debajo de una palabra o de una frase para que se vea bien.',
  otro: null,
  escena: { img: 'subrayar.webp', texto: 'Clara lee un problema de mates. La pregunta es lo más importante. Coge la regla y el lápiz y le pone una raya justo debajo. Clara ha subrayado la pregunta.' },
  contextos: [
    'En el dictado subrayamos el título con rojo.',
    'Mi madre subraya en la lista de la compra lo que no se puede olvidar.',
    'En el cuento subrayo las palabras que no conozco para preguntarlas después.'
  ],
  gesto: 'Pasa un dedo por la mesa, recto y de izquierda a derecha, como un lápiz que pasa por debajo de algo.',
  sentido: [
    { t: 'Subrayé el nombre del animal para encontrarlo rápido.', ok: true, por: 'Con la raya debajo, la palabra se ve enseguida.' },
    { t: 'Subrayé la palabra haciéndole un círculo alrededor.', ok: false, por: 'Eso es rodear. Subrayar es poner la raya debajo.' },
    { t: 'La maestra pidió subrayar los números del problema y les puse una raya debajo.', ok: true, por: 'Hizo justo lo que le pedían.' },
    { t: 'Subrayé toda la página y así se veía muy bien lo importante.', ok: false, por: 'Si lo subrayas todo, lo importante ya no se distingue.' }
  ],
  ejemplos: [
    { t: 'Poner una raya debajo del título', ok: true },
    { t: 'Pasar el lápiz por debajo de la pregunta del problema', ok: true },
    { t: 'Marcar con una línea por debajo las palabras nuevas', ok: true },
    { t: 'Tachar una palabra con una raya por encima', ok: false },
    { t: 'Rodear la respuesta correcta', ok: false },
    { t: 'Pintar todo el dibujo de amarillo', ok: false }
  ],
  acaba: ['En este problema voy a subrayar…', 'Subrayamos lo más importante para…'],
  habla: 'Mira una página de tu libro: ¿qué subrayarías? Enséñaselo a tu compañero y dile por qué.',
  rel: { parecida: ['poner una línea debajo'], contraria: [], familia: ['raya', 'subrayado'], mas: ['destacar', 'resaltar'] },
  fam: {
    si: [
      { p: 'raya', t: 'Para subrayar, hago una ___ debajo de la palabra.' },
      { p: 'subrayado', t: 'El título del cuaderno va ___ en rojo.' }
    ],
    no: [
      { p: 'subir', por: 'Subir es ir hacia arriba; no tiene que ver con hacer rayas.' }
    ]
  }
});

PALABRA({
  id: 'indicar', palabra: 'indicar', silabas: ['in', 'di', 'car'],
  tipo: 'accion', nivel: 2, curso: 2, semana: 1, bloque: 'pensar',
  def: 'Indicar es decir o mostrar algo con claridad: cuál es, dónde está o por dónde se va.',
  otro: null,
  escena: { img: 'indicar.webp', texto: 'Una señora busca la biblioteca y no sabe por dónde ir. Omar se lo explica: «Siga recto y gire en la esquina». La señora le da las gracias. Omar le ha indicado el camino.' },
  contextos: [
    'En el ejercicio pone: «Indica cuál es el número mayor».',
    'La flecha verde indica dónde está la salida.',
    'En la excursión, la monitora nos indicó dónde dejar las mochilas.'
  ],
  gesto: 'Con la mano abierta, haz como un guardia que da paso: «por aquí».',
  sentido: [
    { t: 'El cartel indica que la piscina abre a las diez.', ok: true, por: 'El cartel lo dice con claridad.' },
    { t: 'Me indicó el camino quedándose callado y sin moverse.', ok: false, por: 'Para indicar hay que decir o mostrar algo.' },
    { t: 'Indiqué la respuesta correcta con una cruz.', ok: true, por: 'La cruz muestra cuál es la respuesta.' },
    { t: 'El mapa estaba en blanco y por eso indicaba muy bien dónde estaba el tesoro.', ok: false, por: 'Un mapa en blanco no muestra nada.' }
  ],
  ejemplos: [
    { t: 'Decirle a alguien por dónde se va al comedor', ok: true },
    { t: 'Marcar con una cruz cuál es la respuesta', ok: true },
    { t: 'Una flecha que muestra dónde está el baño', ok: true },
    { t: 'Encogerte de hombros y no decir nada', ok: false },
    { t: 'Guardarte la respuesta para ti', ok: false },
    { t: 'Preguntar por dónde se va', ok: false }
  ],
  acaba: ['La flecha del pasillo indica…', 'Si llega alguien nuevo al cole, le indico…'],
  habla: 'Indica a tu compañero, paso a paso, cómo se va desde la clase hasta el patio.',
  rel: { parecida: ['mostrar', 'decir cuál es'], contraria: [], familia: ['indicación', 'índice', 'indicador'], mas: ['señalar'] },
  fam: {
    si: [
      { p: 'indicación', t: 'Seguí la ___ de la monitora y encontré el camino.', pieza: 'cion' },
      { p: 'índice', t: 'El dedo con el que apuntamos se llama dedo ___.' }
    ],
    no: [
      { p: 'invitar', por: 'Invitar es pedirle a alguien que venga; no tiene que ver con indicar.' }
    ]
  }
});

PALABRA({
  id: 'resolver', palabra: 'resolver', silabas: ['re', 'sol', 'ver'],
  tipo: 'accion', nivel: 2, curso: 2, semana: 1, bloque: 'pensar',
  def: 'Resolver es encontrar la solución de un problema o la respuesta de una pregunta difícil.',
  otro: null,
  escena: { img: 'resolver.webp', texto: 'Nico tiene un problema de mates y no le sale. Lo lee otra vez y dibuja las manzanas en el cuaderno. ¡Ya lo ve claro: son nueve! Nico ha conseguido resolver el problema.' },
  contextos: [
    'En mates resolvemos dos problemas cada día.',
    'La detective resolvió el misterio siguiendo las pistas.',
    'Mi hermano y yo queríamos el mismo sillón y lo resolvimos haciendo turnos.'
  ],
  gesto: 'Haz como que desatas un nudo con las dos manos y ábrelas: «¡ya está!».',
  sentido: [
    { t: 'Resolví la adivinanza: ¡era el paraguas!', ok: true, por: 'Encontró la respuesta.' },
    { t: 'Resolví el problema dejándolo en blanco.', ok: false, por: 'Si lo dejas en blanco, no has encontrado la solución.' },
    { t: 'Entre todos resolvimos el lío de las mochilas: cada una volvió a su dueño.', ok: true, por: 'Encontraron la manera de arreglarlo.' },
    { t: 'Leí el problema y ya está: lo resolví sin pensar nada.', ok: false, por: 'Leerlo no basta: hay que pensar y dar con la solución.' }
  ],
  ejemplos: [
    { t: 'Encontrar el resultado de un problema de mates', ok: true },
    { t: 'Dar con la respuesta de una adivinanza', ok: true },
    { t: 'Arreglar una discusión hablando', ok: true },
    { t: 'Leer el problema y pasar la hoja', ok: false },
    { t: 'Copiar el enunciado en el cuaderno', ok: false },
    { t: 'Decir «no me sale» y dejarlo', ok: false }
  ],
  acaba: ['Para resolver un problema, lo primero que hago es…', 'Una vez resolví un lío con un amigo. Lo que hicimos fue…'],
  habla: '¿Qué haces tú cuando un problema no te sale? Cuéntale a tu compañero qué te ayuda a resolverlo.',
  rel: { parecida: ['solucionar', 'encontrar la respuesta'], contraria: [], familia: [], mas: ['averiguar', 'solución'] }
});

PALABRA({
  id: 'ancho', palabra: 'ancho', silabas: ['an', 'cho'],
  tipo: 'cualidad', nivel: 2, curso: 2, semana: 1, bloque: 'como-son',
  def: 'Algo es ancho cuando mide mucho de un lado al otro.',
  otro: null,
  escena: { img: 'ancho.webp', texto: 'La clase de Bruno va de excursión por el paseo del río. Caben seis niños, uno al lado del otro, y todavía sobra sitio. Bruno abre los brazos y no molesta a nadie. El paseo es muy ancho.' },
  contextos: [
    'El río es tan ancho que hace falta un puente largo para cruzarlo.',
    'Este pantalón me queda ancho: se me cae.',
    'En mates medimos el largo y el ancho de la mesa.'
  ],
  gesto: 'Pon las manos planas y juntas sobre la mesa y sepáralas hacia los lados, como alisando un mantel grande.',
  sentido: [
    { t: 'La puerta del garaje es ancha para que pueda pasar el coche.', ok: true, por: 'Un coche necesita mucho sitio de lado a lado.' },
    { t: 'El pasillo era tan ancho que teníamos que pasar de lado y encogidos.', ok: false, por: 'Si hay que pasar de lado, es estrecho.' },
    { t: 'Elegimos la mesa más ancha para caber los cuatro juntos.', ok: true, por: 'En una mesa ancha cabe más gente, uno al lado de otro.' },
    { t: 'La cuerda era muy ancha: fina como un hilo y larguísima.', ok: false, por: 'Eso es ser larga y fina. Ancho es de un lado al otro.' }
  ],
  ejemplos: [
    { t: 'Una autopista con muchos carriles', ok: true },
    { t: 'Un río grande', ok: true },
    { t: 'La puerta de un garaje', ok: true },
    { t: 'Un hilo', ok: false },
    { t: 'Una rendija', ok: false },
    { t: 'Un poste muy alto y delgado', ok: false }
  ],
  acaba: ['Necesito un sitio ancho para…', 'El río era tan ancho que…'],
  habla: 'Busca en la clase tres cosas anchas. Díselas a tu compañero y explícale cómo lo sabes.',
  rel: { parecida: ['que tiene mucho de lado a lado'], contraria: ['estrecho'], familia: ['anchura', 'ensanchar'], mas: ['amplio'] },
  fam: {
    si: [
      { p: 'anchura', t: 'Medimos la ___ de la puerta: un metro.' },
      { p: 'ensanchar', t: 'Van a ___ la acera para que quepan los carritos.' }
    ],
    no: [
      { p: 'anchoa', por: 'Una anchoa es un pescado pequeño; no tiene que ver con ser ancho.' },
      { p: 'ancla', por: 'El ancla sujeta el barco al fondo del mar; no tiene que ver con ser ancho.' }
    ]
  }
});

PALABRA({
  id: 'estrecho', palabra: 'estrecho', silabas: ['es', 'tre', 'cho'],
  tipo: 'cualidad', nivel: 2, curso: 2, semana: 1, bloque: 'como-son',
  def: 'Algo es estrecho cuando mide poco de un lado al otro y cuesta pasar o caber.',
  otro: null,
  escena: { img: 'estrecho.webp', texto: 'Después, la clase de Bruno entra en el pueblo por un callejón. Solo cabe un niño, así que van en fila, uno detrás de otro. Bruno toca las dos paredes con las manos. El callejón es muy estrecho.' },
  contextos: [
    'El sendero del monte es estrecho y vamos en fila.',
    'Estos zapatos me quedan estrechos y me aprietan los dedos.',
    'El gato se cuela por un hueco muy estrecho de la valla.'
  ],
  gesto: 'Pega los brazos al cuerpo y encoge los hombros, como para pasar por un sitio muy justo.',
  sentido: [
    { t: 'La calle era tan estrecha que el autobús no podía entrar.', ok: true, por: 'El autobús necesita más sitio de lado a lado.' },
    { t: 'El campo de fútbol es estrecho: caben veinte niños corriendo a la vez.', ok: false, por: 'Si caben tantos corriendo, es ancho.' },
    { t: 'La puerta estaba casi cerrada y pasé de lado por el hueco estrecho.', ok: true, por: 'Por un hueco estrecho se pasa mejor de lado.' },
    { t: 'La torre es muy estrecha: llega hasta las nubes.', ok: false, por: 'Llegar muy arriba es ser alta. Estrecho es de un lado al otro.' }
  ],
  ejemplos: [
    { t: 'Un callejón por el que solo pasa una persona', ok: true },
    { t: 'El cuello de una botella', ok: true },
    { t: 'Una rendija entre dos tablas', ok: true },
    { t: 'Una plaza grande', ok: false },
    { t: 'Una autopista', ok: false },
    { t: 'Un muro muy bajito', ok: false }
  ],
  acaba: ['El pasillo era tan estrecho que…', 'Por un camino estrecho hay que ir…'],
  habla: '¿Por qué sitio estrecho has pasado alguna vez? Cuéntale a tu compañero cómo lo hiciste.',
  rel: { parecida: ['apretado', 'con poco sitio para pasar'], contraria: ['ancho'], familia: ['estrechar'], mas: ['angosto'] }
});

PALABRA({
  id: 'preocupado', palabra: 'preocupado', silabas: ['pre', 'o', 'cu', 'pa', 'do'],
  tipo: 'cualidad', nivel: 2, curso: 2, semana: 1, bloque: 'sentir',
  def: 'Alguien está preocupado cuando no deja de pensar en algo malo que puede pasar.',
  otro: null,
  escena: { img: 'preocupado.webp', texto: 'Mañana es la excursión de Pablo y no para de llover. Pablo mira por la ventana cada poco. «¿Y si mañana no podemos ir?», piensa. Pablo está preocupado.' },
  contextos: [
    'Mi padre está preocupado porque el coche hace un ruido raro.',
    'La maestra se quedó preocupada hasta que apareció el niño que faltaba en la fila.',
    'Los agricultores están preocupados porque hace meses que no llueve.'
  ],
  gesto: 'Arruga la frente y apoya la mejilla en una mano, mirando hacia abajo.',
  sentido: [
    { t: 'Estaba preocupada porque mi perro no quería comer.', ok: true, por: 'Pensaba que al perro le podía pasar algo malo.' },
    { t: 'Estoy preocupado porque todo ha salido genial y no hay ningún problema.', ok: false, por: 'Si todo va bien, no hay nada malo en que pensar.' },
    { t: 'Mi abuelo llegaba tarde y mi madre, preocupada, lo llamó por teléfono.', ok: true, por: 'Quería saber si le había pasado algo.' },
    { t: 'Estaba tan preocupado por el control que ni me acordé de él en toda la tarde.', ok: false, por: 'Quien está preocupado no deja de pensar en eso.' }
  ],
  ejemplos: [
    { t: 'No encontrar la mochila la noche antes del cole', ok: true },
    { t: 'Pensar todo el rato «¿y si llego tarde?»', ok: true },
    { t: 'Ver que tu amigo se ha caído y no saber si se ha hecho daño', ok: true },
    { t: 'Reírte con un chiste', ok: false },
    { t: 'Estar enfadado porque te han quitado el sitio', ok: false },
    { t: 'Saber que todo ha salido bien', ok: false }
  ],
  acaba: ['Me quedé preocupado cuando…', 'Cuando estoy preocupada, me ayuda…'],
  habla: '¿Qué haces tú cuando estás preocupado? Cuéntale a tu compañero qué te ayuda.',
  rel: { parecida: ['con miedo de que algo salga mal'], contraria: [], familia: ['preocupación', 'preocuparse'], mas: ['inquieto', 'tranquilo', 'despreocupado'] },
  fam: {
    si: [
      { p: 'preocupación', t: 'Mi mayor ___ era perder el autobús.', pieza: 'cion' },
      { p: 'preocuparse', t: 'No hay que ___: el gato ya ha vuelto a casa.' }
    ],
    no: [
      { p: 'precioso', por: 'Precioso quiere decir muy bonito; no tiene que ver con estar preocupado.' }
    ]
  }
});
```

## La pieza de la semana: contrarias

Repasa las parejas de contrarias de 1.º y les suma la de esta semana. Sale cuando `ancho` y `estrecho`
ya están presentadas (regla P2).

```js
PIEZA({
  id: 'contrarias', curso: 2, semana: 1, tipo: 'contrarias', forma: 'Contrarias',
  idea: 'Hay palabras que van por parejas: una dice justo lo contrario que la otra.',
  ancla: ['ancho', 'estrecho'],
  ejemplos: [
    { a: 'ancho', b: 'estrecho', t: 'El paseo es ancho; el callejón es estrecho.' },
    { a: 'enorme', b: 'diminuto', t: 'Una ballena es enorme; una hormiga es diminuta.' },
    { a: 'suave', b: 'áspero', t: 'El peluche es suave; la corteza del pino es áspera.' },
    { a: 'antiguo', b: 'moderno', t: 'El castillo es antiguo; el móvil es moderno.' },
    { a: 'tranquilo', b: 'nervioso', t: 'Tumbado en la hierba estoy tranquilo; antes de actuar estoy nervioso.' }
  ],
  prueba: [
    { t: '«Rápido» y «lento» son contrarias.', ok: true, por: 'Lo rápido corre mucho y lo lento va despacio: justo al revés.' },
    { t: '«Enorme» y «gigante» son contrarias.', ok: false, por: 'Las dos dicen que algo es muy grande: se parecen.' },
    { t: '«Abierto» y «cerrado» son contrarias.', ok: true, por: 'Si una puerta está abierta, no está cerrada: justo al revés.' },
    { t: '«Ancho» y «alto» son contrarias.', ok: false, por: 'Una puerta puede ser ancha y alta a la vez. La contraria de ancho es estrecho.' }
  ],
  habla: 'Di una palabra y que tu compañero diga su contraria. Después, al revés.'
});
```

## Notas para quien programe

- **Orden dentro de la semana:** subrayar, indicar, resolver, ancho, estrecho, preocupado.
- `ancho` y `estrecho` son contrarias y **comparten historia** (la excursión de Bruno): se presentan en
  días distintos y en ese orden (marca `sep` común). Las dos imágenes deben mostrar al mismo niño.
- `preocupado` (esta semana) y `aliviado` (semana 2) también comparten historia: la excursión de Pablo
  y la lluvia. Las dos imágenes deben mostrar al mismo niño y la misma ventana.
- `subrayar` se separa `sub-ra-yar`. En clase también se llama «subrayar» a pasar el rotulador
  fluorescente por encima; las fichas hablan solo de la raya por debajo.
- `indicar` es pariente cercana de `señalar` (1.º): señalar es con el dedo o con una marca; indicar
  también vale con palabras. Por eso «señalar» está en `rel.mas` y no se pregunta.
- `resolver` cambia al conjugarse: «resuelvo», «resuelto». La escena acaba en infinitivo a propósito,
  para no usar «resuelto» el primer día. Enlaza con `problema` y `solución` (1.º, semana 8).
- `ancho` y `estrecho`: los no-ejemplos «alto y delgado», «larga y fina» y «muy bajito» son los
  importantes. Ancho no es largo ni alto: es de un lado al otro.
- `preocupado` no es lo mismo que `nervioso` (1.º): el no-ejemplo «Estar enfadado…» y la frase del
  control ayudan a afinar. No tiene contraria: «tranquilo» ya es la contraria de `nervioso`.
- **`familia`:** la llevan subrayar, indicar, ancho y preocupado. `resolver` y `estrecho` no tienen
  familia clara para un niño de 7 años (regla F10).
- «indicación» y «preocupación» llevan la pieza `cion`, que se presenta en la semana 2: hasta
  entonces esas dos palabras no tienen tarea `familia` (reglas F1 y F2).
- La pieza `contrarias` usa cuatro parejas de 1.º. Si la clase no hizo 1.º con Lexi, salen igual,
  como texto (regla P5).
