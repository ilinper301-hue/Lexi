# Lexi · diseño de la Fase 6 (nube y ecosistema)

Diseño del 15-11-2026 (Fable, esfuerzo alto). **Nada está programado ni cambia ninguna ficha ni
ninguna regla pedagógica.** Lo marcado con *(decidir)* espera el sí de Iván (puntos 24 a 28 de
`ESTADO.md`).

Se ha leído antes: `ESTADO.md`, `ECOSISTEMA.md`, `docs/pedagogia.md` (apartado 13), `docs/aula.md`
(apartado 8), `tabula/firestore.rules` y, de Calculi, `src/js/52-cuenta.js`, `docs/firebase.md` y
`tests/test_sync.js`.

## 1. Ideas que guían el diseño

1. **La cuenta es un añadido.** Sin cuenta de Google y sin conexión, Lexi hace exactamente lo mismo
   que hoy (regla 0 del ecosistema). Quien no entra con Google no carga nada de Firebase: ni una
   sola petición sale del dispositivo.
2. **Igual que Calculi por fuera.** Mismo proyecto, mismo SDK, misma forma de guardar (un documento
   de ajustes y un documento por perfil), misma tarjeta «Cuenta» en la zona del tutor.
3. **Distinto en una cosa, a propósito.** En Calculi cada documento es un alumno y, si dos
   dispositivos lo cambian, gana entero el más reciente. En Lexi un documento es **toda la clase,
   todo el curso**: perderlo entero por cambiarle el nombre desde el móvil sería grave. Por eso
   dentro de cada perfil se fusiona **palabra a palabra** *(decidir, punto 24)*.
4. **Nunca se pierde el progreso.** Ninguna pregunta de la app tiene una respuesta que borre datos
   sin dejar copia.

## 2. Qué sale del dispositivo (solo si se entra con Google)

| Dato | Ejemplo | ¿Es de un menor? |
|---|---|---|
| Nombre de cada clase | «1.º A» | No |
| Nombre y animal de cada niño (solo perfil Familias) | «Lucía», 🦊 | Sí: nombre de pila |
| Progreso por palabra | paso de la escala, valoraciones, repaso | De la clase: no. Del niño en Familias: sí |
| Ajustes | PIN, palabras nuevas por sesión, pregunta de «La hemos encontrado» | No |

No viaja: el tema claro u oscuro, qué perfil está abierto, nada del Modo Docente, ninguna imagen.
En el perfil Docente **no hay nombres de alumnos** (el progreso es de la clase).
El servicio es el mismo que ya usan Lectori, Barri y Calculi (`mis-apps-educativas`): no es un
servicio nuevo.

## 3. Dónde se guarda

Firestore, igual que Calculi cambiando el nombre de la colección:

- `lexico/{uid}` → `{ meta, ts, v }`. `meta` es un texto JSON:
  `{ aj: { pin, nuevas, preg }, gmt, del: { idPerfil: fecha } }`.
- `lexico/{uid}/alu/{idPerfil}` → `{ d, mt, v }`. `d` es el texto JSON del perfil (clase o niño),
  tal como está en `lexi.v1`; `mt`, su última modificación; `v`, la versión de datos de Lexi.

Tamaño: una clase con 120 palabras ocupa unos 90 KB (el tope de Firestore es 1 MB por documento).
Un docente con 3 clases gasta al día una mínima parte de la cuota gratuita.

En el dispositivo, solo claves `lexi.`:

| Clave | Para qué |
|---|---|
| `lexi.v1` | Los datos de siempre, con las marcas nuevas del apartado 9 |
| `lexi.fb` | `1` si este dispositivo está conectado a una cuenta (`r` mientras vuelve de Google) |
| `lexi.sync.uid` | La última cuenta con la que se sincronizaron estos datos. **No se borra al cerrar sesión** (regla PV4) |
| `lexi.sync.t` | Cuándo fue la última sincronización |
| `lexi.bk` | La copia de «por si acaso» que ya existe |

## 4. La cuenta (reglas CU)

- **CU1.** La tarjeta «Cuenta» vive en la **zona del tutor** (detrás del PIN), igual para Docente y
  Familias. Texto: «Entra con tu cuenta de Google para guardar el progreso en la nube y tenerlo
  igual en todos tus dispositivos».
