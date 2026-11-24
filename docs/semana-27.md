# Semana 27 · contenido completo (1.º)

Seis palabras escritas con las normas de `docs/pedagogia.md` y el modelo de `docs/semana-01.md`.
Al programar, cada bloque pasa tal cual a `src/js/palabras/s27-<id>.js`.

Tres palabras para pensar y hacer (practicar, mejorar, concentrarse), dos de cómo son las cosas
(abundante, escaso) y una de convivir (animar). Es la semana de «cómo se aprende».

```js
PALABRA({
  id: 'practicar', palabra: 'practicar', silabas: ['prac', 'ti', 'car'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 27, orden: 1, bloque: 'pensar', sep: 'practicar-mejorar',
  def: 'Practicar es hacer algo muchas veces para que cada vez te salga mejor.',
  otro: null,
  escena: { img: 'practicar.webp', texto: 'Nuria quiere aprender a saltar a la comba. El primer día se enreda todo el rato. Pero cada tarde salta un ratito en el patio de su casa. ¡Nuria practica y practica!' },
  contextos: [
    'En casa practico las letras en una pizarrita.',
    'En el cole practicamos el baile para la fiesta de fin de curso.',
    'En el parque, mi hermano practica con la bici sin ruedecitas.'
  ],
  gesto: 'Haz como que tocas una flauta, moviendo los dedos una y otra vez.',
  sentido: [
    { t: 'Mi prima practica con el violín todas las tardes.', ok: true, por: 'Lo toca muchas veces para que le salga mejor.' },
    { t: 'Para practicar natación, me quedé en casa viendo la tele.', ok: false, por: 'Para practicar hay que hacerlo, y muchas veces.' },
    { t: 'Practicamos la poesía en voz alta hasta que nos la supimos.', ok: true, por: 'La dijeron muchas veces para aprenderla.' },
    { t: 'Practiqué a montar en patinete una sola vez y lo dejé.', ok: false, por: 'Una sola vez no es practicar: hace falta hacerlo muchas.' }
  ],
  ejemplos: [
    { t: 'Leer un poco cada día para leer mejor', ok: true },
    { t: 'Entrenar los penaltis toda la semana', ok: true },
    { t: 'Ensayar la canción para la fiesta', ok: true },
    { t: 'Hacer una voltereta una sola vez', ok: false },
    { t: 'Mirar cómo otros juegan al fútbol', ok: false },
    { t: 'Dormir la siesta', ok: false }
  ],
  acaba: ['Si practico mucho…, al final…', 'Lo que más practico es… porque…'],
  habla: 'Contad entre los dos algo que os salía mal y ahora os sale bien. ¿Cómo lo practicasteis?',
  rel: { parecida: ['entrenar', 'ensayar'], contraria: [], familia: ['práctica'], mas: ['repetir', 'mejorar', 'esforzarse'] }
});

PALABRA({
  id: 'mejorar', palabra: 'mejorar', silabas: ['me', 'jo', 'rar'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 27, orden: 2, bloque: 'pensar', sep: 'practicar-mejorar',
  def: 'Mejoras cuando algo te sale mejor que antes, aunque todavía no te salga perfecto.',
  otro: 'También se dice cuando alguien estaba malo y se pone bien: «El abuelo ya ha mejorado».',
  escena: { img: 'mejorar.webp', texto: 'En septiembre, Adrián escribía su nombre con letras torcidas y gigantes. Hoy lo escribe más pequeño y casi recto. Su maestra pone las dos fichas juntas y sonríe. ¡Adrián ha mejorado mucho!' },
  contextos: [
    'En casa, mi hermana ha mejorado con la bici: ya no se cae.',
    'En clase, la letra de todos ha mejorado desde el principio del curso.',
    'En la piscina, mi primo mejora un poco cada semana: ya nada sin manguitos.'
  ],
  gesto: 'Pon una mano plana abajo y la otra un poco más arriba, como dos escalones.',
  sentido: [
    { t: 'Antes leía muy despacio y ahora leo más rápido: he mejorado.', ok: true, por: 'Ahora le sale mejor que antes.' },
    { t: 'Mi dibujo ha mejorado: ahora me sale peor que antes.', ok: false, por: 'Si sale peor, no ha mejorado: ha empeorado.' },
    { t: 'El equipo ha mejorado y ya mete más goles.', ok: true, por: 'Juega mejor que antes.' },
    { t: 'Mejoré en natación sin meterme nunca en el agua.', ok: false, por: 'Para mejorar hay que hacerlo y practicar.' }
  ],
  ejemplos: [
    { t: 'Atarte los zapatos más deprisa que el año pasado', ok: true },
    { t: 'Leer cuentos más largos que antes', ok: true },
    { t: 'Nadar sin manguitos, cuando antes los llevabas', ok: true },
    { t: 'Hacer un dibujo peor que el de ayer', ok: false },
    { t: 'Hacerlo igual de mal que siempre', ok: false },
    { t: 'Comerte un bocadillo', ok: false }
  ],
  acaba: ['Este curso he mejorado en…', 'Para mejorar en…, tengo que…'],
  habla: 'Dile a tu compañero algo en lo que ha mejorado este curso. Luego él te lo dice a ti.',
  rel: { parecida: ['avanzar'], contraria: ['empeorar'], familia: ['mejor', 'mejora'], mas: ['practicar', 'progresar', 'curarse'] }
});

PALABRA({
  id: 'concentrarse', palabra: 'concentrarse', silabas: ['con', 'cen', 'trar', 'se'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 27, orden: 3, bloque: 'pensar',
  def: 'Te concentras cuando pones toda tu atención en una sola cosa y no te distraes.',
  otro: null,
  escena: { img: 'concentrarse.webp', texto: 'Gabriel está haciendo un puzle de cien piezas. Su hermana pone música y su perro ladra. Pero Gabriel no levanta la vista y busca la pieza que falta. ¡Está muy concentrado!' },
  contextos: [
    'En casa, cuando hago los deberes, apago la tele para concentrarme.',
    'En clase, en la hora de lectura, todos estamos concentrados en nuestro libro.',
    'En el río, el señor que pescaba estaba tan concentrado que no nos oyó.'
  ],
  gesto: 'Pon las manos a los lados de los ojos, como las anteojeras de un caballo, y mira solo al frente.',
  sentido: [
    { t: 'Me concentro tanto pintando que no oigo que me llaman.', ok: true, por: 'Toda su atención está en pintar.' },
    { t: 'Me concentré en la ficha mientras hablaba con todos y miraba por la ventana.', ok: false, por: 'Si haces muchas cosas a la vez, te distraes.' },
    { t: 'La portera se concentra en la pelota para pararla.', ok: true, por: 'Solo mira la pelota.' },
    { t: 'Estaba muy concentrado en la carrera, así que me puse a contar las nubes.', ok: false, por: 'Contar nubes es distraerse de la carrera.' }
  ],
  ejemplos: [
    { t: 'Mirar solo la pelota antes de chutar', ok: true },
    { t: 'Leer sin hacer caso al ruido', ok: true },
    { t: 'Pensar en silencio una suma difícil', ok: true },
    { t: 'Mirar a todos lados mientras te hablan', ok: false },
    { t: 'Jugar con el estuche mientras la maestra explica', ok: false },
    { t: 'Ver la tele mientras haces los deberes', ok: false }
  ],
  acaba: ['Me concentro mejor cuando…', 'Si alguien se está concentrando, yo…'],
  habla: 'Contad entre los dos qué os distrae más y qué os ayuda a concentraros.',
  rel: { parecida: [], contraria: ['distraerse'], familia: ['concentración', 'concentrado'], mas: ['fijarse', 'atención', 'despistarse'] }
});

PALABRA({
  id: 'abundante', palabra: 'abundante', silabas: ['a', 'bun', 'dan', 'te'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 27, orden: 4, bloque: 'como-son', sep: 'abundante-escaso',
  def: 'Algo es abundante cuando hay muchísimo, tanto que llega para todos y sobra.',
  otro: null,
  escena: { img: 'abundante.webp', texto: 'En otoño, Irene va al campo con su abuelo a coger castañas. Hay castañas por todas partes: en el suelo, entre las hojas, junto al camino. Llenan dos cestas y todavía quedan muchas. ¡Este año las castañas son abundantes!' },
  contextos: [
    'En casa, la comida del cumpleaños fue tan abundante que sobró para el día siguiente.',
    'En el huerto del cole, este año la cosecha de tomates ha sido abundante.',
    'En el río, después de las lluvias, el agua es abundante.'
  ],
  gesto: 'Señala a un lado, al otro, arriba y abajo, como diciendo «¡hay por todas partes!».',
  sentido: [
    { t: 'En el bosque hay setas abundantes después de la lluvia.', ok: true, por: 'Hay muchísimas.' },
    { t: 'El agua es abundante: solo queda una gota en la botella.', ok: false, por: 'Una gota es muy poco: eso es escaso.' },
    { t: 'En la fiesta había fruta abundante y todos repitieron.', ok: true, por: 'Había tanta que llegó para todos y más.' },
    { t: 'La merienda fue abundante: no llegó para todos.', ok: false, por: 'Si no llega para todos, no había mucha.' }
  ],
  ejemplos: [
    { t: 'Un árbol cargado de naranjas', ok: true },
    { t: 'Un montón enorme de hojas en otoño', ok: true },
    { t: 'Una playa con miles de conchas', ok: true },
    { t: 'Tres galletas para toda la clase', ok: false },
    { t: 'Un vaso casi vacío', ok: false },
    { t: 'Una sola fresa en la mata', ok: false }
  ],
  acaba: ['En mi casa hay abundante…', 'Cuando la comida es abundante, podemos…'],
  habla: 'Pensad entre los dos un sitio donde hay algo abundante. ¿Qué hay allí a montones?',
  rel: { parecida: ['a montones'], contraria: ['escaso'], familia: ['abundancia'], mas: ['mucho', 'lleno', 'sobrar'] }
});

PALABRA({
  id: 'escaso', palabra: 'escaso', silabas: ['es', 'ca', 'so'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 27, orden: 5, bloque: 'como-son', sep: 'abundante-escaso',
  def: 'Algo es escaso cuando hay muy poco, y a veces no llega para todos.',
  otro: null,
  escena: { img: 'escaso.webp', texto: 'Hace muchos días que no llueve en el pueblo de Marco. El río lleva muy poca agua y las plantas se ponen amarillas. Su madre le dice: «Cierra bien el grifo, que el agua es escasa».' },
  contextos: [
    'En casa, la leche era escasa y solo llegó para dos vasos.',
    'En clase, las tijeras eran escasas y tuvimos que compartirlas.',
    'En el desierto, las plantas son escasas.'
  ],
  gesto: 'Rasca con una cuchara imaginaria el fondo de un bote, buscando lo último que queda.',
  sentido: [
    { t: 'En verano, el agua de la fuente es escasa y sale muy poquita.', ok: true, por: 'Hay muy poca.' },
    { t: 'Las hojas del otoño son escasas: el parque está lleno de ellas.', ok: false, por: 'Si el parque está lleno, son abundantes.' },
    { t: 'Los lápices rojos eran escasos y no había para todos.', ok: true, por: 'Había pocos y no llegaban.' },
    { t: 'La comida era escasa: sobraron tres bandejas.', ok: false, por: 'Si sobra, no es escasa.' }
  ],
  ejemplos: [
    { t: 'Dos gotas de zumo en el vaso', ok: true },
    { t: 'Un árbol con solo tres hojas', ok: true },
    { t: 'Pocas sillas para muchos niños', ok: true },
    { t: 'Un saco lleno de patatas', ok: false },
    { t: 'Una caja enorme de lápices', ok: false },
    { t: 'Una playa llena de arena', ok: false }
  ],
  acaba: ['Cuando el agua es escasa, tenemos que…', 'Si las pinturas son escasas en clase, podemos…'],
  habla: 'Pensad entre los dos qué haríais si en clase los lápices fueran escasos.',
  rel: { parecida: ['poco'], contraria: ['abundante'], familia: ['escasez'], mas: ['faltar', 'vacío', 'poquito'] }
});

PALABRA({
  id: 'animar', palabra: 'animar', silabas: ['a', 'ni', 'mar'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 27, orden: 6, bloque: 'convivir',
  def: 'Animar es decirle cosas a alguien para que tenga ganas de seguir y no se rinda.',
  otro: 'También es hacer que algo tenga más vida: «La música animó la fiesta».',
  escena: { img: 'animar.webp', texto: 'En la carrera del cole, Mateo está muy cansado y quiere pararse. Desde la valla, sus compañeros gritan: «¡Vamos, Mateo, tú puedes!». Mateo corre un poco más y llega a la meta. ¡Sus amigos lo han animado!' },
  contextos: [
    'En casa, mi madre me anima cuando me cuesta leer: «¡Ya casi está!».',
    'En el cole, animamos al equipo de clase en el partido.',
    'En la montaña, mi padre me animaba a subir hasta arriba del todo.'
  ],
  gesto: 'Agita los brazos en alto, como si gritaras «¡vamos!» desde la grada.',
  sentido: [
    { t: 'Mi amiga me animó: «¡Sigue, que te está quedando genial!».', ok: true, por: 'Le dio ganas de seguir.' },
    { t: 'Animé a mi hermano diciéndole: «Déjalo, nunca te va a salir».', ok: false, por: 'Eso quita las ganas: es lo contrario de animar.' },
    { t: 'El público animaba a los corredores con aplausos.', ok: true, por: 'Los aplausos les daban fuerza para seguir.' },
    { t: 'Para animar a mi compañero, me reí cuando se cayó.', ok: false, por: 'Reírse de alguien lo pone peor.' }
  ],
  ejemplos: [
    { t: 'Decir «¡Tú puedes!» a un amigo', ok: true },
    { t: 'Aplaudir a tu equipo', ok: true },
    { t: 'Decirle a tu hermano que le queda poco para acabar', ok: true },
    { t: 'Decir «Déjalo, es muy difícil»', ok: false },
    { t: 'Reírte de quien se equivoca', ok: false },
    { t: 'Decirle a un amigo «¡Qué lento eres!»', ok: false }
  ],
  acaba: ['Cuando alguien quiere rendirse, lo animo diciendo…', 'Me anima mucho que me digan…'],
  habla: 'Pensad entre los dos tres frases para animar a un compañero que no quiere seguir.',
  rel: { parecida: ['apoyar'], contraria: [], familia: ['ánimo', 'desanimar'], mas: ['desanimado', 'consolar', 'aplaudir'] }
});
```

