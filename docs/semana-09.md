# Semana 9 · contenido completo (1.º)

Seis palabras escritas con las normas de `docs/pedagogia.md` y el modelo de `docs/semana-01.md`.
Al programar, cada bloque pasa tal cual a `src/js/palabras/s09-<id>.js`.

```js
PALABRA({
  id: 'compartir', palabra: 'compartir', silabas: ['com', 'par', 'tir'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 9, bloque: 'convivir',
  def: 'Compartir es dar a otros una parte de lo que tienes o usarlo juntos.',
  otro: null,
  escena: { img: 'compartir.webp', texto: 'Jorge abre su bocadillo en el recreo. Su amigo se ha dejado el suyo en casa. Jorge lo parte por la mitad y le da un trozo. Jorge ha compartido su bocadillo.' },
  contextos: [
    'En la mesa compartimos los rotuladores.',
    'Mi hermana y yo compartimos habitación.',
    'En el parque compartimos el balón con otros niños.'
  ],
  gesto: 'Haz como que partes algo con las dos manos y tiende una hacia delante.',
  sentido: [
    { t: 'Compartí mis galletas: me comí dos y le di dos a Lía.', ok: true, por: 'Le dio una parte de lo suyo.' },
    { t: 'Compartí mis pinturas guardándolas para que nadie las tocara.', ok: false, por: 'Si nadie más las usa, no las compartes.' },
    { t: 'En el coche compartimos el asiento de atrás los tres primos.', ok: true, por: 'Lo usan juntos.' },
    { t: 'Compartí la merienda comiéndomela yo solo a escondidas.', ok: false, por: 'Compartir es dar una parte a otros.' }
  ],
  ejemplos: [
    { t: 'Dar la mitad de tu bocadillo', ok: true },
    { t: 'Dejar tus pinturas a toda la mesa', ok: true },
    { t: 'Jugar los dos con el mismo balón', ok: true },
    { t: 'Guardarte todo para ti', ok: false },
    { t: 'Quitarle el juguete a otro', ok: false },
    { t: 'Jugar solo sin dejar a nadie', ok: false }
  ],
  acaba: ['Me gusta compartir… con…', 'Cuando alguien comparte conmigo, yo me siento…'],
  habla: '¿Qué te gusta compartir y qué te cuesta más compartir?',
  rel: { parecida: ['repartir', 'dar una parte'], contraria: ['guardarse'], familia: ['parte'] }
});

PALABRA({
  id: 'colaborar', palabra: 'colaborar', silabas: ['co', 'la', 'bo', 'rar'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 9, bloque: 'convivir',
  def: 'Colaborar es trabajar con otros, cada uno haciendo su parte, para conseguir algo juntos.',
  otro: null,
  escena: { img: 'colaborar.webp', texto: 'Hay que mover la mesa grande y pesa mucho. Irene llama a tres amigos. Cada uno coge una esquina y cuentan: «una, dos y… ¡tres!». Los cuatro han sabido colaborar.' },
  contextos: [
    'En casa todos colaboramos: yo pongo la mesa y mi padre cocina.',
    'Las hormigas colaboran para llevar una hoja muy grande.',
    'En el mural de la clase colaboramos todos: unos pintan y otros recortan.'
  ],
  gesto: 'Entrelaza los dedos de las dos manos y aprieta.',
  sentido: [
    { t: 'Colaboramos para recoger la clase y acabamos enseguida.', ok: true, por: 'Todos hicieron su parte.' },
    { t: 'Colaboré mirando cómo trabajaban los demás.', ok: false, por: 'Mirar no es hacer tu parte.' },
    { t: 'Los bomberos colaboran: unos traen el agua y otros la echan.', ok: true, por: 'Cada uno hace una parte del trabajo.' },
    { t: 'Colaboramos mucho: cada uno fue por su lado sin hablar con nadie.', ok: false, por: 'Colaborar es trabajar juntos.' }
  ],
  ejemplos: [
    { t: 'Montar una cabaña entre cuatro', ok: true },
    { t: 'Poner la mesa mientras otro cocina', ok: true },
    { t: 'Remar todos a la vez en la barca', ok: true },
    { t: 'Mirar cómo recogen los demás', ok: false },
    { t: 'Hacer un dibujo tú solo', ok: false },
    { t: 'Estropear lo que hace otro', ok: false }
  ],
  acaba: ['En mi casa colaboro cuando…', 'Colaborando es más fácil… porque…'],
  habla: '¿En qué has colaborado esta semana, en casa o en el cole?',
  rel: { parecida: ['cooperar', 'trabajar en equipo'], contraria: [], familia: ['colaboración', 'colaborador'] }
});

PALABRA({
  id: 'respetar', palabra: 'respetar', silabas: ['res', 'pe', 'tar'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 9, bloque: 'convivir',
  def: 'Respetar es tratar bien a las personas, los animales y las cosas, y cumplir las normas.',
  otro: null,
  escena: { img: 'respetar.webp', texto: 'En el columpio hay cola. Rubén tiene muchas ganas, pero no se cuela. Se pone el último y espera a que le toque. Rubén sabe respetar el turno.' },
  contextos: [
    'En clase respetamos el turno de palabra: no hablamos a la vez.',
    'En el campo respetamos los nidos: los miramos sin tocarlos.',
    'Los coches respetan el semáforo y paran en rojo.'
  ],
  gesto: 'Pon una mano abierta en el pecho e inclina un poco la cabeza.',
  sentido: [
    { t: 'Respeto a mi compañera: la escucho cuando habla.', ok: true, por: 'Escuchar es tratar bien.' },
    { t: 'Respeté las plantas del parque arrancándolas.', ok: false, por: 'Arrancarlas es tratarlas mal.' },
    { t: 'Respetamos las normas del juego y nadie hizo trampas.', ok: true, por: 'Cumplieron las normas.' },
    { t: 'Respeté su turno colándome delante.', ok: false, por: 'Colarse es saltarse la norma.' }
  ],
  ejemplos: [
    { t: 'Escuchar sin interrumpir', ok: true },
    { t: 'Esperar tu turno', ok: true },
    { t: 'Cuidar los libros de la biblioteca', ok: true },
    { t: 'Reírte de alguien', ok: false },
    { t: 'Colarte en la fila', ok: false },
    { t: 'Pintar en la mesa de otro', ok: false }
  ],
  acaba: ['Respeto a mis compañeros cuando…', 'Hay que respetar las normas del patio porque…'],
  habla: '¿Qué norma de la clase te parece más importante respetar? ¿Por qué?',
  rel: { parecida: ['tratar bien', 'cumplir'], contraria: ['molestar', 'faltar al respeto'], familia: ['respeto', 'respetuoso'] }
});

PALABRA({
  id: 'cuidadoso', palabra: 'cuidadoso', silabas: ['cui', 'da', 'do', 'so'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 9, bloque: 'como-son',
  def: 'Alguien es cuidadoso cuando hace las cosas despacio y con atención para que salgan bien.',
  otro: null,
  escena: { img: 'cuidadoso.webp', texto: 'Sofía lleva un vaso lleno de agua hasta la mesa. Va paso a paso, mirando el vaso, sin correr. No se le cae ni una gota. Sofía es cuidadosa.' },
  contextos: [
    'Soy cuidadoso con los libros: paso las hojas despacio.',
    'La veterinaria es cuidadosa cuando cura la pata del perro.',
    'Para recortar por la línea hay que ser cuidadoso.'
  ],
  gesto: 'Haz que dos dedos caminen de puntillas por la mesa, muy despacio.',
  sentido: [
    { t: 'Fui cuidadosa al pegar el cromo y quedó recto.', ok: true, por: 'Lo hizo con atención.' },
    { t: 'Fue tan cuidadoso que lo hizo corriendo y sin mirar.', ok: false, por: 'Ser cuidadoso es ir despacio y con atención.' },
    { t: 'El pintor cuidadoso no se sale de la raya.', ok: true, por: 'Pone atención para que salga bien.' },
    { t: 'Soy muy cuidadoso: siempre lo tiro todo y lo rompo.', ok: false, por: 'Quien lo rompe todo es descuidado.' }
  ],
  ejemplos: [
    { t: 'Llevar un plato con las dos manos', ok: true },
    { t: 'Recortar despacio por la línea', ok: true },
    { t: 'Guardar cada rotulador con su tapa', ok: true },
    { t: 'Tirar la mochila al suelo', ok: false },
    { t: 'Pintar deprisa saliéndote', ok: false },
    { t: 'Correr con unas tijeras en la mano', ok: false }
  ],
  acaba: ['Soy cuidadoso cuando…', 'Con las cosas frágiles hay que ser cuidadoso porque…'],
  habla: '¿Con qué cosas eres muy cuidadoso? ¿Por qué?',
  rel: { parecida: ['atento'], contraria: ['descuidado'], familia: ['cuidado', 'cuidar'] }
});

PALABRA({
  id: 'distinto', palabra: 'distinto', silabas: ['dis', 'tin', 'to'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 9, bloque: 'como-son',
  def: 'Algo es distinto cuando no es igual que otra cosa o no es el mismo de antes.',
  otro: null,
  escena: { img: 'distinto.webp', texto: 'Enzo vuelve de la peluquería con el pelo muy corto. Su perro lo mira raro y lo olfatea. «¡Que soy yo!», dice Enzo riéndose. Hoy Enzo está distinto.' },
  contextos: [
    'Hoy hemos ido al cole por un camino distinto.',
    'Mi letra es distinta de la tuya.',
    'Cada día de la semana tiene un nombre distinto.'
  ],
  gesto: 'Enseña una mano con la palma hacia arriba y la otra con la palma hacia abajo.',
  sentido: [
    { t: 'Probé un sabor distinto: siempre pido fresa y hoy pedí limón.', ok: true, por: 'No es el de siempre.' },
    { t: 'Me puse un jersey distinto: el mismo de ayer.', ok: false, por: 'Si es el mismo, no es distinto.' },
    { t: 'Los gemelos llevan gorros distintos para que sepamos quién es quién.', ok: true, por: 'Los gorros no son iguales.' },
    { t: 'Estos dos números son distintos: el 4 y el 4.', ok: false, por: 'El 4 y el 4 son iguales.' }
  ],
  ejemplos: [
    { t: 'Un zapato y una bota', ok: true },
    { t: 'El 3 y el 8', ok: true },
    { t: 'Tu voz y la de tu maestra', ok: true },
    { t: 'El 5 y el 5', ok: false },
    { t: 'Dos cromos repetidos', ok: false },
    { t: 'El camino de todos los días', ok: false }
  ],
  acaba: ['Hoy he hecho algo distinto: …', 'Mi casa es distinta de la de mi amigo porque…'],
  habla: 'Dile a tu compañero algo distinto que te gustaría hacer este fin de semana.',
  rel: { parecida: ['diferente'], contraria: ['igual', 'mismo'], familia: ['distinguir'] }
});

PALABRA({
  id: 'paciente', palabra: 'paciente', silabas: ['pa', 'cien', 'te'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 9, bloque: 'sentir',
  def: 'Alguien es paciente cuando sabe esperar con calma, sin enfadarse ni quejarse.',
  otro: 'También es paciente la persona enferma a la que cuida un médico.',
  escena: { img: 'paciente.webp', texto: 'Blanca va a pescar con su abuelo. Pasa un rato y no pica ningún pez. Pasa otro rato. Blanca sigue quieta, mirando el agua, sin protestar. Blanca es paciente.' },
  contextos: [
    'Hay que ser paciente para que crezca la planta: tarda muchos días.',
    'En la cola del súper esperamos pacientes nuestro turno.',
    'Mi maestro es paciente: me lo explica otra vez sin enfadarse.'
  ],
  gesto: 'Pon las manos una encima de otra sobre la mesa y quédate muy quieto.',
  sentido: [
    { t: 'Fui paciente y esperé mi turno sin protestar.', ok: true, por: 'Esperó con calma.' },
    { t: 'Soy muy paciente: si tengo que esperar un minuto, grito y pataleo.', ok: false, por: 'Gritar no es esperar con calma.' },
    { t: 'La gata paciente espera quieta delante del agujero del ratón.', ok: true, por: 'Aguanta la espera sin moverse.' },
    { t: 'Fue tan paciente que se marchó enfadado nada más llegar.', ok: false, por: 'Quien es paciente sabe esperar.' }
  ],
  ejemplos: [
    { t: 'Esperar a que el bizcocho se enfríe', ok: true },
    { t: 'Hacer un puzle grande poco a poco', ok: true },
    { t: 'Hacer cola sin protestar', ok: true },
    { t: 'Colarte porque no quieres esperar', ok: false },
    { t: 'Gritar «¡ya, ya, ya!»', ok: false },
    { t: 'Dejarlo a la primera porque no sale', ok: false }
  ],
  acaba: ['Tengo que ser paciente cuando…', 'Para aprender a leer hay que ser paciente porque…'],
  habla: '¿Qué es lo que más te cuesta esperar? ¿Qué haces mientras esperas?',
  rel: { parecida: ['tranquilo', 'calmado'], contraria: ['impaciente'], familia: ['paciencia', 'impaciente'] }
});
```

## Notas para quien programe

- `compartir`, `colaborar` y `respetar` van en el bloque `convivir` (como `proteger`, semana 5). Son
  las palabras de las normas de clase: conviene que salgan también en la asamblea.
- `distinto` significa lo mismo que `diferente` (semana 3). La ficha lo enfoca por otro lado: lo que
  **ya no es como antes** (el pelo de Enzo, un camino distinto). En el repaso, usarlas juntas:
  «distinto es otra forma de decir diferente». Ver la propuesta de cambio en `ESTADO.md`.
- `distinto`: los ejemplos son **parejas**, como en `parecido` y `diferente`.
- `paciente` tiene segundo significado (`otro`): el paciente del médico.
- `cuidadoso` enlaza con `frágil` (semana 1) y `delicado` (semana 8).
