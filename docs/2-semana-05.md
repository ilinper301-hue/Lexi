# 2.º · Semana 5 · contenido completo

Seis palabras y la pieza de la semana, escritas con las normas de `docs/pedagogia.md` y de
`docs/segundo.md`. Al programar, cada ficha pasa tal cual a `src/js/palabras/2s05-<id>.js` y la pieza
a `src/js/piezas/2s05-enlaces.js`.

Esta semana trae tres palabras de tipo `enlace` (mientras, en cambio, por eso), como la semana 5 de
1.º. Lee las notas del final antes de programarlas.

**Pendiente de la revisión de Iván.**

## Las seis palabras

```js
PALABRA({
  id: 'mientras', palabra: 'mientras', silabas: ['mien', 'tras'],
  tipo: 'enlace', nivel: 2, curso: 2, semana: 5, bloque: 'pensar',
  def: 'Decimos «mientras» para contar dos cosas que pasan a la vez, al mismo tiempo.',
  otro: null,
  escena: { img: 'mientras.webp', texto: 'Es la hora de la cena. El padre de Noelia fríe las croquetas. A la vez, Noelia coloca los vasos y los platos. Noelia pone la mesa mientras su padre cocina.' },
  contextos: [
    'Mientras la maestra lee el cuento, nosotros escuchamos en silencio.',
    'Mi abuela canta mientras riega las plantas.',
    'Mientras llueve, los caracoles salen a pasear.'
  ],
  gesto: 'Da golpecitos en la mesa con una mano y, a la vez, mueve la otra en el aire: dos cosas al mismo tiempo.',
  sentido: [
    { t: 'Mientras me lavo los dientes, mi hermano se pone el pijama.', ok: true, por: 'Las dos cosas pasan a la vez.' },
    { t: 'Mientras dormía profundamente, hice los deberes de mates.', ok: false, por: 'Dormido no se pueden hacer los deberes: no pasan a la vez.' },
    { t: 'El perro ladra mientras el cartero llama a la puerta.', ok: true, por: 'El perro ladra justo cuando llaman.' },
    { t: 'Mientras buceaba en la piscina, cantaba una canción muy alto.', ok: false, por: 'Debajo del agua no se puede cantar: no pueden pasar a la vez.' }
  ],
  ejemplos: [
    { t: 'Escuchar música y dibujar', ok: true },
    { t: 'Tu madre conduce y tú miras por la ventanilla', ok: true },
    { t: 'La lavadora da vueltas y tú meriendas', ok: true },
    { t: 'Pelar el plátano y comértelo', ok: false },
    { t: 'Ponerte los calcetines y los zapatos', ok: false },
    { t: 'Abrir la puerta y entrar en casa', ok: false }
  ],
  acaba: ['Mientras desayuno, mi familia…', 'En el recreo, unos juegan al fútbol mientras otros…'],
  habla: 'Cuenta a tu compañero dos cosas que pasan a la vez en tu casa por la mañana. Usa «mientras».',
  rel: { parecida: ['a la vez que', 'al mismo tiempo que'], contraria: [], familia: [], mas: ['mientras tanto', 'durante'] }
});

PALABRA({
  id: 'en-cambio', palabra: 'en cambio', silabas: ['en', 'cam', 'bio'],
  tipo: 'enlace', nivel: 2, curso: 2, semana: 5, bloque: 'pensar',
  def: 'Decimos «en cambio» para contar que una cosa es distinta de la que acabamos de decir.',
  otro: null,
  escena: { img: 'en-cambio.webp', texto: 'Sara y su hermano Diego van a la heladería. Sara pide el helado de fresa, como siempre. A Diego la fresa no le gusta nada. Sara elige fresa; Diego, en cambio, elige chocolate.' },
  contextos: [
    'Mi cuarto es pequeño. El de mi hermana, en cambio, es enorme.',
    'A mí me encantan las mates; a mi amigo Raúl, en cambio, le gusta más la música.',
    'El caracol va muy despacio. La liebre, en cambio, es veloz.'
  ],
  gesto: 'Enseña la palma de una mano y dale la vuelta de golpe, para que se vea el dorso: «y esto, distinto».',
  sentido: [
    { t: 'A mi hermano le encanta la sopa; a mí, en cambio, no me gusta nada.', ok: true, por: 'Lo segundo es distinto de lo primero.' },
    { t: 'Ayer llovió todo el día; hoy, en cambio, también llueve todo el día.', ok: false, por: 'Las dos cosas son iguales: no hay nada distinto que contar.' },
    { t: 'El gato de Luna duerme todo el día; el mío, en cambio, no para quieto.', ok: true, por: 'Un gato hace lo contrario que el otro.' },
    { t: 'Tengo un lápiz rojo; mi compañera, en cambio, tiene otro lápiz rojo igual.', ok: false, por: 'Los dos tienen lo mismo. Se diría «también».' }
  ],
  ejemplos: [
    { t: 'Yo soy alto; mi primo, en cambio, es bajito.', ok: true },
    { t: 'El hielo está frío; la sopa, en cambio, quema.', ok: true },
    { t: 'De día hay luz; de noche, en cambio, está oscuro.', ok: true },
    { t: 'Yo tengo siete años; mi amiga, en cambio, también.', ok: false },
    { t: 'El limón es amarillo; el plátano, en cambio, es amarillo.', ok: false },
    { t: 'Hoy es fiesta; en cambio, no hay cole.', ok: false }
  ],
  acaba: ['A mí me gusta madrugar; a mi hermano, en cambio, …', 'Los pájaros vuelan; los peces, en cambio, …'],
  habla: 'Dile a tu compañero una cosa que te gusta a ti y otra distinta que le gusta a alguien de tu familia. Usa «en cambio».',
  rel: { parecida: ['pero'], contraria: [], familia: [], mas: ['sin embargo', 'por el contrario', 'también'] }
});

PALABRA({
  id: 'por-eso', palabra: 'por eso', silabas: ['por', 'e', 'so'],
  tipo: 'enlace', nivel: 2, curso: 2, semana: 5, bloque: 'pensar',
  def: 'Decimos «por eso» para contar lo que pasa porque antes ha pasado otra cosa.',
  otro: null,
  escena: { img: 'por-eso.webp', texto: 'Anoche Tiago se quedó leyendo hasta muy tarde. Esta mañana se le cierran los ojos y bosteza sin parar. «¿Qué te pasa?», pregunta su abuela. Tiago durmió poco; por eso tiene tanto sueño.' },
  contextos: [
    'Ha llovido mucho; por eso hay charcos en el patio.',
    'Se me olvidó regar la planta. Por eso tiene las hojas caídas.',
    'El semáforo está en rojo; por eso los coches se paran.'
  ],
  gesto: 'Con un dedo, empuja una ficha imaginaria y mira cómo se cae la de al lado: una cosa trae la otra.',
  sentido: [
    { t: 'Hace mucho frío; por eso me pongo el abrigo.', ok: true, por: 'El frío es el motivo de ponerse el abrigo.' },
    { t: 'Me puse el abrigo; por eso empezó a hacer frío.', ok: false, por: 'Está al revés: el frío no llega porque te pongas el abrigo.' },
    { t: 'Me caí de la bici; por eso llevo una tirita en la rodilla.', ok: true, por: 'La caída es el motivo de la tirita.' },
    { t: 'Me gustan los gatos; por eso hoy es martes.', ok: false, por: 'Que te gusten los gatos no hace que sea martes: no tiene nada que ver.' }
  ],
  ejemplos: [
    { t: 'Tengo sed; por eso bebo agua.', ok: true },
    { t: 'Se fue la luz; por eso encendimos una vela.', ok: true },
    { t: 'Mañana es fiesta; por eso no hay cole.', ok: true },
    { t: 'Bebo agua; por eso tengo sed.', ok: false },
    { t: 'Encendimos una vela; por eso se fue la luz.', ok: false },
    { t: 'Tengo un perro; por eso el cielo es azul.', ok: false }
  ],
  acaba: ['Está lloviendo mucho; por eso…', 'Mi amiga me ayudó a recoger; por eso…'],
  habla: 'Cuenta a tu compañero por qué llevas hoy esa ropa. Usa «por eso»: «Hace frío; por eso…».',
  rel: { parecida: ['así que'], contraria: [], familia: [], mas: ['por lo tanto', 'por esa razón', 'porque'] }
});

PALABRA({
  id: 'cercano', palabra: 'cercano', silabas: ['cer', 'ca', 'no'],
  tipo: 'cualidad', nivel: 2, curso: 2, semana: 5, bloque: 'como-son',
  def: 'Algo es cercano cuando está a poca distancia: se llega enseguida.',
  otro: 'También es cercana una persona con la que tienes mucha confianza.',
  escena: { img: 'cercano.webp', texto: 'Vega sale de casa con su mochila. Cruza una calle, dobla la esquina y ya está en la puerta del cole. Tarda solo dos minutos andando. Vega va a un colegio cercano a su casa.' },
  contextos: [
    'Compramos el pan en una tienda cercana a casa.',
    'En la excursión comimos en un parque cercano al museo.',
    'Los pájaros hicieron el nido en un árbol cercano al río.'
  ],
  gesto: 'Tócate la punta de la nariz con un dedo: «lo tengo aquí mismo».',
  sentido: [
    { t: 'Vamos andando a la biblioteca porque está en un barrio cercano.', ok: true, por: 'Si se puede ir andando, está a poca distancia.' },
    { t: 'Tardamos dos días en avión en llegar a un pueblo cercano.', ok: false, por: 'Si tardas dos días en avión, está a muchísima distancia.' },
    { t: 'Me senté en la silla más cercana porque estaba cansado.', ok: true, por: 'Eligió la que tenía a menos distancia.' },
    { t: 'Esa estrella es tan cercana que nadie ha podido llegar nunca a ella.', ok: false, por: 'Si nadie puede llegar, es que está lejísimos.' }
  ],
  ejemplos: [
    { t: 'La mesa de tu compañero', ok: true },
    { t: 'El patio del colegio', ok: true },
    { t: 'La calle de enfrente del colegio', ok: true },
    { t: 'Las estrellas', ok: false },
    { t: 'Un país al que se va en avión', ok: false },
    { t: 'Una playa a cinco horas de coche', ok: false }
  ],
  acaba: ['Un sitio cercano a mi casa es…', 'Prefiero un parque cercano porque…'],
  habla: 'Di a tu compañero tres sitios cercanos al colegio a los que podríais ir andando.',
  rel: { parecida: ['que está a un paso'], contraria: ['lejano'], familia: ['cerca', 'acercar', 'cercanía'], mas: ['próximo', 'vecino', 'aproximado'] },
  fam: {
    si: [
      { p: 'cerca', t: 'La farmacia está muy ___ de mi casa.' },
      { p: 'acercar', t: '¿Me puedes ___ la jarra del agua, por favor?' }
    ],
    no: [
      { p: 'cerdo', por: 'Un cerdo es un animal de granja; no tiene que ver con la distancia.' },
      { p: 'cerrar', por: 'Cerrar es lo contrario de abrir; no tiene que ver con la distancia.' }
    ]
  }
});

PALABRA({
  id: 'lejano', palabra: 'lejano', silabas: ['le', 'ja', 'no'],
  tipo: 'cualidad', nivel: 2, curso: 2, semana: 5, bloque: 'como-son',
  def: 'Algo es lejano cuando está a mucha distancia: se tarda mucho en llegar.',
  otro: 'También es lejano lo que pasó hace muchísimo tiempo: «en tiempos lejanos».',
  escena: { img: 'lejano.webp', texto: 'En verano, Vega visita a sus abuelos. Sale en coche por la mañana, come por el camino y sigue viajando toda la tarde. Cuando llega, ya es de noche. Los abuelos de Vega viven en un pueblo lejano.' },
  contextos: [
    'Las estrellas son soles muy lejanos.',
    'En los cuentos, los dragones viven en reinos lejanos.',
    'Mi tía nos manda postales desde países lejanos.'
  ],
  gesto: 'Estira un brazo hacia delante todo lo que puedas y mueve los dedos, como si quisieras tocar algo que no alcanzas.',
  sentido: [
    { t: 'Mi amigo se mudó a una ciudad lejana y ahora hablamos por videollamada.', ok: true, por: 'Está a tanta distancia que no pueden verse en persona.' },
    { t: 'El baño es un sitio lejano: está a dos pasos de la clase.', ok: false, por: 'A dos pasos es muy poca distancia.' },
    { t: 'Las cigüeñas pasan el invierno en tierras lejanas y vuelven en primavera.', ok: true, por: 'Vuelan muchísimos kilómetros para llegar.' },
    { t: 'Fui en un momento, a la pata coja, hasta un país lejano.', ok: false, por: 'A un sitio lejano no se llega en un momento, y menos a la pata coja.' }
  ],
  ejemplos: [
    { t: 'Las estrellas', ok: true },
    { t: 'Un país al que se va en avión', ok: true },
    { t: 'Una playa a cinco horas de coche', ok: true },
    { t: 'La mesa de tu compañero', ok: false },
    { t: 'El patio del colegio', ok: false },
    { t: 'La calle de enfrente del colegio', ok: false }
  ],
  acaba: ['Me gustaría viajar a un lugar lejano, como…', 'Para ir a un país lejano hace falta…'],
  habla: '¿Cuál es el sitio más lejano en el que has estado o del que te han hablado? Cuéntaselo a tu compañero.',
  rel: { parecida: ['que está en la otra punta'], contraria: ['cercano'], familia: ['lejos', 'alejar', 'lejanía'], mas: ['remoto', 'distante', 'apartado'] },
  fam: {
    si: [
      { p: 'lejos', t: 'Mis primos viven muy ___, en otro país.' },
      { p: 'alejar', t: 'Hay que ___ las manos del fuego para no quemarse.' }
    ],
    no: [
      { p: 'lejía', por: 'La lejía es un líquido para limpiar; no tiene que ver con la distancia.' }
    ]
  }
});

PALABRA({
  id: 'agradecido', palabra: 'agradecido', silabas: ['a', 'gra', 'de', 'ci', 'do'],
  tipo: 'cualidad', nivel: 2, curso: 2, semana: 5, bloque: 'sentir',
  def: 'Alguien está agradecido cuando se alegra de lo que han hecho por él y quiere dar las gracias.',
  otro: null,
  escena: { img: 'agradecido.webp', texto: 'A Joel se le rompe la cremallera de la mochila y se le cae todo por el pasillo. Lidia se agacha, le ayuda a recogerlo y le presta una bolsa. Joel sonríe y le dice: «¡Muchas gracias!». Joel está agradecido.' },
  contextos: [
    'Estoy muy agradecida a mi abuelo por enseñarme a montar en bici.',
    'La vecina, agradecida, nos trajo un bizcocho por cuidarle el gato.',
    'Hicimos un mural para la cocinera del cole: estábamos agradecidos por sus comidas.'
  ],
  gesto: 'Haz como que coges con las dos manos algo que te dan y abrázalo contra el pecho, sonriendo.',
  sentido: [
    { t: 'Estoy agradecido a la enfermera porque me curó la herida con mucho cuidado.', ok: true, por: 'Hizo algo bueno por él y quiere darle las gracias.' },
    { t: 'Me empujaron en la fila y me sentí muy agradecida.', ok: false, por: 'Si te empujan te enfadas: nadie ha hecho nada bueno por ti.' },
    { t: 'Los abuelos estaban agradecidos por la visita de sus nietos.', ok: true, por: 'Se alegraron de que fueran a verlos.' },
    { t: 'Estaba tan agradecido con mi primo que no quise ni saludarlo.', ok: false, por: 'Quien está agradecido quiere dar las gracias, no dejar de saludar.' }
  ],
  ejemplos: [
    { t: 'Que un amigo te espere cuando vas el último', ok: true },
    { t: 'Que tu tía te enseñe a nadar', ok: true },
    { t: 'Que alguien encuentre tu abrigo perdido y te lo devuelva', ok: true },
    { t: 'Que te quiten el sitio en la fila', ok: false },
    { t: 'Ganar tú solo una carrera', ok: false },
    { t: 'Que se te pierda un guante', ok: false }
  ],
  acaba: ['Estoy agradecido a… porque…', 'Cuando estoy agradecido a alguien, yo…'],
  habla: 'Piensa en alguien que te ha ayudado esta semana. Cuéntale a tu compañero quién fue y cómo le diste las gracias.',
  rel: { parecida: ['que quiere dar las gracias'], contraria: [], familia: ['agradecer', 'gracias', 'agradecimiento'], mas: ['desagradecido', 'reconocido'] },
  fam: {
    si: [
      { p: 'agradecer', t: 'Te quiero ___ que me hayas esperado.' },
      { p: 'gracias', t: 'Cuando alguien te ayuda, le dices: «¡Muchas ___!».' }
    ],
    no: [
      { p: 'agrio', por: 'Agrio es el sabor del limón; no tiene que ver con estar agradecido.' },
      { p: 'granja', por: 'Una granja es un sitio con animales; no tiene que ver con estar agradecido.' }
    ]
  }
});
```

