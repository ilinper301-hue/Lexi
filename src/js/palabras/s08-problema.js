PALABRA({
  id: 'problema', palabra: 'problema', silabas: ['pro', 'ble', 'ma'],
  tipo: 'nombre', nivel: 2, curso: 1, semana: 8, orden: 1, bloque: 'pensar', sep: 'problema-solucion',
  def: 'Un problema es algo que no va bien o una pregunta difícil, y hay que pensar para resolverlo.',
  otro: null,
  escena: { img: 'problema.webp', texto: 'A Rocío se le cuela el balón en lo alto de un árbol. Salta, pero no llega. Mueve el tronco, pero el balón no cae. Rocío tiene un problema.' },
  contextos: [
    'En mates leemos el problema: «Tengo 3 globos y me dan 2. ¿Cuántos tengo?».',
    'El coche no arranca: tenemos un problema.',
    'Dos amigos quieren el mismo columpio: es un problema y hay que hablarlo.'
  ],
  gesto: 'Ráscate la cabeza con una mano.',
  sentido: [
    { t: 'Se rompió la cremallera de mi abrigo: tengo un problema.', ok: true, por: 'Algo no va bien y hay que arreglarlo.' },
    { t: 'Todo salió perfecto y no faltó nada: tengo un problema.', ok: false, por: 'Si todo va bien, no hay problema.' },
    { t: 'En el problema de mates había que averiguar cuántas canicas quedaban.', ok: true, por: 'Es una pregunta que hay que pensar.' },
    { t: 'Tengo un problema: ya está todo arreglado.', ok: false, por: 'Si está arreglado, ya no es un problema.' }
  ],
  ejemplos: [
    { t: 'Perder la llave de casa', ok: true },
    { t: 'Que llueva y no tengas paraguas', ok: true },
    { t: '«Tengo 4 lápices y pierdo 1. ¿Cuántos me quedan?»', ok: true },
    { t: 'Encontrar lo que buscabas', ok: false },
    { t: 'Que todo funcione bien', ok: false },
    { t: 'Tener la merienda preparada', ok: false }
  ],
  pregunta: '¿Es un problema?',
  acaba: ['Un problema que tuve fue…', 'Cuando tengo un problema, primero…'],
  habla: 'Cuenta un problema pequeño que tuviste y cómo lo arreglaste.',
  rel: { parecida: ['lío'], contraria: ['solución'], familia: [], mas: ['dificultad'] }
});
