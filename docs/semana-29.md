# Semana 29 · contenido completo (1.º)

Seis palabras escritas con las normas de `docs/pedagogia.md` y el modelo de `docs/semana-01.md`.
Al programar, cada bloque pasa tal cual a `src/js/palabras/s29-<id>.js`.

Tres palabras para pensar (plan, además, atento), una pareja de contrarias del tiempo que hace
(soleado, nublado) y una de convivir (confiar).

```js
PALABRA({
  id: 'plan', palabra: 'plan', silabas: ['plan'],
  tipo: 'nombre', nivel: 2, curso: 1, semana: 29, orden: 1, bloque: 'pensar',
  def: 'Un plan es lo que pensamos hacer, y en qué orden, antes de empezar.',
  otro: null,
  escena: { img: 'plan.webp', texto: 'Es sábado por la mañana. Iker y su madre se sientan a pensar: primero, al mercado; después, al parque; y por la tarde, a ver a los abuelos. Iker lo dibuja en un papel. ¡Ya tienen un plan para todo el día!' },
  contextos: [
    'En casa hicimos un plan para el cumpleaños de mi hermana: globos, tarta y juegos.',
    'En clase, antes de hacer el mural, hacemos un plan: quién pinta y quién recorta.',
    'En el campo, antes de la excursión, el monitor nos contó el plan del día.'
  ],
  gesto: 'Con un dedo, salta de un punto a otro de la mesa, como en un mapa: aquí, luego aquí y luego aquí.',
  sentido: [
    { t: 'Antes de construir la cabaña, hicimos un plan: primero las ramas y después el techo.', ok: true, por: 'Pensaron qué hacer, y en qué orden, antes de empezar.' },
    { t: 'Hicimos el plan de la excursión cuando ya habíamos vuelto a casa.', ok: false, por: 'El plan se hace antes de empezar, no al acabar.' },
    { t: 'Mi plan para el recreo es comerme el bocadillo y luego jugar a la comba.', ok: true, por: 'Es lo que piensa hacer, y en qué orden.' },
    { t: 'Me tropecé sin querer: ese era mi plan.', ok: false, por: 'Lo que pasa sin querer no se ha pensado antes.' }
  ],
  ejemplos: [
    { t: 'Pensar el sábado qué vais a hacer el domingo', ok: true },
    { t: 'Decidir antes del partido quién será el portero', ok: true },
    { t: 'Apuntar los pasos para hacer una tarta antes de empezar', ok: true },
    { t: 'Un estornudo', ok: false },
    { t: 'Caerte de la bici sin querer', ok: false },
    { t: 'Algo que ya pasó ayer', ok: false }
  ],
  pregunta: '¿Es un plan?',
  acaba: ['Mi plan para este fin de semana es…', 'Antes de hacer un dibujo grande, mi plan es…'],
  habla: 'Haced entre los dos un plan para una tarde de lluvia: ¿qué haréis primero, y después?',
  rel: { parecida: ['lo que vamos a hacer'], contraria: [], familia: ['planear', 'planificar'], mas: ['idea', 'proponer', 'organizar'] }
});

PALABRA({
  id: 'ademas', palabra: 'además', silabas: ['a', 'de', 'más'],
  tipo: 'enlace', nivel: 2, curso: 1, semana: 29, orden: 2, bloque: 'pensar',
  def: 'Decimos «además» cuando añadimos una cosa más a lo que ya hemos dicho.',
  otro: null,
  escena: { img: 'ademas.webp', texto: 'Nora enseña a la clase su mochila nueva. «Es azul y tiene muchos bolsillos», dice. Luego tira de una cremallera y saca una linterna pequeñita. Su mochila es bonita y, además, ¡tiene linterna!' },
  contextos: [
    'En casa, mi abuela hace unas croquetas muy ricas y, además, muy grandes.',
    'En clase hoy hemos pintado y, además, hemos aprendido una canción.',
    'En el parque hay columpios y, además, un tobogán muy largo.'
  ],
  gesto: 'Haz como que echas una cosa en una cesta y, enseguida, echas otra más.',
  sentido: [
    { t: 'Hace frío y, además, está lloviendo: cogeré el paraguas y el abrigo.', ok: true, por: 'Al frío se le suma otra cosa más: la lluvia.' },
    { t: 'Mi gato es muy tranquilo y, además, no se está quieto ni un momento.', ok: false, por: 'No suma nada: dice lo contrario de lo que acaba de decir.' },
    { t: 'Lucía sabe nadar y, además, sabe bucear.', ok: true, por: 'Añade otra cosa más que sabe hacer.' },
    { t: 'La sopa está fría y, además, quema muchísimo.', ok: false, por: 'Si está fría, no puede quemar: no se suma, se contradice.' }
  ],
  ejemplos: [
    { t: 'El helado está rico y, además, es de mi sabor favorito', ok: true },
    { t: 'Me he lavado las manos y, además, la cara', ok: true },
    { t: 'Mi perro es grande y, además, muy juguetón', ok: true },
    { t: 'Es de día y, además, es de noche', ok: false },
    { t: 'Estoy despierto y, además, profundamente dormido', ok: false },
    { t: 'El vaso está lleno y, además, vacío', ok: false }
  ],
  pregunta: '¿Está bien dicho con «además»?',
  acaba: ['Mi mejor amigo es simpático y, además, …', 'En el recreo juego al pilla-pilla y, además, …'],
  habla: 'Dile a tu compañero una cosa que te gusta de tu casa y, además, otra más. Luego cambiáis.',
  rel: { parecida: ['también'], contraria: [], familia: [], mas: ['encima', 'en cambio', 'por eso'] }
});

PALABRA({
  id: 'soleado', palabra: 'soleado', silabas: ['so', 'le', 'a', 'do'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 29, orden: 3, bloque: 'como-son', sep: 'soleado-nublado',
  def: 'Un día está soleado cuando el sol brilla en el cielo y casi no hay nubes.',
  otro: null,
  escena: { img: 'soleado.webp', texto: 'Hugo se despierta y sube la persiana. El cielo está azul y el sol le calienta la cara. Coge la gorra y la crema para ir a la playa. ¡Hace un día soleado!' },
  contextos: [
    'En casa tendemos la ropa en los días soleados, porque se seca enseguida.',
    'En el cole, cuando el día está soleado, el recreo es en el patio grande.',
    'En la playa, en un día soleado, hay que ponerse crema y gorra.'
  ],
  gesto: 'Haz un círculo con los brazos por encima de la cabeza y abre los dedos, como rayos.',
  sentido: [
    { t: 'Era un día soleado y nos pusimos las gafas de sol.', ok: true, por: 'El sol brillaba mucho.' },
    { t: 'El día estaba muy soleado: el cielo estaba gris y lleno de nubes.', ok: false, por: 'Con el cielo gris y lleno de nubes, no se ve el sol.' },
    { t: 'Como la tarde estaba soleada, fuimos a merendar al parque.', ok: true, por: 'Hacía sol y se estaba bien fuera.' },
    { t: 'A medianoche, el cielo estaba soleadísimo.', ok: false, por: 'De noche no se ve el sol.' }
  ],
  ejemplos: [
    { t: 'Un cielo azul con el sol brillando', ok: true },
    { t: 'Una mañana de playa sin una sola nube', ok: true },
    { t: 'Una tarde en la que hay que llevar gorra', ok: true },
    { t: 'Un día gris de tormenta', ok: false },
    { t: 'Una mañana de niebla', ok: false },
    { t: 'Una noche estrellada', ok: false }
  ],
  acaba: ['En un día soleado, a mí me gusta…', 'Sé que el día está soleado porque…'],
  habla: 'Contad entre los dos qué hacéis en un día soleado y qué ropa os ponéis.',
  rel: { parecida: [], contraria: ['nublado'], familia: ['sol'], mas: ['despejado', 'caluroso', 'luminoso'] }
});

PALABRA({
  id: 'nublado', palabra: 'nublado', silabas: ['nu', 'bla', 'do'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 29, orden: 4, bloque: 'como-son', sep: 'soleado-nublado',
  def: 'Un día está nublado cuando hay muchas nubes en el cielo y tapan el sol.',
  otro: null,
  escena: { img: 'nublado.webp', texto: 'Daniela quiere ir a la piscina. Pero, al salir de casa, ve el cielo gris. Unas nubes grandes tapan el sol. «Hoy no hay piscina», dice su padre, «está nublado».' },
  contextos: [
    'En casa, en los días nublados, encendemos la luz por la mañana.',
    'En el cole, cuando está nublado, llevamos el chubasquero por si llueve.',
    'En el campo, la tarde se puso nublada y no pudimos ver la puesta de sol.'
  ],
  gesto: 'Por encima de la cabeza, mueve despacio las dos manos ahuecadas, como algodón que pasa por el cielo.',
  sentido: [
    { t: 'El cielo estaba nublado y no se veía el sol.', ok: true, por: 'Las nubes tapaban el sol.' },
    { t: 'Era un día muy nublado, sin ni una nube en el cielo.', ok: false, por: 'Sin nubes, el día no puede estar nublado.' },
    { t: 'Como estaba nublado, la maestra dijo: «Coged el chubasquero, por si acaso».', ok: true, por: 'Con muchas nubes, puede llover.' },
    { t: 'Estaba tan nublado que el sol nos quemó la nariz.', ok: false, por: 'Si las nubes tapan el sol, no quema.' }
  ],
  ejemplos: [
    { t: 'Un cielo gris lleno de nubes', ok: true },
    { t: 'Una mañana en la que las nubes no dejan ver el sol', ok: true },
    { t: 'Una tarde gris en la que parece que va a llover', ok: true },
    { t: 'Un cielo azul y limpio', ok: false },
    { t: 'Un mediodía de playa con mucho sol', ok: false },
    { t: 'Una mañana despejada de verano', ok: false }
  ],
  acaba: ['Cuando el día está nublado, yo me pongo…', 'Sé que está nublado porque…'],
  habla: '¿Os gustan más los días nublados o los soleados? Contadlo entre los dos y decid por qué.',
  rel: { parecida: [], contraria: ['soleado'], familia: ['nube', 'nublarse'], mas: ['gris', 'lluvioso', 'despejado'] }
});

PALABRA({
  id: 'atento', palabra: 'atento', silabas: ['a', 'ten', 'to'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 29, orden: 5, bloque: 'pensar',
  def: 'Estás atento cuando miras y escuchas bien, preparado para lo que va a pasar.',
  otro: 'También es alguien que se da cuenta de lo que necesitan los demás: «¡Qué niño tan atento!».',
  escena: { img: 'atento.webp', texto: 'Lola y su padre esperan para cruzar la calle. El semáforo está en rojo y Lola no deja de mirarlo. En cuanto se pone verde, avisa: «¡Ya podemos cruzar!». ¡Qué atenta estaba Lola!' },
  contextos: [
    'En casa, mi gata se queda atenta a la puerta cuando oye llegar a mi padre.',
    'En clase estamos atentos cuando habla un compañero.',
    'En el partido, la portera está atenta a la pelota todo el rato.'
  ],
  gesto: 'Ponte una mano detrás de la oreja y abre mucho los ojos, sin moverte.',
  sentido: [
    { t: 'Estaba atento a la maestra y me enteré de todo lo que dijo.', ok: true, por: 'Escuchaba bien y no se perdió nada.' },
    { t: 'Estaba muy atento al cuento y no me enteré de nada.', ok: false, por: 'Si estás atento, te enteras de lo que pasa.' },
    { t: 'El perro, atento, levantó las orejas al oír un ruido.', ok: true, por: 'Estaba preparado para lo que pudiera pasar.' },
    { t: 'Me distraje mirando por la ventana porque estaba muy atento.', ok: false, por: 'Distraerse es lo contrario de estar atento.' }
  ],
  ejemplos: [
    { t: 'Mirar al semáforo para saber cuándo cruzar', ok: true },
    { t: 'Escuchar sin hablar cuando un compañero explica algo', ok: true },
    { t: 'Esperar la señal de salida de una carrera, mirando a quien la da', ok: true },
    { t: 'Mirar por la ventana mientras la maestra explica', ok: false },
    { t: 'Dormirse viendo una película', ok: false },
    { t: 'Hablar con el de al lado cuando otro cuenta algo', ok: false }
  ],
  acaba: ['En clase sé que estoy atento porque…', 'Si no estoy atento al cruzar la calle…'],
  habla: 'Tu compañero te cuenta qué desayunó hoy. Escúchalo bien y repíteselo después. Luego cambiáis.',
  rel: { parecida: [], contraria: ['despistado'], familia: ['atención'], mas: ['observar', 'fijarse', 'concentrarse', 'distraído'] }
});

PALABRA({
  id: 'confiar', palabra: 'confiar', silabas: ['con', 'fiar'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 29, orden: 6, bloque: 'convivir',
  def: 'Confías en alguien cuando sabes que no te va a fallar y te sientes seguro con él.',
  otro: null,
  escena: { img: 'confiar.webp', texto: 'En el patio, Vera se tapa los ojos con un pañuelo. Su amigo Teo la lleva de la mano: «Cuidado, ahora un escalón». Vera camina tranquila, sin miedo. ¡Vera confía en Teo!' },
  contextos: [
    'En casa, mis padres confían en mí y me dejan regar las plantas yo solo.',
    'En el cole, confío en mi amiga Laia: nunca cuenta mis secretos.',
    'En la piscina, me tiré al agua porque confiaba en mi monitor, que me esperaba dentro.'
  ],
  gesto: 'Cierra los ojos y deja una mano abierta hacia un lado, como si alguien te fuera a guiar.',
  sentido: [
    { t: 'Confío en mi abuela: cuando dice que vendrá a buscarme, siempre viene.', ok: true, por: 'Sabe que su abuela no le va a fallar.' },
    { t: 'Confío mucho en Leo, porque siempre me engaña.', ok: false, por: 'Si alguien te engaña siempre, no te sientes seguro con él.' },
    { t: 'Le conté mi secreto a Sara porque confío en ella.', ok: true, por: 'Sabe que Sara no lo contará.' },
    { t: 'Confío en mi amigo, así que nunca le dejo mis cosas.', ok: false, por: 'Si confías en alguien, te sientes seguro dejándole tus cosas.' }
  ],
  ejemplos: [
    { t: 'Contarle un secreto a tu mejor amiga', ok: true },
    { t: 'Dejar que un amigo te lleve con los ojos tapados', ok: true },
    { t: 'Saltar a los brazos de tu padre en la piscina', ok: true },
    { t: 'Esconder tus cosas para que tu amigo no las toque', ok: false },
    { t: 'No creer nada de lo que te dice tu compañero', ok: false },
    { t: 'Pensar que tu amigo te va a hacer trampas', ok: false }
  ],
  acaba: ['Confío en… porque…', 'Sé que puedo confiar en alguien cuando…'],
  habla: 'Contad entre los dos en quién confiáis mucho y por qué.',
  rel: { parecida: ['fiarse'], contraria: [], familia: ['confianza', 'desconfiar'], mas: ['creer', 'amistad', 'secreto'] }
});
```

