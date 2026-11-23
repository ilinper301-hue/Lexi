/* ===== Cuenta de Google (Firebase) y sincronización · paso 6.3 de ESTADO.md (reglas CU, SI, PV1, PV2, PV4, VE y SI7 de docs/nube.md) =====
   Mismo proyecto y mismo patrón que Calculi («mis-apps-educativas», SDK compat 10.12.2), pero con la fusión de `21-fusion.js` (palabra a palabra).
   Firestore: lexico/{uid} = { meta: texto JSON {aj, gmt, del}, ts, v } y lexico/{uid}/alu/{idPerfil} = { d: texto JSON del perfil, mt, v }.
   Regla 0 del ecosistema: sin cuenta y sin conexión la app va igual. Firebase NO se carga hasta que se entra con Google (`lexi.fb` = «1») o se toca el botón (CU3).
   Solo claves «lexi.»: lexi.fb · lexi.sync.uid (no se borra al cerrar sesión: PV4) · lexi.sync.t.
   Falta (paso 6.4): la pantalla de «primera vez con datos en los dos lados» (PV3), qué hacer con las clases al cerrar sesión (CU6) y borrar/restaurar con cuenta (BO).
   Hasta entonces, en ese caso NO se sincroniza nada (no se pierde ni se pisa nada) y la tarjeta lo dice. */
const GLG = '<svg class="glogo" width="18" height="18" viewBox="0 0 48 48" aria-hidden="true"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>';
const FBV = '10.12.2', FB_COL = 'lexico', FB_CFG = { apiKey: 'AIzaSyC00dEFMyJ48KM--iClXSFUbbMtoHV3ejc', authDomain: 'mis-apps-educativas.firebaseapp.com', projectId: 'mis-apps-educativas', storageBucket: 'mis-apps-educativas.firebasestorage.app', messagingSenderId: '98830326152', appId: '1:98830326152:web:bd3ff75a1f83ac5fd2c23d' };
const MAX_META = 20000, MAX_DOC = 300000; /* tamaños máximos que aceptan las reglas de Firestore */
/* Claves sueltas «lexi.…» (no JSON): lexi.fb, lexi.sync.uid, lexi.sync.t */
const LSR = {
  get(k) { try { return localStorage.getItem('lexi.' + k); } catch (e) { return null; } },
  set(k, v) { try { localStorage.setItem('lexi.' + k, String(v)); } catch (e) {} },
  del(k) { try { localStorage.removeItem('lexi.' + k); } catch (e) {} }
};
let FB = null, FBU = null;
/* `espera`: '' (todo bien) · 'primera' (hay datos en los dos lados, PV3: paso 6.4) · 'vieja' (en la nube hay una versión más nueva, VE1) · 'bloq' (los datos del dispositivo son de una versión más nueva, SI8) */
const SYNC = { busy: false, pend: false, sinEco: false, last: +(LSR.get('sync.t') || 0), err: '', t: null, espera: '' };

