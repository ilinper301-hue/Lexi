PALABRA({
  id: 'orgulloso', palabra: 'orgulloso', silabas: ['or', 'gu', 'llo', 'so'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 6, orden: 6, bloque: 'sentir',
  def: 'Estás orgulloso cuando te sientes muy contento por algo que has hecho bien y te ha costado.',
  otro: 'También puedes estar orgulloso de otra persona: «estoy orgullosa de ti».',
  escena: { img: 'orgulloso.webp', texto: 'Saúl lleva una semana intentando atarse los cordones. Hoy hace el lazo él solo, a la primera. Corre a enseñárselo a su madre con una sonrisa de oreja a oreja. Saúl está orgulloso.' },
  contextos: [
    'Estoy orgullosa de mi dibujo: lo he colgado en la pared.',
    'El equipo está orgulloso porque ha jugado muy bien.',
    'Mi abuelo está orgulloso de su huerto.'
  ],
  gesto: 'Levanta un pulgar y sonríe.',
  sentido: [
    { t: 'Aprendí a montar en bici y me sentí orgulloso.', ok: true, por: 'Le costó y lo consiguió.' },
    { t: 'Estoy orgulloso de haber roto el vaso sin querer.', ok: false, por: 'Eso no es algo bien hecho.' },
    { t: 'Mi madre está orgullosa de mí porque ayudé a mi hermano.', ok: true, por: 'Hizo algo bueno.' },
    { t: 'Me sentí orgullosa: no lo intenté y me fui.', ok: false, por: 'Te sientes orgulloso cuando te esfuerzas.' }
  ],
  ejemplos: [
    { t: 'Leer tu primera frase tú solo', ok: true },
    { t: 'Acabar un puzle muy difícil', ok: true },
    { t: 'Pedir perdón aunque te cueste', ok: true },
    { t: 'Copiar el trabajo de otro', ok: false },
    { t: 'Reírte de quien todavía no sabe', ok: false },
    { t: 'Dejar la ficha sin hacer', ok: false }
  ],
  acaba: ['Estoy orgulloso de mí cuando…', 'Mi familia se sintió orgullosa cuando yo…'],
  habla: '¿De qué estás orgulloso este curso? Cuéntaselo a tu compañero.',
  rel: { parecida: ['contento de sí mismo'], contraria: [], familia: ['orgullo'], mas: ['satisfecho', 'avergonzado'] }
});
