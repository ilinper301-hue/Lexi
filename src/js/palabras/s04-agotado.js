PALABRA({
  id: 'agotado', palabra: 'agotado', silabas: ['a', 'go', 'ta', 'do'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 4, orden: 6, bloque: 'sentir',
  def: 'Estás agotado cuando estás tan cansado que ya no te quedan fuerzas.',
  otro: 'También se dice que algo está agotado cuando se ha acabado: las entradas están agotadas.',
  escena: { img: 'agotado.webp', texto: 'Adrián ha subido la montaña con su familia. Ha andado toda la mañana. Al llegar arriba se tumba en la hierba y no puede ni hablar. Adrián está agotado.' },
  contextos: [
    'Después del partido estábamos agotados.',
    'Mi madre llega agotada del trabajo y se sienta un rato.',
    'El perro corrió tanto por la playa que se quedó agotado.'
  ],
  gesto: 'Deja caer los hombros y los brazos, y suelta el aire: «uuuf».',
  sentido: [
    { t: 'Nadé toda la tarde y acabé agotado.', ok: true, por: 'Se quedó sin fuerzas.' },
    { t: 'Estoy agotada: ¡tengo fuerzas para correr tres horas más!', ok: false, por: 'Quien está agotado no tiene fuerzas.' },
    { t: 'Estaba tan agotado que me dormí en el coche.', ok: true, por: 'El cansancio era muy grande.' },
    { t: 'He dormido toda la noche de un tirón y me levanto agotado.', ok: false, por: 'Después de descansar bien tienes fuerzas.' }
  ],
  ejemplos: [
    { t: 'Volver de una excursión muy larga', ok: true },
    { t: 'Acabar una carrera y no poder más', ok: true },
    { t: 'Subir cien escalones seguidos', ok: true },
    { t: 'Levantarte después de dormir bien', ok: false },
    { t: 'Estar un poco cansado pero con ganas de jugar', ok: false },
    { t: 'Estar sentado oyendo un cuento', ok: false }
  ],
  acaba: ['Me quedé agotado después de…', 'Cuando estoy agotado, lo que necesito es…'],
  habla: '¿Cuándo fue la última vez que acabaste agotado? ¿Qué habías hecho?',
  rel: { parecida: ['muy cansado'], contraria: ['descansado'], familia: ['agotar', 'agotador'], mas: ['rendido'] }
});
