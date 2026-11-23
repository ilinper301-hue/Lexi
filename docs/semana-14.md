# Semana 14 · contenido completo (1.º)

Seis palabras escritas con las normas de `docs/pedagogia.md` y el modelo de `docs/semana-01.md`.
Al programar, cada bloque pasa tal cual a `src/js/palabras/s14-<id>.js`.

Semana de los cuentos: tres palabras para hablar de ellos (personaje, título, de repente), una pareja
de contrarias y un sentimiento.

```js
PALABRA({
  id: 'personaje', palabra: 'personaje', silabas: ['per', 'so', 'na', 'je'],
  tipo: 'nombre', nivel: 2, curso: 1, semana: 14, orden: 1, bloque: 'pensar',
  def: 'Un personaje es cada persona, animal o cosa que hace algo en un cuento o una película.',
  otro: null,
  escena: { img: 'personaje.webp', texto: 'Lara lee un cuento con su padre. Salen una tortuga que quiere volar, un pájaro que la ayuda y una nube gruñona. «¿Quién te gusta más?», pregunta su padre. «¡La nube gruñona!», dice Lara. Es su personaje favorito.' },
  contextos: [
    'En carnaval me disfracé de un personaje de cuento.',
    'Mi personaje favorito de los dibujos es un perro que habla.',
    'Dibuja al personaje del cuento que más te ha gustado.'
  ],
  gesto: 'Mete la mano en un títere imaginario y hazlo hablar abriendo y cerrando los dedos.',
  sentido: [
    { t: 'El lobo es el personaje que más miedo da del cuento.', ok: true, por: 'Es un animal que hace cosas en el cuento.' },
    { t: 'La portada es el personaje más bonito del cuento.', ok: false, por: 'La portada no hace nada en la historia.' },
    { t: 'En esta película, el personaje principal es una niña pirata.', ok: true, por: 'Es quien hace las cosas en la película.' },
    { t: 'Mi abuelo escribió el cuento, así que él es un personaje.', ok: false, por: 'Quien lo escribe no sale en la historia.' }
  ],
  ejemplos: [
    { t: 'Una princesa de un cuento', ok: true },
    { t: 'Un dragón de una película', ok: true },
    { t: 'Un conejo que habla en un cuento', ok: true },
    { t: 'La portada del libro', ok: false },
    { t: 'El título del cuento', ok: false },
    { t: 'La persona que escribió el cuento', ok: false }
  ],
  pregunta: '¿Es un personaje?',
  acaba: ['Mi personaje favorito de un cuento es… porque…', 'Si inventara un cuento, mi personaje sería…'],
  habla: 'Piensa en un cuento que te guste. ¿Qué personajes salen? Cuéntaselo a tu compañero.',
  rel: { parecida: [], contraria: [], familia: [], mas: ['protagonista'] }
});

PALABRA({
  id: 'titulo', palabra: 'título', silabas: ['tí', 'tu', 'lo'],
  tipo: 'nombre', nivel: 2, curso: 1, semana: 14, orden: 2, bloque: 'pensar',
  def: 'El título es el nombre de un cuento, un libro, una película o una canción.',
  otro: null,
  escena: { img: 'titulo.webp', texto: 'Leo ha escrito un cuento sobre su perra, que se escapó al parque. Antes de dárselo a la maestra, piensa cómo llamarlo. Arriba del todo escribe, en letras grandes: «Luna se escapa». Ese es el título.' },
  contextos: [
    'Lee el título y adivina de qué trata el cuento.',
    'Mi abuela no se acuerda del título de su canción favorita.',
    'En el cine, el título de la película sale al principio.'
  ],
  gesto: 'Pon una mano plana, como una hoja, y toca con un dedo de la otra su parte de arriba.',
  sentido: [
    { t: 'El título del cuento es «El dragón dormilón».', ok: true, por: 'Es el nombre del cuento.' },
    { t: 'El título está al final de todo, después de «fin».', ok: false, por: 'El título va al principio, arriba o en la portada.' },
    { t: 'Antes de leer, miramos el título para saber de qué trata.', ok: true, por: 'El nombre del cuento da una pista.' },
    { t: 'El título de mi perro es Toby.', ok: false, por: 'Toby es su nombre; un perro no tiene título.' }
  ],
  ejemplos: [
    { t: '«Un viaje a la Luna»', ok: true },
    { t: '«La niña que contaba estrellas»', ok: true },
    { t: '«Aventuras en el fondo del mar»', ok: true },
    { t: 'El nombre de tu hermano', ok: false },
    { t: 'La última frase de un cuento', ok: false },
    { t: 'Un dibujo de la portada', ok: false }
  ],
  pregunta: '¿Es un título?',
  acaba: ['Si escribiera un cuento sobre mi familia, el título sería…', 'Leo el título antes de empezar porque…'],
  habla: 'Inventa con tu compañero un título para un cuento de piratas.',
  rel: { parecida: ['nombre del cuento'], contraria: [], familia: [] }
});

PALABRA({
  id: 'de-repente', palabra: 'de repente', silabas: ['de', 're', 'pen', 'te'],
  tipo: 'enlace', nivel: 2, curso: 1, semana: 14, orden: 3, bloque: 'pensar',
  def: 'Decimos «de repente» cuando algo pasa muy rápido y sin que nadie lo espere.',
  otro: null,
  escena: { img: 'de-repente.webp', texto: 'Carmen merienda tranquila en el parque con su tía. Todo está en calma. Un perro pasa corriendo, ¡zas!, y se lleva su bocadillo. Todo ha pasado de repente.' },
  contextos: [
    'De repente se fue la luz y la casa se quedó a oscuras.',
    'Estábamos en el patio y, de repente, empezó a llover.',
    'Un conejo salió de repente de detrás de un arbusto.'
  ],
  gesto: 'Chasca los dedos una sola vez.',
  sentido: [
    { t: 'Íbamos en bici y, de repente, se pinchó la rueda.', ok: true, por: 'Pasó rápido y nadie lo esperaba.' },
    { t: 'Cada mañana, de repente, me lavo los dientes despacito.', ok: false, por: 'Lo que haces cada día, despacio, no pasa de repente.' },
    { t: 'El globo explotó de repente: ¡pum!', ok: true, por: 'Fue rapidísimo y sin avisar.' },
    { t: 'La planta creció de repente durante muchos meses.', ok: false, por: 'Crecer durante meses es ir poco a poco.' }
  ],
  ejemplos: [
    { t: 'Un trueno en mitad de la noche', ok: true },
    { t: 'Un globo que explota', ok: true },
    { t: 'Un gato que salta de un arbusto', ok: true },
    { t: 'Una planta que crece', ok: false },
    { t: 'El sol que se esconde poco a poco', ok: false },
    { t: 'Un caracol que cruza el camino', ok: false }
  ],
  pregunta: '¿Pasa de repente?',
  acaba: ['Estaba leyendo tranquilo y, de repente, …', 'En mi cuento, de repente, …'],
  habla: 'Inventa con tu compañero una historia corta que tenga «de repente».',
  rel: { parecida: ['de pronto'], contraria: ['poco a poco'], familia: [], mas: ['repentino'] }
});

PALABRA({
  id: 'gracioso', palabra: 'gracioso', silabas: ['gra', 'cio', 'so'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 14, orden: 4, bloque: 'como-son', sep: 'gracioso-serio',
  def: 'Algo o alguien es gracioso cuando te hace reír.',
  otro: null,
  escena: { img: 'gracioso.webp', texto: 'Bruno hace de pingüino en la función del cole. Camina balanceándose, mueve las alas y hace como que resbala en el hielo. El público se ríe a carcajadas. Bruno está muy gracioso.' },
  contextos: [
    'Mi tío cuenta chistes muy graciosos.',
    'Los monos del zoo hacen cosas graciosas.',
    'En el libro de clase hay un dibujo gracioso de una vaca con gafas.'
  ],
  gesto: 'Tápate la boca con la mano y ríete por lo bajo.',
  sentido: [
    { t: 'El payaso era tan gracioso que no paraba de reírme.', ok: true, por: 'Le hacía reír.' },
    { t: 'La película era tan graciosa que lloré de pena.', ok: false, por: 'Lo gracioso hace reír, no llorar de pena.' },
    { t: 'Mi hermano pequeño dice «tolate» por «chocolate», y es muy gracioso.', ok: true, por: 'Su forma de hablar hace reír.' },
    { t: 'El chiste era tan gracioso que nadie se rio.', ok: false, por: 'Si nadie se ríe, no es gracioso.' }
  ],
  ejemplos: [
    { t: 'Un perro con gafas de sol', ok: true },
    { t: 'Un chiste que te hace reír', ok: true },
    { t: 'Un payaso haciendo payasadas', ok: true },
    { t: 'Una rodilla con una herida', ok: false },
    { t: 'Una regañina', ok: false },
    { t: 'Un cuento triste', ok: false }
  ],
  acaba: ['Lo más gracioso que me ha pasado es…', 'Mi amigo es gracioso porque…'],
  habla: 'Cuenta a tu compañero algo gracioso que hayas visto. ¿Os reís?',
  rel: { parecida: ['divertido'], contraria: ['serio'], familia: ['gracia'], mas: ['chistoso'] }
});

PALABRA({
  id: 'serio', palabra: 'serio', silabas: ['se', 'rio'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 14, orden: 5, bloque: 'como-son', sep: 'gracioso-serio',
  def: 'Alguien está serio cuando no sonríe ni bromea, porque piensa en algo importante o está atento.',
  otro: 'También se dice de algo que preocupa mucho: «un problema serio».',
  escena: { img: 'serio.webp', texto: 'Rubén juega al ajedrez con su abuela. No habla ni se ríe: mira las fichas con mucha atención. Su abuela le hace una broma, pero él ni sonríe. Rubén está muy serio.' },
  contextos: [
    'Papá se puso serio y me dijo que no se cruza sin mirar.',
    'El guardia de la puerta del museo tiene cara seria.',
    'Cuando la maestra explica algo importante, se pone seria.'
  ],
  gesto: 'Pon la cara quieta, sin sonreír, y cruza los brazos.',
  sentido: [
    { t: 'El árbitro, muy serio, sacó la tarjeta amarilla.', ok: true, por: 'No bromeaba: era algo importante.' },
    { t: 'Estaba tan serio que no paraba de reír a carcajadas.', ok: false, por: 'Quien está serio no se ríe.' },
    { t: 'Mi hermana se pone seria cuando hace los deberes.', ok: true, por: 'Está atenta y no bromea.' },
    { t: 'El payaso estaba serio: hacía muecas y nos tiraba confeti.', ok: false, por: 'Hacer muecas y bromas es lo contrario de estar serio.' }
  ],
  ejemplos: [
    { t: 'Un jugador de ajedrez pensando', ok: true },
    { t: 'Una cara sin sonrisa', ok: true },
    { t: 'Un guardia en la puerta de un museo', ok: true },
    { t: 'Un payaso haciendo muecas', ok: false },
    { t: 'Un niño riéndose de un chiste', ok: false },
    { t: 'Unos amigos haciendo bromas', ok: false }
  ],
  acaba: ['Me pongo serio cuando…', 'Sé que mi madre está seria porque…'],
  habla: 'Pon cara seria y luego cara graciosa. Tu compañero dice cuál es cuál.',
  rel: { parecida: ['sin sonreír'], contraria: ['gracioso'], familia: ['seriedad'] }
});

PALABRA({
  id: 'asustado', palabra: 'asustado', silabas: ['a', 'sus', 'ta', 'do'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 14, orden: 6, bloque: 'sentir',
  def: 'Estás asustado cuando tienes miedo porque algo te parece peligroso o te ha pillado por sorpresa.',
  otro: null,
  escena: { img: 'asustado.webp', texto: 'Es de noche y hay tormenta. Un trueno enorme suena justo encima de la casa de Vera. Vera se tapa con la manta hasta la nariz y llama a su madre. Vera está asustada.' },
  contextos: [
    'El gatito, asustado, se escondió debajo del sofá.',
    'Me perdí en el supermercado y estaba muy asustado hasta que vi a mi padre.',
    'Los pájaros, asustados por el ruido, salieron volando del árbol.'
  ],
  gesto: 'Echa el cuerpo hacia atrás de golpe, con las manos delante.',
  sentido: [
    { t: 'Al ver la araña tan grande, me quedé asustado.', ok: true, por: 'Le dio miedo.' },
    { t: 'Estaba tan asustado que me reía tranquilo en el sofá.', ok: false, por: 'Quien tiene miedo no está tranquilo.' },
    { t: 'El perro estaba asustado con los petardos y temblaba.', ok: true, por: 'Los petardos le daban miedo.' },
    { t: 'Me asusté porque me dieron un abrazo calentito.', ok: false, por: 'Un abrazo no da miedo.' }
  ],
  ejemplos: [
    { t: 'Oír un ruido raro de noche', ok: true },
    { t: 'Ver un perro enorme que ladra', ok: true },
    { t: 'Perderte en un sitio con mucha gente', ok: true },
    { t: 'Abrazar a tu peluche', ok: false },
    { t: 'Merendar con tu familia', ok: false },
    { t: 'Recibir una sorpresa bonita', ok: false }
  ],
  acaba: ['Me asusto cuando…', 'Si un amigo está asustado, yo…'],
  habla: '¿Qué haces cuando estás asustado? ¿Qué te ayuda a calmarte?',
  rel: { parecida: ['con miedo'], contraria: ['valiente'], familia: ['susto', 'asustar'], mas: ['aterrorizado'] }
});
```

