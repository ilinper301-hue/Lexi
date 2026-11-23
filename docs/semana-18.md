# Semana 18 · contenido completo (1.º)

Seis palabras escritas con las normas de `docs/pedagogia.md` y el modelo de `docs/semana-01.md`.
Al programar, cada bloque pasa tal cual a `src/js/palabras/s18-<id>.js`.

Dos palabras para aprender (intentar, equivocarse), dos de cómo son las cosas (complicado, útil), un
sentimiento (frustrado) y una actitud (esforzarse). Es la semana de «aprender cuesta, y no pasa nada».

```js
PALABRA({
  id: 'intentar', palabra: 'intentar', silabas: ['in', 'ten', 'tar'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 18, orden: 1, bloque: 'pensar', sep: 'intentar-esforzarse',
  def: 'Intentar es probar a hacer algo, aunque no sepas si te va a salir.',
  otro: null,
  escena: { img: 'intentar.webp', texto: 'Nico quiere silbar como su abuelo. Junta los labios y sopla, pero solo sale aire. Sopla otra vez, y otra, y otra. Nico lo está intentando.' },
  contextos: [
    'Mi hermana intenta atarse los cordones ella sola.',
    'En clase intento escribir mi nombre sin mirar el modelo.',
    'El gato intentó subir al árbol, pero resbaló.'
  ],
  gesto: 'Haz como que tiras una pelota a una canasta, con las dos manos.',
  sentido: [
    { t: 'Intenté abrir el bote yo solo, pero estaba muy duro.', ok: true, por: 'Probó a abrirlo, aunque no pudo.' },
    { t: 'No lo intenté ni una vez, pero lo probé muchas veces.', ok: false, por: 'Si lo probaste, sí lo intentaste.' },
    { t: 'Mi perro intentó coger la pelota, pero se le escapó.', ok: true, por: 'Probó a cogerla, aunque no lo consiguió.' },
    { t: 'Intenté tener siete años.', ok: false, por: 'Los años se cumplen solos: no se intentan.' }
  ],
  ejemplos: [
    { t: 'Probar a hacer el pino', ok: true },
    { t: 'Tratar de abrir un bote muy duro', ok: true },
    { t: 'Probar a silbar por primera vez', ok: true },
    { t: 'Mirar cómo otro hace el pino', ok: false },
    { t: 'Dejar el bote sin tocarlo', ok: false },
    { t: 'Decir «no sé» sin probar', ok: false }
  ],
  acaba: ['Una cosa que he intentado muchas veces es…', 'Si no me sale a la primera, lo intento otra vez porque…'],
  habla: 'Cuenta a tu compañero algo que intentaste y no te salió. ¿Qué hiciste después?',
  rel: { parecida: ['probar'], contraria: [], familia: ['intento'], mas: ['tratar de', 'rendirse'] }
});

PALABRA({
  id: 'equivocarse', palabra: 'equivocarse', silabas: ['e', 'qui', 'vo', 'car', 'se'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 18, orden: 2, bloque: 'pensar',
  def: 'Te equivocas cuando haces o dices algo mal sin querer, creyendo que estaba bien.',
  otro: null,
  escena: { img: 'equivocarse.webp', texto: 'Pedro va a jugar a casa de su amiga Laia. Llama al timbre y le abre una señora que no conoce. ¡Es la puerta de al lado! Pedro se ha equivocado de puerta.' },
  contextos: [
    'Esta mañana me equivoqué y me puse los zapatos al revés.',
    'Si me equivoco en una suma, la reviso y la arreglo.',
    'Nos equivocamos de autobús y tuvimos que bajarnos.'
  ],
  gesto: 'Date un toquecito en la frente con la palma de la mano: ¡uy!',
  sentido: [
    { t: 'Me equivoqué de mochila y me llevé la de Pablo.', ok: true, por: 'Se la llevó sin querer, creyendo que era la suya.' },
    { t: 'Me equivoqué a propósito para hacer reír a mi hermano.', ok: false, por: 'Equivocarse es sin querer.' },
    { t: 'Dije que la araña tenía seis patas, pero me equivoqué: tiene ocho.', ok: true, por: 'Lo dijo mal creyendo que estaba bien.' },
    { t: 'Me equivoqué: me salió todo bien.', ok: false, por: 'Si te equivocas, algo te sale mal.' }
  ],
  ejemplos: [
    { t: 'Ponerte el jersey del revés sin darte cuenta', ok: true },
    { t: 'Decir que 2 y 2 son 5', ok: true },
    { t: 'Llamar «mamá» a la maestra sin querer', ok: true },
    { t: 'Acertar una adivinanza', ok: false },
    { t: 'Escribir bien tu nombre', ok: false },
    { t: 'Ponerte el jersey del revés para hacer una broma', ok: false }
  ],
  acaba: ['Una vez me equivoqué y…', 'Cuando me equivoco, lo que hago es…'],
  habla: 'Cuenta a tu compañero una vez que te equivocaste. ¿Pasó algo malo?',
  rel: { parecida: ['fallar'], contraria: ['acertar'], familia: ['equivocación'], mas: ['confundirse', 'error'] }
});

PALABRA({
  id: 'complicado', palabra: 'complicado', silabas: ['com', 'pli', 'ca', 'do'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 18, orden: 3, bloque: 'como-son',
  def: 'Algo es complicado cuando tiene muchos pasos o partes y cuesta entenderlo o hacerlo.',
  otro: null,
  escena: { img: 'complicado.webp', texto: 'Marina quiere montar una nave espacial con piezas. Las instrucciones tienen muchísimas páginas y cientos de piezas pequeñas. Marina pasa las hojas y no sabe por dónde seguir. ¡Qué nave tan complicada!' },
  contextos: [
    'Hacer una tarta de tres pisos es complicado.',
    'Este problema es complicado: hay que leerlo despacio.',
    'El camino a casa de mi tía es complicado: tiene muchas curvas y cruces.'
  ],
  gesto: 'Mueve las dos manos en el aire como si deshicieras un nudo de lana.',
  sentido: [
    { t: 'Un puzle de mil piezas es complicado.', ok: true, por: 'Tiene muchas piezas y cuesta hacerlo.' },
    { t: 'Abrir esta puerta es complicado: solo hay que empujar.', ok: false, por: 'Si solo hay que empujar, es sencillo.' },
    { t: 'Las normas del juego eran tan complicadas que no las entendimos.', ok: true, por: 'Costaba entenderlas.' },
    { t: 'El laberinto era complicado: tenía un solo camino recto.', ok: false, por: 'Un camino recto es fácil de seguir.' }
  ],
  ejemplos: [
    { t: 'Un puzle de muchísimas piezas', ok: true },
    { t: 'Un laberinto lleno de caminos', ok: true },
    { t: 'Un nudo con muchas vueltas', ok: true },
    { t: 'Un puzle de cuatro piezas', ok: false },
    { t: 'Encender la luz', ok: false },
    { t: 'Sumar 1 y 1', ok: false }
  ],
  acaba: ['Para mí es complicado… porque…', 'Cuando algo es complicado, yo…'],
  habla: 'Di algo que antes te parecía complicado y ahora te sale. ¿Qué pasó?',
  rel: { parecida: ['difícil'], contraria: ['sencillo', 'fácil'], familia: ['complicar'], mas: ['enredado'] }
});

PALABRA({
  id: 'util', palabra: 'útil', silabas: ['ú', 'til'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 18, orden: 4, bloque: 'como-son',
  def: 'Algo es útil cuando sirve para hacer algo o te ayuda.',
  otro: null,
  escena: { img: 'util.webp', texto: 'A Leo se le ha caído una canica debajo del sofá. No llega con la mano. Su abuela le da una regla larga y Leo la saca. ¡La regla ha sido muy útil!' },
  contextos: [
    'En casa, una linterna es útil cuando se va la luz.',
    'La goma de borrar es muy útil en clase.',
    'Por la calle, un paraguas es útil cuando llueve.'
  ],
  gesto: 'Haz como que clavas un clavo con un martillo: toc, toc.',
  sentido: [
    { t: 'Una mochila es útil para llevar los libros.', ok: true, por: 'Sirve para algo.' },
    { t: 'Un paraguas roto es muy útil cuando llueve.', ok: false, por: 'Si está roto, no sirve.' },
    { t: 'La linterna fue útil en la excursión de noche.', ok: true, por: 'Les ayudó a ver.' },
    { t: 'Las tijeras son útiles para beber agua.', ok: false, por: 'Las tijeras no sirven para beber.' }
  ],
  ejemplos: [
    { t: 'Un abrigo cuando hace frío', ok: true },
    { t: 'Una cuchara para tomar sopa', ok: true },
    { t: 'Una escalera para llegar arriba', ok: true },
    { t: 'Un tenedor para tomar sopa', ok: false },
    { t: 'Un bolígrafo sin tinta', ok: false },
    { t: 'Un globo pinchado', ok: false }
  ],
  acaba: ['Lo más útil de mi mochila es… porque…', 'Para ir de excursión es útil llevar… porque sirve para…'],
  habla: 'Busca en la clase algo útil y explica a tu compañero para qué sirve.',
  rel: { parecida: ['que sirve'], contraria: [], familia: ['utilizar'], mas: ['inútil', 'necesario', 'práctico'] }
});

PALABRA({
  id: 'frustrado', palabra: 'frustrado', silabas: ['frus', 'tra', 'do'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 18, orden: 5, bloque: 'sentir',
  def: 'Te sientes frustrado cuando algo no te sale como querías y te da rabia.',
  otro: null,
  escena: { img: 'frustrado.webp', texto: 'Carla quiere hacer una pulsera de cuentas. Se le sale el hilo una vez, y otra, y otra. Carla deja la pulsera sobre la mesa y aprieta los labios. Carla está frustrada.' },
  contextos: [
    'Mi hermano estaba frustrado porque la cometa no quería volar.',
    'Si estás frustrado con un ejercicio, puedes pedir ayuda.',
    'Al principio me sentía frustrado con la bici, pero luego aprendí.'
  ],
  gesto: 'Agárrate la cabeza con las dos manos, con cara de «¡no me sale!».',
  sentido: [
    { t: 'Estaba frustrada porque el castillo de arena se caía siempre.', ok: true, por: 'No le salía como quería.' },
    { t: 'Me salió el dibujo perfecto y me sentí frustrado.', ok: false, por: 'Si sale como querías, no te frustras.' },
    { t: 'Me sentí frustrado al ver que no podía abrir el bote.', ok: true, por: 'Lo intentaba y no salía.' },
    { t: 'Estoy frustrado porque mañana es mi cumpleaños.', ok: false, por: 'Eso alegra: no es algo que salga mal.' }
  ],
  ejemplos: [
    { t: 'Que la torre se te caiga cada vez', ok: true },
    { t: 'Que no te salga la voltereta después de probar mucho', ok: true },
    { t: 'Que el papel se rompa al recortar tu dibujo', ok: true },
    { t: 'Que la torre se quede de pie', ok: false },
    { t: 'Enfadarte porque alguien te quita el sitio', ok: false },
    { t: 'Estar contento porque te ha salido la voltereta', ok: false }
  ],
  acaba: ['Me siento frustrado cuando…', 'Cuando estoy frustrado, me ayuda…'],
  habla: '¿Qué le dirías a un amigo que está frustrado porque no le sale algo?',
  rel: { parecida: [], contraria: [], familia: ['frustración'], mas: ['rabia', 'desanimado'] }
});

PALABRA({
  id: 'esforzarse', palabra: 'esforzarse', silabas: ['es', 'for', 'zar', 'se'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 18, orden: 6, bloque: 'convivir', sep: 'intentar-esforzarse',
  def: 'Te esfuerzas cuando pones muchas ganas y trabajo en algo, aunque te cueste.',
  otro: null,
  escena: { img: 'esforzarse.webp', texto: 'Daniel quiere leer él solo el cuento de piratas. Va despacio, sílaba a sílaba, y a veces se atasca. No se rinde y sigue hasta la última página. Daniel se ha esforzado mucho.' },
  contextos: [
    'Mi madre se esfuerza mucho para arreglar la bici.',
    'En educación física me esforcé para correr la vuelta entera.',
    'Las hormigas se esfuerzan para llevar las migas al hormiguero.'
  ],
  gesto: 'Aprieta los dientes y empuja hacia delante, con las dos manos, algo que pesa mucho.',
  sentido: [
    { t: 'Me esforcé mucho para aprender a nadar sin manguitos.', ok: true, por: 'Puso muchas ganas aunque le costaba.' },
    { t: 'Me esforcé muchísimo en no hacer nada en todo el día.', ok: false, por: 'Esforzarse es trabajar y poner ganas, no quedarse quieto.' },
    { t: 'Aunque estaba cansada, se esforzó y terminó el dibujo.', ok: true, por: 'Siguió poniendo ganas aunque le costaba.' },
    { t: 'Me esforcé para comerme la tarta que tanto me gusta.', ok: false, por: 'Lo que te encanta y es fácil no cuesta.' }
  ],
  ejemplos: [
    { t: 'Practicar una canción muchos días hasta que sale', ok: true },
    { t: 'Empujar con todas tus fuerzas una caja pesada', ok: true },
    { t: 'Seguir leyendo aunque te cueste', ok: true },
    { t: 'Probar una vez y dejarlo enseguida', ok: false },
    { t: 'Encender la tele', ok: false },
    { t: 'Copiar la respuesta de otro', ok: false }
  ],
  acaba: ['Me he esforzado mucho para aprender a…', 'Cuando algo me cuesta, me esfuerzo y…'],
  habla: 'Cuenta a tu compañero algo que conseguiste porque te esforzaste.',
  rel: { parecida: ['dar lo mejor de ti'], contraria: [], familia: ['esfuerzo'], mas: ['intentar', 'rendirse'] }
});
```

