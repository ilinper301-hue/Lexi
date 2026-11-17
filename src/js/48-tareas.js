/* ===== «Jugamos»: 2 tareas con palabras de la semana (la guía el docente; la clase responde con pulgares, dedos o hablando) =====
   Tareas: sentido, ejemplo, elige, acaba, habla (ver docs/pedagogia.md, apartado 3); cuál toca y qué frase sale, por las reglas T de 32-eleccion.js. Tras cada una, el docente valora: casi todos · la mitad · pocos.
   La valoración es opcional: valorarTarea apunta y mueve la escala y el repaso (reglas E y R, 30-escala-logica.js); «Seguir sin valorar» solo anota que la tarea salió. */
let JUEGO = null;
const NJUEGO = 2;
const TAREA_ROT = { sentido: '¿Tiene sentido?', ejemplo: '¿Es o no es?', elige: '¿Qué palabra va?', gesto: 'Haz el gesto', acaba: 'Acaba la frase', habla: 'Cuéntaselo a tu compañero' };
const CON_RESPUESTA = { sentido: true, ejemplo: true, elige: true, gesto: true, acaba: false, habla: false };
const VAL_TXT = { todos: 'Casi todos', mitad: 'La mitad', pocos: 'Pocos' };

/** Palabras con las que se puede jugar: las ya presentadas (en Modo Docente, todas las de la semana). */
function palabrasJugables(pr) { return palabrasSemana(SEMANA_ACT).filter(p => MODO_DOCENTE || estadoPal(pr, p.id).e >= 2); }
/** Fichas que cuentan como presentadas (T2): las del perfil; en Modo Docente, todas. */
const fichasPresentadas = pr => PALABRAS.filter(p => MODO_DOCENTE || estadoPal(pr, p.id).e >= 2);
/* En Modo Docente no se guarda nada: las tareas ya enseñadas se recuerdan solo en memoria para que «Otra vez» cambie de tarea y de frase,
   y cada palabra se trata como si estuviera en «La usamos» (alterna entender y usar) para que se vean todas las tareas. */
let DOC_REG = {};
const registroJuego = (pr, id) => (MODO_DOCENTE ? DOC_REG[id] || { ...palabraNueva(), e: 4 } : estadoPal(pr, id));
/** Solo en Modo Docente: recuerda en memoria que esta tarea ya salió (no guarda nada). */
function anotarDocente(id, tarea) { if (MODO_DOCENTE) DOC_REG[id] = tareaHecha(registroJuego(null, id), tarea); }
/** Monta la cola: las palabras con menos valoraciones primero; cada una con la tarea y la frase que tocan (reglas T1-T7 de 32-eleccion.js)
    y con tareas de tipo distinto entre sí (T4). `elige` lleva sus otras 2 opciones, siempre palabras presentadas. */
function montarJuego(pr, n = NJUEGO) {
  const lista = palabrasJugables(pr).map((p, i) => ({ p, i, v: (estadoPal(pr, p.id).val || []).length }))
    .sort((a, b) => a.v - b.v || a.i - b.i).slice(0, n).map(x => x.p);
  return colaTareas(lista, id => registroJuego(pr, id), fichasPresentadas(pr), hoy());
}
function empezarJuego() {
  const cola = montarJuego(MODO_DOCENTE ? null : perfilAct());
  if (!cola.length) return;
  JUEGO = { cola, i: 0 }; go('juego');
}
function juegoRevelar() { JUEGO.cola[JUEGO.i].rev = true; pintar(); }
function juegoValorar(v) {
  const q = JUEGO.cola[JUEGO.i]; if (v) valorarTarea(q.id, q.t, v); else tareaSinValorar(q.id, q.t);
  anotarDocente(q.id, q.t);
  JUEGO.i++; pintar(); window.scrollTo(0, 0); }

