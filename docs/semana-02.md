# Semana 2 · contenido completo (1.º)

Seis palabras escritas con las normas de `docs/pedagogia.md` y el modelo de `docs/semana-01.md`.
Al programar, cada bloque pasa tal cual a `src/js/palabras/s02-<id>.js`.

```js
PALABRA({
  id: 'senalar', palabra: 'señalar', silabas: ['se', 'ña', 'lar'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 2, bloque: 'pensar',
  def: 'Señalar es mostrar algo con el dedo o con una marca para que los demás lo vean.',
  otro: null,
  escena: { img: 'senalar.webp', texto: 'En el mapa del cole hay muchas clases. La maestra pregunta: «¿Cuál es la nuestra?». Noa se levanta y pone el dedo encima. Noa ha señalado nuestra clase.' },
  contextos: [
    'En la ficha señalamos con una cruz el dibujo correcto.',
    'La flecha de la calle señala por dónde se va al parque.',
    'Mi hermano pequeño señala el plátano porque todavía no sabe decirlo.'
  ],
  gesto: 'Estira el brazo y apunta con el dedo a algo de la clase.',
  sentido: [
    { t: 'Señalé la luna con el dedo para que mi abuelo la viera.', ok: true, por: 'Apuntó con el dedo para enseñársela.' },
    { t: 'Señalé el gato con las manos en los bolsillos y sin moverme.', ok: false, por: 'Para señalar hay que apuntar o hacer una marca.' },
    { t: 'En la ficha señalé con un círculo el animal más grande.', ok: true, por: 'Hizo una marca para que se vea cuál es.' },
    { t: 'Señalé el dibujo correcto dejando la ficha en blanco.', ok: false, por: 'Si no marcas nada, no has señalado nada.' }
  ],
  ejemplos: [
    { t: 'Apuntar con el dedo a un pájaro', ok: true },
    { t: 'Poner una cruz en la respuesta', ok: true },
    { t: 'Una flecha que indica la salida', ok: true },
    { t: 'Mirar un pájaro sin decir nada', ok: false },
    { t: 'Decir el nombre del pájaro', ok: false },
    { t: 'Guardar el lápiz en el estuche', ok: false }
  ],
  acaba: ['Mi amiga no veía el nido, así que yo…', 'En la ficha señalé con una cruz…'],
  habla: 'Señala tres cosas de la clase sin hablar. Tu compañero dice cómo se llaman.',
  rel: { parecida: ['indicar', 'marcar'], contraria: [], familia: ['señal'] }
});

PALABRA({
  id: 'completar', palabra: 'completar', silabas: ['com', 'ple', 'tar'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 2, bloque: 'pensar',
  def: 'Completar es poner lo que falta para que algo quede entero.',
  otro: null,
  escena: { img: 'completar.webp', texto: 'A Iker le falta una pieza del puzle. La busca debajo de la mesa y la encuentra. La pone en su hueco. Iker ha completado el puzle.' },
  contextos: [
    'En lengua completamos la frase con la palabra que falta.',
    'Con este cromo completo mi álbum.',
    'Para completar el equipo falta un jugador.'
  ],
  gesto: 'Haz una C con una mano y cierra el hueco con un dedo de la otra.',
  sentido: [
    { t: 'Completé la serie 1, 2, 3… escribiendo el 4.', ok: true, por: 'Puso el número que faltaba.' },
    { t: 'Completé el puzle quitándole tres piezas.', ok: false, por: 'Completar es poner lo que falta, no quitar.' },
    { t: 'Me faltaba un calcetín; lo encontré y completé el par.', ok: true, por: 'Ya tiene los dos: el par está entero.' },
    { t: 'Al dibujo no le faltaba nada, así que lo completé.', ok: false, por: 'Si no falta nada, no hay nada que completar.' }
  ],
  ejemplos: [
    { t: 'Poner la última pieza del puzle', ok: true },
    { t: 'Escribir la palabra que falta en la frase', ok: true },
    { t: 'Pegar el cromo que le faltaba al álbum', ok: true },
    { t: 'Dejar la ficha a medias', ok: false },
    { t: 'Borrar una palabra', ok: false },
    { t: 'Empezar un dibujo nuevo', ok: false }
  ],
  acaba: ['Para completar mi dibujo me falta…', 'La frase «El perro come…» se completa con…'],
  habla: 'Di una frase y cállate antes de la última palabra. Tu compañero la completa.',
  rel: { parecida: ['terminar', 'rellenar'], contraria: ['dejar a medias'], familia: ['completo', 'incompleto'] }
});

PALABRA({
  id: 'describir', palabra: 'describir', silabas: ['des', 'cri', 'bir'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 2, bloque: 'pensar',
  def: 'Describir es contar cómo es algo o alguien: su forma, su color, su tamaño…',
  otro: null,
  escena: { img: 'describir.webp', texto: 'Carmen ha perdido su mochila. «¿Cómo es?», pregunta el conserje. «Es azul, pequeña y tiene una estrella», dice ella. Carmen sabe describir su mochila.' },
  contextos: [
    'En clase describimos un elefante: es gris, tiene trompa y las orejas grandes.',
    'Por teléfono le describo a mi abuela mi disfraz.',
    'El cuento describe el castillo: alto, de piedra y con cuatro torres.'
  ],
  gesto: 'Dibuja en el aire, con las dos manos, la forma de algo.',
  sentido: [
    { t: 'Describí a mi perro: es pequeño, blanco y tiene las orejas caídas.', ok: true, por: 'Contó cómo es.' },
    { t: 'Describí mi casa diciendo solo «es mi casa».', ok: false, por: 'No ha contado cómo es.' },
    { t: 'Mi amiga describió su bici tan bien que la reconocí al verla.', ok: true, por: 'Dio tantos detalles que supo cuál era.' },
    { t: 'Describí el dibujo sin decir nada de cómo era.', ok: false, por: 'Describir es contar cómo es.' }
  ],
  ejemplos: [
    { t: 'Decir que el gato es negro y suave', ok: true },
    { t: 'Contar cómo es tu habitación', ok: true },
    { t: 'Decir que la pelota es redonda y roja', ok: true },
    { t: 'Decir solo «es un gato»', ok: false },
    { t: 'Contar qué hiciste ayer', ok: false },
    { t: 'Señalar el gato con el dedo', ok: false }
  ],
  acaba: ['Si describo a mi mejor amigo, digo que…', 'Te describo mi juguete favorito: es…'],
  habla: 'Describe un objeto de la clase sin decir su nombre. Tu compañero lo adivina.',
  rel: { parecida: ['contar cómo es'], contraria: [], familia: ['descripción'] }
});

PALABRA({
  id: 'diminuto', palabra: 'diminuto', silabas: ['di', 'mi', 'nu', 'to'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 2, bloque: 'como-son',
  def: 'Algo es diminuto cuando es muy, muy pequeño, tan pequeño que cuesta verlo.',
  otro: null,
  escena: { img: 'diminuto.webp', texto: 'Omar mira la arena de la playa con una lupa. Entre los granos hay una concha. ¡Es más pequeña que una lenteja! La concha es diminuta.' },
  contextos: [
    'Las hormigas llevan migas diminutas a su hormiguero.',
    'Al bebé le compraron unos calcetines diminutos.',
    'Desde el avión, los coches parecen diminutos.'
  ],
  gesto: 'Junta el pulgar y el índice hasta que casi se toquen y míralos de cerca.',
  sentido: [
    { t: 'Necesité la lupa para ver el bicho diminuto.', ok: true, por: 'Era tan pequeño que costaba verlo.' },
    { t: 'El camión diminuto no cabía por la calle.', ok: false, por: 'Algo diminuto cabe en cualquier sitio.' },
    { t: 'En mi dedo se posó una mosca diminuta.', ok: true, por: 'Una mosca muy pequeña cabe en un dedo.' },
    { t: 'El elefante diminuto era más alto que la casa.', ok: false, por: 'Si es más alto que la casa, es enorme.' }
  ],
  ejemplos: [
    { t: 'Un grano de arena', ok: true },
    { t: 'Una pulga', ok: true },
    { t: 'Una semilla de fresa', ok: true },
    { t: 'Una manzana', ok: false },
    { t: 'Un balón', ok: false },
    { t: 'Una ballena', ok: false }
  ],
  acaba: ['Con la lupa vi algo diminuto: era…', 'Si yo fuera diminuto, podría…'],
  habla: '¿Qué cosa diminuta conoces? ¿Dónde la viste?',
  rel: { parecida: ['minúsculo', 'muy pequeño'], contraria: ['enorme'], familia: [] }
});

PALABRA({
  id: 'veloz', palabra: 'veloz', silabas: ['ve', 'loz'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 2, bloque: 'como-son',
  def: 'Alguien o algo es veloz cuando se mueve muy rápido.',
  otro: null,
  escena: { img: 'veloz.webp', texto: 'Julia mira la carrera del parque. Un galgo sale corriendo como una flecha. Nadie puede alcanzarlo. El galgo es veloz.' },
  contextos: [
    'El tren veloz nos lleva a la playa en poco tiempo.',
    'El halcón es el ave más veloz del cielo.',
    'En el recreo, Carla es muy veloz y nadie la pilla.'
  ],
  gesto: 'Pasa la mano por delante de ti muy rápido, como un rayo: ¡fium!',
  sentido: [
    { t: 'El guepardo es veloz: corre más que un coche por la ciudad.', ok: true, por: 'Se mueve muy rápido.' },
    { t: 'El caracol es tan veloz que tarda un día en cruzar el patio.', ok: false, por: 'Si tarda tanto, es lento.' },
    { t: 'Fui tan veloz que llegué la primera a la meta.', ok: true, por: 'Quien corre muy rápido llega antes.' },
    { t: 'La tortuga veloz llegó la última porque iba muy despacio.', ok: false, por: 'Ir muy despacio es lo contrario de ser veloz.' }
  ],
  ejemplos: [
    { t: 'Un guepardo corriendo', ok: true },
    { t: 'Un coche de carreras', ok: true },
    { t: 'Un rayo', ok: true },
    { t: 'Un caracol', ok: false },
    { t: 'Una tortuga', ok: false },
    { t: 'Una piedra en el suelo', ok: false }
  ],
  acaba: ['El animal más veloz que conozco es…', 'Tuve que ser muy veloz para…'],
  habla: '¿Cuándo has tenido que ser muy veloz? Cuéntaselo a tu compañero.',
  rel: { parecida: ['rápido'], contraria: ['lento'], familia: ['velocidad'] }
});

PALABRA({
  id: 'valiente', palabra: 'valiente', silabas: ['va', 'lien', 'te'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 2, bloque: 'sentir',
  def: 'Alguien es valiente cuando hace algo que le da miedo o le cuesta, porque es importante.',
  otro: null,
  escena: { img: 'valiente.webp', texto: 'A Mateo le da miedo el agua. Hoy respira hondo, se agarra al bordillo y mete la cabeza. ¡Lo ha conseguido! Mateo ha sido valiente.' },
  contextos: [
    'La bombera valiente sube por la escalera para ayudar.',
    'Fui valiente en el médico: me pusieron la vacuna y no aparté el brazo.',
    'Hay que ser valiente para decir «lo siento, he sido yo».'
  ],
  gesto: 'Ponte un puño en el pecho y levanta la barbilla.',
  sentido: [
    { t: 'Me daba vergüenza, pero fui valiente y canté delante de todos.', ok: true, por: 'Lo hizo aunque le costaba.' },
    { t: 'Fui muy valiente: me escondí y no lo intenté.', ok: false, por: 'Ser valiente es intentarlo aunque dé miedo.' },
    { t: 'La niña valiente durmió sin luz por primera vez.', ok: true, por: 'Le daba miedo y aun así lo hizo.' },
    { t: 'Fue valiente al comerse su helado favorito.', ok: false, por: 'Eso no da miedo ni cuesta.' }
  ],
  ejemplos: [
    { t: 'Subir al tobogán alto aunque te dé miedo', ok: true },
    { t: 'Decir la verdad aunque te cueste', ok: true },
    { t: 'Pedir ayuda cuando molestan a un amigo', ok: true },
    { t: 'Hacer algo peligroso para presumir', ok: false },
    { t: 'Esconderte para no intentarlo', ok: false },
    { t: 'Comerte un helado', ok: false }
  ],
  acaba: ['Fui valiente cuando…', 'Una persona valiente, aunque tenga miedo, …'],
  habla: 'Cuenta una vez que fuiste valiente. ¿Qué te daba miedo?',
  rel: { parecida: ['atrevido'], contraria: ['cobarde', 'miedoso'], familia: ['valentía', 'valor'] }
});
```

## Notas para quien programe

- El `id` de «señalar» es `senalar` (sin ñ) para los nombres de archivo.
- `veloz` hace el plural en `veloces`.
- `describir`: la escena acaba en infinitivo a propósito, para no usar «descrito» el primer día.
- `valiente`: el no-ejemplo «Hacer algo peligroso para presumir» es el importante; conviene comentarlo.
