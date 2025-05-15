// Mostrar bandera con efecto y el idioma que se va a ver en la pagina
let lang = 'es'; //idioma por defecto (se ve en español, para ingles cambiar 'es' por 'en' y la pos de las img en el html)
function setDefaultLanguage() {
    if (lang === 'en') {
      document.getElementById("spanish").classList.add("grayscale");
      document.getElementById("english").classList.remove("grayscale");
    } else if (lang === 'es') {
      document.getElementById("english").classList.add("grayscale");
      document.getElementById("spanish").classList.remove("grayscale");
    }

    translateNav(lang);
    translate(lang);
    translateAbout(lang);
    translateFreelance(lang);
    translateProjets(lang);
    translateContact(lang);
    translateFooter(lang);
  }

  window.onload = setDefaultLanguage;

  document.getElementById("spanish").addEventListener("click", () => {
    lang = 'es';
    setDefaultLanguage();
  });
  
  document.getElementById("english").addEventListener("click", () => {
    lang = 'en';
    setDefaultLanguage();
  });

  
//   ------------------------------------------------------------
// Traduccion Nav
const translationNav = {
    en: {
        navAbout: 'About',
        navProjets: 'Projets',
        navContact: 'Contact',
    },
    es: {
        navAbout: 'Sobre mí',
        navProjets: 'Proyectos',
        navContact: 'Contacto',
    }
}

function translateNav(lang) {
    document.querySelector(".nav-about").textContent = translationNav[lang].navAbout;
    document.querySelector(".nav-projects").textContent = translationNav[lang].navProjets;
    document.querySelector(".nav-contact").textContent = translationNav[lang].navContact;
}

document.getElementById("english").addEventListener("click", () => translateNav("en"));
document.getElementById("spanish").addEventListener("click", () => translateNav("es"));

// ----------------------------------------------------------
//Traduccion presentacion
const translations = {
    en: {
      greeting: "Hi,",
      soy: "I'am",
      name: "<span class='home__title-color'>Julian</span>",
      profession: "Developer web",
      buttonText: "Download CV",
    },
    es: {
      greeting: "Hola,",
      soy: "Soy",
      name: "<span class='home__title-color'>Julian</span>",
      profession: "Desarrollador web",
      buttonText: "Descargar CV",
    },
  };

  function translate(lang) {
    document.querySelector(".home__greeting").innerHTML = translations[lang].greeting;
    document.querySelector(".home__soy").innerHTML = translations[lang].soy;
    document.querySelector(".home__title-color").innerHTML = translations[lang].name;
    document.querySelector(".home__profession").innerHTML = translations[lang].profession;
    document.querySelector(".btn-cv").textContent = translations[lang].buttonText;
  }

  // Eventos para cambiar idioma
  document.getElementById("english").addEventListener("click", () => translate("en"));
  document.getElementById("spanish").addEventListener("click", () => translate("es"));

