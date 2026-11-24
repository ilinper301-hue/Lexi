# Semana 24 · contenido completo (1.º)

Seis palabras escritas con las normas de `docs/pedagogia.md` y el modelo de `docs/semana-01.md`.
Al programar, cada bloque pasa tal cual a `src/js/palabras/s24-<id>.js`.

Tres palabras para pensar y hacer (construir, mezclar, decorar), dos de cómo son las cosas
(profundo, puntiagudo) y una de convivir (acompañar). Es la semana de «manos a la obra».

```js
PALABRA({
  id: 'construir', palabra: 'construir', silabas: ['cons', 'truir'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 24, orden: 1, bloque: 'pensar',
  def: 'Construir es hacer algo juntando piezas o materiales, como una casa, un puente o una torre.',
  otro: null,
  escena: { img: 'construir.webp', texto: 'En la playa, Inés y su abuelo llenan cubos de arena mojada. Ponen uno al lado de otro y, encima, otro más. Después hacen una torre con una bandera de papel. ¡Han construido un castillo!' },
  contextos: [
    'En casa construí un garaje para mis coches con cajas de cartón.',
    'En clase construimos una torre muy alta con bloques.',
    'En el campo, los pájaros construyen su nido con ramitas.'
  ],
  gesto: 'Pon un puño encima del otro, y otro encima, y otro, cada vez más alto.',
  sentido: [
    { t: 'Los obreros están construyendo un puente sobre el río.', ok: true, por: 'Lo hacen juntando materiales.' },
    { t: 'Construí un dibujo solo con un lápiz.', ok: false, por: 'Un dibujo se hace o se pinta: no se construye con piezas.' },
    { t: 'Con piezas de madera, Ana construyó un barco.', ok: true, por: 'Juntó piezas para hacerlo.' },
    { t: 'Para construir la casa de bloques, la tiré al suelo.', ok: false, por: 'Tirarla es lo contrario: así se rompe.' }
  ],
  ejemplos: [
    { t: 'Hacer una cabaña con palos y mantas', ok: true },
    { t: 'Levantar un muro de ladrillos', ok: true },
    { t: 'Montar un robot con piezas', ok: true },
    { t: 'Romper una torre de bloques', ok: false },
    { t: 'Cantar una canción', ok: false },
    { t: 'Pintar un sol en un papel', ok: false }
  ],
  acaba: ['Si pudiera construir algo enorme, construiría…', 'Para construir una casa hace falta…'],
  habla: 'Pensad entre los dos algo que construiríais con cajas de cartón. ¿Cómo lo haríais?',
  rel: { parecida: ['montar'], contraria: ['destruir'], familia: ['construcción'], mas: ['crear', 'hacer', 'levantar'] }
});

PALABRA({
  id: 'mezclar', palabra: 'mezclar', silabas: ['mez', 'clar'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 24, orden: 2, bloque: 'pensar',
  def: 'Mezclar es juntar cosas distintas y removerlas, hasta que quedan todas revueltas.',
  otro: null,
  escena: { img: 'mezclar.webp', texto: 'En clase de plástica, Iker tiene pintura amarilla y pintura azul. Echa un poco de cada una en el mismo vaso. Remueve con el pincel, da vueltas y más vueltas… ¡y sale verde! Iker ha mezclado los colores.' },
  contextos: [
    'En casa mezclamos harina, huevos y leche para hacer tortitas.',
    'En clase, la maestra mezcla las tarjetas para que salgan sin orden.',
    'En el parque mezclamos arena y agua, y nos salió barro.'
  ],
  gesto: 'Sujeta un bol imaginario con una mano y, con la otra, remueve con una cuchara dando vueltas.',
  sentido: [
    { t: 'Mi madre mezcla el cacao con la leche.', ok: true, por: 'Junta los dos y los remueve.' },
    { t: 'Mezclé los calcetines poniendo cada uno con su pareja.', ok: false, por: 'Eso es ordenar: poner cada cosa con la suya.' },
    { t: 'Si mezclas rojo y blanco, sale rosa.', ok: true, por: 'Al juntarlos, sale un color nuevo.' },
    { t: 'Para mezclar el agua y la arena, puse cada una en un cubo distinto.', ok: false, por: 'Si están separadas, no se mezclan.' }
  ],
  ejemplos: [
    { t: 'Remover el azúcar en la leche', ok: true },
    { t: 'Revolver las fichas del dominó antes de jugar', ok: true },
    { t: 'Juntar plastilina azul y amarilla', ok: true },
    { t: 'Separar las canicas por colores', ok: false },
    { t: 'Poner los lápices de corto a largo', ok: false },
    { t: 'Beber un vaso de agua', ok: false }
  ],
  acaba: ['Si mezclo… y…, sale…', 'En la cocina me gusta mezclar…'],
  habla: 'Inventad entre los dos una receta loca: ¿qué cosas mezclaríais?',
  rel: { parecida: ['revolver'], contraria: [], familia: ['mezcla'], mas: ['ordenar', 'separar', 'juntar', 'unir'] }
});

PALABRA({
  id: 'decorar', palabra: 'decorar', silabas: ['de', 'co', 'rar'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 24, orden: 3, bloque: 'pensar',
  def: 'Decorar es poner adornos en un sitio o en una cosa para que quede más bonito.',
  otro: null,
  escena: { img: 'decorar.webp', texto: 'Mañana es el cumpleaños de Carla. Su hermano y su padre cuelgan globos en el salón y ponen guirnaldas de colores. Cuando Carla se despierta, abre mucho los ojos. ¡Han decorado el salón para ella!' },
  contextos: [
    'En casa decoramos la tarta con fresas y nata.',
    'En clase decoramos la puerta con flores de papel.',
    'En el pueblo, en fiestas, decoran las calles con farolillos.'
  ],
  gesto: 'Haz como que cuelgas adornos en un árbol imaginario: uno aquí, otro allá y otro arriba.',
  sentido: [
    { t: 'Decoré mi cuaderno con pegatinas de estrellas.', ok: true, por: 'Le puso adornos para que quedara bonito.' },
    { t: 'Decoramos la clase quitando todos los dibujos de las paredes.', ok: false, por: 'Quitar los adornos es lo contrario de decorar.' },
    { t: 'Para la fiesta, decoramos el patio con banderitas.', ok: true, por: 'Las banderitas lo hacen más bonito.' },
    { t: 'Decoré el árbol, pero no le puse nada.', ok: false, por: 'Para decorar hay que poner adornos.' }
  ],
  ejemplos: [
    { t: 'Poner un lazo en un regalo', ok: true },
    { t: 'Pegar estrellas en la pared del cuarto', ok: true },
    { t: 'Pintar flores en una maceta', ok: true },
    { t: 'Barrer el suelo', ok: false },
    { t: 'Atarte los zapatos', ok: false },
    { t: 'Quitar los adornos del árbol', ok: false }
  ],
  acaba: ['Para mi cumpleaños me gustaría decorar… con…', 'Si decoramos la clase, yo pondría…'],
  habla: 'Dile a tu compañero cómo decorarías tu cuarto si pudieras.',
  rel: { parecida: ['adornar'], contraria: [], familia: ['decoración'], mas: ['adorno', 'pintar', 'detalle'] }
});

PALABRA({
  id: 'profundo', palabra: 'profundo', silabas: ['pro', 'fun', 'do'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 24, orden: 4, bloque: 'como-son',
  def: 'Algo es profundo cuando su fondo está muy abajo, lejos de la parte de arriba.',
  otro: null,
  escena: { img: 'profundo.webp', texto: 'Marina y su abuela miran por la reja de un pozo antiguo. Marina tira una piedrecita y espera, espera… ¡plof! Ha tardado mucho en llegar al agua. «¡Qué pozo tan profundo!», dice Marina.' },
  contextos: [
    'En casa tenemos una olla tan profunda que mi brazo no llega al fondo.',
    'En clase vimos un vídeo del mar profundo, donde viven peces que brillan.',
    'En la piscina, los pequeños no nadan en la parte profunda.'
  ],
  gesto: 'Pon las manos en el borde de la mesa, asómate hacia abajo y di bajito «¡hola-a-a!», como en un pozo.',
  sentido: [
    { t: 'El río es tan profundo que no se ve el fondo.', ok: true, por: 'El fondo está muy abajo.' },
    { t: 'El charco era muy profundo: casi no me mojé los pies.', ok: false, por: 'Si casi no te mojas, el charco tiene muy poca agua.' },
    { t: 'Mi abuelo cavó un hoyo profundo para plantar el árbol.', ok: true, por: 'Llegaba muy abajo.' },
    { t: 'El plato llano es más profundo que el bol de la sopa.', ok: false, por: 'El bol es más profundo: le cabe más sopa.' }
  ],
  ejemplos: [
    { t: 'Un pozo con el agua muy abajo', ok: true },
    { t: 'El mar lejos de la playa', ok: true },
    { t: 'Una cueva que baja y baja', ok: true },
    { t: 'Un charco pequeño', ok: false },
    { t: 'Un plato llano', ok: false },
    { t: 'Una montaña muy alta', ok: false }
  ],
  acaba: ['Lo más profundo que he visto es…', 'Si una piscina es profunda, hay que…'],
  habla: 'Pensad entre los dos tres sitios profundos. ¿Qué habrá en el fondo?',
  rel: { parecida: ['hondo'], contraria: [], familia: ['profundidad'], mas: ['alto', 'fondo', 'llano'] }
});

PALABRA({
  id: 'puntiagudo', palabra: 'puntiagudo', silabas: ['pun', 'tia', 'gu', 'do'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 24, orden: 5, bloque: 'como-son',
  def: 'Algo es puntiagudo cuando termina en una punta muy fina, que a veces pincha.',
  otro: null,
  escena: { img: 'puntiagudo.webp', texto: 'En casa de su tía, Nico ve un cactus lleno de pinchos. Acerca un dedo, pero su tía le dice: «¡Con cuidado, que pincha!». Nico lo mira de cerca: cada pincho acaba en una punta finísima. ¡Es muy puntiagudo!' },
  contextos: [
    'En casa, el lápiz recién afilado está muy puntiagudo.',
    'En clase dibujé un castillo con torres puntiagudas.',
    'En el campo vimos una montaña con la cima puntiaguda.'
  ],
  gesto: 'Junta las puntas de los dedos de una mano y tócalas con cuidado con un dedo de la otra: ¡ay!',
  sentido: [
    { t: 'El erizo tiene el cuerpo lleno de púas puntiagudas.', ok: true, por: 'Las púas acaban en punta fina.' },
    { t: 'La pelota es tan puntiaguda que rueda muy bien.', ok: false, por: 'La pelota es redonda: no tiene punta.' },
    { t: 'Las tijeras de cocina son puntiagudas; las del cole, no.', ok: true, por: 'Las de cocina acaban en punta y pueden pinchar.' },
    { t: 'Me pinché con una almohada muy puntiaguda.', ok: false, por: 'Una almohada es blanda y no tiene punta.' }
  ],
  ejemplos: [
    { t: 'Un lápiz con mucha punta', ok: true },
    { t: 'Los pinchos de un cactus', ok: true },
    { t: 'El gorro de un mago', ok: true },
    { t: 'Una pelota de playa', ok: false },
    { t: 'Un cojín', ok: false },
    { t: 'Una goma de borrar redonda', ok: false }
  ],
  acaba: ['Una cosa puntiaguda que hay en mi casa es…', 'Con las cosas puntiagudas hay que…'],
  habla: 'Buscad tres cosas puntiagudas en la clase, sin tocarlas. ¿Cómo hay que cogerlas?',
  rel: { parecida: ['que acaba en punta'], contraria: [], familia: ['punta'], mas: ['afilado', 'pincho', 'redondo'] }
});

PALABRA({
  id: 'acompanar', palabra: 'acompañar', silabas: ['a', 'com', 'pa', 'ñar'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 24, orden: 6, bloque: 'convivir',
  def: 'Acompañar es ir o estar con alguien para que no se quede solo.',
  otro: null,
  escena: { img: 'acompanar.webp', texto: 'Hoy es el primer día de Omar en el cole nuevo. No conoce a nadie y no sabe dónde está su clase. Julia se le acerca y le dice: «Ven conmigo, yo te llevo». Julia acompaña a Omar hasta la puerta.' },
  contextos: [
    'En casa acompaño a mi abuelo a dar un paseo por la tarde.',
    'En el cole acompañé a un niño pequeño, que se había perdido, hasta su fila.',
    'En el parque, mi perro me acompaña a todas partes.'
  ],
  gesto: 'Dobla el brazo y ofrécelo a alguien imaginario a tu lado, como diciendo «vamos juntos».',
  sentido: [
    { t: 'Mi madre me acompaña al médico cuando estoy malo.', ok: true, por: 'Va con él para que no vaya solo.' },
    { t: 'Acompañé a mi amiga a casa y me fui por otra calle.', ok: false, por: 'Si te vas por otro lado, no vas con ella.' },
    { t: 'Me quedé con mi hermano en la parada del autobús para que no esperara solo.', ok: true, por: 'Estuvo con él todo el rato.' },
    { t: 'Acompañé a mi primo dejándolo solo en el parque.', ok: false, por: 'Acompañar es lo contrario de dejar solo.' }
  ],
  ejemplos: [
    { t: 'Ir con tu abuela a comprar el pan', ok: true },
    { t: 'Quedarte con un amigo que espera a su madre', ok: true },
    { t: 'Llevar a un compañero nuevo hasta el comedor', ok: true },
    { t: 'Irte corriendo y dejar a tu amigo atrás', ok: false },
    { t: 'Dormir la siesta', ok: false },
    { t: 'Dejar a tu hermano esperando solo en la parada', ok: false }
  ],
  acaba: ['Me gusta que me acompañe… cuando…', 'Si un compañero no sabe adónde ir, puedo…'],
  habla: 'Dile a tu compañero adónde te gustaría que te acompañara y por qué.',
  rel: { parecida: ['ir con'], contraria: ['dejar solo'], familia: ['compañero', 'compañía'], mas: ['consolar', 'incluir', 'invitar'] }
});
```

