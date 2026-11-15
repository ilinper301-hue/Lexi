# Lexi · diseño pedagógico (primer ciclo)

Decidido con Iván el 13-11-2026. Fuentes: Beck, McKeown y Kucan (*Bringing Words to Life*),
Quigley (*Closing the Vocabulary Gap*), Marzano y Pickering (*Building Academic Vocabulary*).

## 1. Modelo de uso

- **1.º y 2.º: el docente guía a toda la clase en la pizarra digital.** El alumnado no necesita leer:
  escucha, repite, hace gestos, responde con pulgares y habla con su compañero.
- **Familias:** la misma sesión guiada, con un adulto y un niño.
- **Aprendizaje autónomo (tableta, un niño solo): más adelante.** No se programa todavía.
- El progreso se guarda **por clase** (o por niño en Familias), no por alumno.
- Pocas palabras y muy trabajadas: **6 por semana**. Prioridad: nivel 2 (académico transversal),
  empezando por las palabras de los enunciados.

## 2. La sesión (10-15 minutos)

Un solo botón grande, **«Hoy»**, monta la sesión sola:

1. **Recordamos** · 2 o 3 palabras de días anteriores. Cada vez con una tarea distinta a la última
   que se hizo con esa palabra.
2. **Palabra nueva** (1 o 2 por sesión), siempre en este orden:
   1. Escena: ilustración y texto corto que el docente lee en voz alta (la app no usa voz: todo va en texto en pantalla y lo explica el docente).
   2. La decimos todos, y otra vez con palmadas por sílabas.
   3. Explicación amigable.
   4. Gesto.
   5. Dos o tres contextos más.
3. **Jugamos** · 2 tareas con las palabras de la semana.
4. **Cierre** · la decimos por última vez y el docente valora con un toque.

Valoración del docente tras cada tarea de «Recordamos» y «Jugamos» (tres botones grandes):
**casi todos · la mitad · pocos**. Es opcional: si no toca nada, la tarea no cuenta como evidencia.

Cómo elige la app las palabras y las tareas de cada parte: apartado 10. Qué hace cada valoración:
apartados 4 (escala) y 5 (repaso).

## 3. Tareas

Todas son orales o de respuesta colectiva. La pantalla muestra la pregunta en grande y, al tocar,
la respuesta y el porqué.

| id | Tarea | Cómo responde la clase | Dimensión |
|---|---|---|---|
| `sentido` | ¿Tiene sentido? | Pulgar arriba o abajo, y alguien dice por qué | Comprender |
| `ejemplo` | ¿Es o no es? (ejemplo y no-ejemplo) | Pulgares | Comprender |
| `elige` | ¿Qué palabra va con esta escena? (2 o 3 palabras de la semana) | Dedos: 1, 2 o 3 | Reconocer |
| `gesto` | Adivina la palabra por el gesto / haz el gesto de… | Gesto | Reconocer |
| `relaciona` | Se parece a… / lo contrario de… | Coral | Relacionar |
| `acaba` | Acaba la frase | Oral, dos o tres voluntarios | Usar |
| `habla` | Cuéntaselo a tu compañero | Por parejas, 1 minuto | Usar |
| `familia` | Palabras de la misma familia (desde 2.º) | Coral | Relacionar |

No hay puntos, vidas, cronómetro ni rachas. El refuerzo es el muro de palabras de la clase, que crece.

Diseño detallado de `gesto` y `relaciona` (pantallas, reglas G y L, tests 58-75): `docs/tareas-gesto-relaciona.md`. *(Propuesta del 14-11-2026, pendiente del sí de Iván.)*

## 4. Escala única (de la clase, por palabra)

Reglas exactas de la Fase 3 (diseño del 14-11-2026, Fable). Los pasos se numeran del 1 al 4, igual que
en los datos (`e`). Casos de ejemplo en el apartado 11 y tests en el 12.

| Paso | Nombre | Se llega cuando… |
|---|---|---|
| 1 | Nueva | Aún no se ha presentado |
| 2 | La conocemos | Se ha presentado completa |
| 3 | La entendemos | «Casi todos» en tareas de **entender**, en **2 días distintos** posteriores a la presentación |
| 4 | La usamos | «Casi todos» en tareas de **usar**, en **2 días distintos**, y han pasado al menos 7 días desde la presentación |

Palabras que usan las reglas:

