# Semana 12 · contenido completo (1.º)

Seis palabras escritas con las normas de `docs/pedagogia.md` y el modelo de `docs/semana-01.md`.
Al programar, cada bloque pasa tal cual a `src/js/palabras/s12-<id>.js`.

Esta semana trae dos enlaces de lugar (entre, alrededor), que salen mucho en los enunciados («dibuja
una flor entre los dos árboles»). Lee las notas del final antes de programarlas.

```js
PALABRA({
  id: 'entre', palabra: 'entre', silabas: ['en', 'tre'],
  tipo: 'enlace', nivel: 2, curso: 1, semana: 12, orden: 1, bloque: 'pensar',
  def: 'Decimos «entre» cuando algo está en medio de dos cosas: una a cada lado.',
  otro: 'También quiere decir «juntos»: entre todos, recogemos la clase.',
  escena: { img: 'entre.webp', texto: 'Lucas ve una película en el sofá con sus padres. Su madre se sienta a un lado y su padre al otro. Lucas se acurruca en el hueco del medio. Lucas está sentado entre los dos.' },
  contextos: [
    'Dibuja una flor entre los dos árboles.',
    'El río pasa entre las dos montañas.',
    'La panadería está entre la farmacia y el quiosco.'
  ],
  gesto: 'Abre dos dedos de una mano, como una V, y mete en medio un dedo de la otra.',
  sentido: [
    { t: 'El jamón va entre las dos rebanadas de pan.', ok: true, por: 'Está en medio: un pan a cada lado.' },
    { t: 'Me senté entre mi hermano y mi hermana, pero los dos estaban al mismo lado.', ok: false, por: 'Para estar entre, uno tiene que estar a cada lado.' },
    { t: 'El martes está entre el lunes y el miércoles.', ok: true, por: 'Va en medio de los dos.' },
    { t: 'El 5 está entre el 8 y el 9.', ok: false, por: 'El 5 va antes que el 8: no está en medio.' }
  ],
  ejemplos: [
    { t: 'El 2, entre el 1 y el 3', ok: true },
    { t: 'La nariz, entre los dos ojos', ok: true },
    { t: 'El jueves, entre el miércoles y el viernes', ok: true },
    { t: 'El 7, entre el 1 y el 2', ok: false },
    { t: 'El zapato, entre los dos ojos', ok: false },
    { t: 'El domingo, entre el lunes y el martes', ok: false }
  ],
  pregunta: '¿Está bien dicho con «entre»?',
  acaba: ['En mi mesa, entre el estuche y el cuaderno, hay…', 'En la fila, yo estoy entre… y…'],
  habla: 'Mira la clase y di qué hay entre la puerta y la pizarra. Tu compañero busca otra cosa.',
  rel: { parecida: ['en medio'], contraria: [], familia: [] }
});

PALABRA({
  id: 'alrededor', palabra: 'alrededor', silabas: ['al', 're', 'de', 'dor'],
  tipo: 'enlace', nivel: 2, curso: 1, semana: 12, orden: 2, bloque: 'pensar',
  def: 'Decimos «alrededor» cuando algo rodea a otra cosa por todos sus lados.',
  otro: null,
  escena: { img: 'alrededor.webp', texto: 'Es el cumpleaños de Nora y la tarta está en el centro de la mesa. Sus amigos se sientan en todas las sillas, uno al lado de otro. Cantan mientras Nora sopla las velas. Todos están alrededor de la mesa.' },
  contextos: [
    'Dibuja flores alrededor de tu nombre.',
    'Los planetas giran alrededor del Sol.',
    'Hay una valla alrededor del parque.'
  ],
  gesto: 'Haz un aro con los brazos delante de ti, como si abrazaras un tronco.',
  sentido: [
    { t: 'Nos sentamos en corro alrededor de la maestra para oír el cuento.', ok: true, por: 'Están por todos sus lados.' },
    { t: 'Puse un lazo alrededor del regalo, solo en una esquina.', ok: false, por: 'Alrededor es por todos los lados, no en un solo sitio.' },
    { t: 'El perro corre alrededor del árbol sin parar.', ok: true, por: 'Da vueltas por todos sus lados.' },
    { t: 'La mariposa está alrededor de la flor, quieta encima de un pétalo.', ok: false, por: 'Si está quieta encima, no está por todos sus lados.' }
  ],
  ejemplos: [
    { t: 'Una valla alrededor del huerto', ok: true },
    { t: 'Un marco alrededor de la foto', ok: true },
    { t: 'Un cinturón alrededor de la cintura', ok: true },
    { t: 'Un vaso alrededor de la mesa', ok: false },
    { t: 'Una pegatina en el centro de la libreta', ok: false },
    { t: 'Un plato alrededor de la bandeja', ok: false }
  ],
  pregunta: '¿Está bien dicho con «alrededor»?',
  acaba: ['Alrededor de mi casa hay…', 'En el patio, alrededor del árbol, …'],
  habla: 'Mira tu mesa. ¿Qué tienes alrededor? Cuéntaselo a tu compañero.',
  rel: { parecida: ['por todos los lados'], contraria: [], familia: [], mas: ['en torno a'] }
});

PALABRA({
  id: 'separar', palabra: 'separar', silabas: ['se', 'pa', 'rar'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 12, orden: 3, bloque: 'pensar',
  def: 'Separar es apartar cosas o personas que estaban juntas para que queden cada una por su lado.',
  otro: null,
  escena: { img: 'separar.webp', texto: 'Elsa saca del horno las galletas con su madre. Se han pegado unas a otras y parecen una sola galleta enorme. Con cuidado, Elsa las va apartando una a una. Ha separado las galletas.' },
  contextos: [
    'Separa las sílabas con palmadas: ma-ri-po-sa.',
    'En el partido, el árbitro separó a los dos jugadores que discutían.',
    'La gallina se separa un momento de sus pollitos para buscar comida.'
  ],
  gesto: 'Junta las dos manos y luego apártalas despacio hacia los lados.',
  sentido: [
    { t: 'Separé las dos hojas pegadas para poder escribir en una.', ok: true, por: 'Estaban juntas y ahora cada una va por su lado.' },
    { t: 'Separé los colores de mi plastilina mezclándolos todos.', ok: false, por: 'Mezclar es juntar; separar es apartar.' },
    { t: 'Separé un plátano del racimo para llevármelo al cole.', ok: true, por: 'Lo apartó de los demás.' },
    { t: 'Separé las piezas del puzle encajándolas todas.', ok: false, por: 'Encajarlas es unirlas, no separarlas.' }
  ],
  ejemplos: [
    { t: 'Despegar dos pegatinas que se han pegado', ok: true },
    { t: 'Apartar las galletas que se han juntado en la bandeja', ok: true },
    { t: 'Arrancar un plátano del racimo', ok: true },
    { t: 'Pegar dos hojas con pegamento', ok: false },
    { t: 'Atar dos cordones', ok: false },
    { t: 'Montar un tren con piezas', ok: false }
  ],
  acaba: ['Para separar dos hojas pegadas, yo…', 'Separamos a los dos perros porque…'],
  habla: 'Junta tus manos con las de tu compañero y luego separadlas. ¿Qué otras cosas se pueden separar?',
  rel: { parecida: ['apartar'], contraria: ['unir', 'juntar'], familia: ['separación', 'separado'] }
});

PALABRA({
  id: 'helado', palabra: 'helado', silabas: ['he', 'la', 'do'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 12, orden: 4, bloque: 'como-son',
  def: 'Algo está helado cuando está tan frío que casi duele tocarlo.',
  otro: 'También es el dulce frío que se come: un helado de fresa.',
  escena: { img: 'helado.webp', texto: 'Martina vuelve del parque en invierno. Ha jugado con la nieve sin guantes. Al llegar, toca la mejilla de su padre: «¡Ay, qué frío!», grita él. Martina tiene las manos heladas.' },
  contextos: [
    'Por la mañana, el agua del charco estaba helada.',
    'Saca el zumo de la nevera: está helado.',
    'Cuando abrimos la ventana de clase, entró un aire helado.'
  ],
  gesto: 'Abrázate los hombros y tirita, apretando los dientes.',
  sentido: [
    { t: 'El agua del mar estaba helada y salí corriendo.', ok: true, por: 'Estaba muy fría.' },
    { t: 'La sopa está helada: me he quemado la lengua.', ok: false, por: 'Lo que quema está caliente, no helado.' },
    { t: 'Me puse la bufanda porque hacía un viento helado.', ok: true, por: 'El viento estaba muy frío.' },
    { t: 'En agosto, al sol, la arena de la playa estaba helada.', ok: false, por: 'Al sol, en verano, la arena quema.' }
  ],
  ejemplos: [
    { t: 'Un cubito de hielo', ok: true },
    { t: 'La nieve', ok: true },
    { t: 'Un charco congelado', ok: true },
    { t: 'Una taza de chocolate caliente', ok: false },
    { t: 'La arena al sol en verano', ok: false },
    { t: 'Un vaso de leche templada', ok: false }
  ],
  acaba: ['Mis manos se quedan heladas cuando…', 'Si toco un cubito de hielo, noto…'],
  habla: '¿Qué cosas heladas has tocado alguna vez? Cuéntaselo a tu compañero.',
  rel: { parecida: ['muy frío'], contraria: ['caliente'], familia: ['hielo', 'helar'], mas: ['congelado'] }
});

PALABRA({
  id: 'caluroso', palabra: 'caluroso', silabas: ['ca', 'lu', 'ro', 'so'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 12, orden: 5, bloque: 'como-son',
  def: 'Un día o un sitio es caluroso cuando hace tanto calor que sudas y buscas la sombra.',
  otro: null,
  escena: { img: 'caluroso.webp', texto: 'Es agosto y Samuel está en el pueblo de su abuela. El sol pica, las calles están vacías y el perro duerme a la sombra. Samuel se moja la cabeza en la fuente. Es un día muy caluroso.' },
  contextos: [
    'En los días calurosos bebemos mucha agua.',
    'El desierto es un lugar muy caluroso.',
    'En junio, las tardes en clase son calurosas y abrimos las ventanas.'
  ],
  gesto: 'Abanícate la cara con la mano.',
  sentido: [
    { t: 'Era un día tan caluroso que fuimos a la piscina.', ok: true, por: 'Hacía mucho calor.' },
    { t: 'Fue un día caluroso: nevó y nos pusimos el abrigo.', ok: false, por: 'Si nieva, hace frío.' },
    { t: 'La cocina está calurosa con el horno encendido.', ok: true, por: 'El horno da mucho calor.' },
    { t: 'Me puse gorro y bufanda porque el día era caluroso.', ok: false, por: 'Con calor no hacen falta gorro ni bufanda.' }
  ],
  ejemplos: [
    { t: 'Un día de agosto en la playa', ok: true },
    { t: 'Un desierto a mediodía', ok: true },
    { t: 'Una tarde de julio sin sombra', ok: true },
    { t: 'Un día de nieve', ok: false },
    { t: 'Una noche de invierno', ok: false },
    { t: 'Una mañana de otoño con un poco de fresco', ok: false }
  ],
  acaba: ['En un día caluroso me gusta…', 'Sé que hoy es un día caluroso porque…'],
  habla: '¿Qué haces tú en los días calurosos para no pasar calor?',
  rel: { parecida: [], contraria: ['frío'], familia: ['calor'] }
});

PALABRA({
  id: 'timido', palabra: 'tímido', silabas: ['tí', 'mi', 'do'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 12, orden: 6, bloque: 'sentir',
  def: 'Una persona es tímida cuando le da vergüenza hablar o jugar con gente que no conoce bien.',
  otro: null,
  escena: { img: 'timido.webp', texto: 'Hoy llega a clase una niña nueva, Amira. Se queda junto a la puerta, mirando al suelo, y habla muy bajito. Cuando Pedro la invita a jugar, sonríe un poco. Amira es tímida.' },
  contextos: [
    'Mi primo es tímido: cuando viene alguien a casa, se esconde detrás de mi tía.',
    'Al principio de curso yo era tímido, pero ahora hablo con todos.',
    'El gatito del vecino es tímido: se esconde cuando ve gente.'
  ],
  gesto: 'Encoge los hombros, baja la cabeza y mira de reojo.',
  sentido: [
    { t: 'Mi hermana es tímida y le cuesta saludar a los invitados.', ok: true, por: 'Le da vergüenza la gente que no conoce.' },
    { t: 'Es tan tímido que habla con todo el mundo sin parar.', ok: false, por: 'A quien es tímido le cuesta hablar con los demás.' },
    { t: 'El primer día en la piscina, Leo estaba tímido y no hablaba con nadie.', ok: true, por: 'No conocía a nadie y le daba vergüenza.' },
    { t: 'Soy tímida: me encanta subir al escenario y que todos me miren.', ok: false, por: 'A quien es tímido le da vergüenza que lo miren.' }
  ],
  ejemplos: [
    { t: 'Hablar muy bajito con alguien que no conoces', ok: true },
    { t: 'Esconderte detrás de mamá cuando llega una visita', ok: true },
    { t: 'Mirar al suelo al decir tu nombre en un sitio nuevo', ok: true },
    { t: 'Esconderte en el juego del escondite', ok: false },
    { t: 'Presentarte con voz fuerte a una clase nueva', ok: false },
    { t: 'Hablar sin parar con un niño que acabas de conocer', ok: false }
  ],
  acaba: ['Me siento tímido cuando…', 'Si un compañero es tímido, puedo ayudarle…'],
  habla: '¿Qué podemos hacer para que un niño tímido se sienta bien en clase? Pensad dos ideas.',
  rel: { parecida: ['vergonzoso'], contraria: [], familia: ['timidez'], mas: ['lanzado'] }
});
```

