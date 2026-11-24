# Semana 22 · contenido completo (1.º)

Seis palabras escritas con las normas de `docs/pedagogia.md` y el modelo de `docs/semana-01.md`.
Al programar, cada bloque pasa tal cual a `src/js/palabras/s22-<id>.js`.

Tres palabras para pensar (fijarse, detalle, idea), dos de cómo son las cosas (extraño, único) y un
sentimiento (confundido). Es la semana de «mirar bien y pensar».

```js
PALABRA({
  id: 'fijarse', palabra: 'fijarse', silabas: ['fi', 'jar', 'se'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 22, orden: 1, bloque: 'pensar',
  def: 'Fijarse es prestar atención a algo, mirando o escuchando bien, para darte cuenta de cómo es.',
  otro: null,
  escena: { img: 'fijarse.webp', texto: 'Leo y su padre buscan su coche en un aparcamiento lleno. Hay muchos coches rojos. Leo mira despacio y ve uno con una pegatina de una ballena. ¡Es el suyo! Leo se ha fijado muy bien.' },
  contextos: [
    'En casa me fijo en la cara de mi madre para saber si está cansada.',
    'En clase, fíjate bien en la letra antes de copiarla.',
    'En el campo me fijé en un pájaro que tenía la cola azul.'
  ],
  gesto: 'Con el dedo índice, tira un poco hacia abajo de la piel de debajo del ojo: «¡ojo!».',
  sentido: [
    { t: 'Me fijé en que mi amiga llevaba un lazo nuevo.', ok: true, por: 'Lo miró bien y se dio cuenta.' },
    { t: 'Me fijé muy bien en el dibujo mientras miraba hacia otro lado.', ok: false, por: 'Si miras hacia otro lado, no te fijas en el dibujo.' },
    { t: 'Si te fijas, en cada página del cuento hay un ratón escondido.', ok: true, por: 'Mirando con atención se descubre el ratón.' },
    { t: 'Como no me fijé, vi enseguida que faltaba una pieza.', ok: false, por: 'Si no te fijas, no te das cuenta.' }
  ],
  ejemplos: [
    { t: 'Mirar bien dos dibujos para encontrar las diferencias', ok: true },
    { t: 'Escuchar con atención para saber qué pájaro canta', ok: true },
    { t: 'Darte cuenta de que tu amigo se ha cortado el pelo', ok: true },
    { t: 'Mirar por la ventana pensando en otra cosa', ok: false },
    { t: 'Escribir sin mirar lo que escribes', ok: false },
    { t: 'Pasar al lado de un amigo sin verlo', ok: false }
  ],
  acaba: ['Al venir al colegio me he fijado en…', 'Si me fijo bien en la cara de un amigo, puedo saber…'],
  habla: 'Mira a tu compañero un ratito y cierra los ojos. ¿En qué te has fijado?',
  rel: { parecida: ['prestar atención'], contraria: [], familia: [], mas: ['observar', 'darse cuenta', 'despistarse'] }
});

PALABRA({
  id: 'detalle', palabra: 'detalle', silabas: ['de', 'ta', 'lle'],
  tipo: 'nombre', nivel: 2, curso: 1, semana: 22, orden: 2, bloque: 'pensar',
  def: 'Un detalle es una parte pequeña de algo, que solo ves si miras con mucha atención.',
  otro: null,
  escena: { img: 'detalle.webp', texto: 'Daniela pinta una mariquita para el mural de la clase. Al terminar, le añade puntos negros en la espalda y dos antenas finitas. Su maestra le dice: «¡Qué bonita! No se te ha escapado ni un detalle».' },
  contextos: [
    'En el dibujo del cuento hay muchos detalles: ¡hasta una hormiga!',
    'Mi casa de muñecas tiene detalles muy pequeños, como tazas diminutas.',
    'En el parque vi un detalle precioso: una gota de agua en una flor.'
  ],
  gesto: 'Recorre despacio, con la punta de un dedo, las rayitas de la palma de la otra mano.',
  sentido: [
    { t: 'En la foto, mi abuelo encontró un detalle: un gato en la ventana.', ok: true, por: 'Era algo pequeño que había que mirar bien.' },
    { t: 'El detalle más pequeño del elefante es su cuerpo.', ok: false, por: 'El cuerpo es lo más grande, no un detalle.' },
    { t: 'El vestido tiene detalles bordados en las mangas.', ok: true, por: 'Son partes pequeñas del vestido.' },
    { t: 'Vi el detalle desde muy lejos, casi sin mirar.', ok: false, por: 'Un detalle solo se ve mirando con atención.' }
  ],
  ejemplos: [
    { t: 'Las pestañas en el dibujo de una cara', ok: true },
    { t: 'Un botón pequeño en el abrigo de un muñeco', ok: true },
    { t: 'Una mariquita escondida en una hoja del dibujo', ok: true },
    { t: 'Todo el tejado de una casa', ok: false },
    { t: 'El dibujo entero', ok: false },
    { t: 'El tronco de un árbol enorme', ok: false }
  ],
  pregunta: '¿Es un detalle?',
  acaba: ['En mi dibujo voy a poner un detalle: …', 'En esta imagen hay un detalle que casi nadie ve: …'],
  habla: 'Busca un detalle pequeño de la clase y descríbeselo a tu compañero sin señalarlo. ¿Lo encuentra?',
  rel: { parecida: [], contraria: [], familia: ['detallado'], mas: ['parte', 'adorno'] }
});

PALABRA({
  id: 'idea', palabra: 'idea', silabas: ['i', 'de', 'a'],
  tipo: 'nombre', nivel: 2, curso: 1, semana: 22, orden: 3, bloque: 'pensar',
  def: 'Una idea es algo que se te ocurre en la cabeza, como un plan o un invento.',
  otro: null,
  escena: { img: 'idea.webp', texto: 'Paula y Mateo quieren jugar al fútbol en el parque, pero no tienen portería. Mateo mira a su alrededor y ve sus dos mochilas. «¡Ya sé! Las ponemos como postes», dice. ¡Qué buena idea!' },
  contextos: [
    'A mi hermana se le ocurrió la idea de hacer un fuerte con cojines.',
    'En clase, cada grupo dio una idea para decorar la puerta.',
    'En la playa tuve una idea: hacer un río para el castillo de arena.'
  ],
  gesto: 'Cierra el puño encima de la cabeza y ábrelo de golpe, como una bombilla que se enciende.',
  sentido: [
    { t: 'Tengo una idea: ¡vamos a regalarle a mamá un dibujo!', ok: true, por: 'Se le ha ocurrido algo para hacer.' },
    { t: 'Tengo una idea en el bolsillo; si quieres, te la presto.', ok: false, por: 'Las ideas se piensan: no se guardan en el bolsillo.' },
    { t: 'Fue idea de Rosa poner música en el recreo.', ok: true, por: 'A Rosa se le ocurrió primero.' },
    { t: 'No sabía qué dibujar porque tenía muchísimas ideas.', ok: false, por: 'Si tienes muchas ideas, sí sabes qué dibujar.' }
  ],
  ejemplos: [
    { t: 'Pensar en usar una caja como barco', ok: true },
    { t: 'Que se te ocurra un nombre para el perro', ok: true },
    { t: 'Pensar un juego nuevo para el recreo', ok: true },
    { t: 'Una caja de cartón', ok: false },
    { t: 'Una piedra', ok: false },
    { t: 'Un lápiz', ok: false }
  ],
  pregunta: '¿Es una idea?',
  acaba: ['Tengo una idea para el recreo: …', 'Cuando no se me ocurre ninguna idea, yo…'],
  habla: 'Dad entre los dos una idea para que la clase esté más bonita.',
  rel: { parecida: [], contraria: [], familia: ['idear'], mas: ['plan', 'ocurrencia', 'pensamiento'] }
});

PALABRA({
  id: 'extrano', palabra: 'extraño', silabas: ['ex', 'tra', 'ño'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 22, orden: 4, bloque: 'como-son', sep: 'extrano-unico',
  def: 'Algo es extraño cuando es muy distinto de lo normal y no sabes muy bien qué es.',
  otro: null,
  escena: { img: 'extrano.webp', texto: 'Martín abre la nevera para coger la leche. Dentro, junto a los yogures, hay un zapato. Martín cierra la puerta y la vuelve a abrir. ¡Qué cosa tan extraña!' },
  contextos: [
    'Anoche oí un ruido extraño en la cocina: era el gato.',
    'En el bosque encontramos una seta extraña, con lunares azules.',
    'En el colegio pasó algo extraño: el timbre sonó tres veces seguidas.'
  ],
  gesto: 'Inclina la cabeza y arruga la nariz mirando algo imaginario.',
  sentido: [
    { t: 'Mi perro hoy está extraño: no quiere salir a pasear.', ok: true, por: 'No hace lo de siempre.' },
    { t: 'Es muy extraño que el sol salga por la mañana.', ok: false, por: 'Eso pasa todos los días: es lo normal.' },
    { t: 'En el cuento sale un animal extraño, con orejas de conejo y trompa de elefante.', ok: true, por: 'No se parece a ningún animal que conozcamos.' },
    { t: 'Me pareció extraño ver a mi madre en casa, porque vivimos juntos.', ok: false, por: 'Si vivís juntos, es lo normal.' }
  ],
  ejemplos: [
    { t: 'Un pez que camina por la calle', ok: true },
    { t: 'Nieve en pleno verano', ok: true },
    { t: 'Un ruido que no sabes de dónde sale', ok: true },
    { t: 'Un perro que ladra', ok: false },
    { t: 'Llevar zapatos en los pies', ok: false },
    { t: 'Un collar que solo tiene tu abuela', ok: false }
  ],
  acaba: ['Lo más extraño que he visto es… porque…', 'Sería muy extraño que en clase…'],
  habla: 'Inventad entre los dos un animal extraño. ¿Cómo es?',
  rel: { parecida: ['raro'], contraria: ['normal'], familia: ['extrañeza'], mas: ['curioso', 'sorprendente', 'diferente'] }
});

PALABRA({
  id: 'unico', palabra: 'único', silabas: ['ú', 'ni', 'co'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 22, orden: 5, bloque: 'como-son', sep: 'extrano-unico',
  def: 'Algo es único cuando no hay otro igual en ningún sitio.',
  otro: null,
  escena: { img: 'unico.webp', texto: 'El abuelo de Lola hace figuras de madera. Hoy le ha hecho un búho con un ojo abierto y otro cerrado, solo para ella. No hay otro búho igual en el mundo. ¡Es único!' },
  contextos: [
    'En casa, la taza que pintó mi hermano es única.',
    'En clase, el dibujo de cada uno es único.',
    'En la naturaleza, cada copo de nieve es único: no hay dos iguales.'
  ],
  gesto: 'Levanta un solo dedo y gíralo despacio, enseñándolo a todos.',
  sentido: [
    { t: 'Este dibujo es único: lo hice yo y no hay otro.', ok: true, por: 'No hay otro igual.' },
    { t: 'Mi mochila es única: en la tienda había cien iguales.', ok: false, por: 'Si hay muchas iguales, no es única.' },
    { t: 'Cada persona es única, aunque se parezca a otra.', ok: true, por: 'No hay dos personas iguales del todo.' },
    { t: 'Tengo un cromo único: lo tengo cinco veces repetido.', ok: false, por: 'Si lo tienes repetido, no es único.' }
  ],
  ejemplos: [
    { t: 'Una carta que tu abuela te ha escrito solo a ti', ok: true },
    { t: 'Las huellas de tus dedos', ok: true },
    { t: 'Un jarrón que alguien hizo a mano', ok: true },
    { t: 'Una botella de agua igual que las demás de la tienda', ok: false },
    { t: 'Un lápiz de una caja de lápices iguales', ok: false },
    { t: 'Un ruido raro en la cocina', ok: false }
  ],
  acaba: ['Una cosa única que tengo es… porque…', 'Cada niño de la clase es único porque…'],
  habla: 'Di a tu compañero algo que te hace único. ¿Y a él, qué le hace único?',
  rel: { parecida: ['sin otro igual'], contraria: ['repetido'], familia: ['únicamente'], mas: ['especial', 'solo', 'extraño'] }
});

PALABRA({
  id: 'confundido', palabra: 'confundido', silabas: ['con', 'fun', 'di', 'do'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 22, orden: 6, bloque: 'sentir',
  def: 'Estás confundido cuando no entiendes bien lo que pasa y no sabes qué hacer.',
  otro: null,
  escena: { img: 'confundido.webp', texto: 'En el comedor, Andrés oye: «¡Los de primero, a la fila!». Y enseguida: «¡No, no, los de primero, sentados!». Andrés se levanta y se vuelve a sentar. Andrés está confundido.' },
  contextos: [
    'En casa me quedé confundido cuando mi primo me explicó un juego con muchas normas a la vez.',
    'En clase, si estás confundido, puedes preguntar otra vez.',
    'En el bosque estábamos confundidos: todos los caminos parecían iguales.'
  ],
  gesto: 'Encoge los hombros, abre las manos con las palmas hacia arriba y arruga la frente.',
  sentido: [
    { t: 'Estaba confundida: había dos niñas con mi nombre y no sabía a cuál llamaban.', ok: true, por: 'No entendía bien qué pasaba.' },
    { t: 'Estaba confundido porque lo entendí todo a la primera.', ok: false, por: 'Si lo entiendes todo, no estás confundido.' },
    { t: 'Cuando cambiaron la clase de sitio, me quedé confundido en el pasillo.', ok: true, por: 'No sabía adónde ir.' },
    { t: 'Me quedé confundido con la boca abierta porque me regalaron un perro.', ok: false, por: 'Eso es estar sorprendido: entiendes lo que pasa, pero no lo esperabas.' }
  ],
  ejemplos: [
    { t: 'No saber qué fila es la tuya', ok: true },
    { t: 'Que te digan dos cosas distintas a la vez', ok: true },
    { t: 'No entender las normas de un juego nuevo', ok: true },
    { t: 'Saber muy bien lo que hay que hacer', ok: false },
    { t: 'Abrir la boca porque te dan una sorpresa', ok: false },
    { t: 'Entender un cuento a la primera', ok: false }
  ],
  acaba: ['Me siento confundido cuando…', 'Si estoy confundido en clase, puedo…'],
  habla: 'Cuenta a tu compañero una vez que estuviste confundido. ¿Qué te ayudó?',
  rel: { parecida: ['liado'], contraria: [], familia: ['confundir', 'confusión'], mas: ['despistado', 'perdido', 'sorprendido'] }
});
```

