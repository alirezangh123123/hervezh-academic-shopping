let $ = document;
import { product } from "../db/product.js";
const relateCourseWrapper = $.getElementById("relate-course-slider-wrapper");
let relate_slider = product.forEach((item) => {
  relateCourseWrapper.insertAdjacentHTML(
    "beforeend",
    `
    <div class="swiper-slide ">
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
  </div>`
  );
});
console.log(product);
export {relate_slider}