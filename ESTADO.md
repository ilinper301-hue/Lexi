# Plan de ejecución · Lexi

Si Iván escribe «Continúa», sigue por el primer paso sin marcar. Antes de cada tarea: una línea con
modelo + esfuerzo + motivo.

## Hecho antes de programar (13-11-2026, Fable)
- [x] Análisis pedagógico y decisiones (`docs/pedagogia.md`)
- [x] Contenido completo de la semana 1: 6 palabras (`docs/semana-01.md`)
- [x] Guía y primera petición de imágenes (`docs/imagenes.md`)
- [x] `CLAUDE.md`, `ECOSISTEMA.md` (copia idéntica) y este plan
- [x] **Contenido completo de las semanas 2 a 10: 54 palabras** (`docs/semana-02.md` … `docs/semana-10.md`),
  escritas con la lista borrador tal cual. Paquete de 1.º completo: 60 palabras.
- [x] Peticiones de imágenes 2 a 10 (`docs/imagenes.md`)
- [x] Comprobador de fichas: `node tools/validar-docs.js docs` (6 por semana, sílabas, definición de
  18 palabras como mucho, 2 sí + 2 no, 3 sí + 3 no, gestos sin repetir, escena que acaba en la palabra)

## Para decidir con Iván (salió al escribir las semanas 2 a 10)
Nada de esto está cambiado: son propuestas. Hasta que Iván conteste, se programa con lo que hay.

1. **`distinto` (semana 9) significa lo mismo que `diferente` (semana 3).** Está escrita, enfocada a
   «ya no es como antes». Propuesta: cambiarla por **`amable`**, que encaja con compartir, colaborar y
   respetar, y dejar «distinto» como palabra parecida de `diferente`. Si se cambia: reescribir una
   ficha y una fila de imágenes.
2. **`delicado` (semana 8) queda muy cerca de `frágil` (semana 1).** Se mantiene con el matiz «se
   estropea y pide suavidad». Alternativa si Iván prefiere algo más distinto: `flexible`.
3. **Pregunta de la tarea `ejemplo` según el tipo de palabra.** «¿Es o no es…?» no sirve para todo:
   - `enlace` (primero, después, finalmente): «¿Va primero?», «¿Es lo último?».
   - `nombre` (problema, pista, ser vivo…): hace falta artículo, «¿Es una pista?».
   - parejas (parecido, diferente, distinto): «¿Son parecidos?».
   - `necesario` y `necesitar`: «¿Es necesario?», «¿Lo necesita de verdad?».
   Propuesta técnica: campo opcional `pregunta` en la ficha; si falta, se usa la de siempre.
4. **Bloques nuevos** en las fichas: `convivir` (proteger, compartir, colaborar, respetar) y `medio`
   (las seis de la semana 10). Solo agrupan; no cambian la sesión.
5. **`ser vivo`**: la definición dice «muere» (ciclo de la vida, contenido de 1.º). Si Iván prefiere
   evitarlo: «Un ser vivo es todo lo que nace, crece y se alimenta: personas, animales y plantas».
6. La semana 5 no tiene palabra de «sentir» (lleva `proteger`) y la 10 es entera de Conocimiento del
   Medio. Es así en la lista; solo se avisa.

## Fase 0 · Identidad · Sonnet, esfuerzo medio
- [x] Subir al repositorio los documentos de la carpeta `repo/` del proyecto de Claude (13-11-2026).
  `ECOSISTEMA.md` se copió del repo `tabula`. **Desde ahora manda el repo**, no la copia del proyecto.
- [x] Mascota y paleta elegidas por Iván (14-11-2026): bocadillo coral (imagen suya, sin piernas) y corales #ED7468 / #F2B4A9. Piezas en `img/mascota/` (cuerpo, brazo, css, demo.html); iconos en `icons/` (fondo #FFF1EC). Falta enlazarlos en manifest y en la pantalla de inicio (Fase 1).
- [x] Dibujo de la escala de 4 pasos (14-11-2026): bocadillo de Lexi que crece y se llena (opciones 1+2). Componente `escalaSVG(paso)` y `escalaFila()` en `src/js/15-escala.js`; de momento se ve en el inicio como vista previa