## Notas para quien programe

- **Semana de «mirar bien y pensar»:** fijarse y detalle van juntas (fijarse es lo que se hace,
  detalle lo que se encuentra); idea es lo que se te ocurre después. Extraño y único enseñan dos
  maneras de «no ser como lo demás». Confundido cierra con un sentimiento que sale cuando no
  entendemos algo, y el «acaba» enseña qué hacer (preguntar).
- `fijarse` frente a `observar` (semana 1): observar es **mirar despacio un rato** para saber cómo es
  algo; fijarse es **prestar atención** a algo, también con los oídos, para darte cuenta. `observar`
  tiene «fijarse» como pregunta de `relaciona`: como `fijarse` ya está en `PAQUETE_1`, `observar` solo
  pregunta «mirar con atención» hasta que se presente `fijarse` (mismo caso que `marcar` y `señalar`).
  `fijarse` pregunta «prestar atención»; `observar` va en su `rel.mas`. `fijarse` no tiene familia
  que un niño de 6 años diga.
- **Nombres:** `detalle` («¿Es un detalle?») e `idea` («¿Es una idea?»). Los no-ejemplos de `detalle`
  son cosas enteras o grandes; los de `idea`, cosas y acciones que no se piensan. Ninguna de las dos
  tiene preguntas de `relaciona` (ninguna palabra de todos los días significa lo mismo); les quedan
  `acaba` y `habla`.
