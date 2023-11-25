let $ = document;
import { NavBar } from "../component/nav-bar-menu/_nav-menu.js";
import { product } from "../db/product.js";
import { articles } from "../db/article.js";
import { Footer } from "../component/footer/footer.js";
import { TopBtn } from "../component/go-top-btn/go-top-btn.js";
window.customElements.define("footer-tg", Footer);
window.customElements.define("top-tg", TopBtn);
window.customElements.define("navbar-tg", NavBar);
const allProductsWrapper = $.getElementById("prodWrapper");
let setProductCard = product.forEach((item) => {
  allProductsWrapper.insertAdjacentHTML(
    `beforeend`,
    `
    <div class="col-md-4 col-lg-3 mb-sm-6 mb-md-7">
                    
    <div class="card courses-card mt-4 px-3 py-1">
      <div class="card-img courses-card-img">
        <img
          src="${item.cover}"
          class="img-fluid rounded-5"
          alt=""
        />
      </div>
      <div class="card-body courses-card-body">
        <div class="custom-card-title text-center">
          <a href="product.html?id=${item.id}" class="fw-bold text-dark"
            >${item.title}</a
          >
        </div>
      </div>
      <div
        class="card-footer bg-white courses-card-footer rounded-bottom-3 d-flex justify-content-between"
      >
      <div class="price-wrapper d-flex">
      <span class="price text-end mx-1 order-2">${item.price}</span>
      <span class="price text-end  ">تومان</span>
      </div>
       
        <span class="member">
          <i class="fa fa-users"></i>
          ${item.member}
        </span>
      </div>
    </div>
  
</div>
`
  );
});
// concatication of products and articles
let allDatas = product.concat(articles);
// search products and articles
const searchInp = $.getElementById("search-field");
const getForm = $.getElementsByClassName("search-field-form");
const subLinkBtn = $.getElementsByClassName("target-link-location");
const suggestionList = $.getElementById("suggest-list");
let startSearch = () => {
  searchInp.classList.add("active");
  let searchInpValue = searchInp.value.toUpperCase().trim();
  let searchData = allDatas
    .filter((data) => {
      if (data.title.includes(searchInpValue)) {
        return data.title;
      }
    })
    .slice(0, 5);

  if (searchData) {
    suggestionList.innerHTML = "";
    searchData.map((target) => {
      let liElem, linkElem, labelElem;
      liElem = $.createElement("li");
      liElem.className =
        "suggest-item ms-auto w-100   py-1  border-bottom d-flex justify-content-between align-items-center px-1";
      linkElem = $.createElement("a");
      if (target.label == "#مقاله") {
        linkElem.setAttribute("href", `article-content.html?id=${target.id}`);
      } else {
        linkElem.setAttribute("href", `product.html?id=${target.id}`);
      }
      linkElem.textContent = target.title;
      linkElem.className = "target-link text-end";
      labelElem = $.createElement("label");
      labelElem.className = " text-dark text-start";
      labelElem.textContent = target.label;
      labelElem.style.fontSize = "14px";
      labelElem.style.width = "60%";
      liElem.append(labelElem, linkElem);
      suggestionList.append(liElem);
    });
  }
  if (searchInp.value.trim() !== "") {
    suggestionList.classList.add("active");
  } else {
    suggestionList.classList.remove("active");
    searchInp.classList.remove("active");
  }
  let chooseItem = $.querySelectorAll("li.suggest-item");
  chooseItem.forEach((target) => {
    let targetTitle = target.lastElementChild.textContent;
    target.addEventListener("click", (event) => {
      event.preventDefault();
      searchInp.value = targetTitle;
      suggestionList.classList.remove("active");
      suggestionList.innerHTML = target.innerHTML;
    });
  });
  // go to correct address
  subLinkBtn[0].addEventListener("click", (event) => {
    let getLinkAddress = $.querySelector("a.target-link");
    let getHref = getLinkAddress.href;
    console.log(getHref);
    console.log(getLinkAddress);

    location.href = getHref;
  });
};
searchInp.addEventListener("keyup", startSearch);
//
//
// sort products based on their prices descending
//
//
let expensiveBtn = $.getElementById("expensive");
let cheapestBtn = $.getElementById("cheapest");
let popularBtn = $.getElementById("most-popular");
let defaultBtn = $.getElementById("default-mode");
let catgoryTitle = $.getElementById("catagory-title");
let descendingMode = () => {
  let sortByPriceDescending = (a, b) => {
    const price_A = parseInt(a.price.replace(/\D/g, ``), 10);
    const price_B = parseInt(b.price.replace(/\D/g, ``), 10);
    return price_B - price_A;
  };

  const sortedProducts = product.sort(sortByPriceDescending);

  allProductsWrapper.innerHTML = "";
  sortedProducts.forEach((item) => {
    allProductsWrapper.insertAdjacentHTML(
      `beforeend`,
      `
      <div class="col-md-4 col-lg-3 mb-sm-6 mb-md-7">
        <div class="card courses-card mt-4 px-3 py-1">
          <div class="card-img courses-card-img">
            <img src="${item.cover}" class="img-fluid rounded-5" alt="" />
          </div>
          <div class="card-body courses-card-body">
            <div class="custom-card-title text-center">
              <a href="product.html?id=${item.id}" class="fw-bold text-dark">${item.title}</a>
            </div>
          </div>
          <div class="card-footer bg-white courses-card-footer rounded-bottom-3 d-flex justify-content-between">
            <div class="price-wrapper d-flex">
              <span class="price text-end mx-1 order-2">${item.price}</span>
              <span class="price text-end  ">تومان</span>
            </div>
            <span class="member">
              <i class="fa fa-users"></i>
              ${item.member}
            </span>
          </div>
        </div>
      </div>
    `
    );
  });
  catgoryTitle.innerHTML = "گرانترین";
};
let adscendingMode = () => {
  let sortByPriceDescending = (a, b) => {
    const price_A = parseInt(a.price.replace(/\D/g, ``), 10);
    const price_B = parseInt(b.price.replace(/\D/g, ``), 10);
    return price_A - price_B;
  };
  const sortedProducts = product.sort(sortByPriceDescending);
  allProductsWrapper.innerHTML = "";
  sortedProducts.forEach((item) => {
    allProductsWrapper.insertAdjacentHTML(
      `beforeend`,
      `
      <div class="col-md-4 col-lg-3 mb-sm-6 mb-md-7">
        <div class="card courses-card mt-4 px-3 py-1">
          <div class="card-img courses-card-img">
            <img src="${item.cover}" class="img-fluid rounded-5" alt="" />
          </div>
          <div class="card-body courses-card-body">
            <div class="custom-card-title text-center">
              <a href="product.html?id=${item.id}" class="fw-bold text-dark">${item.title}</a>
            </div>
          </div>
          <div class="card-footer bg-white courses-card-footer rounded-bottom-3 d-flex justify-content-between">
            <div class="price-wrapper d-flex">
              <span class="price text-end mx-1 order-2">${item.price}</span>
              <span class="price text-end  ">تومان</span>
            </div>
            <span class="member">
              <i class="fa fa-users"></i>
              ${item.member}
            </span>
          </div>
        </div>
      </div>
    `
    );
  });
  catgoryTitle.innerHTML = "ارزانترین";
};
let mostPopularMode = () => {
  const sortedProducts = product.sort((member_A, member_B) => {
    return member_B.member - member_A.member;
  });
  allProductsWrapper.innerHTML = "";
  sortedProducts.forEach((item) => {
    allProductsWrapper.insertAdjacentHTML(
      `beforeend`,
      `
      <div class="col-md-4 col-lg-3 mb-sm-6 mb-md-7">
        <div class="card courses-card mt-4 px-3 py-1">
          <div class="card-img courses-card-img">
            <img src="${item.cover}" class="img-fluid rounded-5" alt="" />
          </div>
          <div class="card-body courses-card-body">
            <div class="custom-card-title text-center">
              <a href="product.html?id=${item.id}" class="fw-bold text-dark">${item.title}</a>
            </div>
          </div>
          <div class="card-footer bg-white courses-card-footer rounded-bottom-3 d-flex justify-content-between">
            <div class="price-wrapper d-flex">
              <span class="price text-end mx-1 order-2">${item.price}</span>
              <span class="price text-end  ">تومان</span>
            </div>
            <span class="member">
              <i class="fa fa-users"></i>
              ${item.member}
            </span>
          </div>
        </div>
      </div>
    `
    );
  });
  catgoryTitle.innerHTML = "محبوب ترین";
};

window.addEventListener("load", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const sortParam = urlParams.get("sort");

  if (sortParam === "expensive") {
    descendingMode();
  }
  if (sortParam === "cheaper") {
    adscendingMode();
  }
  if (sortParam === "popular") {
    mostPopularMode();
  }

  const preLoaderWrapper = $.getElementsByClassName("preload-container");
  preLoaderWrapper[0].classList.add("hidden");
});

expensiveBtn.addEventListener("click", () => {
  const url = new URL(window.location.href);
  url.searchParams.set("sort", "expensive");
  window.location.href = url;
});
cheapestBtn.addEventListener("click", () => {
  const url = new URL(window.location.href);
  url.searchParams.set("sort", "cheaper");
  window.location.href = url;
});
popularBtn.addEventListener("click", () => {
  const url = new URL(window.location.href);
  url.searchParams.set("sort", "popular");
  window.location.href = url;
});
defaultBtn.addEventListener("click", () => {
  location.href = "shop.html";
  catgoryTitle.innerHTML = "پیش فرض";
});
