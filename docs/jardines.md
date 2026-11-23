# Lexi · Nuestros jardines (colección de plantas)

Propuesto por Iván el 23-11-2026, como las piedras de Calculi. **Diseño pendiente de su sí; no hay
nada programado.**

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
- **JA7. Lo que falta:** macetas con «?» o solo lo conseguido. **Lo decide Iván.** En el muro se
  decidió no enseñar huecos (regla MU1).
- **JA8. Modo Docente:** se ven todos los jardines completos y no se guarda nada.
- **JA9. Informe para familias:** una línea con las plantas del jardín. La hoja semanal no lleva nada
  (regla FA4).

## 3. Datos

```js
perfil.jar = { 1: ['s01', 's03'], 2: [] };   // semanas completas por curso, con su fecha si hace falta
```

- Versión de datos 6, con migración desde la 5: calcula las semanas que ya estén completas.
- Las fases no se guardan: salen de la cuenta (avances = semanas completas; planta = ⌊n/3⌋; fase = n mod 3).
- En la nube, con la fusión de siempre: se unen las listas y no se borra nada (como las piezas de 2.º).

## 4. Aviso importante

Hoy cada curso tiene **10 semanas de contenido**, es decir, 10 avances: 3 plantas completas y la cuarta
en brote. El jardín solo se llena si el curso llega a 30 semanas (decisión pendiente en `ESTADO.md`,
«Más adelante»). Las reglas valen igual en los dos casos.

## 5. Imágenes

**30 por jardín (180 en total).** Se piden de jardín en jardín; primero el de 1.º. Formato, guía y
petición en `docs/imagenes.md`, apartado «Jardines».

Ambientes propuestos: 1.º huerto · 2.º jardín de flores · 3.º desierto · 4.º bosque · 5.º selva ·
6.º jardín japonés.

## 6. Pasos (después del sí de Iván)

1. Datos v6, migración y cuenta de avances (JA1-JA4), con tests · Sonnet, esfuerzo medio.
2. Pantalla «Nuestros jardines» y aviso del cierre (JA5-JA9), prueba de humo · Sonnet, esfuerzo medio.
3. Imágenes del jardín de 1.º cuando Iván las envíe · Haiku, esfuerzo bajo.
