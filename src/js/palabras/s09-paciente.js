PALABRA({
  id: 'paciente', palabra: 'paciente', silabas: ['pa', 'cien', 'te'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 9, orden: 6, bloque: 'sentir',
  def: 'Alguien es paciente cuando sabe esperar con calma, sin enfadarse ni quejarse.',
  otro: 'También es paciente la persona enferma a la que cuida un médico.',
  escena: { img: 'paciente.webp', texto: 'Blanca va a pescar con su abuelo. Pasa un rato y no pica ningún pez. Pasa otro rato. Blanca sigue quieta, mirando el agua, sin protestar. Blanca es paciente.' },
  contextos: [
    'Hay que ser paciente para que crezca la planta: tarda muchos días.',
    'En la cola del súper esperamos pacientes nuestro turno.',
    'Mi maestro es paciente: me lo explica otra vez sin enfadarse.'
  ],
  gesto: 'Mira el reloj de la muñeca y no lo toques.',
  sentido: [
    { t: 'Fui paciente y esperé mi turno sin protestar.', ok: true, por: 'Esperó con calma.' },
    { t: 'Soy muy paciente: si tengo que esperar un minuto, grito y pataleo.', ok: false, por: 'Gritar no es esperar con calma.' },
    { t: 'La gata paciente espera quieta delante del agujero del ratón.', ok: true, por: 'Aguanta la espera sin moverse.' },
    { t: 'Fue tan paciente que se marchó enfadado nada más llegar.', ok: false, por: 'Quien es paciente sabe esperar.' }
  ],
  ejemplos: [
    { t: 'Esperar a que el bizcocho se enfríe', ok: true },
    { t: 'Hacer un puzle grande poco a poco', ok: true },
    { t: 'Hacer cola sin protestar', ok: true },
    { t: 'Colarte porque no quieres esperar', ok: false },
    { t: 'Gritar «¡ya, ya, ya!»', ok: false },
    { t: 'Dejarlo a la primera porque no sale', ok: false }
  ],
  acaba: ['Tengo que ser paciente cuando…', 'Para aprender a leer hay que ser paciente porque…'],
  habla: '¿Qué es lo que más te cuesta esperar? ¿Qué haces mientras esperas?',
  rel: { parecida: ['que sabe esperar'], contraria: [], familia: ['paciencia', 'impaciente'], mas: ['tranquilo', 'calmado', 'impaciente'] }
});
