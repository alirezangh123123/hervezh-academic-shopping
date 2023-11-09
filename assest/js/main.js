let $ = document;
import { NavBar } from "../component/nav-bar-menu/_nav-menu.js";
import { productSlider } from "./course-slider.js";
window.customElements.define("navbar-tg", NavBar);
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  loop: true,
  breakpoints: {
    350: {
      slidesPerView: 1,
      spaceBetween: 5,
    },

    540: {
      slidesPerView: 2,
      spaceBetween: 10,
    },

    768: {
      slidesPerView: 3,
      spaceBetween: 7,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 8,
    },
  },
  pagination: {
    el: ".swiper-pagination",
  },
});