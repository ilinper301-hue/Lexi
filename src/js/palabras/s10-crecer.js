PALABRA({
  id: 'crecer', palabra: 'crecer', silabas: ['cre', 'cer'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 10, orden: 4, bloque: 'medio',
  def: 'Crecer es hacerse más grande o más alto poco a poco, con el tiempo.',
  otro: null,
  escena: { img: 'crecer.webp', texto: 'Claudia se pone el abrigo del año pasado. Las mangas le llegan por el codo y no puede abrocharlo. Su padre se ríe: «¡Te queda pequeño!». Claudia ha crecido.' },
  contextos: [
    'Regamos la semilla y la planta crece un poco cada día.',
    'El cachorro crece muy deprisa: ya no cabe en su cesta.',
    'Cuando crezca, quiero ser enfermero.'
  ],
  gesto: 'Pon la mano plana a la altura de la mesa y súbela despacio hasta por encima de la cabeza.',
  sentido: [
    { t: 'He crecido: el pantalón me queda corto.', ok: true, por: 'Ahora es más alto que antes.' },
    { t: 'La piedra del jardín ha crecido mucho este verano.', ok: false, por: 'Las piedras no son seres vivos: no crecen.' },
    { t: 'Al girasol le dio el sol y creció hasta la ventana.', ok: true, por: 'Se hizo más alto poco a poco.' },
    { t: 'He crecido tanto que ahora soy más bajito.', ok: false, por: 'Crecer es hacerse más alto, no más bajo.' }
  ],
  ejemplos: [
    { t: 'Una planta que cada día está más alta', ok: true },
    { t: 'Un cachorro que se hace perro grande', ok: true },
    { t: 'Un bebé que se hace niño', ok: true },
    { t: 'Un globo que se desinfla', ok: false },
    { t: 'Una vela que se gasta', ok: false },
    { t: 'Un lápiz al que sacas punta', ok: false }
  ],
  acaba: ['Sé que he crecido porque…', 'Para crecer, una planta necesita…'],
  habla: '¿En qué notas que has crecido desde el curso pasado?',
  rel: { parecida: ['hacerse mayor'], contraria: ['encoger'], familia: ['crecimiento', 'crecido'], mas: ['aumentar'] }
});
