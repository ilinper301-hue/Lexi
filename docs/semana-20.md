# Semana 20 · contenido completo (1.º)

Seis palabras escritas con las normas de `docs/pedagogia.md` y el modelo de `docs/semana-01.md`.
Al programar, cada bloque pasa tal cual a `src/js/palabras/s20-<id>.js`.

Semana entera de Conocimiento del Medio, como la 10 y la 15: los animales (doméstico, salvaje, nacer,
refugio) y las plantas (semilla, raíz).

```js
PALABRA({
  id: 'domestico', palabra: 'doméstico', silabas: ['do', 'més', 'ti', 'co'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 20, orden: 1, bloque: 'medio', sep: 'domestico-salvaje',
  def: 'Un animal doméstico vive con las personas, que lo cuidan y le dan de comer.',
  otro: null,
  escena: { img: 'domestico.webp', texto: 'En la granja de sus tíos, Iker echa maíz a las gallinas. Después acaricia al perro y le pone agua al gato. Su tía da de comer a la vaca. Todos son animales domésticos.' },
  contextos: [
    'En casa tenemos un animal doméstico: un pez rojo.',
    'En la granja hay muchos animales domésticos: ovejas, cerdos y conejos.',
    'Por la calle vi a un señor paseando a su perro, un animal doméstico.'
  ],
  gesto: 'Acaricia con la mano el lomo de un perro imaginario sentado a tu lado.',
  sentido: [
    { t: 'El perro es un animal doméstico.', ok: true, por: 'Vive con las personas y ellas lo cuidan.' },
    { t: 'El león es un animal doméstico que vive en mi casa.', ok: false, por: 'El león vive libre en la sabana.' },
    { t: 'Las gallinas de la granja son animales domésticos.', ok: true, por: 'El granjero las cuida y les da de comer.' },
    { t: 'Los animales domésticos viven solos en la selva, sin nadie.', ok: false, por: 'Los domésticos viven con las personas.' }
  ],
  ejemplos: [
    { t: 'Un gato', ok: true },
    { t: 'Una oveja', ok: true },
    { t: 'Un hámster', ok: true },
    { t: 'Un lobo', ok: false },
    { t: 'Un tiburón', ok: false },
    { t: 'Una jirafa', ok: false }
  ],
  pregunta: '¿Es un animal doméstico?',
  acaba: ['Un animal doméstico que me gusta es… porque…', 'Para cuidar a un animal doméstico hay que…'],
  habla: '¿Conoces algún animal doméstico? Cuéntale a tu compañero cómo lo cuidan.',
  rel: { parecida: [], contraria: ['salvaje'], familia: ['domesticar'], mas: ['mascota', 'de compañía'] }
});

PALABRA({
  id: 'salvaje', palabra: 'salvaje', silabas: ['sal', 'va', 'je'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 20, orden: 2, bloque: 'medio', sep: 'domestico-salvaje',
  def: 'Un animal es salvaje cuando vive libre en la naturaleza y busca su comida él solo.',
  otro: null,
  escena: { img: 'salvaje.webp', texto: 'Rocío está de excursión en la sierra con su familia. Entre los árboles ve un ciervo que come hierba. Nadie le da de comer ni lo cuida. El ciervo es un animal salvaje.' },
  contextos: [
    'En casa vimos un documental de leones, que son animales salvajes.',
    'En el bosque viven animales salvajes, como el zorro y el jabalí.',
    'En clase dibujamos los animales salvajes de la selva.'
  ],
  gesto: 'Pon las manos como garras junto a la cara y abre la boca sin hacer ruido.',
  sentido: [
    { t: 'El lobo es un animal salvaje.', ok: true, por: 'Vive libre y busca su comida.' },
    { t: 'Mi perro es salvaje: duerme en su cesta y yo le doy el pienso.', ok: false, por: 'Si lo cuidas y le das de comer, es doméstico.' },
    { t: 'Los delfines son animales salvajes que viven en el mar.', ok: true, por: 'Viven libres y nadie les da de comer.' },
    { t: 'El oso salvaje vive en mi piso y come lo que le pongo.', ok: false, por: 'Un animal salvaje no vive con las personas.' }
  ],
  ejemplos: [
    { t: 'Un zorro', ok: true },
    { t: 'Un águila', ok: true },
    { t: 'Un cocodrilo', ok: true },
    { t: 'Un perro', ok: false },
    { t: 'Una vaca', ok: false },
    { t: 'Un periquito que vive en una jaula en casa', ok: false }
  ],
  pregunta: '¿Es un animal salvaje?',
  acaba: ['Un animal salvaje que me gustaría ver es… porque…', 'Los animales salvajes consiguen su comida…'],
  habla: 'Si fueras un animal salvaje, ¿cuál serías y dónde vivirías? Cuéntaselo a tu compañero.',
  rel: { parecida: ['que vive libre'], contraria: ['doméstico'], familia: [], mas: ['fiero'] }
});

PALABRA({
  id: 'nacer', palabra: 'nacer', silabas: ['na', 'cer'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 20, orden: 3, bloque: 'medio',
  def: 'Nacer es empezar a vivir: salir de la tripa de mamá, de un huevo o de una semilla.',
  otro: null,
  escena: { img: 'nacer.webp', texto: 'En el patio del cole hay un nido con tres huevos. Una mañana, Hugo oye «pío, pío». Uno de los huevos tiene una grieta y asoma un piquito. ¡Ha nacido un pollito!' },
  contextos: [
    'Mi prima nació en verano y ya va a cumplir un año.',
    'En la granja de la escuela han nacido tres conejitos.',
    'En primavera nacen muchas flores en el campo.'
  ],
  gesto: 'Junta las manos cerradas como un huevo y ábrelas despacio, como si algo saliera.',
  sentido: [
    { t: 'Los pollitos nacen de un huevo.', ok: true, por: 'Empiezan a vivir al salir del huevo.' },
    { t: 'Mi abuelo nació ayer y ya tiene ochenta años.', ok: false, por: 'Quien acaba de nacer es un bebé.' },
    { t: 'El potro nació y a los pocos minutos se puso de pie.', ok: true, por: 'Salió de la tripa de su madre y empezó a vivir.' },
    { t: 'La mesa nació en la carpintería.', ok: false, por: 'La mesa no es un ser vivo: se fabrica.' }
  ],
  ejemplos: [
    { t: 'Un pollito que sale del huevo', ok: true },
    { t: 'Un bebé que llega al mundo', ok: true },
    { t: 'Una planta que asoma de la tierra', ok: true },
    { t: 'Un perro que se hace viejo', ok: false },
    { t: 'Un huevo que se rompe al caer al suelo', ok: false },
    { t: 'Una flor que se seca', ok: false }
  ],
  acaba: ['Cuando nace un bebé, la familia…', 'Los pájaros nacen de…'],
  habla: '¿Qué animal te gustaría ver nacer? Cuéntaselo a tu compañero.',
  rel: { parecida: ['venir al mundo'], contraria: ['morir'], familia: ['nacimiento', 'nacido'], mas: ['crecer'] }
});

PALABRA({
  id: 'semilla', palabra: 'semilla', silabas: ['se', 'mi', 'lla'],
  tipo: 'nombre', nivel: 2, curso: 1, semana: 20, orden: 4, bloque: 'medio',
  def: 'Una semilla es la parte pequeña de una planta de la que nace una planta nueva.',
  otro: null,
  escena: { img: 'semilla.webp', texto: 'Carmen se come una sandía en el patio de su abuela. Escupe una pepita negra en una maceta. Pasan unos días y asoma una hojita verde. ¡Aquella pepita era una semilla!' },
  contextos: [
    'En casa, mi padre guarda las semillas del melón para plantarlas.',
    'En clase plantamos semillas de judía en un vaso con algodón.',
    'Los pájaros del campo comen semillas.'
  ],
  gesto: 'Con dos dedos, mete algo muy pequeño en la tierra y tápalo con la otra mano.',
  sentido: [
    { t: 'Planté una semilla y salió una planta.', ok: true, por: 'De la semilla nace una planta nueva.' },
    { t: 'Planté una piedra porque es una semilla.', ok: false, por: 'De una piedra no nace nada.' },
    { t: 'Las pipas de girasol sin tostar son semillas.', ok: true, por: 'Si las plantas, sale un girasol.' },
    { t: 'De una semilla de manzano salió un perro.', ok: false, por: 'De una semilla nace una planta, no un animal.' }
  ],
  ejemplos: [
    { t: 'Una pipa de girasol sin tostar', ok: true },
    { t: 'Una pepita de sandía', ok: true },
    { t: 'Una bellota', ok: true },
    { t: 'Una piedrecita', ok: false },
    { t: 'Una hoja', ok: false },
    { t: 'Una canica', ok: false }
  ],
  pregunta: '¿Es una semilla?',
  acaba: ['Si planto una semilla, para que crezca necesita…', 'He visto semillas dentro de…'],
  habla: 'Cuenta a tu compañero dónde has visto semillas. ¿Has plantado alguna?',
  rel: { parecida: ['pepita'], contraria: [], familia: ['sembrar', 'semillero'], mas: ['pipa', 'grano'] }
});

PALABRA({
  id: 'raiz', palabra: 'raíz', silabas: ['ra', 'íz'],
  tipo: 'nombre', nivel: 2, curso: 1, semana: 20, orden: 5, bloque: 'medio',
  def: 'La raíz es la parte de la planta que está bajo tierra: la sujeta y bebe agua.',
  otro: null,
  escena: { img: 'raiz.webp', texto: 'Mateo arranca una hierba del huerto de su abuelo. Tira y tira, y por fin sale. De abajo cuelgan unos pelillos llenos de tierra. ¡Son las raíces!' },
  contextos: [
    'En casa riego la maceta para que la raíz tenga agua.',
    'En clase vimos crecer las raíces de una judía en un vaso.',
    'En la calle, las raíces de un árbol levantaron la acera.'
  ],
  gesto: 'Pon una mano boca abajo, con los dedos separados, y bájala despacio como si se metiera en la tierra.',
  sentido: [
    { t: 'La raíz del árbol está debajo de la tierra.', ok: true, por: 'Las raíces están bajo tierra.' },
    { t: 'Las raíces del naranjo son las naranjas.', ok: false, por: 'Las naranjas son los frutos y cuelgan de las ramas.' },
    { t: 'La planta no se cae porque sus raíces la sujetan.', ok: true, por: 'Las raíces la agarran a la tierra.' },
    { t: 'La raíz de la planta está arriba del todo, encima de las flores.', ok: false, por: 'La raíz está abajo, bajo tierra.' }
  ],
  ejemplos: [
    { t: 'Lo que sujeta a un árbol bajo la tierra', ok: true },
    { t: 'Los pelillos de abajo de una planta arrancada', ok: true },
    { t: 'Una zanahoria', ok: true },
    { t: 'Una hoja', ok: false },
    { t: 'Una flor', ok: false },
    { t: 'El tronco', ok: false }
  ],
  pregunta: '¿Es una raíz?',
  acaba: ['La raíz está bajo la tierra para…', 'Si arranco una planta, en las raíces veo…'],
  habla: '¿Por qué crees que un árbol tan grande no se cae con el viento? Explícaselo a tu compañero.',
  rel: { parecida: [], contraria: [], familia: ['enraizar'], mas: ['tronco', 'tallo'] }
});

PALABRA({
  id: 'refugio', palabra: 'refugio', silabas: ['re', 'fu', 'gio'],
  tipo: 'nombre', nivel: 2, curso: 1, semana: 20, orden: 6, bloque: 'medio',
  def: 'Un refugio es un sitio donde te pones a salvo del frío, de la lluvia o del peligro.',
  otro: null,
  escena: { img: 'refugio.webp', texto: 'Leire pasea por el campo con su madre y empieza a llover fuerte. Ven una caseta de piedra con tejado y entran corriendo. Fuera cae mucha agua, pero dentro están secas. La caseta es su refugio.' },
  contextos: [
    'Cuando hay tormenta, mi gato busca refugio debajo de la cama.',
    'En la montaña hay refugios para los excursionistas.',
    'La madriguera es el refugio del conejo.'
  ],
  gesto: 'Haz una cueva con una mano y mete dentro dos dedos de la otra, que se esconden.',
  sentido: [
    { t: 'Cuando empezó la tormenta, nos refugiamos en un portal.', ok: true, por: 'En el portal estaban a salvo de la lluvia.' },
    { t: 'El ratón se metió en su refugio para que el gato lo cazara.', ok: false, por: 'Un refugio sirve para ponerse a salvo.' },
    { t: 'El nido es el refugio de los pajaritos.', ok: true, por: 'Allí están a salvo del frío y del peligro.' },
    { t: 'La cueva del oso es un buen refugio porque dentro llueve mucho.', ok: false, por: 'En un refugio estás a salvo de la lluvia.' }
  ],
  ejemplos: [
    { t: 'La madriguera de un conejo', ok: true },
    { t: 'Una cueva cuando hay tormenta', ok: true },
    { t: 'Un nido para los pajaritos', ok: true },
    { t: 'Un charco', ok: false },
    { t: 'Un campo abierto en plena tormenta', ok: false },
    { t: 'Una piedra pequeña', ok: false }
  ],
  pregunta: '¿Es un refugio?',
  acaba: ['El refugio de mi animal favorito es…', 'Si empieza a llover en la calle, busco refugio en…'],
  habla: 'Imagina que eres un animal del bosque. ¿Cómo sería tu refugio? Cuéntaselo a tu compañero.',
  rel: { parecida: ['escondite'], contraria: [], familia: ['refugiarse'], mas: ['madriguera', 'casa'] }
});
```