- **Día:** la fecha del dispositivo en hora local (`AAAA-MM-DD`). No importa la hora ni cuántas sesiones se hagan.
- **Tareas de entender** (comprender y reconocer): `sentido`, `ejemplo`, `elige`, `gesto`.
- **Tareas de usar** (usar y relacionar): `acaba`, `habla`, `relaciona`, `familia`.
- **Día bueno** de entender o de usar: un día, posterior al de la presentación, en el que el docente
  ha valorado «casi todos» una tarea de ese grupo.

Reglas:

- **E1 · Presentación.** Al terminar la presentación completa la palabra pasa de 1 a 2 y se guarda la
  fecha. Presentarla otra vez no cambia nada.
- **E2 · Solo cuenta lo que valora el docente.** «Seguir sin valorar» no es evidencia. Las valoraciones
  del mismo día de la presentación se apuntan en el historial, pero no cuentan: ni suben, ni bajan, ni
  mueven el repaso (ese día es práctica).
- **E3 · Días buenos.** Cada «casi todos» apunta el día como bueno para el grupo de esa tarea. Un mismo
  día cuenta una sola vez por grupo, aunque haya varias tareas. Los de entender se apuntan solo en el
  paso 2; los de usar, en los pasos 2 y 3 (usar bien una palabra antes de «entenderla» también cuenta
  para más adelante).
- **E4 · Sube a «La entendemos».** Está en el paso 2, la valoración de ahora es «casi todos» en una
  tarea de entender y con hoy ya hay 2 días buenos de entender.
- **E5 · Sube a «La usamos».** Está en el paso 3, la valoración de ahora es «casi todos» en una tarea
  de usar, con hoy ya hay 2 días buenos de usar y hoy es al menos 7 días después de la presentación.
- **E6 · Un cambio por día.** Una palabra cambia de paso (suba o baje) como mucho una vez al día. Al
  cambiar de paso se borran los días buenos del grupo que se ha usado para subir.
- **E7 · «La mitad».** El paso no cambia, el día no se apunta como bueno y no se borra nada. Vuelve
  pronto (regla R4).
- **E8 · «Pocos».** Vuelve pronto (regla R5), ese día ya no puede ser día bueno para esa palabra (los
  «casi todos» que vengan después ese mismo día no cuentan) y además:
  - en una tarea de **entender**: baja un paso (nunca por debajo de 2) y se borran todos sus días buenos;
  - en una tarea de **usar**: se borran sus días buenos de usar; baja un paso **solo si estaba en «La
    usamos»**. En «La conocemos» y «La entendemos» se queda donde está: no saber usarla todavía no
    quiere decir que no la entiendan. *(Propuesta pendiente del sí de Iván, punto 7 de `ESTADO.md`. La
    regla anterior decía «baja un paso» siempre.)*
- **E9 · El tiempo no baja pasos.** Semanas sin sesión no cambian el paso de ninguna palabra.
- **E10 · Suelo.** Una palabra presentada nunca vuelve a «Nueva».
- **E11 · Modo Docente.** No se lee ni se guarda nada: ninguna palabra cambia.

Acertar una vez no es saberla: por eso hacen falta días distintos y tareas distintas.

Representación visual: el bocadillo de Lexi, que crece y se llena en 4 estados (`escalaSVG`), igual en
la ficha, el muro de palabras y la zona del tutor.

## 5. Repaso

Cajas por días, como en Calculi. Pensado para el colegio: si pasan semanas sin sesión no hay castigo.

| Caja | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| Vuelve a los… | 1 día | 3 días | 7 días | 15 días | 30 días |

**Cuándo vuelve cada palabra**

- **R1.** Al presentarla entra en la caja 1 y vuelve al día siguiente.
- **R2.** Está **pendiente** cuando su fecha de vuelta es hoy o ya pasó.
- **R3 · «Casi todos».** Si estaba pendiente: sube una caja (máximo 5) y vuelve dentro de los días de
  su nueva caja, contados desde hoy. Si no estaba pendiente (salió antes de tiempo en «Jugamos»): la
  caja y la fecha no cambian, aunque el día sí cuenta para la escala.
- **R4 · «La mitad».** Baja una caja (mínimo 1) y vuelve mañana.
- **R5 · «Pocos».** Va a la caja 1 y vuelve mañana.
- **R6 · Descanso.** Una palabra en «La usamos» y en la caja 5 que, estando pendiente, recibe «casi
  todos» deja de programarse. Sigue en el muro. Si algún día recibe «la mitad» o «pocos», vuelve a la
  rueda (R4 o R5). Si no está en «La usamos», sigue en la caja 5 y vuelve a los 30 días.
