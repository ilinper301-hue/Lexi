# Semana 1 · contenido completo (1.º)

Seis palabras escritas con las normas de `docs/pedagogia.md`. Sirven de modelo para el resto.
Al programar, cada bloque pasa tal cual a `src/js/palabras/s01-<id>.js`.

```js
PALABRA({
  id: 'observar', palabra: 'observar', silabas: ['ob', 'ser', 'var'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 1, bloque: 'pensar',
  def: 'Observar es mirar algo despacio y con mucha atención para fijarte en los detalles.',
  otro: null,
  escena: { img: 'observar.webp', texto: 'Lola encuentra una mariquita en el patio. Se agacha y la mira muy despacio. ¡Tiene siete puntos negros! Lola está observando la mariquita.' },
  contextos: [
    'En clase observamos una hoja con la lupa.',
    'La médica observa tu garganta para saber qué te pasa.',
    'Por la noche observamos la luna desde la ventana.'
  ],
  gesto: 'Haz unos prismáticos con las manos y mira despacio.',
  sentido: [
    { t: 'Observé la hormiga y vi que llevaba una miga de pan.', ok: true, por: 'Al mirarla con atención descubrió un detalle.' },
    { t: 'Observé el dibujo con los ojos cerrados.', ok: false, por: 'Para observar hay que mirar.' },
    { t: 'Observamos las nubes y una parecía un conejo.', ok: true, por: 'Se fijaron bien en su forma.' },
    { t: 'Pasé corriendo sin mirar y observé todas las flores.', ok: false, por: 'Observar es mirar despacio, no de pasada.' }
  ],
  ejemplos: [
    { t: 'Mirar una flor con la lupa', ok: true },
    { t: 'Fijarte en cómo come un pájaro', ok: true },
    { t: 'Buscar las diferencias entre dos dibujos', ok: true },
    { t: 'Ver algo un segundo y marcharte', ok: false },
    { t: 'Escuchar una canción', ok: false },
    { t: 'Cerrar los ojos', ok: false }
  ],
  acaba: ['Cuando observé el cielo, vi…', 'Para encontrar las diferencias tengo que observar porque…'],
  habla: '¿Qué te gusta observar a ti? Cuéntaselo a tu compañero.',
  rel: { parecida: ['fijarse', 'mirar con atención'], contraria: [], familia: ['observación', 'observador'] }
});

PALABRA({
  id: 'comparar', palabra: 'comparar', silabas: ['com', 'pa', 'rar'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 1, bloque: 'pensar',
  def: 'Comparar es fijarte en dos cosas para ver en qué se parecen y en qué son diferentes.',
  otro: null,
  escena: { img: 'comparar.webp', texto: 'Hugo tiene dos lápices. Los pone juntos, uno al lado del otro. El rojo es más largo que el azul. Hugo ha comparado los lápices.' },
  contextos: [
    'En mates comparamos dos números para saber cuál es mayor.',
    'Marta compara su mano con la de su abuelo: la del abuelo es más grande.',
    'En la frutería comparamos dos sandías para elegir una.'
  ],
  gesto: 'Sube las dos manos como una balanza y mira una y luego la otra.',
  sentido: [
    { t: 'Comparé mis zapatos con los de mi hermano y los suyos eran más grandes.', ok: true, por: 'Se fijó en los dos y vio la diferencia.' },
    { t: 'Comparé un gato.', ok: false, por: 'Para comparar hacen falta dos cosas.' },
    { t: 'Comparamos dos torres para ver cuál era más alta.', ok: true, por: 'Miraron las dos a la vez.' },
    { t: 'Comparé las dos manzanas sin mirar ninguna.', ok: false, por: 'Para comparar hay que fijarse en las dos.' }
  ],
  ejemplos: [
    { t: 'Poner dos lápices juntos para ver cuál es más largo', ok: true },
    { t: 'Mirar quién es más alto, tú o tu amiga', ok: true },
    { t: 'Decir en qué se parecen un perro y un gato', ok: true },
    { t: 'Contar cuántos lápices hay', ok: false },
    { t: 'Mirar solo un lápiz', ok: false },
    { t: 'Colorear un dibujo', ok: false }
  ],
  acaba: ['Si comparo un elefante con un ratón, veo que…', 'Comparé los dos dibujos y descubrí que…'],
  habla: 'Compara tu estuche con el de tu compañero. ¿En qué se parecen? ¿En qué son diferentes?',
  rel: { parecida: [], contraria: [], familia: ['comparación'] }
});

PALABRA({
  id: 'ordenar', palabra: 'ordenar', silabas: ['or', 'de', 'nar'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 1, bloque: 'pensar',
  def: 'Ordenar es colocar las cosas siguiendo una regla: de pequeño a grande, de primero a último…',
  otro: 'También es poner cada cosa en su sitio, como cuando ordenas tu cuarto.',
  escena: { img: 'ordenar.webp', texto: 'Vera tiene tres ositos. Pone primero el pequeño, después el mediano y al final el grande. Vera ha ordenado los ositos de menor a mayor.' },
  contextos: [
    'En mates ordenamos los números: 1, 2, 3, 4.',
    'Para salir al recreo nos ordenamos en fila.',
    'Ordenamos los dibujos del cuento: qué pasó primero y qué pasó después.'
  ],
  gesto: 'Con la mano, coloca en fila tres cosas imaginarias: una, dos y tres.',
  sentido: [
    { t: 'Ordené los lápices del más corto al más largo.', ok: true, por: 'Siguió una regla: de corto a largo.' },
    { t: 'Ordené los números tirándolos al aire.', ok: false, por: 'Ordenar es colocar con una regla, no al azar.' },
    { t: 'Ordenamos las fotos desde que era bebé hasta ahora.', ok: true, por: 'Siguieron el orden del tiempo.' },
    { t: 'Ordené las cartas mezclándolas todas.', ok: false, por: 'Mezclar es lo contrario de ordenar.' }
  ],
  ejemplos: [
    { t: 'Poner los números del 1 al 5', ok: true },
    { t: 'Hacer la fila del más bajo al más alto', ok: true },
    { t: 'Colocar los días: lunes, martes, miércoles', ok: true },
    { t: 'Mezclar las piezas del puzle', ok: false },
    { t: 'Contar cuántos somos', ok: false },
    { t: 'Rodear el número mayor', ok: false }
  ],
  acaba: ['Para ordenar estos números de menor a mayor, empiezo por…', 'Si ordeno a mi familia del más joven al más mayor, primero va…'],
  habla: '¿Cómo ordenarías tus juguetes: por tamaño, por color…? Cuéntaselo a tu compañero.',
  rel: { parecida: ['colocar'], contraria: ['desordenar', 'mezclar'], familia: ['orden', 'ordenado', 'desordenar'] }
});

PALABRA({
  id: 'enorme', palabra: 'enorme', silabas: ['e', 'nor', 'me'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 1, bloque: 'como-son',
  def: 'Algo es enorme cuando es muy, muy grande, tan grande que sorprende.',
  otro: null,
  escena: { img: 'enorme.webp', texto: 'Dani va en barco con su abuela. De pronto, una ballena sale del agua. ¡Es más grande que un autobús! La ballena es enorme.' },
  contextos: [
    'El árbol del parque es enorme: no podemos abrazarlo ni entre cuatro.',
    'Mi abuela hizo una tarta enorme y comimos todos.',
    'Algunos dinosaurios eran enormes.'
  ],
  gesto: 'Abre los brazos todo lo que puedas.',
  sentido: [
    { t: 'Necesitamos una caja enorme para guardar la bici.', ok: true, por: 'La bici es grande y necesita una caja muy grande.' },
    { t: 'Guardé una piedra enorme en mi bolsillo.', ok: false, por: 'Algo enorme no cabe en un bolsillo.' },
    { t: 'El elefante es un animal enorme.', ok: true, por: 'Es muy, muy grande.' },
    { t: 'La miga de pan era enorme: casi no se veía.', ok: false, por: 'Si casi no se ve, es diminuta.' }
  ],
  ejemplos: [
    { t: 'Una ballena', ok: true },
    { t: 'Una montaña', ok: true },
    { t: 'Un rascacielos', ok: true },
    { t: 'Una silla', ok: false },
    { t: 'Un garbanzo', ok: false },
    { t: 'Una mariquita', ok: false }
  ],
  acaba: ['Vi algo enorme. Era…', 'Si tuviera una pizza enorme…'],
  habla: '¿Qué cosa enorme has visto alguna vez? Cuéntaselo a tu compañero.',
  rel: { parecida: ['gigante', 'muy grande'], contraria: ['diminuto'], familia: [] }
});

PALABRA({
  id: 'fragil', palabra: 'frágil', silabas: ['frá', 'gil'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 1, bloque: 'como-son',
  def: 'Algo es frágil cuando se rompe con facilidad y hay que tratarlo con cuidado.',
  otro: null,
  escena: { img: 'fragil.webp', texto: 'Ana lleva un huevo en la mano. Camina muy despacio para que no se le caiga. Si se cae, se rompe. El huevo es frágil.' },
  contextos: [
    'Los vasos de cristal son frágiles: los cogemos con las dos manos.',
    'Las alas de la mariposa son frágiles; por eso no las tocamos.',
    'En la caja pone «frágil» porque dentro hay un jarrón.'
  ],
  gesto: 'Junta las manos como si llevaras un pajarito y muévelas muy despacio.',
  sentido: [
    { t: 'Cogí la copa con cuidado porque es frágil.', ok: true, por: 'Lo frágil se trata con cuidado.' },
    { t: 'La piedra es tan frágil que no se rompe nunca.', ok: false, por: 'Si no se rompe nunca, es resistente.' },
    { t: 'Envolvimos el jarrón frágil con mucho papel.', ok: true, por: 'Así lo protegemos para que no se rompa.' },
    { t: 'Mi martillo de hierro es muy frágil.', ok: false, por: 'El hierro es duro y resistente.' }
  ],
  ejemplos: [
    { t: 'Un huevo', ok: true },
    { t: 'Una copa de cristal', ok: true },
    { t: 'Una pompa de jabón', ok: true },
    { t: 'Un martillo', ok: false },
    { t: 'Una piedra', ok: false },
    { t: 'Un balón de fútbol', ok: false }
  ],
  acaba: ['Hay que tener cuidado con las cosas frágiles porque…', 'En mi casa hay algo frágil: …'],
  habla: '¿Qué cosa frágil hay en tu casa? ¿Cómo la cuidáis?',
  rel: { parecida: ['delicado'], contraria: ['resistente', 'duro'], familia: ['fragilidad'] }
});

PALABRA({
  id: 'curioso', palabra: 'curioso', silabas: ['cu', 'rio', 'so'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 1, bloque: 'sentir',
  def: 'Alguien es curioso cuando tiene muchas ganas de saber y descubrir cosas nuevas.',
  otro: 'También decimos que algo es curioso cuando es raro y nos llama la atención.',
  escena: { img: 'curioso.webp', texto: 'Leo ve una caja cerrada encima de la mesa. «¿Qué habrá dentro?», piensa. Se acerca, la mira por todos lados y pregunta a su madre. Leo es un niño curioso.' },
  contextos: [
    'Mi gata es curiosa: mete la cabeza en todas las bolsas.',
    'Sara es curiosa y siempre pregunta «¿por qué?».',
    'Las científicas son personas curiosas: quieren saber cómo funciona todo.'
  ],
  gesto: 'Ladea la cabeza y ponte un dedo en la barbilla: «¿y esto qué es?».',
  sentido: [
    { t: 'Como soy curioso, abrí el libro para saber cómo viven los pingüinos.', ok: true, por: 'Quería saber algo nuevo.' },
    { t: 'Pablo es muy curioso: nunca quiere saber nada.', ok: false, por: 'Quien es curioso quiere saber cosas.' },
    { t: 'La niña curiosa preguntó cómo se hace el pan.', ok: true, por: 'Preguntar es querer saber.' },
    { t: 'El perro curioso se quedó dormido sin mirar nada.', ok: false, por: 'Si fuera curioso, querría mirar y oler.' }
  ],
  ejemplos: [
    { t: 'Preguntar por qué llueve', ok: true },
    { t: 'Mirar un bicho con la lupa', ok: true },
    { t: 'Abrir un libro para saber de dinosaurios', ok: true },
    { t: 'Decir «me da igual»', ok: false },
    { t: 'No querer probar nada nuevo', ok: false },
    { t: 'Dormir la siesta', ok: false }
  ],
  acaba: ['Soy curioso y me gustaría saber…', 'La gata curiosa vio una caja y…'],
  habla: '¿Qué te gustaría descubrir a ti? Cuéntaselo a tu compañero.',
  rel: { parecida: [], contraria: [], familia: ['curiosidad', 'curiosear'] }
});
```

## Notas para quien programe

- `cu-rio-so`, `frá-gil` y `e-nor-me` están separadas por sílabas reales; no las recalcules.
- `ordenar` y `curioso` tienen segundo significado (`otro`): se enseña después del principal, en un
  día distinto, no en la presentación.