## Notas para quien programe

- **Semana de «cómo se aprende»:** practicar, mejorar y concentrarse son tres cosas que hacemos al
  aprender; abundante y escaso son una pareja de contrarias; animar cierra con convivencia.
- `practicar` frente a `repetir` (semana 7), `intentar` y `esforzarse` (semana 18) y `mejorar`:
  practicar es **hacerlo muchas veces para que salga mejor**; repetir es solo volver a hacerlo;
  intentar es probar una vez; esforzarse es poner muchas ganas. Mejorar es **el resultado**: que salga
  mejor que antes. Por eso `practicar` y `mejorar` no se presentan el mismo día (`sep: 'practicar-mejorar'`).
  `practicar` pregunta «entrenar» y «ensayar».
- `mejorar`: la definición dice «aunque todavía no te salga perfecto», a propósito (se mejora poco a
  poco). Segundo significado nuevo: ponerse bien de salud. Pregunta «avanzar» y «lo contrario de
  empeorar». El «habla» pide decirle al compañero en qué ha mejorado: sin comparar entre niños.
- `concentrarse` frente a `fijarse` (semana 22): fijarse es **prestar atención para darse cuenta de
  cómo es algo**; concentrarse es **no distraerse de lo que haces**. Pregunta solo «lo contrario de
  distraerse» («prestar atención» ya es la pregunta de `fijarse`). Prepara `atento` (semana 29).
