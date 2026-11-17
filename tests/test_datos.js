/* Lógica de perfiles y migración. Uso: node tests/test_datos.js */
const fs = require('fs'), vm = require('vm'), path = require('path'), assert = require('assert');
const R = path.join(__dirname, '..', 'src', 'js');
const codigo = ['00-util.js', '20-datos.js', '30-escala-logica.js'].map(f => fs.readFileSync(path.join(R, f), 'utf8')).join('\n');
function nuevo(almacen = {}) {
  const ls = { getItem: k => (k in almacen ? almacen[k] : null), setItem: (k, v) => { almacen[k] = String(v); }, removeItem: k => { delete almacen[k]; } };
  const ctx = vm.createContext({ localStorage: ls, console });
  const api = vm.runInContext(codigo + '\n;({cargar,guardar,guardarAjustes,crearPerfil,entrarPerfil,perfilesDe,perfilAct,avLibre,limpiar,errorNombre,renombrarPerfil,cambiarAnimal,borrarPerfil,fijarPin,exportarTexto,leerCopia,aplicarCopia,presentarPalabra,estadoPal,valorarTarea,hoy,valorarPalabra,presentarRegistro,palabraNueva,AVATARES,MAX_PERFILES,get EST(){return EST},set MODO_DOCENTE(v){MODO_DOCENTE=v}})', ctx);
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
t('migra v1 → v3: los perfiles antiguos conservan todo y reciben «pal» vacío', () => {
  const viejo = JSON.stringify({ v: 1, modo: 'doc', act: 'abcdef12', perfiles: [{ id: 'abcdef12', t: 'doc', n: '1.º A', av: 0, c: '2026-11-01' }], ajustes: { pin: '4321' } });
  const { api, almacen } = nuevo({ 'lexi.v1': viejo }); api.cargar();
  assert.strictEqual(api.EST.v, 4); assert.strictEqual(api.perfilAct().n, '1.º A'); assert.strictEqual(api.EST.ajustes.pin, '4321');
  assert.strictEqual(JSON.stringify(api.perfilAct().pal), JSON.stringify({})); assert(!api.EST.bloq); assert.strictEqual(almacen['lexi.v1'], viejo);
});
t('presentar una palabra: pasa a «La conocemos» (2), guarda fecha y no baja ni se repite', () => {
  const { api, almacen } = nuevo(); api.cargar(); api.crearPerfil('doc', '1.º A');
  assert.strictEqual(api.estadoPal(api.perfilAct(), 'observar').e, 1);
  assert(api.presentarPalabra('observar')); const a = api.perfilAct().pal.observar;
  assert.strictEqual(a.e, 2); assert(/^\d{4}-\d\d-\d\d$/.test(a.pres));
  api.perfilAct().pal.observar = { e: 3, pres: '2026-11-01', val: [] }; api.presentarPalabra('observar');
  assert.strictEqual(JSON.stringify(api.perfilAct().pal.observar), JSON.stringify({ e: 3, pres: '2026-11-01', val: [] }));
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
  const pal = o.perfiles[0].pal, bas = x => JSON.stringify({ e: x.e, pres: x.pres, val: x.val });
  assert.deepStrictEqual(Object.keys(pal), ['ok-1', 'fragil']);
  assert.strictEqual(bas(pal['ok-1']), JSON.stringify({ e: 4, pres: '', val: [] })); assert.strictEqual(bas(pal.fragil), JSON.stringify({ e: 1, pres: '2026-11-14', val: [] }));
});
t('la copia de seguridad lleva el progreso y una copia v1 se restaura', () => {
  const { api } = nuevo(); api.cargar(); api.crearPerfil('doc', '1.º A'); api.presentarPalabra('fragil');
  const r = api.leerCopia(api.exportarTexto()); assert(r.datos); assert.strictEqual(r.datos.perfiles[0].pal.fragil.e, 2);
  const v1 = api.leerCopia(JSON.stringify({ app: 'lexi', v: 1, perfiles: [{ t: 'doc', n: 'Vieja' }] })); assert.strictEqual(JSON.stringify(v1.datos.perfiles[0].pal), JSON.stringify({}));
});
t('migra v2 → v3: el progreso de v2 se conserva y recibe «val» vacío', () => {
  const viejo = JSON.stringify({ v: 2, modo: 'doc', act: 'abcdef12', perfiles: [{ id: 'abcdef12', t: 'doc', n: '1.º A', av: 0, c: '2026-11-01', pal: { observar: { e: 3, pres: '2026-11-05' } } }], ajustes: { pin: '4321' } });
  const { api, almacen } = nuevo({ 'lexi.v1': viejo }); api.cargar();
  assert.strictEqual(api.EST.v, 4); assert.strictEqual(api.estadoPal(api.perfilAct(), 'observar').e, 3); assert.strictEqual(api.perfilAct().pal.observar.pres, '2026-11-05');
  assert.strictEqual(api.perfilAct().pal.observar.val.length, 0); assert.strictEqual(almacen['lexi.v1'], viejo);
});
t('valorar una tarea: se apunta día, tarea y valor; no cambia el paso; solo valores conocidos', () => {
  const { api, almacen } = nuevo(); api.cargar(); api.crearPerfil('doc', '1.º A'); api.presentarPalabra('observar');
  assert(api.valorarTarea('observar', 'sentido', 'mitad')); const a = api.perfilAct().pal.observar;
  assert.strictEqual(a.e, 2); assert.strictEqual(a.val.length, 1); assert.strictEqual(a.val[0].t, 'sentido'); assert.strictEqual(a.val[0].v, 'mitad'); assert(/^\d{4}-\d\d-\d\d$/.test(a.val[0].d));
  assert.strictEqual(api.valorarTarea('observar', 'baila', 'todos'), false); assert.strictEqual(api.valorarTarea('observar', 'sentido', 'genial'), false); assert.strictEqual(api.valorarTarea('<x>', 'sentido', 'todos'), false);
  const { api: b } = nuevo(almacen); b.cargar(); assert.strictEqual(b.perfilAct().pal.observar.val[0].v, 'mitad');
});
t('valoraciones: máximo 30, las últimas; las inválidas se descartan al leer; en Modo Docente no guarda', () => {
  const { api } = nuevo(); api.cargar(); api.crearPerfil('doc', '1.º A'); api.presentarPalabra('observar');
  for (let i = 0; i < 35; i++) api.valorarTarea('observar', i % 2 ? 'habla' : 'acaba', 'pocos');
  assert.strictEqual(api.perfilAct().pal.observar.val.length, 30);
  const o = api.limpiar({ perfiles: [{ t: 'doc', n: 'A', pal: { fragil: { e: 2, val: [{ d: '2026-11-14', t: 'sentido', v: 'todos' }, { d: 'x', t: 'sentido', v: 'todos' }, { d: '2026-11-14', t: 'otra', v: 'todos' }, 7] } } }] });
  assert.strictEqual(o.perfiles[0].pal.fragil.val.length, 1);
  const { api: c, almacen } = nuevo(); c.cargar(); c.crearPerfil('doc', '1.º A'); c.presentarPalabra('observar'); const antes = almacen['lexi.v1'];
  c.MODO_DOCENTE = true; assert.strictEqual(c.valorarTarea('observar', 'sentido', 'todos'), false); assert.strictEqual(almacen['lexi.v1'], antes);
});
/* ===== v4: escala y cajas (tests 54-57 de docs/pedagogia.md apartado 12) ===== */
const v3 = (pal, extra = {}) => JSON.stringify({ v: 3, modo: 'doc', act: 'abcdef12', perfiles: [{ id: 'abcdef12', t: 'doc', n: '1.º A', av: 0, c: '2026-11-01', pal }], ajustes: { pin: '4321' }, ...extra });
const PAL_V3 = {
  fragil: { e: 2, pres: '2026-11-16', val: [{ d: '2026-11-16', t: 'ejemplo', v: 'todos' }, { d: '2026-11-17', t: 'ejemplo', v: 'todos' }, { d: '2026-11-18', t: 'sentido', v: 'todos' }, { d: '2026-11-18', t: 'acaba', v: 'pocos' }] },
  observar: { e: 2, pres: '2026-11-16', val: [{ d: '2026-11-17', t: 'acaba', v: 'todos' }, { d: '2026-11-19', t: 'habla', v: 'mitad' }, { d: '2026-11-20', t: 'sentido', v: 'pocos' }] },
  curioso: { e: 2, pres: '2026-11-16', val: [] }, enorme: { e: 1, pres: '', val: [] }
};
t('54. migra v3 → v4: como si las valoraciones se hubieran aplicado en orden; el historial no cambia; las no presentadas siguen en el paso 1', () => {
  const { api, almacen } = nuevo({ 'lexi.v1': v3(PAL_V3) }); api.cargar(); const pal = api.perfilAct().pal, j = x => JSON.parse(JSON.stringify(x));
  for (const id of ['fragil', 'observar', 'curioso']) {
    let r = api.presentarRegistro(api.palabraNueva(), PAL_V3[id].pres); for (const x of PAL_V3[id].val) r = api.valorarPalabra(r, x.t, x.v, x.d);
    assert.deepStrictEqual(j(pal[id]), j({ ...r, val: PAL_V3[id].val }), id); assert.deepStrictEqual(j(pal[id].val), PAL_V3[id].val, 'historial ' + id);
  }
  /* a mano: fragil sube al paso 3 el 18 (entender el 17 y el 18) y el «pocos» de usar el mismo día no la baja; observar sigue en 2 */
  assert.strictEqual(pal.fragil.e, 3); assert.strictEqual(pal.fragil.caja, 1); assert.strictEqual(pal.fragil.prox, '2026-11-19'); assert.strictEqual(pal.fragil.u.ejemplo, 2);
  assert.strictEqual(pal.observar.e, 2); assert.strictEqual(pal.observar.ut, 'sentido'); assert.strictEqual(pal.curioso.e, 2); assert.strictEqual(pal.curioso.prox, '2026-11-17');
  assert.strictEqual(pal.enorme.e, 1); assert.strictEqual(pal.enorme.prox, ''); assert.strictEqual(api.EST.v, 4);
  assert.strictEqual(almacen['lexi.v1'], v3(PAL_V3)); /* leer no escribe: el disco sigue en v3 hasta el primer guardado */
  api.guardar(); assert.strictEqual(JSON.parse(almacen['lexi.v1']).v, 4);
  const { api: b } = nuevo(almacen); b.cargar(); assert.deepStrictEqual(JSON.parse(JSON.stringify(b.perfilAct().pal)), JSON.parse(JSON.stringify(pal))); /* ya en v4: no se repite la migración */
});
t('54b. un paso guardado más alto que el que salen de las reglas no baja (nunca se pierde progreso)', () => {
  const { api } = nuevo({ 'lexi.v1': v3({ observar: { e: 3, pres: '2026-11-05' } }) }); api.cargar(); assert.strictEqual(api.perfilAct().pal.observar.e, 3);
});
t('55. una copia de seguridad v3 se restaura y se migra igual', () => {
  const { api } = nuevo(); api.cargar();
  const copia = JSON.stringify({ app: 'lexi', v: 3, exportado: '2026-11-20', modo: 'doc', act: 'abcdef12', perfiles: [{ id: 'abcdef12', t: 'doc', n: '1.º A', av: 0, c: '2026-11-01', pal: PAL_V3 }], ajustes: { pin: '4321' } });
  const r = api.leerCopia(copia); assert(r.datos); const { api: m } = nuevo({ 'lexi.v1': v3(PAL_V3) }); m.cargar();
  assert.deepStrictEqual(JSON.parse(JSON.stringify(r.datos.perfiles[0].pal)), JSON.parse(JSON.stringify(m.perfilAct().pal)));
  assert.strictEqual(r.datos.v, 4); assert(api.aplicarCopia(r.datos)); assert.strictEqual(JSON.parse(api.exportarTexto()).v, 4);
});
t('56. saneado v4: fechas mal escritas, caja fuera de 1-5 o cuentas negativas se corrigen sin perder el paso', () => {
  const { api } = nuevo();
  const o = api.limpiar({ v: 4, perfiles: [{ t: 'doc', n: 'A', ses: 'ayer', pal: {
    a: { e: 3, pres: '2026-11-16', val: [], dA: ['2026-11-17', 'x', '2026-11-17'], dB: 'no', cam: '17/11', mal: 5, caja: 9, prox: 'pronto', u: { sentido: -4, acaba: 2.7, baila: 3 }, ut: 'baila', ov: 'sí' },
    b: { e: 4, pres: '2026-11-16', val: [], caja: -3, prox: '' }, c: { e: 4, pres: '2026-11-16', val: [], caja: 5, prox: '' }, d: { e: 2, pres: 'mal', caja: 'x' } } }], ajustes: { nuevas: 7 } });
  const p = o.perfiles[0], a = p.pal.a; assert.strictEqual(p.ses, ''); assert.strictEqual(o.ajustes.nuevas, 2);
  assert.strictEqual(a.e, 3); assert.strictEqual(a.caja, 5); assert.strictEqual(a.prox, '2026-11-17'); assert.deepStrictEqual(JSON.parse(JSON.stringify(a.dA)), ['2026-11-17']); assert.deepStrictEqual(JSON.parse(JSON.stringify(a.dB)), []);
  assert.strictEqual(a.cam, ''); assert.strictEqual(a.mal, ''); assert.deepStrictEqual(JSON.parse(JSON.stringify(a.u)), { acaba: 2 }); assert.strictEqual(a.ut, ''); assert.strictEqual(a.ov, false);
  assert.strictEqual(p.pal.b.e, 4); assert.strictEqual(p.pal.b.caja, 1); assert.strictEqual(p.pal.b.prox, '2026-11-17');
  assert.strictEqual(p.pal.c.prox, ''); /* en «La usamos» y caja 5, sin fecha = descansa: es válido */
  assert.strictEqual(p.pal.d.e, 2); assert.strictEqual(p.pal.d.caja, 1); assert(/^\d{4}-\d\d-\d\d$/.test(p.pal.d.prox));
  const dos = api.limpiar(JSON.parse(JSON.stringify(o))); assert.deepStrictEqual(JSON.parse(JSON.stringify(dos)), JSON.parse(JSON.stringify(o))); /* idempotente */
});
t('57. el día es el local: a las 00:30 de Madrid, hoy() da la fecha de Madrid, no la de UTC', () => {
  const { api } = nuevo(), tz = process.env.TZ;
  try {
    process.env.TZ = 'Europe/Madrid'; assert.strictEqual(api.hoy(new Date('2026-11-16T23:30:00Z')), '2026-11-17'); /* en UTC todavía es el 16 */
    assert.strictEqual(api.hoy(new Date('2026-07-16T22:30:00Z')), '2026-07-17'); /* horario de verano */
    process.env.TZ = 'America/Los_Angeles'; assert.strictEqual(api.hoy(new Date('2026-11-17T06:30:00Z')), '2026-11-16'); /* en UTC ya es el 17 */
  } finally { if (tz === undefined) delete process.env.TZ; else process.env.TZ = tz; }
  assert(/^\d{4}-\d\d-\d\d$/.test(api.hoy()));
});
console.log(n + ' pruebas correctas');
