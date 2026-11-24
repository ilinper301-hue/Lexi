# Semana 26 · contenido completo (1.º)

Seis palabras escritas con las normas de `docs/pedagogia.md` y el modelo de `docs/semana-01.md`.
Al programar, cada bloque pasa tal cual a `src/js/palabras/s26-<id>.js`.

Dos palabras para pensar y hacer (imitar, crear), dos de cómo son las cosas (cómodo, apretado), una
de sentir (solo) y una de convivir (educado).

```js
PALABRA({
  id: 'imitar', palabra: 'imitar', silabas: ['i', 'mi', 'tar'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 26, orden: 1, bloque: 'pensar', sep: 'imitar-crear',
  def: 'Imitar es hacer o decir algo igual que otro, para parecerte a él.',
  otro: null,
  escena: { img: 'imitar.webp', texto: 'En el patio, Vera juega a los animales. Mueve los brazos como alas y dice: «¡Cua, cua!». Todos se ríen y la siguen. ¡Vera está imitando a un pato!' },
  contextos: [
    'En casa, mi hermano pequeño me imita: si salto, él salta.',
    'En clase imitamos los sonidos de los animales de la granja.',
    'En el zoo, el loro imitaba la voz del cuidador.'
  ],
  gesto: 'Mira a alguien imaginario de enfrente y mueve una mano igual que él, como en un espejo.',
  sentido: [
    { t: 'Mi hermana imita a la maestra: se pone unas gafas y dice «¡silencio!».', ok: true, por: 'Hace y dice lo mismo que ella.' },
    { t: 'Imité a mi amigo haciendo todo lo contrario que él.', ok: false, por: 'Imitar es hacer lo mismo, no lo contrario.' },
    { t: 'Jugamos a imitar animales y yo hice de gato: «¡Miau!».', ok: true, por: 'Hizo lo mismo que hace un gato.' },
    { t: 'Me inventé un baile que no hace nadie y dije que estaba imitando.', ok: false, por: 'Si es nuevo y no se parece a nadie, no imitas: creas.' }
  ],
  ejemplos: [
    { t: 'Andar como un pingüino', ok: true },
    { t: 'Hablar con la voz de tu abuelo', ok: true },
    { t: 'Copiar los pasos de baile de la maestra', ok: true },
    { t: 'Inventarte un baile nuevo', ok: false },
    { t: 'Hacer lo contrario que tu amigo', ok: false },
    { t: 'Escribir tu nombre', ok: false }
  ],
  acaba: ['Sé imitar muy bien a…; hago así:…', 'Los niños pequeños imitan a los mayores, por eso…'],
  habla: 'Imita a un animal sin hacer ruido. Tu compañero adivina cuál es, y luego cambiáis.',
  rel: { parecida: ['copiar'], contraria: [], familia: ['imitación', 'imitador'], mas: ['crear', 'repetir', 'parecido'] }
});

PALABRA({
  id: 'crear', palabra: 'crear', silabas: ['cre', 'ar'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 26, orden: 2, bloque: 'pensar', sep: 'imitar-crear',
  def: 'Crear es hacer algo nuevo que sale de tu cabeza, como un cuento, un dibujo o una canción.',
  otro: null,
  escena: { img: 'crear.webp', texto: 'Antes de dormir, Dani le pide a su padre un cuento. «Hoy no lo leemos», dice su padre, «nos lo inventamos». Juntos piensan un dragón que tiene miedo a las moscas. ¡Han creado un cuento nuevo!' },
  contextos: [
    'En casa creé una canción para mi perro.',
    'En clase creamos entre todos un cuento con dibujos.',
    'En la playa, mi prima creó un juego nuevo con conchas.'
  ],
  gesto: 'Haz como que coges algo de tu cabeza con los dedos y lo dejas encima de la mesa.',
  sentido: [
    { t: 'Mi hermano creó un baile nuevo y ahora lo bailamos todos.', ok: true, por: 'Antes no existía: lo sacó de su cabeza.' },
    { t: 'Creé un dibujo copiando el de mi libro.', ok: false, por: 'Copiar no es crear: el dibujo no es nuevo.' },
    { t: 'La clase creó un nombre para la mascota: «Bigotes».', ok: true, por: 'Se les ocurrió un nombre nuevo.' },
    { t: 'Para crear la canción, cantamos la de siempre.', ok: false, por: 'Si es la de siempre, no hay nada nuevo.' }
  ],
  ejemplos: [
    { t: 'Inventar una historia de piratas', ok: true },
    { t: 'Hacer un dibujo que sale de tu cabeza', ok: true },
    { t: 'Pensar la letra de una canción nueva', ok: true },
    { t: 'Copiar un dibujo de la pizarra', ok: false },
    { t: 'Cantar una canción que ya sabes', ok: false },
    { t: 'Montar un puzle siguiendo la foto de la caja', ok: false }
  ],
  acaba: ['Si pudiera crear un animal nuevo, tendría…', 'Me gusta crear… porque…'],
  habla: 'Cread entre los dos el nombre de un planeta nuevo. ¿Cómo es y quién vive allí?',
  rel: { parecida: [], contraria: ['copiar'], familia: ['creación', 'creativo'], mas: ['imaginar', 'inventar', 'construir', 'imitar'] }
});

PALABRA({
  id: 'comodo', palabra: 'cómodo', silabas: ['có', 'mo', 'do'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 26, orden: 3, bloque: 'como-son', sep: 'comodo-apretado',
  def: 'Algo es cómodo cuando te hace estar a gusto, sin nada que te moleste.',
  otro: null,
  escena: { img: 'comodo.webp', texto: 'Después de la excursión, Álex llega a casa muy cansado. Se quita las botas y se pone sus zapatillas de estar por casa. Se tumba en el sofá con un cojín blandito. «¡Qué cómodo estoy!», dice.' },
  contextos: [
    'En casa, para dormir, me pongo un pijama muy cómodo.',
    'En clase, para hacer gimnasia, venimos con ropa cómoda.',
    'En el autobús de la excursión, los asientos eran muy cómodos.'
  ],
  gesto: 'Échate hacia atrás en la silla, cruza las manos detrás de la cabeza y sonríe.',
  sentido: [
    { t: 'Estas zapatillas son tan cómodas que no me las quiero quitar.', ok: true, por: 'Está a gusto con ellas.' },
    { t: 'Este jersey es muy cómodo porque me pica muchísimo.', ok: false, por: 'Si pica, molesta: es incómodo.' },
    { t: 'En el cojín grande de la biblioteca leo muy cómoda.', ok: true, por: 'Allí está a gusto leyendo.' },
    { t: 'Dormí muy cómodo encima de las piedras del camino.', ok: false, por: 'Las piedras se clavan y molestan.' }
  ],
  ejemplos: [
    { t: 'Un sofá blandito', ok: true },
    { t: 'Un pijama suave', ok: true },
    { t: 'Unas zapatillas de tu talla', ok: true },
    { t: 'Unos zapatos pequeños que te hacen daño', ok: false },
    { t: 'Un jersey que pica', ok: false },
    { t: 'Una silla rota que cojea', ok: false }
  ],
  acaba: ['El sitio más cómodo de mi casa es…', 'Para dormir cómodo necesito…'],
  habla: 'Contad entre los dos cuál es vuestra ropa más cómoda y por qué.',
  rel: { parecida: [], contraria: [], familia: ['incómodo', 'comodidad'], mas: ['a gusto', 'agradable', 'apretado', 'blando'] }
});

PALABRA({
  id: 'apretado', palabra: 'apretado', silabas: ['a', 'pre', 'ta', 'do'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 26, orden: 4, bloque: 'como-son', sep: 'comodo-apretado',
  def: 'Algo está apretado cuando no tiene sitio y queda muy justo, sin nada de hueco.',
  otro: null,
  escena: { img: 'apretado.webp', texto: 'Este verano Bruno ha crecido mucho. Se pone su camiseta favorita y casi no le entra por la cabeza. Ahora le tira de los hombros y no puede mover bien los brazos. ¡La camiseta le queda apretada!' },
  contextos: [
    'En casa, la tapa del bote estaba tan apretada que mi padre no podía abrirla.',
    'En el autobús del cole íbamos apretados como sardinas.',
    'En el parque, el nudo del columpio está bien apretado para que no se suelte.'
  ],
  gesto: 'Junta mucho los codos y las rodillas y hazte pequeñito, como en un ascensor lleno.',
  sentido: [
    { t: 'Los zapatos de mi hermana me quedan apretados: me hacen daño en los dedos.', ok: true, por: 'Le quedan tan justos que no hay sitio para los dedos.' },
    { t: 'El pantalón de mi padre me queda apretado: se me cae.', ok: false, por: 'Si se cae, le queda grande, no apretado.' },
    { t: 'En el ascensor íbamos tan apretados que no cabía nadie más.', ok: true, por: 'No quedaba nada de sitio.' },
    { t: 'En el patio vacío estábamos muy apretados.', ok: false, por: 'En un patio vacío sobra sitio.' }
  ],
  ejemplos: [
    { t: 'Un guante pequeño en una mano grande', ok: true },
    { t: 'Muchos lápices en un estuche que casi no cierra', ok: true },
    { t: 'Un nudo muy fuerte', ok: true },
    { t: 'Un abrigo grande que se te cae de los hombros', ok: false },
    { t: 'Una caja con un solo lápiz', ok: false },
    { t: 'Unos zapatos de tu talla', ok: false }
  ],
  acaba: ['Una vez me quedaba apretado… y…', 'Cuando la ropa te queda apretada, hay que…'],
  habla: 'Contad entre los dos alguna vez que estuvisteis muy apretados. ¿Dónde fue?',
  rel: { parecida: [], contraria: ['suelto'], familia: ['apretar', 'apretón'], mas: ['incómodo', 'lleno', 'ancho', 'estrecho'] }
});

PALABRA({
  id: 'solo', palabra: 'solo', silabas: ['so', 'lo'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 26, orden: 5, bloque: 'sentir',
  def: 'Estás solo cuando no hay nadie contigo; a veces apetece y a veces te pone triste.',
  otro: 'También quiere decir «nada más»: «Solo me queda una galleta».',
  escena: { img: 'solo.webp', texto: 'En el recreo, Teo se sienta en un banco. Sus amigos juegan lejos y no lo han visto. Lina se le acerca: «¿Juegas con nosotros?». Teo sonríe: ya no está solo.' },
  contextos: [
    'En casa, a veces me gusta estar solo en mi cuarto, leyendo tranquilo.',
    'En clase, hoy he hecho la ficha yo solo, sin ayuda.',
    'En el parque, un perrito estaba solo y buscaba a su dueño.'
  ],
  gesto: 'Cruza los brazos y mira a los lados, sin nadie cerca.',
  sentido: [
    { t: 'Mi abuelo vive solo desde que mi tía se fue a otra ciudad.', ok: true, por: 'Nadie vive con él.' },
    { t: 'Estaba solo en el cumpleaños, con todos mis amigos.', ok: false, por: 'Si están todos sus amigos, no está solo.' },
    { t: 'A veces me gusta jugar solo con mis bloques.', ok: true, por: 'Juega sin nadie, porque le apetece.' },
    { t: 'Me sentí solo en el sofá, abrazado a mi madre.', ok: false, por: 'Si su madre lo abraza, está con ella.' }
  ],
  ejemplos: [
    { t: 'Un niño que juega sin nadie en un rincón', ok: true },
    { t: 'Leer en tu cuarto sin nadie', ok: true },
    { t: 'Un pájaro que vuela lejos de su bandada', ok: true },
    { t: 'Jugar al corro con toda la clase', ok: false },
    { t: 'Comer con tu familia', ok: false },
    { t: 'Ir al parque con un amigo', ok: false }
  ],
  acaba: ['Me gusta estar solo cuando…', 'Si veo a un compañero que se siente solo en el recreo, yo…'],
  habla: 'Contad entre los dos un momento en que os gusta estar solos y otro en que no.',
  rel: { parecida: ['sin nadie'], contraria: ['acompañado'], familia: ['soledad', 'solitario'], mas: ['único', 'acompañar', 'incluir'] }
});

PALABRA({
  id: 'educado', palabra: 'educado', silabas: ['e', 'du', 'ca', 'do'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 26, orden: 6, bloque: 'convivir',
  def: 'Alguien es educado cuando saluda, pide las cosas por favor y da las gracias.',
  otro: null,
  escena: { img: 'educado.webp', texto: 'Sofía entra en la panadería con su madre. «¡Buenos días!», dice. Pide una barra «por favor» y, al cogerla, dice «gracias». La panadera sonríe: «¡Qué niña tan educada!».' },
  contextos: [
    'En casa, mi primo es muy educado: siempre da las gracias por la comida.',
    'En clase levantamos la mano para hablar, porque somos educados.',
    'En el autobús, una chica educada le dejó el asiento a un señor mayor.'
  ],
  gesto: 'Haz como que te quitas un sombrero y saludas con él.',
  sentido: [
    { t: 'Mi hermano es educado: siempre pide las cosas por favor.', ok: true, por: 'Pedir por favor es de buenos modales.' },
    { t: 'Fue muy educado: me quitó el lápiz sin preguntar.', ok: false, por: 'Coger algo sin pedir permiso no es de buenos modales.' },
    { t: 'Al entrar en clase, Ana dice «buenos días» a todos.', ok: true, por: 'Saludar es ser educado.' },
    { t: 'Como soy educado, hablo a gritos mientras otro habla.', ok: false, por: 'Lo educado es esperar a que el otro termine.' }
  ],
  ejemplos: [
    { t: 'Dar las gracias cuando te ayudan', ok: true },
    { t: 'Saludar al entrar', ok: true },
    { t: 'Esperar tu turno para hablar', ok: true },
    { t: 'Interrumpir a quien habla', ok: false },
    { t: 'Coger algo sin pedirlo', ok: false },
    { t: 'Irte sin decir adiós', ok: false }
  ],
  acaba: ['Cuando alguien me da algo, lo educado es…', 'Una persona educada, cuando entra en un sitio…'],
  habla: 'Pensad entre los dos tres palabras mágicas que usa una persona educada. ¿Cuándo las decís?',
  rel: { parecida: ['con buenos modales'], contraria: [], familia: ['maleducado', 'educación'], mas: ['amable', 'respetar', 'grosero'] }
});
```

