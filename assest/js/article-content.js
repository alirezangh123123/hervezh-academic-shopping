let $ = document;
import { NavBar } from "../component/nav-bar-menu/_nav-menu.js";
import { Footer } from "../component/footer/footer.js";
import { Aside } from "../component/aside-section-col-3/aside.js";
import { TopBtn } from "../component/go-top-btn/go-top-btn.js";
import { articles } from "../db/article.js";
window.customElements.define("navbar-tg", NavBar);
window.customElements.define("footer-tg", Footer);
window.customElements.define("aside-tg", Aside);
window.customElements.define("top-tg", TopBtn);
const getArticleContextWrapper = $.getElementsByClassName("article-context-wrapper");
let getAddress  = new URLSearchParams(location.search)
let getIdFormAddress = getAddress.get("id");
const setSameData = articles.find((article) =>{
    return article.id === Number(getIdFormAddress)
})
if(setSameData){
    getArticleContextWrapper[0].insertAdjacentHTML("beforeend",`
    <div class="article-cover-wrapper">
<div class="card text-bg-dark border-0">
  <img
    src="${setSameData.cover}"
    class="img-fluid"
    style="height: 400px"
    alt="..."
  />
  <div class="card-img-overlay d-sm-none d-md-block">
    <h4 class="card-title py-2 px-1 ms-auto rounded-1 mt-3 bg-dark text-white" style="width:max-content;">
    ${setSameData.title}
    </h4>
    <p class="card-text text-dark d-flex align-items-center  text-white px-2 py-1 rounded-1 bg-dark" style="width:max-content;" >
      <i class="fa fa-clock pe-2"></i>
      <span> ${setSameData.publishDate}</span>
    </p>
    <p class="card-text text-white" style="font-size: 19px">
      <small class="bg-dark px-2 py-1 rounded-1">
        <i
          class="fa fa-circle text-primary me-2  "
          style="font-size: 17px"
        ></i>
       ${setSameData.articleCategory}
      </small>
    </p>
  </div>
</div>
</div>
<div
class="article-main-context px-4"
style="text-align: justify"
>
<p class="lh-lg text-center" dir="rlt"  >
${setSameData.mainContent}
</p>
</div>
    `)
}

