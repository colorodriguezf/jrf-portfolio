"use strict"
const contenedorIndex = document.querySelector('.contenido');
const loader = document.querySelector('.loader');
const lmain = document.querySelector('.l-main');
window.addEventListener("DOMContentLoaded", (event) => {
    contenedorIndex.style.display = "none";
    lmain.style.display = "none";
    setTimeout(() => {
     loader.style.display = 'none';
     contenedorIndex.style.display = "block";
     lmain.style.display = "block";    
  }, 8000);
  });