## Fase 1 · Esqueleto · Sonnet, esfuerzo medio
- [x] Base de Calculi copiada y adaptada (14-11-2026): `tools/build.py`, `sw.js` (`lexi-pwa-1`), manifest (`lexi-app`), `fonts/`, `src/` con paleta, tema y arranque
- [x] Tema claro y oscuro con la paleta coral; mascota animada en el inicio; iconos enlazados (14-11-2026)
- [x] Perfiles Familias y Docente (14-11-2026): clase (Docente) o niño con animal de los 30 de Calculi (Familias). Se crean y se eligen; **renombrar y borrar irán en la zona del tutor (con PIN)**. `src/js/20-datos.js` y `src/js/40-inicio.js`
- [x] Guardado en `lexi.v1` con migración versionada (14-11-2026): sanea al leer, copia en `lexi.bk` si el JSON está roto, no pisa datos de una versión más nueva. `node tests/test_datos.js` (11 pruebas)
- [x] Zona del tutor con PIN, Modo Docente, copia de seguridad en JSON (14-11-2026). PIN de 4 cifras (5 min de gracia, en `lexi.v1` ajustes); el candado de arriba abre la zona. Dentro: renombrar, cambiar animal y borrar perfiles (con confirmación), Modo Docente (degradado común, no guarda), guardar/restaurar copia (`lexi-copia-AAAA-MM-DD.json`; antes de restaurar lo anterior se guarda en `lexi.bk`), cambiar PIN. Si se olvida el PIN: restaurar una copia (trae su PIN); nunca «borrar datos del sitio». `src/js/50-tutor.js`, `12-iconos.js`. Tests: `node tests/test_datos.js` (20) y `tests/humo.py` (recorrido completo)
- [x] Tests con Node y prueba de humo (perfil, PIN, zona del tutor; claro y oscuro; 390×844, 768×1024 y horizontal) (14-11-2026)
- [x] GitHub Pages activado por Iván (14-11-2026); pendiente que Iván confirme que se ve en el móvil: https://ilinper301-hue.github.io/Lexi/

## Fase 2 · Prototipo: semana 1 · Sonnet, esfuerzo medio
- [x] Semana 1 pasada a `src/js/palabras/s01-<id>.js` (14-11-2026), sin cambiar ni una palabra. `src/js/05-palabras.js` define `PALABRA`, `PALABRAS` y `palabraPorId`; `tools/build.py` incluye la carpeta. Reglas de las fichas en `tools/reglas-ficha.js` (las usan `tools/validar-docs.js` y el test). Test: `node tests/test_contenido.js` (40 comprobaciones: reglas, imagen que existe y pesa <90 KB, y que la ficha es idéntica a `docs/semana-01.md`). Las semanas 2 a 10 se pasan cuando Iván las revise: basta copiar cada bloque a `s02-<id>.js`… y el test las valida solo
- [x] Imágenes de la petición 1 subidas a `img/palabras/` (14-11-2026): observar, comparar, ordenar, enorme, fragil, curioso (webp 1200×900, <90 KB). `fragil` está recortada a 4:3 y pierde los pies
- [x] Presentación de la palabra nueva en pantalla grande (14-11-2026): desde la casa del perfil, «Palabras de la semana 1» (6 tarjetas con imagen y su paso de la escala) → 9 pasos con «Siguiente»: escena, la decimos, palmadas (sílabas), explicación, gesto y 3 contextos, y final. Al llegar al final la palabra pasa a «La conocemos» (no baja nunca; en Modo Docente no guarda). `src/js/45-semana.js`. Datos a **v2**: `perfil.pal = {id: {e, pres}}` con migración desde v1 (`lexi.v1`); tests en `tests/test_datos.js` (26) y `tests/humo.py`. El segundo significado (`otro`) NO sale aquí: irá en una sesión de otro día. Pendiente: que Iván la pruebe en clase
- [x] Tareas `sentido`, `ejemplo`, `elige`, `acaba` y `habla` (14-11-2026): botón «Jugamos» en las palabras de la semana (solo sale si hay palabras presentadas; en Modo Docente, todas). Monta 2 tareas con las palabras con menos valoraciones, y cada una con una tarea distinta de su última y de la otra. `sentido`/`ejemplo`/`elige` tienen «Ver la respuesta»; `acaba`/`habla` no. `ejemplo` pregunta siempre «¿Es un ejemplo de «palabra»?» (sirve para todos los tipos; el campo `pregunta` opcional sigue pendiente, punto 3 de «Para decidir»). `elige` enseña la imagen y 3 palabras numeradas. `src/js/48-tareas.js`. Tests: `node tests/test_tareas.js` (7) y `tests/humo.py`
- [x] Valoración del docente: casi todos · la mitad · pocos (14-11-2026). Opcional («Seguir sin valorar» no guarda). Datos a **v3**: `perfil.pal[id].val = [{d, t, v}]` (últimas 30), con migración desde v2. De momento solo se apunta: **no sube el paso de la escala** (Fase 3). `sw.js` → `lexi-pwa-4`
- [x] Sin voz del navegador (decisión de Iván, 14-11-2026): la app solo muestra texto y el docente lo lee y lo explica
- [ ] Iván lo prueba en clase; apuntar aquí lo que haya que cambiar

