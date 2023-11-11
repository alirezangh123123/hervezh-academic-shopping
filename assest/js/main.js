let $ = document;
import { NavBar } from "../component/nav-bar-menu/_nav-menu.js";
import { articeSlider } from "../component/articles/_article-comp.js";
import { productSlider } from "./course-slider.js";
import { Footer } from "../component/footer/footer.js";
import { TopBtn } from "../component/go-top-btn/go-top-btn.js";
window.customElements.define("navbar-tg", NavBar);
window.customElements.define("footer-tg", Footer);
window.customElements.define("top-tg", TopBtn);
// course-slider
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
    310: {
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
});
//artilces slider
var blogBoxSwiper = new Swiper(".article-swiper", {
  loop: true,
  grabCursor: true,
  autoplay: true,
  slidesPerView: "auto",
  breakpoints: {
    320: {
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
});
