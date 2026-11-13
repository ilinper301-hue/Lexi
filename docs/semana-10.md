# Semana 10 · contenido completo (1.º)

Seis palabras escritas con las normas de `docs/pedagogia.md` y el modelo de `docs/semana-01.md`.
Al programar, cada bloque pasa tal cual a `src/js/palabras/s10-<id>.js`.

Semana de Conocimiento del Medio: las seis palabras van en el bloque `medio` y se apoyan unas en otras
(los seres vivos crecen, necesitan alimento, cambian con las estaciones…).

```js
PALABRA({
  id: 'ser-vivo', palabra: 'ser vivo', silabas: ['ser', 'vi', 'vo'],
  tipo: 'nombre', nivel: 2, curso: 1, semana: 10, bloque: 'medio',
  def: 'Un ser vivo es todo lo que nace, crece, se alimenta y muere: personas, animales y plantas.',
  otro: null,
  escena: { img: 'ser-vivo.webp', texto: 'Luis mira su pecera. El pez come, nada y ha crecido desde el verano. La piedra del fondo, en cambio, sigue igual: ni come ni crece. El pez es un ser vivo.' },
  contextos: [
    'El árbol del patio es un ser vivo: necesita agua y luz.',
    'Tú también eres un ser vivo: naciste, creces y te alimentas.',
    'Las hormigas del jardín son seres vivos, aunque sean diminutas.'
  ],
  gesto: 'Pon una mano en el pecho y nota cómo respiras.',
  sentido: [
    { t: 'El caracol es un ser vivo: come hojas y crece.', ok: true, por: 'Nace, se alimenta y crece.' },
    { t: 'Mi mochila es un ser vivo porque la llevo a todas partes.', ok: false, por: 'La mochila no nace, ni come, ni crece.' },
    { t: 'El girasol es un ser vivo: nace de una semilla.', ok: true, por: 'Las plantas también nacen y crecen.' },
    { t: 'El robot es un ser vivo porque se mueve.', ok: false, por: 'Moverse no basta: no nace, ni crece, ni se alimenta.' }
  ],
  ejemplos: [
    { t: 'Un gato', ok: true },
    { t: 'Un rosal', ok: true },
    { t: 'Una niña', ok: true },
    { t: 'Una piedra', ok: false },
    { t: 'Un coche', ok: false },
    { t: 'Un muñeco', ok: false }
  ],
  acaba: ['Sé que un perro es un ser vivo porque…', 'Una piedra no es un ser vivo porque…'],
  habla: 'Di tres seres vivos que hayas visto hoy. Tu compañero dice otros tres.',
  rel: { parecida: [], contraria: ['cosa sin vida'], familia: ['vida', 'vivir'] }
});

PALABRA({
  id: 'alimento', palabra: 'alimento', silabas: ['a', 'li', 'men', 'to'],
  tipo: 'nombre', nivel: 2, curso: 1, semana: 10, bloque: 'medio',
  def: 'Un alimento es lo que comen o beben los seres vivos para crecer y tener fuerzas.',
  otro: null,
  escena: { img: 'alimento.webp', texto: 'Naia vuelve del mercado con su padre. En la cesta hay pan, tomates, lentejas, huevos y un melón. Con todo eso van a comer esta semana. La cesta está llena de alimentos.' },
  contextos: [
    'La leche es el primer alimento de los bebés.',
    'La hierba es el alimento de las vacas.',
    'En el comedor tomamos alimentos variados: verdura, fruta, legumbres, pescado…'
  ],
  gesto: 'Lleva una mano a la boca, como si comieras con cuchara.',
  sentido: [
    { t: 'El pan es un alimento.', ok: true, por: 'Se come y da fuerzas.' },
    { t: 'Mi goma de borrar es un alimento riquísimo.', ok: false, por: 'La goma no se come.' },
    { t: 'Los pájaros buscan alimento para sus crías.', ok: true, por: 'Las crías necesitan comer para crecer.' },
    { t: 'La arena es el alimento de los perros.', ok: false, por: 'Los perros no comen arena.' }
  ],
  ejemplos: [
    { t: 'Una manzana', ok: true },
    { t: 'Un plato de lentejas', ok: true },
    { t: 'Un vaso de leche', ok: true },
    { t: 'Una cuchara', ok: false },
    { t: 'Una piedra', ok: false },
    { t: 'Un lápiz', ok: false }
  ],
  acaba: ['Mi alimento favorito es… porque…', 'Necesitamos alimentos para…'],
  habla: '¿Qué alimentos has tomado hoy en el desayuno? Cuéntaselo a tu compañero.',
  rel: { parecida: ['comida'], contraria: [], familia: ['alimentar', 'alimentación'] }
});

PALABRA({
  id: 'paisaje', palabra: 'paisaje', silabas: ['pai', 'sa', 'je'],
  tipo: 'nombre', nivel: 2, curso: 1, semana: 10, bloque: 'medio',
  def: 'Un paisaje es todo lo que ves cuando miras a lo lejos desde un sitio.',
  otro: null,
  escena: { img: 'paisaje.webp', texto: 'Víctor sube al mirador con su madre. Desde arriba ve montañas, un río que brilla y un pueblo pequeñito. «¡Qué bonito!», dice. Víctor está mirando el paisaje.' },
  contextos: [
    'Por la ventanilla del tren vemos el paisaje: campos y molinos.',
    'En la playa, el paisaje es de mar, arena y rocas.',
    'En plástica pintamos un paisaje nevado.'
  ],
  gesto: 'Ponte una mano de visera sobre los ojos y mira a lo lejos, de lado a lado.',
  sentido: [
    { t: 'Desde la montaña se ve un paisaje precioso.', ok: true, por: 'Desde arriba se ve muy lejos.' },
    { t: 'Cogí el paisaje con la mano y lo guardé en el bolsillo.', ok: false, por: 'Un paisaje se mira; no se puede coger.' },
    { t: 'El paisaje del desierto tiene arena y casi ninguna planta.', ok: true, por: 'Es lo que se ve allí al mirar a lo lejos.' },
    { t: 'Con los ojos cerrados veía muy bien el paisaje.', ok: false, por: 'Para ver el paisaje hay que mirar.' }
  ],
  ejemplos: [
    { t: 'Lo que ves desde lo alto de una montaña', ok: true },
    { t: 'El campo que se ve por la ventanilla del coche', ok: true },
    { t: 'La playa con el mar al fondo', ok: true },
    { t: 'Lo que hay dentro de tu estuche', ok: false },
    { t: 'Una hormiga vista con lupa', ok: false },
    { t: 'El interior de un cajón', ok: false }
  ],
  acaba: ['Desde mi ventana, el paisaje tiene…', 'El paisaje que más me gusta es… porque…'],
  habla: 'Describe a tu compañero un paisaje que te guste. ¿Qué se ve?',
  rel: { parecida: ['vista'], contraria: [], familia: [] }
});

PALABRA({
  id: 'crecer', palabra: 'crecer', silabas: ['cre', 'cer'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 10, bloque: 'medio',
  def: 'Crecer es hacerse más grande o más alto poco a poco, con el tiempo.',
  otro: null,
  escena: { img: 'crecer.webp', texto: 'Claudia se pone el abrigo del año pasado. Las mangas le llegan por el codo y no puede abrocharlo. Su padre se ríe: «¡Te queda pequeño!». Claudia ha crecido.' },
  contextos: [
    'Regamos la semilla y la planta crece un poco cada día.',
    'El cachorro crece muy deprisa: ya no cabe en su cesta.',
    'Cuando crezca, quiero ser enfermero.'
  ],
  gesto: 'Pon la mano plana a la altura de la mesa y súbela despacio hasta por encima de la cabeza.',
  sentido: [
    { t: 'He crecido: el pantalón me queda corto.', ok: true, por: 'Ahora es más alto que antes.' },
    { t: 'La piedra del jardín ha crecido mucho este verano.', ok: false, por: 'Las piedras no son seres vivos: no crecen.' },
    { t: 'Al girasol le dio el sol y creció hasta la ventana.', ok: true, por: 'Se hizo más alto poco a poco.' },
    { t: 'He crecido tanto que ahora soy más bajito.', ok: false, por: 'Crecer es hacerse más alto, no más bajo.' }
  ],
  ejemplos: [
    { t: 'Una planta que cada día está más alta', ok: true },
    { t: 'Un cachorro que se hace perro grande', ok: true },
    { t: 'Un bebé que se hace niño', ok: true },
    { t: 'Un globo que se desinfla', ok: false },
    { t: 'Una vela que se gasta', ok: false },
    { t: 'Un lápiz al que sacas punta', ok: false }
  ],
  acaba: ['Sé que he crecido porque…', 'Para crecer, una planta necesita…'],
  habla: '¿En qué notas que has crecido desde el curso pasado?',
  rel: { parecida: ['hacerse mayor', 'aumentar'], contraria: ['encoger'], familia: ['crecimiento', 'crecido'] }
});

PALABRA({
  id: 'necesitar', palabra: 'necesitar', silabas: ['ne', 'ce', 'si', 'tar'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 10, bloque: 'medio',
  def: 'Necesitar algo es que te hace falta de verdad: sin eso no puedes vivir o hacer algo.',
  otro: null,
  escena: { img: 'necesitar.webp', texto: 'La planta de Mario tiene las hojas caídas y la tierra seca. Mario le echa agua con la regadera. Al día siguiente las hojas están tiesas otra vez. La planta necesitaba agua.' },
  contextos: [
    'Los peces necesitan agua para vivir.',
    'Para pintar necesito un pincel.',
    'Cuando estoy triste, necesito un abrazo.'
  ],
  gesto: 'Tiende las dos manos juntas hacia delante, como pidiendo algo.',
  sentido: [
    { t: 'Necesito el abrigo porque hace mucho frío.', ok: true, por: 'Sin abrigo pasaría frío.' },
    { t: 'Los peces necesitan un paraguas para no mojarse.', ok: false, por: 'Los peces viven en el agua: no les hace falta.' },
    { t: 'Para cortar el papel necesito unas tijeras.', ok: true, por: 'Sin tijeras no puede cortarlo bien.' },
    { t: 'Necesito diez helados para poder respirar.', ok: false, por: 'Los helados apetecen, pero no hacen falta para respirar.' }
  ],
  ejemplos: [
    { t: 'Una planta, agua', ok: true },
    { t: 'Un pájaro, aire', ok: true },
    { t: 'Tú, dormir', ok: true },
    { t: 'Tú, un juguete más', ok: false },
    { t: 'Un pez, zapatos', ok: false },
    { t: 'Un gato, una tele', ok: false }
  ],
  acaba: ['Para vivir, los seres vivos necesitan…', 'Para hacer mi dibujo necesito…'],
  habla: 'Piensa en una mascota. ¿Qué necesita para estar bien? Díselo a tu compañero.',
  rel: { parecida: ['hacer falta'], contraria: [], familia: ['necesario', 'necesidad'] }
});

PALABRA({
  id: 'estacion', palabra: 'estación', silabas: ['es', 'ta', 'ción'],
  tipo: 'nombre', nivel: 2, curso: 1, semana: 10, bloque: 'medio',
  def: 'Una estación es cada una de las cuatro partes del año: primavera, verano, otoño e invierno.',
  otro: 'También es el sitio donde paran los trenes y los autobuses.',
  escena: { img: 'estacion.webp', texto: 'Lía mira el árbol de su calle. Hace unos meses tenía flores; luego, hojas verdes. Hoy las hojas son amarillas y se caen. Ha llegado otra estación.' },
  contextos: [
    'El verano es la estación más calurosa.',
    'En cada estación nos ponemos ropa diferente.',
    'Mi estación favorita es la primavera porque salen las flores.'
  ],
  gesto: 'Cuenta cuatro con los dedos de una mano, uno a uno.',
  sentido: [
    { t: 'El invierno es la estación más fría.', ok: true, por: 'El invierno es una de las cuatro.' },
    { t: 'El martes es mi estación favorita.', ok: false, por: 'El martes es un día de la semana.' },
    { t: 'En otoño, la estación de las hojas secas, recogemos castañas.', ok: true, por: 'El otoño es una parte del año.' },
    { t: 'El año tiene doce estaciones.', ok: false, por: 'Tiene cuatro; doce son los meses.' }
  ],
  ejemplos: [
    { t: 'La primavera', ok: true },
    { t: 'El otoño', ok: true },
    { t: 'El invierno', ok: true },
    { t: 'El lunes', ok: false },
    { t: 'Enero', ok: false },
    { t: 'La mañana', ok: false }
  ],
  acaba: ['Mi estación favorita es… porque…', 'En invierno, la estación más fría, yo…'],
  habla: '¿En qué estación es tu cumpleaños? ¿Qué tiempo suele hacer?',
  rel: { parecida: [], contraria: [], familia: [] }
});
```

## Notas para quien programe

- `ser vivo` son dos palabras: `id` con guion (`ser-vivo`), plural «seres vivos». Las palmadas son
  tres: ser-vi-vo.
- El `id` de «estación» es `estacion` (sin tilde). Tiene segundo significado (`otro`): la del tren.
- `ser vivo`, `alimento`, `paisaje` y `estación` son `nombre`: valen las notas de la semana 8 sobre
  el artículo en la pregunta («¿Es un ser vivo?», «¿Es una estación?»).
- `necesitar`: los ejemplos tienen la forma «quién, qué» («Una planta, agua»). La pregunta en pantalla
  es «¿Lo necesita de verdad?». Enlazar con `necesario` (semana 7).
- `crecer` cambia al conjugarse: «crezco», «crezca».
- `ser vivo`: la definición dice «muere» porque el ciclo de la vida es contenido de 1.º. Si en
  la clase hay un duelo reciente, el docente puede saltarse esa parte: avisarlo en la zona del tutor.
- Orden recomendado dentro de la semana: ser vivo, crecer, necesitar, alimento, estación, paisaje.
