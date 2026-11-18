/* Atajos de teclado o mando y pantalla completa (reglas AT1-AT4 de docs/aula.md; test 92). Uso: node tests/test_atajos.js */
const fs = require('fs'), vm = require('vm'), path = require('path'), assert = require('assert');
const R = path.join(__dirname, '..', 'src', 'js');
const arch = ['00-util.js', '05-palabras.js', '12-iconos.js', ...fs.readdirSync(path.join(R, 'palabras')).sort().map(f => 'palabras/' + f), '20-datos.js', '30-escala-logica.js', '32-eleccion.js', '34-hoy.js', '45-semana.js', '46-hoy.js', '47-muro.js', '48-tareas.js', '55-atajos.js'];
const codigo = 'const SC = {}; let PANT = "";\n' + arch.map(f => fs.readFileSync(path.join(R, f), 'utf8')).join('\n');
/* Contexto con las acciones sustituidas por registros: se prueba qué se llamaría, sin pintar nada. */
function nuevo(doc) {
  const ctx = vm.createContext({ console, localStorage: { getItem: () => null, setItem() {}, removeItem() {} }, document: doc });
  vm.runInContext(codigo + `
    var LLAMADAS = []; for (const f of ['presMover','hoyNuevaSiguiente','atras','juegoRevelar','juegoSeguirOtro','hoyAvanzar','hoyTerminar','azarVer','azarOtra','juegoValorar'])
      globalThis[f] = (...a) => LLAMADAS.push([f, ...a].join(':'));
    var api = { atajoAccion, atajoIgnorado, atajoTecla, faseAtajos, botonCompleta, completaPosible, TEXTO_ATAJOS,
      poner: (p, o = {}) => { PANT = p; if ('JUEGO' in o) JUEGO = o.JUEGO; if ('PRES' in o) PRES = o.PRES; if ('HOY' in o) HOY = o.HOY; if ('AZAR' in o) AZAR = o.AZAR; } };`, ctx);
  return ctx;
}
let n = 0; const t = (nombre, f) => { f(); n++; console.log('  ok', nombre); };
const tecla = (key, extra = {}) => ({ key, target: { tagName: 'BODY' }, ...extra });
const valorar = { cola: [{ id: 'fragil', t: 'acaba' }], i: 0 }; /* «acaba» se valora sin respuesta */