## La pieza de la semana: enlaces

Sale cuando `mientras`, `en-cambio` y `por-eso` ya están presentadas (regla P2). Junta los tres
enlaces de esta semana con los tres de 1.º (primero, después, finalmente). Los seis ejemplos cuentan,
seguidos, una misma historia: la comida.

```js
PIEZA({
  id: 'enlaces', curso: 2, semana: 5, tipo: 'enlaces', forma: 'Enlaces',
  idea: 'Hay palabras que no nombran nada: sirven para unir las frases, como un pegamento. Son los enlaces.',
  ancla: ['mientras', 'en-cambio', 'por-eso'],
  ejemplos: [
    { a: 'primero', b: 'lo que va antes', t: 'Primero me lavo las manos.' },
    { a: 'después', b: 'lo que va detrás', t: 'Después me siento a la mesa.' },
    { a: 'mientras', b: 'a la vez', t: 'Mientras como, mi padre me cuenta su día.' },
    { a: 'en cambio', b: 'algo distinto', t: 'A mí me gusta el pescado; a mi hermana, en cambio, no.' },
    { a: 'por eso', b: 'lo que pasa por algo', t: 'Hoy hay lentejas, que me encantan; por eso repito.' },
    { a: 'finalmente', b: 'lo último', t: 'Finalmente, recojo mi plato.' }
  ],
  prueba: [
    { t: 'Hace sol; por eso me pongo la gorra.', ok: true, por: 'El sol es el motivo: «por eso» une bien las dos frases.' },
    { t: 'Me até los cordones y, finalmente, me puse las zapatillas.', ok: false, por: 'Está al revés: lo último es atarse los cordones.' },
    { t: 'Mi perro es tranquilo; el de mi tía, en cambio, es muy nervioso.', ok: true, por: 'Son distintos: «en cambio» une bien las dos frases.' },
    { t: 'Tengo hambre; en cambio, me como el bocadillo.', ok: false, por: 'No es algo distinto: es lo que pasa por tener hambre. Aquí va «por eso».' }
  ],
  habla: 'Cuenta a tu compañero cómo vienes al colegio. Usa tres enlaces: primero, después, mientras, por eso…'
});
```