## Notas para quien programe

- **Semana de «hacer como otro o hacer algo nuevo»:** `imitar` y `crear` son las dos caras (copiar o
  inventar); `cómodo` y `apretado` se notan en el cuerpo y en la ropa; `solo` y `educado` cierran con
  cómo nos sentimos y cómo tratamos a los demás.
- `imitar` frente a `crear`: imitar es **hacer igual que otro**; crear es **hacer algo nuevo que sale
  de tu cabeza**. Se separan de día (`sep: 'imitar-crear'`). `imitar` pregunta «copiar» (parecida) y
  `crear` pregunta «lo contrario de copiar»: son preguntas distintas y enseñan justo la diferencia.
- `crear` frente a `construir` (semana 24) e `imaginar` (semana 6): construir es **juntar piezas**;
  imaginar se queda **dentro de la cabeza**; crear es **hacerlo de verdad, y nuevo**. Por eso el
  no-ejemplo «Montar un puzle siguiendo la foto de la caja». La lista proponía `imaginar` como
  parecida de `crear`; va en `rel.mas` porque no significan lo mismo (punto 93). `inventar` es de 2.º
  (semana 3) y también va en `rel.mas`.
- `cómodo` y `apretado` se separan de día (`sep: 'comodo-apretado'`): lo apretado suele ser incómodo, y
  el no-ejemplo «Unos zapatos pequeños que te hacen daño» de `cómodo` es casi un sí de `apretado`.
  `cómodo` no tiene preguntas de `relaciona`: su contraria es de su familia (`incómodo`) y «a gusto» se
  confunde con la pregunta «que da gusto» de `agradable` (semana 16).
