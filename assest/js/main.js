let $ = document;
import { NavBar } from "../component/nav-bar-menu/_nav-menu.js";
import { articeSlider } from "../component/articles/_article-comp.js";
import { productSlider } from "./course-slider.js";
import { Footer } from "../component/footer/footer.js";
import { TopBtn } from "../component/go-top-btn/go-top-btn.js";
import { product } from "../db/product.js";
import { articles } from "../db/article.js";
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
// concatination products and articles
let allDatas = product.concat(articles);
//search-section form
const getForm = $.getElementsByClassName("search-field-form");
const getSearchINp = $.getElementById("search-field-inp");
const getSubFormBtn = $.getElementById("sub-form-btn");
const getLIst = $.getElementById("suggest-list");
let showSuggestions = () => {
  let getInpValue = getSearchINp.value.toUpperCase().trim();
  let getResult = allDatas.filter((product) => {
    if (product.title.includes(getInpValue)) {
      return product.title;
    }
  });
  if (getResult) {
    getLIst.innerHTML = "";
    // make list stracture
    getResult.map((target) => {
      let liElem, linkElem, labelElem;
      liElem = $.createElement("li");
      liElem.className =
        "suggest-item py-2 mb-1 border-bottom d-flex justify-content-around align-items-center px-3";
      linkElem = $.createElement("a");
      if (target.label == "#مقاله") {
        linkElem.setAttribute("href", `article-content.html?id=${target.id}`);
      } else {
        linkElem.setAttribute("href", `product.html?id=${target.id}`);
      }
      linkElem.textContent = target.title;
      linkElem.className = "target-link";
      labelElem = $.createElement("label");
      labelElem.className = "w-25 text-dark text-start";
      labelElem.textContent = target.label;
      liElem.append(labelElem, linkElem);
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
      getLIst.innerHTML  = item.innerHTML
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
