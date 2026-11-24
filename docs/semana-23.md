# Semana 23 · contenido completo (1.º)

Seis palabras escritas con las normas de `docs/pedagogia.md` y el modelo de `docs/semana-01.md`.
Al programar, cada bloque pasa tal cual a `src/js/palabras/s23-<id>.js`.

Dos palabras para pensar (colocar, serie), dos de cómo son las cosas (entero, estropeado), un
sentimiento (desanimado) y una de convivir (consolar). Es la semana de «cada cosa en su sitio, y
cada amigo a tu lado».

```js
PALABRA({
  id: 'colocar', palabra: 'colocar', silabas: ['co', 'lo', 'car'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 23, orden: 1, bloque: 'pensar',
  def: 'Colocar es poner una cosa en el sitio que tú quieres, para que se quede allí.',
  otro: null,
  escena: { img: 'colocar.webp', texto: 'Hugo ayuda a su abuela a poner la mesa. Pone el plato, el vaso y la servilleta. Luego deja el tenedor a un lado del plato y la cuchara al otro. ¡Hugo lo ha colocado todo muy bien!' },
  contextos: [
    'En casa coloco mis zapatos debajo de la cama.',
    'En clase, la maestra colocó el mapa en la pared.',
    'En el parque colocamos la toalla a la sombra de un árbol.'
  ],
  gesto: 'Haz como que metes un libro en una estantería y lo empujas con la palma hasta el fondo.',
  sentido: [
    { t: 'Coloqué la foto de mi perro encima de la mesilla.', ok: true, por: 'La puso en un sitio para que se quedara allí.' },
    { t: 'Coloqué el abrigo en la percha, pero se quedó en el suelo.', ok: false, por: 'Si se queda en el suelo, no lo has puesto en la percha.' },
    { t: 'Mi padre colocó el cuadro un poco más arriba.', ok: true, por: 'Lo puso en el sitio que quería.' },
    { t: 'Mi hermano colocó su ropa tirándola por toda la habitación.', ok: false, por: 'Tirar las cosas de cualquier manera no es colocarlas.' }
  ],
  ejemplos: [
    { t: 'Poner una flor en un jarrón', ok: true },
    { t: 'Dejar el cuento en su estante', ok: true },
    { t: 'Poner la estrella en lo alto del árbol', ok: true },
    { t: 'Tirar papeles al suelo', ok: false },
    { t: 'Dejar caer un vaso sin querer', ok: false },
    { t: 'Esconderte debajo de la mesa', ok: false }
  ],
  acaba: ['En mi cuarto coloco mis juguetes…', 'Si colocamos bien las sillas, …'],
  habla: 'Dile a tu compañero dónde colocarías una planta en la clase y por qué.',
  rel: { parecida: ['poner'], contraria: ['quitar'], familia: [], mas: ['ordenar', 'dejar'] }
});

PALABRA({
  id: 'serie', palabra: 'serie', silabas: ['se', 'rie'],
  tipo: 'nombre', nivel: 2, curso: 1, semana: 23, orden: 2, bloque: 'pensar',
  def: 'Una serie es una fila de cosas que se repiten siempre en el mismo orden.',
  otro: 'También es una historia de la tele que se ve en muchos capítulos.',
  escena: { img: 'serie.webp', texto: 'Alba hace un collar con bolitas: una roja, una azul, una roja, una azul… Su hermano le pregunta: «¿Y ahora cuál va?». Alba sonríe y coge una roja. ¡Está haciendo una serie!' },
  contextos: [
    'En casa hicimos una guirnalda con una serie de estrellas y lunas.',
    'En clase continuamos la serie: círculo, cuadrado, círculo, cuadrado…',
    'En el parque, las baldosas forman una serie: blanca, gris, blanca, gris.'
  ],
  gesto: 'Toca la mesa así: puño, palma, puño, palma, puño… y para.',
  sentido: [
    { t: 'Mi camiseta tiene una serie de rayas: verde, blanca, verde, blanca.', ok: true, por: 'Los colores se repiten siempre igual.' },
    { t: 'Hice una serie con cinco lápices puestos de cualquier manera.', ok: false, por: 'Si no hay un orden que se repite, no es una serie.' },
    { t: 'Si la serie es «gato, perro, gato, perro», lo siguiente es gato.', ok: true, por: 'Se sigue el mismo orden.' },
    { t: 'En la serie «sol, luna, sol, luna», después de luna va una estrella.', ok: false, por: 'Después de luna toca sol: la serie se repite.' }
  ],
  ejemplos: [
    { t: 'Rojo, azul, rojo, azul, rojo', ok: true },
    { t: 'Palmada, pie, palmada, pie', ok: true },
    { t: 'Un collar de bola grande, bola pequeña, bola grande…', ok: true },
    { t: 'Un montón de bolas de colores revueltas', ok: false },
    { t: 'Un solo cuadrado', ok: false },
    { t: 'El dibujo de una casa con un árbol', ok: false }
  ],
  pregunta: '¿Es una serie?',
  acaba: ['Voy a inventar una serie con colores: …', 'En la ropa de la clase hay una serie en…'],
  habla: 'Haz una serie con palmadas y pies. ¿Sabe tu compañero cómo sigue?',
  rel: { parecida: [], contraria: [], familia: [], mas: ['fila', 'orden', 'patrón'] }
});

PALABRA({
  id: 'entero', palabra: 'entero', silabas: ['en', 'te', 'ro'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 23, orden: 3, bloque: 'como-son', sep: 'entero-estropeado',
  def: 'Algo está entero cuando tiene todas sus partes y no está roto ni partido.',
  otro: null,
  escena: { img: 'entero.webp', texto: 'Daniel y su madre recogen conchas en la playa. Casi todas están rotas o les falta un trozo. De pronto, Daniel encuentra una grande, sin ni una grieta. ¡Está entera!' },
  contextos: [
    'En casa compramos una sandía entera y mi padre la partió.',
    'En clase, el puzle está entero: no falta ninguna pieza.',
    'En el campo encontramos una hoja seca entera, sin ningún agujero.'
  ],
  gesto: 'Pon las manos como si sostuvieras una pelota grande y gírala despacio, mirándola por todos lados.',
  sentido: [
    { t: 'El jarrón se cayó, pero no se rompió: sigue entero.', ok: true, por: 'No se ha roto: tiene todas sus partes.' },
    { t: 'La galleta está entera, aunque le falta un mordisco.', ok: false, por: 'Si le falta un trozo, ya no está entera.' },
    { t: 'Al abrir la caja, todas las galletas estaban enteras.', ok: true, por: 'Ninguna estaba rota.' },
    { t: 'El cristal está entero: tiene una raja de lado a lado.', ok: false, por: 'Si tiene una raja, está roto.' }
  ],
  ejemplos: [
    { t: 'Una tarta que nadie ha empezado', ok: true },
    { t: 'Un plato sin grietas ni trozos rotos', ok: true },
    { t: 'Un huevo sin cascar', ok: true },
    { t: 'Un plato partido en dos', ok: false },
    { t: 'Una galleta mordida', ok: false },
    { t: 'Una muñeca a la que se le ha caído un brazo', ok: false }
  ],
  acaba: ['Una cosa que tengo entera desde hace mucho es…', 'Para que el vaso siga entero, tengo que…'],
  habla: 'Busca en la clase algo que esté entero y cuéntale a tu compañero cómo lo cuidamos.',
  rel: { parecida: ['sin romper'], contraria: ['roto'], familia: [], mas: ['completo', 'partido', 'estropeado'] }
});

PALABRA({
  id: 'estropeado', palabra: 'estropeado', silabas: ['es', 'tro', 'pe', 'a', 'do'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 23, orden: 4, bloque: 'como-son', sep: 'entero-estropeado',
  def: 'Algo está estropeado cuando se ha dañado y ya no funciona o no está bien.',
  otro: null,
  escena: { img: 'estropeado.webp', texto: 'Lucas sube a su bici para ir al parque. Pedalea y pedalea, pero la bici no se mueve: la cadena se ha soltado. Su abuelo la mira y dice: «Vamos a arreglarla». La bici de Lucas está estropeada.' },
  contextos: [
    'En casa, la lavadora está estropeada y no lava.',
    'En clase, el sacapuntas está estropeado: no saca punta.',
    'En el parque, el columpio estaba estropeado y no se podía usar.'
  ],
  gesto: 'Pulsa varias veces un botón imaginario, espera y niega con la cabeza: no pasa nada.',
  sentido: [
    { t: 'La linterna está estropeada: ya no da luz.', ok: true, por: 'Se ha dañado y no funciona.' },
    { t: 'Mi reloj está estropeado porque da muy bien la hora.', ok: false, por: 'Si da bien la hora, funciona.' },
    { t: 'El grifo se estropeó y ahora gotea todo el rato.', ok: true, por: 'Ya no funciona bien.' },
    { t: 'El juguete está estropeado: lo acabo de sacar de la caja y va perfecto.', ok: false, por: 'Si va perfecto, no está estropeado.' }
  ],
  ejemplos: [
    { t: 'Una tele que no se enciende', ok: true },
    { t: 'Un paraguas que ya no se abre', ok: true },
    { t: 'Una cremallera que ya no cierra', ok: true },
    { t: 'Un coche de juguete que corre muy bien', ok: false },
    { t: 'Una linterna que da mucha luz', ok: false },
    { t: 'Un vaso nuevo, recién sacado de la caja', ok: false }
  ],
  acaba: ['Una vez se me estropeó… y…', 'Cuando algo está estropeado, podemos…'],
  habla: 'Cuéntale a tu compañero algo que se estropeó en tu casa. ¿Lo arreglasteis?',
  rel: { parecida: ['que no funciona'], contraria: [], familia: ['estropear'], mas: ['roto', 'averiado', 'arreglar', 'entero'] }
});

PALABRA({
  id: 'desanimado', palabra: 'desanimado', silabas: ['de', 'sa', 'ni', 'ma', 'do'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 23, orden: 5, bloque: 'sentir',
  def: 'Estás desanimado cuando has perdido las ganas y piensas que algo no te va a salir.',
  otro: null,
  escena: { img: 'desanimado.webp', texto: 'Pablo lleva toda la semana entrenando para la carrera del cole. Hoy ha llegado el último. Se sienta en un banco, con la cabeza baja, y dice: «No quiero correr nunca más». Pablo está desanimado.' },
  contextos: [
    'En casa, mi hermana estaba desanimada porque su torre de bloques se caía una y otra vez.',
    'En clase, cuando un dibujo no me sale, a veces me siento desanimado.',
    'En la piscina, Leo estaba desanimado porque todavía no sabía flotar.'
  ],
  gesto: 'Deja caer los hombros y la cabeza, despacio, con un suspiro.',
  sentido: [
    { t: 'Estaba desanimada porque mi planta no crecía, y ya no quería regarla.', ok: true, por: 'Perdió las ganas porque pensaba que no iba a salir.' },
    { t: 'Estaba tan desanimado que salté de alegría.', ok: false, por: 'Si saltas de alegría, estás contento, no desanimado.' },
    { t: 'Después de perder tres partidos, el equipo estaba desanimado.', ok: true, por: 'Ya no tenían ganas de seguir.' },
    { t: 'Me puse desanimado porque el puzle me salió a la primera.', ok: false, por: 'Si te sale a la primera, no pierdes las ganas.' }
  ],
  ejemplos: [
    { t: 'Dejar el puzle porque no encuentras ninguna pieza', ok: true },
    { t: 'No tener ganas de jugar después de perder', ok: true },
    { t: 'Pensar «nunca me va a salir»', ok: true },
    { t: 'Querer jugar otra vez porque te ha encantado', ok: false },
    { t: 'Dar saltos de alegría', ok: false },
    { t: 'Gritar y patalear porque algo no te sale', ok: false }
  ],
  acaba: ['Me siento desanimado cuando…', 'Si un amigo está desanimado, le puedo decir…'],
  habla: 'Pensad entre los dos: ¿qué podemos hacer cuando estamos desanimados?',
  rel: { parecida: ['sin ganas'], contraria: [], familia: ['desanimarse', 'ánimo'], mas: ['animado', 'frustrado', 'triste'] }
});

PALABRA({
  id: 'consolar', palabra: 'consolar', silabas: ['con', 'so', 'lar'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 23, orden: 6, bloque: 'convivir',
  def: 'Consolar es ayudar a alguien que está triste para que se sienta un poco mejor.',
  otro: null,
  escena: { img: 'consolar.webp', texto: 'Pablo sigue en el banco, triste porque ha perdido la carrera. Nora se sienta a su lado y le da un abrazo. «Yo también llegué la última el año pasado», le dice. Nora consuela a Pablo.' },
  contextos: [
    'En casa consolé a mi hermano pequeño cuando se le escapó el globo.',
    'En el cole, cuando me caí en el recreo, un amigo me consoló.',
    'En el parque, mi padre consoló a un niño perdido hasta que llegó su madre.'
  ],
  gesto: 'Con un dedo, haz como que secas una lágrima en la cara de alguien.',
  sentido: [
    { t: 'Cuando mi amiga lloró, la consolé con un abrazo.', ok: true, por: 'La ayudó a sentirse mejor.' },
    { t: 'Consolé a mi primo riéndome de él porque lloraba.', ok: false, por: 'Reírse de alguien que llora no le ayuda: le hace sentir peor.' },
    { t: 'Mi perro me consuela: se tumba a mi lado cuando estoy triste.', ok: true, por: 'Con él cerca se siente mejor.' },
    { t: 'Consolé a mi amigo porque estaba muy contento con su regalo.', ok: false, por: 'Se consuela a alguien que está triste, no contento.' }
  ],
  ejemplos: [
    { t: 'Dar un abrazo a un amigo que llora', ok: true },
    { t: 'Decir «no pasa nada, te ayudo» a quien se ha caído', ok: true },
    { t: 'Sentarte al lado de alguien que está triste', ok: true },
    { t: 'Felicitar a alguien por su cumpleaños', ok: false },
    { t: 'Reírte de alguien que se ha caído', ok: false },
    { t: 'Contar un chiste en una fiesta', ok: false }
  ],
  acaba: ['Cuando estoy triste, me consuela…', 'Para consolar a un amigo, yo…'],
  habla: 'Imagina que tu compañero está triste. ¿Qué le dirías para consolarlo? Probadlo.',
  rel: { parecida: [], contraria: [], familia: ['consuelo'], mas: ['animar', 'abrazar', 'acompañar'] }
});
```