/* ---- Firebase (solo se carga al entrar con Google o si ya había cuenta conectada) ---- */
function fbLoad() {
  if (window.firebase && firebase.firestore) return Promise.resolve();
  const ld = f => new Promise((ok, ko) => { const x = document.createElement('script'); x.src = `https://www.gstatic.com/firebasejs/${FBV}/${f}`; x.onload = ok; x.onerror = () => ko(Error('No se pudo cargar Firebase (¿sin conexión?)')); document.head.appendChild(x); });
  return ld('firebase-app-compat.js').then(() => Promise.all([ld('firebase-auth-compat.js'), ld('firebase-firestore-compat.js')]));
}
/** CU7 · una sesión anónima (asistente o encuesta de otra app) no es una cuenta: no sincroniza. */
const usuarioCuenta = u => (u && !u.isAnonymous && u.uid ? u : null);
async function fbInit() {
  await fbLoad();
  if (!FB) {
    if (!firebase.apps.length) firebase.initializeApp(FB_CFG);
    let listo; const prom = new Promise(ok => { listo = ok; });
    FB = { auth: firebase.auth(), db: firebase.firestore(), listo: prom };
    FB.auth.onAuthStateChanged(u => {
      FBU = usuarioCuenta(u); listo();
      if (FBU && ['1', 'r'].includes(LSR.get('fb'))) { LSR.set('fb', '1'); syncNow().catch(() => {}); } /* CU3: sin `lexi.fb` no se sincroniza aunque otra app ya tenga sesión */
      accRefresh();
    });
    try { await FB.auth.getRedirectResult(); } catch (e) { SYNC.err = fbErr(e); }
  }
  return FB;
}
async function fbLogin() {
  SYNC.err = ''; const antes = LSR.get('fb');
  try {
    LSR.set('fb', 'r');
    const f = await fbInit(); await f.listo;
    if (FBU) return; /* CU5: ya había sesión en este dispositivo (otra app): conecta al instante y la sincroniza onAuthStateChanged */
    const pv = new firebase.auth.GoogleAuthProvider(); pv.setCustomParameters({ prompt: 'select_account' });
    try { await f.auth.signInWithPopup(pv); } catch (e) { if (/popup-blocked|operation-not-supported/.test(e.code || '')) await f.auth.signInWithRedirect(pv); else throw e; } /* CU4 */
  } catch (e) {
    SYNC.err = fbErr(e); if (antes == null) LSR.del('fb'); else LSR.set('fb', antes);
    accRefresh(); try { toast(SYNC.err); } catch (e2) {}
  }
}
/** Cerrar sesión. No se borra `lexi.sync.uid` (PV4: si vuelve la misma cuenta no se pregunta nada). Qué hacer con las clases del dispositivo es el paso 6.4 (CU6). */
async function fbLogout() {
  clearTimeout(SYNC.t); SYNC.pend = false; SYNC.espera = ''; SYNC.err = '';
  try { if (FB) await FB.auth.signOut(); } catch (e) {}
  FBU = null; LSR.del('fb'); accRefresh();
}
const fbErr = e => { const c = (e && e.code) || ''; return c.includes('unauthorized-domain') ? 'Este dominio no está autorizado en Firebase (Authentication › Configuración › Dominios autorizados).' : c.includes('permission-denied') ? 'Firebase rechaza el acceso: revisa las reglas de Firestore (docs/firebase.md).' : c.includes('popup-closed') || c.includes('cancelled-popup') ? 'Se cerró la ventana de Google antes de terminar.' : c.includes('network') ? 'Sin conexión. Se sincronizará cuando vuelva internet.' : (e && e.message) || 'Error desconocido'; };

/* ---- La nube vista desde Lexi: dos operaciones (leer todo, escribir lo que cambia). Aquí está lo único que habla con Firestore ---- */
function nubeFirestore(db, uid) {
  const mref = db.collection(FB_COL).doc(uid), col = mref.collection('alu');
  return {
    async leer() {
      const [md, cs] = await Promise.all([mref.get(), col.get()]), perfiles = []; /* un documento por perfil */
      cs.forEach(d => { const x = d.data() || {}; perfiles.push({ id: d.id, mt: x.mt, v: x.v, d: x.d }); });
      const x = md.exists ? md.data() || {} : {};
      return { meta: md.exists && typeof x.meta === 'string' ? x.meta : null, metaV: x.v, perfiles };
    },
    async escribir({ meta, perfiles, borrar }) {
      const b = db.batch();
      perfiles.forEach(p => b.set(col.doc(p.id), { d: p.d, mt: p.mt, v: p.v }));
      borrar.forEach(id => b.delete(col.doc(id)));
      if (meta != null) b.set(mref, { meta, ts: Date.now(), v: VERSION_DATOS });
      await b.commit();
    }
  };
}

/* ---- Decisiones y fusión (sin red: se prueban con una «nube» de mentira, tests/test_cuenta.js) ---- */
const parteEst = e => ({ perfiles: e.perfiles, ajustes: e.ajustes, gmt: e.gmt, del: e.del, act: e.act, modo: e.modo });
/** PV · ¿se puede fusionar sin preguntar? 'fusionar' o 'preguntar' (PV3, paso 6.4).
    Misma cuenta que la última vez (PV4) · dispositivo sin perfiles (PV1: baja lo de la cuenta) · cuenta vacía y datos que nunca fueron de otra cuenta (PV2: sube). */
function decidirPrimera({ uidGuardado, uid, localVacio, nubeVacia }) {
  if (uidGuardado === uid || localVacio || (nubeVacia && !uidGuardado)) return 'fusionar';
  return 'preguntar';
}
/** Una sincronización completa contra `nube` ({leer, escribir}) para la cuenta `uid`. Devuelve { res: 'ok'|'primera'|'vieja'|'bloq', cambia, subidos, borrados, grandes }.
    Lo que llega se calcula y se APLICA al dispositivo sin ningún `await` entre medias, así que lo que se guardó mientras se leía la nube no se pierde. */
