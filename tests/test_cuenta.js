/* Cuenta y sincronización (paso 6.3): tests 94, 95, 109, 112, 114 y 115 de docs/nube.md, más lo que se decidió al programarlo.
   Sin red ni Firebase: «Firestore» es un objeto en memoria que además COMPRUEBA las reglas de docs/nube.md (campos permitidos, tipos y tamaños).
   Uso: node tests/test_cuenta.js */
const fs = require('fs'), vm = require('vm'), path = require('path'), assert = require('assert');
const R = path.join(__dirname, '..', 'src', 'js');
const prelude = "const SC = {}; let PANT = 'inicio'; const go = p => { PANT = p; }; const toast = m => {}; const pintar = () => {};\n";
const codigo = prelude + ['00-util.js', '20-datos.js', '21-fusion.js', '30-escala-logica.js', '52-cuenta.js'].map(f => fs.readFileSync(path.join(R, f), 'utf8')).join('\n');
const J = x => JSON.parse(JSON.stringify(x));
const tick = async (n = 12) => { for (let i = 0; i < n; i++) await new Promise(r => setImmediate(r)); };

/* Firestore de mentira. `reglas` revisa lo mismo que las reglas publicadas (bloque «Lexi» de tabula/firestore.rules). */
function fakeDb() {
  const store = new Map(), log = { escrituras: 0, lecturas: 0 }, gate = { espera: null };
  const reglas = (ruta, d) => {
    const p = ruta.split('/'), ks = Object.keys(d);
    if (p.length === 2) { assert.ok(ks.every(k => ['meta', 'ts', 'v'].includes(k)) && ks.length === 3, 'campos de lexico/{uid}: ' + ks); assert.ok(typeof d.meta === 'string' && d.meta.length <= 20000 && typeof d.ts === 'number' && Number.isInteger(d.v), 'tipos de lexico/{uid}'); }
    else { assert.ok(p.length === 4 && p[2] === 'alu', 'ruta ' + ruta); assert.ok(ks.every(k => ['d', 'mt', 'v'].includes(k)) && ks.length === 3, 'campos de alu: ' + ks); assert.ok(typeof d.d === 'string' && d.d.length <= 300000 && typeof d.mt === 'number' && Number.isInteger(d.v), 'tipos de alu'); }
  };
  const hijos = ruta => [...store.keys()].filter(k => k.startsWith(ruta + '/') && k.split('/').length === ruta.split('/').length + 1);
  const docRef = ruta => ({ path: ruta, id: ruta.split('/').pop(), get: async () => { log.lecturas++; if (gate.espera) await gate.espera; return { exists: store.has(ruta), data: () => store.get(ruta) }; }, collection: n => colRef(ruta + '/' + n) });
  const colRef = ruta => ({ doc: id => docRef(ruta + '/' + id), get: async () => { log.lecturas++; if (gate.espera) await gate.espera; return { forEach: f => hijos(ruta).forEach(k => f({ id: k.split('/').pop(), data: () => store.get(k) })) }; } });
  return { store, log, gate, collection: n => colRef(n),
    batch: () => { const ops = []; return { set: (r, d) => { reglas(r.path, d); ops.push(() => store.set(r.path, J(d))); }, delete: r => ops.push(() => store.delete(r.path)), commit: async () => { if (log.fallo) throw Object.assign(new Error('x'), { code: 'unavailable' }); log.escrituras++; ops.forEach(f => f()); } }; } };
}
function disp(db, almacen = {}) {
  const ls = { getItem: k => (k in almacen ? almacen[k] : null), setItem: (k, v) => { almacen[k] = String(v); }, removeItem: k => { delete almacen[k]; } };
  const timers = [];
  const ctx = vm.createContext({ localStorage: ls, console, setTimeout: (f, ms) => { timers.push({ f, ms }); return timers.length; }, clearTimeout: () => {}, window: {} });
  const api = vm.runInContext(codigo + '\n;({cargar,guardar,guardarAjustes,crearPerfil,entrarPerfil,perfilAct,presentarPalabra,valorarTarea,renombrarPerfil,borrarPerfil,terminarSesionHoy,fijarPin,fijarNuevas,estadoPal,hoy,sincronizarCon,nubeFirestore,nombresParaJuntar,puedeQuitar,cerrarPedir,cerrarQuitando,cerrarElegido,primeraElegir,aplicarCopia,leerCopia,exportarTexto,conSesion,SC,get PANT(){return PANT},set PANT(v){PANT=v},syncNow,syncYa,alGuardar,syncMano,decidirPrimera,usuarioCuenta,accSec,fbLogout,aDocsNube,get EST(){return EST},set EST(v){EST=v},get SYNC(){return SYNC},get FBU(){return FBU},set FBU(v){FBU=v},set FB(v){FB=v},set AHORA(v){AHORA=v},set MODO_DOCENTE(v){MODO_DOCENTE=v},LSR})', ctx);
  api.cargar(); api.AHORA = () => 1000; api.FB = { db }; return { api, almacen, timers };
}
const uid1 = 'cuentaDeIvan1', uid2 = 'otraCuenta2';
const entra = (d, uid = uid1) => { d.api.FBU = { uid, displayName: 'Iván', email: 'i@x.es', isAnonymous: false }; };
const nubeDe = (d, db, uid = uid1) => d.api.nubeFirestore(db, uid);
const docsDe = (db, uid = uid1) => [...db.store.keys()].filter(k => k.startsWith('lexico/' + uid + '/alu/'));
let n = 0; const lista = [], t = (nombre, f) => lista.push([nombre, f]);