## Notas para quien programe

- **Semana de pensar antes de hacer y del tiempo que hace:** `plan` y `además` sirven para contar y
  organizar; `soleado` y `nublado` enlazan con `helado` y `caluroso` (semana 12) y con las estaciones
  (semana 10); `atento` cierra la familia de mirar bien, y `confiar` es de convivir.
- `plan` frente a `idea` (semana 22) y `proponer` (semana 21): la idea **se te ocurre**; el plan es
  **lo que vas a hacer y en qué orden**; proponer es **decirlo a los demás**. `plan` lleva `pregunta`
  (nombre) y pregunta «lo que vamos a hacer». `organizar` (2.º, semana 6) va en `rel.mas`.
- `además` es un enlace: sus ejemplos son frases, y los «no» juntan dos cosas que no pueden ir a la
  vez (lo que se suma tiene que poder sumarse). Lleva `pregunta`, como `durante`. Pregunta «también».
  `en cambio` y `por eso` (2.º, semana 5) van en `rel.mas`.
- `soleado` y `nublado` son contrarias (`sep: 'soleado-nublado'`) y se preguntan una a otra en
  `relaciona`, como `natural` y `artificial`. No tienen parecida: las que valdrían son de su familia
  (sol, nube) o más difíciles (despejado). El gesto de `nublado` no dice «nube» (es de su familia).
