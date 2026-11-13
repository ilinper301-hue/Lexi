# Semana 6 · contenido completo (1.º)

Seis palabras escritas con las normas de `docs/pedagogia.md` y el modelo de `docs/semana-01.md`.
Al programar, cada bloque pasa tal cual a `src/js/palabras/s06-<id>.js`.

```js
PALABRA({
  id: 'imaginar', palabra: 'imaginar', silabas: ['i', 'ma', 'gi', 'nar'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 6, bloque: 'pensar',
  def: 'Imaginar es ver dentro de tu cabeza algo que ahora no tienes delante o que no existe.',
  otro: null,
  escena: { img: 'imaginar.webp', texto: 'Olivia cierra los ojos en el sofá. Ve un dragón verde que vuela sobre su casa y la lleva en la espalda. Abre los ojos: no hay dragón. Olivia lo ha imaginado.' },
  contextos: [
    'Antes de leer el cuento, imaginamos de qué va mirando la portada.',
    'Con una caja de cartón imagino que tengo un cohete.',
    'En el problema imaginamos que tenemos cinco caramelos y nos comemos dos.'
  ],
  gesto: 'Con una mano, dibuja una nube que sale de tu cabeza hacia arriba.',
  sentido: [
    { t: 'Imaginé que era un pez y nadaba entre corales.', ok: true, por: 'Lo vio dentro de su cabeza.' },
    { t: 'Imaginé un bocadillo, me lo comí y se me quitó el hambre.', ok: false, por: 'Lo imaginado no se puede comer.' },
    { t: 'Cuando me leen un cuento, imagino cómo son los personajes.', ok: true, por: 'No los ve, pero los piensa.' },
    { t: 'Imaginé el lápiz que tenía en la mano mientras lo miraba.', ok: false, por: 'Si lo estás viendo, no hace falta imaginarlo.' }
  ],
  ejemplos: [
    { t: 'Pensar cómo sería vivir en la luna', ok: true },
    { t: 'Inventar un animal con alas y trompa', ok: true },
    { t: 'Jugar a que el suelo es lava', ok: true },
    { t: 'Mirar la pizarra', ok: false },
    { t: 'Copiar un dibujo', ok: false },
    { t: 'Contar lo que has desayunado hoy', ok: false }
  ],
  acaba: ['Imagino que puedo volar y entonces…', 'Cuando cierro los ojos, me gusta imaginar…'],
  habla: 'Imagina un animal que no existe. Descríbeselo a tu compañero.',
  rel: { parecida: ['inventar', 'fantasear'], contraria: [], familia: ['imaginación', 'imaginario'] }
});

PALABRA({
  id: 'recordar', palabra: 'recordar', silabas: ['re', 'cor', 'dar'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 6, bloque: 'pensar',
  def: 'Recordar es traer a tu cabeza algo que pasó o que aprendiste antes.',
  otro: 'También es decirle algo a alguien para que no se le olvide: «recuérdame que riegue la planta».',
  escena: { img: 'recordar.webp', texto: 'Darío huele a bizcocho en la calle. De pronto le vienen a la cabeza el pueblo, la cocina de su abuela y las tardes de agosto. Sonríe. Darío está recordando el verano.' },
  contextos: [
    'Antes de empezar, recordamos lo que aprendimos ayer.',
    'Mi abuelo recuerda cuando era niño y jugaba en la calle.',
    'Miro las fotos y recuerdo la excursión a la granja.'
  ],
  gesto: 'Con el pulgar, señala hacia atrás por encima del hombro.',
  sentido: [
    { t: 'Recuerdo mi cumpleaños: hubo tarta de chocolate.', ok: true, por: 'Le viene a la cabeza algo que pasó.' },
    { t: 'Recuerdo perfectamente lo que va a pasar mañana.', ok: false, por: 'Solo se recuerda lo que ya ha pasado.' },
    { t: 'No recordaba dónde dejé el abrigo, pero al final me vino a la cabeza.', ok: true, por: 'Tardó, pero lo trajo a su cabeza.' },
    { t: 'Recordé toda la canción: no me venía ni una palabra.', ok: false, por: 'Si no te viene nada, la has olvidado.' }
  ],
  ejemplos: [
    { t: 'Contar qué hiciste el verano pasado', ok: true },
    { t: 'Decir el nombre de tu maestra del año pasado', ok: true },
    { t: 'Saber dónde guardaste el balón', ok: true },
    { t: 'Inventar un animal que no existe', ok: false },
    { t: 'Adivinar qué habrá de comer mañana', ok: false },
    { t: 'Dejarte el estuche en casa sin darte cuenta', ok: false }
  ],
  acaba: ['Del curso pasado recuerdo…', 'Para recordar algo importante, yo…'],
  habla: '¿Cuál es el recuerdo más bonito que tienes? Cuéntaselo a tu compañero.',
  rel: { parecida: ['acordarse'], contraria: ['olvidar'], familia: ['recuerdo'] }
});

PALABRA({
  id: 'preguntar', palabra: 'preguntar', silabas: ['pre', 'gun', 'tar'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 6, bloque: 'pensar',
  def: 'Preguntar es decirle algo a alguien para que te conteste lo que quieres saber.',
  otro: null,
  escena: { img: 'preguntar.webp', texto: 'Chloe no encuentra el baño en el museo. Se acerca a una vigilante y dice: «Por favor, ¿dónde está el baño?». La vigilante se lo indica. Chloe ha sabido preguntar.' },
  contextos: [
    'Si no entiendo algo, le pregunto a la maestra.',
    'El médico pregunta: «¿Dónde te duele?».',
    'En la calle, mi padre pregunta por dónde se va a la estación.'
  ],
  gesto: 'Dibuja en el aire, con el dedo, un signo de interrogación.',
  sentido: [
    { t: 'No sabía la hora y le pregunté a mi madre.', ok: true, por: 'Quería saber algo y lo pidió.' },
    { t: 'Pregunté diciendo: «Me llamo Raúl y tengo seis años».', ok: false, por: 'Eso es contar algo, no preguntar.' },
    { t: 'Pregunté «¿cómo te llamas?» porque quería saber su nombre.', ok: true, por: 'Espera que le contesten.' },
    { t: 'Le pregunté cuántos años tenía diciéndole «¡qué abrigo más bonito!».', ok: false, por: 'Eso no pide ninguna respuesta.' }
  ],
  ejemplos: [
    { t: '«¿Cuántos años tienes?»', ok: true },
    { t: '«¿Puedo ir al baño?»', ok: true },
    { t: '«¿Por qué el cielo es azul?»', ok: true },
    { t: '«Tengo un perro.»', ok: false },
    { t: '«¡Qué frío hace!»', ok: false },
    { t: '«Cierra la puerta.»', ok: false }
  ],
  acaba: ['Si no entiendo una palabra, pregunto…', 'A un astronauta le preguntaría…'],
  habla: 'Pregunta a tu compañero dos cosas que no sepas de él.',
  rel: { parecida: [], contraria: ['responder', 'contestar'], familia: ['pregunta', 'preguntón'] }
});

PALABRA({
  id: 'brillante', palabra: 'brillante', silabas: ['bri', 'llan', 'te'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 6, bloque: 'como-son',
  def: 'Algo es brillante cuando echa luz o la refleja, como una estrella o un espejo.',
  otro: 'También decimos que una idea es brillante cuando es muy buena.',
  escena: { img: 'brillante.webp', texto: 'Nico encuentra una moneda en la arena. La frota con la camiseta y le quita el polvo. Ahora le da el sol y parece de oro. La moneda está brillante.' },
  contextos: [
    'Por la noche vemos estrellas brillantes en el cielo.',
    'El suelo recién fregado está brillante.',
    'El pez tiene escamas brillantes.'
  ],
  gesto: 'Abre y cierra los dedos de las dos manos, como luces que parpadean.',
  sentido: [
    { t: 'Limpié mis zapatos y quedaron brillantes.', ok: true, por: 'Ahora reflejan la luz.' },
    { t: 'La cueva era tan brillante que no se veía nada de nada.', ok: false, por: 'Donde no se ve nada, está oscuro.' },
    { t: 'La luna llena estaba brillante y se veía el camino.', ok: true, por: 'Daba mucha luz.' },
    { t: 'El barro seco es muy brillante.', ok: false, por: 'El barro seco está apagado: no refleja la luz.' }
  ],
  ejemplos: [
    { t: 'Una estrella', ok: true },
    { t: 'Un espejo al sol', ok: true },
    { t: 'Una cuchara recién lavada', ok: true },
    { t: 'Un trozo de cartón', ok: false },
    { t: 'Una piedra con barro', ok: false },
    { t: 'Un calcetín de lana', ok: false }
  ],
  acaba: ['Vi algo brillante en el suelo y era…', 'De noche, lo más brillante del cielo es…'],
  habla: '¿Qué cosas brillantes hay en tu casa? Dile tres a tu compañero.',
  rel: { parecida: ['reluciente', 'luminoso'], contraria: ['apagado', 'oscuro'], familia: ['brillo', 'brillar'] }
});

PALABRA({
  id: 'oscuro', palabra: 'oscuro', silabas: ['os', 'cu', 'ro'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 6, bloque: 'como-son',
  def: 'Un sitio está oscuro cuando hay tan poca luz que casi no se ve.',
  otro: 'También es un color que se acerca al negro: azul oscuro, verde oscuro.',
  escena: { img: 'oscuro.webp', texto: 'Emma baja con su padre al trastero. La bombilla está fundida y no se ve ni la escalera. Su padre enciende la linterna. El trastero está oscuro.' },
  contextos: [
    'En invierno, a las seis de la tarde ya está oscuro.',
    'Los murciélagos viven en cuevas oscuras.',
    'En el cine, la sala se queda oscura cuando empieza la película.'
  ],
  gesto: 'Tápate los ojos con las dos manos.',
  sentido: [
    { t: 'El pasillo estaba oscuro y encendí la luz.', ok: true, por: 'No se veía y por eso encendió.' },
    { t: 'La habitación estaba tan oscura que me puse las gafas de sol.', ok: false, por: 'Las gafas de sol son para cuando hay mucha luz.' },
    { t: 'Dentro del túnel estaba oscuro y el coche encendió los faros.', ok: true, por: 'En el túnel hay poca luz.' },
    { t: 'A mediodía, con todo el sol, el patio estaba oscuro.', ok: false, por: 'Con tanto sol hay mucha luz.' }
  ],
  ejemplos: [
    { t: 'Una cueva', ok: true },
    { t: 'Una noche sin luna', ok: true },
    { t: 'Un armario cerrado por dentro', ok: true },
    { t: 'La playa a mediodía', ok: false },
    { t: 'Una clase con las luces encendidas', ok: false },
    { t: 'Un escaparate iluminado', ok: false }
  ],
  acaba: ['Cuando mi cuarto está oscuro, yo…', 'Para ver en un sitio oscuro necesito…'],
  habla: '¿Qué sitios oscuros conoces? ¿Qué haces para ver en ellos?',
  rel: { parecida: ['sin luz'], contraria: ['claro', 'luminoso', 'brillante'], familia: ['oscuridad', 'oscurecer'] }
});

PALABRA({
  id: 'orgulloso', palabra: 'orgulloso', silabas: ['or', 'gu', 'llo', 'so'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 6, bloque: 'sentir',
  def: 'Estás orgulloso cuando te sientes muy contento por algo que has hecho bien y te ha costado.',
  otro: 'También puedes estar orgulloso de otra persona: «estoy orgullosa de ti».',
  escena: { img: 'orgulloso.webp', texto: 'Saúl lleva una semana intentando atarse los cordones. Hoy hace el lazo él solo, a la primera. Corre a enseñárselo a su madre con una sonrisa de oreja a oreja. Saúl está orgulloso.' },
  contextos: [
    'Estoy orgullosa de mi dibujo: lo he colgado en la pared.',
    'El equipo está orgulloso porque ha jugado muy bien.',
    'Mi abuelo está orgulloso de su huerto.'
  ],
  gesto: 'Saca pecho, con las manos en la cintura, y sonríe.',
  sentido: [
    { t: 'Aprendí a montar en bici y me sentí orgulloso.', ok: true, por: 'Le costó y lo consiguió.' },
    { t: 'Estoy orgulloso de haber roto el vaso sin querer.', ok: false, por: 'Eso no es algo bien hecho.' },
    { t: 'Mi madre está orgullosa de mí porque ayudé a mi hermano.', ok: true, por: 'Hizo algo bueno.' },
    { t: 'Me sentí orgullosa: no lo intenté y me fui.', ok: false, por: 'Te sientes orgulloso cuando te esfuerzas.' }
  ],
  ejemplos: [
    { t: 'Leer tu primera frase tú solo', ok: true },
    { t: 'Acabar un puzle muy difícil', ok: true },
    { t: 'Pedir perdón aunque te cueste', ok: true },
    { t: 'Copiar el trabajo de otro', ok: false },
    { t: 'Reírte de quien todavía no sabe', ok: false },
    { t: 'Dejar la ficha sin hacer', ok: false }
  ],
  acaba: ['Estoy orgulloso de mí cuando…', 'Mi familia se sintió orgullosa cuando yo…'],
  habla: '¿De qué estás orgulloso este curso? Cuéntaselo a tu compañero.',
  rel: { parecida: ['satisfecho', 'contento de sí mismo'], contraria: ['avergonzado'], familia: ['orgullo'] }
});
```

## Notas para quien programe

- `recordar` cambia al conjugarse: «recuerdo», «recuerda». Tiene segundo significado (`otro`).
- `preguntar`: los ejemplos son frases dichas, con sus comillas; conviene que la voz las lea con entonación.
- `brillante`, `oscuro` y `orgulloso` tienen segundo significado (`otro`): se enseña en un día distinto.
- `oscuro`: nada que dé miedo en la imagen; el padre va con la niña y lleva linterna.
- `imaginar` y `recordar` se confunden a esta edad: los no-ejemplos de cada una apuntan a la otra a propósito.