- **R7.** Si la tarea se queda sin valorar, la palabra sigue pendiente.
- **R8.** Lo pendiente se acumula sin castigo: ni la caja ni el paso cambian por esperar.
- **R9 · Quién entra en «Recordamos».** Como mucho 3 palabras pendientes presentadas antes de hoy.
  Primero las más atrasadas (fecha de vuelta más antigua). Si empatan: paso más bajo, luego caja más
  baja, luego el orden del paquete.

**Qué tarea toca** (en «Recordamos» y en «Jugamos»)

- **T1 · Grupo que toca.** (a) Si la última valoración de la palabra fue «pocos»: una de entender
  (volvemos a lo básico). (b) Si no: en el paso 2, de entender; en el paso 3, de usar; en el paso 4,
  el grupo contrario al de su última tarea (si no hay última, de usar). (c) Si hoy ya es día bueno de
  ese grupo, toca el otro.
- **T2 · Tareas disponibles.** Las programadas que tengan contenido en la ficha. `elige` necesita
  otras 2 palabras **ya presentadas** (primero de su semana; si faltan, de semanas anteriores).
- **T3.** Nunca la última tarea hecha con esa palabra (hecha = enseñada, se valore o no).
- **T4 · Variedad en la sesión.** Las 2 tareas de «Jugamos» son de tipo distinto. En «Recordamos» no
  se repite el tipo de la tarea anterior si hay otra del mismo grupo.
- **T5.** Entre las que quedan, la que menos veces se ha hecho con esa palabra. Si empatan, por este
  orden: `sentido`, `ejemplo`, `elige`, `gesto` · `acaba`, `habla`, `relaciona`, `familia`.
- **T6.** Si no queda ninguna del grupo: primero se olvida T4; si aun así no hay, se coge del otro
  grupo. T3 no se rompe nunca.

**Qué frase sale** (el contexto cambia)

- **T7.** Cada palabra lleva la cuenta de las veces que ha hecho cada tarea. Sale la siguiente frase
  de su lista y, al acabarla, se vuelve a empezar: `sentido` en el orden de la ficha (4 frases);
  `ejemplo` alternando un sí y un no (6); `acaba` (2). La cuenta avanza al salir de la tarea, se
  valore o no: nunca sale la misma frase dos veces seguidas. `habla` tiene una sola pregunta, pero por
  T3 nunca se hace dos veces seguidas.

## 6. Ficha de palabra (formato de datos)

Una palabra por archivo en `src/js/palabras/sNN-id.js`. El `id` es estable para siempre.

```js
PALABRA({
  id: 'fragil', palabra: 'frágil', silabas: ['frá', 'gil'],
  tipo: 'cualidad',            // 'accion' | 'cualidad' | 'nombre' | 'enlace'
  nivel: 2, curso: 1, semana: 1, bloque: 'como-son',
  def: 'Algo es frágil cuando se rompe con facilidad y hay que tratarlo con cuidado.',
  otro: null,                  // segundo significado, si lo tiene
  escena: { img: 'fragil.webp', texto: '…' },
  contextos: ['…', '…', '…'],  // 3, de ámbitos distintos
  gesto: '…',
  sentido: [{ t: '…', ok: true, por: '…' }],   // 4: dos sí y dos no
  ejemplos: [{ t: '…', ok: true }],            // 6: tres sí y tres no
  acaba: ['…', '…'],
  habla: '…',
  rel: { parecida: [], contraria: [], familia: [], mas: [] }   // `mas` es opcional
});
```

- **`id`**: sin tildes ni ñ y con guion si son dos palabras (`senalar`, `aspero`, `ser-vivo`).
- **`rel`**: `parecida` y `contraria` son las preguntas de la tarea `relaciona`. `mas` (opcional) guarda
  las palabras relacionadas que no se preguntan (más difíciles o de la misma familia); solo las ve el
  docente en la ficha. Detalle en `docs/tareas-gesto-relaciona.md`.
- **`bloque`**: `pensar`, `como-son`, `sentir`, `convivir` (desde la semana 5) y `medio` (semana 10).
  Sirve para agrupar las palabras en «Explorar»; no cambia la sesión.
- **`ejemplos` según el tipo** (aprobado el 15-11-2026: campo opcional `pregunta` en la ficha; si
  falta, se usa la pregunta de siempre. Pendiente de programar, ver `ESTADO.md`): en los
  `enlace` y en algunas cualidades los ejemplos son situaciones o parejas, y en los `nombre` la pregunta
  necesita artículo. Cada `docs/semana-NN.md` lo explica en sus notas.

