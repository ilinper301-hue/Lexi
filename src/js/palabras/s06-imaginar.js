PALABRA({
  id: 'imaginar', palabra: 'imaginar', silabas: ['i', 'ma', 'gi', 'nar'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 6, orden: 1, bloque: 'pensar',
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
    { t: 'Imaginé el lápiz que tenía delante mirándolo bien.', ok: false, por: 'Si lo estás viendo, no hace falta imaginarlo.' }
  ],
  ejemplos: [
    { t: 'Pensar cómo sería vivir en la luna', ok: true },
    { t: 'Inventar un animal con alas y trompa', ok: true },
    { t: 'Jugar a que el suelo es lava', ok: true },
    { t: 'Mirar la pizarra', ok: false },
    { t: 'Copiar un dibujo', ok: false },
    { t: 'Mirar la foto que tienes delante', ok: false }
  ],
  acaba: ['Imagino que puedo volar y entonces…', 'Cuando cierro los ojos, me gusta imaginar…'],
  habla: 'Imagina un animal que no existe. Descríbeselo a tu compañero.',
  rel: { parecida: [], contraria: [], familia: ['imaginación', 'imaginario'], mas: ['inventar', 'fantasear'] }
});
