PALABRA({
  id: 'tranquilo', palabra: 'tranquilo', silabas: ['tran', 'qui', 'lo'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 7, orden: 6, bloque: 'sentir',
  def: 'Estás tranquilo cuando estás en calma, sin prisa, sin miedo y sin enfado.',
  otro: 'También es tranquilo un sitio sin ruido ni jaleo: una calle tranquila.',
  escena: { img: 'tranquilo.webp', texto: 'Amir está tumbado en la hierba del parque. Respira despacio y mira pasar las nubes. No tiene prisa ni le preocupa nada. Amir está tranquilo.' },
  contextos: [
    'Después de respirar hondo me quedé tranquila.',
    'El mar hoy está tranquilo: no hay olas.',
    'En la biblioteca todos leemos tranquilos.'
  ],
  gesto: 'Baja las dos manos despacio, con las palmas hacia el suelo, mientras sueltas el aire.',
  sentido: [
    { t: 'Mi madre me abrazó y me quedé tranquilo.', ok: true, por: 'El abrazo le dio calma.' },
    { t: 'Estaba tan tranquilo que gritaba y daba patadas.', ok: false, por: 'Gritar y dar patadas no es estar en calma.' },
    { t: 'El gato duerme tranquilo en el sofá.', ok: true, por: 'Está en calma, sin miedo.' },
    { t: 'Estoy tranquila: el corazón me va a mil y no paro de moverme.', ok: false, por: 'Así se está cuando uno está nervioso.' }
  ],
  ejemplos: [
    { t: 'Leer un cuento en el sofá', ok: true },
    { t: 'Respirar despacio tumbado', ok: true },
    { t: 'Un lago sin olas', ok: true },
    { t: 'Una rabieta', ok: false },
    { t: 'Correr porque llegas tarde', ok: false },
    { t: 'Una tormenta con truenos', ok: false }
  ],
  acaba: ['Me siento tranquilo cuando…', 'Si estoy enfadado, para quedarme tranquilo…'],
  habla: '¿Qué haces tú para tranquilizarte cuando estás enfadado o con miedo?',
  rel: { parecida: ['calmado'], contraria: ['nervioso', 'inquieto'], familia: ['tranquilidad', 'tranquilizar'], mas: ['sereno'] }
});
