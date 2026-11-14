TEMA.aplicar(TEMA.inicial());
cargar();
pintar();
if ('serviceWorker' in navigator && location.protocol.startsWith('http')) navigator.serviceWorker.register('sw.js').catch(() => {});
