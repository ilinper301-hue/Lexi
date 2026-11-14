/* Tema claro/oscuro (clave lexi.th) */
const TEMA = {
  aplicar(t) { document.documentElement.dataset.theme = t; const m = document.querySelector('meta[name=theme-color]'); if (m) m.content = t === 'dark' ? '#231413' : '#FFF1EC'; },
  inicial() { const g = LS.get('th', null); return g || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'); },
  alternar() { const t = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'; LS.set('th', t); this.aplicar(t); }
};
