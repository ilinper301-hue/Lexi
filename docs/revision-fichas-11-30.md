# Revisión independiente de las fichas · semanas 11 a 30

Revisadas las 120 fichas (24-11-2026, Sonnet, esfuerzo medio), sin haber escrito ninguna. **Solo propone:
no se ha cambiado ninguna ficha.** Cada punto lleva «Propuesta»; Iván dice sí o no (los puntos van de
R1 a R40, para no mezclarlos con los 1 a 102 de `ESTADO.md`).
El comprobador pasa (`node tools/validar-docs.js docs`), así que aquí solo hay lo que una regla no ve.

Prioridad: **A** = conviene cambiarlo antes de pasar la ficha a la app · **B** = mejora clara ·
**C** = detalle, se puede dejar.

Los puntos 72 a 102 (aprobados el 24-11-2026) están cumplidos en las fichas: los 24 `sep` nuevos, los
segundos significados, las contrarias que faltan y las preguntas de `relaciona` que se quitan. Los dos
que tocaban fichas viejas (90 `ordenar` y 98 `amable`) **se aplicaron al hacer esta revisión** en
`docs/semana-01.md`, `docs/semana-09.md`, sus ficheros de `src/js/palabras/` y la tabla de
`docs/tareas-gesto-relaciona.md`; el test que probaba `rel.mas` repetido usaba esa ficha y se ajustó.

## 1. Fallos de redacción, de lógica o de cuidado (A)

1. **R1 · `entre` (12.1), no-sí 2.** «Me senté entre mi hermano, porque no había nadie más» no se
   entiende ni a los 6 años ni a los 36. Propuesta: «Me senté entre mi hermano y mi hermana, pero los
   dos estaban al mismo lado.» (por: «Para estar entre, uno tiene que estar a cada lado.»)
2. **R2 · `entre` (12.1), no-ejemplo «La boca, entre los dos ojos».** La boca sí está en el centro de
   la cara, algo más abajo: un niño puede decir que sí. Propuesta: «El pelo, entre los dos ojos» o
   «El zapato, entre los dos ojos».
3. **R3 · `ruidoso` (13.4) y `silencioso` (13.5), ejemplo «Una batería».** A los 6 años «batería» es la
   pila. Propuesta: «Un tambor grande». (Ojo: el no-sí 1 de `silencioso` ya habla de tambores; se puede
   cambiar por «El concierto de trompetas».)
4. **R4 · `asustado` (14.6), la definición y un no-ejemplo se contradicen.** La definición dice «o te ha
   pillado por sorpresa» y un no-ejemplo es «Recibir una sorpresa bonita». Propuesta: «Estás asustado
   cuando tienes miedo porque algo te parece peligroso o te ha dado un susto.»
5. **R5 · `agradable` (16.3), no-sí 4: ironía.** «Qué agradable: me he pillado el dedo con la puerta» es
   un sarcasmo y a esa edad se entiende al revés (el mismo fallo que `problema`, 8.1). Propuesta: «Me
   pillé el dedo con la puerta y me pareció muy agradable.»
6. **R6 · `cómodo` (26.3), no-sí 1: ironía.** «Qué cómodo es este jersey: me pica muchísimo» es lo
   mismo. Propuesta: «Este jersey es muy cómodo porque me pica muchísimo.»
7. **R7 · `cariñoso` (28.6): un niño que no quiere besos no es «menos cariñoso».** El no-ejemplo
   «Apartar la cara cuando te quieren dar un beso» enseña que negarse a un beso es no querer, y la
   definición dice «abrazos, besos y palabras bonitas». Propuesta: definición «…con abrazos, mimos y
   palabras bonitas» y no-ejemplo «Empujar a tu hermano para quitarle el juguete».
8. **R8 · `confiar` (29.6): los secretos.** Contexto 2, ejemplo «Contarle un secreto a tu mejor amiga» y
   la relación `secreto` enseñan a guardar secretos sin decir que los que dan miedo o hacen sentir mal
   se cuentan a un adulto. Propuesta: añadir en `habla` o en un `acaba`: «Si un secreto te da miedo o te
   hace sentir mal, se lo cuentas a un adulto.»
9. **R9 · `medio ambiente` (30.2): la definición y un no-sí se contradicen.** «Todo lo que nos rodea»
   incluye el estuche, y el no-sí 2 dice que el estuche no lo es. Propuesta: «El medio ambiente es la
   naturaleza que nos rodea: aire, agua, tierra, plantas y animales.» Y los no-ejemplos «Un sueño», «Un
   número» y «Un chiste» no enseñan nada: mejor «Un juguete de plástico» y «Un estuche».

## 2. Frases y palabras que se pueden mejorar (B)

10. **R10 · `tachar` (11.1).** El contexto 2 (tachar los días del calendario) y el no-sí 3 (la tarea ya
    hecha) no encajan con «porque sobra o está mal». Propuesta: «…porque sobra, está mal o ya está hecho.»
