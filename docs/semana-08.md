# Semana 8 · contenido completo (1.º)

Seis palabras escritas con las normas de `docs/pedagogia.md` y el modelo de `docs/semana-01.md`.
Al programar, cada bloque pasa tal cual a `src/js/palabras/s08-<id>.js`.

Esta semana trae los tres primeros `nombre` (problema, solución, pista).

```js
PALABRA({
  id: 'problema', palabra: 'problema', silabas: ['pro', 'ble', 'ma'],
  tipo: 'nombre', nivel: 2, curso: 1, semana: 8, bloque: 'pensar',
  def: 'Un problema es algo que no va bien o una pregunta difícil, y hay que pensar para resolverlo.',
  otro: null,
  escena: { img: 'problema.webp', texto: 'A Rocío se le cuela el balón en lo alto de un árbol. Salta, pero no llega. Mueve el tronco, pero el balón no cae. Rocío tiene un problema.' },
  contextos: [
    'En mates leemos el problema: «Tengo 3 globos y me dan 2. ¿Cuántos tengo?».',
    'El coche no arranca: tenemos un problema.',
    'Dos amigos quieren el mismo columpio: es un problema y hay que hablarlo.'
  ],
  gesto: 'Ráscate la cabeza con una mano.',
  sentido: [
    { t: 'Se rompió la cremallera de mi abrigo: tengo un problema.', ok: true, por: 'Algo no va bien y hay que arreglarlo.' },
    { t: 'Todo salió perfecto y no faltó nada: ¡menudo problema!', ok: false, por: 'Si todo va bien, no hay problema.' },
    { t: 'En el problema de mates había que averiguar cuántas canicas quedaban.', ok: true, por: 'Es una pregunta que hay que pensar.' },
    { t: 'Tengo un problema: ya está todo arreglado.', ok: false, por: 'Si está arreglado, ya no es un problema.' }
  ],
  ejemplos: [
    { t: 'Perder la llave de casa', ok: true },
    { t: 'Que llueva y no tengas paraguas', ok: true },
    { t: '«Tengo 4 lápices y pierdo 1. ¿Cuántos me quedan?»', ok: true },
    { t: 'Encontrar lo que buscabas', ok: false },
    { t: 'Que todo funcione bien', ok: false },
    { t: 'Tener la merienda preparada', ok: false }
  ],
  acaba: ['Un problema que tuve fue…', 'Cuando tengo un problema, primero…'],
  habla: 'Cuenta un problema pequeño que tuviste y cómo lo arreglaste.',
  rel: { parecida: ['dificultad', 'lío'], contraria: ['solución'], familia: [] }
});

PALABRA({
  id: 'solucion', palabra: 'solución', silabas: ['so', 'lu', 'ción'],
  tipo: 'nombre', nivel: 2, curso: 1, semana: 8, bloque: 'pensar',
  def: 'La solución es lo que arregla un problema o la respuesta a una pregunta.',
  otro: null,
  escena: { img: 'solucion.webp', texto: 'El balón de Rocío sigue en el árbol. Rocío piensa y piensa. Va a por una escoba, empuja el balón con el palo y… ¡cae! Rocío ha encontrado la solución.' },
  contextos: [
    'La solución del problema de los globos es 5.',
    'Tenía frío y la solución fue ponerme el abrigo.',
    'Queríamos el mismo columpio y la solución fue hacer turnos.'
  ],
  gesto: 'Levanta un dedo de golpe junto a la cabeza: «¡ya lo tengo!».',
  sentido: [
    { t: 'Se me rompió la hoja y la solución fue pegarla con celo.', ok: true, por: 'El celo arregla el problema.' },
    { t: 'La solución fue no hacer nada, y el problema siguió igual.', ok: false, por: 'Si el problema sigue igual, no es una solución.' },
    { t: 'Pensamos entre todos y encontramos la solución.', ok: true, por: 'Dieron con lo que lo arreglaba.' },
    { t: 'Encontré la solución y por eso no sé la respuesta.', ok: false, por: 'La solución es la respuesta.' }
  ],
  ejemplos: [
    { t: 'Ponerte el chubasquero si llueve', ok: true },
    { t: 'Hacer turnos para usar el columpio', ok: true },
    { t: 'Pegar con celo la hoja rota', ok: true },
    { t: 'Enfadarte y no hacer nada', ok: false },
    { t: 'Esconder lo que se ha roto', ok: false },
    { t: 'Llorar sin pedir ayuda', ok: false }
  ],
  acaba: ['Si se me olvida el bocadillo, una solución es…', 'Para encontrar la solución de un problema de mates, yo…'],
  habla: 'Dos amigos quieren jugar a cosas distintas. Buscad juntos una solución.',
  rel: { parecida: ['respuesta', 'arreglo'], contraria: ['problema'], familia: ['solucionar'] }
});

PALABRA({
  id: 'pista', palabra: 'pista', silabas: ['pis', 'ta'],
  tipo: 'nombre', nivel: 2, curso: 1, semana: 8, bloque: 'pensar',
  def: 'Una pista es una ayuda pequeña o una señal que te sirve para descubrir algo.',
  otro: 'También es un sitio preparado para algo: la pista de baloncesto, la pista de baile.',
  escena: { img: 'pista.webp', texto: 'Alguien se ha comido las galletas. Tomás mira el suelo y ve unas huellas pequeñas, manchadas de harina. Las huellas van hasta la cesta del perro. Tomás ha encontrado una pista.' },
  contextos: [
    'En la adivinanza, la pista es: «tiene cuatro patas y maúlla».',
    'En la búsqueda del tesoro, cada pista nos lleva a la siguiente.',
    'El dibujo del problema nos da una pista para resolverlo.'
  ],
  gesto: 'Haz una lupa con una mano, cerrando los dedos en círculo, y póntela en un ojo.',
  sentido: [
    { t: 'Me dieron una pista y adiviné el animal.', ok: true, por: 'La pista le ayudó a descubrirlo.' },
    { t: 'La pista me ayudó tanto que supe menos que antes.', ok: false, por: 'Una pista sirve para saber más.' },
    { t: 'Las huellas en la nieve son una pista: por aquí pasó un zorro.', ok: true, por: 'Son una señal que ayuda a descubrirlo.' },
    { t: 'Me dieron una pista: me dijeron la respuesta entera.', ok: false, por: 'Una pista ayuda un poco; no lo dice todo.' }
  ],
  ejemplos: [
    { t: 'Unas huellas en el barro', ok: true },
    { t: '«Empieza por la letra m»', ok: true },
    { t: '«Frío, frío… ¡caliente!»', ok: true },
    { t: 'Decir la respuesta entera', ok: false },
    { t: 'No decir nada', ok: false },
    { t: 'Tapar el dibujo para que no se vea', ok: false }
  ],
  acaba: ['Te doy una pista de mi animal favorito: …', 'Vi unas migas en el suelo; esa pista me dice que…'],
  habla: 'Piensa en un animal y dale tres pistas a tu compañero para que lo adivine.',
  rel: { parecida: ['señal', 'ayuda'], contraria: [], familia: ['despistar', 'despistado'] }
});

PALABRA({
  id: 'resistente', palabra: 'resistente', silabas: ['re', 'sis', 'ten', 'te'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 8, bloque: 'como-son',
  def: 'Algo es resistente cuando aguanta mucho sin romperse ni estropearse.',
  otro: null,
  escena: { img: 'resistente.webp', texto: 'Mía se sube al puente de madera del parque. Salta una vez, y otra, y otra más. El puente no se mueve ni cruje. El puente es resistente.' },
  contextos: [
    'Mi mochila es resistente: lleva tres cursos conmigo.',
    'El casco es resistente para proteger la cabeza.',
    'La tela de araña parece frágil, pero es muy resistente.'
  ],
  gesto: 'Aprieta los dos puños y enseña los músculos de los brazos.',
  sentido: [
    { t: 'Estas botas son resistentes: piso charcos y piedras y siguen como nuevas.', ok: true, por: 'Aguantan mucho sin estropearse.' },
    { t: 'El vaso era tan resistente que se rompió al rozarlo.', ok: false, por: 'Lo que se rompe al rozarlo es frágil.' },
    { t: 'Hicimos la cabaña con palos resistentes para que aguantara el viento.', ok: true, por: 'Tenían que aguantar sin romperse.' },
    { t: 'La pompa de jabón es muy resistente: explota con un soplido.', ok: false, por: 'Si explota con un soplido, no aguanta nada.' }
  ],
  ejemplos: [
    { t: 'Un puente de piedra', ok: true },
    { t: 'Un martillo', ok: true },
    { t: 'Unas botas de montaña', ok: true },
    { t: 'Una pompa de jabón', ok: false },
    { t: 'Un huevo', ok: false },
    { t: 'Una hoja de papel mojada', ok: false }
  ],
  acaba: ['Mi juguete más resistente es… porque…', 'Una mochila tiene que ser resistente porque…'],
  habla: '¿Qué cosa resistente tienes desde hace mucho tiempo y no se rompe?',
  rel: { parecida: ['fuerte', 'duro'], contraria: ['frágil', 'delicado'], familia: ['resistir', 'resistencia'] }
});

PALABRA({
  id: 'delicado', palabra: 'delicado', silabas: ['de', 'li', 'ca', 'do'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 8, bloque: 'como-son',
  def: 'Algo es delicado cuando es fino y se estropea si no lo tratas con mucho cuidado.',
  otro: 'También es delicada una persona que trata las cosas y a los demás con suavidad.',
  escena: { img: 'delicado.webp', texto: 'Erik quiere tocar la flor del almendro. «Con un dedo y muy despacio», dice su tía, «que los pétalos se caen enseguida». Erik casi ni la roza. La flor es delicada.' },
  contextos: [
    'La piel del bebé es delicada y hay que ponerle crema.',
    'Este jersey es delicado: se lava a mano.',
    'Las alas de la libélula son delicadas.'
  ],
  gesto: 'Toca la palma de una mano con un solo dedo, muy flojito.',
  sentido: [
    { t: 'Pasé las hojas del libro antiguo despacio porque son delicadas.', ok: true, por: 'Se estropean si no se tratan con cuidado.' },
    { t: 'Como la flor es delicada, la apreté con todas mis fuerzas.', ok: false, por: 'Lo delicado se trata con cuidado.' },
    { t: 'Lavamos la blusa delicada con agua fría y sin frotar.', ok: true, por: 'Así no se estropea.' },
    { t: 'La roca del monte es muy delicada: nada la estropea.', ok: false, por: 'Si nada la estropea, es resistente.' }
  ],
  ejemplos: [
    { t: 'Un pétalo de flor', ok: true },
    { t: 'Una tela de seda', ok: true },
    { t: 'Las alas de una mariposa', ok: true },
    { t: 'Un ladrillo', ok: false },
    { t: 'Unas botas de montaña', ok: false },
    { t: 'Una rueda de camión', ok: false }
  ],
  acaba: ['Hay que tocar con cuidado las cosas delicadas porque…', 'Algo delicado que conozco es…'],
  habla: '¿Qué cosa delicada has tenido en las manos? ¿Cómo la cogiste?',
  rel: { parecida: ['fino', 'frágil'], contraria: ['resistente', 'fuerte'], familia: ['delicadeza'] }
});

PALABRA({
  id: 'nervioso', palabra: 'nervioso', silabas: ['ner', 'vio', 'so'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 8, bloque: 'sentir',
  def: 'Estás nervioso cuando no puedes estar quieto ni tranquilo porque algo te preocupa o te hace mucha ilusión.',
  otro: null,
  escena: { img: 'nervioso.webp', texto: 'Mañana Daniela actúa en el teatro del cole. Le sudan las manos, mueve la pierna y repasa su frase una y otra vez. No consigue dormirse. Daniela está nerviosa.' },
  contextos: [
    'Antes del partido estábamos nerviosos.',
    'El perro se pone nervioso con los truenos.',
    'La noche antes de la excursión estoy tan nervioso que no me duermo.'
  ],
  gesto: 'Sacude las dos manos muy rápido delante de ti.',
  sentido: [
    { t: 'Estaba nerviosa antes de cantar: me temblaban las manos.', ok: true, por: 'Le preocupaba y no podía estar tranquila.' },
    { t: 'Estaba tan nervioso que me quedé dormido en un segundo.', ok: false, por: 'Con nervios cuesta dormirse.' },
    { t: 'Mi hermano está nervioso porque mañana empieza en un cole nuevo.', ok: true, por: 'Lo nuevo le preocupa y le hace ilusión.' },
    { t: 'Estoy nervioso: estoy quieto, en calma y sin pensar en nada.', ok: false, por: 'Eso es estar tranquilo.' }
  ],
  ejemplos: [
    { t: 'Esperar tu turno para salir al escenario', ok: true },
    { t: 'El primer día en un cole nuevo', ok: true },
    { t: 'La noche antes de tu cumpleaños', ok: true },
    { t: 'Estar tumbado mirando las nubes', ok: false },
    { t: 'Oír un cuento en el sofá', ok: false },
    { t: 'Dormir la siesta', ok: false }
  ],
  acaba: ['Me pongo nervioso cuando…', 'Si estoy nervioso, me ayuda…'],
  habla: '¿Cuándo te pones nervioso? ¿Qué haces para calmarte?',
  rel: { parecida: ['inquieto', 'intranquilo'], contraria: ['tranquilo', 'calmado'], familia: ['nervios', 'nerviosismo'] }
});
```

## Notas para quien programe

- El `id` de «solución» es `solucion` (sin tilde).
- **Palabras de tipo `nombre`**: la definición empieza por «Un… es…» o «La… es…». En la tarea `ejemplo`
  la pregunta es «¿Es un problema?», «¿Es una solución?», «¿Es una pista?»: hace falta el artículo. Conviene
  un campo opcional `articulo` (`'un'`, `'una'`) o deducirlo de la definición.
- `problema` y `solución` comparten historia (el balón de Rocío): se presentan en días distintos y en
  ese orden. Las dos imágenes deben mostrar a la misma niña y el mismo árbol.
- `pista` tiene segundo significado (`otro`): la pista de baloncesto.
- `resistente` y `delicado` son contrarias; las dos enlazan con `frágil` (semana 1).
- `delicado` se parece mucho a `frágil`. La diferencia que se enseña: lo frágil **se rompe**; lo
  delicado **se estropea** y pide suavidad. No hace falta insistir en el matiz en 1.º.
- `nervioso` es la contraria de `tranquilo` (semana 7).
