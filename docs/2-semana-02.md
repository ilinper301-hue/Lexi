# 2.º · Semana 2 · contenido completo

Seis palabras y la pieza de la semana, escritas con las normas de `docs/pedagogia.md` y de
`docs/segundo.md`. Al programar, cada ficha pasa tal cual a `src/js/palabras/2s02-<id>.js` y la pieza
a `src/js/piezas/2s02-cion.js`.

**Aprobada por Iván el 15-11-2026.**

## Las seis palabras

```js
PALABRA({
  id: 'medir', palabra: 'medir', silabas: ['me', 'dir'],
  tipo: 'accion', nivel: 2, curso: 2, semana: 2, bloque: 'pensar',
  def: 'Medir es saber cuánto tiene algo de largo, de ancho o de alto, usando una regla o palmos.',
  otro: 'También medimos cuánto pesa algo con una báscula y cuánto dura con un reloj.',
  escena: { img: 'medir.webp', texto: 'Mateo se pone muy recto contra la pared. Su padre le apoya un libro en la cabeza y hace una marca. Después estira el metro desde el suelo hasta la marca. Así se puede medir cuánto ha crecido Mateo.' },
  contextos: [
    'En clase medimos la pizarra con palmos y luego con la regla.',
    'La carpintera mide la puerta antes de cortar la madera.',
    'Antes de comprar la alfombra, medimos el salón con el metro.'
  ],
  gesto: 'Coge una cinta imaginaria con las dos manos y estírala despacio de lado a lado.',
  sentido: [
    { t: 'Medí el cuaderno con la regla: 30 centímetros de largo.', ok: true, por: 'Usó la regla para saber cuánto tiene de largo.' },
    { t: 'Medí la mesa mirándola de lejos y sin usar nada.', ok: false, por: 'Eso es decirlo a ojo. Para medir hace falta una regla, un metro, palmos…' },
    { t: 'Medimos el pasillo con pasos: veinte pasos de largo.', ok: true, por: 'Los pasos también sirven para medir.' },
    { t: 'Medí cuántos lápices había en el bote: doce.', ok: false, por: 'Eso es contar. Se mide lo largo, lo ancho o lo alto.' }
  ],
  ejemplos: [
    { t: 'Poner la regla junto al lápiz y mirar el número', ok: true },
    { t: 'Estirar el metro de una pared a otra', ok: true },
    { t: 'Contar cuántos palmos tiene la mesa', ok: true },
    { t: 'Decir a ojo «será como mi brazo»', ok: false },
    { t: 'Contar cuántos niños hay en la fila', ok: false },
    { t: 'Poner dos lápices juntos para ver cuál es más largo', ok: false }
  ],
  acaba: ['Para medir la puerta de la clase necesito…', 'Medimos el patio con pasos y nos salió que…'],
  habla: '¿Qué te gustaría medir de tu casa o del cole? Cuéntale a tu compañero qué es y con qué lo medirías.',
  rel: { parecida: ['ver cuánto tiene de largo'], contraria: [], familia: ['medición', 'medida'], mas: ['tomar medidas'] },
  fam: {
    si: [
      { p: 'medición', t: 'Con la regla hicimos la ___ de la mesa.', pieza: 'cion' },
      { p: 'medida', t: 'Apunta la ___ de la ventana: un metro de ancho.' }
    ],
    no: [
      { p: 'médico', por: 'Un médico cura; no tiene que ver con medir.' },
      { p: 'medio', por: 'Medio es la mitad de algo; no tiene que ver con medir.' }
    ]
  }
});

PALABRA({
  id: 'calcular', palabra: 'calcular', silabas: ['cal', 'cu', 'lar'],
  tipo: 'accion', nivel: 2, curso: 2, semana: 2, bloque: 'pensar',
  def: 'Calcular es hacer cuentas, de cabeza o en el papel, para saber cuánto es algo.',
  otro: null,
  escena: { img: 'calcular.webp', texto: 'En la feria del libro, Marta elige dos cuentos. Uno cuesta tres euros y el otro, cuatro. Marta piensa: «Tres más cuatro… ¡siete!». Marta ha calculado cuánto tiene que pagar.' },
  contextos: [
    'En mates calculamos cuánto es 25 más 10.',
    'El panadero calcula cuántas barras tiene que hacer para mañana.',
    'Calculé los días que faltan para mi cumpleaños: doce.'
  ],
  gesto: 'Da golpecitos con un dedo en la sien mientras miras hacia arriba, como quien hace cuentas.',
  sentido: [
    { t: 'Calculé cuánto costaban los dos helados sumando sus precios.', ok: true, por: 'Sumar es hacer una cuenta para saber cuánto es.' },
    { t: 'Calculé el resultado diciendo el primer número que se me ocurrió.', ok: false, por: 'Eso es decir un número al azar. Para calcular hay que hacer la cuenta.' },
    { t: 'Tenía diez canicas y perdí tres. Calculé que me quedaban siete.', ok: true, por: 'Hizo una resta de cabeza.' },
    { t: 'Calculé cuántas páginas tiene el libro mirando el número de la última.', ok: false, por: 'Eso es leer un número, no hacer una cuenta.' }
  ],
  ejemplos: [
    { t: 'Sumar lo que cuestan dos cosas', ok: true },
    { t: 'Restar para saber cuánto te devuelven', ok: true },
    { t: 'Pensar de cabeza cuánto es el doble de ocho', ok: true },
    { t: 'Decir un número al azar', ok: false },
    { t: 'Copiar el resultado de la pizarra', ok: false },
    { t: 'Leer el precio en la etiqueta', ok: false }
  ],
  acaba: ['Si quiero saber cuánto cuestan tres cromos, tengo que calcular…', 'Calculé de cabeza y me salió que…'],
  habla: '¿Cuándo has tenido que calcular algo fuera del cole: en una tienda, en un juego…? Cuéntaselo a tu compañero.',
  rel: { parecida: ['hacer cuentas'], contraria: [], familia: ['cálculo', 'calculadora'], mas: ['operar'] },
  fam: {
    si: [
      { p: 'cálculo', t: 'Hice el ___ de cabeza: veinte más veinte, cuarenta.' },
      { p: 'calculadora', t: 'Comprobé la cuenta con la ___ de mi madre.' }
    ],
    no: [
      { p: 'calcetín', por: 'Un calcetín se pone en el pie; no tiene que ver con calcular.' },
      { p: 'calor', por: 'El calor es lo que sentimos en verano; no tiene que ver con calcular.' }
    ]
  }
});

PALABRA({
  id: 'estimar', palabra: 'estimar', silabas: ['es', 'ti', 'mar'],
  tipo: 'accion', nivel: 2, curso: 2, semana: 2, bloque: 'pensar',
  def: 'Estimar es pensar y decir, más o menos, cuánto hay o cuánto mide algo sin contarlo ni medirlo.',
  otro: null,
  escena: { img: 'estimar.webp', texto: 'En la fiesta del cole hay un bote lleno de canicas. No se puede abrir ni contar. Samuel lo mira bien por todos lados y dice: «Habrá unas doscientas». Samuel ha estimado cuántas hay.' },
  contextos: [
    'Antes de medir la pizarra, estimamos: «tendrá unos dos metros».',
    'El cocinero estima cuánta sal le hace falta y la echa con los dedos.',
    'Miramos la cola del cine y estimamos que tardaremos diez minutos.'
  ],
  gesto: 'Guiña un ojo y levanta el pulgar a lo lejos, como una pintora que mira su modelo.',
  sentido: [
    { t: 'No tenía regla, así que estimé que la mesa medía como cinco palmos.', ok: true, por: 'Lo pensó y lo dijo más o menos, sin medir.' },
    { t: 'Estimé cuántos éramos contándonos uno a uno.', ok: false, por: 'Si cuentas uno a uno, lo sabes seguro: eso es contar.' },
    { t: 'Estimamos que en el árbol había unos treinta pájaros.', ok: true, por: 'No se podían contar bien y lo dijeron más o menos.' },
    { t: 'Estimé los caramelos sin mirar el bote: dije «un millón».', ok: false, por: 'Estimar no es decir cualquier número: hay que mirar y pensar.' }
  ],
  ejemplos: [
    { t: 'Mirar la fila y decir «seremos unos veinte»', ok: true },
    { t: 'Coger una sandía y decir «pesará como dos kilos»', ok: true },
    { t: 'Pensar «tardaré más o menos diez minutos»', ok: true },
    { t: 'Contar las canicas una a una', ok: false },
    { t: 'Medir la mesa con la regla', ok: false },
    { t: 'Decir un número cualquiera sin mirar', ok: false }
  ],
  acaba: ['Estimo que en esta clase hay unos…', 'No tenía reloj, así que estimé que…'],
  habla: 'Estima con tu compañero cuántos libros hay en la clase, sin contarlos. Explicad cómo lo habéis pensado.',
  rel: { parecida: ['calcular a ojo', 'decir más o menos cuánto'], contraria: [], familia: ['estimación'], mas: ['aproximar'] }
});

PALABRA({
  id: 'exacto', palabra: 'exacto', silabas: ['e', 'xac', 'to'],
  tipo: 'cualidad', nivel: 2, curso: 2, semana: 2, bloque: 'como-son',
  def: 'Algo es exacto cuando es justo eso: ni un poco más ni un poco menos.',
  otro: null,
  escena: { img: 'exacto.webp', texto: 'Elsa pone sus cromos en fila y los cuenta uno a uno. Son veintitrés. No dice «unos veinte»: dice veintitrés, ni uno más ni uno menos. Ese es el número exacto.' },
  contextos: [
    'La receta pide la cantidad exacta: dos huevos, no tres.',
    'El tren sale a la hora exacta: las cinco en punto.',
    'En el problema nos piden el resultado exacto, no uno parecido.'
  ],
  gesto: 'Pon un dedo sobre un punto de la mesa, de golpe y sin moverlo: «justo aquí».',
  sentido: [
    { t: 'Conté las sillas una a una y supe el número exacto: veinticuatro.', ok: true, por: 'Al contarlas todas, sabe justo cuántas hay.' },
    { t: 'No las conté, pero sé el número exacto: unas treinta, más o menos.', ok: false, por: '«Unas treinta, más o menos» no es exacto.' },
    { t: 'Para que la llave abra, tiene que tener la forma exacta.', ok: true, por: 'Si cambia un poco, ya no abre.' },
    { t: 'Llegué a la hora exacta: un rato antes o un rato después, no sé.', ok: false, por: 'Si no sabe cuándo llegó, no fue a la hora exacta.' }
  ],
  ejemplos: [
    { t: '«Tengo 23 cromos»', ok: true },
    { t: '«Son las cinco en punto»', ok: true },
    { t: '«La mesa mide 80 centímetros justos»', ok: true },
    { t: '«Tengo unos veinte cromos»', ok: false },
    { t: '«Serán las cinco, más o menos»', ok: false },
    { t: '«La mesa mide casi un metro»', ok: false }
  ],
  acaba: ['Para saber el número exacto de niños de la clase, tengo que…', 'En una receta, la cantidad exacta es importante porque…'],
  habla: '¿Sabes el día exacto de tu cumpleaños? ¿Y la hora exacta a la que naciste? Cuéntaselo a tu compañero.',
  rel: { parecida: ['ni más ni menos'], contraria: ['aproximado'], familia: ['exactamente', 'exactitud'], mas: ['preciso', 'justo', 'inexacto'] }
});

PALABRA({
  id: 'aproximado', palabra: 'aproximado', silabas: ['a', 'pro', 'xi', 'ma', 'do'],
  tipo: 'cualidad', nivel: 2, curso: 2, semana: 2, bloque: 'como-son',
  def: 'Algo es aproximado cuando se acerca mucho a lo que es de verdad, pero no es exacto.',
  otro: null,
  escena: { img: 'aproximado.webp', texto: 'Rubén vuelve de un cumpleaños. «¿Cuántos niños había?», pregunta su madre. Rubén no los contó: «Unos quince, más o menos». Es un número aproximado.' },
  contextos: [
    'El autobús tarda un tiempo aproximado de media hora.',
    'En el mapa del tesoro, la cruz marca un sitio aproximado.',
    'El veterinario dice que la gata tiene una edad aproximada de dos años.'
  ],
  gesto: 'Balancea la mano abierta en el aire, a un lado y a otro: «más o menos».',
  sentido: [
    { t: 'No conté los pasos; te digo un número aproximado: unos cien.', ok: true, por: 'No lo sabe justo, pero se acerca.' },
    { t: 'En mi clase somos 25. Dije «unos mil»: es un número aproximado.', ok: false, por: 'Mil está lejísimos de 25. Aproximado es cerca: «unos veinte» o «casi treinta».' },
    { t: 'El dibujo del mapa es aproximado: el río no es justo así, pero se le parece.', ok: true, por: 'Se acerca a cómo es de verdad.' },
    { t: 'Medí con la regla y salió un resultado aproximado: 12 centímetros justos.', ok: false, por: '«12 centímetros justos» es un resultado exacto.' }
  ],
  ejemplos: [
    { t: '«Vinieron unas cien personas»', ok: true },
    { t: '«Tardamos casi una hora»', ok: true },
    { t: '«Pesa alrededor de dos kilos»', ok: true },
    { t: '«Vinieron 98 personas»', ok: false },
    { t: '«Tardamos 55 minutos»', ok: false },
    { t: '«Pesa dos kilos justos»', ok: false }
  ],
  acaba: ['Te digo una hora aproximada: llegaré…', 'No sé cuántos árboles hay en el parque, pero un número aproximado sería…'],
  habla: 'Dile a tu compañero cosas tuyas con números aproximados: cuántos pasos hay de tu casa al cole, cuántos libros tienes…',
  rel: { parecida: ['más o menos'], contraria: ['exacto'], familia: ['aproximadamente', 'aproximación', 'aproximar'], mas: ['cercano'] },
  fam: {
    si: [
      { p: 'aproximadamente', t: 'Tardamos ___ una hora, no lo sé seguro.' },
      { p: 'aproximación', t: 'No hace falta el resultado justo: me vale una ___.', pieza: 'cion' }
    ],
    no: [
      { p: 'aprender', por: 'Aprender es llegar a saber algo nuevo; no tiene que ver con aproximado.' }
    ]
  }
});

PALABRA({
  id: 'aliviado', palabra: 'aliviado', silabas: ['a', 'li', 'via', 'do'],
  tipo: 'cualidad', nivel: 2, curso: 2, semana: 2, bloque: 'sentir',
  def: 'Alguien se siente aliviado cuando se le quita una preocupación o un dolor y respira tranquilo.',
  otro: null,
  escena: { img: 'aliviado.webp', texto: 'Por la mañana, Pablo corre a la ventana. ¡Ha dejado de llover y sale el sol! La excursión no se suspende. Pablo suelta el aire y sonríe: se siente aliviado.' },
  contextos: [
    'Encontré el estuche debajo de la cama y me quedé aliviada.',
    'La maestra respiró aliviada cuando contó a los niños y estaban todos.',
    'Con la pomada dejó de picarme la picadura y me sentí aliviado.'
  ],
  gesto: 'Pásate el dorso de la mano por la frente y suelta el aire: «¡menos mal!».',
  sentido: [
    { t: 'Creía que había perdido las llaves; cuando aparecieron, me sentí aliviado.', ok: true, por: 'Se le quitó la preocupación.' },
    { t: 'Me sentí aliviada cuando vi que la mochila seguía sin aparecer.', ok: false, por: 'Si no aparece, la preocupación sigue.' },
    { t: 'El dentista dijo que no tenía caries y salí aliviada.', ok: true, por: 'Temía algo malo y no pasó.' },
    { t: 'Estaba tranquilo en el sofá, sin pensar en nada, y de pronto me sentí aliviado.', ok: false, por: 'Para sentirse así, antes tiene que haber una preocupación o un dolor.' }
  ],
  ejemplos: [
    { t: 'Encontrar al perro que se había escapado', ok: true },
    { t: 'Que deje de dolerte la barriga', ok: true },
    { t: 'Saber que al final tu amigo no se ha hecho daño', ok: true },
    { t: 'Seguir buscando el abrigo sin encontrarlo', ok: false },
    { t: 'Estar contento porque es tu cumpleaños', ok: false },
    { t: 'Tener sueño', ok: false }
  ],
  acaba: ['Me sentí aliviado cuando por fin…', 'Mi madre respiró aliviada porque…'],
  habla: 'Cuenta a tu compañero una vez que estabas preocupado y luego te sentiste aliviado. ¿Qué pasó?',
  rel: { parecida: ['tranquilo otra vez'], contraria: ['preocupado'], familia: ['alivio', 'aliviar'], mas: ['calmado'] },
  fam: {
    si: [
      { p: 'alivio', t: '¡Qué ___! La mochila estaba en el coche.' },
      { p: 'aliviar', t: 'La pomada me va a ___ el picor.' }
    ],
    no: [
      { p: 'alimento', por: 'Un alimento es algo que se come; no tiene que ver con sentirse aliviado.' }
    ]
  }
});
```

