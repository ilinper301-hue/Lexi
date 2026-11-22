PALABRA({
  id: 'suave', palabra: 'suave', silabas: ['sua', 've'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 4, orden: 4, bloque: 'como-son', sep: 'suave-aspero',
  def: 'Algo es suave cuando da gusto tocarlo porque es liso o blandito y no raspa.',
  otro: 'También es suave lo que no es fuerte: una voz suave, un viento suave.',
  escena: { img: 'suave.webp', texto: 'Izan acaricia a su conejo. El pelo es blandito y no pincha nada. Izan pone la mejilla encima y cierra los ojos. El pelo del conejo es suave.' },
  contextos: [
    'Mi manta es tan suave que no quiero salir de la cama.',
    'Los pétalos de la rosa son suaves.',
    'La piel del bebé es muy suave.'
  ],
  gesto: 'Acaríciate despacio el dorso de una mano con la otra.',
  sentido: [
    { t: 'Me gusta este jersey porque es suave y no pica.', ok: true, por: 'Da gusto llevarlo: no raspa.' },
    { t: 'La lija es tan suave que me raspó los dedos.', ok: false, por: 'Si raspa, es áspera.' },
    { t: 'El peluche es suave y da gusto abrazarlo.', ok: true, por: 'Es blandito.' },
    { t: 'Me pinché con el cactus porque es muy suave.', ok: false, por: 'Lo que pincha no es suave.' }
  ],
  ejemplos: [
    { t: 'El pelo de un gatito', ok: true },
    { t: 'Una bola de algodón', ok: true },
    { t: 'Una pluma', ok: true },
    { t: 'Una lija', ok: false },
    { t: 'El tronco de un árbol', ok: false },
    { t: 'Un estropajo', ok: false }
  ],
  acaba: ['Lo más suave que he tocado es…', 'Me gusta la ropa suave porque…'],
  habla: '¿Qué cosa suave tienes en casa? ¿Qué notas cuando la tocas?',
  rel: { parecida: ['blandito', 'liso'], contraria: ['áspero'], familia: ['suavidad', 'suavizar'] }
});