## 7. Normas de redacción del contenido

- **Definición amigable:** frase completa con palabras de todos los días («Algo es… cuando…»,
  «… es…»). Nunca un sinónimo suelto ni una definición de diccionario. Como mucho 18 palabras.
- **Escena:** 3 o 4 frases cortas, un protagonista con nombre, y la palabra aparece al final.
- **Contextos:** tres ámbitos distintos (casa, colegio, naturaleza, calle…).
- **¿Tiene sentido?:** las frases «no» fallan por el significado, no por la gramática, y llevan su porqué.
- **No-ejemplos cercanos:** mejor «contar cuántos hay» que «cantar una canción» para *comparar*.
- **Acaba la frase:** el final tiene que demostrar que se ha entendido.
- **Gesto:** un solo movimiento, que se pueda hacer sentado. Sin repetir gestos entre palabras de la misma semana.
- **El gesto no nombra la palabra** ni ninguna de su familia, porque en «¿Qué palabra es?» se ve en la pizarra.
- **`rel.parecida` y `rel.contraria`:** solo palabras de todos los días o palabras del paquete. Nunca
  una palabra de la misma familia que la que se enseña. Las demás, a `rel.mas`.
- **Una pregunta, una respuesta:** dos palabras del paquete no comparten la misma pregunta de
  `relaciona`, salvo que de verdad signifiquen casi lo mismo (la app avisa con «También vale»).
- Español de España, frases de 1.º, nombres variados, sin marcas ni personajes conocidos.
- Cada imagen se pide a Iván según `docs/imagenes.md`.

## 8. Paquete de 1.º (10 semanas, 60 palabras)

Las diez semanas están escritas enteras en `docs/semana-01.md` … `docs/semana-10.md`. De la 2 a la 10
se escribieron el 13-11-2026 con esta lista tal cual, sin cambiar ninguna palabra; **falta la revisión
de Iván** (ver `ESTADO.md`, fase 4).

| Semana | Pensar y enunciados | Cómo son las cosas | Sentir, tiempo y áreas |
|---|---|---|---|
| 1 | observar, comparar, ordenar | enorme, frágil | curioso |
| 2 | señalar, completar, describir | diminuto, veloz | valiente |
| 3 | explicar, elegir, clasificar | parecido, diferente | sorprendido |
| 4 | rodear, unir, descubrir | suave, áspero | agotado |
| 5 | primero, después, finalmente | antiguo, moderno | proteger |
| 6 | imaginar, recordar, preguntar | brillante, oscuro | orgulloso |
| 7 | repetir, cambiar, comprobar | necesario, sencillo | tranquilo |
| 8 | problema, solución, pista | resistente, delicado | nervioso |
| 9 | compartir, colaborar, respetar | cuidadoso, amable | paciente |
| 10 | ser vivo, alimento, paisaje | crecer, necesitar | estación |

## 9. Para más adelante

- Modo autónomo (2.º ciclo en adelante) y dominio por alumno.
- Resumen para Tabula (formato v2, que es por alumno).
- Explorar: mapas y familias de palabras proyectados.
- «La hemos encontrado»: la clase apunta cuándo oyó o usó la palabra fuera de la sesión.
- Muro, «La hemos encontrado», Explorar, tarjetas y hoja para las familias ya están diseñados en
  `docs/aula.md` (reglas MU, EN, EX, TA, FA, RE y AT; tests 76-93). *(Propuesta del 14-11-2026.)*
- Paquete de 2.º, con familias de palabras, prefijos y sufijos sencillos.

## 10. Botón «Hoy»: cómo se monta la sesión

Diseño de la Fase 3 (14-11-2026, Fable). La sesión no se guarda: cada parte se monta al entrar en
ella, con los datos de ese momento.

- **H1 · Orden fijo.** Recordamos → Palabra nueva → Jugamos → Cierre. Una parte sin contenido no sale.
  Cada parte tiene «Saltar».
- **H2 · Recordamos.** Las palabras de la regla R9 (como mucho 3), cada una con la tarea de T1-T7 y su
  valoración. El primer día no hay nada que recordar y no sale.
