# Semana 11 · contenido completo (1.º)

Seis palabras escritas con las normas de `docs/pedagogia.md` y el modelo de `docs/semana-01.md`.
Al programar, cada bloque pasa tal cual a `src/js/palabras/s11-<id>.js`.

Primera semana del segundo trimestre (lista en `docs/lista-1-semanas-11-30.md`). Tres palabras de los
enunciados de las fichas (tachar, marcar, contestar), una pareja de contrarias y un sentimiento.

```js
PALABRA({
  id: 'tachar', palabra: 'tachar', silabas: ['ta', 'char'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 11, orden: 1, bloque: 'pensar', sep: 'tachar-marcar',
  def: 'Tachar es hacer una raya encima de algo porque sobra, está mal o ya está hecho.',
  otro: null,
  escena: { img: 'tachar.webp', texto: 'Hugo hace con dibujos la lista de la compra: leche, pan y plátanos. «¡Uy, plátanos ya tenemos!», dice su madre. Hugo pasa una raya por encima de los plátanos. Los ha tachado.' },
  contextos: [
    'En la ficha, tacha el animal que no vuela.',
    'Mi hermana tacha en el calendario cada día que pasa, hasta que llegue su cumpleaños.',
    'En el cartel de la frutería han tachado el precio viejo y han puesto otro.'
  ],
  gesto: 'Con el dedo, raya fuerte la mesa de lado a lado, como quien tapa algo.',
  sentido: [
    { t: 'Me equivoqué al escribir mi nombre, lo taché y lo escribí otra vez.', ok: true, por: 'La raya enseña que estaba mal.' },
    { t: 'Taché la respuesta buena para que la maestra viera que estaba bien.', ok: false, por: 'Se tacha lo que está mal o sobra, no lo que está bien.' },
    { t: 'En mi lista de tareas, taché «hacer la cama» cuando ya la había hecho.', ok: true, por: 'Ya estaba hecho: sobraba en la lista.' },
    { t: 'Taché el dibujo con un círculo alrededor para que se viera mejor.', ok: false, por: 'Eso es rodear. Tachar es hacer una raya encima.' }
  ],
  ejemplos: [
    { t: 'Una raya sobre la palabra mal escrita', ok: true },
    { t: 'Una raya sobre los días que ya han pasado', ok: true },
    { t: 'Una raya sobre el dibujo que sobra', ok: true },
    { t: 'Un círculo alrededor de la respuesta buena', ok: false },
    { t: 'Una raya debajo del título', ok: false },
    { t: 'Borrar una palabra con la goma', ok: false }
  ],
  acaba: ['En la lista de la compra, tachamos… porque…', 'Si me equivoco al escribir, puedo tacharlo y…'],
  habla: 'Cuando tachas algo en tu cuaderno, ¿por qué lo haces? Cuéntaselo a tu compañero.',
  rel: { parecida: ['hacer una raya encima'], contraria: [], familia: ['tachón'], mas: ['borrar'] }
});

PALABRA({
  id: 'marcar', palabra: 'marcar', silabas: ['mar', 'car'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 11, orden: 2, bloque: 'pensar', sep: 'tachar-marcar',
  def: 'Marcar es poner una señal, como una cruz o un color, para que se vea cuál es.',
  otro: 'También es meter un gol: «Lucía marcó dos goles en el recreo».',
  escena: { img: 'marcar.webp', texto: 'Rocío y su abuelo miran el folleto del zoo. «¿Qué animales quieres ver?», pregunta él. Rocío pone una cruz junto al león y otra junto a la jirafa. Ha marcado sus animales favoritos.' },
  contextos: [
    'Marca con una cruz la respuesta correcta.',
    'En el bosque, unas flechas pintadas en los árboles marcan el camino.',
    'Mamá marca con rotulador la ropa de mi hermano para el campamento.'
  ],
  gesto: 'Con el dedo, haz una cruz pequeña sobre la mesa, apretando.',
  sentido: [
    { t: 'Marqué con una cruz el dibujo que más me gusta.', ok: true, por: 'La cruz enseña cuál ha elegido.' },
    { t: 'Marqué la respuesta con una cruz para que nadie supiera cuál era.', ok: false, por: 'Se marca para que se vea, no para esconderlo.' },
    { t: 'La maestra marca en verde las palabras bien escritas.', ok: true, por: 'El color enseña cuáles están bien.' },
    { t: 'Marqué la página del libro con una cinta para no encontrarla nunca más.', ok: false, por: 'Se marca la página para encontrarla rápido.' }
  ],
  ejemplos: [
    { t: 'Poner una cruz en la casilla de la respuesta', ok: true },
    { t: 'Pintar de rojo el número que buscas', ok: true },
    { t: 'Poner una pegatina en tu percha', ok: true },
    { t: 'Hacer una raya encima de lo que sobra', ok: false },
    { t: 'Borrar la cruz con la goma', ok: false },
    { t: 'Dejar la ficha en blanco', ok: false }
  ],
  acaba: ['Para encontrar rápido una página del libro, la marco con…', 'Si la ficha dice «marca con una cruz», yo…'],
  habla: 'Piensa en algo que marcas en casa o en clase. ¿Con qué lo marcas y para qué?',
  rel: { parecida: ['señalar'], contraria: [], familia: ['marca', 'marcador'] }
});

PALABRA({
  id: 'contestar', palabra: 'contestar', silabas: ['con', 'tes', 'tar'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 11, orden: 3, bloque: 'pensar',
  def: 'Contestar es decir o escribir algo cuando alguien te pregunta o te llama.',
  otro: null,
  escena: { img: 'contestar.webp', texto: 'La maestra pregunta: «¿Quién sabe cuántas patas tiene una araña?». Sara levanta la mano y dice: «¡Ocho!». La maestra sonríe. Sara ha contestado.' },
  contextos: [
    'Mi abuela me escribe una carta y yo le contesto con un dibujo.',
    'Contesta a las preguntas del cuento con una frase.',
    'Llamé a la puerta del vecino, pero nadie contestó.'
  ],
  gesto: 'Pon una mano junto a la boca, como un altavoz, y mira a quien te ha hablado.',
  sentido: [
    { t: 'Me preguntaron mi nombre y contesté: «Me llamo Ana».', ok: true, por: 'Dijo algo cuando le preguntaron.' },
    { t: 'La maestra contestó: «¿Cuántos años tienes?».', ok: false, por: 'Eso es una pregunta, no una respuesta.' },
    { t: 'En la ficha, contesté todas las preguntas.', ok: true, por: 'Escribió algo en cada pregunta.' },
    { t: 'Me llamaron por mi nombre y contesté quedándome callado.', ok: false, por: 'Si se queda callado, no contesta.' }
  ],
  ejemplos: [
    { t: 'Decir «sí» cuando te preguntan si quieres agua', ok: true },
    { t: 'Decir «¡voy!» cuando te llaman', ok: true },
    { t: 'Escribir tu nombre donde la ficha lo pregunta', ok: true },
    { t: 'Hacerle una pregunta a la maestra', ok: false },
    { t: 'Quedarte callado cuando te preguntan', ok: false },
    { t: 'Llamar a la puerta', ok: false }
  ],
  acaba: ['Si me preguntan cuántos años tengo, contesto…', 'Cuando la maestra pregunta algo, para contestar yo…'],
  habla: 'Hazle una pregunta a tu compañero. Él la contesta y luego cambiáis.',
  rel: { parecida: ['responder'], contraria: ['preguntar'], familia: ['contestación'] }
});

PALABRA({
  id: 'pesado', palabra: 'pesado', silabas: ['pe', 'sa', 'do'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 11, orden: 4, bloque: 'como-son', sep: 'pesado-ligero',
  def: 'Algo es pesado cuando cuesta mucho levantarlo o llevarlo de un sitio a otro.',
  otro: 'También se dice de quien molesta y no para: «¡Qué pesado estás con la pelota!».',
  escena: { img: 'pesado.webp', texto: 'Lola ayuda a su padre a sacar la compra del coche. Coge la bolsa de las naranjas y tira con fuerza, pero casi no se mueve. «¡Cuánto pesa!», dice. La bolsa es muy pesada.' },
  contextos: [
    'Con todos los libros, mi mochila está muy pesada.',
    'El elefante es un animal muy pesado.',
    'Entre dos vecinos suben la caja pesada hasta el quinto piso.'
  ],
  gesto: 'Haz como que levantas un saco con las dos manos y casi no puedes.',
  sentido: [
    { t: 'La sandía es tan pesada que la llevo con las dos manos.', ok: true, por: 'Cuesta levantarla.' },
    { t: 'La pluma es tan pesada que no la puedo levantar.', ok: false, por: 'Una pluma se levanta con un soplo.' },
    { t: 'Mi abuelo no puede subir solo el saco de patatas: es muy pesado.', ok: true, por: 'Le cuesta mucho llevarlo.' },
    { t: 'El globo es muy pesado: se ha ido volando hacia el cielo.', ok: false, por: 'Lo que se va volando no es pesado.' }
  ],
  ejemplos: [
    { t: 'Una sandía', ok: true },
    { t: 'Un piano', ok: true },
    { t: 'Una mochila llena de libros', ok: true },
    { t: 'Una pluma', ok: false },
    { t: 'Un globo', ok: false },
    { t: 'Una mochila vacía', ok: false }
  ],
  acaba: ['Sé que algo es pesado porque…', 'Para llevar una caja muy pesada, yo…'],
  habla: 'Di a tu compañero tres cosas pesadas que haya en tu casa.',
  rel: { parecida: [], contraria: ['ligero'], familia: ['peso', 'pesar'] }
});

PALABRA({
  id: 'ligero', palabra: 'ligero', silabas: ['li', 'ge', 'ro'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 11, orden: 5, bloque: 'como-son', sep: 'pesado-ligero',
  def: 'Algo es ligero cuando pesa poco y se puede levantar o llevar sin esfuerzo.',
  otro: null,
  escena: { img: 'ligero.webp', texto: 'Pablo vacía su mochila al llegar a casa: saca los libros, el estuche y la fiambrera. Luego la levanta con un solo dedo. «¡Ya no pesa nada!», dice. Ahora la mochila es ligera.' },
  contextos: [
    'Las plumas son tan ligeras que el viento se las lleva.',
    'Mi bici nueva es ligera: la subo yo sola por la escalera.',
    'En clase hacemos aviones de papel, porque el papel es ligero y vuela.'
  ],
  gesto: 'Sopla sobre la palma de la mano, como si echaras a volar una pluma.',
  sentido: [
    { t: 'La caja de pañuelos es tan ligera que la levanto con un dedo.', ok: true, por: 'Pesa muy poco.' },
    { t: 'El camión es tan ligero que lo empujo con un dedo.', ok: false, por: 'Un camión pesa muchísimo.' },
    { t: 'Mi gatito es ligero: lo cojo en brazos muy fácilmente.', ok: true, por: 'Pesa poco y no cuesta cogerlo.' },
    { t: 'Esa piedra es tan ligera que entre cuatro no podemos moverla.', ok: false, por: 'Si cuatro no la mueven, pesa mucho.' }
  ],
  ejemplos: [
    { t: 'Una pluma', ok: true },
    { t: 'Un globo', ok: true },
    { t: 'Una mochila vacía', ok: true },
    { t: 'Una sandía', ok: false },
    { t: 'Un piano', ok: false },
    { t: 'Una mochila llena de libros', ok: false }
  ],
  acaba: ['Una cosa ligera de mi clase es… porque…', 'Puedo llevar algo ligero con una mano porque…'],
  habla: '¿Qué es más ligero, una hoja o un libro? Pensad juntos otras dos parejas.',
  rel: { parecida: ['que pesa poco'], contraria: ['pesado'], familia: ['ligereza'], mas: ['liviano'] }
});

PALABRA({
  id: 'emocionado', palabra: 'emocionado', silabas: ['e', 'mo', 'cio', 'na', 'do'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 11, orden: 6, bloque: 'sentir',
  def: 'Estás emocionado cuando sientes mucha alegría y muchas ganas por algo que pasa o va a pasar.',
  otro: null,
  escena: { img: 'emocionado.webp', texto: 'La abuela de Irene vuelve de un viaje muy largo. Cuando la ve en la puerta, Irene corre a abrazarla. Las dos se ríen y a la abuela le caen lágrimas de alegría. Están muy emocionadas.' },
  contextos: [
    'Toda la clase está emocionada: hoy viene un cuentacuentos.',
    'Cuando nuestro equipo marcó el gol, la gente del campo se emocionó.',
    'Papá se emocionó al ver mi primer dibujo de la familia.'
  ],
  gesto: 'Aprieta los puños junto al pecho y da un saltito, sonriendo.',
  sentido: [
    { t: 'Estoy emocionado: ¡mañana vamos al zoo!', ok: true, por: 'Tiene muchas ganas y mucha alegría.' },
    { t: 'Estaba emocionado porque no pasaba nada en toda la tarde.', ok: false, por: 'Si no pasa nada, no hay nada que dé ganas ni alegría.' },
    { t: 'Cuando abrí la carta de mi prima, me emocioné.', ok: true, por: 'Sintió mucha alegría.' },
    { t: 'Estoy tan emocionado con la excursión que no quiero ir.', ok: false, por: 'Si no quiere ir, no tiene ganas.' }
  ],
  ejemplos: [
    { t: 'Volver a ver a tu abuela después de mucho tiempo', ok: true },
    { t: 'Abrir el regalo que tanto querías', ok: true },
    { t: 'Ver a tu equipo ganar la final', ok: true },
    { t: 'Hacer la cama como cada día', ok: false },
    { t: 'Tener miedo de una tormenta', ok: false },
    { t: 'Esperar en la cola del súper', ok: false }
  ],
  acaba: ['Me emociono mucho cuando…', 'Sé que mi amiga estaba emocionada porque…'],
  habla: 'Cuenta a tu compañero un día en que estabas muy emocionado. ¿Qué pasó?',
  rel: { parecida: ['con muchas ganas'], contraria: [], familia: ['emoción', 'emocionante', 'emocionarse'], mas: ['ilusionado', 'entusiasmado'] }
});
```

