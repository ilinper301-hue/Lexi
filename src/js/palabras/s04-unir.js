PALABRA({
  id: 'unir', palabra: 'unir', silabas: ['u', 'nir'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 4, orden: 2, bloque: 'pensar',
  def: 'Unir es juntar dos cosas para que queden pegadas o conectadas.',
  otro: null,
  escena: { img: 'unir.webp', texto: 'Rayan tiene un tren de madera. Engancha la locomotora con el primer vagón, y luego otro, y otro. Ahora es un tren muy largo. Rayan ha unido los vagones.' },
  contextos: [
    'En la ficha unimos con flechas cada animal con su casa.',
    'El puente une los dos lados del río.',
    'Unimos los puntos del 1 al 10 y sale un dibujo.'
  ],
  gesto: 'Junta las dos palmas y apriétalas.',
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
  rel: { parecida: ['juntar'], contraria: ['separar'], familia: ['unión', 'unido'], mas: ['conectar'] }
});
