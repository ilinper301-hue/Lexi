/* Lógica de perfiles y migración. Uso: node tests/test_datos.js */
const fs = require('fs'), vm = require('vm'), path = require('path'), assert = require('assert');
const R = path.join(__dirname, '..', 'src', 'js');
const codigo = ['00-util.js', '20-datos.js'].map(f => fs.readFileSync(path.join(R, f), 'utf8')).join('\n');
function nuevo(almacen = {}) {
  const ls = { getItem: k => (k in almacen ? almacen[k] : null), setItem: (k, v) => { almacen[k] = String(v); }, removeItem: k => { delete almacen[k]; } };
  const ctx = vm.createContext({ localStorage: ls, console });
  const api = vm.runInContext(codigo + '\n;({cargar,guardar,guardarAjustes,crearPerfil,entrarPerfil,perfilesDe,perfilAct,avLibre,limpiar,errorNombre,renombrarPerfil,cambiarAnimal,borrarPerfil,fijarPin,exportarTexto,leerCopia,aplicarCopia,presentarPalabra,estadoPal,AVATARES,MAX_PERFILES,get EST(){return EST},set MODO_DOCENTE(v){MODO_DOCENTE=v}})', ctx);
  return { api, almacen };
}
let n = 0; const t = (nombre, f) => { f(); n++; console.log('  ok', nombre); };

