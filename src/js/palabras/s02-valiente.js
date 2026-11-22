PALABRA({
  id: 'valiente', palabra: 'valiente', silabas: ['va', 'lien', 'te'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 2, orden: 6, bloque: 'sentir',
  def: 'Alguien es valiente cuando hace algo que le da miedo o le cuesta, porque es importante.',
  otro: null,
  escena: { img: 'valiente.webp', texto: 'A Mateo le da miedo el agua. Hoy respira hondo, se agarra al borde de la piscina y mete la cabeza. ¡Lo ha conseguido! Mateo ha sido valiente.' },
  contextos: [
    'La bombera valiente sube por la escalera para ayudar.',
    'Fui valiente en el médico: me pusieron la vacuna y no aparté el brazo.',
    'Hay que ser valiente para decir «lo siento, he sido yo».'
  ],
  gesto: 'Ponte un puño en el pecho y levanta la barbilla.',
  sentido: [
    { t: 'Me daba vergüenza, pero fui valiente y canté delante de todos.', ok: true, por: 'Lo hizo aunque le costaba.' },
    { t: 'Fui muy valiente: me escondí y no lo intenté.', ok: false, por: 'Ser valiente es intentarlo aunque dé miedo.' },
    { t: 'La niña valiente durmió sin luz por primera vez.', ok: true, por: 'Le daba miedo y aun así lo hizo.' },
    { t: 'Fue valiente al comerse su helado favorito.', ok: false, por: 'Eso no da miedo ni cuesta.' }
  ],
  ejemplos: [
    { t: 'Subir al tobogán alto aunque te dé miedo', ok: true },
    { t: 'Decir la verdad aunque te cueste', ok: true },
    { t: 'Pedir ayuda cuando molestan a un amigo', ok: true },
    { t: 'Hacer algo peligroso para presumir', ok: false },
    { t: 'Esconderte para no intentarlo', ok: false },
    { t: 'Comerte un helado', ok: false }
  ],
  acaba: ['Fui valiente cuando…', 'Una persona valiente, aunque tenga miedo, …'],
  habla: 'Cuenta una vez que fuiste valiente. ¿Qué te daba miedo?',
  rel: { parecida: ['atrevido'], contraria: ['miedoso', 'cobarde'], familia: ['valentía', 'valor'] }
});