## Notas para quien programe

- **Semana de «aprender cuesta»:** las seis palabras cuentan la misma idea: equivocarse es normal, lo
  complicado se aprende y quien lo intenta y se esfuerza lo consigue. Ningún ejemplo culpa a un niño;
  los «acaba» y los «habla» piden contar cosas propias, y el docente puede empezar contando una suya.
- `intentar` frente a `esforzarse`: intentar es **probar** (puede salir o no, basta una vez); esforzarse
  es **poner muchas ganas y trabajo** y seguir aunque cueste. El no-ejemplo de `esforzarse` «Probar una
  vez y dejarlo enseguida» es justo intentar sin esfuerzo. Llevan `sep: 'intentar-esforzarse'` (días
  distintos) y cada una está en `rel.mas` de la otra.
- `equivocarse` tiene `acertar` como contraria; `acertar` es la pregunta «Se parece a…» de `adivinar`
  (semana 16), pero son preguntas distintas (una «se parece», otra «lo contrario»). `confundirse` va en
  `rel.mas` para no chocar con `confundido` (semana 22).
- `complicado` frente a `sencillo` (semana 7): son contrarias, y `complicado` ya era la segunda pregunta
  de `sencillo`. Como ahora está en `PAQUETE_1`, `sencillo` solo pregunta «lo contrario de difícil»
  hasta que se presente `complicado` (mismo caso que `marcar` y `señalar`). `difícil` es la pregunta
  «Se parece a…» de `complicado` y «Lo contrario de…» de `sencillo`: no chocan.