t('test 92 · en la pantalla de valorar, AvPág no avanza y la tecla 1 valora «casi todos»', () => {
  const c = nuevo(); c.api.poner('juego', { JUEGO: valorar });
  assert.strictEqual(c.api.faseAtajos(), 'valorar');
  for (const k of ['PageDown', 'ArrowRight', ' ', 'Enter']) assert.strictEqual(c.api.atajoTecla(tecla(k)), false, k);
  assert.deepStrictEqual([...c.LLAMADAS], []);
  assert.strictEqual(c.api.atajoTecla(tecla('1')), true);
  assert.deepStrictEqual([...c.LLAMADAS], ['juegoValorar:todos']);
});
t('2 = la mitad, 3 = pocos, 0 = seguir sin valorar', () => {
  const c = nuevo(); c.api.poner('juego', { JUEGO: valorar });
  ['2', '3', '0'].forEach(k => c.api.atajoTecla(tecla(k)));
  assert.deepStrictEqual([...c.LLAMADAS], ['juegoValorar:mitad', 'juegoValorar:pocos', 'juegoValorar:']);
});
t('antes de la respuesta, siguiente la enseña y los números no hacen nada', () => {
  const c = nuevo(); c.api.poner('juego', { JUEGO: { cola: [{ id: 'fragil', t: 'sentido' }], i: 0 } });
  assert.strictEqual(c.api.faseAtajos(), 'revelar');
  assert.strictEqual(c.api.atajoTecla(tecla('1')), false);
  ['ArrowRight', ' ', 'Enter', 'PageDown'].forEach(k => c.api.atajoTecla(tecla(k)));
  assert.deepStrictEqual([...c.LLAMADAS], Array(4).fill('juegoRevelar'));
});
t('presentación: derecha/espacio/Intro/AvPág avanzan; izquierda/RePág vuelven, salvo en la primera', () => {
  const c = nuevo(); c.api.poner('pres', { PRES: { id: 'fragil', i: 0 } });
  c.api.atajoTecla(tecla('ArrowLeft')); c.api.atajoTecla(tecla('PageUp')); assert.deepStrictEqual([...c.LLAMADAS], []);
  c.api.poner('pres', { PRES: { id: 'fragil', i: 3 } });
  ['ArrowRight', ' ', 'Enter', 'PageDown', 'ArrowLeft', 'PageUp'].forEach(k => c.api.atajoTecla(tecla(k)));
  assert.deepStrictEqual([...c.LLAMADAS], ['presMover:1', 'presMover:1', 'presMover:1', 'presMover:1', 'presMover:-1', 'presMover:-1']);
});
t('al final de la presentación: «Seguir» dentro de Hoy, «Terminar» fuera', () => {
  const c = nuevo(); c.api.poner('pres', { PRES: { id: 'fragil', i: 8 }, HOY: null });
  c.api.atajoTecla(tecla('ArrowRight')); c.api.poner('pres', { HOY: { parte: 'nueva' } }); c.api.atajoTecla(tecla('ArrowRight'));
  assert.deepStrictEqual([...c.LLAMADAS], ['atras', 'hoyNuevaSiguiente']);
});
t('«También quiere decir», «¡Hecho!» de Hoy, cierre y «Una al azar»', () => {
  const c = nuevo(); c.api.poner('juego', { JUEGO: { cola: [{ id: 'fragil', t: 'sentido' }], i: 0, otro: 'fragil' } }); c.api.atajoTecla(tecla('PageDown'));
  c.api.poner('juego', { JUEGO: { cola: [{ id: 'fragil', t: 'sentido' }], i: 1, hoy: 'Jugamos' } }); c.api.atajoTecla(tecla('PageDown'));
  c.api.poner('juego', { JUEGO: { cola: [{ id: 'fragil', t: 'sentido' }], i: 1 } }); c.api.atajoTecla(tecla('PageDown')); /* sin Hoy: no hace nada */
  c.api.poner('cierre', { HOY: { parte: 'cierre' } }); c.api.atajoTecla(tecla('Enter'));
  c.api.poner('azar', { AZAR: { id: 'fragil', rev: false } }); c.api.atajoTecla(tecla('Enter')); c.api.poner('azar', { AZAR: { id: 'fragil', rev: true } }); c.api.atajoTecla(tecla('Enter'));
  assert.deepStrictEqual([...c.LLAMADAS], ['juegoSeguirOtro', 'hoyAvanzar', 'hoyTerminar', 'azarVer', 'azarOtra']);
});
t('en las demás pantallas no hay atajos', () => {
  const c = nuevo(); for (const p of ['inicio', 'quien', 'casa', 'semana', 'muro', 'consulta', 'tz', 'pin']) { c.api.poner(p); assert.strictEqual(c.api.atajoTecla(tecla('ArrowRight')), false, p); assert.strictEqual(c.api.atajoTecla(tecla('1')), false, p); }
  assert.deepStrictEqual([...c.LLAMADAS], []);
});
t('no funcionan escribiendo, con Ctrl/Alt/Meta ni al mantener pulsada la tecla', () => {
  const c = nuevo(); c.api.poner('juego', { JUEGO: valorar });
  for (const tg of ['INPUT', 'TEXTAREA', 'SELECT']) assert.strictEqual(c.api.atajoTecla({ key: '1', target: { tagName: tg } }), false, tg);
  assert.strictEqual(c.api.atajoTecla({ key: '1', target: { tagName: 'DIV', isContentEditable: true } }), false);
  for (const m of ['ctrlKey', 'altKey', 'metaKey', 'repeat']) assert.strictEqual(c.api.atajoTecla(tecla('1', { [m]: true })), false, m);
  assert.deepStrictEqual([...c.LLAMADAS], []);
});
t('con un botón enfocado, Intro y espacio los atiende el botón; las flechas y los números siguen valiendo', () => {
  const c = nuevo(); c.api.poner('juego', { JUEGO: { cola: [{ id: 'fragil', t: 'sentido' }], i: 0 } });
  assert.strictEqual(c.api.atajoTecla({ key: 'Enter', target: { tagName: 'BUTTON' } }), false);
  assert.strictEqual(c.api.atajoTecla({ key: 'ArrowRight', target: { tagName: 'BUTTON' } }), true);
});
t('pantalla completa: el botón no sale si el navegador no la permite (iPhone) y sí en las pantallas de sesión y muro', () => {
  const oy = { addEventListener() {} }, si = { ...oy, fullscreenEnabled: true, documentElement: { requestFullscreen() {} } }, no = { ...oy, documentElement: {} };
  let c = nuevo(no); c.api.poner('pres'); assert.strictEqual(c.api.botonCompleta(), '');
  c = nuevo(si); for (const p of ['semana', 'pres', 'juego', 'cierre', 'muro']) { c.api.poner(p); assert(c.api.botonCompleta().includes('Pantalla completa'), p); }
  c.api.poner('casa'); assert.strictEqual(c.api.botonCompleta(), '');
});
t('AT4: hay una línea que explica los atajos en la zona del tutor', () => {
  assert(/AvPág/.test(nuevo().api.TEXTO_ATAJOS) && /TEXTO_ATAJOS/.test(fs.readFileSync(path.join(R, '50-tutor.js'), 'utf8')));
});
console.log(n + ' pruebas correctas');
