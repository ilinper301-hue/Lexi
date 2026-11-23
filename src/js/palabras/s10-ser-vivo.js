PALABRA({
  id: 'ser-vivo', palabra: 'ser vivo', silabas: ['ser', 'vi', 'vo'],
  tipo: 'nombre', nivel: 2, curso: 1, semana: 10, orden: 1, bloque: 'medio',
  def: 'Un ser vivo es todo lo que nace, crece, se alimenta y muere: personas, animales y plantas.',
  otro: null,
  escena: { img: 'ser-vivo.webp', texto: 'Luis mira su pecera. El pez come, nada y ha crecido desde el verano. La piedra del fondo, en cambio, sigue igual: ni come ni crece. El pez es un ser vivo.' },
  contextos: [
    'El árbol del patio es un ser vivo: necesita agua y luz.',
    'Tú también eres un ser vivo: naciste, creces y te alimentas.',
    'Las hormigas del jardín son seres vivos, aunque sean diminutas.'
  ],
  gesto: 'Pon una mano en la barriga y respira hondo.',
  sentido: [
    { t: 'El caracol es un ser vivo: come hojas y crece.', ok: true, por: 'Nace, se alimenta y crece.' },
    { t: 'Mi mochila es un ser vivo porque la llevo a todas partes.', ok: false, por: 'La mochila no nace, ni come, ni crece.' },
    { t: 'El girasol es un ser vivo: nace de una semilla.', ok: true, por: 'Las plantas también nacen y crecen.' },
    { t: 'El robot es un ser vivo porque se mueve.', ok: false, por: 'Moverse no basta: no nace, ni crece, ni se alimenta.' }
  ],
  ejemplos: [
    { t: 'Un gato', ok: true },
    { t: 'Un rosal', ok: true },
    { t: 'Una niña', ok: true },
    { t: 'Una piedra', ok: false },
    { t: 'Un coche', ok: false },
    { t: 'Un muñeco', ok: false }
  ],
  pregunta: '¿Es un ser vivo?',
  acaba: ['Sé que un perro es un ser vivo porque…', 'Una piedra no es un ser vivo porque…'],
  habla: 'Di tres seres vivos que hayas visto hoy. Tu compañero dice otros tres.',
  rel: { parecida: [], contraria: [], familia: ['vida', 'vivir'], mas: ['cosa sin vida'] }
});