## Notas para quien programe

- Los `id` sin tilde: `timido`.
- **Enlaces de lugar** (`entre`, `alrededor`): como los de la semana 5, cada ejemplo ya dice la
  situación y llevan `pregunta` («¿Está bien dicho con «entre»?»). Son de lugar, no de tiempo: no llevan `sep`.
- `entre` tiene segundo significado (`otro`): «juntos» (entre todos). No estaba en la lista; se añade
  porque es la forma de las normas de clase. Si no se quiere, basta con `otro: null`.
- `alrededor` frente a `rodear` (semana 4): rodear es hacer un círculo en la ficha; alrededor dice
  dónde está algo. El gesto es de brazos, para que no se confunda con el círculo en el aire de `rodear`.
- `separar` es la contraria de `unir` (semana 4); su gesto es el de unir al revés (juntar y apartar),
  a propósito. Desde que `separar` es del paquete, la pregunta «Lo contrario de *separar*» de `unir`
  solo sale con `separar` presentada; mientras, `unir` pregunta «Se parece a *juntar*». Y `separar`
  frente a `clasificar` (semana 3): separar no hace grupos.
- `helado` tiene segundo significado (`otro`): el que se come. Ojo: en los textos de la semana
  «helado» es siempre «muy frío».
- `helado` y `caluroso` no son pareja: lo helado se toca; lo caluroso es un día o un sitio.
  `caluroso` no tiene `parecida` (las que sirven son de su familia: «de mucho calor»).
- `tímido`: se cuida que no parezca algo malo. Un contexto dice que se pasa («al principio de curso
  yo era tímido») y `habla` pide ideas para ayudar. Sin contraria («atrevido» ya es pregunta de `valiente`).
- Orden recomendado dentro de la semana: entre, alrededor, separar, helado, caluroso, tímido.
