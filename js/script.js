$(document).ready(function() {
  //modoOscuro(); // al cargar activamos el modo oscuro para que ya inicio oscuro. En caso de querer iniciar
                // claro, comentar llamado a funcion modoOscuro();
});

/*===== MOSTRAR MENU =====*/ 
let showMenu = (toggleId, navId) =>{
  let toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId);
  let scrollY = window.pageYOffset


  if(toggle && nav){
      toggle.addEventListener('click', ()=>{
        $('#social-bar').removeClass('social-bar').addClass('social-bar__hidden');
          nav.classList.toggle('show');
        if(!document.querySelector("#nav-menu.show") && scrollY > 450) {
          $('#social-bar').removeClass('social-bar__hidden').addClass('social-bar');
        }
      })
  }
}
showMenu('nav-toggle','nav-menu');


/*==================== QUITAR MENU MOBILE ====================*/
let navLink = document.querySelectorAll('.nav__link');

function linkAction(){
  let navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*==================== LINK ACTIVO AL SCROLLEAR ====================*/
let sections = document.querySelectorAll('section[id]')

function scrollActive(){
  let scrollY = window.pageYOffset;
  
  sections.forEach(current =>{
    let sectionHeight = current.offsetHeight
    let sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('actived');
  } else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('actived');
  }
  });
  if(this.scrollY > 450) {
    $('#home__social').removeClass('home__social').addClass('home__social__hidden');
    $('#social-bar').removeClass('social-bar__hidden').addClass('social-bar');
    $('.scroll-up-btn').addClass('show');

    } else {
        $('#home__social').removeClass('home__social__hidden').addClass('home__social');
        $('#social-bar').removeClass('social-bar').addClass('social-bar__hidden');
        $('.scroll-up-btn').removeClass('show');
    }
}

$('.scroll-up-btn').click(function(){
  $('html').animate({scrollTop: 0});
})

window.addEventListener('scroll', scrollActive);

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


//animacion tipado
setTimeout(() => {
  let typed = new Typed(".typing", {
    strings:[ "Front-end", "and Back-end", "Full-Stack."],
    typeSpeed: 80,
    backSpeed: 45,
    backDelay: 1000,
    loop: false,
    loopCount: 5,
  });
}, "6500");



//Boton MODO OSCURO
let switchButton = document.getElementById('switch');
switchButton.addEventListener('click', modoOscuro);
 
function modoOscuro() {
  document.body.classList.toggle('dark');
  document.getElementById('footer').classList.toggle('dark');
  document.getElementById('l-header').classList.toggle('dark');
  document.getElementById('nav-toggle').classList.toggle('dark');
  document.getElementById('nav__logo').classList.toggle('dark');
  document.getElementById('nav__list').classList.toggle('dark');
  document.getElementById('home__social').classList.toggle('dark');
  document.getElementById('sub-title').classList.toggle('dark');

  // let skills = document.querySelectorAll('.skills__name');
  // for(let i = 0; i < skills.length; i++) {
  //   skills[i].classList.toggle('dark');
  // }
  let workContent = document.querySelectorAll('.work-content');
  for(let i = 0; i < workContent.length; i++) {
    workContent[i].classList.toggle('dark');
  }
   let inputForms = document.querySelectorAll('.inputForm');
  for(let i = 0; i < inputForms.length; i++) {
    inputForms[i].classList.toggle('dark');
  }
  let aIcons = document.querySelectorAll('.a-icon');
  for(let i = 0; i < aIcons.length; i++) {
    aIcons[i].classList.toggle('dark');
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



//CONTACTO GMAIL
var form = document.getElementById("my-form");
    
async function handleSubmit(event) {
  event.preventDefault();
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
        // status.innerHTML = "Thanks for your submission!";
        let modalGmail = document.getElementById("modal__gmail");
        let nombreEnvia = document.getElementById("nombre").value;
        modalGmail.style.display = "flex";
        document.body.style.overflow = 'hidden';
        $('#agradecer').html('Gracias por su contacto '+ nombreEnvia + ' 😃');
        form.reset();
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          // status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
        } else {
          status.innerHTML = "Oops! There was a problem submitting your form"
        }
      })
    }
  }).catch(error => {
    // status.innerHTML = "Oops! There was a problem submitting your form"
  });
}

form.addEventListener("submit", handleSubmit);


// Mostrar modal al enviar un mail
let modalGmail = document.getElementById("modal__gmail");
let closeBtnGmail = document.querySelector(".close-btn-gmail");
window.onclick = function(e){
  if(e.target == modalGmail){
    modalGmail.style.display = "none";
     document.body.style.overflow = 'auto';
    }
}
closeBtnGmail.onclick = function(){
    modalGmail.style.display = "none";
     document.body.style.overflow = 'auto';
}



// Agregar clase al label del form CONTACT cuando tiene contenido
let inputs = document.querySelectorAll('.styled-input');

inputs.forEach(input => {
  input.addEventListener('input', () => {
    if (input.value.trim() !== '') {
      input.classList.add('has-content');
    } else {
      input.classList.remove('has-content');
    }
  });
});




// Obtén todos los botones de corazón y contadores
document.addEventListener('DOMContentLoaded', function() {
  let workContents = document.querySelectorAll('.work-content');

  workContents.forEach((workContent, index) => {
    let corazon = workContent.querySelector('.corazon');
    let contador = workContent.querySelector('.contador');

    // let likes = parseInt(localStorage.getItem(`likes_${index}`)) || 0;

    if (localStorage.getItem(`liked_${index}`)) {
      corazon.classList.add('liked');
    }

    // contador.textContent = likes; //no tengo bbdd

    corazon.addEventListener('click', () => {
      if (!corazon.classList.contains('bxs-heart')) {
        corazon.classList.remove('bx-heart');
        corazon.classList.add('bxs-heart');
        likes++;
        localStorage.setItem(`liked_${index}`, 'true');
      } else {
        corazon.classList.remove('bxs-heart');
        corazon.classList.add('bx-heart');
        likes--;
        localStorage.removeItem(`liked_${index}`);
      }

      // contador.textContent = likes;
      localStorage.setItem(`liked_${index}`, 'true');
      // localStorage.setItem(`likes_${index}`, likes.toString());
    });
  });
});


// Efecto youtube mobile
function isElementInViewport(el) {
  let rect = el.getBoundingClientRect();
  let windowHeight = (window.innerHeight || document.documentElement.clientHeight);
  return (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2);
}

function handleResizeAndScroll() {
  let workContentElements = document.querySelectorAll('.work-content');
  let screenWidth = window.innerWidth || document.documentElement.clientWidth;

  if (screenWidth <= 768) {
    workContentElements.forEach((element) => {
      if (isElementInViewport(element)) {
        element.style.width = '99%';
      } else {
        element.style.width = '90%';
      }
    });
  } else {
    workContentElements.forEach((element) => {
      element.style.width = '90%';
    });
  }
}

window.addEventListener('load', handleResizeAndScroll);
window.addEventListener('resize', handleResizeAndScroll);
window.addEventListener('scroll', handleResizeAndScroll);


