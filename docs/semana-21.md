# Semana 21 · contenido completo (1.º)

Seis palabras escritas con las normas de `docs/pedagogia.md` y el modelo de `docs/semana-01.md`.
Al programar, cada bloque pasa tal cual a `src/js/palabras/s21-<id>.js`.

Dos palabras para hablar en grupo (opinar, proponer), dos de cómo son las cosas (importante, valioso),
un sentimiento (celoso) y una de convivir (incluir). Es la semana de «todos tenemos algo que decir».

```js
PALABRA({
  id: 'opinar', palabra: 'opinar', silabas: ['o', 'pi', 'nar'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 21, orden: 1, bloque: 'pensar', sep: 'opinar-proponer',
  def: 'Opinar es decir lo que tú piensas de algo, aunque otros piensen distinto.',
  otro: null,
  escena: { img: 'opinar.webp', texto: 'La maestra enseña la portada de un cuento nuevo y pregunta: «¿Os gusta?». Irene levanta la mano. «A mí me gusta mucho, porque el dragón parece simpático», dice. Irene ha opinado.' },
  contextos: [
    'En casa, cada uno opina qué película vemos el sábado.',
    'En la asamblea, todos opinamos sobre el nombre de la mascota de la clase.',
    'Mi abuelo opina que el parque es más bonito en otoño.'
  ],
  gesto: 'Señálate el pecho con el pulgar y después abre la mano hacia los demás.',
  sentido: [
    { t: 'Opino que el helado de fresa es el más rico.', ok: true, por: 'Dice lo que piensa; a otro le puede gustar otro.' },
    { t: 'Opino que hoy es lunes.', ok: false, por: 'Eso no se opina: se mira en el calendario.' },
    { t: 'Le pregunté a mi hermana qué opinaba de mi dibujo.', ok: true, por: 'Quería saber lo que ella pensaba.' },
    { t: 'Opiné muy bien, pero solo dentro de mi cabeza.', ok: false, por: 'Si no lo dices, lo piensas, pero no opinas.' }
  ],
  ejemplos: [
    { t: 'Decir que un cuento te ha parecido divertido', ok: true },
    { t: 'Decir qué juego te parece mejor para el recreo', ok: true },
    { t: 'Decir si te gusta más la playa o la montaña', ok: true },
    { t: 'Decir cuántas patas tiene una araña', ok: false },
    { t: 'Leer en voz alta el título de un cuento', ok: false },
    { t: 'Pensar algo y no decírselo a nadie', ok: false }
  ],
  acaba: ['Yo opino que el mejor juego del recreo es… porque…', 'Cuando alguien opina distinto que yo, …'],
  habla: 'Opina con tu compañero: ¿qué es mejor, el verano o el invierno? ¿Por qué?',
  rel: { parecida: ['decir lo que piensas'], contraria: [], familia: ['opinión'], mas: ['pensar', 'creer'] }
});

PALABRA({
  id: 'proponer', palabra: 'proponer', silabas: ['pro', 'po', 'ner'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 21, orden: 2, bloque: 'pensar', sep: 'opinar-proponer',
  def: 'Proponer es contar a los demás una idea para hacer algo, por si quieren hacerla.',
  otro: null,
  escena: { img: 'proponer.webp', texto: 'Llueve y no se puede salir al recreo. Hugo mira a sus amigos y dice: «¿Y si jugamos a las adivinanzas?». Todos dicen que sí. Hugo ha propuesto un juego.' },
  contextos: [
    'En casa propuse merendar todos juntos en el balcón.',
    'La maestra nos propone dos cuentos y votamos uno.',
    'En el parque, mi amiga propuso jugar al escondite.'
  ],
  gesto: 'Con las dos manos, deja algo imaginario en el centro de la mesa y mira a los demás.',
  sentido: [
    { t: 'Propuse a mi familia ir al campo el domingo.', ok: true, por: 'Contó su idea por si querían ir.' },
    { t: 'Le propuse a Leo jugar a la pelota y lo obligué a jugar.', ok: false, por: 'Si propones, los demás pueden decir que no.' },
    { t: 'Ana propuso pintar el mural de azul, y lo votamos.', ok: true, por: 'Dio una idea para que los demás la pensaran.' },
    { t: 'Propuse que ayer fuera mi cumpleaños.', ok: false, por: 'Lo que ya pasó no se propone: se propone lo que se puede hacer.' }
  ],
  ejemplos: [
    { t: '«¿Y si hacemos una cabaña con cojines?»', ok: true },
    { t: '«Podemos regar las plantas entre todos, ¿os parece?»', ok: true },
    { t: '«¿Jugamos a las palmas en el recreo?»', ok: true },
    { t: '«¡Recoge ya los juguetes!»', ok: false },
    { t: '«Este cuento es precioso»', ok: false },
    { t: '«Ayer jugamos a las palmas»', ok: false }
  ],
  acaba: ['Para el recreo de mañana propongo… porque…', 'Si propongo algo y a los demás no les gusta, …'],
  habla: 'Propón a tu compañero un juego para un día de lluvia. ¿Le parece bien?',
  rel: { parecida: ['dar una idea'], contraria: [], familia: ['propuesta'], mas: ['sugerir', 'decidir', 'mandar'] }
});

PALABRA({
  id: 'importante', palabra: 'importante', silabas: ['im', 'por', 'tan', 'te'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 21, orden: 3, bloque: 'como-son', sep: 'importante-valioso',
  def: 'Algo es importante cuando cuenta mucho y no lo podemos olvidar ni dejar para luego.',
  otro: null,
  escena: { img: 'importante.webp', texto: 'Mañana es la excursión a la granja. La maestra lo repite dos veces: «Traed gorra y agua». Raúl lo dibuja en un papel y lo pega en la nevera. ¡Es algo muy importante!' },
  contextos: [
    'En casa es importante cerrar el grifo para no gastar agua.',
    'En clase, escuchar cuando habla otro es importante.',
    'En la calle es importante cruzar por el paso de cebra.'
  ],
  gesto: 'Da dos golpecitos fuertes en la mesa con el dedo índice: «¡esto!».',
  sentido: [
    { t: 'Es importante ponerse el casco para montar en bici.', ok: true, por: 'Cuenta mucho: protege la cabeza.' },
    { t: 'El color de mis calcetines es lo más importante de la excursión.', ok: false, por: 'Eso no cuenta nada: lo que cuenta es llevar gorra y agua.' },
    { t: 'Antes de comer es importante lavarse las manos.', ok: true, por: 'No se nos puede olvidar.' },
    { t: 'Tengo una noticia importante: he pestañeado.', ok: false, por: 'Pestañear pasa siempre: no cuenta nada.' }
  ],
  ejemplos: [
    { t: 'Abrocharse el cinturón en el coche', ok: true },
    { t: 'Cruzar la calle con el semáforo en verde', ok: true },
    { t: 'Avisar a un adulto si alguien se hace daño', ok: true },
    { t: 'El color del lápiz con el que escribes', ok: false },
    { t: 'Qué calcetín te pones primero', ok: false },
    { t: 'Si la pelota del recreo es roja o azul', ok: false }
  ],
  acaba: ['Para mí, lo más importante de un amigo es… porque…', 'Antes de salir de casa es importante no olvidar… porque…'],
  habla: 'Decid entre los dos una norma importante de la clase. ¿Por qué lo es?',
  rel: { parecida: ['que cuenta mucho'], contraria: ['que da igual'], familia: ['importar', 'importancia'], mas: ['principal', 'necesario', 'valioso'] }
});

PALABRA({
  id: 'valioso', palabra: 'valioso', silabas: ['va', 'lio', 'so'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 21, orden: 4, bloque: 'como-son', sep: 'importante-valioso',
  def: 'Algo es valioso cuando lo cuidamos como un tesoro, porque cuesta mucho dinero o lo queremos mucho.',
  otro: null,
  escena: { img: 'valioso.webp', texto: 'Sara guarda en una cajita una concha que encontró con su abuela. No es de oro y no cuesta dinero. Pero cada vez que la mira, Sara se acuerda de aquel día. Para Sara, la concha es muy valiosa.' },
  contextos: [
    'En el museo hay cuadros antiguos muy valiosos.',
    'La foto de cuando nací es valiosa para mi familia.',
    'En el cuento, el pirata enterró un cofre con monedas valiosas.'
  ],
  gesto: 'Aprieta contra el pecho, con las dos manos, algo imaginario, como un tesoro.',
  sentido: [
    { t: 'El collar de la abuela es valioso: era de su madre.', ok: true, por: 'Lo quieren mucho por quién era.' },
    { t: 'Tiré a la basura mi juguete más valioso porque no me importaba nada.', ok: false, por: 'Lo valioso se cuida: no se tira.' },
    { t: 'Las monedas de oro del cofre eran muy valiosas.', ok: true, por: 'Costaban mucho dinero.' },
    { t: 'Un papel arrugado que nadie quiere es muy valioso.', ok: false, por: 'Si nadie lo quiere y no cuesta nada, no es valioso.' }
  ],
  ejemplos: [
    { t: 'Un anillo de oro', ok: true },
    { t: 'El primer dibujo que te regaló tu hermano', ok: true },
    { t: 'Un cuadro muy antiguo de un museo', ok: true },
    { t: 'Un pañuelo de papel usado', ok: false },
    { t: 'Una piedra cualquiera del camino', ok: false },
    { t: 'Acordarte de llevar gorra a la excursión', ok: false }
  ],
  acaba: ['Una cosa valiosa para mí es… porque…', 'Las cosas valiosas hay que… porque…'],
  habla: 'Cuenta a tu compañero qué cosa tuya es valiosa para ti, aunque no cueste dinero.',
  rel: { parecida: ['como un tesoro'], contraria: [], familia: ['valor', 'valer'], mas: ['precioso', 'caro', 'importante'] }
});

PALABRA({
  id: 'celoso', palabra: 'celoso', silabas: ['ce', 'lo', 'so'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 21, orden: 5, bloque: 'sentir',
  def: 'Te sientes celoso cuando te da miedo que alguien te quite el cariño de quien quieres.',
  otro: null,
  escena: { img: 'celoso.webp', texto: 'Ha nacido Alba, la hermanita de Marcos. Todos la cogen en brazos y le hacen mimos. Marcos se sienta detrás del sofá con los brazos cruzados. Marcos está un poco celoso.' },
  contextos: [
    'Mi perro se pone celoso cuando acaricio al gato.',
    'En el recreo me sentí celosa cuando mi mejor amiga jugó con otra niña.',
    'Es normal estar celoso de un hermano pequeño al principio.'
  ],
  gesto: 'Tira dos veces de una manga imaginaria, a tu lado, como diciendo «¡mírame a mí!».',
  sentido: [
    { t: 'Me puse celosa cuando mi abuela solo hacía caso a mi primo.', ok: true, por: 'Le daba miedo perder el cariño de la abuela.' },
    { t: 'Me puse celoso porque Juan tenía una bici nueva y yo no.', ok: false, por: 'Querer lo que tiene otro es envidia, no celos.' },
    { t: 'El gato está celoso del perrito nuevo de casa.', ok: true, por: 'Tiene miedo de que le quiten los mimos.' },
    { t: 'Estoy celoso porque todos me hacen mucho caso.', ok: false, por: 'Si te hacen caso, no tienes miedo de perderlo.' }
  ],
  ejemplos: [
    { t: 'Enfadarte cuando tu madre abraza a tu hermano pequeño', ok: true },
    { t: 'Querer que tu amigo juegue solo contigo, y no con otros', ok: true },
    { t: 'Un perro que ladra cuando acarician a otro perro', ok: true },
    { t: 'Querer el balón nuevo de tu primo', ok: false },
    { t: 'Estar contento porque tu hermano te abraza', ok: false },
    { t: 'Tener miedo de una tormenta', ok: false }
  ],
  acaba: ['A veces me pongo celoso cuando…', 'Si estoy celoso, me ayuda…'],
  habla: '¿Qué podemos hacer si un amigo está celoso porque jugamos con otros?',
  rel: { parecida: [], contraria: [], familia: ['celos'], mas: ['envidioso'] }
});

PALABRA({
  id: 'incluir', palabra: 'incluir', silabas: ['in', 'clu', 'ir'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 21, orden: 6, bloque: 'convivir',
  def: 'Incluir es hacer sitio a alguien en un juego o en un grupo para que esté con todos.',
  otro: null,
  escena: { img: 'incluir.webp', texto: 'En el recreo, unos niños saltan a la comba. Nadia, la niña nueva, los mira desde lejos. Pablo se acerca y le dice: «¿Saltas con nosotros?». Pablo ha incluido a Nadia en el juego.' },
  contextos: [
    'En casa, mis hermanos mayores me incluyen en sus juegos de mesa.',
    'En clase incluimos a todos cuando hacemos los grupos.',
    'En el parque, unos niños incluyeron a mi primo en su partido.'
  ],
  gesto: 'Mueve la mano hacia ti varias veces, como diciendo «¡ven con nosotros!».',
  sentido: [
    { t: 'Incluimos a Mario en el equipo, aunque llegó tarde.', ok: true, por: 'Le hicieron sitio para jugar con ellos.' },
    { t: 'Incluimos a Lucía y le dijimos que no podía jugar.', ok: false, por: 'Si no la dejas jugar, la dejas fuera.' },
    { t: 'La maestra incluyó a todos en la obra de teatro.', ok: true, por: 'Todos tenían un sitio en la obra.' },
    { t: 'Para incluir a mi amigo, me fui a jugar yo solo.', ok: false, por: 'Incluir es estar juntos, no irse solo.' }
  ],
  ejemplos: [
    { t: 'Invitar a jugar a un niño que está solo', ok: true },
    { t: 'Hacer sitio en la mesa a un compañero nuevo', ok: true },
    { t: 'Cambiar un poco el juego para que todos puedan jugar', ok: true },
    { t: 'Decir «tú no juegas»', ok: false },
    { t: 'Jugar siempre con los mismos y no dejar entrar a nadie', ok: false },
    { t: 'Mirar desde lejos cómo juegan otros', ok: false }
  ],
  acaba: ['Para incluir a un niño nuevo, yo…', 'Me gusta que me incluyan porque…'],
  habla: 'Pensad juntos un juego en el que puedan jugar todos los de la clase.',
  rel: { parecida: ['dejar jugar'], contraria: ['dejar fuera'], familia: ['incluido'], mas: ['excluir', 'apartar', 'invitar'] }
});
```

