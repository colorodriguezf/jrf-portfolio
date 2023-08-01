/*===== MOSTRAR MENU =====*/ 
const showMenu = (toggleId, navId) =>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId);

  if(toggle && nav){
      toggle.addEventListener('click', ()=>{
          nav.classList.toggle('show');
      })
  }
}
showMenu('nav-toggle','nav-menu');

//boton de volver a inicio
$(document).ready(function() {
  const scrollY = window.pageYOffset;
  modoOscuro(); // al cargar activamos el modo oscuro para que ya inicio oscuro. En caso de querer iniciar
                // claro, comentar llamado a funcion modoOscuro();
  $(window).scroll(function() {
      if(this.scrollY > 500) {
          $('.scroll-up-btn').addClass('show');
      } else {
          $('.scroll-up-btn').removeClass('show');
      }
  })
});

$('.scroll-up-btn').click(function(){
  $('html').animate({scrollTop: 0});
})

/*==================== QUITAR MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
  const navMenu = document.getElementById('nav-menu');
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*==================== LINK ACTIVO AL SCROLLEAR ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
  const scrollY = window.pageYOffset

  sections.forEach(current =>{
      const sectionHeight = current.offsetHeight
      const sectionTop = current.offsetTop - 50;
      sectionId = current.getAttribute('id')

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
          document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('actived');
      }else{
          document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('actived');
      }
  });
  if(this.scrollY > 500) {
    $('#home__social').removeClass('home__social').addClass('home__social__hidden');
    $('#social-bar').removeClass('social-bar__hidden').addClass('social-bar');

} else {
    $('#home__social').removeClass('home__social__hidden').addClass('home__social');
    $('#social-bar').removeClass('social-bar').addClass('social-bar__hidden');
}
}
window.addEventListener('scroll', scrollActive);

const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 200,
   reset: true
});

sr.reveal('.home',{})
sr.reveal('.button',{delay:200})
sr.reveal('.home__img', {delay:200})
sr.reveal('.home_social_icon', {interval:200 })

sr.reveal('.about__img',{})
sr.reveal('.about__subtitle',{delay:200})
sr.reveal('.about__text',{delay:400})


sr.reveal('.card',{interval:100})


sr.reveal('.work__img',{interval:200})

//animacion tipado
let typed = new Typed(".typing", {
  strings:["Full-stack", "Front-end", "and Back-end", "Full-Stack."],
  typeSpeed: 80,
  backSpeed: 45,
  backDelay: 1000,
  loop: true
});



//Boton MODO OSCURO
const switchButton = document.getElementById('switch');
switchButton.addEventListener('click', modoOscuro);
 
function modoOscuro() {

  document.body.classList.toggle('dark');
  document.getElementById('footer').classList.toggle('dark');
  document.getElementById('l-header').classList.toggle('dark');
  document.getElementById('nav-toggle').classList.toggle('dark');
  document.getElementById('nav__list').classList.toggle('dark');
  document.getElementById('home__social').classList.toggle('dark');
  let skills = document.querySelectorAll('.skills__name');
  for(let i = 0; i < skills.length; i++) {
    skills[i].classList.toggle('dark');
  }
 let span = document.querySelectorAll('.span__icon');//
  for(let i = 0; i < span.length; i++) {
    span[i].classList.toggle('dark');
  }
  switchButton.classList.toggle('actived');
}



//Seccion about
var tabLinks = document.getElementsByClassName('tab-links');
var tabContents = document.getElementsByClassName('tab-contents');

function openTab(tabName) {
    for (tabLink of tabLinks) {
        tabLink.classList.remove('active-link');
    }
    for (tabContent of tabContents) {
        tabContent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabName).classList.add('active-tab');
}

// document.querySelector('.fas.fa-bars').addEventListener('click', function () {
//     document.querySelector('nav ul').classList.toggle('show');
// });

// document.querySelector('.fas.fa-times').addEventListener('click', function () {
//     document.querySelector('nav ul').classList.remove('show');
// });
