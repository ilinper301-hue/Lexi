# Semana 19 · contenido completo (1.º)

Seis palabras escritas con las normas de `docs/pedagogia.md` y el modelo de `docs/semana-01.md`.
Al programar, cada bloque pasa tal cual a `src/js/palabras/s19-<id>.js`.

Tres palabras del tiempo de las cosas (antes, durante, continuar), una pareja de contrarias (recto,
torcido) y un sentimiento (aburrido).

```js
PALABRA({
  id: 'antes', palabra: 'antes', silabas: ['an', 'tes'],
  tipo: 'enlace', nivel: 2, curso: 1, semana: 19, orden: 1, bloque: 'pensar', sep: 'antes-durante',
  def: 'Decimos «antes» para contar lo que pasa cuando otra cosa todavía no ha llegado.',
  otro: 'También quiere decir «hace tiempo»: «Antes vivía en otra ciudad».',
  escena: { img: 'antes.webp', texto: 'Hoy hay piscina. Lola quiere tirarse al agua corriendo, pero el monitor la para. «¡Espera, la ducha!», le recuerda. Lola se ducha antes de meterse en el agua.' },
  contextos: [
    'En casa me lavo las manos antes de comer.',
    'Antes de salir al recreo recogemos la mesa.',
    'Antes de la tormenta, el cielo se puso muy oscuro.'
  ],
  gesto: 'Pon las dos manos delante y adelanta una, despacio, mientras la otra se queda quieta.',
  sentido: [
    { t: 'Me pongo los calcetines antes que los zapatos.', ok: true, por: 'Los calcetines van cuando los zapatos todavía no están puestos.' },
    { t: 'Me seco con la toalla antes de ducharme.', ok: false, por: 'Primero te duchas y luego te secas.' },
    { t: 'Antes de cruzar la calle, miro a los dos lados.', ok: true, por: 'Se mira cuando todavía no has cruzado.' },
    { t: 'Abrí el regalo antes de que me lo dieran.', ok: false, por: 'No puedes abrir un regalo que aún no tienes.' }
  ],
  ejemplos: [
    { t: 'Lavarte las manos antes de comer', ok: true },
    { t: 'Ponerte el abrigo antes de salir a la calle', ok: true },
    { t: 'Mirar a los dos lados antes de cruzar', ok: true },
    { t: 'Secarte antes de mojarte', ok: false },
    { t: 'Comerte el plátano antes de pelarlo', ok: false },
    { t: 'Apagar la vela antes de encenderla', ok: false }
  ],
  pregunta: '¿Está bien dicho con «antes»?',
  acaba: ['Antes de venir al cole, yo…', 'Antes de dormir, en mi casa…'],
  habla: '¿Qué haces cada mañana antes de salir de casa? Cuéntaselo a tu compañero.',
  rel: { parecida: [], contraria: ['después'], familia: ['anterior'], mas: ['primero', 'más pronto'] }
});

PALABRA({
  id: 'durante', palabra: 'durante', silabas: ['du', 'ran', 'te'],
  tipo: 'enlace', nivel: 2, curso: 1, semana: 19, orden: 2, bloque: 'pensar', sep: 'antes-durante',
  def: 'Decimos «durante» para contar lo que pasa todo el rato que dura otra cosa.',
  otro: null,
  escena: { img: 'durante.webp', texto: 'Mario y su abuela van al cine. Se apagan las luces y empieza la película. Mario come palomitas sin parar, hasta que se encienden las luces. Mario come palomitas durante toda la película.' },
  contextos: [
    'En casa no vemos la tele durante la cena.',
    'Durante el recreo jugamos al pilla-pilla.',
    'Los osos duermen durante el invierno.'
  ],
  gesto: 'Pon las dos manos de canto, separadas, como las paredes de una caja, y quédate así un ratito.',
  sentido: [
    { t: 'Durante la clase de música cantamos tres canciones.', ok: true, por: 'Las canciones fueron en el rato que duró la clase.' },
    { t: 'Durante el viaje en coche, me quedé en casa todo el rato.', ok: false, por: 'Si te quedas en casa, no vas en el viaje.' },
    { t: 'Llovió durante todo el partido y acabamos empapados.', ok: true, por: 'Llovió todo el rato que duró el partido.' },
    { t: 'Durante el baño, no me mojé ni un poquito.', ok: false, por: 'Mientras te bañas, estás mojado.' }
  ],
  ejemplos: [
    { t: 'Dormir durante la noche', ok: true },
    { t: 'Aplaudir durante la canción', ok: true },
    { t: 'Llevar el casco durante el paseo en bici', ok: true },
    { t: 'Comer helado durante la siesta', ok: false },
    { t: 'Leer un cuento entero durante un estornudo', ok: false },
    { t: 'Estar seco durante el baño', ok: false }
  ],
  pregunta: '¿Está bien dicho con «durante»?',
  acaba: ['Durante el recreo, a mí me gusta…', 'Durante las vacaciones, yo…'],
  habla: '¿Qué haces durante el viaje de tu casa al cole? Cuéntaselo a tu compañero.',
  rel: { parecida: [], contraria: [], familia: ['durar', 'duración'], mas: ['mientras', 'antes'] }
});

PALABRA({
  id: 'continuar', palabra: 'continuar', silabas: ['con', 'ti', 'nuar'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 19, orden: 3, bloque: 'pensar',
  def: 'Continuar es seguir haciendo algo que ya habías empezado.',
  otro: null,
  escena: { img: 'continuar.webp', texto: 'Por la noche, papá le lee a Vera un cuento de dragones. Vera se duerme a la mitad. A la noche siguiente, papá abre el libro por la página doblada. Papá continúa el cuento.' },
  contextos: [
    'Mañana continuamos la ficha que no hemos terminado.',
    'Paramos a beber agua y después continuamos el paseo.',
    'La lluvia continuó toda la tarde en el campo.'
  ],
  gesto: 'Haz rodar las dos manos una sobre la otra, hacia delante, sin parar.',
  sentido: [
    { t: 'Paré a atarme el cordón y luego continué corriendo.', ok: true, por: 'Siguió corriendo después de parar.' },
    { t: 'Continué un puzle que nunca había empezado.', ok: false, por: 'Solo se continúa lo que ya has empezado.' },
    { t: 'El partido se paró por la lluvia y continuó cuando salió el sol.', ok: true, por: 'Siguió por donde se había quedado.' },
    { t: 'Terminé el cuento y luego lo continué por la última página.', ok: false, por: 'Si ya lo has terminado, no queda nada que seguir.' }
  ],
  ejemplos: [
    { t: 'Seguir el dibujo que empezaste ayer', ok: true },
    { t: 'Volver a caminar después de descansar', ok: true },
    { t: 'Seguir leyendo por la página doblada', ok: true },
    { t: 'Empezar un dibujo nuevo', ok: false },
    { t: 'Dejar el puzle a medias para siempre', ok: false },
    { t: 'Leer el mismo cuento otra vez desde el principio', ok: false }
  ],
  acaba: ['Mañana quiero continuar… porque…', 'Si me canso en mitad de una carrera, descanso y…'],
  habla: 'Cuenta a tu compañero algo que dejaste a medias y continuaste otro día.',
  rel: { parecida: ['seguir'], contraria: ['parar'], familia: ['continuación'], mas: ['repetir', 'terminar'] }
});

PALABRA({
  id: 'recto', palabra: 'recto', silabas: ['rec', 'to'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 19, orden: 4, bloque: 'como-son', sep: 'recto-torcido',
  def: 'Algo es recto cuando va derecho, sin curvas ni vueltas.',
  otro: null,
  escena: { img: 'recto.webp', texto: 'Hoy en clase toca hacer rayas con la regla. Inés apoya la regla en el papel y la sujeta fuerte. Pasa el lápiz de punta a punta, sin moverla. ¡Qué raya tan recta!' },
  contextos: [
    'En el campo, los troncos de los pinos son muy rectos.',
    'Siéntate recto en la silla, con la espalda derecha.',
    'La carretera es recta: no tiene ni una curva.'
  ],
  gesto: 'Estira un brazo delante y recórrelo con un dedo de la otra mano, del hombro a la mano.',
  sentido: [
    { t: 'Con la regla, la raya me salió recta.', ok: true, por: 'La regla ayuda a ir derecho.' },
    { t: 'El camino era recto: tenía muchísimas curvas.', ok: false, por: 'Si tiene curvas, no es recto.' },
    { t: 'La flecha voló recta hasta la diana.', ok: true, por: 'Fue derecha, sin hacer curvas.' },
    { t: 'La serpiente avanzaba recta, haciendo eses.', ok: false, por: 'Las eses son curvas.' }
  ],
  ejemplos: [
    { t: 'Una regla', ok: true },
    { t: 'El borde de una mesa', ok: true },
    { t: 'Un lápiz nuevo', ok: true },
    { t: 'Un aro', ok: false },
    { t: 'La concha de un caracol', ok: false },
    { t: 'Un camino lleno de curvas', ok: false }
  ],
  acaba: ['En mi clase hay algo recto: …', 'Para hacer una raya recta, yo…'],
  habla: 'Busca en la clase tres cosas rectas y enséñaselas a tu compañero.',
  rel: { parecida: ['derecho'], contraria: ['torcido', 'curvo'], familia: ['recta', 'rectángulo'] }
});

PALABRA({
  id: 'torcido', palabra: 'torcido', silabas: ['tor', 'ci', 'do'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 19, orden: 5, bloque: 'como-son', sep: 'recto-torcido',
  def: 'Algo está torcido cuando se ha doblado o no está derecho, como debería.',
  otro: null,
  escena: { img: 'torcido.webp', texto: 'Pablo cuelga en la pared el dibujo de su perro. Se aparta para mirarlo y ladea la cabeza. El perro parece que se va a caer de lado. ¡El dibujo está torcido!' },
  contextos: [
    'En casa, el clavo se torció y no entraba en la madera.',
    'En el pasillo del cole, la fila salió torcida y la enderezamos.',
    'El viento ha dejado el árbol torcido.'
  ],
  gesto: 'Pon una mano plana delante e inclínala hacia un lado, despacio.',
  sentido: [
    { t: 'Me puse la gorra torcida, con la visera de lado.', ok: true, por: 'No estaba derecha: estaba de lado.' },
    { t: 'La regla está torcida: es perfecta para hacer rayas derechas.', ok: false, por: 'Con una regla torcida, la raya no sale derecha.' },
    { t: 'Me caí con la bici y el manillar se quedó torcido.', ok: true, por: 'Se dobló con el golpe.' },
    { t: 'Colgué el cuadro bien derecho y ha quedado torcido.', ok: false, por: 'Si está derecho, no está torcido.' }
  ],
  ejemplos: [
    { t: 'Un clavo doblado', ok: true },
    { t: 'Una gorra con la visera de lado', ok: true },
    { t: 'Un cuadro que cuelga de lado', ok: true },
    { t: 'Una regla nueva', ok: false },
    { t: 'Una fila bien derecha', ok: false },
    { t: 'Un cuadro bien colgado', ok: false }
  ],
  acaba: ['Una vez se me quedó algo torcido: …', 'Si veo un cuadro torcido, yo…'],
  habla: 'Cuenta a tu compañero algo que se te torció y cómo lo arreglaste.',
  rel: { parecida: ['doblado'], contraria: ['recto', 'derecho'], familia: ['torcer'], mas: ['ladeado', 'curvo'] }
});

PALABRA({
  id: 'aburrido', palabra: 'aburrido', silabas: ['a', 'bu', 'rri', 'do'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 19, orden: 6, bloque: 'sentir',
  def: 'Estás aburrido cuando no tienes nada que te guste hacer y el tiempo pasa muy despacio.',
  otro: 'También se dice de algo que no tiene gracia: «una película aburrida».',
  escena: { img: 'aburrido.webp', texto: 'Es domingo y llueve sin parar. Alba ya ha mirado por la ventana mil veces. Da vueltas por el salón y suspira. Alba está aburrida.' },
  contextos: [
    'Mi hermano estaba aburrido en la sala de espera del médico.',
    'Cuando estoy aburrido en el recreo, busco a alguien para jugar.',
    'El perro está aburrido y mordisquea una zapatilla.'
  ],
  gesto: 'Apoya la cara en una mano y mira al techo, sin moverte.',
  sentido: [
    { t: 'Me aburrí en la cola del súper porque no había nada que hacer.', ok: true, por: 'No tenía nada que hacer y el rato se hacía largo.' },
    { t: 'Estaba aburrido porque me lo estaba pasando genial.', ok: false, por: 'Si te lo pasas genial, no te aburres.' },
    { t: 'Estaba tan aburrida que no paraba de mirar el reloj.', ok: true, por: 'El tiempo se le hacía muy largo.' },
    { t: 'Estaba aburridísimo jugando a mi juego favorito.', ok: false, por: 'Lo que más te gusta no aburre.' }
  ],
  ejemplos: [
    { t: 'Esperar en una sala sin nada que hacer', ok: true },
    { t: 'Un domingo de lluvia sin saber a qué jugar', ok: true },
    { t: 'Un viaje muy largo mirando por la ventanilla', ok: true },
    { t: 'Jugar a tu juego favorito', ok: false },
    { t: 'Abrir regalos', ok: false },
    { t: 'Estar cansado después de correr', ok: false }
  ],
  acaba: ['Me aburro cuando…', 'Cuando estoy aburrido, se me ocurre…'],
  habla: 'Cuenta a tu compañero qué haces cuando estás aburrido. ¿Te ha dado alguna buena idea?',
  rel: { parecida: [], contraria: ['entretenido'], familia: ['aburrirse', 'aburrimiento'], mas: ['curioso', 'emocionado', 'cansado'] }
});
```

