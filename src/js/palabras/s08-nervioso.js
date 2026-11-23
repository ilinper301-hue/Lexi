PALABRA({
  id: 'nervioso', palabra: 'nervioso', silabas: ['ner', 'vio', 'so'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 8, orden: 6, bloque: 'sentir',
  def: 'Estás nervioso cuando no puedes estar quieto ni tranquilo porque algo te preocupa o te hace mucha ilusión.',
  otro: null,
  escena: { img: 'nervioso.webp', texto: 'Mañana Daniela actúa en el teatro del cole. Le sudan las manos, mueve la pierna y repasa su frase una y otra vez. No consigue dormirse. Daniela está nerviosa.' },
  contextos: [
    'Antes del partido estábamos nerviosos.',
    'El perro se pone nervioso con los truenos.',
    'La noche antes de la excursión estoy tan nervioso que no me duermo.'
  ],
  gesto: 'Sacude las dos manos muy rápido delante de ti.',
  sentido: [
    { t: 'Estaba nerviosa antes de cantar: me temblaban las manos.', ok: true, por: 'Le preocupaba y no podía estar tranquila.' },
    { t: 'Estaba tan nervioso que me quedé dormido en un segundo.', ok: false, por: 'Con nervios cuesta dormirse.' },
    { t: 'Mi hermano está nervioso porque mañana empieza en un cole nuevo.', ok: true, por: 'Lo nuevo le preocupa y le hace ilusión.' },
    { t: 'Estoy nervioso: estoy quieto, en calma y sin pensar en nada.', ok: false, por: 'Eso es estar tranquilo.' }
  ],
  ejemplos: [
    { t: 'Esperar tu turno para salir al escenario', ok: true },
    { t: 'El primer día en un cole nuevo', ok: true },
    { t: 'La noche antes de tu cumpleaños', ok: true },
    { t: 'Estar tumbado mirando las nubes', ok: false },
    { t: 'Oír un cuento en el sofá', ok: false },
    { t: 'Dormir la siesta', ok: false }
  ],
  acaba: ['Me pongo nervioso cuando…', 'Si estoy nervioso, me ayuda…'],
  habla: '¿Cuándo te pones nervioso? ¿Qué haces para calmarte?',
  rel: { parecida: ['inquieto'], contraria: ['tranquilo', 'calmado'], familia: ['nervios', 'nerviosismo'], mas: ['intranquilo'] }
});