## Notas para quien programe

- **Orden dentro de la semana:** mientras, en cambio, por eso, cercano, lejano, agradecido.
- `en cambio` y `por eso` son dos palabras cada una: `id` con guion (`en-cambio`, `por-eso`), como
  `ser-vivo`. Las palmadas son tres: en-cam-bio, por-e-so.
- **Palabras de tipo `enlace`:** valen las notas de `docs/semana-05.md` (1.º). En la tarea `ejemplo`
  cada texto es una frase o una pareja de acciones, y la pregunta en pantalla no puede ser «¿Es o no
  es…?». Preguntas para el campo `pregunta` (pendiente, punto 3 de `ESTADO.md`):
  - `mientras`: «¿Pueden pasar a la vez?». Los tres «no» son cosas que van una detrás de otra.
  - `en cambio`: «¿Está bien dicho con "en cambio"?».
  - `por eso`: «¿Está bien dicho con "por eso"?».
- `mientras`, `en cambio` y `por eso` no llevan `fam` (regla F10): les quedan `acaba`, `habla` y
  `relaciona`. Son muy buenas para `habla`: obligan a decir una frase de dos trozos.
- `en cambio` no se enseña como de la familia de `cambiar` (1.º, semana 7): para un niño de 7 años no
  ayuda. El último no-ejemplo («Hoy es fiesta; en cambio, no hay cole») es el importante: ahí va «por
  eso», y la ficha de `por eso` tiene la frase bien dicha («Mañana es fiesta; por eso no hay cole»).
