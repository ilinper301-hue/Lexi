PALABRA({
  id: 'antiguo', palabra: 'antiguo', silabas: ['an', 'ti', 'guo'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 5, orden: 4, bloque: 'como-son',
  def: 'Algo es antiguo cuando existe desde hace muchísimos años.',
  otro: null,
  escena: { img: 'antiguo.webp', texto: 'Teo visita un castillo con su clase. Las piedras están gastadas y las puertas son de madera oscura. «Lo hicieron hace mil años», dice la guía. El castillo es antiguo.' },
  contextos: [
    'En el museo hay monedas antiguas.',
    'Mi bisabuela guarda fotos antiguas en blanco y negro.',
    'En la plaza hay una fuente antigua de piedra.'
  ],
  gesto: 'Acaríciate una barba larga imaginaria, muy despacio.',
  sentido: [
    { t: 'Ese reloj es antiguo: era del abuelo de mi abuelo.', ok: true, por: 'Existe desde hace muchísimos años.' },
    { t: 'Estrené unas zapatillas antiguas, recién salidas de la fábrica.', ok: false, por: 'Lo recién hecho es nuevo.' },
    { t: 'En el pueblo hay un puente antiguo por donde pasaban los carros.', ok: true, por: 'Es de hace mucho tiempo.' },
    { t: 'Este juguete es antiguo: lo inventaron ayer.', ok: false, por: 'Lo de ayer es de ahora.' }
  ],
  ejemplos: [
    { t: 'Un castillo', ok: true },
    { t: 'Una pirámide', ok: true },
    { t: 'Una moneda de hace mil años', ok: true },
    { t: 'Una tableta', ok: false },
    { t: 'Un coche recién comprado', ok: false },
    { t: 'Un juguete roto del año pasado', ok: false }
  ],
  acaba: ['En casa de mis abuelos hay algo antiguo: …', 'Sé que un castillo es antiguo porque…'],
  habla: '¿Qué cosa antigua has visto? ¿Dónde estaba?',
  rel: { parecida: ['de hace mucho tiempo'], contraria: ['moderno', 'nuevo'], familia: ['antigüedad'] }
});
