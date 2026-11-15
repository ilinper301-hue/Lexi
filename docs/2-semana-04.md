# 2.º · Semana 4 · contenido completo

Seis palabras y la pieza de la semana, escritas con las normas de `docs/pedagogia.md` y de
`docs/segundo.md`. Al programar, cada ficha pasa tal cual a `src/js/palabras/2s04-<id>.js` y la pieza
a `src/js/piezas/2s04-parecidas.js`.

**Pendiente de la revisión de Iván.**

## Las seis palabras

```js
PALABRA({
  id: 'investigar', palabra: 'investigar', silabas: ['in', 'ves', 'ti', 'gar'],
  tipo: 'accion', nivel: 2, curso: 2, semana: 4, bloque: 'pensar',
  def: 'Investigar es buscar pistas, preguntar y mirar en varios sitios para llegar a saber algo.',
  otro: null,
  escena: { img: 'investigar.webp', texto: 'Las plantas de la clase se están poniendo amarillas y nadie sabe por qué. Irene mira la tierra, pregunta al jardinero y busca en un libro de plantas. Lleva tres días y no se rinde. Irene está investigando qué les pasa.' },
  contextos: [
    'En el proyecto de los volcanes investigamos por qué echan lava.',
    'Las científicas investigan cómo curar enfermedades.',
    'Mi hermano investigó quién se comía las galletas: ¡era el perro!'
  ],
  gesto: 'Haz como que apartas cosas con las manos, a un lado y a otro, buscando debajo.',
  sentido: [
    { t: 'Para saber de dónde venían las hormigas, investigué siguiendo su fila.', ok: true, por: 'Buscó pistas para llegar a saberlo.' },
    { t: 'Investigué mucho: me lo dijeron nada más entrar y no hice nada.', ok: false, por: 'Si te lo dicen y no buscas nada, no has investigado.' },
    { t: 'Investigamos sobre los pingüinos en tres libros y en un vídeo.', ok: true, por: 'Buscaron en varios sitios.' },
    { t: 'Investigué qué había en la caja sin acercarme ni preguntar a nadie.', ok: false, por: 'Para investigar hay que buscar, mirar o preguntar.' }
  ],
  ejemplos: [
    { t: 'Buscar en libros cómo viven las abejas', ok: true },
    { t: 'Preguntar a varios vecinos para saber de quién es un gato', ok: true },
    { t: 'Hacer pruebas para ver qué planta crece más', ok: true },
    { t: 'Decir lo primero que se te ocurre', ok: false },
    { t: 'Encontrar un caracol por casualidad', ok: false },
    { t: 'Esperar a que alguien te lo cuente', ok: false }
  ],
  acaba: ['Me gustaría investigar por qué…', 'Para investigar sobre un animal, primero…'],
  habla: '¿Sobre qué te gustaría investigar? Cuéntale a tu compañero dónde buscarías y a quién preguntarías.',
  rel: { parecida: ['hacer de detective', 'buscar para saber'], contraria: [], familia: ['investigación', 'investigador', 'investigadora'], mas: ['averiguar', 'indagar', 'descubrir'] },
  fam: {
    si: [
      { p: 'investigación', t: 'Nuestra ___ sobre las abejas duró dos semanas.', pieza: 'cion' },
      { p: 'investigador', t: 'El ___ miró las huellas con su lupa.', pieza: 'or' },
      { p: 'investigadora', t: 'La ___ buscaba una medicina nueva.', pieza: 'or' }
    ],
    no: [
      { p: 'vestido', por: 'Un vestido es una prenda de ropa; no tiene que ver con investigar.' }
    ]
  }
});

PALABRA({
  id: 'anotar', palabra: 'anotar', silabas: ['a', 'no', 'tar'],
  tipo: 'accion', nivel: 2, curso: 2, semana: 4, bloque: 'pensar',
  def: 'Anotar es escribir algo corto para no olvidarlo o para tenerlo a mano después.',
  otro: 'En deportes, anotar es meter un gol o una canasta.',
  escena: { img: 'anotar.webp', texto: 'La maestra dice que mañana hay que traer una caja de cartón. Julia sabe que se le puede olvidar. Saca la agenda y lo escribe en el día de mañana. Julia lo ha anotado.' },
  contextos: [
    'En el experimento anotamos cuánto crece la planta cada semana.',
    'El camarero anota en su libreta lo que pedimos.',
    'Mi madre anota en el calendario los cumpleaños de la familia.'
  ],
  gesto: 'Escribe deprisa con un dedo en la palma de la otra mano, como en una libreta.',
  sentido: [
    { t: 'Anoté el número de teléfono de mi amiga para poder llamarla.', ok: true, por: 'Lo escribió para no olvidarlo.' },
    { t: 'Anoté los deberes de memoria, sin escribir nada.', ok: false, por: 'Anotar es escribirlo. Guardarlo en la cabeza es recordar.' },
    { t: 'Cada día anotamos en una tabla si hace sol o llueve.', ok: true, por: 'Lo escriben para tenerlo a mano después.' },
    { t: 'Anoté el cuento entero, palabra por palabra, y me llevó toda la tarde.', ok: false, por: 'Eso es copiar. Se anota algo corto: una fecha, un nombre, una idea.' }
  ],
  ejemplos: [
    { t: 'Escribir en la agenda la fecha del control', ok: true },
    { t: 'Apuntar un número de teléfono', ok: true },
    { t: 'Poner en un papel lo que hay que comprar', ok: true },
    { t: 'Copiar un cuento entero', ok: false },
    { t: 'Intentar acordarte sin escribir nada', ok: false },
    { t: 'Hacer un dibujo para decorar la libreta', ok: false }
  ],
  acaba: ['En mi agenda anoto…', 'Es mejor anotar las cosas importantes porque…'],
  habla: '¿Qué cosas anotas tú para no olvidarlas, y dónde? Cuéntaselo a tu compañero.',
  rel: { parecida: ['apuntar'], contraria: [], familia: ['nota', 'anotación'], mas: ['registrar', 'tomar nota'] },
  fam: {
    si: [
      { p: 'nota', t: 'Dejé una ___ en la nevera: «Vuelvo a las cinco».' },
      { p: 'anotación', t: 'La maestra escribió una ___ al lado de mi dibujo.', pieza: 'cion' }
    ],
    no: [
      { p: 'anoche', por: 'Anoche es la noche de ayer; no tiene que ver con escribir.' }
    ]
  }
});

PALABRA({
  id: 'consultar', palabra: 'consultar', silabas: ['con', 'sul', 'tar'],
  tipo: 'accion', nivel: 2, curso: 2, semana: 4, bloque: 'pensar',
  def: 'Consultar es buscar un dato en un libro o preguntar a quien sabe para resolver una duda.',
  otro: null,
  escena: { img: 'consultar.webp', texto: 'Dani está escribiendo y duda: ¿«barco» va con be o con uve? No quiere ponerlo al azar. Abre el diccionario, busca la palabra y lo comprueba: va con be. Dani ha consultado el diccionario.' },
  contextos: [
    'Consulto el calendario para saber en qué día cae mi cumpleaños.',
    'Mi padre consulta el mapa antes de salir de viaje.',
    'Como me dolía el oído, fuimos a consultar a la médica.'
  ],
  gesto: 'Abre las manos como un libro y pasa una hoja con un dedo mientras miras dentro.',
  sentido: [
    { t: 'No sabía cómo se escribe «zanahoria» y lo consulté en el diccionario.', ok: true, por: 'Buscó el dato donde está.' },
    { t: 'Consulté el horario del autobús inventándome la hora.', ok: false, por: 'Inventarse la hora no es buscarla en el horario.' },
    { t: 'Antes de regar el cactus, consulté a la florista cuánta agua necesita.', ok: true, por: 'Preguntó a alguien que sabe.' },
    { t: 'Consulté el libro dejándolo cerrado en la mochila.', ok: false, por: 'Para consultarlo hay que abrirlo y buscar.' }
  ],
  ejemplos: [
    { t: 'Mirar en el diccionario cómo se escribe una palabra', ok: true },
    { t: 'Preguntar a la bibliotecaria dónde están los cuentos de animales', ok: true },
    { t: 'Buscar en el horario a qué hora sale el tren', ok: true },
    { t: 'Responder al azar', ok: false },
    { t: 'Leer un cuento entero por gusto', ok: false },
    { t: 'Quedarte con la duda', ok: false }
  ],
  acaba: ['Cuando no sé cómo se escribe una palabra, consulto…', 'Antes de ir de excursión conviene consultar…'],
  habla: 'Cuando tienes una duda, ¿a quién consultas o dónde miras? Cuéntaselo a tu compañero.',
  rel: { parecida: ['mirar para salir de dudas', 'preguntar a quien sabe'], contraria: [], familia: ['consulta'], mas: ['preguntar', 'averiguar'] }
});

PALABRA({
  id: 'transparente', palabra: 'transparente', silabas: ['trans', 'pa', 'ren', 'te'],
  tipo: 'cualidad', nivel: 2, curso: 2, semana: 4, bloque: 'como-son',
  def: 'Algo es transparente cuando se puede ver con claridad lo que hay detrás o dentro.',
  otro: null,
  escena: { img: 'transparente.webp', texto: 'Carla guarda sus tesoros en un bote de cristal. No hace falta abrirlo para saber qué hay. Desde fuera se ven las conchas, las canicas y un botón dorado. El bote es transparente.' },
  contextos: [
    'El agua del río es tan transparente que se ven las piedras del fondo.',
    'Las ventanas tienen cristales transparentes para que entre la luz y veamos la calle.',
    'Forramos el libro con plástico transparente y se sigue viendo la portada.'
  ],
  gesto: 'Pon una mano delante de la cara con los dedos muy abiertos y mira entre ellos.',
  sentido: [
    { t: 'Vi los peces porque la pecera es transparente.', ok: true, por: 'A través del cristal se ve lo que hay dentro.' },
    { t: 'La pared es transparente: no sé qué hay al otro lado.', ok: false, por: 'Si no se ve lo que hay detrás, no es transparente.' },
    { t: 'Uso una bolsa transparente para ver qué llevo sin abrirla.', ok: true, por: 'Deja ver lo de dentro.' },
    { t: 'Me escondí detrás de una cortina transparente y nadie me vio.', ok: false, por: 'Detrás de algo transparente se te ve.' }
  ],
  ejemplos: [
    { t: 'El cristal de una ventana limpia', ok: true },
    { t: 'Una botella de agua vacía', ok: true },
    { t: 'Los cristales de unas gafas', ok: true },
    { t: 'Una puerta de madera', ok: false },
    { t: 'Un cristal pintado de negro', ok: false },
    { t: 'Un espejo', ok: false }
  ],
  acaba: ['Sé lo que hay dentro del bote porque es transparente y…', 'Si mi mochila fuera transparente…'],
  habla: 'Busca en la clase tres cosas transparentes. Díselas a tu compañero y comprobad que se ve a través de ellas.',
  rel: { parecida: ['que deja ver lo que hay detrás'], contraria: ['opaco'], familia: ['transparencia'], mas: ['cristalino', 'translúcido'] }
});

PALABRA({
  id: 'opaco', palabra: 'opaco', silabas: ['o', 'pa', 'co'],
  tipo: 'cualidad', nivel: 2, curso: 2, semana: 4, bloque: 'como-son',
  def: 'Algo es opaco cuando no deja pasar la luz y no se ve lo que hay detrás.',
  otro: null,
  escena: { img: 'opaco.webp', texto: 'El hermano de Carla guarda sus tesoros en una lata. Carla la mira por todos lados y no consigue ver nada. Tiene que abrir la tapa para saber qué hay. La lata es opaca.' },
  contextos: [
    'La persiana es opaca: la bajo y el cuarto se queda a oscuras.',
    'Los regalos se envuelven con papel opaco para que sean una sorpresa.',
    'La madera, la piedra y el metal son materiales opacos.'
  ],
  gesto: 'Pon una mano plana delante de ti, lejos de la cara, como una pared, y asómate por un lado.',
  sentido: [
    { t: 'La caja es opaca, así que tuve que abrirla para ver el regalo.', ok: true, por: 'No deja ver lo de dentro.' },
    { t: 'El cristal de la ventana es opaco y por eso veo los árboles de la calle.', ok: false, por: 'Si ves los árboles, el cristal es transparente.' },
    { t: 'Me puse detrás de una puerta opaca para que no me vieran.', ok: true, por: 'Detrás de algo opaco no se te ve.' },
    { t: 'El vaso es opaco: desde fuera veo que el zumo es de naranja.', ok: false, por: 'Si se ve el zumo desde fuera, el vaso no es opaco.' }
  ],
  ejemplos: [
    { t: 'Una puerta de madera', ok: true },
    { t: 'Una lata de galletas', ok: true },
    { t: 'Un muro de ladrillos', ok: true },
    { t: 'El cristal de una ventana limpia', ok: false },
    { t: 'Una bolsa de plástico fino y sin color', ok: false },
    { t: 'El agua limpia de un vaso', ok: false }
  ],
  acaba: ['No sé qué hay dentro de la caja porque es opaca y…', 'Para que no entre luz en mi cuarto uso algo opaco, como…'],
  habla: '¿Para qué cosas es mejor un material opaco? Pensad dos entre tu compañero y tú.',
  rel: { parecida: ['que no deja ver lo que hay detrás'], contraria: ['transparente'], familia: ['opacidad'], mas: ['oscuro'] }
});

PALABRA({
  id: 'avergonzado', palabra: 'avergonzado', silabas: ['a', 'ver', 'gon', 'za', 'do'],
  tipo: 'cualidad', nivel: 2, curso: 2, semana: 4, bloque: 'sentir',
  def: 'Alguien está avergonzado cuando se siente mal por algo que ha hecho o porque todos lo miran.',
  otro: null,
  escena: { img: 'avergonzado.webp', texto: 'Marcos corre por el comedor y se le cae la bandeja con mucho ruido. Todos se giran a mirarlo. Marcos nota la cara caliente y baja la mirada. Marcos está avergonzado.' },
  contextos: [
    'Me equivoqué de clase y entré en la de los mayores: salí avergonzada.',
    'El perro, avergonzado, se escondió debajo de la mesa después de morder la zapatilla.',
    'Estaba avergonzado por haber gritado a su hermana y le pidió perdón.'
  ],
  gesto: 'Baja la cabeza y escóndela un poco entre los hombros, como una tortuga.',
  sentido: [
    { t: 'Llamé «mamá» a la maestra sin querer y me quedé avergonzada.', ok: true, por: 'Todos lo oyeron y se sintió mal.' },
    { t: 'Estaba avergonzado y por eso salí al escenario saludando a todos, tan contento.', ok: false, por: 'Quien está avergonzado quiere esconderse, no que lo miren.' },
    { t: 'Rompí el jarrón jugando y, avergonzado, se lo conté a mi padre.', ok: true, por: 'Se sentía mal por lo que había hecho.' },
    { t: 'Todos aplaudieron mi dibujo y yo, tan orgullosa, me sentí avergonzada.', ok: false, por: 'Estar orgullosa es lo contrario: estás contenta de lo que has hecho.' }
  ],
  ejemplos: [
    { t: 'Que se te caiga la bandeja delante de todos', ok: true },
    { t: 'Que te pillen diciendo una mentira', ok: true },
    { t: 'Llevar el jersey del revés y que te lo digan en clase', ok: true },
    { t: 'Enseñar contento un dibujo que te ha salido bien', ok: false },
    { t: 'Estar enfadado porque has perdido', ok: false },
    { t: 'Tener miedo de la tormenta', ok: false }
  ],
  acaba: ['Me sentí avergonzado una vez que…', 'Si un amigo está avergonzado, yo puedo…'],
  habla: 'A todos nos pasa alguna vez. ¿Qué le dirías a un amigo que está avergonzado para que se sienta mejor?',
  rel: { parecida: ['rojo como un tomate'], contraria: ['orgulloso'], familia: ['vergüenza', 'avergonzarse', 'vergonzoso'], mas: ['apurado', 'cortado'] },
  fam: {
    si: [
      { p: 'vergüenza', t: 'Me dio mucha ___ cantar delante de todos.' },
      { p: 'avergonzarse', t: 'Equivocarse es normal: no hay por qué ___.' }
    ],
    no: [
      { p: 'verde', por: 'Verde es un color; no tiene que ver con estar avergonzado.' },
      { p: 'aventura', por: 'Una aventura es algo emocionante que te pasa; no tiene que ver con estar avergonzado.' }
    ]
  }
});
```