- `útil` frente a `necesario` (semana 7): la lista los ponía como parecidas, pero no significan lo mismo
  (útil = sirve para algo; necesario = hace falta) y «¿Cómo decimos *necesario*…?» tendría ya otra
  respuesta. Por la regla «una pregunta, una respuesta», `necesario` va en `rel.mas` y la pregunta de
  `útil` es «que sirve». `útil` no tiene contraria: `inútil` es de su familia.
- `frustrado` no tiene preguntas de `relaciona` (ninguna palabra de todos los días significa lo mismo;
  `rabia` y `desanimado`, semana 23, van en `rel.mas`). Le quedan `acaba` y `habla`. Su no-ejemplo
  cercano es enfadarse por algo que te hace otro: frustrado es cuando algo **no te sale**.
- `esforzarse` va en el bloque `convivir`, como cuenta la lista (convivir 14). Si en Explorar se ve
  mejor en «Cómo nos sentimos», se cambia.
- **Gestos cercanos a vigilar:** `complicado` (deshacer un nudo en el aire) y `colaborar` (entrelazar los
  dedos, semana 9); `frustrado` (agarrarse la cabeza) y `problema` (rascarse la cabeza, semana 8);
  `esforzarse` (empujar algo pesado) y `pesado` (levantar un saco, semana 11); `equivocarse` (toquecito
  en la frente) y `solución` (dedo junto a la cabeza, semana 8).
- Orden recomendado dentro de la semana: intentar, equivocarse, complicado, útil, frustrado, esforzarse.
