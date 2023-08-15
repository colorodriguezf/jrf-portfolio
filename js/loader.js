"use strict"
const contenedorIndex = document.querySelector('.contenido');
const loader = document.querySelector('.loader');
const lmain = document.querySelector('.l-main');
window.addEventListener("DOMContentLoaded", (event) => {
     lmain.style.display = "none"; 
    setTimeout(() => {
    contenedorIndex.classList.remove("contenido");
    contenedorIndex.classList.add("contenido__visible");
     loader.style.display = 'none';
     contenedorIndex.style.display = "block";
     lmain.style.display = "block";    
  }, 4000);
  });