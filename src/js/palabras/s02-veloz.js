PALABRA({
  id: 'veloz', palabra: 'veloz', silabas: ['ve', 'loz'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 2, orden: 5, bloque: 'como-son',
  def: 'Alguien o algo es veloz cuando se mueve muy rápido.',
  otro: null,
  escena: { img: 'veloz.webp', texto: 'Julia mira la carrera del parque. Un perro sale corriendo como una flecha. Nadie puede alcanzarlo. El perro es veloz.' },
  contextos: [
    'El tren veloz nos lleva a la playa en poco tiempo.',
    'El halcón es el ave más veloz del cielo.',
    'En el recreo, Carla es muy veloz y nadie la pilla.'
  ],
  gesto: 'Pasa la mano por delante de ti muy rápido, como un rayo: ¡fium!',
  sentido: [
    { t: 'El guepardo es veloz: corre más que cualquier otro animal.', ok: true, por: 'Se mueve muy rápido.' },
    { t: 'El caracol es tan veloz que tarda un día en cruzar el patio.', ok: false, por: 'Si tarda tanto, es lento.' },
    { t: 'Fui tan veloz que llegué la primera a la meta.', ok: true, por: 'Quien corre muy rápido llega antes.' },
    { t: 'La tortuga veloz llegó la última porque iba muy despacio.', ok: false, por: 'Ir muy despacio es lo contrario de ser veloz.' }
  ],
  ejemplos: [
    { t: 'Un guepardo corriendo', ok: true },
    { t: 'Un coche de carreras', ok: true },
    { t: 'Un rayo', ok: true },
    { t: 'Un caracol', ok: false },
    { t: 'Una tortuga', ok: false },
    { t: 'Una piedra en el suelo', ok: false }
  ],
  acaba: ['El animal más veloz que conozco es…', 'Tuve que ser muy veloz para…'],
  habla: '¿Cuándo has tenido que ser muy veloz? Cuéntaselo a tu compañero.',
  rel: { parecida: ['rápido'], contraria: ['lento'], familia: ['velocidad'] }
});
