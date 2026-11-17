'use strict';
/* ===== Utilidades comunes ===== */
const $ = s => document.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
/* Día = fecha LOCAL del dispositivo (AAAA-MM-DD), no la de UTC: a las 00:30 en Madrid ya es el día siguiente. `f` solo sirve para probar. */
const hoy = (f = new Date()) => f.getFullYear() + '-' + String(f.getMonth() + 1).padStart(2, '0') + '-' + String(f.getDate()).padStart(2, '0');
/* Almacén propio: todas las claves con prefijo «lexi.» (se comparte dominio con otras apps) */
const LS = {
  get(k, d) { try { const v = localStorage.getItem('lexi.' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem('lexi.' + k, JSON.stringify(v)); return true; } catch (e) { return false; } }
};
const nid = () => Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4);