async function sincronizarCon(nube, uid) {
  if (EST.bloq) return { res: 'bloq' }; /* SI8 */
  const R = await nube.leer();
  if (EST.bloq) return { res: 'bloq' };
  if ((R.metaV | 0) > VERSION_DATOS || R.perfiles.some(d => (d.v | 0) > VERSION_DATOS)) return { res: 'vieja' }; /* VE1: ni sube ni baja nada */
  let meta = null; if (R.meta) { try { const o = JSON.parse(R.meta); if (o && typeof o === 'object') meta = o; } catch (e) {} }
  const uidGuardado = LSR.get('sync.uid') || '', localVacio = !EST.perfiles.length, nubeVacia = !R.meta && !R.perfiles.length;
  if (decidirPrimera({ uidGuardado, uid, localVacio, nubeVacia }) === 'preguntar') return { res: 'primera' };
  const remoto = { aj: meta && meta.aj, gmt: meta && meta.gmt, del: meta && meta.del, perfiles: R.perfiles };
  /* PV1: un dispositivo sin perfiles se queda con los ajustes de la cuenta (también el PIN), aunque ya tuviera un PIN propio */
  const local = localVacio && uidGuardado !== uid && meta && meta.aj ? { ...EST, ajustes: limpiarAjustes({}), gmt: 0 } : EST;
  const r = fusionarTodo(local, remoto), docs = aDocsNube(r.estado), cambia = !mismo(parteEst(r.estado), parteEst(EST));
  if (cambia) { /* se guarda lo de la cuenta en el dispositivo (los ajustes se guardan también en Modo Docente) */
    EST = r.estado;
    SYNC.sinEco = true; try { guardarAjustes(); } finally { SYNC.sinEco = false; }
  }
  LSR.set('sync.uid', uid); /* antes de escribir: si la escritura falla, la próxima vez ya es la misma cuenta (PV4) y se vuelve a fusionar sin preguntar */
  const grandes = [], subir = r.subir.map(id => docs.perfiles.find(p => p.id === id)).filter(p => p && (p.d.length <= MAX_DOC || (grandes.push(p.id), false)));
  const meta2 = r.metaSube ? JSON.stringify({ aj: docs.aj, gmt: docs.gmt, del: docs.del }) : null;
  if (subir.length || r.borrarNube.length || (meta2 != null && meta2.length <= MAX_META)) await nube.escribir({ meta: meta2 != null && meta2.length <= MAX_META ? meta2 : null, perfiles: subir, borrar: r.borrarNube });
  return { res: 'ok', cambia, subidos: subir.length, borrados: r.borrarNube.length, grandes };
}

/* ---- Cuándo se sincroniza (SI1-SI8) ---- */
const PANT_SESION = ['pres', 'juego', 'hoyPreg', 'enc', 'encComo', 'encHecha']; /* SI7: nunca se cambian los datos ni se repinta en mitad de una presentación, tarea o sesión */
const PANT_REPINTA = ['inicio', 'quien', 'casa', 'muro', 'tz'];
const enSesion = () => typeof PANT !== 'undefined' && PANT_SESION.includes(PANT);
const puedeRepintar = () => { try { return typeof PANT !== 'undefined' && PANT_REPINTA.includes(PANT) && !/INPUT|TEXTAREA|SELECT/.test((document.activeElement || {}).tagName || ''); } catch (e) { return false; } };
/** SI2 · Lo llama `guardar()` tras cada guardado: sincroniza 15 s después (SI6: si ya hay una en marcha, se lanza otra al acabar). */
function alGuardar() {
  if (!FBU || SYNC.sinEco) return;
  if (SYNC.busy) { SYNC.pend = true; return; }
  if (SYNC.espera) return; /* esperando a una decisión (primera vez, versión vieja): no se pregunta a la nube con cada guardado */
  clearTimeout(SYNC.t); SYNC.t = setTimeout(() => syncNow().catch(() => {}), 15000);
}
/** SI3 · Al momento (cierre de «Hoy»: en clase se cierra el navegador justo después). */
function syncYa() { if (!FBU) return; clearTimeout(SYNC.t); syncNow().catch(() => {}); }
async function syncNow() {
  if (!FBU || !FB || SYNC.busy) return;
  if (enSesion()) { clearTimeout(SYNC.t); SYNC.t = setTimeout(() => syncNow().catch(() => {}), 20000); return; } /* SI7 */
  SYNC.busy = true; SYNC.pend = false; SYNC.err = ''; accRefresh();
  let cambia = false;
  try {
    const r = await sincronizarCon(nubeFirestore(FB.db, FBU.uid), FBU.uid); cambia = !!r.cambia; SYNC.espera = r.res === 'ok' ? '' : r.res;
    if (r.res === 'ok') { SYNC.last = Date.now(); LSR.set('sync.t', SYNC.last); if (r.grandes && r.grandes.length) SYNC.err = 'Un perfil es demasiado grande y no se ha subido a la nube.'; }
  } catch (e) { SYNC.err = fbErr(e); }
  finally {
    SYNC.busy = false; accRefresh();
    if (SYNC.pend) alGuardar();
    if (cambia && puedeRepintar()) { try { pintar(); } catch (e) {} } /* SI7: lo que llega se ve al volver al inicio, a la casa, al muro o a la zona del tutor */
  }
}
/** Sincronización a mano desde la tarjeta: sirve también para volver a comprobar tras actualizar la app. */
function syncMano() { SYNC.espera = ''; syncNow().catch(() => {}); }

