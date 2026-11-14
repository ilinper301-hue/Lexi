'use strict';
/* ===== Fichas de palabras: cada archivo de src/js/palabras/ llama a PALABRA({...}) ===== */
const PALABRAS = [];
const PALABRA = p => { PALABRAS.push(p); };
const palabraPorId = id => PALABRAS.find(p => p.id === id);
