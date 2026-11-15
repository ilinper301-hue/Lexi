PALABRA({
  id: 'ordenar', palabra: 'ordenar', silabas: ['or', 'de', 'nar'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 1, bloque: 'pensar',
  def: 'Ordenar es colocar las cosas siguiendo una regla: de pequeño a grande, de primero a último…',
  otro: 'También es poner cada cosa en su sitio, como cuando ordenas tu cuarto.',
  escena: { img: 'ordenar.webp', texto: 'Vera tiene tres ositos. Pone primero el pequeño, después el mediano y al final el grande. Vera ha ordenado los ositos de menor a mayor.' },
  contextos: [
    'En mates ordenamos los números: 1, 2, 3, 4.',
    'Para salir al recreo nos ordenamos en fila.',
    'Ordenamos los dibujos del cuento: qué pasó primero y qué pasó después.'
  ],
  gesto: 'Con la mano, coloca en fila tres cosas imaginarias: una, dos y tres.',
  sentido: [
    { t: 'Ordené los lápices del más corto al más largo.', ok: true, por: 'Siguió una regla: de corto a largo.' },
    { t: 'Ordené los números tirándolos al aire.', ok: false, por: 'Ordenar es colocar con una regla, no al azar.' },
    { t: 'Ordenamos las fotos desde que era bebé hasta ahora.', ok: true, por: 'Siguieron el orden del tiempo.' },
    { t: 'Ordené las cartas mezclándolas todas.', ok: false, por: 'Mezclar es lo contrario de ordenar.' }
  ],
  ejemplos: [
    { t: 'Poner los números del 1 al 5', ok: true },
    { t: 'Hacer la fila del más bajo al más alto', ok: true },
    { t: 'Colocar los días: lunes, martes, miércoles', ok: true },
    { t: 'Mezclar las piezas del puzle', ok: false },
    { t: 'Contar cuántos somos', ok: false },
    { t: 'Rodear el número mayor', ok: false }
  ],
  acaba: ['Para ordenar estos números de menor a mayor, empiezo por…', 'Si ordeno a mi familia del más joven al más mayor, primero va…'],
  habla: '¿Cómo ordenarías tus juguetes: por tamaño, por color…? Cuéntaselo a tu compañero.',
  rel: { parecida: ['colocar'], contraria: ['mezclar'], familia: ['orden', 'ordenado', 'desordenar'], mas: ['desordenar'] }
});
