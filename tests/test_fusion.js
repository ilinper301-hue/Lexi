/* Marcas y fusión de dos dispositivos (paso 6.1): tests 96-105, 113 y 116 de docs/nube.md. Sin red: la «nube» es un objeto. Uso: node tests/test_fusion.js */
const fs = require('fs'), vm = require('vm'), path = require('path'), assert = require('assert');
const R = path.join(__dirname, '..', 'src', 'js');
const codigo = ['00-util.js', '20-datos.js', '21-fusion.js', '30-escala-logica.js'].map(f => fs.readFileSync(path.join(R, f), 'utf8')).join('\n');
function disp(almacen = {}) {
  const ls = { getItem: k => (k in almacen ? almacen[k] : null), setItem: (k, v) => { almacen[k] = String(v); }, removeItem: k => { delete almacen[k]; } };
  const api = vm.runInContext(codigo + '\n;({cargar,guardar,crearPerfil,entrarPerfil,perfilAct,limpiar,presentarPalabra,valorarTarea,apuntarEncontrada,renombrarPerfil,borrarPerfil,terminarSesionHoy,fijarNuevas,fijarPin,fijarPreg,estadoPal,hoy,palabraNueva,maxMarca,siguienteMarca,tocar,limpiarDel,fusionarRegistro,fusionarPerfil,fusionarTodo,fusionarEnc,aDocsNube,get EST(){return EST},set EST(v){EST=v},set AHORA(v){AHORA=v}})', vm.createContext({ localStorage: ls, console }));
  api.cargar(); return { api, almacen };
}
const J = x => JSON.parse(JSON.stringify(x));
let n = 0; const t = (nombre, f) => { f(); n++; console.log('  ok ' + nombre); };
/* La «nube»: documentos por perfil y los datos de la cuenta, como en docs/nube.md apartado 3 */
const nubeVacia = () => ({ docs: new Map(), aj: null, gmt: 0, del: {} });
const remoto = nb => ({ aj: nb.aj || undefined, gmt: nb.gmt, del: nb.del, perfiles: [...nb.docs.values()] });
function sync(d, nb) {
  const r = J(d.api.fusionarTodo(J(d.api.EST), remoto(nb))), docs = J(d.api.aDocsNube(r.estado));
  d.api.EST = r.estado;
  r.subir.forEach(id => nb.docs.set(id, docs.perfiles.find(p => p.id === id))); r.borrarNube.forEach(id => nb.docs.delete(id));
  if (r.metaSube) { nb.aj = docs.aj; nb.gmt = docs.gmt; nb.del = docs.del; }
  return r;
}
const reloj = (d, ms) => { d.api.AHORA = () => ms; };
/* Una clase con dos palabras presentadas en A, sincronizada con la nube y bajada a B */
function base() {
  const A = disp(), B = disp(), nb = nubeVacia(); reloj(A, 1000); reloj(B, 1000);
  const c = A.api.crearPerfil('doc', '1.º A'); A.api.presentarPalabra('observar'); A.api.presentarPalabra('comparar');
  sync(A, nb); sync(B, nb); B.api.entrarPerfil(c.id); return { A, B, nb, id: c.id };
}
const pal = (d, id) => d.api.perfilAct() ? d.api.perfilAct().pal[id] : null;
const perfil = (d, id) => d.api.EST.perfiles.find(p => p.id === id);

