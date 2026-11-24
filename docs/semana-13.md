# Semana 13 · contenido completo (1.º)

Seis palabras escritas con las normas de `docs/pedagogia.md` y el modelo de `docs/semana-01.md`.
Al programar, cada bloque pasa tal cual a `src/js/palabras/s13-<id>.js`.

Tres palabras de los problemas de matemáticas (faltar, sobrar, repartir), una pareja de contrarias
y una palabra para convivir.

```js
PALABRA({
  id: 'faltar', palabra: 'faltar', silabas: ['fal', 'tar'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 13, orden: 1, bloque: 'pensar', sep: 'faltar-sobrar',
  def: 'Falta algo cuando no está y debería estar, o cuando no hay bastante para todos.',
  otro: 'También es no ir a un sitio: «Hoy ha faltado Raúl a clase».',
  escena: { img: 'faltar.webp', texto: 'Paula pone la mesa para cenar: en su casa son cuatro. Coloca un plato, dos, tres… y se queda mirando. Solo hay tres platos y son cuatro. Falta un plato.' },
  contextos: [
    'Tengo cinco cromos y quiero ocho: me faltan tres.',
    'Al puzle le falta una pieza y no lo podemos terminar.',
    'En el parque falta un columpio: se lo han llevado para arreglarlo.'
  ],
  gesto: 'Abre los brazos con las palmas hacia arriba y mira a los lados, buscando.',
  sentido: [
    { t: 'Somos seis y hay cinco sillas: falta una.', ok: true, por: 'No hay bastantes para todos.' },
    { t: 'Somos seis y hay ocho sillas: faltan dos.', ok: false, por: 'Hay más sillas que niños: no falta ninguna, sobran.' },
    { t: 'Al cuento le faltan las últimas páginas y no sé cómo acaba.', ok: true, por: 'Las páginas deberían estar y no están.' },
    { t: 'Me falta el zapato izquierdo: lo llevo puesto.', ok: false, por: 'Si lo lleva puesto, está: no falta.' }
  ],
  ejemplos: [
    { t: 'Cuatro niños y tres galletas', ok: true },
    { t: 'Una bici con una sola rueda', ok: true },
    { t: 'Un puzle sin una pieza', ok: true },
    { t: 'Cuatro niños y cuatro galletas', ok: false },
    { t: 'Cinco niños y ocho galletas', ok: false },
    { t: 'Un puzle con todas sus piezas', ok: false }
  ],
  pregunta: '¿Falta algo?',
  acaba: ['Somos veinte en clase y hay dieciocho lápices: faltan… porque…', 'Si a mi bici le falta una rueda, …'],
  habla: 'Mira la clase. ¿Falta algo que debería estar? Díselo a tu compañero.',
  rel: { parecida: [], contraria: ['sobrar'], familia: ['falta'], mas: ['hacer falta'] }
});

PALABRA({
  id: 'sobrar', palabra: 'sobrar', silabas: ['so', 'brar'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 13, orden: 2, bloque: 'pensar', sep: 'faltar-sobrar',
  def: 'Sobra algo cuando hay más de lo que hace falta y queda algo sin usar.',
  otro: null,
  escena: { img: 'sobrar.webp', texto: 'Diego reparte las magdalenas de su cumpleaños en clase. Da una a cada compañero y otra a la maestra. Al final, en la caja todavía quedan tres. Han sobrado tres magdalenas.' },
  contextos: [
    'En el autobús sobraban asientos, así que nos sentamos todos.',
    'Con la tela que sobró, mi abuela hizo un cojín.',
    'En la ficha, tacha el dibujo que sobra.'
  ],
  gesto: 'Junta las manos como un cuenco y haz como que algo se cae por los lados.',
  sentido: [
    { t: 'Hice muchos macarrones y sobró un plato para mañana.', ok: true, por: 'Había más de lo que se comieron.' },
    { t: 'Éramos cinco y había tres bocadillos: sobraron dos.', ok: false, por: 'Hay menos bocadillos que niños: faltan, no sobran.' },
    { t: 'Pinté todo el dibujo y me sobró pintura en el vaso.', ok: true, por: 'Quedó pintura sin usar.' },
    { t: 'Me comí toda la tarta y sobró la mitad.', ok: false, por: 'Si se la comió toda, no queda nada.' }
  ],
  ejemplos: [
    { t: 'Cinco niños y ocho galletas', ok: true },
    { t: 'Tres sillas y dos niños', ok: true },
    { t: 'Una caja con galletas cuando todos ya han comido', ok: true },
    { t: 'Cuatro niños y cuatro galletas', ok: false },
    { t: 'Cuatro niños y tres galletas', ok: false },
    { t: 'Un plato vacío después de comer', ok: false }
  ],
  pregunta: '¿Sobra algo?',
  acaba: ['Si somos seis y hay diez lápices, sobran… porque…', 'Con la comida que sobra en casa, nosotros…'],
  habla: 'Cuando sobra comida en casa, ¿qué hacéis con ella? Cuéntaselo a tu compañero.',
  rel: { parecida: ['quedar de más'], contraria: ['faltar'], familia: ['sobra', 'sobrante'] }
});

PALABRA({
  id: 'repartir', palabra: 'repartir', silabas: ['re', 'par', 'tir'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 13, orden: 3, bloque: 'pensar',
  def: 'Repartir es ir dando a cada uno lo que le toca, hasta que todos tengan su parte.',
  otro: null,
  escena: { img: 'repartir.webp', texto: 'Hoy Ainhoa es la encargada de los folios. Va mesa por mesa y deja uno delante de cada compañero. Cuando termina, nadie se ha quedado sin folio. Ainhoa ha repartido los folios.' },
  contextos: [
    'El cartero reparte las cartas por las casas.',
    'Repartimos doce caramelos entre tres niños: cuatro para cada uno.',
    'La abuela reparte la tortilla en trozos iguales.'
  ],
  gesto: 'Haz como que das cartas de una baraja: una para ti, otra para ti y otra para ti.',
  sentido: [
    { t: 'La maestra repartió los cuentos: uno para cada mesa.', ok: true, por: 'Dio a cada mesa su parte.' },
    { t: 'Repartí las galletas entre mis amigos y me las comí todas yo.', ok: false, por: 'Si se las comió él, nadie más tuvo su parte.' },
    { t: 'En casa repartimos las tareas: yo pongo la mesa y mi hermano la quita.', ok: true, por: 'A cada uno le toca la suya.' },
    { t: 'El cartero repartió las cartas guardándolas en su casa.', ok: false, por: 'Repartir es dejar cada carta en la casa de quien la espera.' }
  ],
  ejemplos: [
    { t: 'Dar un folio a cada niño', ok: true },
    { t: 'Dejar una carta en cada buzón', ok: true },
    { t: 'Partir la pizza y dar un trozo a cada uno', ok: true },
    { t: 'Guardarte todos los cromos', ok: false },
    { t: 'Juntar todos los lápices en un bote', ok: false },
    { t: 'Dar todas las galletas a un solo niño', ok: false }
  ],
  acaba: ['Si repartimos diez caramelos entre dos, a cada uno le tocan… porque…', 'Cuando reparto algo, me fijo en que…'],
  habla: 'Tienes seis pegatinas y sois tres. ¿Cómo las repartís? Pensadlo juntos.',
  rel: { parecida: ['dar a cada uno'], contraria: [], familia: ['reparto', 'repartidor'], mas: ['distribuir'] }
});

PALABRA({
  id: 'ruidoso', palabra: 'ruidoso', silabas: ['rui', 'do', 'so'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 13, orden: 4, bloque: 'como-son', sep: 'ruidoso-silencioso',
  def: 'Algo o alguien es ruidoso cuando hace tanto ruido que cuesta oír lo demás.',
  otro: null,
  escena: { img: 'ruidoso.webp', texto: 'Al lado de la casa de Noa están arreglando la calle. Una máquina golpea el suelo sin parar: ¡pum, pum, pum! Noa se tapa los oídos y no oye ni la tele. La máquina es muy ruidosa.' },
  contextos: [
    'El comedor es muy ruidoso a la hora de comer.',
    'Las cotorras del parque son pájaros ruidosos.',
    'Mi vecino tiene una moto vieja muy ruidosa.'
  ],
  gesto: 'Tápate los oídos con las dos manos y arruga la cara.',
  sentido: [
    { t: 'La fiesta era tan ruidosa que tenía que gritar para hablar.', ok: true, por: 'Había tanto ruido que no se oían.' },
    { t: 'La biblioteca es ruidosa: allí se lee sin hablar.', ok: false, por: 'Donde no se habla, casi no hay ruido.' },
    { t: 'Mi perro es muy ruidoso: ladra a todo el que pasa.', ok: true, por: 'Hace mucho ruido.' },
    { t: 'El gato era tan ruidoso que nadie lo oyó.', ok: false, por: 'Si nadie lo oyó, no hizo ruido.' }
  ],
  ejemplos: [
    { t: 'Una moto', ok: true },
    { t: 'Una tormenta con truenos', ok: true },
    { t: 'Un tambor grande', ok: true },
    { t: 'Una mariposa', ok: false },
    { t: 'Una biblioteca', ok: false },
    { t: 'Una pluma cayendo', ok: false }
  ],
  acaba: ['El sitio más ruidoso del cole es… porque…', 'Cuando la clase está ruidosa, nosotros…'],
  habla: '¿Cuál es la cosa más ruidosa que has oído? ¿Dónde estabas?',
  rel: { parecida: [], contraria: ['silencioso'], familia: ['ruido'], mas: ['escandaloso'] }
});

PALABRA({
  id: 'silencioso', palabra: 'silencioso', silabas: ['si', 'len', 'cio', 'so'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 13, orden: 5, bloque: 'como-son', sep: 'ruidoso-silencioso',
  def: 'Algo o alguien es silencioso cuando no hace ruido o casi no se oye.',
  otro: null,
  escena: { img: 'silencioso.webp', texto: 'Por la noche, Óscar ve entrar al gato en su cuarto. No se oye nada: ni un paso, ni un maullido. De pronto, el gato salta a la cama y se acurruca a su lado. El gato es muy silencioso.' },
  contextos: [
    'La biblioteca es un sitio silencioso para leer.',
    'Los coches eléctricos son silenciosos.',
    'La nieve cae silenciosa sobre el pueblo.'
  ],
  gesto: 'Ponte un dedo sobre los labios.',
  sentido: [
    { t: 'Entré silencioso para no despertar al bebé.', ok: true, por: 'No hizo ruido.' },
    { t: 'El concierto de trompetas fue muy silencioso.', ok: false, por: 'Las trompetas hacen mucho ruido.' },
    { t: 'El búho vuela silencioso por la noche.', ok: true, por: 'Casi no se le oye.' },
    { t: 'Mi hermano estaba silencioso: cantaba a gritos.', ok: false, por: 'Si canta a gritos, hace mucho ruido.' }
  ],
  ejemplos: [
    { t: 'Una mariposa', ok: true },
    { t: 'Una biblioteca', ok: true },
    { t: 'Una pluma cayendo', ok: true },
    { t: 'Una moto', ok: false },
    { t: 'Una tormenta con truenos', ok: false },
    { t: 'Un tambor grande', ok: false }
  ],
  acaba: ['En clase estamos silenciosos cuando…', 'Un animal silencioso es… porque…'],
  habla: '¿Dónde hay que estar silencioso? Pensad tres sitios con tu compañero.',
  rel: { parecida: ['callado'], contraria: ['ruidoso'], familia: ['silencio'], mas: ['sigiloso'] }
});

PALABRA({
  id: 'turno', palabra: 'turno', silabas: ['tur', 'no'],
  tipo: 'nombre', nivel: 2, curso: 1, semana: 13, orden: 6, bloque: 'convivir',
  def: 'El turno es el momento en que te toca a ti hacer algo, después de otros.',
  otro: null,
  escena: { img: 'turno.webp', texto: 'En el tobogán del parque hay una fila de niños. Mateo espera detrás de una niña con coletas. Ella se tira, ¡zas!, y Mateo sube la escalera. Por fin es su turno.' },
  contextos: [
    'En la asamblea hablamos por turnos: primero Ana, luego Iker.',
    'En la frutería cogemos un número y esperamos nuestro turno.',
    'Esta noche es mi turno de poner la mesa.'
  ],
  gesto: 'Pasa con las dos manos una pelota imaginaria al compañero de al lado.',
  sentido: [
    { t: 'Esperé mi turno en la fila del columpio.', ok: true, por: 'Esperó hasta que le tocó.' },
    { t: 'Me colé delante de todos porque era mi turno.', ok: false, por: 'Colarse es saltarse el turno de los demás.' },
    { t: 'Cuando acabó Lía, fue el turno de Pablo para leer.', ok: true, por: 'Después de ella, le tocaba a él.' },
    { t: 'Jugamos a la oca y tiré yo todas las veces, porque era mi turno.', ok: false, por: 'Cada uno tira cuando le toca, no todas las veces.' }
  ],
  ejemplos: [
    { t: 'Esperar en la fila del tobogán', ok: true },
    { t: 'Levantar la mano y esperar para hablar', ok: true },
    { t: 'Tirar el dado cuando acaba tu compañero', ok: true },
    { t: 'Colarse en la fila', ok: false },
    { t: 'Hablar todos a la vez', ok: false },
    { t: 'Coger el dado y no soltarlo', ok: false }
  ],
  pregunta: '¿Respeta el turno?',
  acaba: ['En la fila espero mi turno porque…', 'Si alguien se salta mi turno, yo…'],
  habla: '¿En qué juegos hay que esperar tu turno? Díselos a tu compañero.',
  rel: { parecida: ['vez'], contraria: [], familia: ['turnarse'] }
});
```