11. **R11 · `repartir` (13.3).** a) No-sí 4: «dejar cada carta en su casa» es ambiguo (¿la casa del
    cartero?). Propuesta: «Repartir es dejar cada carta en la casa de quien la espera.» b) Ejemplo «Partir la
    pizza para que todos tengan un trozo»: partir no es repartir. Propuesta: «Partir la pizza y dar un trozo
    a cada uno».
12. **R12 · `ruidoso` (13.4), no-sí 4.** «El gato caminó tan ruidoso que nadie lo oyó» no se construye.
    Propuesta: «El gato era tan ruidoso que nadie lo oyó.»
13. **R13 · `alrededor` (12.2), no-ejemplo «Una pegatina alrededor de la libreta».** Puede ser una tira de
    pegatinas. Propuesta: «Una pegatina en el centro de la libreta».
14. **R14 · `serio` (14.5), ejemplo «Una cara sin sonrisa».** Sin sonrisa también es estar triste.
    Propuesta: «Una cara sin sonrisa, mirando con mucha atención».
15. **R15 · `articulación` (15.3), ejemplo «El hombro».** Gira más que se dobla y la definición dice «por
    donde se dobla». Propuesta: «El tobillo».
16. **R16 · `vacío` (17.5), contexto 1.** «Casi vacío» contradice «no tiene nada dentro». Propuesta: «El
    frigorífico está vacío: hay que ir a comprar.»
17. **R17 · `antes` (19.1), definición.** «Para contar lo que pasa cuando otra cosa todavía no ha llegado»
    es muy enrevesada. Propuesta: «Decimos «antes» cuando algo va primero y otra cosa viene después.»
18. **R18 · `durante` (19.2), no-ejemplo «Comer helado durante la siesta».** Un niño puede comer helado a
    la hora de la siesta. Propuesta: «Hacer un dibujo entero durante un parpadeo».
19. **R19 · `recto` (19.4), no-sí 2.** «Haciendo eses»: palabra desconocida. Propuesta: «La serpiente
    avanzaba recta, haciendo curvas y curvas.» (por: «Con curvas no es recta.»). Y en `torcido` (19.5):
    «ladea la cabeza» → «inclina la cabeza» y «enderezamos» → «la pusimos derecha». (C)
20. **R20 · `semilla` (20.4), no-sí 3.** Las pipas de girasol que se comen van tostadas y no germinan.
    Propuesta: «Las pipas de girasol sin tostar son semillas.» (o «Las pepitas de sandía»).
21. **R21 · `estropeado` (23.4), ejemplo «Un paraguas con las varillas dobladas».** «Varillas» es difícil.
    Propuesta: «Un paraguas que ya no se abre».
22. **R22 · `acompañar` (24.6), no-ejemplo «Secar las lágrimas a alguien que llora».** Eso también es estar
    con alguien (y es consolar, 23.6). Propuesta: «Dejar a tu hermano esperando solo en la parada».
23. **R23 · `impermeable` (25.5), no-sí 1.** «Me calé entera»: «calarse» es difícil. Propuesta: «me mojé
    entera».
24. **R24 · `máquina` (25.6), ejemplo «Una bicicleta».** Es dudoso que una bici «haga un trabajo por
    nosotros». Propuesta: «Una excavadora».
25. **R25 · `crear` (26.2), no-sí 1.** «Calcando»: palabra difícil. Propuesta: «Creé un dibujo copiando
    el de mi libro.»
26. **R26 · `apretado` (26.4), no-ejemplo «Un abrigo grande que te baila».** Propuesta: «Un abrigo grande
    que se te cae de los hombros».
27. **R27 · `escaso` (27.5), contexto 1.** «La leche estaba escasa» no es natural. Propuesta: «En casa, la
    leche era escasa y solo llegó para dos vasos.»
28. **R28 · `animar` (27.6), no-ejemplo «Secar las lágrimas a alguien que llora».** Es consolar (23.6): un
    niño que ya lo sabe dirá que sí. Propuesta: «Decirle a un amigo «¡Qué lento eres!»».
29. **R29 · `fresco` (28.4), no-ejemplo «Un yogur caducado».** «Caducado» es difícil. Propuesta: «Un yogur
    abierto hace semanas».

## 3. Gestos (B)

Mismo criterio que en el punto 16 de `ESTADO.md`: las dos soluciones son cambiar el gesto o, sin tocar la
ficha, meter la pareja en `GESTOS_PARECIDOS` (`src/js/32-eleccion.js`), para que nunca salgan juntas como
opciones de «¿Qué palabra es?».

