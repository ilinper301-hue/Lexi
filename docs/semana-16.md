# Semana 16 · contenido completo (1.º)

Seis palabras escritas con las normas de `docs/pedagogia.md` y el modelo de `docs/semana-01.md`.
Al programar, cada bloque pasa tal cual a `src/js/palabras/s16-<id>.js`.

Dos palabras para pensar (adivinar, decidir), una pareja de contrarias (agradable, desagradable), un
sentimiento fuerte (furioso) y una palabra para convivir (norma).

```js
PALABRA({
  id: 'adivinar', palabra: 'adivinar', silabas: ['a', 'di', 'vi', 'nar'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 16, orden: 1, bloque: 'pensar',
  def: 'Adivinar es acertar algo que no sabías, pensando en las pistas o por suerte.',
  otro: null,
  escena: { img: 'adivinar.webp', texto: 'Marta tapa los ojos a su hermano Teo y le pone algo en la mano. Es redondo, frío y huele a fruta. Teo lo piensa un poco y grita: «¡Es una naranja!». ¡Lo ha adivinado!' },
  contextos: [
    'En el cumpleaños jugamos a adivinar qué había en la caja.',
    'La maestra nos lee adivinanzas y las adivinamos entre todos.',
    'Mira esas nubes tan negras: ¿adivinas qué va a pasar?'
  ],
  gesto: 'Ponte dos dedos en la sien y cierra los ojos, como un mago que piensa.',
  sentido: [
    { t: 'Adiviné qué animal era porque decías «guau».', ok: true, por: 'Acertó gracias a una pista.' },
    { t: 'Adiviné la respuesta porque la tenía escrita en la hoja.', ok: false, por: 'Si ya lo sabes, no lo adivinas.' },
    { t: 'Mi tío adivinó mi edad sin que se la dijera.', ok: true, por: 'La acertó sin saberla.' },
    { t: 'Adiviné cuántos lápices había contándolos uno a uno.', ok: false, por: 'Contando lo sabes seguro: eso no es adivinar.' }
  ],
  ejemplos: [
    { t: 'Acertar qué hay en un regalo antes de abrirlo', ok: true },
    { t: 'Resolver una adivinanza', ok: true },
    { t: 'Acertar quién te ha tapado los ojos', ok: true },
    { t: 'Leer la respuesta en el libro', ok: false },
    { t: 'Contar los caramelos uno a uno', ok: false },
    { t: 'Preguntar la hora y que te la digan', ok: false }
  ],
  acaba: ['Adiviné que mi regalo era… porque…', 'Si me tapan los ojos, sé quién es porque…'],
  habla: 'Piensa en un animal y da una pista. ¿Lo adivina tu compañero?',
  rel: { parecida: ['acertar'], contraria: [], familia: ['adivinanza'], mas: ['suponer'] }
});

PALABRA({
  id: 'decidir', palabra: 'decidir', silabas: ['de', 'ci', 'dir'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 16, orden: 2, bloque: 'pensar',
  def: 'Decidir es pensar qué vas a hacer y dejar de dudar.',
  otro: null,
  escena: { img: 'decidir.webp', texto: 'Iker no sabe si ir a la piscina o a casa de su primo. Lo piensa un rato sentado en el sofá. Al final se levanta y dice: «¡Me voy a la piscina!». Iker ya ha decidido.' },
  contextos: [
    'En la asamblea decidimos entre todos a qué jugar en el recreo.',
    'Mi madre ha decidido pintar la cocina de amarillo.',
    'El árbitro decidió que había sido falta.'
  ],
  gesto: 'Da un golpe suave en la mesa con la mano abierta: ¡ya está!',
  sentido: [
    { t: 'Después de pensarlo mucho, decidí apuntarme a baloncesto.', ok: true, por: 'Dejó de dudar y supo qué hacer.' },
    { t: 'He decidido qué hacer, pero no sé qué voy a hacer.', ok: false, por: 'Si ya lo has decidido, sabes qué vas a hacer.' },
    { t: 'La clase decidió con una votación el nombre del hámster.', ok: true, por: 'Pensaron y se quedaron con un nombre.' },
    { t: 'Decidí que mañana va a llover.', ok: false, por: 'Decides lo que haces tú, no el tiempo que hará.' }
  ],
  ejemplos: [
    { t: 'Pensar qué cuento leer y quedarte con uno', ok: true },
    { t: 'Votar en clase a qué jugamos', ok: true },
    { t: 'Pensar si ir al parque o a la piscina, y escoger', ok: true },
    { t: 'Seguir dudando entre dos helados', ok: false },
    { t: 'Estornudar', ok: false },
    { t: 'Tener hipo', ok: false }
  ],
  acaba: ['Hoy he decidido… porque…', 'Cuando no sé qué hacer, para decidir yo…'],
  habla: '¿Qué has decidido tú hoy? ¿Y qué han decidido otros por ti?',
  rel: { parecida: ['elegir'], contraria: ['dudar'], familia: ['decisión'] }
});

PALABRA({
  id: 'agradable', palabra: 'agradable', silabas: ['a', 'gra', 'da', 'ble'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 16, orden: 3, bloque: 'como-son', sep: 'agradable-desagradable',
  def: 'Algo es agradable cuando te gusta y te hace sentir bien.',
  otro: null,
  escena: { img: 'agradable.webp', texto: 'Nora vuelve del parque con las manos heladas. Su abuelo le prepara un baño calentito con espuma. Nora se mete despacio y cierra los ojos. ¡Qué agradable!' },
  contextos: [
    'Hoy hace un día muy agradable para ir al campo.',
    'En la biblioteca del cole hay un rincón agradable con cojines.',
    'Me gusta el olor agradable del pan recién hecho.'
  ],
  gesto: 'Cierra los ojos y levanta la cara, como si te diera un sol calentito.',
  sentido: [
    { t: 'Una brisa fresca en verano es muy agradable.', ok: true, por: 'Sienta bien y gusta.' },
    { t: 'El pinchazo de la vacuna fue muy agradable.', ok: false, por: 'Un pinchazo duele: no gusta.' },
    { t: 'La música suave de la clase es agradable.', ok: true, por: 'Gusta escucharla.' },
    { t: 'Me pillé el dedo con la puerta y me pareció muy agradable.', ok: false, por: 'Pillarse el dedo hace daño.' }
  ],
  ejemplos: [
    { t: 'Una manta suave en invierno', ok: true },
    { t: 'El olor de las galletas en el horno', ok: true },
    { t: 'Un abrazo de un amigo', ok: true },
    { t: 'Un olor a basura', ok: false },
    { t: 'Una piedrecita dentro del zapato', ok: false },
    { t: 'Una puerta que chirría', ok: false }
  ],
  acaba: ['Para mí, lo más agradable del día es…', 'Un olor agradable es… porque…'],
  habla: 'Di algo agradable de tu casa. Tu compañero dice algo agradable del cole.',
  rel: { parecida: ['que da gusto'], contraria: [], familia: ['agradar'], mas: ['desagradable'] }
});

PALABRA({
  id: 'desagradable', palabra: 'desagradable', silabas: ['de', 'sa', 'gra', 'da', 'ble'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 16, orden: 4, bloque: 'como-son', sep: 'agradable-desagradable',
  def: 'Algo es desagradable cuando no te gusta nada y te hace sentir mal.',
  otro: null,
  escena: { img: 'desagradable.webp', texto: 'Pablo abre la fiambrera que olvidó el viernes en la mochila. El bocadillo está verde y huele fatal. Pablo cierra la tapa a toda prisa. ¡Qué olor tan desagradable!' },
  contextos: [
    'El olor del cubo de basura es desagradable.',
    'Cuando alguien grita en clase, es desagradable para todos.',
    'Ese jarabe tiene un sabor muy desagradable.'
  ],
  gesto: 'Arruga la nariz y aparta la cara hacia un lado.',
  sentido: [
    { t: 'Pisar un charco con calcetines es desagradable.', ok: true, por: 'Mojarse los pies sin querer no gusta.' },
    { t: 'Mi tarta favorita es tan desagradable que siempre repito.', ok: false, por: 'Si repites, te gusta: es agradable.' },
    { t: 'El ruido de la tiza al chirriar en la pizarra es desagradable.', ok: true, por: 'Molesta a casi todos.' },
    { t: 'Qué día tan desagradable: sol, calorcito y una brisa suave.', ok: false, por: 'Eso es un día agradable.' }
  ],
  ejemplos: [
    { t: 'Pisar un chicle', ok: true },
    { t: 'Un olor a huevo podrido', ok: true },
    { t: 'Tener arena dentro del zapato', ok: true },
    { t: 'Oler unas flores', ok: false },
    { t: 'Un chocolate caliente en invierno', ok: false },
    { t: 'Tumbarte en la hierba al sol', ok: false }
  ],
  acaba: ['Me parece desagradable cuando…', 'Un sabor desagradable para mí es…'],
  habla: 'Cuenta a tu compañero algo desagradable que te pasó. ¿Qué hiciste?',
  rel: { parecida: ['molesto'], contraria: [], familia: [], mas: ['agradable'] }
});

PALABRA({
  id: 'furioso', palabra: 'furioso', silabas: ['fu', 'rio', 'so'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 16, orden: 5, bloque: 'sentir',
  def: 'Estás furioso cuando estás muy, muy enfadado y te cuesta calmarte.',
  otro: null,
  escena: { img: 'furioso.webp', texto: 'Álex construye una torre altísima con bloques. Su primo pasa corriendo y la tira entera. Álex aprieta los puños, se pone rojo y grita. Álex está furioso.' },
  contextos: [
    'El perro se puso furioso cuando intentaron quitarle el hueso.',
    'En el cuento, el gigante se pone furioso y da un golpe en la mesa.',
    'Mi vecino estaba furioso porque alguien había roto su ventana.'
  ],
  gesto: 'Frunce el ceño y resopla fuerte por la nariz, como un toro.',
  sentido: [
    { t: 'Se puso furioso y dio un portazo.', ok: true, por: 'Estaba muy enfadado.' },
    { t: 'Estaba furioso y no paraba de reír, feliz.', ok: false, por: 'Quien está furioso no está feliz.' },
    { t: 'Cuando estoy furioso, respiro hondo para calmarme.', ok: true, por: 'Es un enfado muy fuerte que cuesta calmar.' },
    { t: 'Estaba un poquito furioso, casi nada.', ok: false, por: 'Furioso es muy enfadado, no un poquito.' }
  ],
  ejemplos: [
    { t: 'Gritar y dar un portazo de rabia', ok: true },
    { t: 'Ponerse rojo de enfado', ok: true },
    { t: 'Patalear muy enfadado', ok: true },
    { t: 'Estar un poco molesto', ok: false },
    { t: 'Estar tranquilo leyendo', ok: false },
    { t: 'Llorar de pena', ok: false }
  ],
  acaba: ['Me pongo furioso cuando…', 'Cuando estoy furioso, para calmarme yo…'],
  habla: '¿Qué te ayuda a calmarte cuando estás furioso? Cuéntaselo a tu compañero.',
  rel: { parecida: ['muy enfadado'], contraria: [], familia: ['furia'], mas: ['tranquilo', 'rabioso'] }
});

PALABRA({
  id: 'norma', palabra: 'norma', silabas: ['nor', 'ma'],
  tipo: 'nombre', nivel: 2, curso: 1, semana: 16, orden: 6, bloque: 'convivir',
  def: 'Una norma es lo que todos debemos cumplir en un sitio para estar bien juntos.',
  otro: null,
  escena: { img: 'norma.webp', texto: 'En la clase de Sara, todos hablan a la vez y nadie se entiende. La maestra propone que quien quiera hablar levante la mano. Todos están de acuerdo y lo escriben en un cartel. Es una norma de la clase.' },
  contextos: [
    'En la piscina hay una norma: ducharse antes de entrar.',
    'En casa tenemos una norma: la tableta, después de los deberes.',
    'Cruzar por el paso de cebra es una norma para ir seguros.'
  ],
  gesto: 'Pon la mano abierta delante, como un guardia que dice «¡alto!».',
  sentido: [
    { t: 'En la biblioteca hay una norma: hablar bajito.', ok: true, por: 'Todos deben cumplirla allí.' },
    { t: 'Mi norma favorita es el helado de fresa.', ok: false, por: 'Un helado es un gusto, no algo que haya que cumplir.' },
    { t: 'Una norma del recreo es no tirar piedras.', ok: true, por: 'Es para que nadie se haga daño.' },
    { t: 'La norma dice que cada uno hace lo que quiere.', ok: false, por: 'Una norma la cumplen todos igual.' }
  ],
  ejemplos: [
    { t: 'Levantar la mano para hablar en clase', ok: true },
    { t: 'Ponerse el cinturón en el coche', ok: true },
    { t: 'Recoger los juguetes al acabar', ok: true },
    { t: 'Que te guste el color azul', ok: false },
    { t: 'Soñar con dragones', ok: false },
    { t: 'Jugar a lo que más te gusta', ok: false }
  ],
  pregunta: '¿Es una norma?',
  acaba: ['Una norma de mi clase es… y sirve para…', 'Si nadie cumpliera la norma de…, pasaría que…'],
  habla: 'Inventa con tu compañero una norma nueva para el recreo. ¿Para qué sirve?',
  rel: { parecida: ['regla'], contraria: [], familia: [], mas: ['ley'] }
});
```

