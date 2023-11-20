let $ = document;
import { NavBar } from "../component/nav-bar-menu/_nav-menu.js";
import { relate_slider } from "./relate-course.js";
import { Footer } from "../component/footer/footer.js";
import { TopBtn } from "../component/go-top-btn/go-top-btn.js";
window.customElements.define("navbar-tg", NavBar);
window.customElements.define("footer-tg", Footer);
window.customElements.define("top-tg", TopBtn);
// content of each product

// product slider
var swiper = new Swiper(".relateSwiper", {
  grabCursor: true,
  // centeredSlides: true,
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
    310: {
      slidesPerView: 1,
      spaceBetween: 5,
    },

    540: {
      slidesPerView: 2,
      spaceBetween: 10,
    },

    769: {
      slidesPerView: 2,
      spaceBetween: 1,
    },
    910: {
      slidesPerView: 3,
      spaceBetween: 3,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 4,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 1,
    },
  },
});
