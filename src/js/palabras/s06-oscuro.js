PALABRA({
  id: 'oscuro', palabra: 'oscuro', silabas: ['os', 'cu', 'ro'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 6, orden: 5, bloque: 'como-son',
  def: 'Un sitio está oscuro cuando hay tan poca luz que casi no se ve.',
  otro: 'También es un color que se acerca al negro: azul oscuro, verde oscuro.',
  escena: { img: 'oscuro.webp', texto: 'Emma baja con su padre al trastero. La bombilla está fundida y no se ve ni la escalera. Su padre enciende la linterna. El trastero está oscuro.' },
  contextos: [
    'En invierno, a las seis de la tarde ya está oscuro.',
    'Los murciélagos viven en cuevas oscuras.',
    'En el cine, la sala se queda oscura cuando empieza la película.'
  ],
  gesto: 'Tápate los ojos con las dos manos.',
  sentido: [
    { t: 'El pasillo estaba oscuro y encendí la luz.', ok: true, por: 'No se veía y por eso encendió.' },
    { t: 'La habitación estaba tan oscura que me puse las gafas de sol.', ok: false, por: 'Las gafas de sol son para cuando hay mucha luz.' },
    { t: 'Dentro del túnel estaba oscuro y el coche encendió los faros.', ok: true, por: 'En el túnel hay poca luz.' },
    { t: 'A mediodía, con todo el sol, el patio estaba oscuro.', ok: false, por: 'Con tanto sol hay mucha luz.' }
  ],
  ejemplos: [
    { t: 'Una cueva', ok: true },
    { t: 'Una noche sin luna', ok: true },
    { t: 'Un armario cerrado por dentro', ok: true },
    { t: 'La playa a mediodía', ok: false },
    { t: 'Una clase con las luces encendidas', ok: false },
    { t: 'Una linterna encendida', ok: false }
  ],
  acaba: ['Cuando mi cuarto está oscuro, yo…', 'Para ver en un sitio oscuro necesito…'],
  habla: '¿Qué sitios oscuros conoces? ¿Qué haces para ver en ellos?',
  rel: { parecida: ['sin luz'], contraria: ['claro', 'brillante'], familia: ['oscuridad', 'oscurecer'], mas: ['luminoso'] }
});
