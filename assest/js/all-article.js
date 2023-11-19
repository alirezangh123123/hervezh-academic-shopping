let $ = document;
import { NavBar } from "../component/nav-bar-menu/_nav-menu.js";
import { Footer } from "../component/footer/footer.js";
import { TopBtn } from "../component/go-top-btn/go-top-btn.js";
import { Aside } from "../component/aside-section-col-3/aside.js";
import { articles } from "../db/article.js";
window.customElements.define("navbar-tg", NavBar);
window.customElements.define("aside-tg", Aside);
window.customElements.define("footer-tg", Footer);
const articleWrapper = $.getElementById("article-card-container");

let appendArticlesInDom = articles.forEach((items) => {
  articleWrapper.insertAdjacentHTML(
    "beforeend",
    `
    <div class="col-md-4 mb-3">
                  <div class="card all-article-card">
                    <div class="card-img aritcle-card-img">
                      <img
                        src="${items.cover}"
                        class="img-fluid rounded-3"
                        alt=""
                      />
                    </div>
                    <div class="card-body article-card-body">
                      <h6 class="card-article-title fw-bold text-truncate">
                        ${items.title}
                      </h6>
                      <p class="card-article-description text-truncate">
                     ${items.shortDescription}
                      </p>
                      <div
                        class="article-card-info d-flex justify-content-between"
                      >
                        <span class="article-publishDate">
                          ${items.publishDate}
                          <i class="fa fa-clock"></i>
                        </span>
                        <span
                          class="article-catagory d-flex align-items-center"
                        >
                          <span class="article-catagory-title mx-1"> ${items.articleCategory}</span>
                          <i class="fa fa-circle text-primary mx-1"></i>
                        </span>
                      </div>
                      <div
                        class="btn-article-wrapper text-white d-flex justify-content-center mb-n4"
                      >
                        <button class="btn btn-primary">
                          <a href="#" class="text-white">ادامه مطلب</a>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
    
    `
  );
});
