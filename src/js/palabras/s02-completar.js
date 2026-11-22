PALABRA({
  id: 'completar', palabra: 'completar', silabas: ['com', 'ple', 'tar'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 2, orden: 2, bloque: 'pensar',
  def: 'Completar es poner lo que falta para que algo quede entero.',
  otro: null,
  escena: { img: 'completar.webp', texto: 'A Iker le falta una pieza del puzle. La busca debajo de la mesa y la encuentra. La pone en su hueco. Iker ha completado el puzle.' },
  contextos: [
    'En lengua completamos la frase con la palabra que falta.',
    'Con este cromo completo mi álbum.',
    'Para completar el equipo falta un jugador.'
  ],
  gesto: 'Haz una C con una mano y cierra el hueco con un dedo de la otra.',
  sentido: [
    { t: 'Completé la serie 1, 2, 3… escribiendo el 4.', ok: true, por: 'Puso el número que faltaba.' },
    { t: 'Completé el puzle quitándole tres piezas.', ok: false, por: 'Completar es poner lo que falta, no quitar.' },
    { t: 'Me faltaba un calcetín; lo encontré y completé el par.', ok: true, por: 'Ya tiene los dos: el par está entero.' },
    { t: 'Al dibujo no le faltaba nada, así que lo completé.', ok: false, por: 'Si no falta nada, no hay nada que completar.' }
  ],
  ejemplos: [
    { t: 'Poner la última pieza del puzle', ok: true },
    { t: 'Escribir la palabra que falta en la frase', ok: true },
    { t: 'Pegar el cromo que le faltaba al álbum', ok: true },
    { t: 'Dejar la ficha a medias', ok: false },
    { t: 'Borrar una palabra', ok: false },
    { t: 'Empezar un dibujo nuevo', ok: false }
  ],
  acaba: ['Para completar mi dibujo me falta…', 'La frase «El perro come…» se completa con…'],
  habla: 'Di una frase y cállate antes de la última palabra. Tu compañero la completa.',
  rel: { parecida: ['terminar', 'rellenar'], contraria: ['dejar a medias'], familia: ['completo', 'incompleto'] }
});
