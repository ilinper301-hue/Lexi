PALABRA({
  id: 'cuidadoso', palabra: 'cuidadoso', silabas: ['cui', 'da', 'do', 'so'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 9, orden: 4, bloque: 'como-son',
  def: 'Alguien es cuidadoso cuando hace las cosas despacio y con atención para que salgan bien.',
  otro: null,
  escena: { img: 'cuidadoso.webp', texto: 'Sofía lleva un vaso lleno de agua hasta la mesa. Va paso a paso, mirando el vaso, sin correr. No se le cae ni una gota. Sofía es cuidadosa.' },
  contextos: [
    'Soy cuidadoso con los libros: paso las hojas despacio.',
    'La veterinaria es cuidadosa cuando cura la pata del perro.',
    'Para recortar por la línea hay que ser cuidadoso.'
  ],
  gesto: 'Haz que dos dedos caminen de puntillas por la mesa, muy despacio.',
  sentido: [
    { t: 'Fui cuidadosa al pegar el cromo y quedó recto.', ok: true, por: 'Lo hizo con atención.' },
    { t: 'Fue tan cuidadoso que lo hizo corriendo y sin mirar.', ok: false, por: 'Ser cuidadoso es ir despacio y con atención.' },
    { t: 'El pintor cuidadoso no se sale de la raya.', ok: true, por: 'Pone atención para que salga bien.' },
    { t: 'Soy muy cuidadoso: siempre lo tiro todo y lo rompo.', ok: false, por: 'Quien lo rompe todo es descuidado.' }
  ],
  ejemplos: [
    { t: 'Llevar un plato con las dos manos', ok: true },
    { t: 'Recortar despacio por la línea', ok: true },
    { t: 'Guardar cada rotulador con su tapa', ok: true },
    { t: 'Tirar la mochila al suelo', ok: false },
    { t: 'Pintar deprisa saliéndote', ok: false },
    { t: 'Correr con unas tijeras en la mano', ok: false }
  ],
  acaba: ['Soy cuidadoso cuando…', 'Con las cosas frágiles hay que ser cuidadoso porque…'],
  habla: '¿Con qué cosas eres muy cuidadoso? ¿Por qué?',
  rel: { parecida: ['atento'], contraria: [], familia: ['cuidado', 'cuidar'], mas: ['descuidado'] }
});
