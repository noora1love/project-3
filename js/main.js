"use strict";

function testWebP(callback) {
  var webP = new Image();

  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };

  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});
;
var menuBtn = document.querySelector(".mobile-menu__btn");
var menuMobile = document.querySelector(".mobile-menu");
var loginBtnContainer = document.querySelector(".header__login");
var loginBtn = document.querySelector(".header__login-btn");
var modalWindow = document.querySelector(".modal-window");
var modalCloseIcon = document.querySelector(".modal-close-icon");
var modalDarkLayer = document.querySelector(".modal-dark-layer");
menuBtn.addEventListener("click", function (e) {
  e.preventDefault();
  menuMobile.classList.toggle("mobile-menu_active");
  document.body.classList.toggle("body-no-scroll");
});
loginBtnContainer.addEventListener("click", function () {
  modalDarkLayer.style.display = "block";
  document.body.classList.toggle("body-no-scroll");
});
loginBtn.addEventListener("click", function () {
  modalDarkLayer.style.display = "block";
  menuMobile.classList.toggle("mobile-menu_active");
});
modalCloseIcon.addEventListener("click", function () {
  modalDarkLayer.style.display = "none";
  document.body.classList.toggle("body-no-scroll");
});