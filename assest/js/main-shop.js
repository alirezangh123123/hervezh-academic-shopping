let $ = document;
import { NavBar } from "../component/nav-bar-menu/_nav-menu.js";
import { product } from "../db/product.js";
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
        class="card-footer courses-card-footer d-flex justify-content-between"
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
