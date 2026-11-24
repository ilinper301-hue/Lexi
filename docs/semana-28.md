# Semana 28 · contenido completo (1.º)

Seis palabras escritas con las normas de `docs/pedagogia.md` y el modelo de `docs/semana-01.md`.
Al programar, cada bloque pasa tal cual a `src/js/palabras/s28-<id>.js`.

Dos palabras para pensar (respuesta, resultado), dos de cómo son las cosas (maduro, fresco) y dos de
convivir (perdonar, cariñoso).

```js
PALABRA({
  id: 'respuesta', palabra: 'respuesta', silabas: ['res', 'pues', 'ta'],
  tipo: 'nombre', nivel: 2, curso: 1, semana: 28, orden: 1, bloque: 'pensar', sep: 'respuesta-resultado',
  def: 'Una respuesta es lo que dices o escribes cuando alguien te hace una pregunta.',
  otro: null,
  escena: { img: 'respuesta.webp', texto: 'La maestra pregunta: «¿Qué animal hace muuu?». Muchos niños levantan la mano. Clara dice: «¡La vaca!». ¡Esa es la respuesta!' },
  contextos: [
    'En casa le escribí una carta a mi abuela y ya tengo su respuesta.',
    'En clase escribimos la respuesta debajo de cada pregunta.',
    'En la calle, le pregunté la hora a un señor y su respuesta fue: «Las cinco».'
  ],
  gesto: 'Escribe con el dedo en la mesa, debajo de una raya imaginaria, como si rellenaras un hueco.',
  sentido: [
    { t: '«¿Cuántas patas tiene un perro?». «Cuatro». Esa es la respuesta.', ok: true, por: '«Cuatro» es lo que se dice a esa pregunta.' },
    { t: 'Escribí la respuesta antes de que nadie me hiciera ninguna pregunta.', ok: false, por: 'Una respuesta va después de una pregunta.' },
    { t: 'Levanté la mano para dar la respuesta del acertijo.', ok: true, por: 'Iba a decir lo que contesta al acertijo.' },
    { t: 'La respuesta es la pregunta que hace la maestra.', ok: false, por: 'La pregunta la hace la maestra; la respuesta la damos nosotros.' }
  ],
  ejemplos: [
    { t: '«Rojo», cuando te preguntan de qué color es tu jersey', ok: true },
    { t: '«Sí, gracias», cuando te ofrecen agua', ok: true },
    { t: '«Siete años», cuando te preguntan tu edad', ok: true },
    { t: '«¿Dónde está mi lápiz?»', ok: false },
    { t: '«¿Vienes a jugar?»', ok: false },
    { t: '«¡Hola!», al llegar, sin que nadie te pregunte nada', ok: false }
  ],
  pregunta: '¿Es una respuesta?',
  acaba: ['Si me preguntan qué quiero ser de mayor, mi respuesta es…', 'Cuando no sé la respuesta, puedo…'],
  habla: 'Hazle una pregunta a tu compañero sobre su fin de semana. Escucha bien su respuesta y luego cambiáis.',
  rel: { parecida: ['contestación'], contraria: ['pregunta'], familia: ['responder'], mas: ['contestar', 'solución', 'resultado'] }
});

PALABRA({
  id: 'resultado', palabra: 'resultado', silabas: ['re', 'sul', 'ta', 'do'],
  tipo: 'nombre', nivel: 2, curso: 1, semana: 28, orden: 2, bloque: 'pensar', sep: 'respuesta-resultado',
  def: 'El resultado es lo que sale al final: de una suma, de un partido, de una receta…',
  otro: null,
  escena: { img: 'resultado.webp', texto: 'Ainhoa y su padre hacen un bizcocho. Mezclan harina, huevos y azúcar, y lo meten en el horno. Al rato, la casa huele de maravilla. Abren el horno: ¡qué resultado tan rico!' },
  contextos: [
    'En casa vimos el partido por la tele y el resultado fue un empate.',
    'En clase, el resultado de dos más tres es cinco.',
    'En el huerto del cole, el resultado de cuidar las plantas fueron unos tomates enormes.'
  ],
  gesto: 'Haz como que abres la puerta de un horno, te asomas y miras qué ha salido.',
  sentido: [
    { t: 'El resultado de la carrera fue que Lucas llegó el primero.', ok: true, por: 'Es lo que salió al final.' },
    { t: 'Escribí el resultado de la suma antes de saber qué números eran.', ok: false, por: 'El resultado sale después de hacer la suma.' },
    { t: 'Regué la planta cada día y el resultado fue una flor preciosa.', ok: true, por: 'La flor es lo que salió al final de cuidarla.' },
    { t: 'El resultado del bizcocho son los huevos y la harina.', ok: false, por: 'Eso es lo que se usa para hacerlo; el resultado es el bizcocho.' }
  ],
  ejemplos: [
    { t: '«Diez», al final de una suma', ok: true },
    { t: '«Tres a uno», al acabar el partido', ok: true },
    { t: 'Un dibujo terminado, después de pintar toda la tarde', ok: true },
    { t: 'Los números que vas a sumar', ok: false },
    { t: 'El principio de un partido', ok: false },
    { t: 'La harina, antes de hacer el bizcocho', ok: false }
  ],
  pregunta: '¿Es un resultado?',
  acaba: ['Si mezclo pintura azul y amarilla, el resultado es…', 'Si practico cada día, el resultado será…'],
  habla: 'Contad entre los dos algo que hicisteis con mucho trabajo. ¿Qué resultado tuvo?',
  rel: { parecida: [], contraria: [], familia: ['resultar'], mas: ['solución', 'respuesta', 'final', 'consecuencia'] }
});

PALABRA({
  id: 'maduro', palabra: 'maduro', silabas: ['ma', 'du', 'ro'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 28, orden: 3, bloque: 'como-son',
  def: 'Una fruta está madura cuando ya está lista para comer: blanda, dulce y de su color.',
  otro: null,
  escena: { img: 'maduro.webp', texto: 'Marta tiene una tomatera en el balcón. Al principio, los tomates eran pequeños, verdes y duros. Ahora están rojos y blanditos. Su abuela coge uno: «Ya podemos comerlo, está maduro».' },
  contextos: [
    'En casa, mi madre aprieta un poco el melón para ver si está maduro.',
    'En clase vimos la foto de un plátano verde y la de otro maduro.',
    'En el campo, las moras maduras están negras y las otras, rojas.'
  ],
  gesto: 'Aprieta un poco con el pulgar una fruta imaginaria y asiente: está blandita.',
  sentido: [
    { t: 'El plátano está maduro: amarillo y dulce.', ok: true, por: 'Ya está listo para comer.' },
    { t: 'La pera está madura: verde y durísima.', ok: false, por: 'Si está verde y dura, todavía no está madura.' },
    { t: 'Cogimos las cerezas maduras, las de color rojo oscuro.', ok: true, por: 'Esas ya están listas.' },
    { t: 'Este tomate está tan maduro que todavía no se puede comer.', ok: false, por: 'Si está maduro, ya se puede comer.' }
  ],
  ejemplos: [
    { t: 'Una fresa roja y dulce', ok: true },
    { t: 'Un plátano amarillo', ok: true },
    { t: 'Un melocotón blandito que huele muy bien', ok: true },
    { t: 'Un tomate pequeño y verde', ok: false },
    { t: 'Una pera dura como una piedra', ok: false },
    { t: 'Una mora roja y ácida', ok: false }
  ],
  acaba: ['Sé que una fruta está madura cuando…', 'Si me como una fruta que no está madura…'],
  habla: 'Pensad entre los dos una fruta. ¿Cómo es cuando está madura y cuando no?',
  rel: { parecida: [], contraria: ['verde'], familia: ['madurar'], mas: ['listo para comer', 'pasado', 'fresco'] }
});

PALABRA({
  id: 'fresco', palabra: 'fresco', silabas: ['fres', 'co'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 28, orden: 4, bloque: 'como-son',
  def: 'Un alimento es fresco cuando está recién hecho o recién cogido, y no lleva días guardado.',
  otro: 'También es el aire que da un poco de frío: «Por la mañana hace fresco».',
  escena: { img: 'fresco.webp', texto: 'Por la mañana, Samuel acompaña a su madre al mercado. El pescadero acaba de traer el pescado del puerto: brilla y huele a mar. «Queremos este», dice su madre. ¡Es pescado fresco!' },
  contextos: [
    'En casa, mi abuelo trae pan fresco de la panadería cada mañana.',
    'En el comedor del cole nos dan fruta fresca de postre.',
    'En el huerto cogemos lechugas frescas y nos las comemos ese mismo día.'
  ],
  gesto: 'Haz como que arrancas una zanahoria de la tierra y le das un mordisco.',
  sentido: [
    { t: 'Las fresas que cogimos esta mañana están muy frescas.', ok: true, por: 'Están recién cogidas.' },
    { t: 'Este pan está fresquísimo: lo compramos hace dos semanas.', ok: false, por: 'Con dos semanas, el pan ya está duro y pasado.' },
    { t: 'Mi tía vende huevos frescos de sus gallinas, puestos esta mañana.', ok: true, por: 'Son de hoy mismo.' },
    { t: 'La leche estaba muy fresca: olía mal y estaba agria.', ok: false, por: 'Si huele mal, está pasada, no fresca.' }
  ],
  ejemplos: [
    { t: 'Una lechuga recién cogida del huerto', ok: true },
    { t: 'Pan recién hecho', ok: true },
    { t: 'Un huevo puesto esta mañana', ok: true },
    { t: 'Un yogur caducado', ok: false },
    { t: 'Una manzana arrugada de hace muchos días', ok: false },
    { t: 'Un pan duro de la semana pasada', ok: false }
  ],
  acaba: ['Un alimento fresco que me encanta es…', 'Sé que un alimento está fresco porque…'],
  habla: 'Contad entre los dos qué alimentos frescos habéis comido esta semana.',
  rel: { parecida: ['recién hecho'], contraria: ['pasado'], familia: ['frescura', 'refrescar'], mas: ['maduro', 'nuevo', 'caducado'] }
});

PALABRA({
  id: 'perdonar', palabra: 'perdonar', silabas: ['per', 'do', 'nar'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 28, orden: 5, bloque: 'convivir',
  def: 'Perdonar es dejar de estar enfadado con alguien que te ha hecho algo malo, y hacer las paces.',
  otro: null,
  escena: { img: 'perdonar.webp', texto: 'Jorge rompe sin querer el avión de papel de Elsa. Elsa se enfada mucho. Jorge le dice: «Lo siento, te ayudo a hacer otro». Elsa lo piensa, sonríe y le da la mano. ¡Elsa ha perdonado a Jorge!' },
  contextos: [
    'En casa, mi hermano me pidió perdón por coger mis cromos y yo lo perdoné.',
    'En el cole, después de discutir, nos perdonamos y seguimos jugando.',
    'En el parque, una niña me tiró arena sin querer; me pidió perdón y la perdoné.'
  ],
  gesto: 'Cruza los brazos con cara de enfado y, despacio, descrúzalos y tiende la mano.',
  sentido: [
    { t: 'Mi amiga me pidió perdón por empujarme y yo la perdoné: seguimos jugando.', ok: true, por: 'Dejó de estar enfadado e hicieron las paces.' },
    { t: 'Perdoné a mi primo y no le hablé en toda la semana.', ok: false, por: 'Si sigues enfadado, no has perdonado.' },
    { t: 'El abuelo perdonó al perro por morder la zapatilla.', ok: true, por: 'Ya no está enfadado con él.' },
    { t: 'Mi hermana me perdonó y me dijo: «Nunca más jugaré contigo».', ok: false, por: 'Eso es seguir enfadada, no perdonar.' }
  ],
  ejemplos: [
    { t: 'Hacer las paces después de discutir', ok: true },
    { t: 'Decir «no pasa nada» cuando alguien te pide perdón', ok: true },
    { t: 'Volver a jugar con quien te molestó sin querer', ok: true },
    { t: 'Seguir enfadado toda la tarde', ok: false },
    { t: 'No hablar más a quien te pidió perdón', ok: false },
    { t: 'Romper algo sin querer', ok: false }
  ],
  acaba: ['Cuando alguien me pide perdón, yo…', 'Me cuesta perdonar cuando…'],
  habla: 'Contad entre los dos alguna vez que perdonasteis a alguien. ¿Cómo os sentisteis después?',
  rel: { parecida: ['hacer las paces'], contraria: [], familia: ['perdón'], mas: ['pedir perdón', 'disculparse', 'enfadarse'] }
});

PALABRA({
  id: 'carinoso', palabra: 'cariñoso', silabas: ['ca', 'ri', 'ño', 'so'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 28, orden: 6, bloque: 'convivir',
  def: 'Alguien es cariñoso cuando demuestra que quiere a los demás con abrazos, besos y palabras bonitas.',
  otro: null,
  escena: { img: 'carinoso.webp', texto: 'Cuando la abuela de Valeria llega a casa, Valeria corre a abrazarla. Le da un beso en cada mejilla y le dice: «¡Te he echado de menos!». La abuela se ríe: «¡Qué cariñosa eres!».' },
  contextos: [
    'En casa, mi gata es muy cariñosa: se acurruca en mis piernas.',
    'En el cole, Mario es cariñoso con los pequeños de infantil.',
    'En el parque, una niña era muy cariñosa con su hermanito: le daba besos sin parar.'
  ],
  gesto: 'Lanza un beso con la mano a alguien imaginario.',
  sentido: [
    { t: 'Mi perro es cariñoso: me lame la mano y se acurruca conmigo.', ok: true, por: 'Demuestra que lo quiere.' },
    { t: 'Mi tío es muy cariñoso: nunca me da un abrazo ni me dice nada bonito.', ok: false, por: 'Sin abrazos ni palabras bonitas, no demuestra cariño.' },
    { t: 'Mi hermana es cariñosa: cuando me despierto, me da un beso.', ok: true, por: 'El beso demuestra que lo quiere.' },
    { t: 'El niño cariñoso empujó a su hermano y le quitó el juguete.', ok: false, por: 'Empujar y quitar cosas no es demostrar cariño.' }
  ],
  ejemplos: [
    { t: 'Dar un abrazo a tu madre al llegar a casa', ok: true },
    { t: 'Acariciar con mimo a tu gato', ok: true },
    { t: 'Decirle a tu abuelo «te quiero»', ok: true },
    { t: 'Dar las gracias al conductor del autobús', ok: false },
    { t: 'Apartar la cara cuando te quieren dar un beso', ok: false },
    { t: 'Gritar a tu hermano', ok: false }
  ],
  acaba: ['Soy cariñoso con… cuando…', 'Para demostrar que quiero a alguien, yo…'],
  habla: 'Contad entre los dos quién es la persona más cariñosa que conocéis. ¿Qué hace?',
  rel: { parecida: ['tierno'], contraria: [], familia: ['cariño'], mas: ['amable', 'educado', 'mimoso'] }
});
```