## Notas para quien programe

- **`antes` y `durante`** son de tipo `enlace`, como `primero`, `después` y `finalmente` (semana 5): sus
  ejemplos dicen la situación entera y llevan `pregunta` («¿Está bien dicho con…?»). Llevan
  `sep: 'antes-durante'` (días distintos).
- `antes` y `después` son contrarias. Como `antes` entra en `PAQUETE_1`, `después` pierde su pregunta de
  `relaciona` («lo contrario de antes») hasta que se presente `antes` (mismo caso que `marcar` y
  `señalar`). `primero` va en `rel.mas` de `antes`: no significan lo mismo (primero es el puesto en una
  lista; antes compara dos momentos). Segundo significado: «hace tiempo» (`otro`).
- `durante` no tiene preguntas de `relaciona`: `mientras` es de 2.º (semana 5) y va en `rel.mas`. Le
  quedan `acaba` y `habla`, que son las que mejor le van.
- `continuar` frente a `repetir` (semana 7): continuar es seguir **por donde te quedaste**; repetir es
  hacerlo **otra vez**. El no-ejemplo «Leer el mismo cuento otra vez desde el principio» es justo
  repetir. Su pregunta «Se parece a…» es `seguir` y «Lo contrario de…», `parar`.
- `recto` y `torcido` son contrarias (`sep: 'recto-torcido'`). `derecho` es la pregunta «Se parece a…»
  de `recto` y «Lo contrario de…» de `torcido`: son preguntas distintas y no chocan (como `difícil` con
  `complicado` y `sencillo`). Ojo: «derecho» aquí es «recto», no «la mano derecha».
- `aburrido`: segundo significado, «una película aburrida» (`otro`). La lista lo ponía contrario de
  `curioso`, pero no lo es: va en `rel.mas`, y la pregunta «Lo contrario de…» es `entretenido`. Su
  no-ejemplo cercano es estar cansado (`agotado`, semana 4).
- **Gestos cercanos a vigilar:** `continuar` (manos que ruedan) y `repetir` (dedo que da vueltas,
  semana 7); `antes` (una mano adelanta a la otra) y `después` (una mano junto a la otra, semana 5);
  `aburrido` (cara apoyada en la mano) y `agotado` (hombros caídos, semana 4); `torcido` (mano que se
  inclina) y `curioso` (cabeza ladeada, semana 1).
- Orden recomendado dentro de la semana: antes, durante, continuar, recto, torcido, aburrido.