- **H3 · Palabra nueva.**
  - Cuántas: el ajuste del tutor «Palabras nuevas por sesión» (1 o 2; de fábrica, 2) menos las que ya
    se hayan presentado hoy. Y nunca más de **6 presentadas en la misma semana natural** (de lunes a
    domingo), contando también las presentadas a mano desde «Palabras de la semana».
  - Cuáles: las siguientes sin presentar, por semana y, dentro de la semana, en el orden de
    `docs/semana-NN.md` (campo `orden`).
  - Dos palabras con la misma marca `sep` no se presentan el mismo día (primero / después /
    finalmente; parecido / diferente; suave / áspero; problema / solución): la segunda del día es la
    siguiente que no choque.
  - Si el docente la salta, no queda presentada y volverá a salir.
- **H4 · Jugamos.** 2 tareas con palabras ya presentadas de la **semana en curso** (la de la última
  palabra presentada) que hoy no hayan salido en «Recordamos». Por este orden: las pendientes; las
  presentadas antes de hoy; las que tienen menos valoraciones; el orden del paquete. Si no hay 2, se
  completa con pendientes de otras semanas que no hayan salido hoy; si aun así no hay, se juega con
  las que haya. Tareas según T1-T7.
- **H5 · Cierre.** Se dicen por última vez las palabras nuevas de hoy, con su gesto, y se enseñan las
  que hoy han subido de paso (el bocadillo crece). Las que han bajado no se enseñan a la clase: se
  ven en el muro y en la zona del tutor. El cierre no tiene valoración propia: cada tarea ya tiene la
  suya. *(Propuesta pendiente del sí de Iván, punto 8 de `ESTADO.md`.)*
- **H6 · Segundo significado (`otro`).** La primera vez que una palabra con segundo significado sale
  en «Recordamos» estando ya en «La entendemos» o «La usamos», después de la tarea aparece una
  pantalla «También quiere decir…». Sale una sola vez y no cuenta para la escala.
- **H7 · El botón.** Si hoy ya se terminó una sesión, el botón lo dice («Hoy · hecha») y deja hacer
  otra: se monta igual, normalmente ya sin palabra nueva.
- **H8 · Sesión interrumpida.** Lo valorado y lo presentado ya está guardado. Al volver a pulsar
  «Hoy» sale solo lo que falta.
- **H9 · Modo Docente.** Sesión de muestra con la semana elegida: recordamos sus 2 primeras palabras,
  la tercera como nueva y jugamos con la cuarta y la quinta. No lee ni guarda nada.
- **H10 · Familias.** Las mismas reglas; el progreso es del niño.

Duración prevista: 3 de recordar + 2 nuevas + 2 de jugar ≈ 15 minutos; con 1 nueva, unos 10.

**Comprobado con una simulación** (60 palabras, clase que siempre responde «casi todos»):

| Sesiones por semana | Nuevas por sesión | Pendientes (máximo) | Retraso máximo | Paquete presentado en |
|---|---|---|---|---|
| 5 | 2 | 13 | 6 días | 10 semanas |
| 4 | 2 | 30 | 16 días | 10 semanas |
| 3 | 2 | 39 | 28 días | 10 semanas |
| 3 | 1 | 13 | 10 días | 20 semanas |

Con sesión diaria, 6 palabras por semana se sostienen: una palabra tarda de 2 a 9 días en llegar a
«La entendemos» y entre 11 y 38 en llegar a «La usamos». Con 3 o 4 sesiones por semana el repaso se
atrasa: conviene poner 1 palabra nueva por sesión.

## 11. Casos de ejemplo

Todos con `frágil`, presentada el **lunes 16-11-2026**.

**Caso 1 · Camino normal**

| Día | Qué pasa | Paso | Caja y vuelta |
|---|---|---|---|
| L 16-11 | Presentación completa | 2 · La conocemos | caja 1, vuelve el 17-11 |
| M 17-11 | `ejemplo`, «casi todos» (estaba pendiente) | 2 (1 día bueno de entender) | caja 2, vuelve el 20-11 |
| X 18-11 | `sentido` en «Jugamos», «casi todos» (no estaba pendiente) | **3 · La entendemos** | no cambia |
| V 20-11 | `acaba`, «casi todos» | 3 (1 día bueno de usar) | caja 3, vuelve el 27-11 |
| V 27-11 | `habla`, «casi todos» (han pasado 11 días) | **4 · La usamos** | caja 4, vuelve el 12-12 |
| L 14-12 | `acaba`, «casi todos» (llevaba 2 días pendiente) | 4 | caja 5, vuelve el 13-01-2027 |
| X 13-01 | `sentido`, «casi todos» | 4 | descansa (R6) |

**Otros casos** (cada uno parte de la presentación del lunes 16)