- `abundante` y `escaso` son contrarias (`sep: 'abundante-escaso'`) y se preguntan una a otra.
  `abundante` pregunta además «a montones»; `escaso`, «poco». `mucho` va en `rel.mas` porque «poco» y
  «mucho» se dicen todos los días y bastan como pista.
- `animar` (bloque `convivir`) frente a `consolar` (semana 23): animar es **dar ganas de seguir**;
  consolar es **ayudar a quien está triste**. El no-ejemplo «Decirle a un amigo «¡Qué lento eres!»» es
  lo contrario de animar (R28; antes era `consolar`, que un niño que la sabe daría por buena). Segundo significado (de la lista): «La música animó la fiesta». Pregunta «apoyar».
  `desanimado` (semana 23) va en `rel.mas`: es de su familia.
- **Gestos cercanos a vigilar:** `practicar` (tocar una flauta) y `brillante` (dedos que parpadean,
  semana 6); `mejorar` (dos manos como escalones) y `crecer` (mano que sube, semana 10); `concentrarse`
  (manos de anteojeras) y `observar` (prismáticos, semana 1); `abundante` (señalar a todas partes) y
  `señalar` (apuntar una vez, semana 2); `escaso` (rascar el fondo de un bote) y `vacío` (dar la
  vuelta a un vaso, semana 17); `animar` (brazos en alto) y `emocionado` (palmaditas, semana 11).
- Orden recomendado dentro de la semana: practicar, mejorar, concentrarse, abundante, escaso, animar.