## Notas para quien programe

- **Semana de «todos tenemos algo que decir»:** opinar y proponer son las dos maneras de hablar en
  grupo (asamblea, trabajo por mesas); importante y valioso enseñan a distinguir dos cualidades
  cercanas; celoso e incluir son convivencia. Ningún ejemplo culpa a un niño: estar celoso es normal
  («al principio»), y el «habla» de `celoso` pide pensar cómo ayudar.
- `opinar` frente a `proponer`: opinar es decir **lo que piensas de algo** (te gusta o no, qué es
  mejor); proponer es dar **una idea para hacer algo**, que los demás pueden aceptar o no. El
  no-ejemplo «Este cuento es precioso» de `proponer` es justo una opinión. Llevan
  `sep: 'opinar-proponer'` (días distintos).
- `opinar` frente a saber: los no-ejemplos «Opino que hoy es lunes» y «cuántas patas tiene una araña»
  son cosas que se miran o se saben, no se opinan.
- `proponer` frente a mandar: «¡Recoge ya los juguetes!» y «lo obligué a jugar». `mandar` va en
  `rel.mas`. Su pregunta de `relaciona` es «dar una idea»; `idea` (semana 22) es palabra del paquete,
  pero la pregunta es otra («dar una idea»), así que no se esconde.