- `proponer` (semana 21) usa «idea» en su definición y en su pregunta («dar una idea»): es a propósito,
  las dos semanas se ayudan.
- `extraño` frente a `único`: extraño es **distinto de lo normal**, y no sabes bien qué es; único es que
  **no hay otro igual**, aunque sea algo normal (una taza, un dibujo). Cada una lleva un no-ejemplo de
  la otra («Un collar que solo tiene tu abuela» en `extraño`, «Un ruido raro en la cocina» en `único`).
  Llevan `sep: 'extrano-unico'` y cada una está en `rel.mas` de la otra.
- `extraño` pregunta «raro» y «lo contrario de normal». `único` pregunta «sin otro igual» y «lo
  contrario de repetido» (`repetido` es de la familia de `repetir`, no de `único`: se puede preguntar).
- `confundido` frente a `sorprendido` (semana 3): confundido es **no entender qué pasa**; sorprendido es
  entenderlo pero **no esperarlo**. El no-ejemplo «me regalaron un perro» lo marca. Pregunta «liado».
  `equivocarse` (semana 18) ya llevaba `confundirse` en `rel.mas` para no chocar con esta palabra.
- **Gestos cercanos a vigilar:** `fijarse` («¡ojo!» bajo el ojo) y `observar` (prismáticos, semana 1);
  `idea` (puño que se abre sobre la cabeza) y `solución` (dedo que se levanta junto a la cabeza,
  semana 8) e `imaginar` (nube que sale de la cabeza, semana 6); `único` (un dedo que gira) y `primero`
  (índice bien alto, semana 4); `confundido` (hombros y palmas arriba) y `faltar` (palmas arriba
  buscando, semana 13); `detalle` (recorrer la palma con un dedo) y `delicado` (tocar la palma muy
  flojito, semana 8); `extraño` (una ceja levantada) y `curioso` (cabeza ladeada, semana 1).
- Orden recomendado dentro de la semana: fijarse, detalle, idea, extraño, único, confundido.
