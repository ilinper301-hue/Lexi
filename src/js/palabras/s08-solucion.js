PALABRA({
  id: 'solucion', palabra: 'solución', silabas: ['so', 'lu', 'ción'],
  tipo: 'nombre', nivel: 2, curso: 1, semana: 8, orden: 2, bloque: 'pensar', sep: 'problema-solucion',
  def: 'La solución es lo que arregla un problema o la respuesta a una pregunta.',
  otro: null,
  escena: { img: 'solucion.webp', texto: 'El balón de Rocío sigue en el árbol. Rocío piensa y piensa. Va a por una escoba, empuja el balón con el palo y… ¡cae! Rocío ha encontrado la solución.' },
  contextos: [
    'La solución del problema de los globos es 5.',
    'Tenía frío y la solución fue ponerme el abrigo.',
    'Queríamos el mismo columpio y la solución fue hacer turnos.'
  ],
  gesto: 'Levanta un dedo de golpe junto a la cabeza: «¡ya lo tengo!».',
  sentido: [
    { t: 'Se me rompió la hoja y la solución fue pegarla con celo.', ok: true, por: 'El celo arregla el problema.' },
    { t: 'La solución fue no hacer nada, y el problema siguió igual.', ok: false, por: 'Si el problema sigue igual, no es una solución.' },
    { t: 'Pensamos entre todos y encontramos la solución.', ok: true, por: 'Dieron con lo que lo arreglaba.' },
    { t: 'Encontré la solución y por eso no sé la respuesta.', ok: false, por: 'La solución es la respuesta.' }
  ],
  ejemplos: [
    { t: 'Ponerte el chubasquero si llueve', ok: true },
    { t: 'Hacer turnos para usar el columpio', ok: true },
    { t: 'Pegar con celo la hoja rota', ok: true },
    { t: 'Enfadarte y no hacer nada', ok: false },
    { t: 'Esconder lo que se ha roto', ok: false },
    { t: 'Quedarte parado sin hacer nada', ok: false }
  ],
  pregunta: '¿Es una solución?',
  acaba: ['Si se me olvida el bocadillo, una solución es…', 'Para encontrar la solución de un problema de mates, yo…'],
  habla: 'Dos amigos quieren jugar a cosas distintas. Buscad juntos una solución.',
  rel: { parecida: ['arreglo', 'respuesta'], contraria: ['problema'], familia: ['solucionar'] }
});
