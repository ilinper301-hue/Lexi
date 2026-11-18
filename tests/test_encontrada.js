/* «La hemos encontrado» (paso 5.5): tests 81-85 de docs/aula.md. Uso: node tests/test_encontrada.js */
const fs = require('fs'), vm = require('vm'), path = require('path'), assert = require('assert');
const R = path.join(__dirname, '..', 'src', 'js');
const codigo = ['00-util.js', '20-datos.js', '30-escala-logica.js', '34-hoy.js'].map(f => fs.readFileSync(path.join(R, f), 'utf8')).join('\n');
function nuevo(almacen = {}) {
  const ls = { getItem: k => (k in almacen ? almacen[k] : null), setItem: (k, v) => { almacen[k] = String(v); }, removeItem: k => { delete almacen[k]; } };
  const ctx = vm.createContext({ localStorage: ls, console });
  const api = vm.runInContext('const PALABRAS = [];\n' + codigo + '\n;({cargar,guardar,crearPerfil,perfilAct,limpiar,presentarPalabra,valorarTarea,hoy,estadoPal,apuntarEncontrada,deshacerEncontrada,fijarPreg,encDe,encTotal,encTexto,conEncontrada,hoyPreguntaEnc,palabraNueva,presentarRegistro,get EST(){return EST},set MODO_DOCENTE(v){MODO_DOCENTE=v}})', ctx);
  api.cargar(); return { api, almacen };
}
const J = x => JSON.parse(JSON.stringify(x));
let n = 0; const t = (nombre, f) => { f(); n++; console.log('  ok ' + nombre); };
const clase = () => { const r = nuevo(); r.api.crearPerfil('doc', 'Clase'); r.api.presentarPalabra('observar'); r.api.valorarTarea('observar', 'sentido', 'todos'); return r; };
const SIN_ENC = a => { const b = J(a); delete b.enc; return b; };

t('81. apuntar «oída» suma 1 a enc.o y guarda el día, sin cambiar paso, caja, fecha de vuelta ni días buenos (EN5, EN7)', () => {
  const { api, almacen } = clase(), antes = J(api.estadoPal(api.perfilAct(), 'observar'));
  const r = api.apuntarEncontrada('observar', 'o'); assert(r);
  const a = api.estadoPal(api.perfilAct(), 'observar');
  assert.deepStrictEqual(J(a.enc), { o: 1, v: 0, d: 0, ult: api.hoy() });
  assert.deepStrictEqual(SIN_ENC(a), antes); /* todo lo demás igual */
  api.apuntarEncontrada('observar', 'd'); api.apuntarEncontrada('observar', 'd');
  assert.deepStrictEqual(J(api.encDe(api.estadoPal(api.perfilAct(), 'observar'))), { o: 1, v: 0, d: 2, ult: api.hoy() });
  assert.strictEqual(api.encTexto(api.estadoPal(api.perfilAct(), 'observar')), 'La hemos encontrado 3 veces: 1 oída · 2 dicha');
  const { api: b } = nuevo(almacen); /* sobrevive a guardar y volver a leer */
  assert.deepStrictEqual(J(b.encDe(b.estadoPal(b.perfilAct(), 'observar'))), { o: 1, v: 0, d: 2, ult: api.hoy() });
  /* y una valoración posterior no la pierde */
  api.valorarTarea('observar', 'ejemplo', 'todos'); assert.strictEqual(api.encTotal(api.estadoPal(api.perfilAct(), 'observar')), 3);
});
t('82. «Deshacer» deja enc como estaba (EN4)', () => {
  const { api } = clase(), p = () => api.estadoPal(api.perfilAct(), 'observar');
  const r1 = api.apuntarEncontrada('observar', 'v'); assert.strictEqual(r1.ant, null);
  api.deshacerEncontrada('observar', r1.ant); assert.strictEqual(p().enc, undefined); assert.strictEqual(api.encTotal(p()), 0);
  api.apuntarEncontrada('observar', 'o'); const antes = J(p().enc);
  const r2 = api.apuntarEncontrada('observar', 'o'); assert.strictEqual(api.encTotal(p()), 2);
  api.deshacerEncontrada('observar', r2.ant); assert.deepStrictEqual(J(p().enc), antes);
});
t('83. no se puede apuntar una palabra sin presentar, ni un modo que no existe (EN2)', () => {
  const { api } = clase();
  assert.strictEqual(api.apuntarEncontrada('comparar', 'o'), null); assert.strictEqual(api.estadoPal(api.perfilAct(), 'comparar').enc, undefined);
  assert.strictEqual(api.apuntarEncontrada('observar', 'x'), null); assert.strictEqual(api.encTotal(api.estadoPal(api.perfilAct(), 'observar')), 0);
  const nueva = api.palabraNueva(); assert.strictEqual(api.conEncontrada(nueva, 'o', '2026-11-18'), nueva); /* función pura: igual */
});
t('84. en Modo Docente, apuntar no guarda (EN9)', () => {
  const { api, almacen } = clase(), antes = almacen['lexi.v1']; api.MODO_DOCENTE = true;
  assert.strictEqual(api.apuntarEncontrada('observar', 'o'), null); assert.strictEqual(almacen['lexi.v1'], antes);
  assert.strictEqual(api.encTotal(api.estadoPal(api.perfilAct(), 'observar')), 0);
});
t('85. con el ajuste apagado, «Hoy» no empieza con la pregunta; encendido, solo si hay palabras presentadas (EN1)', () => {
  const { api } = clase(), pal = api.perfilAct().pal;
  assert.strictEqual(api.EST.ajustes.preg, true); assert.strictEqual(api.hoyPreguntaEnc(api.EST.ajustes.preg, pal), true);
  api.fijarPreg(false); assert.strictEqual(api.EST.ajustes.preg, false); assert.strictEqual(api.hoyPreguntaEnc(api.EST.ajustes.preg, pal), false);
  api.fijarPreg(true); assert.strictEqual(api.hoyPreguntaEnc(api.EST.ajustes.preg, {}), false);
});
t('el ajuste y las cuentas sobreviven al saneado; datos raros se corrigen (EN7)', () => {
  const { api, almacen } = clase(); api.apuntarEncontrada('observar', 'o'); api.fijarPreg(false);
  const { api: b } = nuevo(almacen); assert.strictEqual(b.EST.ajustes.preg, false); assert.strictEqual(b.encTotal(b.estadoPal(b.perfilAct(), 'observar')), 1);
  const l = api.limpiar({ v: 4, perfiles: [{ t: 'doc', n: 'C', pal: { observar: { e: 2, pres: '2026-11-16', enc: { o: -3, v: 'x', d: 2.9, ult: 'mal' } } } }] });
  assert.deepStrictEqual(J(l.perfiles[0].pal.observar.enc), { o: 0, v: 0, d: 2, ult: '' }); assert.strictEqual(l.ajustes.preg, true);
});
console.log(n + ' pruebas correctas');
