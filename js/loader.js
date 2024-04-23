"use strict";

const contenedorIndex = document.querySelector('.contenido');
const loader = document.querySelector('.loader');
const lmain = document.querySelector('.l-main');

window.addEventListener("DOMContentLoaded", (event) => {
    lmain.style.display = "none"; 
    setTimeout(() => {
       contenedorIndex.classList.remove("contenido");
       loader.style.display = 'none';
       contenedorIndex.classList.add("contenido__visible");
      }, 4000);
      
      //  Tuve que agregarlo aca pq se rompe si se carga antes que desaparezca el loader
      setTimeout(() => {
         contenedorIndex.style.display = "block";
         lmain.style.display = "block";    
         const sr = ScrollReveal({
            origin: 'top',
            distance: '80px',
            duration: 1500,
            delay: 200,
            reset: true
         });
         
         sr.reveal('.home',{})
         sr.reveal('.button',{delay:200})
         sr.reveal('.home__img', {delay:100})
         sr.reveal('.home_social_icon', {delay:200 })
         
      sr.reveal('.about__img',{})
      sr.reveal('.section-title',{delay:200})
      sr.reveal('.about__text',{delay:400})
      
      sr.reveal('.card',{interval:100})
      sr.reveal('.work',{interval:200})
      sr.reveal('.container',{interval:200})
      // sr.reveal('.work-content', {interval:200})
      
      // sr.reveal('.work__img',{interval:200})  
    }, 4001);
});