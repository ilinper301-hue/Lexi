PALABRA({
  id: 'brillante', palabra: 'brillante', silabas: ['bri', 'llan', 'te'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 6, orden: 4, bloque: 'como-son',
  def: 'Algo es brillante cuando echa luz o la refleja, como una estrella o un espejo.',
  otro: 'También decimos que una idea es brillante cuando es muy buena.',
  escena: { img: 'brillante.webp', texto: 'Nico encuentra una moneda en la arena. La frota con la camiseta y le quita el polvo. Ahora le da el sol y parece de oro. La moneda está brillante.' },
  contextos: [
    'Por la noche vemos estrellas brillantes en el cielo.',
    'El suelo recién fregado está brillante.',
    'El pez tiene escamas brillantes.'
  ],
  gesto: 'Abre y cierra los dedos de las dos manos, como luces que parpadean.',
  sentido: [
    { t: 'Limpié mis zapatos y quedaron brillantes.', ok: true, por: 'Ahora reflejan la luz.' },
    { t: 'La cueva era tan brillante que no se veía nada de nada.', ok: false, por: 'Donde no se ve nada, está oscuro.' },
    { t: 'La luna llena estaba brillante y se veía el camino.', ok: true, por: 'Daba mucha luz.' },
    { t: 'El barro seco es muy brillante.', ok: false, por: 'El barro seco está apagado: no refleja la luz.' }
  ],
  ejemplos: [
    { t: 'Una estrella', ok: true },
    { t: 'Un espejo al sol', ok: true },
    { t: 'Una cuchara recién lavada', ok: true },
    { t: 'Un trozo de cartón', ok: false },
    { t: 'Una piedra con barro', ok: false },
    { t: 'Un calcetín de lana', ok: false }
  ],
  acaba: ['Vi algo brillante en el suelo y era…', 'De noche, lo más brillante del cielo es…'],
  habla: '¿Qué cosas brillantes hay en tu casa? Dile tres a tu compañero.',
  rel: { parecida: [], contraria: ['apagado', 'oscuro'], familia: ['brillo', 'brillar'], mas: ['reluciente', 'luminoso'] }
});
