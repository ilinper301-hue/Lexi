PALABRA({
  id: 'cambiar', palabra: 'cambiar', silabas: ['cam', 'biar'],
  tipo: 'accion', nivel: 2, curso: 1, semana: 7, orden: 2, bloque: 'pensar',
  def: 'Cambiar es hacer que algo sea diferente de como era, o poner una cosa en lugar de otra.',
  otro: null,
  escena: { img: 'cambiar.webp', texto: 'Martín tiene un cromo repetido y Sira también. Él le da el suyo y ella le da el de ella. Ahora cada uno tiene un cromo nuevo. Martín y Sira han cambiado los cromos.' },
  contextos: [
    'En otoño, las hojas cambian de color.',
    'En la frase cambiamos «perro» por «gato».',
    'Se fundió la bombilla y la cambiamos por otra.'
  ],
  gesto: 'Gira las dos manos a la vez, como dando la vuelta a algo.',
  sentido: [
    { t: 'Me mojé y me cambié de camiseta.', ok: true, por: 'Se puso otra.' },
    { t: 'Cambié de sitio y me quedé en la misma silla.', ok: false, por: 'Si sigues en la misma silla, no has cambiado.' },
    { t: 'El semáforo cambió de rojo a verde.', ok: true, por: 'Antes era de un color y ahora de otro.' },
    { t: 'Cambié el dibujo dejándolo exactamente igual.', ok: false, por: 'Si queda igual, no ha cambiado nada.' }
  ],
  ejemplos: [
    { t: 'Ponerte otro jersey', ok: true },
    { t: 'La oruga que se vuelve mariposa', ok: true },
    { t: 'Poner un 5 donde había un 3', ok: true },
    { t: 'Dejarlo todo como estaba', ok: false },
    { t: 'Repetir lo mismo', ok: false },
    { t: 'Quedarte en tu sitio', ok: false }
  ],
  acaba: ['Si pudiera cambiar algo de mi cuarto, cambiaría…', 'Cuando llega el frío, cambiamos…'],
  habla: '¿En qué has cambiado tú desde que eras un bebé?',
  rel: { parecida: ['hacer diferente'], contraria: ['dejar igual'], familia: ['cambio'] }
});
