# Semana 17 · contenido completo (1.º)

Seis palabras escritas con las normas de `docs/pedagogia.md` y el modelo de `docs/semana-01.md`.
Al programar, cada bloque pasa tal cual a `src/js/palabras/s17-<id>.js`.

Tres palabras de los enunciados de matemáticas (cantidad, mitad, doble), una pareja de contrarias
(lleno, vacío) y una palabra para convivir (equipo).

```js
PALABRA({
  id: 'cantidad', palabra: 'cantidad', silabas: ['can', 'ti', 'dad'],
  tipo: 'nombre', nivel: 2, curso: 1, semana: 17, orden: 1, bloque: 'pensar',
  def: 'La cantidad es cuánto hay de algo: muchos, pocos, tres, un montón…',
  otro: null,
  escena: { img: 'cantidad.webp', texto: 'Lucía y Hugo vuelven del campo con castañas. Las echan sobre la mesa en dos montones. El montón de Hugo es mucho más alto. Hugo ha cogido más cantidad.' },
  contextos: [
    'En la receta pone la cantidad de harina que hay que echar.',
    'En el problema nos preguntan qué cantidad de lápices hay en total.',
    'En otoño cae una gran cantidad de hojas en el parque.'
  ],
  gesto: 'Con el índice, toca la mesa muy deprisa en varios sitios, como si contaras cosas.',
  sentido: [
    { t: 'Para la fiesta hace falta una gran cantidad de sillas.', ok: true, por: 'Hacen falta muchas: dice cuántas.' },
    { t: 'La cantidad de mi pelota es roja.', ok: false, por: 'Rojo es un color, no cuánto hay.' },
    { t: 'En el problema hay que saber qué cantidad de manzanas queda.', ok: true, por: 'Hay que saber cuántas manzanas hay.' },
    { t: 'Ese perro tiene una cantidad muy bonita.', ok: false, por: 'La cantidad dice cuánto hay, no cómo es algo.' }
  ],
  ejemplos: [
    { t: 'Cuántos caramelos hay en la bolsa', ok: true },
    { t: 'Cuánta agua hay en la bañera', ok: true },
    { t: 'Cuántos niños hay en el patio', ok: true },
    { t: 'De qué color es la bolsa', ok: false },
    { t: 'Si el agua está fría o caliente', ok: false },
    { t: 'Cómo se llaman los niños del patio', ok: false }
  ],
  pregunta: '¿Habla de la cantidad?',
  acaba: ['Me gustaría tener una gran cantidad de… porque…', 'Para saber la cantidad de niños de la clase, hay que…'],
  habla: 'Mirad la clase: ¿de qué hay más cantidad, de sillas o de ventanas?',
  rel: { parecida: ['cuánto hay'], contraria: [], familia: [], mas: ['número'] }
});

PALABRA({
  id: 'mitad', palabra: 'mitad', silabas: ['mi', 'tad'],
  tipo: 'nombre', nivel: 2, curso: 1, semana: 17, orden: 2, bloque: 'pensar', sep: 'mitad-doble',
  def: 'La mitad es cada una de las dos partes iguales en que partes algo.',
  otro: null,
  escena: { img: 'mitad.webp', texto: 'Mateo tiene una galleta y su hermana Ana no tiene ninguna. Mateo la parte con cuidado en dos trozos iguales. Le da uno a Ana y se queda el otro. Cada uno tiene la mitad.' },
  contextos: [
    'Mi padre partió la pizza por la mitad.',
    'En clase hemos aprendido que la mitad de 6 es 3.',
    'Ya hemos subido la mitad de la montaña.'
  ],
  gesto: 'Con el canto de una mano, corta por el centro la palma de la otra.',
  sentido: [
    { t: 'De 10 cromos, te doy la mitad: 5.', ok: true, por: '5 y 5 son dos partes iguales.' },
    { t: 'Corté la manzana en un trozo enorme y otro diminuto, y cada uno era la mitad.', ok: false, por: 'Las dos mitades tienen que ser iguales.' },
    { t: 'Me comí la mitad del bocadillo y guardé la otra para luego.', ok: true, por: 'Lo partió en dos partes iguales.' },
    { t: 'Me bebí la mitad del vaso y no quedó nada.', ok: false, por: 'Si bebes la mitad, aún queda la otra mitad.' }
  ],
  ejemplos: [
    { t: '2 caramelos de 4', ok: true },
    { t: '5 cromos de 10', ok: true },
    { t: 'Uno de los dos trozos iguales de una naranja', ok: true },
    { t: '3 caramelos de 4', ok: false },
    { t: 'Un trozo pequeñito de un bocadillo', ok: false },
    { t: 'Una pizza entera', ok: false }
  ],
  pregunta: '¿Es la mitad?',
  acaba: ['Si tengo 8 caramelos y te doy la mitad, te doy… porque…', 'Partiría por la mitad… para…'],
  habla: 'Piensa en algo que se pueda partir por la mitad. Explica a tu compañero cómo lo partirías.',
  rel: { parecida: ['medio'], contraria: [], familia: [], mas: ['doble', 'partir'] }
});

PALABRA({
  id: 'doble', palabra: 'doble', silabas: ['do', 'ble'],
  tipo: 'nombre', nivel: 2, curso: 1, semana: 17, orden: 3, bloque: 'pensar', sep: 'mitad-doble',
  def: 'El doble es dos veces lo que había: si tienes 3, el doble es 6.',
  otro: null,
  escena: { img: 'doble.webp', texto: 'Iris tiene 2 cromos de dinosaurios. Su abuelo le regala otros 2, iguales. Ahora tiene 4, dos veces lo que tenía. Iris tiene el doble.' },
  contextos: [
    'Mi hermano mayor come el doble que yo.',
    'En la clase aprendemos que el doble de 4 es 8.',
    'Este árbol es el doble de alto que el de la plaza.'
  ],
  gesto: 'Levanta tres dedos de una mano y, a su lado, otros tres de la otra.',
  sentido: [
    { t: 'Tenía 5 canicas y ahora tengo 10: tengo el doble.', ok: true, por: '10 son dos veces 5.' },
    { t: 'Tenía 5 canicas y ahora tengo 6: tengo el doble.', ok: false, por: 'El doble de 5 son 10, no 6.' },
    { t: 'Ayer leí 2 páginas y hoy he leído el doble: 4.', ok: true, por: '4 son dos veces 2.' },
    { t: 'Partí mi galleta en dos y me quedé con el doble.', ok: false, por: 'Al partirla, cada trozo es la mitad, no el doble.' }
  ],
  ejemplos: [
    { t: '4 caramelos, si antes había 2', ok: true },
    { t: '10 cromos, si antes había 5', ok: true },
    { t: 'Dos torres iguales, si antes había una', ok: true },
    { t: '3 caramelos, si antes había 2', ok: false },
    { t: '2 caramelos, si antes había 4', ok: false },
    { t: 'La misma torre, sin cambiar nada', ok: false }
  ],
  pregunta: '¿Es el doble?',
  acaba: ['Si tengo 3 lápices y me dan otros 3, tengo… porque…', 'Me gustaría tener el doble de… porque…'],
  habla: 'Di un número pequeño. Tu compañero enseña el doble con los dedos.',
  rel: { parecida: ['dos veces'], contraria: [], familia: [], mas: ['mitad', 'triple'] }
});

PALABRA({
  id: 'lleno', palabra: 'lleno', silabas: ['lle', 'no'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 17, orden: 4, bloque: 'como-son', sep: 'lleno-vacio',
  def: 'Algo está lleno cuando ya no cabe nada más dentro.',
  otro: 'También se dice cuando has comido tanto que no te cabe nada más: «¡Estoy lleno!».',
  escena: { img: 'lleno.webp', texto: 'Pablo echa agua en la regadera para regar las plantas. El agua sube y sube. De pronto, se sale por arriba y le moja los pies. ¡La regadera está llena!' },
  contextos: [
    'El cesto de la ropa sucia está lleno.',
    'En la excursión, el autobús iba lleno de niños.',
    'Después de tanta lluvia, el pantano está lleno.'
  ],
  gesto: 'Hincha los mofletes todo lo que puedas, como un globo.',
  sentido: [
    { t: 'No puedo meter más libros en la mochila: está llena.', ok: true, por: 'Ya no cabe nada más.' },
    { t: 'El vaso está lleno: no tiene ni una gota.', ok: false, por: 'Sin ni una gota, está vacío.' },
    { t: 'El cine estaba lleno y no había ni un asiento libre.', ok: true, por: 'No cabía nadie más.' },
    { t: 'La caja está llena: dentro solo hay un lápiz.', ok: false, por: 'Con un solo lápiz aún cabe mucho más.' }
  ],
  ejemplos: [
    { t: 'Un vaso de agua hasta arriba', ok: true },
    { t: 'Un autobús sin sitio para sentarse', ok: true },
    { t: 'Una mochila en la que no cabe nada más', ok: true },
    { t: 'Una caja sin nada dentro', ok: false },
    { t: 'Una piscina sin agua', ok: false },
    { t: 'Un vaso de agua por la mitad', ok: false }
  ],
  acaba: ['Sé que el vaso está lleno porque…', 'Cuando la papelera está llena, hay que…'],
  habla: 'Di a tu compañero algo de tu casa que suele estar lleno. ¿De qué está lleno?',
  rel: { parecida: ['hasta arriba'], contraria: ['vacío'], familia: ['llenar'], mas: ['repleto'] }
});

PALABRA({
  id: 'vacio', palabra: 'vacío', silabas: ['va', 'cí', 'o'],
  tipo: 'cualidad', nivel: 2, curso: 1, semana: 17, orden: 5, bloque: 'como-son', sep: 'lleno-vacio',
  def: 'Algo está vacío cuando no tiene nada dentro.',
  otro: null,
  escena: { img: 'vacio.webp', texto: 'Teo abre la caja de galletas para merendar. Mete la mano, pero no toca nada. Mira dentro: no queda ni una miga. ¡La caja está vacía!' },
  contextos: [
    'El frigorífico está vacío: hay que ir a comprar.',
    'El sábado, el colegio está vacío.',
    'En invierno, la playa está vacía.'
  ],
  gesto: 'Pon una mano como un vaso, dale la vuelta y sacúdela: no cae nada.',
  sentido: [
    { t: 'Me bebí todo el zumo y el vaso quedó vacío.', ok: true, por: 'No queda nada dentro.' },
    { t: 'La mochila está vacía: lleva todos mis libros.', ok: false, por: 'Si lleva libros, no está vacía.' },
    { t: 'Al final de la fiesta, el plato de patatas estaba vacío.', ok: true, por: 'Se comieron todas.' },
    { t: 'La pecera está vacía: tiene agua y dos peces.', ok: false, por: 'Con agua y peces tiene cosas dentro.' }
  ],
  ejemplos: [
    { t: 'Una caja sin nada dentro', ok: true },
    { t: 'Una piscina sin agua', ok: true },
    { t: 'Un cajón donde no queda nada', ok: true },
    { t: 'Un vaso de agua hasta arriba', ok: false },
    { t: 'Un autobús sin sitio para sentarse', ok: false },
    { t: 'Una botella con un poco de agua', ok: false }
  ],
  acaba: ['Sé que la caja está vacía porque…', 'Si el frigorífico está vacío, hay que…'],
  habla: 'Busca en la clase algo vacío. ¿Qué podríamos meter dentro?',
  rel: { parecida: ['sin nada dentro'], contraria: ['lleno'], familia: ['vaciar'] }
});

PALABRA({
  id: 'equipo', palabra: 'equipo', silabas: ['e', 'qui', 'po'],
  tipo: 'nombre', nivel: 2, curso: 1, semana: 17, orden: 6, bloque: 'convivir',
  def: 'Un equipo es un grupo de personas que juegan o trabajan juntas para lo mismo.',
  otro: null,
  escena: { img: 'equipo.webp', texto: 'En el recreo, la clase de Vera hace una carrera de relevos. Vera corre y le da el pañuelo a Óscar. Óscar corre y se lo da a Leire. Juntos llegan a la meta. ¡Son un buen equipo!' },
  contextos: [
    'Mi hermana juega en un equipo de baloncesto.',
    'En clase hacemos el mural en equipos de cuatro.',
    'En casa somos un equipo: todos ponemos la mesa.'
  ],
  gesto: 'Pasa un brazo por los hombros de un compañero imaginario, a tu lado.',
  sentido: [
    { t: 'Los bomberos trabajan en equipo para apagar el fuego.', ok: true, por: 'Son un grupo que trabaja junto.' },
    { t: 'Juego en un equipo yo solo, sin nadie más.', ok: false, por: 'Un equipo es un grupo: no puede ser uno solo.' },
    { t: 'Nuestro equipo ganó porque nos pasábamos la pelota.', ok: true, por: 'Jugaban juntos para lo mismo.' },
    { t: 'En mi equipo, cada uno juega para ganar él solo.', ok: false, por: 'En un equipo se juega juntos, para lo mismo.' }
  ],
  ejemplos: [
    { t: 'Cinco niñas que juegan juntas al baloncesto', ok: true },
    { t: 'Los bomberos que apagan juntos un fuego', ok: true },
    { t: 'Una mesa de la clase que hace un mural entre todos', ok: true },
    { t: 'Un niño que juega solo con el balón', ok: false },
    { t: 'Gente que espera el autobús, cada uno a lo suyo', ok: false },
    { t: 'Dos niños que se pelean por la pelota', ok: false }
  ],
  pregunta: '¿Es un equipo?',
  acaba: ['En un buen equipo, todos…', 'Me gusta trabajar en equipo porque…'],
  habla: 'Pensad juntos un nombre para vuestro equipo de mesa. ¿Por qué ese?',
  rel: { parecida: ['grupo'], contraria: [], familia: ['equipación'], mas: ['compañeros'] }
});
```