30. **R30 · Gestos que no salen a todos los niños de 6 años.** `de repente` (chasquear los dedos),
    `extraño` (levantar una sola ceja) y `solo` (un dedo en una punta de la mesa y la mano en la otra, no
    se lee desde el fondo de la clase). Propuesta: `de repente` «Cierra los puños y ábrelos de golpe, una
    sola vez»; `extraño` «Inclina la cabeza y arruga la nariz mirando algo imaginario»; `solo` «Cruza
    los brazos y mira a los lados, sin nadie cerca».
31. **R31 · Gestos que cambian de sentido.** `emocionado` (palmadas rápidas: son las palmadas de las
    sílabas de la presentación) → «Aprieta los puños junto al pecho y da un saltito». `desanimado` (pulgar
    hacia abajo: es el «no me gusta» y choca con `desagradable`) → «Deja caer los hombros y la cabeza,
    despacio, con un suspiro». `aburrido` (cara apoyada en la mano) se parece a `descansar` (manos junto
    a la mejilla) → «Deja caer la cabeza hacia atrás y resopla mirando al techo».
32. **R32 · Parejas nuevas para `GESTOS_PARECIDOS` (no cambia ninguna ficha):** `solucion` · `idea`
    (dedo o puño junto a la cabeza, de golpe); `primero` · `unico` (un dedo en alto); `clasificar` ·
    `repartir` (repartir cosas a los lados); `repetir` · `cambiar` · `continuar` (manos que giran);
    `crecer` · `mejorar` (mano plana que sube); `explicar` · `necesitar` · `proponer` (manos que se
    ofrecen o piden); `timido` · `confundido` (encoger los hombros); `pesado` · `esforzarse` (cargar o
    empujar algo que pesa); `soleado` · `alrededor` (aro con los brazos); `descansar` · `aburrido`
    (mano en la mejilla, si no se acepta R31); `fijarse` entra en el grupo `observar` · `pista` ·
    `paisaje`.

## 4. Detalles (C)

33. **R33 · Nombres que se repiten entre semanas.** `Hugo` sale en 9 escenas (1.2, 11.1, 15.1, 17.1,
    20.3, 21.2, 23.1, 25.4, 29.3), `Pablo` en 7, `Vera`, `Mateo` y `Rocío` en 6, `Teo`, `Nora`, `Alba`,
    `Iker`, `Lola` y `Leo` en 5. En clase lo mejor es que el docente cambie el nombre por el de un niño de
    la clase; si Iván lo prefiere, se reparten otros nombres al pasar cada semana a `src/js/palabras/`.
34. **R34 · Ejemplos espejo.** Las parejas `pesado`/`ligero`, `lleno`/`vacío`, `ruidoso`/`silencioso`,
    `natural`/`artificial` y `faltar`/`sobrar` comparten los mismos ejemplos al revés: sirve para entender
    la pareja, pero un niño puede acertar por memoria. No hace falta cambiarlo; vale como aviso al docente.
35. **R35 · `pesado` (11.4).** «Pesadísima» (contexto 1) es un superlativo. Propuesta: «muy pesada».
36. **R36 · `turno` (13.6).** «Colarse» sale en un no-sí y un no-ejemplo y se explica con «saltarse el
    turno»: puede no conocerla. El docente la explica; no hace falta cambiar nada.
37. **R37 · `complicado` (18.3).** «Cientos de piezas» → «muchísimas piezas».
38. **R38 · `celoso` (21.5).** El no-sí 2 explica con «envidia», palabra que no se enseña hasta que
    `envidioso` salga en `rel.mas`. Propuesta: «Querer lo que tiene otro no es tener celos.»
39. **R39 · `contaminar` (30.3) y `residuo` (30.4).** «Venir andando o en bici, que no contamina» puede
    señalar a las familias que traen coche: propuesta «…en bici o en autobús…». Los colores de los
    contenedores (marrón, azul, verde, amarillo) cambian según el pueblo: el docente los ajusta.
40. **R40 · Otros.** `idea` (22.3): los no-ejemplos «Estornudar» y «Comerte un bocadillo» no enseñan nada
    (mejor «Una piedra» o «Un lápiz»). `raíz` (20.5): «Lo que tiene un árbol bajo tierra» es abstracto
    para 6 años. `estropeado` (23.4): le falta el segundo significado de la comida estropeada. `tímido`,
    `saludable` y `concentrarse`: los no-ejemplos «Pasar toda la tarde con la tableta», «Comer chuches
    todos los días» y «Ver la tele mientras haces los deberes» pueden señalar a una familia; vale como
    aviso.

## 5. Lo que está bien

- Los no-ejemplos de casi todas las fichas dicen claramente lo contrario de la palabra y no hacen falta
  explicaciones largas: solo las de los apartados 1 y 2 piden cambio.
- Los gestos de las semanas 11 a 30 no repiten ninguno de las semanas 1 a 10 (comparados a ojo uno por uno;
  los que se parecen están en R32).
- Las escenas de `desanimado` y `consolar` (Pablo y Nora) cuentan una sola historia, como se pidió.
