// Reglas de una ficha de palabra y de una pieza (las usan tools/validar-docs.js, tests/test_contenido.js y tests/test_docs.js)
const sinTilde = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const nPal = s => s.replace(/[«»¡!¿?.,:;…()]/g, ' ').split(/\s+/).filter(Boolean).length;
/* revisa(p, sem, gestos, e): sem = semana esperada; gestos = Set de la semana; e(texto) anota un error */
function revisa(p, sem, gestos, e) {
    if (p.semana !== sem) e('semana mal');
    if (p.silabas.join('') !== p.palabra.replace(/ /g, '')) e('sílabas no forman la palabra');
    if (!['accion', 'cualidad', 'nombre', 'enlace'].includes(p.tipo)) e('tipo desconocido');
    if (!['pensar', 'como-son', 'sentir', 'convivir', 'medio'].includes(p.bloque)) e('bloque desconocido');
    // Campos técnicos de la Fase 3 (docs/pedagogia.md, apartado 13): `orden` (1.º: lugar en docs/semana-NN.md) y `sep` (marca común)
    if (p.curso === 1 && !(Number.isInteger(p.orden) && p.orden >= 1 && p.orden <= 6)) e('orden: debe ser un número de 1 a 6');
    if (p.curso !== 1 && p.orden !== undefined && !(Number.isInteger(p.orden) && p.orden >= 1 && p.orden <= 6)) e('orden: debe ser un número de 1 a 6');
    if (p.sep !== undefined && !/^[a-z]+(-[a-z]+)+$/.test(p.sep)) e('sep: texto en minúsculas con guiones (p. ej. «suave-aspero»)');
    if (nPal(p.def) > 18) e('definición de ' + nPal(p.def) + ' palabras');
    if (!/[.…]$/.test(p.def)) e('definición sin punto final');
    if (p.escena.img !== p.id + '.webp') e('imagen mal nombrada');
    const frases = p.escena.texto.split(/(?<=[.!?»])\s+(?=[A-ZÁÉÍÓÚÑ¡¿«])/);
    if (frases.length < 3 || frases.length > 5) e('escena con ' + frases.length + ' frases');
    const raiz = sinTilde(p.palabra).slice(0, 3);
    if (!sinTilde(frases[frases.length - 1]).includes(raiz)) e('la palabra no está en la última frase de la escena');
    if (p.contextos.length !== 3) e('contextos: ' + p.contextos.length);
    if (p.sentido.length !== 4 || p.sentido.filter(s => s.ok).length !== 2) e('sentido: deben ser 2 sí y 2 no');
    if (p.sentido.some(s => !s.por)) e('sentido sin porqué');
    if (p.ejemplos.length !== 6 || p.ejemplos.filter(s => s.ok).length !== 3) e('ejemplos: deben ser 3 sí y 3 no');
    if (p.acaba.length !== 2 || p.acaba.some(a => !a.includes('…'))) e('acaba: 2 frases con «…»');
    if (!p.habla) e('falta habla');
    if (!p.gesto) e('falta gesto');
    if (gestos.has(p.gesto)) e('gesto repetido en la semana');
    gestos.add(p.gesto);
    for (const k of ['parecida', 'contraria', 'familia']) if (!Array.isArray(p.rel[k])) e('rel.' + k);
    // Normas de `gesto` y `relaciona` (docs/tareas-gesto-relaciona.md, apartado 6; test 75)
    if (p.rel.mas !== undefined && (!Array.isArray(p.rel.mas) || !p.rel.mas.length)) e('rel.mas: si está, es una lista con algo');
    const raices = sinTilde(p.palabra).split(' ').filter(w => w.length >= 4).map(w => w.slice(0, 5));
    const nombra = t => sinTilde(t).split(/[^a-zñ]+/).some(w => raices.some(r => w.startsWith(r)));
    if (nombra(p.gesto)) e('el gesto nombra la palabra o una de su familia');
    for (const k of ['parecida', 'contraria']) for (const x of p.rel[k] || []) {
      if (raices.some(r => sinTilde(x).startsWith(r))) e('rel.' + k + ': «' + x + '» empieza como la palabra: es de su misma familia (va en rel.mas)');
      if ((p.rel.mas || []).includes(x)) e('rel.' + k + ': «' + x + '» está también en rel.mas');
    }
    if (new Set([...p.rel.parecida, ...p.rel.contraria]).size !== p.rel.parecida.length + p.rel.contraria.length) e('rel: la misma palabra en parecida y contraria, o repetida');
    const textos = [p.def, p.otro || '', p.escena.texto, ...p.contextos, p.gesto, p.habla, ...p.acaba,
      ...p.sentido.flatMap(s => [s.t, s.por]), ...p.ejemplos.map(x => x.t)];
    if (new Set(textos.filter(Boolean)).size !== textos.filter(Boolean).length) e('hay un texto repetido');
}
/* revisaSemana(lista, e): las 6 fichas de una semana de 1.º, en el orden del documento. `orden` va de 1 a 6 sin repetir y
   coincide con el lugar de la ficha; cada marca `sep` está en 2 o 3 palabras de la semana (nunca en una sola) */
