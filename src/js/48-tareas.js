/* ===== «Jugamos»: 2 tareas con palabras de la semana (la guía el docente; la clase responde con pulgares, dedos o hablando) =====
   Tareas: sentido, ejemplo, elige, acaba, habla (ver docs/pedagogia.md, apartado 3). Tras cada una, el docente valora: casi todos · la mitad · pocos.
   La valoración es opcional y por ahora solo se apunta (valorarTarea); la subida de pasos de la escala llega en la Fase 3. */
let JUEGO = null, JUEGO_N = 0;
const NJUEGO = 2;
const TAREA_ROT = { sentido: '¿Tiene sentido?', ejemplo: '¿Es o no es?', elige: '¿Qué palabra va?', acaba: 'Acaba la frase', habla: 'Cuéntaselo a tu compañero' };
const CON_RESPUESTA = { sentido: true, ejemplo: true, elige: true, acaba: false, habla: false };
const VAL_TXT = { todos: 'Casi todos', mitad: 'La mitad', pocos: 'Pocos' };

/** Palabras con las que se puede jugar: las ya presentadas (en Modo Docente, todas las de la semana). */
function palabrasJugables(pr) { return palabrasSemana(SEMANA_ACT).filter(p => MODO_DOCENTE || estadoPal(pr, p.id).e >= 2); }
/** Monta la cola: las palabras con menos valoraciones primero; cada una con una tarea distinta de su última y de la otra de la sesión. */
function montarJuego(pr, n = NJUEGO, vuelta = JUEGO_N) {
  const lista = palabrasJugables(pr).map((p, i) => ({ p, i, v: (estadoPal(pr, p.id).val || []).length }))
    .sort((a, b) => a.v - b.v || a.i - b.i).slice(0, n), usadas = [], cola = [];
  lista.forEach(({ p, v }, k) => {
    const val = estadoPal(pr, p.id).val || [], ult = val.length ? val[val.length - 1].t : '', off = v + k + vuelta;
    const orden = TAREAS_ID.map((_, j) => TAREAS_ID[(off + j) % TAREAS_ID.length]);
    const t = orden.find(x => x !== ult && !usadas.includes(x)) || orden.find(x => x !== ult) || orden[0];
    usadas.push(t); cola.push({ id: p.id, t, k: v + vuelta, rev: false });
  });
  return cola;
}
function empezarJuego() {
  const cola = montarJuego(MODO_DOCENTE ? null : perfilAct()); JUEGO_N++;
  if (!cola.length) return;
  JUEGO = { cola, i: 0 }; go('juego');
}
function juegoRevelar() { JUEGO.cola[JUEGO.i].rev = true; pintar(); }
function juegoValorar(v) { const q = JUEGO.cola[JUEGO.i]; if (v) valorarTarea(q.id, q.t, v); JUEGO.i++; pintar(); window.scrollTo(0, 0); }

/** Contenido de una tarea: devuelve {cuerpo, res} (res = lo que se enseña al tocar «Ver la respuesta»). */
function tareaHTML(q, p) {
  const pal = `<p class="pal-ch">${esc(p.palabra)}</p>`;
  if (q.t === 'sentido') {
    const s = p.sentido[q.k % p.sentido.length];
    return { cuerpo: `${pal}<p class="gr">${esc(s.t)}</p><p class="mu gr-p">Pulgar arriba o abajo</p>`,
      res: `<div class="veredicto ${s.ok ? 'si' : 'no'}"><b>${s.ok ? '👍 Sí tiene sentido' : '👎 No tiene sentido'}</b><span>${esc(s.por)}</span></div>` };
  }
  if (q.t === 'ejemplo') {
    const e = p.ejemplos[q.k % p.ejemplos.length];
    return { cuerpo: `<p class="pal-ch">¿Es un ejemplo de «${esc(p.palabra)}»?</p><p class="gr">${esc(e.t)}</p><p class="mu gr-p">Pulgar arriba o abajo</p>`,
      res: `<div class="veredicto ${e.ok ? 'si' : 'no'}"><b>${e.ok ? '👍 Sí es' : '👎 No es'}</b></div>` };
  }
  if (q.t === 'elige') {
    const otras = palabrasSemana(p.semana).filter(x => x.id !== p.id), a = otras[q.k % otras.length], b = otras[(q.k + 1) % otras.length];
    const op = [p, a, b], r = q.k % 3, orden = [op[r], op[(r + 1) % 3], op[(r + 2) % 3]];
    const html = orden.map((x, j) => `<div class="opc${q.rev && x.id === p.id ? ' on' : ''}"><i>${j + 1}</i><span>${esc(x.palabra)}</span></div>`).join('');
    return { cuerpo: `<img class="esc-img" src="${esc(imgPal(p))}" alt=""><p class="mu gr-p">Dedos: 1, 2 o 3</p><div class="opcs">${html}</div>`,
      res: `<div class="veredicto si"><b>La palabra es «${esc(p.palabra)}»</b></div>` };
  }
  if (q.t === 'acaba') return { cuerpo: `${pal}<p class="gr">${esc(p.acaba[q.k % p.acaba.length])}</p><p class="mu gr-p">Dos o tres voluntarios</p>`, res: '' };
  return { cuerpo: `${pal}<p class="gr">${esc(p.habla)}</p><p class="mu gr-p">Por parejas · un minuto</p>`, res: '' };
}
SC.juego = function () {
  const j = JUEGO; if (!j || !j.cola.length) return SC.semana();
  if (j.i >= j.cola.length) return `<main class="pantalla infantil ancha pres"><p class="rotulo">Jugamos</p>
    <div class="cuerpo"><p class="palabra-g">¡Hecho!</p><p class="mu gr-p">${j.cola.map(q => esc(palabraPorId(q.id).palabra)).join(' · ')}</p></div>
    <div class="nav"><button class="btn sec" onclick="empezarJuego()">Otra vez</button><button class="btn" onclick="atras()">Terminar</button></div></main>`;
  const q = j.cola[j.i], p = palabraPorId(q.id), t = tareaHTML(q, p);
  const pts = j.cola.map((_, k) => `<i class="${k === j.i ? 'on' : k < j.i ? 'hecho' : ''}"></i>`).join('');
  const valorar = !CON_RESPUESTA[q.t] || q.rev;
  return `<main class="pantalla infantil ancha pres"><p class="rotulo">Jugamos · ${j.i + 1} de ${j.cola.length} · ${TAREA_ROT[q.t]}</p>
  <div class="cuerpo">${t.cuerpo}${q.rev ? t.res : ''}</div><div class="pts" aria-hidden="true">${pts}</div>
  ${valorar ? `<p class="mu gr-p" style="text-align:center;margin:0">¿Cuántos lo han hecho bien?</p><div class="vals">${Object.keys(VAL_TXT).map(v => `<button class="btn" onclick="juegoValorar('${v}')">${VAL_TXT[v]}</button>`).join('')}</div>
  <button class="btn sec" onclick="juegoValorar('')">Seguir sin valorar</button>`
    : '<button class="btn grande" onclick="juegoRevelar()">Ver la respuesta</button>'}</main>`;
};
