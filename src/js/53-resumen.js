/* ===== «Cómo va la clase» / «Cómo va»: pantalla para el tutor (reglas RE1-RE3 de docs/aula.md; qué dice: 38-resumen.js) =====
   Se ve en pantalla y se imprime o se guarda en PDF. Sin notas ni porcentajes. Solo lee: no cambia nada. */
let RES = { id: '' };
const fechaCorta = d => String(d || '').split('-').reverse().join('/');
function abrirResumen(id) { RES.id = id; go('resumen'); }
SC.resumen = function () {
  const p = EST.perfiles.find(x => x.id === RES.id); if (!p) return SC.tz ? SC.tz() : SC.inicio();
  const r = resumenDe(p, hoy(), PALABRAS), lista = ids => ids.map(nombreDe).map(esc).join(' · ');
  const enc = r.encontradas.map(id => `${esc(nombreDe(id))} (${encTotal(regDe(p.pal, id))})`).join(' · ');
  return `<main class="pantalla tutor"><h1 class="h-t hoja-ctl">${esc(r.titulo)}</h1>
  <div class="tarjeta hoja-ctl"><button class="btn" onclick="window.print()">Imprimir o guardar en PDF</button></div>
  <article class="hoja resumen"><h2>${esc(r.titulo)} · ${esc(r.nombre)}</h2><p class="mu">${fechaCorta(r.dia)}</p>
  ${r.total ? `${r.pasos.map(s => `<h3>${esc(s.nombre)} · ${s.palabras.length}</h3>${s.palabras.length ? `<p>${lista(s.palabras.map(x => x.id))}</p>` : ''}`).join('')}
  <h3>Para repasar</h3><p>${r.repasar.length ? lista(r.repasar) : 'Nada por ahora.'}</p>
  ${enc ? `<h3>Las más encontradas</h3><p>${enc}</p>` : ''}` : '<p>Aún no hay palabras presentadas.</p>'}</article></main>`;
};