/** Contenido de una tarea: devuelve {cuerpo, res} (res = lo que se enseña al tocar «Ver la respuesta»). */
function tareaHTML(q, p) {
  const pal = `<p class="pal-ch">${esc(p.palabra)}</p>`;
  if (q.t === 'sentido') {
    const s = fraseDe(p, 'sentido', q.k);
    return { cuerpo: `${pal}<p class="gr">${esc(s.t)}</p><p class="mu gr-p">Pulgar arriba o abajo</p>`,
      res: `<div class="veredicto ${s.ok ? 'si' : 'no'}"><b>${s.ok ? '👍 Sí tiene sentido' : '👎 No tiene sentido'}</b><span>${esc(s.por)}</span></div>` };
  }
  if (q.t === 'ejemplo') {
    const e = fraseDe(p, 'ejemplo', q.k);
    return { cuerpo: `<p class="pal-ch">¿Es un ejemplo de «${esc(p.palabra)}»?</p><p class="gr">${esc(e.t)}</p><p class="mu gr-p">Pulgar arriba o abajo</p>`,
      res: `<div class="veredicto ${e.ok ? 'si' : 'no'}"><b>${e.ok ? '👍 Sí es' : '👎 No es'}</b></div>` };
  }
  if (q.t === 'elige') {
    const otras = (q.otras ? q.otras.map(palabraPorId) : distractoresElige(p, fichasPresentadas(MODO_DOCENTE ? null : perfilAct()), q.k)), a = otras[0] || p, b = otras[1] || p;
    const op = [p, a, b], r = q.k % 3, orden = [op[r], op[(r + 1) % 3], op[(r + 2) % 3]];
    const html = orden.map((x, j) => `<div class="opc${q.rev && x.id === p.id ? ' on' : ''}"><i>${j + 1}</i><span>${esc(x.palabra)}</span></div>`).join('');
    return { cuerpo: `<img class="esc-img" src="${esc(imgPal(p))}" alt=""><p class="mu gr-p">Dedos: 1, 2 o 3</p><div class="opcs">${html}</div>`,
      res: `<div class="veredicto si"><b>La palabra es «${esc(p.palabra)}»</b></div>` };
  }
  if (q.t === 'gesto' && q.forma === 2) { /* G5: sin palabra ni imagen hasta «Ver la respuesta» */
    const op = [0, 1, 2].map(j => (j === q.pos ? p : palabraPorId(q.otras[j < q.pos ? j : j - 1])));
    const html = op.map((x, j) => `<div class="opc${q.rev && x.id === p.id ? ' on' : ''}"><i>${j + 1}</i><span>${esc(x.palabra)}</span></div>`).join('');
    return { cuerpo: `<p class="nota-g">Haz este gesto sin decir la palabra:</p><p class="gr">${esc(p.gesto)}</p><p class="mu gr-p">Dedos: 1, 2 o 3</p><div class="opcs">${html}</div>`,
      res: `<div class="veredicto si"><b>La palabra es «${esc(p.palabra)}»</b><span>${esc(p.def)}</span></div><img class="esc-img" src="${esc(imgPal(p))}" alt="">` };
  }
  if (q.t === 'gesto') return { cuerpo: `${pal}<p class="mu gr-p">Todos a la vez: una, dos y tres</p>`,
    res: `<img class="esc-img" src="${esc(imgPal(p))}" alt=""><p class="gr">${esc(p.gesto)}</p><p class="mu gr-p">¿Por qué es ese su gesto?</p>` };
  if (q.t === 'acaba') return { cuerpo: `${pal}<p class="gr">${esc(fraseDe(p, 'acaba', q.k))}</p><p class="mu gr-p">Dos o tres voluntarios</p>`, res: '' };
  return { cuerpo: `${pal}<p class="gr">${esc(p.habla)}</p><p class="mu gr-p">Por parejas · un minuto</p>`, res: '' };
}
SC.juego = function () {
  const j = JUEGO; if (!j || !j.cola.length) return SC.semana();
  if (j.i >= j.cola.length) return `<main class="pantalla infantil ancha pres"><p class="rotulo">${j.hoy || 'Jugamos'}</p>
    <div class="cuerpo"><p class="palabra-g">¡Hecho!</p><p class="mu gr-p">${j.cola.map(q => esc(palabraPorId(q.id).palabra)).join(' · ')}</p></div>
    ${j.hoy ? '<div class="nav"><span></span><button class="btn" onclick="hoyAvanzar()">Seguir →</button></div>'
      : '<div class="nav"><button class="btn sec" onclick="empezarJuego()">Otra vez</button><button class="btn" onclick="atras()">Terminar</button></div>'}</main>`;
  const q = j.cola[j.i], p = palabraPorId(q.id), t = tareaHTML(q, p);
  const pts = j.cola.map((_, k) => `<i class="${k === j.i ? 'on' : k < j.i ? 'hecho' : ''}"></i>`).join('');
  const valorar = !CON_RESPUESTA[q.t] || q.rev;
  return `<main class="pantalla infantil ancha pres"><p class="rotulo">${j.hoy || 'Jugamos'} · ${j.i + 1} de ${j.cola.length} · ${q.t === 'gesto' && q.forma === 2 ? '¿Qué palabra es?' : TAREA_ROT[q.t]}</p>
  <div class="cuerpo">${t.cuerpo}${q.rev ? t.res : ''}</div><div class="pts" aria-hidden="true">${pts}</div>
  ${valorar ? `<p class="mu gr-p" style="text-align:center;margin:0">¿Cuántos lo han hecho bien?</p><div class="vals">${Object.keys(VAL_TXT).map(v => `<button class="btn" onclick="juegoValorar('${v}')">${VAL_TXT[v]}</button>`).join('')}</div>
  <button class="btn sec" onclick="juegoValorar('')">Seguir sin valorar</button>`
    : '<button class="btn grande" onclick="juegoRevelar()">Ver la respuesta</button>'}
  ${j.hoy ? '<button class="btn sec" onclick="hoyAvanzar()">Saltar esta parte</button>' : ''}</main>`;
};
