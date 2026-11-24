# Semana 15 · contenido completo (1.º)

Seis palabras escritas con las normas de `docs/pedagogia.md` y el modelo de `docs/semana-01.md`.
Al programar, cada bloque pasa tal cual a `src/js/palabras/s15-<id>.js`.

Semana de Conocimiento del Medio: el cuerpo y la salud. Las seis palabras van en el bloque `medio` y se
apoyan unas en otras (respiramos, saboreamos, nos doblamos, nos lavamos, descansamos: así estamos sanos).

```js
PALABRA({
  id: 'respirar', palabra: 'respirar', silabas: ['res', 'pi', 'rar'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 15, orden: 1, bloque: 'medio',
  def: 'Respirar es meter aire en el cuerpo por la nariz o la boca y después soltarlo.',
  otro: null,
  escena: { img: 'respirar.webp', texto: 'Hugo sube corriendo la cuesta del parque. Arriba se para: el pecho le sube y le baja muy deprisa. Coge aire por la nariz y lo suelta despacio por la boca. Poco a poco, Hugo respira más tranquilo.' },
  contextos: [
    'Antes de soplar las velas, respiro hondo.',
    'Los peces respiran debajo del agua.',
    'Cuando estoy nervioso, respiro despacio y me calmo.'
  ],
  gesto: 'Pon un dedo debajo de la nariz y nota el aire que entra y sale.',
  sentido: [
    { t: 'Al bucear en la piscina, salgo arriba a respirar.', ok: true, por: 'Necesita coger aire.' },
    { t: 'Respiro con las orejas cuando escucho música.', ok: false, por: 'El aire entra por la nariz o la boca, no por las orejas.' },
    { t: 'Mientras duermo, sigo respirando.', ok: true, por: 'Respiramos siempre, también dormidos.' },
    { t: 'Hoy no he respirado nada en todo el día.', ok: false, por: 'No se puede estar sin respirar: lo hacemos todo el rato.' }
  ],
  ejemplos: [
    { t: 'Coger aire para inflar un globo', ok: true },
    { t: 'Oler una flor', ok: true },
    { t: 'Soplar las velas de la tarta', ok: true },
    { t: 'Beber un vaso de agua', ok: false },
    { t: 'Parpadear', ok: false },
    { t: 'Tragar un trozo de pan', ok: false }
  ],
  acaba: ['Respiro por la nariz y el aire…', 'Cuando corro mucho, respiro… porque…'],
  habla: 'Respira despacio con tu compañero: cogéis aire, contáis hasta tres y lo soltáis. ¿Qué notáis?',
  rel: { parecida: ['coger aire'], contraria: [], familia: ['respiración'], mas: ['aliento', 'inspirar', 'espirar'] }
});

PALABRA({
  id: 'saborear', palabra: 'saborear', silabas: ['sa', 'bo', 're', 'ar'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 15, orden: 2, bloque: 'medio',
  def: 'Saborear es comer o beber despacio, fijándote bien en el sabor que tiene.',
  otro: null,
  escena: { img: 'saborear.webp', texto: 'Lucía tiene un helado de fresa. No se lo come de golpe: lo chupa despacio y cierra los ojos. Nota lo frío, lo dulce y los trocitos de fresa. Lucía lo saborea.' },
  contextos: [
    'El cocinero saborea la sopa antes de servirla.',
    'En el recreo saboreamos una mandarina con calma.',
    'Mi abuelo saborea el café sentado en la terraza.'
  ],
  gesto: 'Cierra los ojos y pásate la lengua por los labios: ¡mmm!',
  sentido: [
    { t: 'Saboreé la tarta despacito: ¡qué rica estaba!', ok: true, por: 'La comió despacio, fijándose en el sabor.' },
    { t: 'Me tragué el zumo de golpe para saborearlo bien.', ok: false, por: 'De golpe no te fijas en el sabor.' },
    { t: 'Cierra los ojos y saborea esta uva: ¿es dulce o ácida?', ok: true, por: 'Así se fija en su sabor.' },
    { t: 'Saboreo la música con los oídos.', ok: false, por: 'Se saborea con la boca, al comer o beber.' }
  ],
  ejemplos: [
    { t: 'Comer una fresa despacio, notando su sabor', ok: true },
    { t: 'Probar la sopa con calma para ver cómo sabe', ok: true },
    { t: 'Dejar que el chocolate se derrita en la boca', ok: true },
    { t: 'Tragarte el bocadillo a toda prisa', ok: false },
    { t: 'Oler una tarta en el escaparate', ok: false },
    { t: 'Mirar una foto de una pizza', ok: false }
  ],
  acaba: ['Lo que más me gusta saborear es… porque sabe a…', 'Para saborear bien una fruta, yo…'],
  habla: 'Piensa en tu comida favorita. Cuéntale a tu compañero a qué sabe.',
  rel: { parecida: [], contraria: [], familia: ['sabor', 'sabroso'], mas: ['degustar', 'paladear'] }
});

PALABRA({
  id: 'articulacion', palabra: 'articulación', silabas: ['ar', 'ti', 'cu', 'la', 'ción'],
  tipo: 'nombre', nivel: 3, curso: 1, semana: 15, orden: 3, bloque: 'medio',
  def: 'Una articulación es la parte del cuerpo donde se juntan dos huesos y por donde se dobla.',
  otro: null,
  escena: { img: 'articulacion.webp', texto: 'Daniel hace de robot en el patio: anda con las piernas tiesas, sin doblar nada. Luego dobla las rodillas, los codos y las muñecas. ¡Ahora se mueve como una persona! Rodillas, codos y muñecas son articulaciones.' },
  contextos: [
    'Jugando al fútbol me hice daño en una articulación: el tobillo.',
    'Antes de la carrera, movemos las articulaciones para calentar.',
    'Los dedos tienen muchas articulaciones; por eso podemos coger un lápiz.'
  ],
  gesto: 'Dobla y estira el codo despacio, dos veces.',
  sentido: [
    { t: 'La rodilla es una articulación: por ella se dobla la pierna.', ok: true, por: 'Ahí se juntan huesos y la pierna se dobla.' },
    { t: 'La nariz es una articulación porque está en la cara.', ok: false, por: 'La nariz no se dobla: ahí no se juntan dos huesos.' },
    { t: 'Cuando escribo, muevo la articulación de la muñeca.', ok: true, por: 'La muñeca se dobla para mover la mano.' },
    { t: 'El pelo tiene muchas articulaciones para moverse con el viento.', ok: false, por: 'El pelo no tiene huesos, así que no tiene articulaciones.' }
  ],
  ejemplos: [
    { t: 'La rodilla', ok: true },
    { t: 'El codo', ok: true },
    { t: 'El tobillo', ok: true },
    { t: 'La nariz', ok: false },
    { t: 'La uña', ok: false },
    { t: 'El pelo', ok: false }
  ],
  pregunta: '¿Es una articulación?',
  acaba: ['Si no tuviera articulaciones en las rodillas, no podría…', 'Para coger un lápiz, doblo la articulación de…'],
  habla: 'Busca en tu cuerpo tres articulaciones y dóblalas. Tu compañero busca otras tres.',
  rel: { parecida: [], contraria: [], familia: ['articular'], mas: ['hueso', 'esqueleto', 'músculo'] }
});

PALABRA({
  id: 'higiene', palabra: 'higiene', silabas: ['hi', 'gie', 'ne'],
  tipo: 'nombre', nivel: 2, curso: 1, semana: 15, orden: 4, bloque: 'medio',
  def: 'La higiene es mantener limpio el cuerpo: lavarse las manos, ducharse y cepillarse los dientes.',
  otro: null,
  escena: { img: 'higiene.webp', texto: 'Nico llega del parque con las manos llenas de tierra. Antes de merendar, se las lava con agua y jabón. Por la noche se ducha y se cepilla los dientes. Nico cuida su higiene.' },
  contextos: [
    'En el comedor del cole, la higiene empieza por lavarse las manos.',
    'La dentista dice que la higiene de los dientes es muy importante.',
    'Los gatos cuidan su higiene lamiéndose el pelo.'
  ],
  gesto: 'Frótate las manos como si tuvieras jabón entre los dedos.',
  sentido: [
    { t: 'Cepillarme los dientes después de comer es parte de mi higiene.', ok: true, por: 'Así mantiene limpia la boca.' },
    { t: 'Para cuidar mi higiene, no me lavo nunca las manos.', ok: false, por: 'Sin lavarse, el cuerpo no está limpio.' },
    { t: 'Ducharse después de jugar al fútbol es higiene.', ok: true, por: 'Quita el sudor y la suciedad del cuerpo.' },
    { t: 'La higiene es ponerse ropa de muchos colores.', ok: false, por: 'Los colores no tienen que ver con estar limpio.' }
  ],
  ejemplos: [
    { t: 'Lavarse las manos con jabón', ok: true },
    { t: 'Cepillarse los dientes', ok: true },
    { t: 'Ducharse', ok: true },
    { t: 'Comer una manzana', ok: false },
    { t: 'Saltar a la comba', ok: false },
    { t: 'Ponerse el abrigo', ok: false }
  ],
  pregunta: '¿Es higiene?',
  acaba: ['Antes de comer me lavo las manos porque…', 'Para mi higiene, cada noche yo…'],
  habla: 'Cuenta a tu compañero qué haces por la mañana para tu higiene.',
  rel: { parecida: ['limpieza'], contraria: ['suciedad'], familia: ['higiénico'] }
});

PALABRA({
  id: 'descansar', palabra: 'descansar', silabas: ['des', 'can', 'sar'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 15, orden: 5, bloque: 'medio',
  def: 'Descansar es parar un rato o dormir para que el cuerpo recupere fuerzas.',
  otro: null,
  escena: { img: 'descansar.webp', texto: 'Laura ha jugado toda la mañana al fútbol en el patio. Tiene las piernas muy flojas. Se sienta a la sombra, bebe agua y se queda quieta un buen rato. Laura descansa.' },
  contextos: [
    'Por la noche descanso en mi cama.',
    'En la excursión paramos a descansar debajo de un árbol.',
    'Después de la clase de gimnasia, descansamos un poco antes de seguir.'
  ],
  gesto: 'Junta las manos junto a la mejilla e inclina la cabeza, como sobre una almohada.',
  sentido: [
    { t: 'Después de nadar, me tumbé en la toalla a descansar.', ok: true, por: 'Paró para recuperar fuerzas.' },
    { t: 'Para descansar, me puse a correr sin parar.', ok: false, por: 'Correr sin parar cansa más.' },
    { t: 'Los domingos descanso y duermo un poco más.', ok: true, por: 'Duerme más y recupera fuerzas.' },
    { t: 'El caballo descansa tirando del carro todo el día.', ok: false, por: 'Tirar del carro es trabajar, no descansar.' }
  ],
  ejemplos: [
    { t: 'Dormir la siesta', ok: true },
    { t: 'Sentarse un rato después de correr', ok: true },
    { t: 'Tumbarse con los ojos cerrados', ok: true },
    { t: 'Subir una montaña', ok: false },
    { t: 'Bailar sin parar', ok: false },
    { t: 'Cargar con una mochila pesada', ok: false }
  ],
  acaba: ['Necesito descansar cuando…', 'Me gusta descansar en… porque…'],
  habla: '¿Dónde y cómo te gusta descansar? Cuéntaselo a tu compañero.',
  rel: { parecida: ['parar un rato'], contraria: [], familia: ['descanso', 'cansado'], mas: ['reposar', 'agotado'] }
});

PALABRA({
  id: 'saludable', palabra: 'saludable', silabas: ['sa', 'lu', 'da', 'ble'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 15, orden: 6, bloque: 'medio',
  def: 'Algo es saludable cuando es bueno para el cuerpo y ayuda a estar sano.',
  otro: null,
  escena: { img: 'saludable.webp', texto: 'En el desayuno, Omar toma leche, pan con tomate y una naranja. Después va andando al cole con su madre. Por la noche se acuesta pronto. Omar lleva una vida saludable.' },
  contextos: [
    'La fruta es un alimento saludable.',
    'Los viernes traemos al cole un almuerzo saludable.',
    'Pasear por el campo es muy saludable.'
  ],
  gesto: 'Mueve los brazos como si corrieras, sentado en la silla.',
  sentido: [
    { t: 'Beber agua cuando tienes sed es saludable.', ok: true, por: 'Es bueno para el cuerpo.' },
    { t: 'Lo más saludable es comer solo chucherías.', ok: false, por: 'Muchas chucherías no son buenas para el cuerpo.' },
    { t: 'Andar un rato cada día es saludable.', ok: true, por: 'Moverse ayuda a estar sano.' },
    { t: 'Quedarse despierto toda la noche es muy saludable.', ok: false, por: 'El cuerpo necesita dormir para estar sano.' }
  ],
  ejemplos: [
    { t: 'Una pieza de fruta', ok: true },
    { t: 'Montar en bici', ok: true },
    { t: 'Dormir las horas que tocan', ok: true },
    { t: 'Comer chuches todos los días', ok: false },
    { t: 'Pasar toda la tarde con la tableta', ok: false },
    { t: 'Acostarse muy tarde', ok: false }
  ],
  acaba: ['Algo saludable que hago cada día es…', 'Un desayuno saludable lleva…'],
  habla: 'Inventa con tu compañero un almuerzo saludable para mañana.',
  rel: { parecida: ['sano'], contraria: [], familia: ['salud'], mas: ['perjudicial'] }
});
```

