PALABRA({
  id: 'respetar', palabra: 'respetar', silabas: ['res', 'pe', 'tar'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 9, orden: 3, bloque: 'convivir',
  def: 'Respetar es tratar bien a las personas, los animales y las cosas, y cumplir las normas.',
  otro: null,
  escena: { img: 'respetar.webp', texto: 'En el columpio hay cola. Rubén tiene muchas ganas, pero no se cuela. Se pone el último y espera a que le toque. Rubén sabe respetar el turno.' },
  contextos: [
    'En clase respetamos el turno de palabra: no hablamos a la vez.',
    'En el campo respetamos los nidos: los miramos sin tocarlos.',
    'Los coches respetan el semáforo y paran en rojo.'
  ],
  gesto: 'Pon una mano abierta en el pecho e inclina un poco la cabeza.',
  sentido: [
    { t: 'Respeto a mi compañera: la escucho cuando habla.', ok: true, por: 'Escuchar es tratar bien.' },
    { t: 'Respeté las plantas del parque arrancándolas.', ok: false, por: 'Arrancarlas es tratarlas mal.' },
    { t: 'Respetamos las normas del juego y nadie hizo trampas.', ok: true, por: 'Cumplieron las normas.' },
    { t: 'Respeté su turno colándome delante.', ok: false, por: 'Colarse es saltarse la norma.' }
  ],
  ejemplos: [
    { t: 'Escuchar sin interrumpir', ok: true },
    { t: 'Esperar tu turno', ok: true },
    { t: 'Cuidar los libros de la biblioteca', ok: true },
    { t: 'Reírte de alguien', ok: false },
    { t: 'Colarte en la fila', ok: false },
    { t: 'Pintar en la mesa de otro', ok: false }
  ],
  acaba: ['Respeto a mis compañeros cuando…', 'Hay que respetar las normas del patio porque…'],
  habla: '¿Qué norma de la clase te parece más importante respetar? ¿Por qué?',
  rel: { parecida: ['tratar bien'], contraria: ['molestar'], familia: ['respeto', 'respetuoso'], mas: ['cumplir', 'faltar al respeto'] }
});