## Notas para quien programe

- **Semana de «cada cosa en su sitio, y cada amigo a tu lado»:** colocar y serie son de los
  enunciados de Matemáticas y de clase; entero y estropeado enseñan cómo están las cosas; desanimado y
  consolar van juntas: **las escenas son la misma historia** (Pablo pierde la carrera y Nora lo
  consuela), como `ancho` y `estrecho` en 2.º. Conviene que las imágenes lleven los mismos niños.
- `colocar` frente a `ordenar` (semana 1): colocar es **poner una cosa en un sitio**; ordenar es
  ponerlas **siguiendo una regla** (de pequeño a grande). El segundo significado de `ordenar` («poner
  cada cosa en su sitio») es casi colocar: por eso `ordenar` va en `rel.mas` de `colocar`. `colocar`
  pregunta «poner» y «lo contrario de quitar». **`ordenar` tiene `colocar` como pregunta de
  `relaciona` (parecida) y `mezclar` (semana 24) como contraria:** como las dos ya están en
  `PAQUETE_1`, `ordenar` no las pregunta hasta que se presenten (mismo caso que `observar` y `fijarse`).
- `serie` es nombre: lleva `pregunta` («¿Es una serie?»). Sus no-ejemplos son cosas revueltas o
  sueltas, sin orden que se repita. No tiene preguntas de `relaciona` (le quedan `acaba` y `habla`).
  **Segundo significado nuevo** (no estaba en la lista): la serie de la tele.