t('empieza vacío', () => { const { api } = nuevo(); api.cargar(); assert.strictEqual(api.EST.perfiles.length, 0); assert.strictEqual(api.EST.modo, ''); });
t('30 animales como Calculi', () => { const { api } = nuevo(); assert.strictEqual(api.AVATARES.length, 30); assert.strictEqual(api.AVATARES[0][0], '🦊'); });
t('crea clase y niño, y guarda solo en lexi.v1', () => {
  const { api, almacen } = nuevo(); api.cargar();
  const c = api.crearPerfil('doc', '1.º A'); const k = api.crearPerfil('fam', 'Lucía', 3);
  assert(c && k); assert.strictEqual(api.EST.act, k.id); assert.strictEqual(api.EST.modo, 'fam');
  assert.deepStrictEqual(Object.keys(almacen), ['lexi.v1']);
  const { api: b } = nuevo(almacen); b.cargar();
  assert.strictEqual(b.EST.perfiles.length, 2); assert.strictEqual(b.perfilAct().n, 'Lucía'); assert.strictEqual(b.perfilAct().av, 3);
  assert.strictEqual(b.perfilesDe('doc')[0].av, 0);
});
t('rechaza nombre vacío o repetido (sin mirar mayúsculas)', () => {
  const { api } = nuevo(); api.cargar();
  assert.strictEqual(api.crearPerfil('doc', '   '), null); api.crearPerfil('doc', '1.º A');
  assert.strictEqual(api.crearPerfil('doc', '1.º a'), null); assert(api.crearPerfil('fam', '1.º A'));
});
t('limpia caracteres peligrosos y recorta', () => {
  const { api } = nuevo(); api.cargar(); const p = api.crearPerfil('fam', '<b>Pablo</b>"\'' + 'x'.repeat(40), 99);
  assert(!/[<>&"']/.test(p.n)); assert(p.n.length <= 20); assert.strictEqual(p.av, 29);
});
t('avLibre elige un animal sin usar', () => {
  const { api } = nuevo(); api.cargar(); api.crearPerfil('fam', 'A', 0); api.crearPerfil('fam', 'B', 1); assert.strictEqual(api.avLibre(), 2);
});
t('entrarPerfil cambia el activo y el modo', () => {
  const { api } = nuevo(); api.cargar(); const c = api.crearPerfil('doc', 'Clase'); api.crearPerfil('fam', 'Ana', 0);
  api.entrarPerfil(c.id); assert.strictEqual(api.EST.modo, 'doc'); assert.strictEqual(api.entrarPerfil('nada'), null);
});
t('JSON roto: copia en lexi.bk y empieza de cero sin borrar nada', () => {
  const { api, almacen } = nuevo({ 'lexi.v1': '{roto' }); api.cargar();
  assert.strictEqual(almacen['lexi.bk'], '{roto'); assert.strictEqual(api.EST.perfiles.length, 0);
});
t('datos de una versión más nueva no se pisan', () => {
  const orig = JSON.stringify({ v: 9, perfiles: [{ id: 'abcdef12', t: 'fam', n: 'Ana', av: 1 }], extra: 'futuro' });
  const { api, almacen } = nuevo({ 'lexi.v1': orig }); api.cargar();
  assert.strictEqual(api.guardar(), false); assert.strictEqual(api.crearPerfil('fam', 'Otro'), null); assert.strictEqual(almacen['lexi.v1'], orig);
});
t('saneado: ids repetidos, tipos raros, act inexistente y tope', () => {
  const { api } = nuevo();
  const e = api.limpiar({ act: 'zzzzzzzz', modo: 'doc', perfiles: [{ id: 'aaaaaaaa', t: 'fam', n: 'A' }, { id: 'aaaaaaaa', t: 'fam', n: 'B' }, { t: 'otro', n: 'C' }, null, 'x'] });
  assert.strictEqual(e.perfiles.length, 1); assert.strictEqual(e.act, ''); assert.strictEqual(e.modo, 'doc');
  const muchos = api.limpiar({ perfiles: Array.from({ length: 80 }, (_, i) => ({ t: 'fam', n: 'N' + i })) });
  assert.strictEqual(muchos.perfiles.length, api.MAX_PERFILES);
});
t('limpiar es idempotente', () => {
  const { api } = nuevo(); api.cargar(); api.crearPerfil('fam', 'Ana', 5);
  const a = JSON.stringify(api.limpiar(api.EST)); assert.strictEqual(JSON.stringify(api.limpiar(JSON.parse(a))), a);
});

t('PIN: solo 4 cifras, se guarda y se conserva', () => {
  const { api, almacen } = nuevo(); api.cargar();
  for (const mal of ['123', '12345', 'abcd', '', '12 4']) assert.strictEqual(api.fijarPin(mal), false);
  assert(api.fijarPin('0427')); const { api: b } = nuevo(almacen); b.cargar(); assert.strictEqual(b.EST.ajustes.pin, '0427');
  assert.strictEqual(b.limpiar({ ajustes: { pin: 'zz' } }).ajustes.pin, '');
});
t('renombrar: valida vacío y repetido, permite el propio nombre', () => {
  const { api } = nuevo(); api.cargar(); const a = api.crearPerfil('fam', 'Ana', 0), b = api.crearPerfil('fam', 'Beto', 1);
  assert.strictEqual(api.renombrarPerfil(b.id, 'ana'), false); assert.strictEqual(api.renombrarPerfil(b.id, ' '), false);
  assert(api.renombrarPerfil(a.id, 'ANA')); assert.strictEqual(api.EST.perfiles[0].n, 'ANA'); assert(api.renombrarPerfil(b.id, 'Beatriz'));
  assert.strictEqual(api.errorNombre('fam', 'beatriz'), 'Ese nombre ya existe'); assert.strictEqual(api.errorNombre('doc', 'beatriz'), '');
});
t('cambiar animal: solo niños y dentro de rango', () => {
  const { api } = nuevo(); api.cargar(); const k = api.crearPerfil('fam', 'Ana', 0), c = api.crearPerfil('doc', 'Clase');
  assert(api.cambiarAnimal(k.id, 7)); assert.strictEqual(api.perfilesDe('fam')[0].av, 7); api.cambiarAnimal(k.id, 500); assert.strictEqual(api.perfilesDe('fam')[0].av, 29);
  assert.strictEqual(api.cambiarAnimal(c.id, 3), false);
});
t('borrar: quita el perfil y deja sin activo si era el activo', () => {
  const { api, almacen } = nuevo(); api.cargar(); const a = api.crearPerfil('fam', 'Ana', 0); api.crearPerfil('fam', 'Beto', 1);
  const act = api.EST.act; assert(api.borrarPerfil(act)); assert.strictEqual(api.EST.act, ''); assert.strictEqual(api.perfilesDe('fam').length, 1);
  assert.strictEqual(api.borrarPerfil('nadie123'), false); assert.strictEqual(JSON.parse(almacen['lexi.v1']).perfiles.length, 1);
});
t('Modo Docente no guarda progreso, pero los ajustes sí', () => {
  const { api, almacen } = nuevo(); api.cargar(); api.crearPerfil('doc', 'Clase'); const antes = almacen['lexi.v1'];
  api.MODO_DOCENTE = true; api.EST.perfiles[0].n = 'Cambiado'; assert.strictEqual(api.guardar(), false); assert.strictEqual(almacen['lexi.v1'], antes);
  api.fijarPin('1234'); assert.strictEqual(JSON.parse(almacen['lexi.v1']).ajustes.pin, '1234');
});
t('copia: exportar → importar devuelve lo mismo', () => {
  const { api } = nuevo(); api.cargar(); api.crearPerfil('doc', '1.º A'); api.crearPerfil('fam', 'Lucía', 3); api.fijarPin('4321');
  const txt = api.exportarTexto(); assert.strictEqual(JSON.parse(txt).app, 'lexi');
  const { api: b, almacen } = nuevo(); b.cargar(); const r = b.leerCopia(txt); assert(r.datos); assert(b.aplicarCopia(r.datos));
  assert.strictEqual(b.EST.perfiles.length, 2); assert.strictEqual(b.EST.ajustes.pin, '4321'); assert.strictEqual(b.perfilAct().n, 'Lucía');
  assert.strictEqual(JSON.parse(almacen['lexi.v1']).perfiles.length, 2);
});
t('copia: rechaza basura, otras apps y versiones nuevas sin tocar nada', () => {
  const { api, almacen } = nuevo(); api.cargar(); api.crearPerfil('fam', 'Ana', 0); const antes = almacen['lexi.v1'];
  for (const mal of ['no json', '[]', '{"app":"calculi","perfiles":[]}', '{"app":"lexi"}', 'null']) assert(api.leerCopia(mal).error, mal);
  assert(api.leerCopia(JSON.stringify({ app: 'lexi', v: 99, perfiles: [] })).error.includes('más nueva')); assert.strictEqual(almacen['lexi.v1'], antes);
});
t('restaurar guarda antes lo anterior en lexi.bk', () => {
  const { api, almacen } = nuevo(); api.cargar(); api.crearPerfil('fam', 'Ana', 0); const antes = almacen['lexi.v1'];
  api.aplicarCopia(api.leerCopia(JSON.stringify({ app: 'lexi', v: 1, perfiles: [{ t: 'doc', n: 'Otra' }] })).datos);
  assert.strictEqual(almacen['lexi.bk'], antes); assert.strictEqual(api.EST.perfiles[0].n, 'Otra');
});
t('restaurar sobre datos de versión más nueva los conserva en lexi.bk', () => {
  const orig = JSON.stringify({ v: 9, perfiles: [] }); const { api, almacen } = nuevo({ 'lexi.v1': orig }); api.cargar(); assert(api.EST.bloq);
  api.aplicarCopia(api.leerCopia(JSON.stringify({ app: 'lexi', v: 1, perfiles: [] })).datos); assert.strictEqual(almacen['lexi.bk'], orig); assert(!api.EST.bloq);
});
t('migra v1 → v2: los perfiles antiguos conservan todo y reciben «pal» vacío', () => {
  const viejo = JSON.stringify({ v: 1, modo: 'doc', act: 'abcdef12', perfiles: [{ id: 'abcdef12', t: 'doc', n: '1.º A', av: 0, c: '2026-11-01' }], ajustes: { pin: '4321' } });
  const { api, almacen } = nuevo({ 'lexi.v1': viejo }); api.cargar();
  assert.strictEqual(api.EST.v, 2); assert.strictEqual(api.perfilAct().n, '1.º A'); assert.strictEqual(api.EST.ajustes.pin, '4321');
  assert.strictEqual(JSON.stringify(api.perfilAct().pal), JSON.stringify({})); assert(!api.EST.bloq); assert.strictEqual(almacen['lexi.v1'], viejo);
});
t('presentar una palabra: pasa a «La conocemos» (2), guarda fecha y no baja ni se repite', () => {
  const { api, almacen } = nuevo(); api.cargar(); api.crearPerfil('doc', '1.º A');
  assert.strictEqual(api.estadoPal(api.perfilAct(), 'observar').e, 1);
  assert(api.presentarPalabra('observar')); const a = api.perfilAct().pal.observar;
  assert.strictEqual(a.e, 2); assert(/^\d{4}-\d\d-\d\d$/.test(a.pres));
  api.perfilAct().pal.observar = { e: 3, pres: '2026-11-01' }; api.presentarPalabra('observar');
  assert.strictEqual(JSON.stringify(api.perfilAct().pal.observar), JSON.stringify({ e: 3, pres: '2026-11-01' }));
  const { api: b } = nuevo(almacen); b.cargar(); assert.strictEqual(b.perfilAct().pal.observar.e, 3);
});
t('el progreso es por perfil y se borra con el perfil', () => {
  const { api } = nuevo(); api.cargar(); const c = api.crearPerfil('doc', '1.º A'); api.presentarPalabra('comparar');
  const k = api.crearPerfil('fam', 'Lucía', 2); assert.strictEqual(api.estadoPal(api.perfilAct(), 'comparar').e, 1);
  api.entrarPerfil(c.id); assert.strictEqual(api.estadoPal(api.perfilAct(), 'comparar').e, 2);
  api.borrarPerfil(c.id); assert.strictEqual(api.perfilesDe('doc').length, 0);
});
t('en Modo Docente no guarda progreso; con datos bloqueados tampoco', () => {
  const { api, almacen } = nuevo(); api.cargar(); api.crearPerfil('doc', '1.º A'); const antes = almacen['lexi.v1'];
  api.MODO_DOCENTE = true; assert.strictEqual(api.presentarPalabra('enorme'), false); assert.strictEqual(almacen['lexi.v1'], antes);
  const { api: b, almacen: al } = nuevo({ 'lexi.v1': JSON.stringify({ v: 9, perfiles: [{ id: 'abcdef12', t: 'doc', n: 'X' }], act: 'abcdef12' }) }); b.cargar();
  assert.strictEqual(b.presentarPalabra('enorme'), false); assert.strictEqual(JSON.parse(al['lexi.v1']).v, 9);
});
t('sanea el progreso: ids raros, pasos fuera de rango y fechas malas', () => {
  const { api } = nuevo(); const o = api.limpiar({ perfiles: [{ t: 'doc', n: 'A', pal: { 'ok-1': { e: 9, pres: 'ayer' }, '<x>': { e: 2 }, malo: 5, fragil: { e: 0, pres: '2026-11-14' } } }] });
  assert.strictEqual(JSON.stringify(o.perfiles[0].pal), JSON.stringify({ 'ok-1': { e: 4, pres: '' }, fragil: { e: 1, pres: '2026-11-14' } }));
});
t('la copia de seguridad lleva el progreso y una copia v1 se restaura', () => {
  const { api } = nuevo(); api.cargar(); api.crearPerfil('doc', '1.º A'); api.presentarPalabra('fragil');
  const r = api.leerCopia(api.exportarTexto()); assert(r.datos); assert.strictEqual(r.datos.perfiles[0].pal.fragil.e, 2);
  const v1 = api.leerCopia(JSON.stringify({ app: 'lexi', v: 1, perfiles: [{ t: 'doc', n: 'Vieja' }] })); assert.strictEqual(JSON.stringify(v1.datos.perfiles[0].pal), JSON.stringify({}));
});
console.log(n + ' pruebas correctas');