## La pieza de la semana: parecidas

Sale cuando `investigar` y `anotar` ya están presentadas (regla P2). Cada pareja lleva su matiz: lo
que tienen en común y lo que tiene cada una de suyo.

```js
PIEZA({
  id: 'parecidas', curso: 2, semana: 4, tipo: 'parecidas', forma: 'Parecidas',
  idea: 'Hay palabras que dicen casi lo mismo, pero cada una tiene algo suyo. Son palabras parecidas.',
  ancla: ['investigar', 'anotar'],
  ejemplos: [
    { a: 'investigar', b: 'averiguar', t: 'Investigar es todo el trabajo de buscar; averiguar es llegar a saberlo.' },
    { a: 'investigar', b: 'descubrir', t: 'Investigo con paciencia y, al final, descubro qué pasaba.' },
    { a: 'anotar', b: 'apuntar', t: 'Anoto la fecha o apunto la fecha: las dos valen.' },
    { a: 'consultar', b: 'preguntar', t: 'Se pregunta a una persona; se consulta también un libro o un mapa.' },
    { a: 'indicar', b: 'señalar', t: 'Señalo con el dedo; indico con el dedo o con palabras.' }
  ],
  prueba: [
    { t: '«Enorme» y «gigante» son parecidas.', ok: true, por: 'Las dos dicen que algo es muy grande.' },
    { t: '«Ancho» y «estrecho» son parecidas.', ok: false, por: 'Son contrarias: una dice justo lo opuesto de la otra.' },
    { t: '«Veloz» y «rápido» son parecidas.', ok: true, por: 'Las dos dicen que algo se mueve muy deprisa.' },
    { t: '«Consultar» y «contestar» son parecidas.', ok: false, por: 'Suenan parecido, pero no dicen lo mismo: consultar es buscar o preguntar; contestar es responder.' }
  ],
  habla: 'Di una palabra y que tu compañero diga otra parecida: grande, contento, empezar, bonito…'
});
```