## Notas para quien programe

- Los `id` sin tilde: `articulacion` (cinco palmadas: ar-ti-cu-la-ción).
- **Nombres** (`articulación`, `higiene`): llevan `pregunta`. `articulación` con artículo («¿Es una
  articulación?»); `higiene` sin él («¿Es higiene?»), porque sus ejemplos son cosas que se hacen.
- `articulación` es de **nivel 3**, como pide la lista: palabra de la asignatura, que se queda con el gesto
  de doblar el codo. Sus ejemplos son partes del cuerpo con artículo («La rodilla», «La nariz»).
- Se distinguen con cuidado: `higiene` (estar limpio) y `saludable` (bueno para el cuerpo): comer fruta o
  hacer deporte son saludables, pero no son higiene (no-ejemplos de `higiene`). `descansar` (lo que se
  hace) y `agotado` (semana 2, cómo se está): `agotado` va en `rel.mas` de `descansar`.
- **Gestos cercanos a otras semanas, a vigilar en la revisión:** `respirar` (dedo bajo la nariz) y `ser vivo`
  (mano en la barriga y respira hondo, semana 10); `saborear` (lengua por los labios) y `alimento` (cuchara
  a la boca, semana 10). Son distintos a la vista, pero si se confunden en «¿Qué palabra es?» basta
  añadirlos a `GESTOS_PARECIDOS`. Ninguno de los gestos nombra la palabra (el de `respirar` dice «aire», no
  «respira»).
- `saludable`: los no-ejemplos hablan de costumbres (chuches todos los días, acostarse tarde), no de
  personas ni de familias; la sesión no juzga lo que come nadie. El «almuerzo saludable» de los contextos es
  el de muchos colegios andaluces.
- `respirar` enlaza con `nervioso` y `tranquilo` (contexto «respiro despacio y me calmo») y con `furioso`
  (semana 16).
- Orden recomendado dentro de la semana: respirar, saborear, articulación, higiene, descansar, saludable
  (la última recoge todas las demás).