## Notas para quien programe

- **Contrarias de la misma familia:** `agradable` y `desagradable` llevan `sep: 'agradable-desagradable'`
  (días distintos). Como son de la misma familia (des- + agradable), la norma del apartado 7 no deja
  preguntarlas en `relaciona`: cada una está en `rel.mas` de la otra. Preguntan «que da gusto» y «molesto».
  En 2.º, `des-` es una de las piezas (semana 7): esta pareja le servirá de ejemplo.
- `furioso`: la lista pedía `tranquilo` como contraria, pero «lo contrario de tranquilo» ya es la pregunta
  de `nervioso` (semana 8) y no significan lo mismo (regla «una pregunta, una respuesta»). Va en `rel.mas`.
  La escena y los ejemplos dejan claro que furioso es **muy** enfadado (no-ejemplo: «un poco molesto»), y un
  contexto enlaza con `respirar` (semana 15) para calmarse. Ningún ejemplo culpa a un niño: el enfado se
  nombra, no se juzga.
- `decidir` y `elegir` (semana 2): `elegir` es su pregunta de «Se parece a…». Se distinguen en la
  definición: decidir es dejar de dudar sobre qué hacer. Los no-ejemplos «estornudar» y «tener hipo» son
  cosas que pasan sin decidirlas.
- `adivinar` enlaza con `pista` (semana 8) y con las adivinanzas de clase. El no-ejemplo «contar uno a uno»
  la separa de saber seguro.
- **Nombre** `norma`: lleva `pregunta` con artículo («¿Es una norma?»). Su gesto (mano de «¡alto!») no
  repite la mano levantada de pedir turno, que se parecería a `primero` (índice arriba) y a `turno`.
- **Gestos cercanos a vigilar:** `desagradable` (arrugar la nariz) y `ruidoso` (tapar los oídos y arrugar la
  cara, semana 13); `agradable` (cara al sol) y `descansar` (cabeza en la almohada, semana 15).
- Orden recomendado dentro de la semana: adivinar, decidir, agradable, desagradable, furioso, norma.