## Notas para quien programe

- **Semana de «manos a la obra»:** construir, mezclar y decorar son tres maneras de hacer cosas con
  las manos (en plástica, en la cocina, en una fiesta); profundo y puntiagudo son dos formas que se ven
  y se tocan; acompañar cierra con convivencia.
- `construir` frente a `crear` (semana 26): construir es hacer algo **juntando piezas o materiales**;
  crear será hacer algo **que no existía** (una canción, un cuento). Por eso el no-ejemplo «Cantar una
  canción» y el sentido «Construí un dibujo solo con un lápiz». `crear` va en `rel.mas` de
  `construir`. `construir` pregunta «montar» y «lo contrario de destruir».
- `mezclar` frente a `ordenar` (semana 1) y `separar` (semana 12): sus no-ejemplos son justo eso
  («Separar las canicas por colores», «Poner los lápices de corto a largo», los calcetines por parejas).
  Pregunta solo «revolver»: «lo contrario de separar» ya es la pregunta de `unir`, y `juntar` también.
  `ordenar` tiene `mezclar` de contraria: no la pregunta hasta que se presente `mezclar`.
- `decorar` pregunta «adornar». `detalle` (semana 22) tiene `adorno` en su `rel.mas`, y `decorar`
  tiene `detalle`: se ayudan, pero no se preguntan.