## Notas para quien programe

- **Semana de Medio**, como la 10 y la 15. Encaja con el tema de los seres vivos: `nacer` y `crecer`
  (semana 10) van juntas en `rel.mas`; `semilla` y `raíz`, con la planta de la escala de Lexi.
- `doméstico` y `salvaje` son contrarias (`sep: 'domestico-salvaje'`) y llevan `pregunta`
  («¿Es un animal doméstico?», «¿Es un animal salvaje?»), porque la de siempre no se lee bien con una
  cualidad que va siempre con «animal». `mascota` va en `rel.mas` de `doméstico`: no es lo mismo (la
  vaca es doméstica, pero no es una mascota). El no-ejemplo «Un periquito que vive en una jaula en
  casa» es a propósito: es doméstico aunque sea un pájaro.
- `nacer` tiene `morir` de contraria: es la del libro de Medio (ciclo de la vida). Si se prefiere
  evitarla en 1.º, se pasa a `rel.mas` y le queda «venir al mundo».
- `semilla`: `pepita` es su pregunta «Se parece a…». `pipa` y `grano` van en `rel.mas`.
- `raíz`: id `raiz`; la zanahoria es un sí a propósito (es una raíz que se come). Sin preguntas de
  `relaciona`.
- `refugio` prepara `hábitat` (2.º, semana 10). Pregunta «Se parece a…»: `escondite`.
- **Gestos cercanos a vigilar:** `refugio` (dedos que se esconden en una cueva) y `proteger` (tejado
  sobre la cabeza, semana 5); `semilla` (meter algo pequeño en la tierra) y `diminuto` (dedos casi
  juntos, semana 2); `nacer` (manos que se abren despacio) y `descubrir` (manos que se abren de golpe
  sobre los ojos, semana 4); `doméstico` (acariciar un perro) y `suave` (acariciarse la mano, semana 4).
- Orden recomendado dentro de la semana: doméstico, salvaje, nacer, semilla, raíz, refugio.