/* ---- Tarjeta «Cuenta» (zona del tutor, CU1 y CU8) ---- */
function accRefresh() { try { const e = document.getElementById('acc'); if (e) e.outerHTML = accSec(); } catch (e) {} }
const AVISO_ESPERA = {
  primera: 'Esta cuenta ya tiene datos y este dispositivo también. Para no perder nada, de momento no se sincroniza: la opción para juntarlos llega en la próxima actualización de Lexi.',
  vieja: 'Actualiza Lexi en este dispositivo para sincronizar.',
  bloq: 'Los datos de este dispositivo son de una versión más nueva de Lexi: actualiza la app para sincronizar.'
};
function accSec() {
  const ago = SYNC.last ? Math.round((Date.now() - SYNC.last) / 60000) : null, cuando = ago === null ? 'aún no' : ago < 1 ? 'hace un momento' : ago < 60 ? `hace ${ago} min` : `hace ${Math.round(ago / 60)} h`;
  const er = SYNC.err ? `<p class="error" role="alert">${esc(SYNC.err)}</p>` : '';
  if (!FBU) {
    const volviendo = LSR.get('fb') === '1' && !SYNC.err;
    return `<div id="acc"><h2 class="h-s">Cuenta</h2><div class="tarjeta">${volviendo ? '<p class="mu pq">Reconectando con tu cuenta de Google… Si no hay internet, se reconectará sola cuando vuelva.</p>' : '<p class="mu pq">Entra con tu cuenta de Google para guardar el progreso en la nube y tenerlo igual en todos tus dispositivos.</p>'}
    <button class="btn ggl" onclick="fbLogin()">${GLG} Entrar con Google</button>${er}</div></div>`;
  }
  const quien = esc(FBU.displayName || FBU.email || 'Cuenta de Google'), inicial = esc(((FBU.displayName || FBU.email || 'G')[0] || 'G').toUpperCase());
  const sale = EST.modo === 'fam' ? 'Se cierra tu sesión de Google en este dispositivo.' : 'Se cierra también en tus otras apps de aula de este dispositivo.';
  return `<div id="acc"><h2 class="h-s">Cuenta</h2><div class="tarjeta"><div class="casa-cab"><span class="av" style="background:var(--lx-claro)" aria-hidden="true">${inicial}</span><div><b>${quien}</b>${FBU.email && FBU.displayName ? `<br><span class="mu pq">${esc(FBU.email)}</span>` : ''}</div></div>
  <p class="mu pq">${SYNC.busy ? 'Sincronizando…' : 'Última sincronización: ' + cuando + '.'} Se sincroniza sola al usar la app y al cerrarla.</p>${SYNC.espera ? `<p class="aviso" role="status">${AVISO_ESPERA[SYNC.espera]}</p>` : ''}${er}
  <div class="dos"><button class="btn" onclick="syncMano()"${SYNC.busy ? ' disabled' : ''}>Sincronizar ahora</button><button class="btn sec" onclick="fbLogout()">Cerrar sesión</button></div>
  <p class="mu pq">${sale} Los datos se guardan de forma privada: solo tu cuenta puede leerlos.</p></div></div>`;
}

/* ---- Arranque (SI1 y SI4): si ya había cuenta conectada se reconecta; sincroniza al ocultar la app y al volver la conexión ---- */
function cuentaArranque() {
  try {
    if (['1', 'r'].includes(LSR.get('fb')) && navigator.onLine !== false) fbInit().catch(() => {});
    document.addEventListener('visibilitychange', () => { if (document.hidden) syncYa(); });
    window.addEventListener('pagehide', () => syncYa());
    window.addEventListener('online', () => { if (FBU) syncYa(); else if (['1', 'r'].includes(LSR.get('fb'))) fbInit().catch(() => {}); });
  } catch (e) {}
}