## Notas para quien programe

- Los `id` sin tilde y con guion: `titulo`, `de-repente` (dos palabras, como `ser-vivo`; tres sílabas
  más una: de-re-pen-te).
- **Nombres** (`personaje`, `título`): llevan `pregunta` con artículo («¿Es un personaje?», «¿Es un
  título?»). Los ejemplos de `título` son títulos inventados, entre comillas; ninguno es de un libro de
  verdad.
- **Enlace** `de repente`: pregunta «¿Pasa de repente?». Enlaza con `sorprendido` (semana 3: lo que no
  se espera) y con los cuentos de la semana. Su gesto (chascar los dedos) es para no repetir la palmada
  de `finalmente`; si un niño no sabe chascar, vale una palmada pequeña con los dedos.
- `gracioso` y `serio` son contrarias y llevan `sep: 'gracioso-serio'`. `serio` tiene segundo
  significado (`otro`): un problema serio. Estar serio no es estar enfadado: la escena es de
  concentración (ajedrez), no de tristeza.
- `asustado` es la contraria de `valiente` (semana 2). La definición no dice «sorprendido» para no
  repetir la palabra de la semana 3; se distinguen en los ejemplos («una sorpresa bonita» no asusta).
- Orden recomendado dentro de la semana: personaje, título, de repente, gracioso, serio, asustado.
