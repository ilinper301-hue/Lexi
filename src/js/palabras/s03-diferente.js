PALABRA({
  id: 'diferente', palabra: 'diferente', silabas: ['di', 'fe', 'ren', 'te'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 3, orden: 5, bloque: 'como-son', sep: 'parecido-diferente',
  def: 'Dos cosas son diferentes cuando no son iguales: cambia el color, la forma, el tamaño…',
  otro: null,
  escena: { img: 'diferente.webp', texto: 'Alba se ha vestido medio dormida. Lleva un calcetín de rayas y otro de lunares. Sus amigos se ríen y ella también. Los calcetines de Alba son diferentes.' },
  contextos: [
    'En el juego buscamos las cinco cosas diferentes entre los dos dibujos.',
    'Mi hermana y yo tenemos gustos diferentes: a ella le gusta el fútbol y a mí pintar.',
    'Cada copo de nieve es diferente de los demás.'
  ],
  gesto: 'Cruza los dos dedos índices formando una X.',
  sentido: [
    { t: 'Un perro y un pez son diferentes: uno tiene patas y el otro, aletas.', ok: true, por: 'No son iguales.' },
    { t: 'Estas dos pelotas son diferentes porque son exactamente iguales.', ok: false, por: 'Si son iguales, no son diferentes.' },
    { t: 'Hoy vengo por un camino diferente al de ayer.', ok: true, por: 'No es el mismo camino.' },
    { t: 'Las dos camisetas son diferentes: mismo color, mismo dibujo y misma talla.', ok: false, por: 'Si todo es lo mismo, son iguales.' }
  ],
  ejemplos: [
    { t: 'Un calcetín rojo y otro verde', ok: true },
    { t: 'Un círculo y un cuadrado', ok: true },
    { t: 'El día y la noche', ok: true },
    { t: 'Dos monedas iguales', ok: false },
    { t: 'Dos cromos repetidos', ok: false },
    { t: 'Dos gotas de agua', ok: false }
  ],
  pregunta: '¿Son diferentes?',
  acaba: ['Mi compañero y yo somos diferentes en…', 'Un gato y un pájaro son diferentes porque…'],
  habla: 'Busca con tu compañero una cosa en la que sois parecidos y otra en la que sois diferentes.',
  rel: { parecida: ['distinto'], contraria: ['igual', 'parecido'], familia: ['diferencia', 'diferenciar'] }
});