// -------------------------------------------------------------------------------------------------
  //Traduccion About
  const aboutTranslations = {
    en: {
      title: "About",
      description: `
        I am a collaborative, communicative person who is always willing to learn.
        I enjoy teamwork, contributing ideas, and coming up with creative solutions.
        My main focus has been the development of web applications, where I have worked
        with technologies such as HTML, CSS, JavaScript, PHP, and MySQL databases.
        I consider myself a Full-Stack developer, capable of working on all layers of
        an application, from front-end to back-end.
      `,
      education: [
        "<li> <span>2023 Testing Automation and Performance </span><br> QA - Egg Corporation </li>",
        "<li> <span>2021 - 2025 Full Stack Developer Program</span><br>TUDAI (Programming) - UNICEN </li>",
        "<li> <span>2020 - ∞ Udemy Courses </span><br>Developer - HTML, CSS, JS, SQL, JAVA </li>",
      ],
      skills: {
        front: ["Html", "Css", "JavaScript", "jQuery", "Angular", "Bootstrap", "Smarty", "VueJs", "Ajax", "Api Rest"],
        back: ["PHP (MVC)", "Laravel (PHP)", "Java (Spring Boot)", "MySQL"],
        poo: ["Java"],
        versioning: ["Git"],
        testing: ["QA", "TestNG", "JUnit 4 y 5"],
        design: ["Figma"],
      },
      experience: [
        "<li><span>2024 - Present</span><br>Freelance page design</li>",
        "<li><span>February-May 2024</span><br>Practice Backend Developer - Gaudium Spain</li>",
        "<li><span>2022-2023</span><br>Full stack developer - Lang technology</li>",
      ],
      tabs: {
        education: "Education",
        experience: "Experience",
      },
    },
    es: {
      title: "Acerca de mí",
      description: `
        Soy una persona colaborativa, comunicativa y siempre dispuesto a aprender.
        Me gusta trabajar en equipo, aportar ideas y soluciones creativas. Mi
        enfoque principal ha sido el desarrollo de aplicaciones web, donde he
        trabajado con tecnologías como HTML, CSS, JavaScript, PHP y bases de datos
        MySQL. Me considero un desarrollador Full-Stack, capaz de trabajar en todas
        las capas de una aplicación, desde el front-end hasta el back-end.
      `,
      education: [
        "<li><span>2023 Testing Automation y Performance </span><br>QA - Egg Corporation</li>",
        "<li><span>2021 - 2025 Carrera Full stack developer </span><br>TUDAI (Programacion) - UNICEN</li>",
        "<li><span>2020 - ∞ Cursos Udemy  </span><br>Developer - HTML, CSS, JS, SQL, JAVA</li>",
      ],
      skills: {
        front: ["Html", "Css", "JavaScript", "jQuery", "Angular", "Bootstrap", "Smarty", "VueJs", "Ajax", "Api Rest"],
        back: ["PHP (MVC)", "Laravel (PHP)", "Java (Spring Boot)", "MySQL"],
        poo: ["Java"],
        versioning: ["Git"],
        testing: ["QA", "TestNG", "JUnit 4 y 5"],
        design: ["Figma"],
      },
      experience: [
        "<li><span>2024 - Actualidad</span><br>Freelance diseño de paginas</li>",
        "<li><span>Febrero - Mayo 2024</span><br>Practicas Backend developer - Gaudium España</li>",
        "<li><span>2022 - 2023</span><br>Full stack developer - Lang Tencologia</li>",
      ],
      tabs: {
        education: "Educación",
        experience: "Experiencia",
      },
    },
  };

  function translateAbout(lang) {
    const data = aboutTranslations[lang];

    document.querySelector(".section-title").textContent = data.title;
    document.querySelector(".about__description").innerHTML = data.description;
    document.querySelector(".p_education").textContent = data.tabs.education;
    document.querySelector(".p_experience").textContent = data.tabs.experience;

    const educationList = document.querySelector("#education ul");
    educationList.innerHTML = data.education.map(item => `<li>${item}</li>`).join("");

    const skills = document.querySelector("#skills .ul-skills");
    skills.innerHTML = `
      <div>
        <li class="li-skills"><span>Front</span><br></li>
        ${data.skills.front.map(skill => `<li>${skill}</li>`).join("")}
      </div>
      <div>
        <li class="li-skills"><span>Back</span><br></li>
        ${data.skills.back.map(skill => `<li>${skill}</li>`).join("")}
        <div>
          <li class="li-skills"><span>P.O.O (objetos)</span><br></li>
          ${data.skills.poo.map(skill => `<li>${skill}</li>`).join("")}
        </div>
      </div>
      <div>
        <li class="li-skills"><span>Sistema de control de versiones</span><br></li>
        ${data.skills.versioning.map(skill => `<li>${skill}</li>`).join("")}
        <li class="li-skills"><span>Testing</span><br></li>
        ${data.skills.testing.map(skill => `<li>${skill}</li>`).join("")}
        <li class="li-skills"><span> Diseño UI/UX y Prototipado</span><br></li>
        ${data.skills.design.map(skill => `<li>${skill}</li>`).join("")}
      </div>
    `;

    const experienceList = document.querySelector("#experience ul");
    experienceList.innerHTML = data.experience.map(item => `<li>${item}</li>`).join("");
  }

  document.getElementById("english").addEventListener("click", () => translateAbout("en"));
  document.getElementById("spanish").addEventListener("click", () => translateAbout("es"));


//-------------------------------------------------------------------------------------------------
// Traduccion Freelance
const translationsFreelance = {
    en: {
      freelance1Category: "Redesign",
      freelance1Title: "Home Studio Chiesa",
    },
    es: { 
        freelance1Category: "Rediseño",
        freelance1Title: "Home Estudio Chiesa",
      },
}

function translateFreelance(lang) {
    document.getElementById("freelance-1-category").textContent = translationsFreelance[lang].freelance1Category;
    document.getElementById("freelance-1-title").textContent = translationsFreelance[lang].freelance1Title;
}

