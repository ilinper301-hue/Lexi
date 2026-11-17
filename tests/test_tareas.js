/* Lógica de «Jugamos»: qué palabras y qué tareas toca, y que cada tarea se dibuja con su ficha. Uso: node tests/test_tareas.js */
const fs = require('fs'), vm = require('vm'), path = require('path'), assert = require('assert');
const R = path.join(__dirname, '..', 'src', 'js');
const arch = ['00-util.js', '05-palabras.js', ...fs.readdirSync(path.join(R, 'palabras')).sort().map(f => 'palabras/' + f), '20-datos.js', '30-escala-logica.js', '45-semana.js', '48-tareas.js'];
const codigo = 'const SC = {};\n' + arch.map(f => fs.readFileSync(path.join(R, f), 'utf8')).join('\n');
function nuevo() {
  const al = {}, ls = { getItem: k => (k in al ? al[k] : null), setItem: (k, v) => { al[k] = String(v); }, removeItem: k => { delete al[k]; } };
  const api = vm.runInContext(codigo + '\n;({cargar,crearPerfil,perfilAct,presentarPalabra,valorarTarea,montarJuego,tareaHTML,palabraPorId,palabrasJugables,TAREAS_ID,PALABRAS,set MODO_DOCENTE(v){MODO_DOCENTE=v}})', vm.createContext({ localStorage: ls, console }));
  api.cargar(); api.crearPerfil('doc', '1.º A'); return api;
}
let n = 0; const t = (nombre, f) => { f(); n++; console.log('  ok', nombre); };

t('sin palabras presentadas no hay juego; en Modo Docente sí', () => {
  const a = nuevo(); assert.strictEqual(a.montarJuego(a.perfilAct()).length, 0);
  a.MODO_DOCENTE = true; assert.strictEqual(a.montarJuego(null).length, 2);
});
t('solo juega con palabras presentadas, 2 como mucho y con tareas distintas', () => {
  const a = nuevo(); ['observar', 'comparar', 'ordenar'].forEach(id => a.presentarPalabra(id));
  const c = a.montarJuego(a.perfilAct()); assert.strictEqual(c.length, 2);
  assert(c.every(q => ['observar', 'comparar', 'ordenar'].includes(q.id))); assert.notStrictEqual(c[0].t, c[1].t);
  a.montarJuego(a.perfilAct(), 2).forEach(q => assert(a.TAREAS_ID.includes(q.t)));
});
t('una sola palabra presentada: una sola tarea', () => {
  const a = nuevo(); a.presentarPalabra('fragil'); assert.strictEqual(a.montarJuego(a.perfilAct()).length, 1);
});
t('la tarea cambia: nunca la misma que la última valorada de esa palabra', () => {
  const a = nuevo(); a.presentarPalabra('fragil'); const vistas = [];
  for (let i = 0; i < 12; i++) { const q = a.montarJuego(a.perfilAct())[0]; if (vistas.length) assert.notStrictEqual(q.t, vistas[vistas.length - 1]); vistas.push(q.t); a.valorarTarea('fragil', q.t, 'mitad'); }
  assert.strictEqual(new Set(vistas).size, 5);
});
t('las palabras con menos valoraciones van primero', () => {
  const a = nuevo(); ['observar', 'comparar', 'ordenar'].forEach(id => a.presentarPalabra(id));
  a.valorarTarea('observar', 'sentido', 'todos'); a.valorarTarea('comparar', 'sentido', 'todos');
  assert.strictEqual(a.montarJuego(a.perfilAct())[0].id, 'ordenar');
});
t('cada tarea de cada palabra de la semana 1 se dibuja con su ficha (todas las vueltas)', () => {
  const a = nuevo();
  for (const p of a.palabrasJugables(null).length ? a.palabrasJugables(null) : (a.MODO_DOCENTE = true, a.palabrasJugables(null)))
    for (const tarea of a.TAREAS_ID) for (let k = 0; k < 12; k++) {
      const h = a.tareaHTML({ id: p.id, t: tarea, k, rev: true }, p);
      assert(h.cuerpo.length > 20, `${p.id} ${tarea} ${k} vacío`); assert(!/undefined|\[object/.test(h.cuerpo + h.res), `${p.id} ${tarea} ${k}: ${h.cuerpo}`);
      if (tarea === 'elige') { assert((h.cuerpo.match(/class="opc[ "]/g) || []).length === 3); assert((h.cuerpo.match(/opc on/g) || []).length === 1); assert(h.cuerpo.includes('>' + p.palabra + '<')); }
      if (['sentido', 'ejemplo', 'elige'].includes(tarea)) assert(h.res.includes('veredicto'));
    }
});
t('«elige» pone la palabra correcta en sitios distintos', () => {
  const a = nuevo(); a.MODO_DOCENTE = true; const p = a.palabraPorId('observar'), pos = new Set();
  for (let k = 0; k < 3; k++) { const h = a.tareaHTML({ id: 'observar', t: 'elige', k, rev: true }, p).cuerpo; pos.add(h.indexOf('opc on')); }
  assert.strictEqual(pos.size, 3);
});
console.log(n + ' pruebas correctas');
