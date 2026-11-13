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
   1. Escena: ilustración y texto corto que el docente lee (o la voz del navegador).
   2. La decimos todos, y otra vez con palmadas por sílabas.
   3. Explicación amigable.
   4. Gesto.
   5. Dos o tres contextos más.
3. **Jugamos** · 2 tareas con las palabras de la semana.
4. **Cierre** · la decimos por última vez y el docente valora con un toque.

Valoración del docente tras cada tarea de «Recordamos» y «Jugamos» (tres botones grandes):
**casi todos · la mitad · pocos**. Es opcional: si no toca nada, la tarea no cuenta como evidencia.

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

## 4. Escala única (de la clase, por palabra)

| Paso | Nombre | Se llega cuando… |
|---|---|---|
| 0 | Nueva | Aún no se ha presentado |
| 1 | La conocemos | Se ha presentado completa |
| 2 | La entendemos | «Casi todos» en tareas de comprender o reconocer, en **2 días distintos** posteriores a la presentación |
| 3 | La usamos | «Casi todos» en tareas de usar o relacionar, en **2 días distintos**, uno al menos 7 días después de la presentación |

- Nunca sube dos pasos el mismo día.
- «La mitad»: se queda donde está y vuelve pronto.
- «Pocos»: baja un paso (nunca por debajo de 1) y vuelve pronto.
- Acertar una vez no es saberla: por eso hacen falta días distintos y tareas distintas.

Representación visual: una planta o luz de 4 estados (se decide con la mascota), igual en la ficha,
el muro de palabras y la zona del tutor.

## 5. Repaso

- Cajas por días, como en Calculi: 1, 3, 7, 15 y 30 días.
- Pensado para el colegio: si pasan semanas sin sesión no hay castigo; lo pendiente se acumula y cada
  sesión toma como mucho 3 palabras, primero las más atrasadas.
- Cada repaso elige una tarea **distinta de la última** de esa palabra y, si puede, de la dimensión
  que le falta para subir de paso.
- El contexto también cambia: nunca la misma frase dos veces seguidas.

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
  rel: { parecida: [], contraria: [], familia: [] }
});
```

- **`id`**: sin tildes ni ñ y con guion si son dos palabras (`senalar`, `aspero`, `ser-vivo`).
- **`bloque`**: `pensar`, `como-son`, `sentir`, `convivir` (desde la semana 5) y `medio` (semana 10).
  Sirve para agrupar las palabras en «Explorar»; no cambia la sesión.
- **`ejemplos` según el tipo** (pendiente de decidir cómo se programa, ver `ESTADO.md`): en los
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
| 9 | compartir, colaborar, respetar | cuidadoso, distinto | paciente |
| 10 | ser vivo, alimento, paisaje | crecer, necesitar | estación |

## 9. Para más adelante

- Modo autónomo (2.º ciclo en adelante) y dominio por alumno.
- Resumen para Tabula (formato v2, que es por alumno).
- Explorar: mapas y familias de palabras proyectados.
- «La hemos encontrado»: la clase apunta cuándo oyó o usó la palabra fuera de la sesión.
- Paquete de 2.º, con familias de palabras, prefijos y sufijos sencillos.
