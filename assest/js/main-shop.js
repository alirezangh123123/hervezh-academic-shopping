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
          <a href="#" class="fw-bold text-dark"
            >${item.title}</a
          >
        </div>
      </div>
      <div
        class="card-footer bg-white courses-card-footer rounded-bottom-3 d-flex justify-content-between"
      >
        <span class="price">${item.price}</span>
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
  let searchData = allDatas.filter((data) => {
    if (data.title.includes(searchInpValue)) {
      return data.title;
    }
  });

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
  let chooseItem = $.querySelectorAll("li.suggest-item")
  chooseItem.forEach((target)=>{
    let targetTitle=target.lastElementChild.textContent;
    target.addEventListener("click",(event)=>{
event.preventDefault();
searchInp.value = targetTitle;
suggestionList.classList.remove("active");
suggestionList.innerHTML = target.innerHTML;
    })
  })
  // go to correct address
  subLinkBtn[0].addEventListener("click",(event)=>{
    
    let getLinkAddress = $.querySelector("a.target-link");
    let getHref = getLinkAddress.href;
    console.log(getHref);
    console.log(getLinkAddress);
    
    location.href = getHref
  })
};
searchInp.addEventListener("keyup", startSearch);
// increase input-size
// searchInp.addEventListener("click", (event) => {
//   event.target.classList.toggle("active");
// });
