let $ = document;
import { product } from "../../db/product.js";
import { articles } from "../../db/article.js";
let setAllData = product.concat(articles);

const asideTemplate = document.createElement("template");
asideTemplate.innerHTML = `
<link rel="stylesheet" href="/assest/css/font-awesome.css" />
<link rel="stylesheet" href="/assest/css/bootstrap.css" />
<link rel="stylesheet" href="/assest/css/style.css" />
<link rel="stylesheet" href="/assest/component/aside-section-col-3/aside.css" />
<link rel="stylesheet" href="/assest/css/shop.css" />

<aside class="  side-bar-wrapper">
<div class="side-bar-search-inner col-12">
  <div class="search-section bg-white mt-2">
  <form class="w-100 search-section search-field-form">
                    <div class="w-100 input-wrapper position-relative">
                      <a
                        href="#"
                        class="target-link-location position-absolute z-3"
                      >
                        <i class="fa fa-magnifying-glass"></i>
                      </a>
                      <input
                        type="search"
                        id="search-field"
                        class="form-control search-header-input form-control-lg py-3 search-prod text-end form-control rounded-0 form-control-lg pe-0 px-6"
                        placeholder="...جستجو کنید"
                        style="font-size: 15px"
                        autocomplete="off"
                      />
                    </div>
                    <ul
                      class="z-4 w-100 py-2 me-3 text-end pe-2 suggest-list list-unstyled d-flex flex-column align-items-start text-dark"
                      id="suggest-list"
                    ></ul>
                  </form>
  </div>
</div>
<div
  class="col-12 side-bar-catagory-inner text-end bg-white mt-3"
>
  <span class="fw-bold me-3"
    >دسته بندی دوره ها
    <span class="sub-border-catagory"></span>
  </span>
  <ul class="list-unstyled list-group list-group-flush">
    <li class="list-group-item">
      <a href="../../../product.html?id=1" class="w-100">آنالیز گوگل</a>
    </li>
    <li class="list-group-item">
      <a href="../../../product.html?id=2" class="w-100">افزایش سرعت سایت</a>
    </li>
    <li class="list-group-item">
      <a href="../../../product.html?id=4" class="w-100">سرچ حرفه ای درگوگل</a>
    </li>
    <li class="list-group-item">
      <a href="../../../product.html?id=5" class="w-100">html,css آموزش </a>
    </li>
    <li class="list-group-item">
      <a href="../../../product.html?id=3" class="w-100">آموزش ایمیل مارکتینگ</a>
    </li>
    <li class="list-group-item">
      <a href="../../../product.html?id=6" class="w-100">رشد مهارت ای نرم در زندگی</a>
    </li>
    <li class="list-group-item">
      <a href="../../../product.html?id=7" class="w-100">تکنیک های تقویت حافظه</a>
    </li>
    <li class="list-group-item">
      <a href="../../../product.html?id=8" class="w-100">در برنامه نویسی npm آموزش </a>
    </li>
    <li class="list-group-item">
      <a href="../../../product.html?id=9" class="w-100">wordpress  آموزش ساخت وبسایت با </a>
    </li>
    <li class="list-group-item">
      <a href="../../../product.html?id=10" class="w-100">آموزش زبان آلمانی</a>
    </li>
    <li class="list-group-item">
      <a href="../../../product.html?id=12" class="w-100">دوره فشرده آموزش فوتوشاپ</a>
    </li>
  </ul>
</div>
<div
  class="col-12 side-bar-catagory-inner text-end bg-white mt-3"
>
  <span class="fw-bold me-3"
    > ...دسترسی سریع به 
    <span class="sub-border-catagory"></span>
  </span>
  <ul class="list-unstyled list-group list-group-flush">
    <li class="list-group-item">
      <a href="../../../index.html" class="w-100">صفحه اصلی</a>
    </li>
    <li class="list-group-item">
      <a href="../../../cart.html" class="w-100">سبد خرید</a>
    </li>
    <li class="list-group-item">
      <a href="../../../index.html#webmaster" class="w-100">دوره برتر ماه</a>
    </li>
    <li class="list-group-item">
      <a href="../../../all-article.html" class="w-100">مقالات</a>
    </li>
    <li class="list-group-item">
      <a href="../../../all-article.html#footer" class="w-100">تماس با ما</a>
    </li>
    <li class="list-group-item">
      <a href="#" class="w-100">درباره ما</a>
    </li>
  </ul>
</div>
</aside>
`;
class Aside extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.append(asideTemplate.content.cloneNode(true));
    this.SearchInput = this.shadowRoot.querySelector("#search-field");
    this.getSearchForm = this.shadowRoot.querySelector(".search-field-form");
    this.SubLinkBtn = this.shadowRoot.querySelector(".target-link-location");
    this.suggestionList = this.shadowRoot.querySelector("#suggest-list");
    this.SearchInput.addEventListener("keyup", (event) => {
      event.target.classList.add("active");
      let searchInpValue = event.target.value.toUpperCase().trim();
      let searchData = setAllData
        .filter((data) => {
          if (data.title.includes(searchInpValue)) {
            return data.title;
          }
        })
        .slice(0, 5);
      if (searchData) {
        this.suggestionList.innerHTML = "";
        searchData.map((target) => {
          let liElem, linkElem, labelElem;
          liElem = $.createElement("li");
          liElem.className =
            "suggest-item ms-auto w-100   py-1  border-bottom d-flex justify-content-between align-items-center px-1";
          linkElem = $.createElement("a");
          if (target.label == "#مقاله") {
            linkElem.setAttribute(
              "href",
              `article-content.html?id=${target.id}`
            );
          } else {
            linkElem.setAttribute("href", `product.html?id=${target.id}`);
          }
          linkElem.textContent = target.title;
          linkElem.className = "target-link text-end";
          labelElem = $.createElement("label");
          labelElem.className = "text-dark text-start";
          labelElem.textContent = target.label;
          labelElem.style.fontSize = "14px";
          labelElem.style.width = "60%";
          liElem.append(labelElem, linkElem);
          this.suggestionList.append(liElem);
        });
      }
      if (this.SearchInput.value.trim() !== "") {
        this.suggestionList.classList.add("active");
      } else {
        this.suggestionList.classList.remove("active");
        this.SearchInput.classList.remove("active");
        this.suggestionList.innerHTML = "";
      }
      let chooseItem = this.shadowRoot.querySelectorAll("li.suggest-item");

      chooseItem.forEach((target) => {
        let targetTitle = target.lastElementChild.textContent;
        target.addEventListener("click", (event) => {
          event.preventDefault();
          this.SearchInput.value = targetTitle;
          this.suggestionList.classList.remove("active");
          this.suggestionList.innerHTML = target.innerHTML;
        });
      });
      this.SubLinkBtn.addEventListener("click", () => {
        let getLinkAddress = this.shadowRoot.querySelector("a.target-link");
        let getHref = getLinkAddress.href;
        location.href = getHref;
      });
    });
  }
}
export { Aside };