- `apretado` pregunta «lo contrario de suelto». No pregunta «justo», porque `justo` es de 2.º (semana 9)
  con otro significado (lo que es igual para todos). `ancho` y `estrecho` (2.º, semana 1) van en `rel.mas`.
- `solo` (bloque `sentir`): la definición dice que **a veces apetece y a veces pone triste**, como pide
  la lista; el contexto de casa y un sentido «sí» son de estar solo porque apetece. La escena acaba con
  la invitación de Lina, que enlaza con `incluir` (semana 21) y `acompañar` (semana 24). Segundo
  significado: «nada más» («Solo me queda una galleta»). Pregunta «sin nadie» y «lo contrario de
  acompañado». `único` (semana 22) tiene `solo` en su `rel.mas`.
- `educado` (bloque `convivir`) frente a `amable` (semana 9) y `respetar` (semana 9): educado es
  **tener buenos modales** (saludar, por favor, gracias, esperar el turno); amable es **tratar con
  cariño y ayudar**; respetar es **tratar bien y cumplir las normas**. Pregunta «con buenos modales».
  **`amable` tiene `educado` como pregunta parecida**: con `PAQUETE_1`, no la pregunta hasta que se
  presente `educado` (punto 94).
- **Gestos cercanos a vigilar:** `imitar` (mano en espejo) y `parecido` (dos índices juntos, semana 3);
  `crear` (sacar algo de la cabeza y dejarlo en la mesa) e `imaginar` (nube que sale de la cabeza,
  semana 6) e `idea` (bombilla sobre la cabeza, semana 22); `cómodo` (recostarse con las manos en la
  nuca) y `descansar` (manos en la mejilla, semana 15); `apretado` (hacerse pequeñito) y `tímido`
  (encoger los hombros, semana 12); `solo` (un dedo lejos de la mano) y `único` (un dedo que gira,
  semana 22); `educado` (quitarse el sombrero) y `respetar` (mano en el pecho e inclinar la cabeza, semana 9).
- Orden recomendado dentro de la semana: imitar, crear, cómodo, apretado, solo, educado.