- `profundo` pregunta «hondo»; su contraria de todos los días es «poco profundo» (de su familia) y
  `llano` no sirve para todo (un plato llano sí, un río no): sin contraria. El no-ejemplo «Una montaña
  muy alta» separa profundo (hacia abajo) de alto (hacia arriba).
- `puntiagudo` pregunta «que acaba en punta»; sin contraria (`redondo` no lo es siempre). **Seguridad:**
  el contexto del lápiz, las tijeras y el cactus enseñan cuidado; el «habla» pide buscar sin tocar.
- `acompañar` (bloque `convivir`) frente a `consolar` (semana 23) e `incluir` (semana 21): acompañar
  es **ir o estar con alguien**; consolar es **ayudar a quien está triste**; incluir es **dejar
  jugar**. El no-ejemplo «Dejar a tu hermano esperando solo en la parada» es justo lo contrario (R22; antes era el gesto de `consolar`, que también es estar con alguien).
  Pregunta «ir con» y «lo contrario de dejar solo». **`solo` (semana 26):** el «acaba» evita
  «un compañero está solo» para no adelantar esa escena.
- **Gestos cercanos a vigilar:** `construir` (puños que suben) y `crecer` (mano que sube, semana 10);
  `mezclar` (remover en un bol) y `repetir` (dedo que gira, semana 7); `decorar` (colgar adornos) y
  `cantidad` (tocar la mesa en varios sitios, semana 17); `profundo` (asomarse al borde de la mesa) y
  `raíz` (mano que baja a la tierra, semana 20); `puntiagudo` (tocar las puntas de los dedos) y
  `delicado` (tocar la palma muy flojito, semana 8); `acompañar` (ofrecer el brazo) y `equipo` (brazo
  por los hombros, semana 17).
- Orden recomendado dentro de la semana: construir, mezclar, decorar, profundo, puntiagudo, acompañar.
