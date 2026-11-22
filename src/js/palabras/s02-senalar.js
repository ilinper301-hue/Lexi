PALABRA({
  id: 'senalar', palabra: 'señalar', silabas: ['se', 'ña', 'lar'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 2, orden: 1, bloque: 'pensar',
  def: 'Señalar es mostrar algo con el dedo o con una marca para que los demás lo vean.',
  otro: null,
  escena: { img: 'senalar.webp', texto: 'En el mapa del cole hay muchas clases. La maestra pregunta: «¿Cuál es la nuestra?». Noa se levanta y pone el dedo encima. Noa ha señalado nuestra clase.' },
  contextos: [
    'En la ficha señalamos con una cruz el dibujo correcto.',
    'La flecha de la calle señala por dónde se va al parque.',
    'Mi hermano pequeño señala el plátano porque todavía no sabe decirlo.'
  ],
  gesto: 'Estira el brazo y apunta con el dedo a algo de la clase.',
  sentido: [
    { t: 'Señalé la luna con el dedo para que mi abuelo la viera.', ok: true, por: 'Apuntó con el dedo para enseñársela.' },
    { t: 'Señalé el gato con las manos en los bolsillos y sin moverme.', ok: false, por: 'Para señalar hay que apuntar o hacer una marca.' },
    { t: 'En la ficha señalé con un círculo el animal más grande.', ok: true, por: 'Hizo una marca para que se vea cuál es.' },
    { t: 'Señalé el dibujo correcto dejando la ficha en blanco.', ok: false, por: 'Si no marcas nada, no has señalado nada.' }
  ],
  ejemplos: [
    { t: 'Apuntar con el dedo a un pájaro', ok: true },
    { t: 'Poner una cruz en la respuesta', ok: true },
    { t: 'Una flecha que indica la salida', ok: true },
    { t: 'Mirar un pájaro sin decir nada', ok: false },
    { t: 'Decir el nombre del pájaro', ok: false },
    { t: 'Guardar el lápiz en el estuche', ok: false }
  ],
  acaba: ['Mi amiga no veía el nido, así que yo…', 'En la ficha señalé con una cruz…'],
  habla: 'Señala tres cosas de la clase sin hablar. Tu compañero dice cómo se llaman.',
  rel: { parecida: ['marcar'], contraria: [], familia: ['señal'], mas: ['indicar'] }
});