## Notas para quien programe

- `faltar` y `sobrar` son contrarias y salen en los problemas («¿Cuántos faltan?», «¿Cuántos
  sobran?»). Comparten ejemplos al revés y llevan `sep: 'faltar-sobrar'`. Las dos llevan `pregunta`
  («¿Falta algo?», «¿Sobra algo?») porque sus ejemplos son situaciones. `faltar` tiene segundo
  significado (`otro`): no ir a clase.
- `faltar` frente a `necesitar` (semana 10): «hacer falta» es la pregunta de `necesitar`, por eso aquí
  va en `rel.mas`. `faltar` no tiene `parecida`.
- `repartir` frente a `compartir` (semana 9): repartir es dar a cada uno lo suyo (también en
  matemáticas); compartir es dejar a otros parte de lo tuyo. La pregunta de `compartir` es «Se parece a
  *repartir*»: desde ahora solo sale con `repartir` presentada. El gesto (dar cartas) se parece algo al
  de `clasificar` (semana 3): al pasarla a la app, añadir la pareja a `GESTOS_PARECIDOS`.
- `ruidoso` y `silencioso` son contrarias, comparten los seis ejemplos al revés y llevan
  `sep: 'ruidoso-silencioso'`. `ruidoso` no tiene `parecida` (las que sirven son de su familia).
- `turno` es `nombre` (pregunta «¿Respeta el turno?»), en el bloque `convivir`.
- Orden recomendado dentro de la semana: faltar, sobrar, repartir, ruidoso, silencioso, turno.