## La pieza de la semana: `-ción`

Sale cuando `medir` y `estimar` ya están presentadas (regla P2). Los ejemplos son los aprobados en el
punto 31 de `ESTADO.md`: todos se pueden desmontar en «palabra que ya sé + pieza».

```js
PIEZA({
  id: 'cion', curso: 2, semana: 2, tipo: 'sufijo', forma: '-ción',
  idea: 'Con -ción decimos el nombre de lo que hacemos: cuando medimos, hacemos una medición.',
  ancla: ['medir', 'estimar'],
  ejemplos: [
    { a: 'medir', b: 'medición', t: 'Medimos la mesa: hacemos una medición.' },
    { a: 'estimar', b: 'estimación', t: 'Estimo que hay unas veinte canicas: es mi estimación.' },
    { a: 'explicar', b: 'explicación', t: 'La maestra explica el juego: nos da una explicación.' },
    { a: 'comparar', b: 'comparación', t: 'Comparamos dos hojas: hacemos una comparación.' },
    { a: 'clasificar', b: 'clasificación', t: 'Clasificamos los botones por colores: hacemos una clasificación.' }
  ],
  prueba: [
    { t: 'De «indicar» sale «indicación».', ok: true, por: 'Indicar y -ción: una indicación es lo que das cuando indicas.' },
    { t: '«Porción» lleva la pieza -ción.', ok: false, por: 'Acaba igual, pero no sale de ninguna acción: no existe «porcir». Una porción es un trozo.' },
    { t: 'De «observar» sale «observación».', ok: true, por: 'Observar y -ción: una observación es lo que haces cuando observas.' },
    { t: 'Cuando dibujamos, hacemos una «dibujación».', ok: false, por: 'Esa palabra no existe: decimos «un dibujo». No todas las acciones usan -ción.' }
  ],
  habla: 'Elige una: medición, explicación o comparación. Dile a tu compañero una frase con ella.'
});
```