| N.º | Situación | Resultado | Regla |
|---|---|---|---|
| 2 | Martes 17: `ejemplo` y `sentido`, las dos «casi todos» | 1 solo día bueno; sigue en el paso 2 | E3 |
| 3 | Lunes 16, tras presentarla: `ejemplo`, «casi todos» | No cuenta; sigue en caja 1 y vuelve el 17 | E2 |
| 4 | Martes 17 «casi todos»; miércoles 18 «la mitad»; jueves 19 «casi todos» (entender) | El 18: paso 2, conserva su día bueno, baja a caja 1, vuelve el 19. El 19: sube al paso 3 | E7, R4, E4 |
| 5 | En el paso 3, viernes 20: `ejemplo`, «pocos» | Baja al paso 2 sin días buenos; caja 1, vuelve el 21 con tarea de entender | E8, R5, T1 |
| 6 | En el paso 3, con un día bueno de usar; viernes 20: `habla`, «pocos» | Sigue en el paso 3; pierde el día bueno de usar; vuelve el 21 con tarea de entender (con la regla antigua bajaría al paso 2) | E8, T1 |
| 7 | Miércoles 18 sube al paso 3 y ese mismo día `elige`, «pocos» | No baja (un cambio por día); caja 1, vuelve el 19. Si el 19 hay otro «pocos» de entender, baja al paso 2 | E6, E8 |
| 8 | En el paso 3: `acaba` el 19 y `habla` el 20, «casi todos» | Sigue en el paso 3: no han pasado 7 días. Con otro «casi todos» de usar el lunes 23, sube al paso 4 | E5 |
| 9 | En el paso 2: usar «casi todos» el 17 y el 24; entender «casi todos» el 25 y el 26 | El 26 sube al paso 3. Otra de entender el 27 no la sube. `acaba` «casi todos» el 30: paso 4 | E3, E4, E5 |
| 10 | Martes 17: `ejemplo` «pocos» y después `sentido` «casi todos» | El día no cuenta; paso 2, caja 1, vuelve el 18 | E8 |
| 11 | En el paso 4, 14-12: `acaba` «pocos» (o `sentido` «pocos») | Baja al paso 3; caja 1, vuelve el 15-12 | E8 |
| 12 | Tres semanas sin sesión, 14 palabras pendientes | Ningún paso ni caja cambia; «Recordamos» coge las 3 de fecha más antigua | E9, R8, R9 |
| 13 | Sale `sentido`, el docente pulsa «Seguir sin valorar» | Sigue pendiente; la próxima vez sale otra tarea y otra frase | R7, T3, T7 |

**Una semana de sesiones** (semana 1, 2 nuevas por sesión, todo «casi todos»)

| Día | Recordamos | Palabra nueva | Jugamos |
|---|---|---|---|
| L 16 | — | observar, comparar | observar, comparar (no cuenta: día de presentación) |
| M 17 | observar, comparar | ordenar, enorme | ordenar, enorme |
| X 18 | ordenar, enorme | frágil, curioso | observar, comparar → paso 3 |
| J 19 | frágil, curioso | — (ya van 6 esta semana) | ordenar, enorme → paso 3 |
| V 20 | observar, comparar (de usar) | — | frágil, curioso → paso 3 |
| L 23 | ordenar, enorme, frágil (de usar) | 2 de la semana 2 | las 2 nuevas |

## 12. Tests que deben pasar (Fase 3)

Las reglas se programan como funciones sin pantalla que reciben el día como dato (no leen el reloj),
para poder probarlas con fechas fijas. Presentación de referencia: lunes 16-11-2026.

**`tests/test_escala.js`**

