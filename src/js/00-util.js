'use strict';
/* ===== Utilidades comunes ===== */
const $ = s => document.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const hoy = () => new Date().toISOString().slice(0, 10);
/* Almacén propio: todas las claves con prefijo «lexi.» (se comparte dominio con otras apps) */
const LS = {
  get(k, d) { try { const v = localStorage.getItem('lexi.' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem('lexi.' + k, JSON.stringify(v)); return true; } catch (e) { return false; } }
};
