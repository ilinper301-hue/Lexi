# Lexi · Nuestros jardines (colección de plantas)

Propuesto por Iván el 23-11-2026, como las piedras de Calculi. **Diseño aprobado por Iván el 23-11-2026.**

## 1. La idea

- **6 jardines, uno por curso** (1.º a 6.º). Cada perfil ve el jardín de su curso (`perfil.curso`,
  `docs/segundo.md`, apartado 5) y, desde «Nuestros jardines», también los de cursos anteriores que tenga
  empezados.
- **10 plantas por jardín y 3 fases por planta: 30 avances**, uno por semana completa.
- Fases: **1 brote · 2 crecida · 3 con flor o fruto**.
- Es de la clase (o del niño en Familias). Sin puntos, vidas ni rachas.

## 2. Reglas (JA)

- **JA1. Semana completa:** las 6 palabras de esa semana del curso están en «La usamos».
- **JA2. Cada semana completa es un avance:** la planta que está creciendo sube una fase. Al llegar a
  la fase 3, la siguiente planta aparece como brote. El orden de las plantas es fijo.
- **JA3. No se pierde nunca.** Si después una palabra baja de paso, la semana sigue contando.
- **JA4. No importa el orden:** cuenta el número de semanas completas, no cuáles.
- **JA5. Cierre de «Hoy»:** si ha habido avance, aviso grande con la mascota: «¡Ha crecido el
  girasol!» o «¡Planta nueva en el jardín!». Si hay varios avances a la vez, un solo aviso.
- **JA6. Pantalla «Nuestros jardines»** desde la casa del perfil: plantas conseguidas en su fase, la
  que está creciendo con su fase y la cuenta de semanas que le faltan. Al tocar una planta se ven las
  semanas que la han hecho crecer.
- **JA7. Lo que falta:** macetas con «?» o solo lo conseguido. **Decidido por Iván (23-11-2026): macetas con «?»**
  para las plantas aún sin conseguir. Es una excepción a la regla MU1 del muro, que no enseña huecos.
- **JA8. Modo Docente:** se ven todos los jardines completos y no se guarda nada.
- **JA9. Familias:** la hoja semanal no lleva nada del jardín (regla FA4). Hoy no existe un informe de
  progreso para las familias; si se crea, llevará una línea con las plantas.

## 3. Datos

```js
perfil.jar = { 1: [1, 3, 4] };   // semanas completas ya apuntadas, por curso, de menor a mayor (30 como mucho)
```

- **Campo opcional, sin subir la versión de datos** (como `rst`): un perfil sin jardín queda igual que antes y
  no hace falta migrar. Las semanas que ya estén completas se apuntan la primera vez que se termina «Hoy».
- Las fases no se guardan: salen de la cuenta (n avances; planta i con fase = n − 3i, entre 0 y 3).
- Se apunta al terminar «Hoy» (`terminarSesionHoy`). La pantalla y el aviso cuentan también lo completado y aún sin apuntar.
- En la nube viaja dentro del perfil (no cambian las reglas de Firebase) y se **unen** las listas de los dos
  dispositivos: no se pierde ninguna semana. Un lado restaurado desde una copia manda (BO2).
- Código: `35-jardin.js` (cuenta y aviso), `47-jardin.js` (pantalla y aviso del cierre). Tests: `tests/test_jardin.js`.

## 4. Aviso importante

Hoy cada curso tiene **10 semanas de contenido**, es decir, 10 avances: 3 plantas completas y la cuarta
en brote. El jardín solo se llena si el curso llega a 30 semanas (decisión pendiente en `ESTADO.md`,
«Más adelante»). Las reglas valen igual en los dos casos.

## 5. Imágenes

**30 por jardín (180 en total).** Se piden de jardín en jardín; primero el de 1.º. Formato, guía y
petición en `docs/imagenes.md`, apartado «Jardines».

Ambientes propuestos: 1.º huerto · 2.º jardín de flores · 3.º desierto · 4.º bosque · 5.º selva ·
6.º jardín japonés.

## 6. Pasos

1. [x] Datos (`jar`), cuenta de avances y fusión (JA1-JA4), con tests (23-11-2026, Sonnet).
2. [x] Pantalla «Nuestros jardines», aviso del cierre y tarjeta en la casa (JA5-JA8), con prueba de humo (23-11-2026).
3. [ ] Imágenes del huerto de 1.º: **girasol hecho**; faltan 9 plantas. Hasta que lleguen, esas plantas se
   dibujan con la planta de la escala. Al subir cada una, añadirla a `IMG_JARDIN` en `src/js/35-jardin.js`.
4. [ ] Jardines de 2.º a 6.º: cuando existan sus paquetes (añadir el jardín a `JARDINES`).