- `en cambio` casi siempre va entre comas y detrás de la persona o la cosa: «Diego, en cambio, …».
- `por eso`: los no-ejemplos son de dos clases: frases **al revés** (el resultado delante del motivo)
  y frases que no tienen nada que ver. «porque» está en `rel.mas` y no se pregunta: va al revés
  («Tengo sueño porque dormí poco» · «Dormí poco; por eso tengo sueño»). Prepara `causa` y
  `consecuencia` (semana 8).
- `cercano` y `lejano` son contrarias y **comparten protagonista** (Vega): se presentan en días
  distintos y en ese orden (marca `sep` común). Las dos imágenes deben mostrar a la misma niña.
  Comparten los seis ejemplos a propósito, al revés. Los ejemplos están pensados **desde la clase**:
  la pregunta en pantalla es «¿Es cercano para nosotros, aquí?» y «¿Es lejano para nosotros, aquí?».
- Las definiciones de `cercano` y `lejano` no dicen «cerca» ni «lejos» a propósito: son de su familia
  y salen en la tarea `familia`. Los gestos tampoco las nombran.
- `cercano` y `lejano` tienen segundo significado (`otro`): una persona cercana; tiempos lejanos.
- `aproximado` (semana 2) tiene «cercano» en `rel.mas`; no se pregunta, así que no chocan.
- El gesto de `lejano` (estirar el brazo) se parece al de `señalar` (1.º, semana 2) y el de `en
  cambio` (dar la vuelta a la mano) al de `aproximado` (semana 2: balancear la mano): no ponerlos
  juntos en «¿Qué palabra es?».
- `agradecido`: su gesto es el de `generoso` (semana 3) **al revés**: allí se da, aquí se recibe. No
  ponerlos juntos en «¿Qué palabra es?». El no-ejemplo «Ganar tú solo una carrera» lo separa de
  `orgulloso` (1.º): agradecido se está siempre **a alguien**.
- **`familia`:** la llevan cercano, lejano y agradecido. «desagradecido» está en `rel.mas`: llevará la
  pieza `des-` de la semana 7 y se puede añadir a `fam` entonces.
- En la pieza, el campo `b` de cada ejemplo dice para qué sirve el enlace (en las otras piezas es la
  segunda palabra de la pareja). Los ejemplos van en el orden de la historia, no por cursos.
- La pieza `enlaces` recupera `primero`, `después` y `finalmente` de 1.º. Si la clase no hizo 1.º con
  Lexi, salen igual, como texto (regla P5).