- **CU2.** *(decidir, punto 26)* En la pantalla de inicio, **solo cuando aún no hay ningún
  perfil**, un enlace discreto: «Ya uso Lexi en otro dispositivo». Lleva a entrar con Google y
  baja las clases sin tener que crear antes un PIN de mentira. Si hay perfiles, no sale.
- **CU3.** Firebase solo se carga si `lexi.fb` vale `1` o al tocar «Entrar con Google». Si no hay
  red, la carga falla en silencio y la app sigue.
- **CU4.** Inicio con ventana de Google y, si el navegador no deja, con redirección (como Calculi).
- **CU5.** La sesión de Google es **común a todas las apps de ese dispositivo** (comparten
  dirección). Consecuencias:
  - Si ya se entró en Calculi o Tabula, «Entrar con Google» en Lexi conecta al instante, sin
    ventana. Aun así Lexi no sincroniza hasta que se toca el botón (CU3).
  - «Cerrar sesión» en Lexi la cierra también en las otras apps de ese dispositivo. Ya pasa hoy
    en Calculi. El botón lo avisa: en Docente, «Se cierra también en tus otras apps de aula de
    este dispositivo»; en Familias, solo «Se cierra tu sesión de Google en este dispositivo»
    (las familias no ven el ecosistema).
- **CU6.** *(decidir, punto 27)* Al cerrar sesión se pregunta: **«Dejar las clases en este
  dispositivo»** (como Calculi) o **«Quitarlas de aquí»** (siguen en la cuenta). La segunda es
  para ordenadores compartidos del colegio: si se quedan, cualquiera puede tocar la clase y esos
  cambios subirían a la cuenta al volver a entrar. «Quitarlas» solo se ofrece si la
  sincronización de ese momento ha salido bien; no deja marcas de borrado.
- **CU7.** Una sesión anónima (la del asistente o de una encuesta de Tabula) **no es una cuenta**:
  Lexi la trata como «sin entrar» y no sincroniza con ella.
- **CU8.** La tarjeta enseña: nombre y correo, «Última sincronización: hace 5 min», «Sincronizar
  ahora», «Cerrar sesión» y «Los datos se guardan de forma privada: solo tu cuenta puede leerlos».
  Los errores se dicen en una frase y nunca tapan la app.

## 5. Cuándo se sincroniza (reglas SI)

- **SI1.** Al abrir la app (si está conectada y hay red) y nada más entrar con Google.
- **SI2.** 15 segundos después de cada guardado.
- **SI3.** **En el cierre de «Hoy», al momento**: en clase se cierra el navegador justo después.
- **SI4.** Al ocultar o cerrar la app, al volver la conexión y con «Sincronizar ahora».
- **SI5.** En Modo Docente no se sincroniza el progreso (no se guarda); los ajustes sí.
- **SI6.** Si se guarda algo mientras una sincronización está en marcha, se lanza otra al acabar
  (en Calculi ese cambio espera al siguiente guardado).
- **SI7.** **Nunca se repinta la pantalla en mitad de una sesión, tarea o presentación.** Lo que
  llega de la nube se guarda y se ve al volver al inicio, a la casa del perfil, al muro o a la
  zona del tutor. Una sesión «Hoy» ya montada no cambia aunque lleguen datos.
- **SI8.** Si los datos del dispositivo son de una versión más nueva que la app (`EST.bloq`), no
  se sincroniza.

## 6. La fusión (reglas FU)

Lo que es igual que Calculi:

- **FU1.** Ajustes: gana el `gmt` más reciente. Diferencia: `gmt` solo cambia cuando cambia un
  ajuste, no con cada guardado.
- **FU2.** Borrados: un perfil borrado queda en `del` con su fecha. Si la fecha del borrado es
  igual o posterior al último cambio del perfil en los dos lados, desaparece de todas partes y no
  resucita. Si alguien lo cambió después de borrarlo, sobrevive. `del` guarda como mucho los 200
  borrados más recientes.
- **FU3.** Un perfil que solo está en un lado se copia al otro.

Lo que cambia *(decidir, punto 24)*:

