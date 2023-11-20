let $ = document;
import { product } from "../db/product.js";
const sliderWrapper = $.getElementById("course-slider-wrapper");
let productSlider = product.forEach((item) => {
  sliderWrapper.insertAdjacentHTML(
    "beforeend",
    `
 <div class="swiper-slide">
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
                <div class="swiper-slide-shadow-left"></div>
                <div class="swiper-slide-shadow-right"></div>`
  );
});
export { productSlider };
