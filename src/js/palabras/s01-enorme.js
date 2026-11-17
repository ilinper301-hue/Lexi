PALABRA({
  id: 'enorme', palabra: 'enorme', silabas: ['e', 'nor', 'me'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 1, orden: 4, bloque: 'como-son',
  def: 'Algo es enorme cuando es muy, muy grande, tan grande que sorprende.',
  otro: null,
  escena: { img: 'enorme.webp', texto: 'Dani va en barco con su abuela. De pronto, una ballena sale del agua. ¡Es más grande que un autobús! La ballena es enorme.' },
  contextos: [
    'El árbol del parque es enorme: no podemos abrazarlo ni entre cuatro.',
    'Mi abuela hizo una tarta enorme y comimos todos.',
    'Algunos dinosaurios eran enormes.'
  ],
  gesto: 'Abre los brazos todo lo que puedas.',
  sentido: [
    { t: 'Necesitamos una caja enorme para guardar la bici.', ok: true, por: 'La bici es grande y necesita una caja muy grande.' },
    { t: 'Guardé una piedra enorme en mi bolsillo.', ok: false, por: 'Algo enorme no cabe en un bolsillo.' },
    { t: 'El elefante es un animal enorme.', ok: true, por: 'Es muy, muy grande.' },
    { t: 'La miga de pan era enorme: casi no se veía.', ok: false, por: 'Si casi no se ve, es diminuta.' }
  ],
  ejemplos: [
    { t: 'Una ballena', ok: true },
    { t: 'Una montaña', ok: true },
    { t: 'Un rascacielos', ok: true },
    { t: 'Una silla', ok: false },
    { t: 'Un garbanzo', ok: false },
    { t: 'Una mariquita', ok: false }
  ],
  acaba: ['Vi algo enorme. Era…', 'Si tuviera una pizza enorme…'],
  habla: '¿Qué cosa enorme has visto alguna vez? Cuéntaselo a tu compañero.',
  rel: { parecida: ['gigante', 'muy grande'], contraria: ['diminuto'], familia: [] }
});