- **FU4.** Si un perfil está en los dos lados con `mt` distinto, se fusiona así:
  - nombre y animal: los del lado con `mt` más reciente;
  - **cada palabra, entera, del lado donde se tocó más tarde** (marca `m` por palabra). Una palabra
    no se mezcla campo a campo: su paso, sus días buenos y su repaso van juntos y siempre salen
    de un mismo dispositivo, así que las reglas E y R se siguen cumpliendo;
  - empate de `m`: la que tenga más valoraciones; si siguen igual, la del dispositivo;
  - «La hemos encontrado» (`enc`): la cuenta mayor de cada tipo y el día más reciente (lo previsto
    en `docs/aula.md`, apartado 8);
  - `ses` (última sesión «Hoy»): el día más reciente. Fecha de creación: la más antigua.
- **FU5.** Reloj: cada cambio se marca con `m = el mayor entre la hora del dispositivo y la última
  marca vista + 1`. Así un cambio hecho después de sincronizar siempre gana, aunque el ordenador
  del aula tenga la hora mal puesta.
- **FU6.** Un documento de la nube que no se puede leer se salta: ni se borra ni se pisa (salvo
  que el dispositivo tenga ese mismo perfil más reciente).
- **FU7.** La sincronización nunca borra un perfil por falta de sitio. El tope de 40 perfiles solo
  impide crear nuevos.

**Límite que se acepta:** si la misma palabra se valora en dos dispositivos sin conexión entre
ambos, cuenta la valoración más reciente y la otra se pierde (solo esa palabra). No se puede
rehacer la historia porque solo se guardan las últimas valoraciones.

## 7. La primera vez en un dispositivo (reglas PV)

«Primera vez» = la cuenta que entra no es la de `lexi.sync.uid`.

- **PV1.** Dispositivo vacío (sin perfiles) → **baja** lo de la cuenta, con sus ajustes y su PIN.
  Sin preguntar.
- **PV2.** Cuenta vacía y datos del dispositivo que nunca fueron de otra cuenta → **sube**. Sin
  preguntar.
- **PV3.** *(decidir, punto 25)* En cualquier otro caso, una pantalla propia (no un aviso del
  navegador) que enseña qué hay en cada lado («En tu cuenta: 1.º A, 23 palabras. En este
  dispositivo: Prueba, 2 palabras») y tres botones:
  - **«Juntar»** (recomendado): quedan los perfiles de los dos lados. Si dos tienen el mismo
    identificador (vienen de la misma copia de seguridad), se fusionan con FU4. Si solo coincide
    el nombre, se quedan los dos y el del dispositivo pasa a llamarse «1.º A (2)»; el docente
    borra el que sobre.
  - **«Usar solo lo de la cuenta»**: lo del dispositivo se guarda antes en `lexi.bk` y se
    sustituye. No deja marcas de borrado.
  - **«Ahora no»**: se cierra la sesión y no cambia nada.
  Calculi pregunta «bajar o subir» y una de las dos respuestas borra un lado; aquí ninguna borra
  sin copia. «Subir y sustituir la cuenta» no se ofrece: se consigue juntando y borrando.
- **PV4.** Si vuelve a entrar la misma cuenta, no se pregunta nada: fusión normal.

## 8. Borrar, restaurar y versiones (reglas BO y VE)

- **BO1.** *(decidir, punto 28)* Borrar un perfil con sesión iniciada lo borra de la cuenta y de
  los demás dispositivos. La confirmación lo dice: «Se borrará también de tu cuenta y de tus
  otros dispositivos».
- **BO2.** *(decidir, punto 28)* Restaurar una copia de seguridad con sesión iniciada: **la copia
  manda en todas partes**. Sus perfiles y palabras se marcan como recién cambiados, se quitan de
  `del`, y los perfiles que había y no están en la copia se borran. La pantalla lo avisa:
  «También cambiará en tus otros dispositivos». Lo anterior sigue yendo a `lexi.bk`.
  Sin esta regla, la nube desharía la restauración en la siguiente sincronización.
- **VE1.** Cada documento lleva `v`. Si en la nube hay algo de una versión **más nueva** que la
  app, ese dispositivo no sube ni baja nada y la tarjeta dice «Actualiza Lexi en este dispositivo
  para sincronizar». Evita que una app instalada sin actualizar estropee datos nuevos.
- **VE2.** Lo que llega de una versión anterior pasa por la misma migración que los datos del
  disco (`limpiar`), y todo lo que llega de la nube se sanea con ella antes de usarse.

## 9. Qué cambia en los datos

```js
EST.gmt = 0;             // último cambio de ajustes (FU1)
EST.del = {};            // { idPerfil: fecha del borrado } (FU2)
perfil.mt = 0;           // último cambio del perfil
perfil.pal[id].m = 0;    // último cambio de esa palabra (FU4)
```