- `atento` frente a `observar` (semana 1), `fijarse` (22) y `concentrarse` (27): observar es **mirar
  algo despacio**; fijarse, **darse cuenta de cómo es**; concentrarse, **poner toda la atención en una
  sola cosa**; atento es **estar preparado, mirando y escuchando, para lo que va a pasar** (el
  semáforo, la pelota). Va en el bloque `pensar`, con ellas. Segundo significado: alguien atento con
  los demás. Pregunta «lo contrario de despistado». **`cuidadoso` tiene `atento` como pregunta
  parecida**: con `PAQUETE_1`, no la pregunta hasta que se presente `atento`.
- `confiar`: todas las escenas y ejemplos son con personas que el niño conoce y que lo cuidan (familia,
  amigos, monitor). Ninguna con desconocidos. Pregunta «fiarse». `desconfiar` es de su familia.
- **Gestos cercanos a vigilar:** `plan` (saltar de punto a punto en la mesa) y `cantidad` (tocar la mesa
  deprisa, semana 17); `además` (echar dos cosas en una cesta) y `doble` (tres y tres dedos, semana 17);
  `soleado` (círculo con rayos sobre la cabeza) y `agradable` (cara al sol, semana 16); `nublado` (manos
  ahuecadas que pasan) y `proteger` (tejado sobre la cabeza, semana 5); `atento` (mano en la oreja) y
  `contestar` (mano junto a la boca, semana 11); `confiar` (ojos cerrados y mano tendida) y `necesitar`
  (manos que piden, semana 10).
- Orden recomendado dentro de la semana: plan, además, soleado, nublado, atento, confiar.