## Notas para quien programe

- **Orden dentro de la semana:** investigar, anotar, consultar, transparente, opaco, avergonzado.
- `transparente` y `opaco` son contrarias y **comparten historia** (los tesoros de Carla): se presentan
  en días distintos y en ese orden (marca `sep` común). Las dos imágenes deben mostrar a la misma niña.
  Comparten ejemplos a propósito (la ventana, la puerta de madera).
- `investigar`: la escena no acaba con la respuesta a propósito. Investigar es buscar; encontrarla es
  `descubrir` (1.º). El no-ejemplo «Encontrar un caracol por casualidad» va por ahí.
- `anotar` tiene segundo significado (`otro`): anotar un gol o una canasta. El no-ejemplo «Copiar un
  cuento entero» lo separa de copiar: se anota algo corto.
- `consultar` no es leer por gusto ni preguntar cualquier cosa: es buscar un dato para salir de una duda.
- `transparente` se separa `trans-pa-ren-te`. El no-ejemplo «Un espejo» es el importante: el espejo
  devuelve tu imagen, no deja ver lo que hay detrás. Lo translúcido (un cristal con dibujo, un papel
  de seda) queda fuera a propósito.
- `opaco`: su gesto es con la mano lejos de la cara, para no confundirlo con el de `oscuro` (1.º,
  semana 6: taparse los ojos). No ponerlos juntos en «¿Qué palabra es?».
- `avergonzado` es la contraria de `orgulloso` (1.º, semana 6). El tono de la ficha es «a todos nos
  pasa»: `acaba` y `habla` piden ayudar a quien lo está, no contar la vergüenza de otro.
- El gesto de `anotar` (escribir en la palma) se parece al de `moderno` (1.º, semana 5: deslizar un
  dedo por la palma): no ponerlos juntos en «¿Qué palabra es?».
- **`familia`:** la llevan investigar, anotar y avergonzado. `consultar`, `transparente` y `opaco`
  solo tienen una palabra de su familia que un niño de 7 años haya oído (regla F10).
- «investigación» y «anotación» llevan la pieza `cion` (semana 2); «investigador» e «investigadora»,
  la pieza `or` (semana 3). «vergonzoso» está en `rel.familia`, pero no en `fam`: llevará la pieza
  `-oso` de la semana 9 y se puede añadir entonces.
- La pieza `parecidas` recupera `descubrir`, `preguntar` y `señalar` de 1.º, e `indicar` de la semana 1.
  «averiguar» y «apuntar» no son palabras del paquete: salen como texto (regla P5).