## Notas para quien programe

- **Semana de los finales y los afectos:** respuesta y resultado son «lo que sale al final» de una
  pregunta o de un trabajo; maduro y fresco hablan de la comida (enlaza con `alimento`, semana 10, y
  con el huerto del jardín); perdonar y cariñoso cierran con convivencia.
- `respuesta` frente a `resultado` y `solución` (semana 8): la respuesta va **después de una
  pregunta**; el resultado es **lo que sale al final** de una suma, un partido o un trabajo; la
  solución **arregla un problema**. `respuesta` y `resultado` no se presentan el mismo día
  (`sep: 'respuesta-resultado'`). Las dos llevan `pregunta`. Los ejemplos de `respuesta` son frases
  entre comillas con su situación; los «no» son preguntas y un saludo.
- `respuesta` pregunta «contestación» y «lo contrario de pregunta». **`solución` tiene `respuesta`
  como pregunta parecida**: con `PAQUETE_1`, no la pregunta hasta que se presente `respuesta`.
  `resultado` no tiene preguntas de `relaciona` (le quedan `acaba` y `habla`); `consecuencia` (2.º,
  semana 8) va en su `rel.mas`.
- `maduro` pregunta «lo contrario de verde» (fruta verde), que es como se dice en casa. Sus no-ejemplos
  son frutas sin madurar («Una mora roja y ácida»).
