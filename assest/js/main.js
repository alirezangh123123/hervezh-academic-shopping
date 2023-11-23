let $ = document;
import { NavBar } from "../component/nav-bar-menu/_nav-menu.js";
import { articeSlider } from "../component/articles/_article-comp.js";
import { productSlider } from "./course-slider.js";
import { Footer } from "../component/footer/footer.js";
import { TopBtn } from "../component/go-top-btn/go-top-btn.js";
import { product } from "../db/product.js";
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
//search-section form
const getForm = $.getElementsByClassName("search-field-form");
const getSearchINp = $.getElementById("search-field-inp");
const getSubFormBtn = $.getElementById("sub-form-btn");
const getLIst = $.getElementById("suggest-list");
let showSuggestions = () => {
  let getInpValue = getSearchINp.value.trim().toUpperCase();
  let getResult = product.filter((product) => {
    if (product.title.includes(getInpValue)) {
      return product.title;
    }
  });
  if (getResult) {
    getLIst.innerHTML = "";
    // make list stracture
    getResult.map((target) => {
      let liElem, linkElem;
      liElem = $.createElement("li");
      liElem.className =
        "suggest-item py-2 mb-1 border-bottom d-flex justify-content-around align-items-center px-3";
      linkElem = $.createElement("a");
      linkElem.setAttribute("href", `product.html?id=${target.id}`);
      linkElem.textContent = target.title;
      linkElem.className = "target-link";
      liElem.append(linkElem);
      getLIst.append(liElem);
    });
  }
  if (getSearchINp.value !== "") {
    getLIst.classList.add("active");
  } else {
    getLIst.classList.remove("active");
  }
  let listItems = $.querySelectorAll("li.suggest-item");
  listItems.forEach((item) => {
    let textContent = item.lastElementChild.textContent;
    item.addEventListener("click", (event) => {
      event.preventDefault();
      getSearchINp.value = textContent;
      getLIst.classList.remove("active");
    });
  });
};
// go to correct location
getSubFormBtn.addEventListener("click", (event) => {
  event.preventDefault();
  let findAddress = $.querySelector("a.target-link");
  let correctLink = findAddress.href;
  location.href = correctLink;
});
getSearchINp.addEventListener("keyup", showSuggestions);
getForm[0].addEventListener("submit", (event) => {
  event.preventDefault();
});