## Notas para quien programe

- **Orden dentro de la semana:** medir, calcular, estimar, exacto, aproximado, aliviado.
- `medir` va antes que `estimar`, y `exacto` antes que `aproximado`: la segunda definición de cada
  pareja usa la primera («sin contarlo ni medirlo», «pero no es exacto»).
- `exacto` y `aproximado` son contrarias: se presentan en días distintos y en ese orden (marca `sep`
  común). Sus ejemplos son frases entre comillas y se corresponden a propósito.
- `medir` cambia al conjugarse: «mido», «mide», «midió». Tiene `otro`: también se mide el peso y el
  tiempo. La definición nombra los palmos porque en 2.º se mide primero con palmos, pies y pasos.
- **Las tres acciones se distinguen por sus no-ejemplos:** medir no es decirlo a ojo ni contar;
  calcular no es decir un número al azar ni leerlo; estimar no es contar, ni medir, ni decir un número
  cualquiera. Conviene comentarlos.
- `aproximado`: la frase «unos mil» es la importante. Aproximado no es cualquier número: es uno cercano.
- `aliviado` comparte historia con `preocupado` (semana 1): las dos imágenes deben mostrar al mismo
  niño y la misma ventana. Su gesto (mano por la frente) se parece al de `agotado` (1.º, semana 4):
  no ponerlos juntos en «¿Qué palabra es?».
- **`familia`:** la llevan medir, calcular, aproximado y aliviado. `estimar` solo tiene «estimación»
  (hacen falta dos) y `exacto` solo tiene «exactamente» como palabra que un niño de 7 años haya oído
  (regla F10). «estimación» sí sale en la pieza.
- «calculadora» no lleva la pieza `-or, -ora` (semana 3) a propósito: ya la conocen y no hace falta
  que espere.
- En la pieza, los dos «no» de `prueba` son de dos clases: una palabra que acaba igual sin llevar la
  pieza («porción») y una palabra inventada («dibujación»), para que no se use `-ción` con todo.