t('94. nube vacía: A sube sus perfiles y sus ajustes, sin preguntar (PV2); sin cambios no vuelve a escribir', async () => {
  const db = fakeDb(), A = disp(db); const c = A.api.crearPerfil('doc', '1.º A'); A.api.presentarPalabra('observar'); A.api.fijarPin('1234');
  const r = await A.api.sincronizarCon(nubeDe(A, db), uid1);
  assert.strictEqual(r.res, 'ok'); assert.strictEqual(r.subidos, 1);
  const doc = db.store.get('lexico/' + uid1 + '/alu/' + c.id); assert.strictEqual(JSON.parse(doc.d).pal.observar.e, 2); assert.strictEqual(doc.v, 5);
  const meta = JSON.parse(db.store.get('lexico/' + uid1).meta); assert.strictEqual(meta.aj.pin, '1234'); assert.ok(meta.gmt > 0);
  assert.strictEqual(A.almacen['lexi.sync.uid'], uid1);
  const w = db.log.escrituras; const r2 = await A.api.sincronizarCon(nubeDe(A, db), uid1); assert.strictEqual(r2.res, 'ok'); assert.strictEqual(db.log.escrituras, w, 'sin cambios no se escribe');
});
t('95. B vacío entra con la misma cuenta: baja todo, con el PIN, sin preguntar (PV1) y sin escribir nada', async () => {
  const db = fakeDb(), A = disp(db), B = disp(db); const c = A.api.crearPerfil('doc', '1.º A'); A.api.presentarPalabra('observar'); A.api.fijarPin('4321');
  await A.api.sincronizarCon(nubeDe(A, db), uid1);
  B.api.fijarPin('9999'); /* B ya tenía un PIN propio pero ningún perfil: manda el de la cuenta */
  const w = db.log.escrituras, r = await B.api.sincronizarCon(nubeDe(B, db), uid1);
  assert.strictEqual(r.res, 'ok'); assert.strictEqual(B.api.EST.perfiles.length, 1); assert.strictEqual(B.api.EST.perfiles[0].id, c.id); assert.strictEqual(B.api.EST.perfiles[0].pal.observar.e, 2);
  assert.strictEqual(B.api.EST.ajustes.pin, '4321'); assert.strictEqual(db.log.escrituras, w);
  const guardado = JSON.parse(B.almacen['lexi.v1']); assert.strictEqual(guardado.perfiles.length, 1); assert.strictEqual(guardado.ajustes.pin, '4321'); assert.strictEqual(B.almacen['lexi.sync.uid'], uid1);
  /* una sola clave nueva en el dispositivo por la cuenta, todas con prefijo lexi. */
  assert.ok(Object.keys(B.almacen).every(k => k.startsWith('lexi.')), Object.keys(B.almacen).join());
});
t('A y B con la misma cuenta se juntan palabra a palabra (usa la fusión del paso 6.1)', async () => {
  const db = fakeDb(), A = disp(db), B = disp(db); const c = A.api.crearPerfil('doc', '1.º A'); A.api.presentarPalabra('observar'); A.api.presentarPalabra('comparar');
  await A.api.sincronizarCon(nubeDe(A, db), uid1); await B.api.sincronizarCon(nubeDe(B, db), uid1); B.api.entrarPerfil(c.id);
  A.api.AHORA = () => 2000; B.api.AHORA = () => 3000; A.api.valorarTarea('observar', 'sentido', 'todos'); B.api.valorarTarea('comparar', 'sentido', 'mitad');
  await A.api.sincronizarCon(nubeDe(A, db), uid1); await B.api.sincronizarCon(nubeDe(B, db), uid1); await A.api.sincronizarCon(nubeDe(A, db), uid1);
  for (const d of [A, B]) { const p = d.api.EST.perfiles[0]; assert.strictEqual(p.pal.observar.val.length, 1); assert.strictEqual(p.pal.comparar.val.length, 1); }
});
t('109. cierra sesión y vuelve la misma cuenta: no se pregunta (PV4); otra cuenta con datos en los dos lados: se pregunta', async () => {
  const db = fakeDb(), A = disp(db); A.api.crearPerfil('doc', '1.º A'); await A.api.sincronizarCon(nubeDe(A, db), uid1);
  entra(A); await A.api.fbLogout(); assert.strictEqual(A.api.FBU, null); assert.strictEqual(A.almacen['lexi.sync.uid'], uid1, 'cerrar sesión no borra lexi.sync.uid'); assert.ok(!('lexi.fb' in A.almacen));
  A.api.renombrarPerfil(A.api.EST.perfiles[0].id, '1.º B');
  assert.strictEqual((await A.api.sincronizarCon(nubeDe(A, db), uid1)).res, 'ok'); /* misma cuenta: fusión normal */
  assert.strictEqual(JSON.parse(db.store.get('lexico/' + uid1 + '/alu/' + A.api.EST.perfiles[0].id).d).n, '1.º B');
  /* otra cuenta con datos propios y el dispositivo con datos: pregunta (paso 6.4) y no toca nada */
  const db2 = fakeDb(), C = disp(db2); C.api.crearPerfil('doc', 'Otra'); await C.api.sincronizarCon(nubeDe(C, db2, uid2), uid2);
  const antes = J(A.api.EST), w = db2.log.escrituras; const r = await A.api.sincronizarCon(nubeDe(A, db2, uid2), uid2);
  assert.strictEqual(r.res, 'primera'); assert.deepStrictEqual(J(A.api.EST), antes); assert.strictEqual(db2.log.escrituras, w); assert.strictEqual(A.almacen['lexi.sync.uid'], uid1);
  assert.strictEqual(db2.store.size, C.api.EST.perfiles.length + 1);
});
t('PV: tabla de decisiones (misma cuenta · dispositivo vacío · cuenta vacía sin otra cuenta · resto)', async () => {
  const d = disp(fakeDb()).api.decidirPrimera, b = { uidGuardado: '', uid: 'a', localVacio: false, nubeVacia: false };
  assert.strictEqual(d({ ...b }), 'preguntar'); assert.strictEqual(d({ ...b, uidGuardado: 'a' }), 'fusionar'); assert.strictEqual(d({ ...b, localVacio: true }), 'fusionar');
  assert.strictEqual(d({ ...b, nubeVacia: true }), 'fusionar'); assert.strictEqual(d({ ...b, nubeVacia: true, uidGuardado: 'otra' }), 'preguntar'); assert.strictEqual(d({ ...b, uidGuardado: 'otra', localVacio: true }), 'fusionar');
});
t('PV2 con datos de una cuenta anterior y la nueva cuenta vacía: pregunta (no «nunca fueron de otra cuenta»)', async () => {
  const db = fakeDb(), A = disp(db); A.api.crearPerfil('doc', '1.º A'); await A.api.sincronizarCon(nubeDe(A, db), uid1);
  const db2 = fakeDb(); assert.strictEqual((await A.api.sincronizarCon(nubeDe(A, db2, uid2), uid2)).res, 'primera'); assert.strictEqual(db2.store.size, 0);
});
t('112. un documento de la nube con versión más nueva: no se sube ni se baja nada (VE1) y la tarjeta lo dice', async () => {
  const db = fakeDb(), A = disp(db); A.api.crearPerfil('doc', '1.º A'); await A.api.sincronizarCon(nubeDe(A, db), uid1);
  const id = [...db.store.keys()].find(k => k.includes('/alu/')); db.store.set(id, { ...db.store.get(id), v: 99 });
  A.api.renombrarPerfil(A.api.EST.perfiles[0].id, 'Cambio'); const antes = J(A.api.EST), w = db.log.escrituras;
  const r = await A.api.sincronizarCon(nubeDe(A, db), uid1);
  assert.strictEqual(r.res, 'vieja'); assert.deepStrictEqual(J(A.api.EST), antes); assert.strictEqual(db.log.escrituras, w);
  /* y por `lexico/{uid}` con versión más nueva */
  const db3 = fakeDb(), B = disp(db3); B.api.crearPerfil('doc', 'X'); await B.api.sincronizarCon(nubeDe(B, db3), uid1); db3.store.set('lexico/' + uid1, { ...db3.store.get('lexico/' + uid1), v: 7 });
  assert.strictEqual((await B.api.sincronizarCon(nubeDe(B, db3), uid1)).res, 'vieja');
  entra(B); B.api.FB = { db: db3 }; await B.api.syncNow(); assert.strictEqual(B.api.SYNC.espera, 'vieja'); assert.ok(B.api.accSec().includes('Actualiza Lexi en este dispositivo para sincronizar'));
  B.api.SYNC.espera = 'vieja'; B.api.alGuardar(); assert.strictEqual(B.timers.length, 0, 'esperando una decisión no se pregunta a la nube con cada guardado');
});
t('datos del dispositivo de una versión más nueva (SI8): no se sincroniza', async () => {
  const db = fakeDb(), A = disp(db, { 'lexi.v1': JSON.stringify({ v: 99, perfiles: [] }) }); assert.ok(A.api.EST.bloq);
  assert.strictEqual((await A.api.sincronizarCon(nubeDe(A, db), uid1)).res, 'bloq'); assert.strictEqual(db.log.lecturas, 0);
});
t('114a. Modo Docente: una sesión entera no cambia la nube (SI5); los ajustes sí viajan', async () => {
  const db = fakeDb(), A = disp(db); A.api.crearPerfil('doc', '1.º A'); A.api.presentarPalabra('observar'); await A.api.sincronizarCon(nubeDe(A, db), uid1);
  entra(A); const antes = JSON.stringify([...db.store]), w = db.log.escrituras;
  A.api.MODO_DOCENTE = true; assert.strictEqual(A.api.valorarTarea('observar', 'sentido', 'todos'), false); assert.strictEqual(A.api.presentarPalabra('comparar'), false);
  await A.api.syncNow(); assert.strictEqual(JSON.stringify([...db.store]), antes); assert.strictEqual(db.log.escrituras, w);
  A.api.fijarNuevas(1); assert.strictEqual(A.timers.length, 1, 'un ajuste guardado en Modo Docente programa la sincronización'); assert.strictEqual(A.timers[0].ms, 15000);
  await A.api.syncNow(); assert.strictEqual(JSON.parse(db.store.get('lexico/' + uid1).meta).aj.nuevas, 1);
});
t('114b. guardado durante una sincronización: se lanza otra al acabar (SI6) y lo guardado mientras se leía la nube no se pierde', async () => {
  const db = fakeDb(), A = disp(db), c = A.api.crearPerfil('doc', '1.º A'); A.api.presentarPalabra('observar'); await A.api.sincronizarCon(nubeDe(A, db), uid1);
  entra(A); A.api.AHORA = () => 5000; let suelta; db.gate.espera = new Promise(r => { suelta = r; });
  const p = A.api.syncNow(); await tick(); assert.strictEqual(A.api.SYNC.busy, true);
  assert.strictEqual(A.api.valorarTarea('observar', 'sentido', 'todos'), true); /* se valora mientras la nube responde */
  assert.strictEqual(A.api.SYNC.pend, true); assert.strictEqual(A.timers.length, 0);
  db.gate.espera = null; suelta(); await p; await tick();
  assert.strictEqual(A.api.EST.perfiles[0].pal.observar.val.length, 1, 'la valoración sigue en el dispositivo');
  assert.strictEqual(A.api.SYNC.busy, false); assert.strictEqual(A.timers.length, 1, 'queda programada otra sincronización');
  await A.timers[0].f(); await tick(); assert.strictEqual(JSON.parse(db.store.get('lexico/' + uid1 + '/alu/' + c.id).d).pal.observar.val.length, 1, 'y la nube la recibe');
});
t('SI3. al terminar «Hoy» se sincroniza al momento (sin esperar los 15 s)', async () => {
  const db = fakeDb(), A = disp(db), c = A.api.crearPerfil('doc', '1.º A'); await A.api.sincronizarCon(nubeDe(A, db), uid1); entra(A);
  assert.strictEqual(A.api.terminarSesionHoy(), true); await tick(30);
  assert.strictEqual(JSON.parse(db.store.get('lexico/' + uid1 + '/alu/' + c.id).d).ses, A.api.hoy());
});
t('115. sesión anónima: no es una cuenta y no sincroniza (CU7); sin cuenta, guardar no programa nada (regla 0)', async () => {
  const db = fakeDb(), A = disp(db), u = A.api.usuarioCuenta;
  assert.strictEqual(u({ uid: 'x', isAnonymous: true }), null); assert.strictEqual(u(null), null); assert.strictEqual(u({ uid: 'y', isAnonymous: false }).uid, 'y');
  A.api.crearPerfil('doc', '1.º A'); A.api.presentarPalabra('observar'); A.api.fijarPin('1111'); assert.strictEqual(A.timers.length, 0); await A.api.syncNow(); assert.strictEqual(db.log.lecturas, 0);
  assert.ok(!Object.keys(A.almacen).some(k => /fb|sync/.test(k)), 'sin cuenta no hay claves de cuenta');
});
t('si falla la escritura, la próxima vez es la misma cuenta y se vuelve a fusionar sin preguntar (PV4)', async () => {
  const db = fakeDb(), A = disp(db); A.api.crearPerfil('doc', '1.º A'); db.log.fallo = true;
  await assert.rejects(A.api.sincronizarCon(nubeDe(A, db), uid1)); assert.strictEqual(db.store.size, 0);
  db.log.fallo = false; assert.strictEqual((await A.api.sincronizarCon(nubeDe(A, db), uid1)).res, 'ok'); assert.strictEqual(docsDe(db).length, 1);
  entra(A); A.api.FB = { db }; db.log.fallo = true; A.api.fijarNuevas(1); await A.api.syncNow(); assert.ok(A.api.SYNC.err, 'el error se dice en una frase'); assert.ok(A.api.accSec().includes('role="alert"'));
});
t('borrar una clase en B desaparece de la nube y de A (FU2) a través de la sincronización real', async () => {
  const db = fakeDb(), A = disp(db), B = disp(db), c = A.api.crearPerfil('doc', '1.º A'); await A.api.sincronizarCon(nubeDe(A, db), uid1); await B.api.sincronizarCon(nubeDe(B, db), uid1);
  B.api.AHORA = () => 9000; B.api.borrarPerfil(c.id); const r = await B.api.sincronizarCon(nubeDe(B, db), uid1); assert.strictEqual(r.borrados, 1); assert.strictEqual(docsDe(db).length, 0);
  await A.api.sincronizarCon(nubeDe(A, db), uid1); assert.strictEqual(A.api.EST.perfiles.length, 0); assert.ok(JSON.parse(db.store.get('lexico/' + uid1).meta).del[c.id]);
});
t('la tarjeta «Cuenta»: sin sesión invita a entrar con Google; con sesión enseña nombre, correo y botones (CU1, CU8); Familias no nombra otras apps', async () => {
  const db = fakeDb(), A = disp(db); let h = A.api.accSec(); assert.ok(h.includes('Entrar con Google') && h.includes('guardar el progreso en la nube'));
  entra(A); A.api.crearPerfil('fam', 'Lucía', 1); h = A.api.accSec();
  assert.ok(h.includes('Iván') && h.includes('i@x.es') && h.includes('Sincronizar ahora') && h.includes('Cerrar sesión') && h.includes('solo tu cuenta puede leerlos'));
  assert.ok(h.includes('Se cierra tu sesión de Google en este dispositivo.') && !/Calculi|Tabula|Barri|Lectori|otras apps/.test(h), 'en Familias no hay nada del ecosistema');
  A.api.crearPerfil('doc', '1.º A'); assert.ok(A.api.accSec().includes('Se cierra también en tus otras apps de aula de este dispositivo'));
  A.api.SYNC.espera = 'primera'; assert.ok(A.api.accSec().includes('no se sincroniza'));
});
t('un perfil demasiado grande (más de 300000 caracteres) no se sube y se avisa; lo demás sí', async () => {
  const db = fakeDb(), A = disp(db), c = A.api.crearPerfil('doc', 'Grande'), c2 = A.api.crearPerfil('doc', 'Normal'); A.api.EST.perfiles.find(p => p.id === c.id).relleno = 'y'.repeat(310000);
  const r = await A.api.sincronizarCon(nubeDe(A, db), uid1); assert.deepStrictEqual(J(r.grandes), [c.id]); assert.deepStrictEqual(docsDe(db), ['lexico/' + uid1 + '/alu/' + c2.id]);
});