## Notas para quien programe

- **Nombres de matemáticas:** `cantidad`, `mitad` y `doble` llevan `pregunta` («¿Habla de la cantidad?»,
  «¿Es la mitad?», «¿Es el doble?») porque sus ejemplos son situaciones con números. Los números son
  pequeños (hasta 10) y las mitades, de números pares, como en 1.º.
- `mitad` y `doble` se confunden fácilmente: llevan `sep: 'mitad-doble'` (días distintos) y cada una
  tiene a la otra en un no-ejemplo («Partí mi galleta en dos y me quedé con el doble»). No se preguntan
  una a otra en `relaciona` (no son contrarias exactas): cada una va en `rel.mas` de la otra.
- `cantidad` enlaza con `faltar` y `sobrar` (semana 13) en los problemas. Sus no-ejemplos son cercanos:
  hablan del mismo objeto pero de su color, su temperatura o su nombre, no de cuántos hay.
- `lleno` y `vacío` son contrarias, comparten cuatro ejemplos al revés y llevan `sep: 'lleno-vacio'`.
  El vaso «por la mitad» (y la botella con un poco de agua) es el no-ejemplo de las dos: no está ni
  lleno ni vacío. `lleno` tiene segundo significado (`otro`): «¡Estoy lleno!» de haber comido mucho.
- **Nombre** `equipo` (bloque `convivir`, pregunta «¿Es un equipo?»): la pregunta de `colaborar`
  (semana 9) es «trabajar en equipo»; no choca, porque es una frase y no esta palabra. Los no-ejemplos
  son grupos que no van a lo mismo (la parada del autobús, dos niños que se pelean).
- **Gestos cercanos a vigilar:** `cantidad` (tocar la mesa en varios sitios) y `marcar` (cruz sobre la
  mesa, semana 11); `mitad` (cortar con el canto de la mano) y `compartir` (partir algo y tenderlo,
  semana 9); `doble` (tres dedos y tres dedos) y `estación` (contar cuatro con los dedos, semana 10).
- Orden recomendado dentro de la semana: cantidad, mitad, doble, lleno, vacío, equipo.