1. Presentar: paso 1 → 2, guarda la fecha, caja 1 y vuelta al día siguiente. Presentar otra vez no cambia nada (E1).
2. Valorar una palabra sin presentar no hace nada.
3. Valoración el día de la presentación: se añade al historial y nada más cambia (E2).
4. Un solo día bueno de entender no sube (E4).
5. Dos «casi todos» de entender el mismo día son 1 día bueno; no sube (E3, caso 2).
6. «Casi todos» de entender el 17 y el 18: paso 3 el 18 (E4).
7. «Casi todos» de usar el 17 y el 18 en el paso 2: sigue en 2 y conserva 2 días buenos de usar (E3).
8. En el paso 3, usar el 19 y el 20: sigue en 3. Usar el 23: paso 4 (E5, caso 8).
9. Caso 9 completo: usar 17 y 24, entender 25 y 26 → paso 3 el 26; entender el 27 → sigue en 3; usar el 30 → paso 4.
10. Nunca dos pasos el mismo día: con los días de usar ya completos, el día que sube a 3 un «casi todos» de usar no la sube a 4 (E6).
11. «La mitad»: paso y días buenos intactos (E7).
12. «Pocos» de entender en el paso 3: paso 2 y sin días buenos. En el paso 2: sigue en 2 (E8, E10).
13. «Pocos» de usar en el paso 3: sigue en 3 y pierde los días de usar. En el paso 2: sigue en 2 y conserva los de entender (E8). *Si Iván prefiere la regla antigua, este test cambia a «baja a 2».*
14. «Pocos» en el paso 4, de usar o de entender: paso 3 (caso 11).
15. «Pocos» y después «casi todos» el mismo día: el día no cuenta (caso 10).
16. Sube y «pocos» el mismo día: no baja, sí borra y vuelve mañana; «pocos» de entender al día siguiente: baja (caso 7).
17. 100 días sin sesión: mismo paso y misma caja (E9, R8).
18. Fecha anterior a la presentación (reloj mal puesto): no cuenta y no da error.
19. En Modo Docente, valorar y presentar dejan `lexi.v1` exactamente igual (E11).
20. Prueba al azar (2000 secuencias de 60 valoraciones en días crecientes): el paso siempre está entre 2 y 4, cambia como mucho 1 por día, solo sube en un día con «casi todos» del grupo correcto y la caja está siempre entre 1 y 5.

**`tests/test_repaso.js`**

21. Con «casi todos» estando pendiente: caja 1→2 (+3 días), 2→3 (+7), 3→4 (+15), 4→5 (+30) (R3).
22. Atrasada 10 días y «casi todos»: la nueva fecha se cuenta desde hoy (R3).
23. «Casi todos» sin estar pendiente: caja y fecha iguales, pero el día bueno se apunta (R3).
24. «La mitad»: baja una caja (mínimo 1) y vuelve mañana, estuviera o no pendiente (R4).
25. «Pocos»: caja 1 y vuelve mañana (R5).
26. Descanso: paso 4, caja 5, pendiente y «casi todos» → sin fecha y no sale en pendientes; un «pocos» posterior la devuelve a la caja 1 (R6).
27. Paso 3, caja 5, pendiente y «casi todos»: sigue en caja 5 y vuelve a los 30 días (R6).
28. Sin valorar: sigue pendiente y la cuenta de esa tarea avanza (R7, T7).
29. «Recordamos»: nunca más de 3; por fecha de vuelta más antigua; empates por paso, caja y orden del paquete; no entra ninguna presentada hoy (R9).
30. Caso 12: 14 pendientes tras 3 semanas → entran 3 y ningún paso ni caja ha cambiado.
31. Caso 1 completo, con sus fechas exactas (17-11, 20-11, 27-11, 12-12, 13-01-2027, descanso).

**`tests/test_tareas.js`** (se amplía; los tests de «Jugamos» de la Fase 2 se adaptan a H4)

32. Grupo que toca: paso 2 → entender; paso 3 → usar; paso 4 → alterna; tras «pocos» → entender (T1).
33. Si hoy ya es día bueno del grupo que toca, sale del otro (T1c).
34. Nunca la misma tarea que la última de esa palabra, valorada o no (300 pasos al azar) (T3).
35. Rotación: en el paso 2 sale `sentido`, `ejemplo`, `elige`, `sentido`…; en el paso 3, `acaba`, `habla`, `acaba`… (T5).
36. `elige` no sale si no hay otras 2 palabras presentadas; fuera del Modo Docente sus tres opciones son siempre palabras presentadas (T2).
37. Las 2 tareas de «Jugamos» son de tipo distinto; en «Recordamos» no hay dos seguidas del mismo tipo si hay otra del mismo grupo (T4).
38. Frases: 12 veces `sentido` con una palabra recorre las 4 frases sin repetir ninguna seguida; `ejemplo` alterna sí y no; `acaba` alterna sus 2 (T7).
39. Si del grupo que toca solo queda la última tarea hecha, se coge una del otro grupo (T6).

**`tests/test_hoy.js`**

