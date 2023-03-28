/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)

  if(toggle && nav){
      toggle.addEventListener('click', ()=>{
          nav.classList.toggle('show')
      })
  }
}
showMenu('nav-toggle','nav-menu')

//boton de volver a inicio
$(document).ready(function() {
  const scrollY = window.pageYOffset;
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

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
  const navMenu = document.getElementById('nav-menu')
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
  const scrollY = window.pageYOffset

  sections.forEach(current =>{
      const sectionHeight = current.offsetHeight
      const sectionTop = current.offsetTop - 50;
      sectionId = current.getAttribute('id')

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
          document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
      }else{
          document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
      }
  })
}
window.addEventListener('scroll', scrollActive)

// const sr = ScrollReveal({
//   origin: 'top',
//   distance: '60px',
//   duration: 2000,
//   delay: 200,
//    reset: true
// });

// sr.reveal('.home',{})
// sr.reveal('.button',{delay:200})
// sr.reveal('.home__img', {delay:400})
// sr.reveal('.home_social_icon', {interval:200 })

// sr.reveal('.about__img',{})
// sr.reveal('.about__subtitle',{delay:200})
// sr.reveal('.about__text',{delay:400})

// sr.reveal('.skills__subtitle',{})
// sr.reveal('.skills__text',{delay:200})
// sr.reveal('.skills__data',{delay:200})
// sr.reveal('.skills__img', {delay:400 })

// sr.reveal('.work__img',{interval:200})

//animacion tipado
let typed = new Typed(".typing", {
  strings:["Full-stack", "Front-end", "and Back-end", "Full-Stack."],
  typeSpeed: 80,
  backSpeed: 45,
  loop: true
});




const switchButton = document.getElementById('switch');
 
switchButton.addEventListener('click', () => {
    document.body.classList.toggle('dark'); //toggle the HTML body the class 'dark'
    document.getElementById('footer').classList.toggle('dark');
    document.getElementById('l-header').classList.toggle('dark');
    document.getElementById('nav-toggle').classList.toggle('dark');
    document.getElementById('nav__list').classList.toggle('dark');



    switchButton.classList.toggle('active');//toggle the HTML button with the id='switch' with the class 'active'
});