let $ = document;
import { articles } from "../../db/article.js";
const articleWrapper = $.getElementById("article-slider");
let articeSlider = articles.forEach((article) => {
  articleWrapper.insertAdjacentHTML(
    "beforeend",
    `
  <div class="swiper-slide" dir="rtl">
  <div class="card article-card px-2 h-100">
    <div class="card-img aritcle-card-img">
      <img
        src="${article.cover}"
        class="img-fluid rounded-3"
        alt=""
      />
    </div>
    <div class="card-body article-card-body">
      <h6 class="card-article-title fw-bold text-truncate ">
     ${article.title}
      </h6>
      <p class="card-article-description text-truncate">
       ${article.shortDescription}
      </p>
      <div
        class="article-card-info d-flex justify-content-between"
      >
        <span class="article-publishDate">
         ${article.publishDate}
          <i class="fa fa-clock"></i>
        </span>
        <span
          class="article-catagory d-flex align-items-center"
        >
          <span class="article-catagory-title mx-1">
          ${article.articleCategory}
          </span>
          <i class="fa fa-circle text-primary mx-1"></i>
        </span>
      </div>
      <div class="btn-article-wrapper text-white d-flex justify-content-center mb-n4">
        <button class="btn btn-primary "><a href="article-content.html?id=${article.id}" class="text-white">ادامه مطلب</a></button>
      </div>
    </div>
  </div>
</div>`
  );
});
export { articeSlider };