40. Primer día: sin «Recordamos»; nuevas = observar y comparar (orden de `docs/semana-01.md`, no alfabético); «Jugamos» con esas dos y tareas de entender distintas.
41. La semana de ejemplo del apartado 11, día a día (mismas palabras en cada parte y mismos pasos el viernes).
42. Cupo diario: con el ajuste en 1 sale 1 nueva; si hoy ya se han presentado 2, ninguna (H3).
43. Cupo semanal: con 6 presentadas esta semana natural no sale ninguna aunque exista la semana 2; el lunes siguiente salen 2 de la semana 2 (H3).
44. `sep`: primero, después y finalmente salen en tres días distintos y en ese orden; el primer día van `primero` y `antiguo` (H3).
45. Sin palabras por presentar: la sesión tiene «Recordamos» y «Jugamos» y no da error.
46. «Jugamos» nunca repite una palabra que ha salido hoy en «Recordamos» (H4).
47. «Jugamos»: primero pendientes de la semana, luego presentadas antes de hoy, luego las menos valoradas; completa con pendientes de otras semanas (H4).
48. Sesión interrumpida: tras valorar 1 de 3 en «Recordamos», al montar otra vez no vuelve a salir la valorada (H8).
49. Segunda sesión el mismo día: sin palabra nueva y sin las ya valoradas hoy (H7).
50. Segundo significado: `ordenar` en «Recordamos» en el paso 3 lo enseña una vez; la siguiente vez ya no (H6).
51. Modo Docente: sesión de muestra (2 + 1 + 2) y `lexi.v1` idéntico antes y después (H9).
52. Familias: con los mismos datos, la misma sesión que en Docente (H10).
53. Simulación: 10 semanas de lunes a viernes, todo «casi todos», 2 nuevas por sesión → las 60 palabras acaban en «La usamos»; nunca más de 3 en «Recordamos», nunca más de 6 nuevas por semana natural y nunca más de 20 pendientes.

**`tests/test_datos.js`** (se añade)

54. Migración v3 → v4: cada palabra queda como si sus valoraciones guardadas se hubieran aplicado en orden con estas reglas; el historial queda idéntico; las no presentadas siguen en el paso 1.
55. Una copia de seguridad v3 se restaura y se migra igual.
56. Saneado v4: fechas mal escritas, caja fuera de 1-5 o cuentas negativas se corrigen sin perder el paso.
57. El día es el local: a las 00:30 de Madrid, `hoy()` da la fecha de Madrid, no la de UTC.

**`tests/humo.py`** (se amplía): pulsar «Hoy» y llegar al cierre valorando todo, sin errores en consola,
en claro y oscuro, a 390×844, 768×1024 y en horizontal; en Modo Docente, lo mismo sin guardar.

## 13. Datos de la Fase 3 (propuesta v4) y notas para quien programe

```js
perfil.pal[id] = {
  e, pres, val,          // como en v3; «val» queda solo como historial (bastan las 12 últimas)
  dA: [], dB: [],        // días buenos vigentes de entender y de usar, sin repetir (los 4 últimos)
  cam: '',               // día del último cambio de paso (E6)
  mal: '',               // día del último «pocos» (E8)
  caja: 1, prox: '',     // repaso: caja 1-5 y fecha de vuelta; prox '' = descansa (R6)
  u: { sentido: 3 },     // veces que se ha hecho cada tarea (T5, T7)
  ut: '',                // última tarea hecha (T3)
  ov: false              // segundo significado ya enseñado (H6)
};
perfil.ses = '';         // día de la última sesión «Hoy» terminada (H7)
ajustes.nuevas = 2;      // palabras nuevas por sesión: 1 o 2 (H3)
```

- **Migración v3 → v4** sin perder nada: para cada palabra presentada se parte de paso 2, caja 1 y
  vuelta al día siguiente de `pres`, y se aplican sus `val` en orden con la misma función de las
  reglas. `u` sale de contar `val` por tarea y `ut` es la última.
- **Fichas:** añadir `orden` (1 a 6, el de `docs/semana-NN.md`; hoy salen por orden alfabético de
  archivo) y, donde las notas de la semana dicen «en días distintos», una marca `sep` común (semanas
  3, 4, 5 y 8). Son campos técnicos: no cambian ningún texto.
- **Fecha:** `hoy()` usa ahora la fecha UTC; debe ser la local (test 57).
- **Funciones puras** con el día como parámetro: `valorarPalabra`, `pendientes`, `elegirTarea`,
  `montarHoy`. La pantalla solo las llama.
- `montarJuego` de la Fase 2 se sustituye por H4. `elige` debe coger sus otras 2 palabras entre las
  presentadas (T2).
- Al tocar datos y pantallas: subir la versión de `sw.js`.
- El muro de palabras lee `e` y nada más.