function revisaSemana(lista, e) {
    lista.forEach((p, i) => { if (p.curso === 1 && p.orden !== i + 1) e(p.id + ': orden ' + p.orden + ' pero es la ficha ' + (i + 1) + ' de la semana'); });
    const m = {};
    for (const p of lista) if (p.sep) (m[p.sep] = m[p.sep] || []).push(p.id);
    for (const [s, v] of Object.entries(m)) if (v.length < 2 || v.length > 3) e('sep «' + s + '»: está en ' + v.length + ' palabras (deben ser 2 o 3)');
}
/* preguntasRepetidas(lista): avisos de dos palabras con la misma pregunta de `relaciona` (regla L7: «También vale») */
function preguntasRepetidas(lista) {
    const m = {};
    for (const p of lista) for (const k of ['parecida', 'contraria']) for (const x of p.rel[k] || [])
      (m[k + ' · ' + x] = m[k + ' · ' + x] || []).push(p.palabra);
    return Object.entries(m).filter(([, v]) => v.length > 1).map(([q, v]) => q + ': ' + v.join(' y '));
}
/* revisaFam(p, piezas, e): campo opcional `fam` de la tarea `familia` (docs/segundo.md; test 135).
   piezas = Set con los id de todas las piezas */
function revisaFam(p, piezas, e) {
    const f = p.fam;
    if (f === undefined) return;
    if (!f || !Array.isArray(f.si) || !Array.isArray(f.no)) { e('fam: faltan si o no'); return; }
    if (f.si.length < 2) e('fam.si: al menos 2 palabras de la familia');
    if (f.no.length < 1) e('fam.no: al menos 1 intrusa');
    const vistas = new Set([p.palabra]);
    const una = x => { if (vistas.has(x)) e('fam: «' + x + '» está repetida o es la propia palabra'); vistas.add(x); };
    for (const s of f.si) {
      if (!s.p || !s.t) { e('fam.si: falta p o t'); continue; }
      una(s.p);
      if ((s.t.match(/_{3,}/g) || []).length !== 1) e('fam.si «' + s.p + '»: la frase debe tener un solo hueco ___');
      if (sinTilde(s.t).split(/[^a-zñ]+/).includes(sinTilde(s.p))) e('fam.si «' + s.p + '»: la frase ya dice la palabra');
      if (!p.rel.familia.includes(s.p)) e('fam.si «' + s.p + '» no está en rel.familia');
      if (s.pieza !== undefined && !piezas.has(s.pieza)) e('fam.si «' + s.p + '»: la pieza «' + s.pieza + '» no existe');
    }
    for (const n of f.no) {
      if (!n.p || !n.por) { e('fam.no: falta p o por'); continue; }
      una(n.p);
      if (p.rel.familia.includes(n.p)) e('fam.no «' + n.p + '» está en rel.familia: no es una intrusa');
    }
}
/* revisaPieza(z, sem, idsSemana, e): pieza de la semana de 2.º (docs/segundo.md; test 136) */
function revisaPieza(z, sem, idsSemana, e) {
    if (!z.id || !/^[a-z-]+$/.test(z.id)) e('id de pieza mal');
    if (z.curso !== 2) e('las piezas son de 2.º');
    if (z.semana !== sem) e('semana mal');
    if (!['sufijo', 'prefijo', 'contrarias', 'parecidas', 'enlaces'].includes(z.tipo)) e('tipo de pieza desconocido');
    if (!z.forma) e('falta forma');
    if (!z.idea || nPal(z.idea) > 18) e('idea de ' + nPal(z.idea || '') + ' palabras');
    if (!/[.…]$/.test(z.idea || '')) e('idea sin punto final');
    if (/prefijo|sufijo/i.test([z.idea, z.habla, z.forma].join(' '))) e('en pantalla se dice «pieza», no prefijo ni sufijo');
    if (!Array.isArray(z.ancla) || !z.ancla.length) e('falta ancla');
    for (const a of z.ancla || []) if (!idsSemana.includes(a)) e('ancla «' + a + '» no es una palabra de su semana');
    const ej = z.ejemplos || [];
    if (ej.length < 4 || ej.length > 6) e('ejemplos: ' + ej.length + ' (deben ser de 4 a 6)');
    if (ej.some(x => !x.a || !x.b || !x.t)) e('ejemplo sin a, b o t');
    const pr = z.prueba || [];
    if (pr.length !== 4 || pr.filter(x => x.ok).length !== 2) e('prueba: deben ser 2 sí y 2 no');
    if (pr.some(x => !x.t || !x.por)) e('prueba sin frase o sin porqué');
    if (!z.habla) e('falta habla');
    const textos = [z.idea, z.habla, ...ej.map(x => x.t), ...pr.flatMap(x => [x.t, x.por])].filter(Boolean);
    if (new Set(textos).size !== textos.length) e('hay un texto repetido');
}
/* idsRepetidos(lista): id que salen más de una vez, sean del curso que sean (test 137) */
function idsRepetidos(lista) {
    const ids = lista.map(p => p.id);
    return [...new Set(ids.filter((id, i) => ids.indexOf(id) !== i))];
}
module.exports = { revisa, revisaSemana, revisaFam, revisaPieza, idsRepetidos, sinTilde, nPal, preguntasRepetidas };
