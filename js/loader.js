"use strict"
const contenedorIndex = document.querySelector('.contenido');
const loader = document.querySelector('.loader');
window.addEventListener("DOMContentLoaded", (event) => {
    contenedorIndex.style.display = "none";
    setTimeout(() => {
     loader.style.display = 'none';
     contenedorIndex.style.display = "block";  
  }, 7000);
  });