document.getElementById("english").addEventListener("click", () => translateFreelance("en"));
document.getElementById("spanish").addEventListener("click", () => translateFreelance("es"));
//--------------------------------------------------------------------------------
// Traduccion Proyectos
const translationsWork = {
    en: {
      workTitle: "Projects",

      work1Category: "Game",
      work1Title: "Word Guessing Game",

      work2Category: "Interface",
      work2Title: "Spotify Interface Clone",

      work3Category: "Interface",
      work3Title: "Netflix interface clone",
      
      work4Category: "Giveaways",
      work4Title: "Raffles app",

      work5Category: "Game",
      work5Title: "Traditional 'TRUCO' scorer",
      
      work6Category: "Game",
      work6Title: "¡Rock, Paper, Scissors!",

      work7Category: "Climate",
      work7Title: "Enter your city",
      
      work8Category: "Game",
      work8Title: "Click Ball game, beat your score!",
    },
    es: {
      workTitle: "Proyectos",
      work1Category: "Juego",
      work1Title: "Juego de adivinar la palabra",

      work2Category: "Interfaz",
      work2Title: "Clon de la interfaz de Spotify",

      work3Category: "Interfaz",
      work3Title: "Clon de la interfaz de Netflix",

      work4Category: "Sorteos",
      work4Title: "App de sorteos",

      work5Category: "Juego",
      work5Title: "Anotador de truco tradicional",

      work6Category: "Juego",
      work6Title: "¡Piedra, Papel, o Tijera!",

      work7Category: "Clima",
      work7Title: "Ingresa tu ciudad",

      work8Category: "Juego",
      work8Title: "Click Ball game, supera tu puntuacion!",
    }
  };
  
  function translateProjets(lang) {
    document.getElementById("work-title").textContent = translationsWork[lang].workTitle;
    document.getElementById("work-1-category").textContent = translationsWork[lang].work1Category;
    document.getElementById("work-1-title").textContent = translationsWork[lang].work1Title;
    document.getElementById("work-2-category").textContent = translationsWork[lang].work2Category;
    document.getElementById("work-2-title").textContent = translationsWork[lang].work2Title;
    document.getElementById("work-3-category").textContent = translationsWork[lang].work3Category;
    document.getElementById("work-3-title").textContent = translationsWork[lang].work3Title;
    document.getElementById("work-4-category").textContent = translationsWork[lang].work4Category;
    document.getElementById("work-4-title").textContent = translationsWork[lang].work4Title;
    document.getElementById("work-5-category").textContent = translationsWork[lang].work5Category;
    document.getElementById("work-5-title").textContent = translationsWork[lang].work5Title;
    document.getElementById("work-6-category").textContent = translationsWork[lang].work6Category;
    document.getElementById("work-6-title").textContent = translationsWork[lang].work6Title;
    document.getElementById("work-7-category").textContent = translationsWork[lang].work7Category;
    document.getElementById("work-7-title").textContent = translationsWork[lang].work7Title;
    document.getElementById("work-8-category").textContent = translationsWork[lang].work8Category;
    document.getElementById("work-8-title").textContent = translationsWork[lang].work8Title;
  }
  
  document.getElementById("english").addEventListener("click", () => translateProjets("en"));
  document.getElementById("spanish").addEventListener("click", () => translateProjets("es"));

//   ----------------------------------------------------------------------------------------------
// Traduccion Contacto
const translationsContact = {
    en: {
        contactTitle: "Contact me",
        nameLabel: "Name",
        emailLabel: "Email",
        subjectLabel: "Subject",
        messageLabel: "Message",
        submitButton: "Send",
      },
      es: {
        contactTitle: "Contacto",
        nameLabel: "Nombre",
        emailLabel: "Email",
        subjectLabel: "Asunto",
        messageLabel: "Mensaje",
        submitButton: "Enviar",
      }
}

function translateContact(lang) {
    document.querySelector(".contact-title").textContent = translationsContact[lang].contactTitle;

    document.querySelector("label[for='nombre']").textContent = translationsContact[lang].nameLabel;
    document.querySelector("label[for='email']").textContent = translationsContact[lang].emailLabel;
    document.querySelector("label[for='asunto']").textContent = translationsContact[lang].subjectLabel;
    document.querySelector("label[for='message']").textContent = translationsContact[lang].messageLabel;

    document.querySelector("#btn__contact").textContent = translationsContact[lang].submitButton;
}  
  
document.getElementById("english").addEventListener("click", () => translateContact("en"));
document.getElementById("spanish").addEventListener("click", () => translateContact("es"));

// --------------------------------------------------------------------------------------------------------
// Traduccion Footer
const translationsFooter = {
    en: {
        footerRights: "All rigths reserved",
    },
    es: {
        footerRights: "Todos los erechos reservados",
    }
}

function translateFooter(lang) {
    document.querySelector(".derechos").textContent = translationsFooter[lang].footerRights;
}

document.getElementById("english").addEventListener("click", () => translateFooter("en"));
document.getElementById("spanish").addEventListener("click", () => translateFooter("es"));