- **Migración** sin perder nada: lo que ya existe recibe `0` («sin cambios desde que hay nube»).
  Si la v4 de la Fase 3 aún no está programada, estas marcas entran en ella; si ya lo está, una
  versión más con su migración.
- **Un solo sitio para marcar:** una función `tocar(perfil, idPalabra)` que pone `m` y `mt`
  (regla FU5). La llaman presentar, valorar, «La hemos encontrado» y la corrección a mano.
  Renombrar y cambiar animal marcan solo `mt`. `guardarAjustes` marca `gmt`.
- **Copia de seguridad:** las marcas viajan en el JSON. `gmt` y `del` también.
- **Funciones puras**, sin red y con la hora como parámetro: `fusionarPerfil(a, b)`,
  `fusionarTodo(local, remoto, modo)`. `syncNow` solo lee, las llama y escribe.

## 10. Reglas de Firestore

Se añaden a `tabula/firestore.rules` (el archivo completo del proyecto), delante de `// ----------
Tabula ----------`:

```
    // ---------- Lexi ----------
    // lexico/{uid}: {meta, ts, v} y lexico/{uid}/alu/{id}: {d, mt, v}. Cada docente o familia, solo lo suyo.
    match /lexico/{uid} {
      function dueno() {
        return request.auth != null && request.auth.uid == uid
          && request.auth.token.firebase.sign_in_provider != 'anonymous';
      }
      allow read, delete: if dueno();
      allow create, update: if dueno()
        && request.resource.data.keys().hasOnly(['meta', 'ts', 'v'])
        && request.resource.data.meta is string && request.resource.data.meta.size() <= 20000
        && request.resource.data.ts is number && request.resource.data.v is int;

      match /alu/{id} {
        allow read, delete: if dueno();
        allow create, update: if dueno()
          && request.resource.data.keys().hasOnly(['d', 'mt', 'v'])
          && request.resource.data.d is string && request.resource.data.d.size() <= 300000
          && request.resource.data.mt is number && request.resource.data.v is int;
      }
    }
```

Son algo más estrictas que las de Barri, Lectori y Calculi: no valen las sesiones anónimas y hay
un tamaño máximo, para que nadie pueda llenar la base de datos. No tocan las reglas de ninguna
otra app. **Orden obligatorio:** primero Iván publica las reglas, después se sube el código.
El dominio `ilinper301-hue.github.io` ya está autorizado por las otras apps.

Este texto es una propuesta sin probar: se comprueba en el paso 6.2 con el simulador de reglas de
la consola de Firebase (leer lo propio: sí; leer lo de otro: no; sin entrar: no; anónimo: no;
documento con un campo de más: no).

## 11. Ecosistema

- **Tabla del apartado 1 de `ECOSISTEMA.md`**, fila nueva:
  `| Lexi | Docente (a la vista del alumnado) y familias | Vocabulario | /Lexi/ | lexi. |`
  y «idéntico en los **siete** repositorios» (se añade Lexi a la lista). Se cambia en la copia de
  `tabula` y se copia tal cual a los otros seis el mismo día. No sube la versión del contrato.
- **Apartado 4**, fila: `| Lexi | lexi.tabula | Espera al modo autónomo (el progreso es de la clase, no del alumno) |`.
- **No se hace ahora:** «Traer mi clase de Tabula», el resumen `lexi.tabula` y la nube común
  (`apps/eco/...`). Lexi no lee ni escribe ninguna clave de otra app.
- `docs/firebase.md` en Lexi, corto, como el de Calculi.

## 12. Tests que deben pasar (siguen a los 93 anteriores)

Con dos «dispositivos» y un Firestore simulado, sin red (como `tests/test_sync.js` de Calculi):

94. Nube vacía: el dispositivo A sube sus perfiles y sus ajustes (PV2).
95. B vacío entra con la misma cuenta: baja todo, con el PIN, sin preguntar (PV1).
96. A valora `observar` y B valora `comparar` de la misma clase sin sincronizar entre medias: tras
    sincronizar los dos, ambas valoraciones están en los dos (FU4).
97. B cambia el nombre de la clase después de que A haga una sesión: queda el nombre de B y el
    progreso de A (FU4).
