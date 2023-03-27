"use strict";

  // document.getElementById("dark-mode-toggle").addEventListener("click", darkModeToggle);

  // function darkModeToggle() {
  //   let element = document.body;
  //   element.classList.toggle("dark-mode");
  //   let nav = $(".navbar");
  //   if(nav.hasClass("navbar-dark")) {
  //       nav.addClass("navbar-light bg-light");
  //       nav.removeClass("navbar-dark");
  //   }
  //   else {
  //       nav.removeClass("navbar-light bg-light");
  //       nav.addClass("navbar-dark");
  //   }
  // }


  const menu = document.getElementById("menu");
  const actions = document.getElementById("actions");

  menu.addEventListener("click", hundleMenu);

  function hundleMenu() {
    menu.classList.toggle("is-active");
    actions.classList.toggle("is-active");
  }

  document.getElementById("actions").addEventListener("click", cerrarMenu);

  function cerrarMenu() {
    hundleMenu();
  }


