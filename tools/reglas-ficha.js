// Reglas de una ficha de palabra (las usan tools/validar-docs.js y tests/test_contenido.js)
const sinTilde = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const nPal = s => s.replace(/[«»¡!¿?.,:;…()]/g, ' ').split(/\s+/).filter(Boolean).length;
/* revisa(p, sem, gestos, e): sem = semana esperada; gestos = Set de la semana; e(texto) anota un error */
function revisa(p, sem, gestos, e) {
    if (p.semana !== sem) e('semana mal');
    if (p.silabas.join('') !== p.palabra.replace(/ /g, '')) e('sílabas no forman la palabra');
    if (!['accion', 'cualidad', 'nombre', 'enlace'].includes(p.tipo)) e('tipo desconocido');
    if (!['pensar', 'como-son', 'sentir', 'convivir', 'medio'].includes(p.bloque)) e('bloque desconocido');
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
/* preguntasRepetidas(lista): avisos de dos palabras con la misma pregunta de `relaciona` (regla L7: «También vale») */
function preguntasRepetidas(lista) {
    const m = {};
    for (const p of lista) for (const k of ['parecida', 'contraria']) for (const x of p.rel[k] || [])
      (m[k + ' · ' + x] = m[k + ' · ' + x] || []).push(p.palabra);
    return Object.entries(m).filter(([, v]) => v.length > 1).map(([q, v]) => q + ': ' + v.join(' y '));
}
module.exports = { revisa, sinTilde, nPal, preguntasRepetidas };