98. La misma palabra cambiada en los dos: queda entera la más reciente; no se mezclan campos (FU4).
99. Empate de `m`: gana la que tiene más valoraciones (FU4).
100. `enc`: A tiene oída 5 y B oída 4 y vista 2 → oída 5, vista 2 (FU4).
101. B borra una clase: desaparece de la nube y de A, y queda en `del` (FU2).
102. Un perfil borrado no resucita aunque A lo tenga con una marca anterior al borrado (FU2).
103. Un perfil cambiado después de su borrado sobrevive (FU2).
104. Ajustes: gana el `gmt` más reciente; guardar progreso no mueve `gmt` (FU1).
105. Reloj atrasado: un cambio hecho tras sincronizar gana aunque la hora del dispositivo sea
     anterior (FU5).
106. Primera vez con datos en los dos lados, «Juntar»: están todos los perfiles; dos con el mismo
     nombre quedan como «1.º A» y «1.º A (2)»; dos con el mismo id quedan fusionados (PV3).
107. «Usar solo lo de la cuenta»: lo anterior está en `lexi.bk` y `del` no cambia (PV3).
108. «Ahora no»: ni el dispositivo ni la nube cambian (PV3).
109. Cierra sesión y entra la misma cuenta: no se pregunta (PV4). Entra otra cuenta: se pregunta.
110. «Quitarlas de aquí» al cerrar sesión: el dispositivo queda vacío, la nube intacta y sin
     marcas de borrado; no se ofrece si la sincronización falló (CU6).
111. Restaurar una copia con sesión iniciada: tras sincronizar, la nube y el otro dispositivo
     tienen lo de la copia (BO2).
112. Un documento de la nube con versión más nueva: no se sube ni se baja nada (VE1).
113. Un documento de la nube roto se salta y sigue en la nube (FU6).
114. Modo Docente: una sesión entera no cambia la nube (SI5). Guardado durante una sincronización:
     se lanza otra (SI6).
115. Sesión anónima: no sincroniza (CU7).
116. Solo se escriben claves `lexi.` y migración: datos sin marcas reciben `0` y no pierden nada.
117. Prueba de humo: sin red y sin Firebase la app entera funciona y **no hay ninguna petición
     fuera de la propia dirección**; la tarjeta «Cuenta» solo está en la zona del tutor; en
     Familias no aparece el nombre de ninguna otra app; claro y oscuro, sin errores en consola.

Además, una prueba a mano de Iván con dos dispositivos (paso 6.5).

## 13. Cómo se programaría (cuando Iván diga sí)

Cuándo: después del paso 3.1 (datos v4) como mínimo; mejor con las Fases 3 y 5 acabadas, para que
la forma de los datos ya no cambie.

1. **6.1 Marcas y fusión** · Sonnet, esfuerzo alto. `gmt`, `del`, `mt`, `m`, migración, `tocar`,
   `fusionarPerfil` y `fusionarTodo`. Tests 96-105, 113 y 116. Sin red ni pantallas: no cambia
   nada a la vista. Puede ir junto al paso 3.1.
2. **6.2 Reglas** · Fable u Opus, esfuerzo medio (es la seguridad). Añadir el bloque a
   `tabula/firestore.rules`, probarlo en el simulador y dar a Iván el archivo entero para
   publicar. **Lo publica Iván** en Firebase → Firestore → Reglas.
3. **6.3 Cuenta y sincronización** · Sonnet, esfuerzo alto. `src/js/52-cuenta.js` a partir del de
   Calculi, tarjeta «Cuenta», reglas CU, SI, PV1, PV2, PV4 y VE. Tests 94, 95, 109, 112, 114, 115
   y 117. Subir versión de `sw.js`.
4. **6.4 Pantallas delicadas** · Sonnet, esfuerzo alto. Primera vez (PV3), cerrar sesión (CU6),
   borrar y restaurar con cuenta (BO). Tests 106-108, 110 y 111.
5. **6.5 Prueba real de Iván**: móvil y pizarra (o móvil y tableta) con la misma cuenta. Una
   sesión en uno, se ve en el otro; cambiar el nombre en el móvil no pierde nada; app instalada y
   en el navegador; con y sin conexión.
6. **6.6 Ecosistema** · Haiku, esfuerzo bajo. Fila en `ECOSISTEMA.md` (copia de `tabula`) y copia
   a los siete repositorios; `docs/firebase.md`.
