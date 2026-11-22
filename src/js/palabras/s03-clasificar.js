PALABRA({
  id: 'clasificar', palabra: 'clasificar', silabas: ['cla', 'si', 'fi', 'car'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 3, orden: 3, bloque: 'pensar',
  def: 'Clasificar es hacer grupos poniendo juntas las cosas que tienen algo igual.',
  otro: null,
  escena: { img: 'clasificar.webp', texto: 'Nora tiene un montón de botones mezclados. Pone los rojos en un bote, los azules en otro y los verdes en otro. Ya no están revueltos. Nora ha clasificado los botones.' },
  contextos: [
    'En casa clasificamos la basura: papel, vidrio y envases.',
    'En clase clasificamos los animales: los que vuelan, los que nadan y los que andan.',
    'En la frutería clasifican la fruta: manzanas con manzanas y peras con peras.'
  ],
  gesto: 'Con una mano, reparte cosas imaginarias: una a la izquierda y otra a la derecha.',
  sentido: [
    { t: 'Clasifiqué mis pinturas por colores.', ok: true, por: 'Hizo grupos: cada color con los suyos.' },
    { t: 'Clasifiqué los juguetes metiéndolos todos revueltos en una caja.', ok: false, por: 'Revolver no es hacer grupos.' },
    { t: 'Clasificamos las hojas: las grandes aquí y las pequeñas allí.', ok: true, por: 'Las juntaron por tamaño.' },
    { t: 'Clasifiqué un solo botón.', ok: false, por: 'Para hacer grupos hacen falta varias cosas.' }
  ],
  ejemplos: [
    { t: 'Separar la ropa blanca de la de color', ok: true },
    { t: 'Poner los coches con los coches y los muñecos con los muñecos', ok: true },
    { t: 'Juntar las figuras que tienen tres lados', ok: true },
    { t: 'Poner los números del 1 al 5 en fila', ok: false },
    { t: 'Mezclar todas las piezas', ok: false },
    { t: 'Contar los botones', ok: false }
  ],
  acaba: ['Puedo clasificar mis juguetes por…', 'Si clasifico los animales por dónde viven, el pez va con…'],
  habla: '¿Cómo clasificarías lo que hay en tu estuche? Cuéntaselo a tu compañero.',
  rel: { parecida: ['agrupar', 'separar por grupos'], contraria: [], familia: ['clasificación', 'clase'], mas: ['mezclar'] }
});
