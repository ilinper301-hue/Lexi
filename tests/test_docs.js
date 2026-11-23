// Contenido de docs/: fichas de 1.º y 2.º, `fam` y piezas (tests 135, 136 y 137 de docs/segundo.md)
// Uso: node tests/test_docs.js
const path = require('path');
const { leerDocs } = require('../tools/validar-docs.js');
const { revisaFam, revisaPieza, idsRepetidos } = require('../tools/reglas-ficha.js');
let hechas = 0; const fallos = [];
const ok = (cond, msg) => { hechas++; if (!cond) fallos.push(msg); };
const copia = x => JSON.parse(JSON.stringify(x));

const { todas, piezas, errores } = leerDocs(path.resolve(__dirname, '../docs'));
const de = c => todas.filter(p => p.curso === c);
ok(errores.length === 0, 'el comprobador da errores: ' + errores.join(' | '));
ok(de(1).length === 72, '1.º debe tener 72 palabras (semanas 1 a 12): ' + de(1).length);
ok(de(2).length > 0 && de(2).length % 6 === 0, '2.º: 6 palabras por semana escrita');
ok(piezas.length === de(2).length / 6, 'una pieza por cada semana escrita de 2.º (test 136)');
// Campo `pregunta` (punto 3): en 1.º la llevan todos los enlaces y nombres, y las parejas, necesario y necesitar
const CON_PREG = ['parecido', 'diferente', 'necesario', 'necesitar'];
for (const p of de(1)) if (['enlace', 'nombre'].includes(p.tipo) || CON_PREG.includes(p.id)) ok(p.pregunta, p.id + ': le falta `pregunta`');
ok(de(1).filter(p => p.pregunta).length === 16, '1.º: 16 fichas con `pregunta`');
{ const { revisa } = require('../tools/reglas-ficha.js'); const er = []; const p = copia(de(1).find(x => x.pregunta)); p.pregunta = 'Es lo último';
  revisa(p, p.semana, new Set(), t => er.push(t)); ok(er.some(t => t.startsWith('pregunta')), 'el comprobador no detecta una `pregunta` mal escrita'); }
ok(idsRepetidos(todas).length === 0, 'ningún id se repite entre 1.º y 2.º (test 137)');
ok(idsRepetidos([...todas, copia(de(1)[0])]).length === 1, 'test 137: no detecta un id repetido');

// Test 135: el comprobador detecta un `fam` mal escrito
const idsPieza = new Set(piezas.map(z => z.id));
const conFam = () => copia(de(2).find(p => p.fam && p.fam.si.some(s => s.pieza)));
const fallaFam = (cambia, trozo) => {
  const p = conFam(); cambia(p); const er = []; revisaFam(p, idsPieza, t => er.push(t));
  ok(er.some(t => t.includes(trozo)), 'test 135: no detecta «' + trozo + '»');
};
{ const er = []; revisaFam(conFam(), idsPieza, t => er.push(t)); ok(er.length === 0, 'la ficha de prueba debería pasar: ' + er.join(' | ')); }
fallaFam(p => { p.fam.si = p.fam.si.slice(0, 1); }, 'al menos 2');
fallaFam(p => { p.fam.no = []; }, 'al menos 1 intrusa');
fallaFam(p => { p.fam.si[0].t = 'Sin hueco.'; }, 'un solo hueco');
fallaFam(p => { p.fam.si[0].t = '___ y ___.'; }, 'un solo hueco');
fallaFam(p => { p.fam.si[0].t = 'La ' + p.fam.si[0].p + ' es ___.'; }, 'ya dice la palabra');
fallaFam(p => { p.rel.familia = []; }, 'no está en rel.familia');
fallaFam(p => { p.fam.si.find(s => s.pieza).pieza = 'noexiste'; }, 'no existe');
fallaFam(p => { p.fam.no[0].p = p.fam.si[0].p; }, 'repetida');
fallaFam(p => { p.rel.familia.push(p.fam.no[0].p); }, 'no es una intrusa');
fallaFam(p => { delete p.fam.no[0].por; }, 'falta p o por');

// Test 136: el comprobador detecta una pieza mal escrita
const z0 = piezas[0], ids0 = de(2).filter(p => p.semana === z0.semana).map(p => p.id);
const fallaPieza = (cambia, trozo) => {
  const z = copia(z0); cambia(z); const er = []; revisaPieza(z, z0.semana, ids0, t => er.push(t));
  ok(er.some(t => t.includes(trozo)), 'test 136: no detecta «' + trozo + '»');
};
{ const er = []; revisaPieza(copia(z0), z0.semana, ids0, t => er.push(t)); ok(er.length === 0, 'la pieza de prueba debería pasar: ' + er.join(' | ')); }
fallaPieza(z => { z.idea = Array(19).fill('palabra').join(' ') + '.'; }, 'idea de 19');
fallaPieza(z => { z.ejemplos = z.ejemplos.slice(0, 3); }, 'de 4 a 6');
fallaPieza(z => { z.ejemplos = Array(7).fill(z.ejemplos[0]); }, 'de 4 a 6');
fallaPieza(z => { z.prueba.forEach(x => { x.ok = true; }); }, '2 sí y 2 no');
fallaPieza(z => { z.ancla = ['observar']; }, 'no es una palabra de su semana');
fallaPieza(z => { z.curso = 1; }, 'son de 2.º');
fallaPieza(z => { z.idea = 'Un prefijo va delante.'; }, 'se dice «pieza»');
for (const z of piezas) ok(de(2).filter(p => p.semana === z.semana).length === 6, 'pieza ' + z.id + ': su semana no tiene 6 palabras');

console.log(fallos.length ? fallos.join('\n') : '');
console.log(hechas + ' comprobaciones, ' + fallos.length + ' fallos');
process.exit(fallos.length ? 1 : 0);
