# Lexi

App web (PWA) de **vocabulario** para Primaria. Empieza por el primer ciclo (1.º y 2.º) con
**sesiones guiadas por el docente en la pizarra digital para toda la clase**. El aprendizaje autónomo
llegará más adelante. Forma parte del ecosistema de Iván junto a Lectori, Barri y Calculi.

Se publica en GitHub Pages: `https://ilinper301-hue.github.io/Lexi/` (lo que se sube a `main` es lo
que ven los usuarios).

## Sobre mí y cómo quiero trabajar
- Soy maestro de Primaria; no sé programar y trabajo solo desde el móvil.
- Responde siempre en español, breve y por partes. Explica los cambios en lenguaje sencillo y dime qué tengo que probar.
- Cosas pequeñas: hazlas y pruébalas sin preguntar. Cambio grande: plan en pocas líneas y espera mi sí.
- No cambies diseño, textos ni contenido pedagógico sin pedírmelo; propón mejoras aparte.
- Commits pequeños con mensaje claro en español, directos a `main`.

## Ahorro de tokens y elección de modelo
- Busca antes de leer; nunca leas `index.html` (es generado). Edita con cambios puntuales.
- Al terminar: 1-2 frases con el resultado y qué archivos cambiaste.
- Antes de cada tarea: modelo + esfuerzo + motivo. Empieza por el más barato y sube solo si falla.
- **Haiku**: textos, colores, estilos, iconos. **Sonnet**: casi todo. **Opus o Fable**: arquitectura, diseño pedagógico, contenido de las palabras y Firebase.
- Avísame cuando convenga abrir un chat nuevo, con un resumen de 5-8 líneas y el modelo recomendado.
- Mantén `ESTADO.md` al día: es el puente entre chats.

## Lo que no se cambia sin preguntar (pedagogía)
Lee `docs/pedagogia.md` antes de tocar sesiones, tareas, escala o contenido.
- La sesión la guía un adulto; el progreso se guarda **por clase** (o por niño en Familias), no por alumno.
- Una sola escala de 4 pasos por palabra: Nueva, La conocemos, La entendemos, La usamos. Solo sube con evidencia en días distintos.
- El repaso cambia de tarea y de contexto cada vez.
- Sin puntos, vidas, cronómetro ni rachas.
- 6 palabras por semana, escritas con las normas de `docs/pedagogia.md` (modelo: `docs/semana-01.md`).
- Las imágenes las genera Iván: se le piden con `docs/imagenes.md`; nunca se inventan ni se descargan.

## Reglas del ecosistema
1. **Mismo dominio** (`ilinper301-hue.github.io`): `localStorage` compartido (unos 5 MB entre todas).
   - Todas las claves con prefijo `lexi.` (`lexi.v1`, `lexi.fb`, `lexi.sync.uid`, `lexi.sync.t`, `lexi.bk`, `lexi.wel`, `lexi.th`).
   - Nunca escribir ni borrar claves de otras apps. Nunca aconsejar «borrar datos del sitio».
   - Caché del service worker `lexi-pwa-N`; borrar solo las `lexi-pwa-*`.
   - `manifest.webmanifest` con `id` `lexi-app`, `start_url` y `scope` = `./`.
   - Las imágenes van en la caché del service worker, nunca en `localStorage`.
2. **Firebase opcional**: proyecto `mis-apps-educativas`, SDK compat `10.12.2`, inicio con Google.
   Colección `lexico/{uid}`, subcolección `alu` (un documento por perfil), mismo patrón de fusión que
   Calculi. Reglas en `tabula/firestore.rules`.
3. **`ECOSISTEMA.md`** es el contrato común: léelo y cúmplelo. Manda la regla 0: Lexi funciona entera
   por separado; las familias no ven nada del ecosistema.
4. **Diseño**: zona infantil con Fredoka, botones grandes (mínimo 44 px), textos cortos; zona del
   tutor sobria con Inter. Fuentes desde `fonts/`. Tema claro y oscuro. Colores en variables CSS, en
   un solo sitio. Paleta distinta de Lectori (verde azulado), Barri (morado y naranja) y Calculi
   (amarillo y azul marino). Como la sesión se proyecta, todo debe leerse desde el fondo de la clase.
5. **Mismas piezas**: perfiles Familias y Docente, zona del tutor con PIN, Modo Docente (todo abierto,
   sin guardar) con el degradado común, copia de seguridad en JSON, modo proyector, informe para familias.
6. **Datos de menores**: no se envía nada a servicios nuevos sin preguntarme. Si cambia la estructura
   de datos, migración: nunca se pierde el progreso.

## Estructura (igual que Calculi, repo `ilinper301-hue/Calculi`)
- `src/estilos.css`, `src/index.template.html`, `src/js/` (archivos numerados) y `src/js/palabras/sNN-id.js` (una palabra por archivo).
- `tools/build.py` une todo en `index.html`. No editar `index.html` a mano.
- `img/palabras/<id>.webp`, `sw.js`, `manifest.webmanifest`, iconos, `fonts/`.
- `tests/`: contenido (todas las fichas completas y con su imagen), lógica (escala y repaso) y prueba de humo.
- `docs/`: `pedagogia.md`, `semana-NN.md`, `imagenes.md`.

## Cómo probar
`python3 tools/build.py && python3 -m http.server`. Sin errores en consola, en claro y oscuro, a
390×844 y 768×1024, y en horizontal como en la pizarra. Si cambia algo para móviles instalados, sube
la versión de `sw.js`.