## Fase 3 · Repaso y escala · Sonnet, esfuerzo alto
- [ ] Escala única de 4 pasos con las reglas de `docs/pedagogia.md` (apartado 4) y sus tests
- [ ] Repaso por días (1, 3, 7, 15, 30) que cambia de tarea y de contexto
- [ ] Botón «Hoy»: monta la sesión sola (recordamos, palabra nueva, jugamos, cierre)
- [ ] Muro de palabras de la clase con el paso de cada una

## Fase 4 · Contenido de 1.º y 2.º · Fable u Opus, esfuerzo alto
- [x] Escribir las semanas 2 a 10 (54 palabras) y sus peticiones de imágenes (13-11-2026, Fable)
- [ ] **Iván revisa las semanas 2 a 10** (palabras y fichas) y contesta a «Para decidir con Iván»
- [ ] Revisión independiente de las 54 fichas por otro modelo que no las haya escrito (Sonnet,
  esfuerzo medio): frases que un niño de 6 años no entienda, no-ejemplos dudosos, gestos que se
  confundan entre semanas. Solo propone; los cambios los aprueba Iván.
- [ ] Aplicar los cambios que pida Iván y pasar las semanas 2 a 10 a `src/js/palabras/`
- [ ] Paquete de 2.º: **Iván revisa la lista borrador** (`docs/lista-2-borrador.md`, propuesta de Fable
  del 13-11-2026, sin fichas escritas)
- [ ] Paquete de 2.º: contenido de las 60 palabras y tareas `relaciona` y `familia`

## Fase 5 · Aula · Sonnet, esfuerzo medio
- [ ] Muro de palabras y tarjetas para imprimir
- [ ] «La hemos encontrado»
- [ ] Palabras de la semana para las familias (informe imprimible)
- [ ] Explorar: mapa de palabras proyectado
- [ ] Pantalla completa y atajos de teclado o mando en la sesión

## Fase 6 · Nube y ecosistema · Fable u Opus, esfuerzo alto
- [ ] Firebase opcional: colección `lexico/{uid}`, subcolección `alu` (un documento por perfil), fusión como Calculi
- [ ] Reglas en `tabula/firestore.rules` (cada docente, solo lo suyo)
- [ ] Añadir Lexi a la tabla de `ECOSISTEMA.md` (copia de `tabula`) y copiarlo a todos los repos

## Más adelante
- [ ] Modo autónomo y dominio por alumno
- [ ] «Traer mi clase de Tabula» y resumen en `lexi.tabula` (formato v2)