/* ---- Paso 6.4: tests 106-108, 110 y 111 de docs/nube.md (pantallas delicadas) ---- */
/** Dos dispositivos con datos propios y una cuenta (uid2) que ya tiene los suyos, con un perfil que viene de la misma copia. */
async function escenarioPrimera() {
  const dbC = fakeDb(), C = disp(dbC), cx = C.api.crearPerfil('doc', 'Compartida'); C.api.presentarPalabra('observar');
  const copia = C.api.exportarTexto(); /* la misma copia de seguridad en los dos dispositivos */
  C.api.crearPerfil('doc', '1.º A'); C.api.presentarPalabra('comparar'); await C.api.sincronizarCon(nubeDe(C, dbC, uid2), uid2);
  const A = disp(dbC); A.api.aplicarCopia(A.api.leerCopia(copia).datos); A.api.LSR.set('sync.uid', uid1); /* A venía de otra cuenta */
  A.api.AHORA = () => 3000; A.api.entrarPerfil(cx.id); A.api.presentarPalabra('ordenar'); A.api.crearPerfil('doc', '1.º A'); A.api.crearPerfil('doc', 'Solo en A');
  return { db: dbC, C, A, cx };
}
t('106. primera vez con datos en los dos lados, «Juntar»: están todos los perfiles; mismo nombre → «1.º A» y «1.º A (2)»; mismo id → fusionados (PV3)', async () => {
  const { db, A, cx } = await escenarioPrimera(), antes = J(A.api.EST);
  const r = await A.api.sincronizarCon(nubeDe(A, db, uid2), uid2); /* sin elegir no se toca nada */
  assert.strictEqual(r.res, 'primera'); assert.deepStrictEqual(J(A.api.EST), antes); assert.strictEqual(A.almacen['lexi.sync.uid'], uid1);
  assert.deepStrictEqual(J(r.info.nube.map(p => p.n).sort()), ['1.º A', 'Compartida']); assert.deepStrictEqual(J(r.info.local.map(p => p.n).sort()), ['1.º A', 'Compartida', 'Solo en A']);
  assert.strictEqual(r.info.nube.find(p => p.n === 'Compartida').pal, 1); assert.strictEqual(r.info.cabe, true);
  const j = await A.api.sincronizarCon(nubeDe(A, db, uid2), uid2, { modo: 'juntar' });
  assert.strictEqual(j.res, 'ok'); const nombres = J(A.api.EST.perfiles.map(p => p.n).sort()); assert.deepStrictEqual(nombres, ['1.º A', '1.º A (2)', 'Compartida', 'Solo en A']);
  const comp = A.api.EST.perfiles.find(p => p.id === cx.id); assert.ok(comp.pal.observar && comp.pal.ordenar, 'el mismo perfil quedó fusionado: palabras de los dos lados');
  assert.strictEqual(docsDe(db, uid2).length, 4, 'la cuenta tiene los cuatro'); assert.strictEqual(A.almacen['lexi.sync.uid'], uid2);
  assert.strictEqual(JSON.parse(A.almacen['lexi.v1']).perfiles.length, 4, 'y el dispositivo los guardó');
  assert.deepStrictEqual(J(A.api.nombresParaJuntar([{ id: 'a', t: 'doc', n: 'X' }, { id: 'b', t: 'fam', n: 'X' }], [{ id: 'z', t: 'doc', n: 'X' }, { id: 'y', t: 'doc', n: 'X (2)' }])), { a: 'X (3)' }, 'ni el otro tipo ni un nombre libre se tocan; no choca con «(2)»');
  assert.strictEqual(Object.values(A.api.nombresParaJuntar([{ id: 'a', t: 'doc', n: 'Nombre de veinte letras' }], [{ id: 'z', t: 'doc', n: 'Nombre de veinte letras' }]))[0].length <= 20, true);
  /* después, como misma cuenta: fusión normal sin preguntar */
  assert.strictEqual((await A.api.sincronizarCon(nubeDe(A, db, uid2), uid2)).res, 'ok');
});
t('107. «Usar solo lo de la cuenta»: lo anterior queda en lexi.bk y la nube no recibe marcas de borrado (PV3)', async () => {
  const { db, C, A } = await escenarioPrimera(), v1Antes = A.almacen['lexi.v1'], metaAntes = db.store.get('lexico/' + uid2).meta, w = db.log.escrituras;
  A.api.borrarPerfil(A.api.EST.perfiles.find(p => p.n === 'Solo en A').id); const v1Antes2 = A.almacen['lexi.v1'];
  const r = await A.api.sincronizarCon(nubeDe(A, db, uid2), uid2, { modo: 'cuenta' }); assert.strictEqual(r.res, 'ok');
  assert.strictEqual(A.almacen['lexi.bk'], v1Antes2, 'lo que había en el dispositivo se guardó antes de sustituirlo'); assert.notStrictEqual(v1Antes, v1Antes2);
  assert.deepStrictEqual(J(A.api.EST.perfiles.map(p => p.id).sort()), J(C.api.EST.perfiles.map(p => p.id).sort()), 'ahora tiene lo de la cuenta');
  assert.strictEqual(db.store.get('lexico/' + uid2).meta, metaAntes, '`del` y ajustes de la cuenta no cambian'); assert.strictEqual(docsDe(db, uid2).length, 2); assert.strictEqual(db.log.escrituras, w, 'no escribe nada en la nube');
  assert.deepStrictEqual(J(A.api.EST.del), {}); assert.strictEqual(A.almacen['lexi.sync.uid'], uid2);
  /* con la cuenta vacía no hay nada que usar: la opción no sustituye nada */
  const db3 = fakeDb(), D = disp(db3); D.api.crearPerfil('doc', 'Mía'); D.api.LSR.set('sync.uid', uid1); const antes = D.almacen['lexi.v1'];
  const r3 = await D.api.sincronizarCon(nubeDe(D, db3, uid2), uid2, { modo: 'cuenta' }); assert.strictEqual(r3.res, 'primera'); assert.strictEqual(D.almacen['lexi.v1'], antes); assert.strictEqual(r3.info.nubeVacia, true);
});
t('108. «Ahora no»: se cierra la sesión y ni el dispositivo ni la nube cambian (PV3)', async () => {
  const { db, A } = await escenarioPrimera(); entra(A, uid2); A.api.FB = { db }; A.api.LSR.set('fb', '1');
  const nubeAntes = JSON.stringify([...db.store]), locAntes = J(A.api.EST), v1 = A.almacen['lexi.v1'], w = db.log.escrituras;
  A.api.PANT = 'tz'; await A.api.syncNow(); assert.strictEqual(A.api.SYNC.espera, 'primera'); assert.strictEqual(A.api.PANT, 'primera', 'recién entrado desde la zona del tutor se pasa a la pantalla de elegir');
  assert.ok(A.api.SC.primera().includes('Juntar') && A.api.SC.primera().includes('Usar solo lo de la cuenta') && A.api.SC.primera().includes('Ahora no') && A.api.SC.primera().includes('Solo en A'));
  await A.api.primeraElegir('ahora');
  assert.strictEqual(A.api.FBU, null); assert.ok(!('lexi.fb' in A.almacen)); assert.deepStrictEqual(J(A.api.EST), locAntes); assert.strictEqual(A.almacen['lexi.v1'], v1);
  assert.strictEqual(JSON.stringify([...db.store]), nubeAntes); assert.strictEqual(db.log.escrituras, w); assert.strictEqual(A.almacen['lexi.sync.uid'], uid1); assert.strictEqual(A.api.PANT, 'tz');
});
t('106b. por la pantalla: «Juntar» desde la tarjeta termina la espera y la tarjeta ya no avisa', async () => {
  const { db, A } = await escenarioPrimera(); entra(A, uid2); A.api.FB = { db }; await A.api.syncNow(); assert.ok(A.api.accSec().includes('Elegir qué hacer'));
  A.api.PANT = 'primera'; await A.api.primeraElegir('juntar'); assert.strictEqual(A.api.SYNC.espera, ''); assert.strictEqual(A.api.PANT, 'tz'); assert.ok(!A.api.accSec().includes('Elegir qué hacer')); assert.strictEqual(A.api.EST.perfiles.length, 4);
});
t('110. cerrar sesión «Quitarlas de aquí»: el dispositivo queda vacío, la nube intacta y sin marcas de borrado; no se ofrece si la sincronización falló (CU6)', async () => {
  const db = fakeDb(), A = disp(db); A.api.crearPerfil('doc', '1.º A'); A.api.presentarPalabra('observar'); A.api.fijarPin('2468'); entra(A); A.api.FB = { db }; A.api.LSR.set('fb', '1');
  A.api.renombrarPerfil(A.api.EST.perfiles[0].id, '1.º B'); /* cambio sin sincronizar: al cerrar se guarda primero */
  await A.api.cerrarPedir(); assert.strictEqual(A.api.SYNC.cerrar, 'elegir'); assert.ok(A.api.accSec().includes('Quitarlas de aquí') && A.api.accSec().includes('Dejar las clases en este dispositivo'));
  const nube = JSON.stringify([...db.store]); assert.strictEqual(JSON.parse(db.store.get('lexico/' + uid1 + '/alu/' + A.api.EST.perfiles[0].id).d).n, '1.º B', 'lo último ya está en la cuenta');
  await A.api.cerrarElegido(true);
  assert.strictEqual(A.api.EST.perfiles.length, 0); assert.strictEqual(JSON.parse(A.almacen['lexi.v1']).perfiles.length, 0); assert.strictEqual(A.api.FBU, null); assert.ok(!('lexi.fb' in A.almacen));
  assert.strictEqual(JSON.stringify([...db.store]), nube, 'la nube queda como estaba'); assert.deepStrictEqual(JSON.parse(db.store.get('lexico/' + uid1).meta).del, {}, 'sin marcas de borrado'); assert.ok(!('lexi.bk' in A.almacen), 'sin copia escondida en un ordenador compartido');
  /* vuelve la misma cuenta: baja todo, con su PIN, sin preguntar */
  assert.strictEqual((await A.api.sincronizarCon(nubeDe(A, db), uid1)).res, 'ok'); assert.strictEqual(A.api.EST.perfiles[0].n, '1.º B'); assert.strictEqual(A.api.EST.ajustes.pin, '2468');
  /* si la sincronización falla: solo se ofrece dejarlas */
  entra(A); A.api.FB = { db }; A.api.renombrarPerfil(A.api.EST.perfiles[0].id, '1.º C'); db.log.fallo = true;
  await A.api.cerrarPedir(); assert.strictEqual(A.api.SYNC.cerrar, 'solo'); const h = A.api.accSec(); assert.ok(h.includes('Dejar las clases en este dispositivo') && !h.includes('Quitarlas de aquí'));
  assert.strictEqual(await A.api.cerrarQuitando(), false); assert.strictEqual(A.api.EST.perfiles.length, 1, 'no se quita nada'); assert.ok(A.api.FBU);
  /* y si se cambia algo después de comprobar, tampoco */
  db.log.fallo = false; await A.api.cerrarPedir(); assert.strictEqual(A.api.SYNC.cerrar, 'elegir'); A.api.renombrarPerfil(A.api.EST.perfiles[0].id, '1.º D'); assert.strictEqual(A.api.puedeQuitar(), false);
  await A.api.cerrarElegido(false); assert.strictEqual(A.api.EST.perfiles.length, 1, '«Dejarlas» no quita nada'); assert.strictEqual(A.api.FBU, null);
});
t('111. restaurar una copia con sesión iniciada: la copia manda en la nube y en el otro dispositivo (BO2)', async () => {
  const db = fakeDb(), A = disp(db), B = disp(db), x = A.api.crearPerfil('doc', 'X'); A.api.presentarPalabra('observar'); const copia = A.api.exportarTexto();
  A.api.AHORA = () => 2000; A.api.crearPerfil('doc', 'Y'); A.api.entrarPerfil(x.id); A.api.presentarPalabra('comparar'); A.api.valorarTarea('observar', 'sentido', 'todos'); entra(A); A.api.FB = { db };
  await A.api.syncNow(); await B.api.sincronizarCon(nubeDe(B, db), uid1); assert.strictEqual(B.api.EST.perfiles.length, 2); assert.ok(B.api.EST.perfiles.find(p => p.id === x.id).pal.comparar);
  assert.strictEqual(A.api.conSesion(), true); A.api.AHORA = () => 1500; /* hasta un reloj atrasado: la copia gana */
  assert.strictEqual(A.api.aplicarCopia(A.api.leerCopia(copia).datos, A.api.conSesion()), true);
  assert.deepStrictEqual(J(A.api.EST.perfiles.map(p => p.n)), ['X']); assert.strictEqual(Object.keys(A.api.EST.del).length, 1, 'Y queda apuntada como borrada');
  await A.api.syncNow(); assert.deepStrictEqual(J(docsDe(db)), ['lexico/' + uid1 + '/alu/' + x.id], 'en la nube solo queda lo de la copia');
  const px = JSON.parse(db.store.get('lexico/' + uid1 + '/alu/' + x.id).d); assert.ok(px.pal.observar && !px.pal.comparar, 'y X vuelve a como estaba en la copia'); assert.strictEqual(px.pal.observar.val.length, 0);
  await B.api.sincronizarCon(nubeDe(B, db), uid1); assert.deepStrictEqual(J(B.api.EST.perfiles.map(p => p.n)), ['X']); const bx = B.api.EST.perfiles[0]; assert.ok(!bx.pal.comparar); assert.strictEqual(bx.pal.observar.val.length, 0);
  /* sin sesión, restaurar no marca nada: es lo de siempre */
  const C = disp(db); const antes = C.api.leerCopia(copia).datos; C.api.aplicarCopia(antes, false); assert.deepStrictEqual(J(C.api.EST), J(C.api.leerCopia(copia).datos));
});
t('111b. tras restaurar, lo que otro dispositivo toca DESPUÉS de la restauración sobrevive; lo anterior no (BO2)', async () => {
  const db = fakeDb(), A = disp(db), B = disp(db), x = A.api.crearPerfil('doc', 'X'); A.api.presentarPalabra('observar'); const copia = A.api.exportarTexto();
  A.api.presentarPalabra('comparar'); entra(A); A.api.FB = { db }; await A.api.syncNow(); await B.api.sincronizarCon(nubeDe(B, db), uid1); B.api.entrarPerfil(x.id);
  A.api.AHORA = () => 5000; A.api.aplicarCopia(A.api.leerCopia(copia).datos, true); await A.api.syncNow();
  B.api.AHORA = () => 9000; const mB = B.api.presentarPalabra('ordenar'); /* B (aún sin enterarse) presenta otra palabra después */
  await B.api.sincronizarCon(nubeDe(B, db), uid1); await A.api.syncNow();
  for (const d of [A, B]) { const p = d.api.EST.perfiles[0]; assert.ok(p.pal.observar && p.pal.ordenar && !p.pal.comparar, Object.keys(p.pal).join()); }
});

(async () => { for (const [nombre, f] of lista) { try { await f(); n++; console.log('  ok ' + nombre); } catch (e) { console.log('FALLA ' + nombre + '\n' + (e.stack || e)); process.exitCode = 1; } } console.log(n + ' pruebas correctas' + (process.exitCode ? ' (hay fallos)' : '')); })();