- `entero` frente a `estropeado`: entero es que **no le falta ningún trozo**; estropeado es que **no
  funciona o no está bien**. Algo puede estar entero y estropeado a la vez (un reloj que no anda), así
  que los no-ejemplos que se cruzan están elegidos para que no haya duda: «Una muñeca a la que se le ha
  caído un brazo» en `entero` (no está entera) y «Un vaso nuevo, recién sacado de la caja» en
  `estropeado` (funciona). Llevan `sep: 'entero-estropeado'` (días distintos) y cada una está en
  `rel.mas` de la otra.
- `entero` pregunta «sin romper» y «lo contrario de roto». `estropeado` pregunta «que no funciona»;
  `roto` va en su `rel.mas` para que «roto» no sirva a la vez de parecida de una y de contraria de la
  otra en la misma semana.
- `desanimado` frente a `frustrado` (semana 18): frustrado es **rabia** porque algo no sale;
  desanimado es **perder las ganas**, pensar que no va a salir. El no-ejemplo «Gritar y patalear porque
  algo no te sale» lo marca. Pregunta «sin ganas»; `animado` es de su familia (y de `animar`, semana
  27): va en `rel.mas`, no se pregunta.
- `consolar` (bloque `convivir`) no tiene preguntas de `relaciona`: «dar ánimos» es casi `animar`
  (semana 27) y no hay otra palabra de todos los días que signifique lo mismo. Le quedan `acaba` y
  `habla`. Al escribir `animar` (27), distinguirlas: consolar es ayudar a **quien está triste**; animar
  es dar ganas o fuerza para **seguir** (también a quien no está triste).
- **Gestos cercanos a vigilar:** `colocar` (libro en la estantería) y `proponer` (dejar algo en el
  centro de la mesa, semana 21) y `ordenar` (fila con la mano, semana 1); `serie` (puño, palma) y
  `cantidad` (tocar la mesa deprisa, semana 17); `entero` (girar una pelota grande) y `único` (un dedo
  que gira, semana 22); `desanimado` (pulgar que baja) y `orgulloso` (pulgar arriba, semana 6);
  `consolar` (secar una lágrima) y `equipo` (brazo por los hombros, semana 17).
- Orden recomendado dentro de la semana: colocar, serie, entero, estropeado, desanimado, consolar.