t('marcas: crear y cambiar ponen `mt`/`m` (FU5); presentar de nuevo sin cambios no marca; guardar progreso no mueve `gmt`', () => {
  const A = disp(); reloj(A, 5000); const c = A.api.crearPerfil('doc', 'C'); assert.strictEqual(c.mt, 5000);
  A.api.presentarPalabra('observar'); assert.strictEqual(A.api.perfilAct().pal.observar.m, 5001); assert.strictEqual(A.api.perfilAct().mt, 5001);
  A.api.presentarPalabra('observar'); assert.strictEqual(A.api.perfilAct().pal.observar.m, 5001); /* ya presentada: nada cambió */
  A.api.valorarTarea('observar', 'sentido', 'todos'); assert.strictEqual(A.api.EST.gmt, 0);
  A.api.renombrarPerfil(c.id, 'D'); assert.strictEqual(A.api.perfilAct().mt, 5003); assert.strictEqual(A.api.perfilAct().pal.observar.m, 5002); /* renombrar marca solo el perfil */
});
t('96. A valora `observar` y B valora `comparar` sin sincronizar entre medias: tras sincronizar, las dos valoraciones están en los dos (FU4)', () => {
  const { A, B, nb } = base(); reloj(A, 2000); reloj(B, 3000);
  A.api.valorarTarea('observar', 'sentido', 'todos'); B.api.valorarTarea('comparar', 'sentido', 'mitad');
  sync(A, nb); sync(B, nb); sync(A, nb);
  for (const d of [A, B]) { assert.deepStrictEqual(J(pal(d, 'observar').val.map(x => x.v)), ['todos']); assert.deepStrictEqual(J(pal(d, 'comparar').val.map(x => x.v)), ['mitad']); }
  assert.strictEqual(J(A.api.EST.perfiles).length, 1);
});
t('97. B cambia el nombre de la clase después de que A haga una sesión: queda el nombre de B y el progreso de A (FU4)', () => {
  const { A, B, nb, id } = base(); reloj(A, 2000); reloj(B, 3000);
  A.api.valorarTarea('observar', 'sentido', 'todos'); A.api.terminarSesionHoy(); B.api.renombrarPerfil(id, '1.º B');
  sync(A, nb); sync(B, nb); sync(A, nb);
  for (const d of [A, B]) { assert.strictEqual(perfil(d, id).n, '1.º B'); assert.strictEqual(pal(d, 'observar').val.length, 1); assert.strictEqual(perfil(d, id).ses, A.api.hoy()); }
});
t('98. la misma palabra cambiada en los dos: queda entera la más reciente, sin mezclar campos (FU4)', () => {
  const { A, B, nb } = base(); reloj(A, 2000); reloj(B, 3000);
  A.api.valorarTarea('observar', 'sentido', 'todos'); B.api.valorarTarea('observar', 'ejemplo', 'pocos');
  sync(A, nb); sync(B, nb); sync(A, nb);
  for (const d of [A, B]) { const w = pal(d, 'observar'); assert.deepStrictEqual(J(w.val.map(x => [x.t, x.v])), [['ejemplo', 'pocos']]); assert.strictEqual(w.ut, 'ejemplo'); assert.deepStrictEqual(J(pal(d, 'observar')), J(pal(B, 'observar'))); }
});
t('99. empate de `m`: gana la palabra con más valoraciones; si siguen igual, la del dispositivo (FU4)', () => {
  const A = disp(), v = (...x) => x.map(y => ({ d: '2026-11-01', t: 'sentido', v: y }));
  const x = { e: 2, pres: '2026-11-01', m: 5, val: v('todos', 'mitad') }, y = { e: 3, pres: '2026-11-01', m: 5, val: v('todos') };
  assert.deepStrictEqual(J(A.api.fusionarRegistro(x, y)), J(x)); assert.deepStrictEqual(J(A.api.fusionarRegistro(y, x)), J(x));
  const z = { ...y, e: 4 }; assert.strictEqual(A.api.fusionarRegistro(y, z).e, 3); assert.strictEqual(A.api.fusionarRegistro(z, y).e, 4); /* del todo igual: el del dispositivo */
  assert.strictEqual(A.api.fusionarRegistro({ ...y, m: 9 }, x).e, 3); /* y con marca más alta, gana aunque tenga menos valoraciones */
});
t('100. `enc`: A tiene oída 5 y B oída 4 y vista 2 → oída 5, vista 2 y el día más reciente (FU4)', () => {
  const A = disp(), a = { e: 2, pres: '2026-11-01', m: 7, enc: { o: 5, v: 0, d: 0, ult: '2026-11-10' } }, b = { e: 2, pres: '2026-11-01', m: 3, enc: { o: 4, v: 2, d: 0, ult: '2026-11-12' } };
  assert.deepStrictEqual(J(A.api.fusionarRegistro(a, b).enc), { o: 5, v: 2, d: 0, ult: '2026-11-12' }); assert.strictEqual(A.api.fusionarRegistro(a, b).m, 7);
  assert.strictEqual(A.api.fusionarRegistro({ e: 2, m: 1 }, { e: 2, m: 2 }).enc, undefined);
});
t('101. B borra una clase: desaparece de la nube y de A, y queda en `del` (FU2)', () => {
  const { A, B, nb, id } = base(); reloj(B, 4000); B.api.borrarPerfil(id);
  const r = sync(B, nb); assert.deepStrictEqual(r.borrarNube, [id]); assert(!nb.docs.has(id)); assert(nb.del[id] >= 4000);
  sync(A, nb); assert.strictEqual(A.api.EST.perfiles.length, 0); assert(A.api.EST.del[id]); assert.strictEqual(A.api.EST.act, '');
});
t('102. un perfil borrado no resucita aunque A lo tenga con una marca anterior al borrado (FU2)', () => {
  const { A, B, nb, id } = base(); reloj(B, 4000); B.api.borrarPerfil(id); sync(B, nb); sync(A, nb); sync(B, nb); sync(A, nb);
  assert(!nb.docs.has(id)); assert.strictEqual(A.api.EST.perfiles.length, 0); assert.strictEqual(B.api.EST.perfiles.length, 0);
});
t('103. un perfil cambiado después de su borrado sobrevive y vuelve a los dos (FU2)', () => {
  const { A, B, nb, id } = base(); reloj(B, 4000); B.api.borrarPerfil(id); sync(B, nb);
  reloj(A, 5000); A.api.valorarTarea('observar', 'sentido', 'todos'); /* A aún no sabía del borrado */
  sync(A, nb); assert(nb.docs.has(id)); assert(!nb.del[id]); sync(B, nb);
  assert(perfil(B, id)); assert.strictEqual(perfil(B, id).pal.observar.val.length, 1); assert(!B.api.EST.del[id]);
});
t('104. ajustes: gana el `gmt` más reciente; guardar progreso no mueve `gmt` (FU1)', () => {
  const { A, B, nb } = base(); reloj(A, 2000); A.api.fijarNuevas(1); sync(A, nb); sync(B, nb); assert.strictEqual(B.api.EST.ajustes.nuevas, 1);
  reloj(B, 3000); B.api.fijarPin('4321'); const g = B.api.EST.gmt; B.api.valorarTarea('observar', 'sentido', 'todos'); assert.strictEqual(B.api.EST.gmt, g);
  A.api.fijarPreg(false); reloj(A, 2500); /* A cambia un ajuste antes que B: B (3000) gana */
  sync(B, nb); sync(A, nb);
  for (const d of [A, B]) { assert.strictEqual(d.api.EST.ajustes.pin, '4321'); assert.strictEqual(d.api.EST.gmt, B.api.EST.gmt); }
  const antes = A.api.EST.gmt; A.api.fijarNuevas(1); assert.strictEqual(A.api.EST.gmt, antes); /* el mismo valor no es un cambio */
});
t('105. reloj atrasado: un cambio hecho tras sincronizar gana aunque la hora del dispositivo sea anterior (FU5)', () => {
  const { A, B, nb, id } = base(); reloj(A, 9000); A.api.valorarTarea('observar', 'sentido', 'pocos'); sync(A, nb); sync(B, nb);
  reloj(B, 100); /* el ordenador del aula va atrasado */
  B.api.valorarTarea('observar', 'ejemplo', 'todos'); assert(pal(B, 'observar').m > 9000); assert(perfil(B, id).mt > 9000);
  sync(B, nb); sync(A, nb);
  for (const d of [A, B]) assert.deepStrictEqual(J(pal(d, 'observar').val.map(x => x.t)), ['sentido', 'ejemplo']); /* B bajó lo de A antes de valorar: su valoración se suma */
  assert.strictEqual(B.api.siguienteMarca(B.api.EST, 100), B.api.maxMarca(B.api.EST) + 1);
});
t('113. un documento de la nube roto se salta: ni se borra ni se pisa, salvo que el dispositivo lo tenga más reciente (FU6)', () => {
  const A = disp(); reloj(A, 100); const c = A.api.crearPerfil('doc', 'Clase'), id = c.id;
  const roto = { id: 'zzzzzzzz1', mt: 9000, v: 5, d: '{esto no es json' }, igual = { id, mt: 9000, v: 5, d: '{roto' };
  let r = A.api.fusionarTodo(J(A.api.EST), { perfiles: [roto] });
  assert.deepStrictEqual(J(r.subir), [id]); assert.deepStrictEqual(J(r.borrarNube), []); assert.strictEqual(r.estado.perfiles.length, 1); /* el roto ni entra ni se toca */
  r = A.api.fusionarTodo(J(A.api.EST), { perfiles: [igual] }); assert.deepStrictEqual(J(r.subir), []); assert.strictEqual(r.estado.perfiles.length, 1); /* mismo perfil en la nube: roto y más reciente → no se pisa */
  reloj(A, 20000); A.api.renombrarPerfil(id, 'Clase 2'); r = A.api.fusionarTodo(J(A.api.EST), { perfiles: [igual] }); assert.deepStrictEqual(J(r.subir), [id]); /* el del dispositivo es más reciente → sí */
});
t('116. migración: datos sin marcas reciben 0 y no pierden nada; solo se escriben claves `lexi.`', () => {
  const almacen = { 'lexi.v1': JSON.stringify({ v: 4, modo: 'doc', act: '', ajustes: { pin: '1234', nuevas: 1 }, perfiles: [{ id: 'abc123def', t: 'doc', n: 'Clase', c: '2026-11-01', pal: { observar: { e: 3, pres: '2026-11-01', val: [{ d: '2026-11-02', t: 'sentido', v: 'todos' }] } } }] }) };
  const { api } = disp(almacen), p = api.EST.perfiles[0], w = p.pal.observar;
  assert.strictEqual(api.EST.v, 5); assert.strictEqual(p.mt, 0); assert.strictEqual(w.m, undefined); assert.strictEqual(api.EST.gmt, 0); assert.deepStrictEqual(J(api.EST.del), {});
  assert.strictEqual(w.e, 3); assert.strictEqual(w.val.length, 1); assert.strictEqual(api.EST.ajustes.pin, '1234'); assert.strictEqual(api.EST.ajustes.nuevas, 1);
  assert.strictEqual(api.maxMarca(api.EST), 0); api.fijarPin('4321'); assert(JSON.parse(almacen['lexi.v1']).gmt > 0);
  assert(Object.keys(almacen).every(k => k.startsWith('lexi.')));
  const l = api.limpiar({ v: 5, perfiles: [{ t: 'doc', n: 'C', mt: -4, pal: { observar: { e: 2, pres: '2026-11-01', m: 'x' } } }], gmt: 'hola', del: { abc123def: 7, malid: 5, otroid123: -2 } });
  assert.strictEqual(l.perfiles[0].mt, 0); assert.strictEqual(l.perfiles[0].pal.observar.m, undefined); assert.strictEqual(l.gmt, 0); assert.deepStrictEqual(J(l.del), { abc123def: 7 });
});
t('`del` guarda como mucho los 200 borrados más recientes (FU2)', () => {
  const { api } = disp(), o = {}; for (let i = 0; i < 250; i++) o['p' + String(i).padStart(8, '0')] = i + 1;
  const d = api.limpiarDel(o); assert.strictEqual(Object.keys(d).length, 200); assert(d['p00000249']); assert(!d['p00000000']);
});
t('una copia de seguridad lleva las marcas y la fusión no pierde perfiles que solo están en un lado (FU3, FU7)', () => {
  const A = disp(); reloj(A, 100); A.api.crearPerfil('doc', 'Local'); const b = disp(); reloj(b, 200); const o = b.api.crearPerfil('fam', 'Niño', 1);
  const r = A.api.fusionarTodo(J(A.api.EST), { perfiles: J(b.api.aDocsNube(b.api.EST).perfiles) });
  assert.strictEqual(r.estado.perfiles.length, 2); assert.deepStrictEqual(J(r.subir), [A.api.EST.perfiles[0].id]); assert(r.cambiaLocal);
  assert(JSON.parse(A.api.EST ? JSON.stringify(A.api.EST) : '{}').perfiles[0].mt > 0);
});
console.log(n + ' pruebas correctas');