- `fresco`: el significado principal es el de la comida, y el segundo (de la lista), el del aire.
  Pregunta «recién hecho» y «lo contrario de pasado». No va con `maduro` de contraria: una fruta puede
  estar madura y fresca a la vez.
- `perdonar` frente a `disculparse` (2.º, semana 9): perdona **quien estaba enfadado**; se disculpa
  quien ha hecho algo. Pregunta «hacer las paces». El no-ejemplo «Romper algo sin querer» es lo que
  hace el otro.
- `cariñoso` frente a `amable` (semana 9) y `educado` (semana 26): cariñoso es **demostrar que quieres
  a alguien** (abrazos, besos); amable es **tratar con cariño y ayudar**; educado es **tener buenos
  modales**. El no-ejemplo «Dar las gracias al conductor del autobús» es de `educado`. Pregunta
  «tierno». **`amable` tiene `cariñoso` como pregunta parecida**: con `PAQUETE_1`, no la pregunta hasta
  que se presente `cariñoso` (punto 98).
- **Gestos cercanos a vigilar:** `respuesta` (escribir en un hueco) y `completar` (cerrar una C,
  semana 2); `resultado` (abrir un horno) y `descubrir` (manos que se abren sobre los ojos, semana 4);
  `maduro` (apretar una fruta con el pulgar) y `delicado` (tocar la palma flojito, semana 8); `fresco`
  (arrancar una zanahoria y morder) y `alimento` (cuchara a la boca, semana 10); `perdonar` (descruzar
  los brazos y tender la mano) y `serio` (brazos cruzados, semana 14); `cariñoso` (lanzar un beso) y
  `amable` (saludar con la mano, semana 9).
- Orden recomendado dentro de la semana: respuesta, resultado, maduro, fresco, perdonar, cariñoso.