- `importante` frente a `valioso`: importante es lo que **cuenta mucho y no se puede olvidar** (normas,
  cuidados); valioso es lo que **se cuida como un tesoro** porque cuesta mucho o se quiere mucho. El
  no-ejemplo «Acordarte de llevar gorra a la excursión» de `valioso` es justo lo importante de la
  escena de `importante`. Llevan `sep: 'importante-valioso'` y cada una está en `rel.mas` de la otra.
- La definición de `importante` no usa «importa» (es de su familia) y la de `valioso` no usa «vale».
- `importante` pregunta «que cuenta mucho» y «lo contrario de que da igual». `valioso` pregunta solo
  «como un tesoro»: sus contrarias de todos los días son de su familia (sin valor).
- `celoso` frente a envidioso: celos es **miedo a perder el cariño** de alguien; envidia es querer lo
  que tiene otro. El no-ejemplo «Juan tenía una bici nueva» y «el balón nuevo de tu primo» marcan la
  diferencia. `celoso` no tiene preguntas de `relaciona` (`envidioso` no significa lo mismo; va en
  `rel.mas`). Le quedan `acaba` y `habla`. Cuidado en clase: si un niño acaba de tener un hermano, el
  docente puede escoger otro contexto.
- `incluir` (bloque `convivir`) pregunta «dejar jugar» y «lo contrario de dejar fuera». `invitar` va en
  `rel.mas`: invitar es una forma de incluir, no lo mismo.
- **Gestos cercanos a vigilar:** `opinar` (pulgar al pecho) y `respetar` (mano abierta en el pecho,
  semana 9); `proponer` (dejar algo en el centro de la mesa) y `explicar` (manos que ofrecen, semana 3);
  `importante` (dos golpecitos con el índice) y `cantidad` (tocar muy deprisa en varios sitios,
  semana 17); `incluir` (mano que llama) y `amable` (saludar con la mano, semana 9).
- Orden recomendado dentro de la semana: opinar, proponer, importante, valioso, celoso, incluir.
