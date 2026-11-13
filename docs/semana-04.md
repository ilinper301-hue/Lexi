# Semana 4 · contenido completo (1.º)

Seis palabras escritas con las normas de `docs/pedagogia.md` y el modelo de `docs/semana-01.md`.
Al programar, cada bloque pasa tal cual a `src/js/palabras/s04-<id>.js`.

```js
PALABRA({
  id: 'rodear', palabra: 'rodear', silabas: ['ro', 'de', 'ar'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 4, bloque: 'pensar',
  def: 'Rodear es dibujar una línea cerrada alrededor de algo para marcarlo.',
  otro: 'También es ponerse o ir alrededor de algo: entre todos rodeamos el árbol.',
  escena: { img: 'rodear.webp', texto: 'En la ficha hay cinco animales. «¿Cuál vuela?», lee la maestra. Elsa coge el lápiz y dibuja un círculo alrededor del pájaro. Elsa ha rodeado el pájaro.' },
  contextos: [
    'En mates rodeamos el número mayor.',
    'En el calendario de casa rodeamos el día de la excursión.',
    'En la sopa de letras rodeamos las palabras que encontramos.'
  ],
  gesto: 'Dibuja un círculo en el aire con el dedo.',
  sentido: [
    { t: 'Rodeé la manzana y quedó dentro de un círculo.', ok: true, por: 'La línea cerrada la deja dentro.' },
    { t: 'Rodeé el gato haciendo una raya debajo.', ok: false, por: 'Eso es subrayar; rodear es dibujar alrededor.' },
    { t: 'Rodeamos con rojo todas las letras a.', ok: true, por: 'Dibujaron una línea alrededor de cada una.' },
    { t: 'Rodeé el dibujo sin tocar la ficha con el lápiz.', ok: false, por: 'Para rodear hay que trazar la línea.' }
  ],
  ejemplos: [
    { t: 'Hacer un círculo alrededor de la respuesta', ok: true },
    { t: 'Dibujar una línea cerrada alrededor de tres peces', ok: true },
    { t: 'Encerrar un número dentro de un redondel', ok: true },
    { t: 'Tachar con una cruz', ok: false },
    { t: 'Subrayar una palabra', ok: false },
    { t: 'Colorear el dibujo', ok: false }
  ],
  acaba: ['Si me dicen «rodea las frutas», yo rodeo…', 'En el calendario rodearía el día de…'],
  habla: 'En un dibujo de tu clase te piden: «rodea lo que sirve para escribir». ¿Qué rodearías?',
  rel: { parecida: ['encerrar en un círculo'], contraria: [], familia: ['alrededor', 'rodeo'] }
});

PALABRA({
  id: 'unir', palabra: 'unir', silabas: ['u', 'nir'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 4, bloque: 'pensar',
  def: 'Unir es juntar dos cosas para que queden pegadas o conectadas.',
  otro: null,
  escena: { img: 'unir.webp', texto: 'Rayan tiene un tren de madera. Engancha la locomotora con el primer vagón, y luego otro, y otro. Ahora es un tren muy largo. Rayan ha unido los vagones.' },
  contextos: [
    'En la ficha unimos con flechas cada animal con su casa.',
    'El puente une los dos lados del río.',
    'Unimos los puntos del 1 al 10 y sale un dibujo.'
  ],
  gesto: 'Engancha los dos dedos índices, uno con otro.',
  sentido: [
    { t: 'Uní las dos piezas y ya no se separaban.', ok: true, por: 'Quedaron juntas.' },
    { t: 'Uní los dos trozos alejándolos todo lo que pude.', ok: false, por: 'Unir es juntar, no separar.' },
    { t: 'En la ficha uní cada número con su dibujo usando una línea.', ok: true, por: 'La línea los conecta.' },
    { t: 'Uní una sola pieza.', ok: false, por: 'Para unir hacen falta dos cosas por lo menos.' }
  ],
  ejemplos: [
    { t: 'Pegar dos trozos de papel', ok: true },
    { t: 'Trazar una línea de la palabra a su dibujo', ok: true },
    { t: 'Darse la mano para hacer un corro', ok: true },
    { t: 'Cortar una cuerda', ok: false },
    { t: 'Separar las piezas', ok: false },
    { t: 'Rodear un dibujo', ok: false }
  ],
  acaba: ['Para unir dos trozos de papel puedo usar…', 'Si uno el perro con lo que come, lo uno con…'],
  habla: '¿Qué cosas se pueden unir con pegamento? ¿Y con una cuerda? Pensadlo juntos.',
  rel: { parecida: ['juntar', 'conectar'], contraria: ['separar'], familia: ['unión', 'unido'] }
});

PALABRA({
  id: 'descubrir', palabra: 'descubrir', silabas: ['des', 'cu', 'brir'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 4, bloque: 'pensar',
  def: 'Descubrir es encontrar o enterarte de algo que antes no sabías o no veías.',
  otro: null,
  escena: { img: 'descubrir.webp', texto: 'Candela levanta una piedra del jardín. Debajo hay un montón de bichos bola que se hacen una pelota. ¡No sabía que vivían ahí! Candela acaba de descubrir su escondite.' },
  contextos: [
    'Con la lupa descubrimos que la hoja tiene rayitas.',
    'Probé las lentejas y descubrí que me gustan.',
    'Leyendo el cuento descubrimos quién se comió la tarta.'
  ],
  gesto: 'Tápate los ojos con las manos y ábrelas de golpe: ¡oh!',
  sentido: [
    { t: 'Abrí el armario y descubrí dónde se escondía el gato.', ok: true, por: 'Antes no lo sabía y ahora sí.' },
    { t: 'Hoy descubrí mi nombre, que ya me sabía desde pequeño.', ok: false, por: 'Lo que ya sabes no lo descubres.' },
    { t: 'Mezclamos azul y amarillo y descubrimos que sale verde.', ok: true, por: 'Se enteraron de algo nuevo.' },
    { t: 'Descubrí el tesoro sin llegar a encontrarlo nunca.', ok: false, por: 'Descubrir es encontrarlo.' }
  ],
  ejemplos: [
    { t: 'Encontrar un nido escondido en un árbol', ok: true },
    { t: 'Enterarte de que el hielo se vuelve agua', ok: true },
    { t: 'Dar con un camino nuevo en el parque', ok: true },
    { t: 'Repetir lo que ya sabías', ok: false },
    { t: 'Buscar algo y no encontrarlo', ok: false },
    { t: 'Esconder un juguete', ok: false }
  ],
  acaba: ['Un día descubrí que…', 'Si miro debajo de una piedra, puedo descubrir…'],
  habla: '¿Qué has descubierto este curso que antes no sabías?',
  rel: { parecida: ['encontrar', 'averiguar'], contraria: ['esconder'], familia: ['descubrimiento'] }
});

PALABRA({
  id: 'suave', palabra: 'suave', silabas: ['sua', 've'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 4, bloque: 'como-son',
  def: 'Algo es suave cuando da gusto tocarlo porque es liso o blandito y no raspa.',
  otro: 'También es suave lo que no es fuerte: una voz suave, un viento suave.',
  escena: { img: 'suave.webp', texto: 'Izan acaricia a su conejo. El pelo es blandito y no pincha nada. Izan pone la mejilla encima y cierra los ojos. El pelo del conejo es suave.' },
  contextos: [
    'Mi manta es tan suave que no quiero salir de la cama.',
    'Los pétalos de la rosa son suaves.',
    'La piel del bebé es muy suave.'
  ],
  gesto: 'Acaríciate despacio el dorso de una mano con la otra.',
  sentido: [
    { t: 'Me gusta este jersey porque es suave y no pica.', ok: true, por: 'Da gusto llevarlo: no raspa.' },
    { t: 'La lija es tan suave que me raspó los dedos.', ok: false, por: 'Si raspa, es áspera.' },
    { t: 'El peluche es suave y da gusto abrazarlo.', ok: true, por: 'Es blandito.' },
    { t: 'Me pinché con el cactus porque es muy suave.', ok: false, por: 'Lo que pincha no es suave.' }
  ],
  ejemplos: [
    { t: 'El pelo de un gatito', ok: true },
    { t: 'Una bola de algodón', ok: true },
    { t: 'Una pluma', ok: true },
    { t: 'Una lija', ok: false },
    { t: 'El tronco de un árbol', ok: false },
    { t: 'Un estropajo', ok: false }
  ],
  acaba: ['Lo más suave que he tocado es…', 'Me gusta la ropa suave porque…'],
  habla: '¿Qué cosa suave tienes en casa? ¿Qué notas cuando la tocas?',
  rel: { parecida: ['blandito', 'liso'], contraria: ['áspero'], familia: ['suavidad', 'suavizar'] }
});

PALABRA({
  id: 'aspero', palabra: 'áspero', silabas: ['ás', 'pe', 'ro'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 4, bloque: 'como-son',
  def: 'Algo es áspero cuando raspa al tocarlo porque no es liso.',
  otro: null,
  escena: { img: 'aspero.webp', texto: 'Paula pasa la mano por el tronco de un pino. Nota bultos y rayas, y le raspa un poco los dedos. No es nada liso. El tronco es áspero.' },
  contextos: [
    'La lengua del gato es áspera: cuando te lame, raspa.',
    'La toalla vieja se ha quedado áspera.',
    'La pared del patio es áspera y, si te rozas, te arañas.'
  ],
  gesto: 'Rasca la palma de una mano con las uñas de la otra.',
  sentido: [
    { t: 'La lija es áspera: sirve para raspar la madera.', ok: true, por: 'Raspa porque no es lisa.' },
    { t: 'El algodón es áspero y por eso es tan blandito.', ok: false, por: 'Lo blandito y liso es suave.' },
    { t: 'Tengo las manos ásperas de jugar con la arena.', ok: true, por: 'Se le han quedado rasposas.' },
    { t: 'El cristal de la ventana es áspero: el dedo resbala.', ok: false, por: 'Si el dedo resbala, es liso.' }
  ],
  ejemplos: [
    { t: 'Un papel de lija', ok: true },
    { t: 'La corteza de un árbol', ok: true },
    { t: 'Un estropajo de cocina', ok: true },
    { t: 'Un espejo', ok: false },
    { t: 'Un pañuelo de seda', ok: false },
    { t: 'La piel de un bebé', ok: false }
  ],
  acaba: ['Toqué algo áspero y noté que…', 'Una cosa áspera que conozco es…'],
  habla: '¿Qué prefieres tocar: algo suave o algo áspero? ¿Por qué?',
  rel: { parecida: ['rasposo', 'rugoso'], contraria: ['suave', 'liso'], familia: ['aspereza'] }
});

PALABRA({
  id: 'agotado', palabra: 'agotado', silabas: ['a', 'go', 'ta', 'do'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 4, bloque: 'sentir',
  def: 'Estás agotado cuando estás tan cansado que ya no te quedan fuerzas.',
  otro: 'También se dice que algo está agotado cuando se ha acabado: las entradas están agotadas.',
  escena: { img: 'agotado.webp', texto: 'Adrián ha subido la montaña con su familia. Ha andado toda la mañana. Al llegar arriba se tumba en la hierba y no puede ni hablar. Adrián está agotado.' },
  contextos: [
    'Después del partido estábamos agotados.',
    'Mi madre llega agotada del trabajo y se sienta un rato.',
    'El perro corrió tanto por la playa que se quedó agotado.'
  ],
  gesto: 'Deja caer los hombros y los brazos, y suelta el aire: «uuuf».',
  sentido: [
    { t: 'Nadé toda la tarde y acabé agotado.', ok: true, por: 'Se quedó sin fuerzas.' },
    { t: 'Estoy agotada: ¡tengo fuerzas para correr tres horas más!', ok: false, por: 'Quien está agotado no tiene fuerzas.' },
    { t: 'Estaba tan agotado que me dormí en el coche.', ok: true, por: 'El cansancio era muy grande.' },
    { t: 'He dormido toda la noche de un tirón y me levanto agotado.', ok: false, por: 'Después de descansar bien tienes fuerzas.' }
  ],
  ejemplos: [
    { t: 'Volver de una excursión muy larga', ok: true },
    { t: 'Acabar una carrera y no poder más', ok: true },
    { t: 'Subir cien escalones seguidos', ok: true },
    { t: 'Levantarte después de dormir bien', ok: false },
    { t: 'Estar un poco cansado pero con ganas de jugar', ok: false },
    { t: 'Estar sentado oyendo un cuento', ok: false }
  ],
  acaba: ['Me quedé agotado después de…', 'Cuando estoy agotado, lo que necesito es…'],
  habla: '¿Cuándo fue la última vez que acabaste agotado? ¿Qué habías hecho?',
  rel: { parecida: ['muy cansado', 'rendido'], contraria: ['descansado'], familia: ['agotar', 'agotador'] }
});
```

## Notas para quien programe

- El `id` de «áspero» es `aspero` (sin tilde) para los nombres de archivo.
- `rodear`, `suave` y `agotado` tienen segundo significado (`otro`): se enseña en un día distinto.
- `descubrir`: la escena y las tareas evitan «descubierto» salvo en `habla`, donde lo dice el docente.
- `suave` y `áspero` son contrarias y se presentan en días distintos. Si se puede, pasar por la clase
  algo suave y algo áspero para tocarlo: es la mejor explicación.
- `agotado`: el no-ejemplo «Estar un poco cansado pero con ganas de jugar» marca la diferencia con «cansado».