## Notas para quien programe

- `tachar` y `marcar` son las dos palabras de los enunciados que más se confunden («tacha lo que sobra»,
  «marca la buena»): sus no-ejemplos se cruzan a propósito y llevan `sep: 'tachar-marcar'` para
  presentarse en días distintos. Los dos gestos se hacen sobre la mesa, pero distintos: una raya larga
  (tachar) y una cruz pequeña (marcar). `tachar` también se distingue de `rodear` (semana 4).
- `marcar` tiene segundo significado (`otro`): meter un gol. Su pregunta de `relaciona` es «Se parece
  a *señalar*», y la de `señalar` (semana 2) es «Se parece a *marcar*»: son parejas, como antiguo y
  moderno. Desde que `marcar` es del paquete, esa pregunta de `señalar` solo sale cuando `marcar` ya
  está presentada (regla de `PAQUETE_1`).
- `contestar` es la contraria de `preguntar` (semana 6). Igual que arriba: la pregunta «Lo contrario de
  *contestar*» de `preguntar` solo sale con `contestar` presentada; mientras, le queda «responder».
- `pesado` y `ligero` son contrarias y comparten los seis ejemplos al revés (como antiguo y moderno).
  Llevan `sep: 'pesado-ligero'`.
- `pesado` tiene segundo significado (`otro`): alguien que molesta. No estaba en la lista; se añade
  porque en clase se oye a diario. Si no se quiere, basta con `otro: null`.
- `pesado`: no tiene `parecida` (todas las que sirven son de su familia: «que pesa mucho»). Solo se
  pregunta «Lo contrario de *ligero*».
- `emocionado` frente a `nervioso` (semana 8): la definición de nervioso ya habla de ilusión. Aquí se
  enseña la alegría y las ganas, sin «no poder estar quieto»; por eso la escena es un reencuentro y no
  la noche antes de algo. `emocionado` no tiene contraria: «aburrido» (semana 19) será la contraria de
  `curioso`.
- Orden recomendado dentro de la semana: tachar, marcar, contestar, pesado, ligero, emocionado.
