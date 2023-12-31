let $ = document;
import { NavBar } from "../component/nav-bar-menu/_nav-menu.js";
import { relate_slider } from "./relate-course.js";
import { Footer } from "../component/footer/footer.js";
import { TopBtn } from "../component/go-top-btn/go-top-btn.js";
import { product } from "../db/product.js";
window.customElements.define("navbar-tg", NavBar);
window.customElements.define("footer-tg", Footer);
window.customElements.define("top-tg", TopBtn);
const headerProduct = $.getElementById("header-product");
let changeToArray;
let basketSet = new Set();
const productDescription = $.getElementsByClassName(
  "whole-product-container"
)[0];
// content of each product
let locationParams = new URLSearchParams(location.search);
let setProductId = locationParams.get(`id`);
let showCorrectProdInDom = product.find((product) => {
  return product.id === Number(setProductId);
});
if (showCorrectProdInDom) {
  headerProduct.insertAdjacentHTML(
    "beforeend",
    `
  <section class="product-header-info">
  <div class="container">
    <div class="row">
      <div class="col-10 offset-2 breadcrumb-wrapper">
        <nav
          class="text-white me-sm-3 me-md-6 me-lg-0"
          style="--bs-breadcrumb-divider: '>'"
          aria-label="breadcrumb">
          <ol
            class="breadcrumb mt-3 d-flex justify-content-end align-items-center">
            <li class="breadcrumb-item active" aria-current="page">
              صفحه محصول
            </li>
            <li class="breadcrumb-item">
              <a class="text-white" href="./index.html">صفحه اصلی</a>
            </li>
          </ol>
        </nav>
      </div>
      <div class="col-lg-7 product-selling-info course-intro-info">
        <h4 class="fw-bold text-white text-center order-sm-2 order-md-1 mt-3 d-sm-none d-lg-block">
          ${showCorrectProdInDom.title}
        </h4>
        <div
          class="course-intro-selling-info course-intro-selling-info d-flex my-auto d-sm-none d-lg-flex">
          <svg class="svg svg--full">
            <use xlink:href="#svg_price-ticket">
              <svg id="svg_price-ticket" viewBox="0 0 462 103.7">
                <g
                  id="Group_5101"
                  transform="translate(-11249.401 1012)">
                  <path
                    d="M11709.9-971.2h1.4v-36.9c0-2.2-1.8-4-4-4h-454c-2.2 0-4 1.8-4 4v36.8h1c5.9.2 10.7 5.1 10.7 11s-4.7 10.8-10.7 11h-1v36.9c0 2.2 1.8 4 4 4h454c2.2 0 4-1.8 4-4v-37l-1.1.1h-.4c-6.1 0-11-4.9-11-11 .1-5.9 5.1-10.9 11.1-10.9zm-13 11c0 7 5.6 12.7 12.5 13v34.9c0 1.1-.9 2-2 2h-454c-1.1 0-2-.9-2-2v-34.9c6.5-.7 11.7-6.3 11.6-12.9 0-6.7-5.1-12.3-11.6-12.9v-34.9c0-1.1.9-2 2-2h454c1.1 0 2 .9 2 2v34.8c-6.9.2-12.5 5.9-12.5 12.9z"
                  ></path>
                  <path
                    d="M11479.9-927.7c-.6 0-1-.4-1-1v-9.1c0-.6.4-1 1-1s1 .4 1 1v9.1c0 .6-.4 1-1 1zm0-18.1c-.6 0-1-.4-1-1v-9.1c0-.6.4-1 1-1s1 .4 1 1v9.1c0 .5-.4 1-1 1zm0-18.1c-.6 0-1-.4-1-1v-9.1c0-.6.4-1 1-1s1 .4 1 1v9.1c0 .5-.4 1-1 1zm0-18.2c-.6 0-1-.4-1-1v-9.1c0-.6.4-1 1-1s1 .4 1 1v9.1c0 .6-.4 1-1 1z"
                  ></path>
                </g>
              </svg>
            </use>
          </svg>

          <div class="course-intro-price mx-2">
            <p
              class="d-flex flex-column align-items-center justify-content-center"
            >
              <span>${showCorrectProdInDom.price}</span>
              <span>هزار تومان</span>
            </p>
          </div>
          <div class="course-intro-selling mx-2">
            <p
              class="d-flex flex-column align-items-center justify-content-center"
            >
              <span>${showCorrectProdInDom.member}</span>
              <span>فروش</span>
            </p>
          </div>
        </div>
        <!-- btn-in-wide-screen -->
        <div
          class="purchase-wrapper wide-screen-mode w-100 d-flex justify-content-around d-sm-none d-lg-flex"
          style="position: absolute; bottom: 20%"
        >
          <div class="col-lg-6 w-50">
            <button class="btn w-75 btn-success btn-lg add-to-cart-btn" aria-label="${showCorrectProdInDom.id}">
              افزودن به سبد خرید
            </button>
          </div>
          <div class="col-lg-6 w-50">
            <button class="btn w-75 btn-primary btn-lg">
              <a href="#" class="text-white">مشاهده جلسات دوره</a>
            </button>
          </div>
        </div>
      </div>
      <div
        class="col-lg-5 product-topic-info mt-4 mb-sm-3 mb-lg-0 d-flex flex-column align-items-md-center mx-auto"
      >
        <div
          class="topic-product-info-title d-flex justify-content-sm-center justify-content-md-end"
        >
          <h3 class="text-white fw-bold mb-4">
            ${showCorrectProdInDom.title}
          </h3>
        </div>
        <div
          class="topic-product-info-cover d-flex flex-column align-items-sm-center align-items-md-end"
        >
          <img
            src="${showCorrectProdInDom.cover}"
            class="img-fluid rounded-top-2"
            alt=""
          />
          <!-- purchase-btn-for-small-devices -->
          <div
            class="d-flex justify-content-center mt-2 w-100 d-sm-flex d-lg-none"
          >
            <button class="btn btn-primary text-white rounded-1 w-100 add-to-cart-btn" aria-label="${showCorrectProdInDom.id}">شرکت در دوره</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  `
  );
  productDescription.insertAdjacentHTML(
    "beforeend",
    `
  <section
  id="product-description"
    class="product-description mt-4 mx-sm-0 mx-md-5 bg-light rounded-1"
    dir="rtl"
  >
    <div class="container">
      <div class="row">
        <div class="col-12 ps-md-0 p-md-4">
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home-tab-pane"
                type="button"
                role="tab"
                aria-controls="home-tab-pane"
                aria-selected="true"
              >
                توضیحات
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile-tab-pane"
                type="button"
                role="tab"
                aria-controls="profile-tab-pane"
                aria-selected="false"
              >
                جلسات دوره
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#contact-tab-pane"
                type="button"
                role="tab"
                aria-controls="contact-tab-pane"
                aria-selected="false"
              >
                نظرات
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <!-- the explantion of product -->
            <div
              class="tab-pane fade show active"
              id="home-tab-pane"
              role="tabpanel"
              aria-labelledby="home-tab"
              tabindex="0"
            >
              <div class="container-fluid bg-light">
                <div class="row product-info-wrapper">
                  <div
                    class="col-12 about-product mt-6 d-flex justify-content-start flex-column align-items-start"
                  >
                    <h4 class="about-product-title text-end mb-4 fw-bold">
                    ${showCorrectProdInDom.title}
                    </h4>
                    <p class="about-product-desc-1 text-end">
                    ${showCorrectProdInDom.main_description_1}
                    </p>
                    <p class="about-product-desc-2 text-end">
                 ${showCorrectProdInDom.main_description_2}
                    </p>
                    <p class="about-product-desc-3 text-end">
            ${showCorrectProdInDom.main_description_3}
                    </p>
                  </div>
                  <div class="col-lg-6 suggest-to-use px-sm-0 px-lg-2 mt-3">
                    <div
                      class="user-advice-wrapper d-flex flex-column align-items-center"
                    >
                      <h5 class="text-success fw-bold">
                        این دوره برای چه کسانی مناسب است؟
                      </h5>
                      <ul class="advice-list-wrapper mt-3">
                        <li class="me-lg-5 me-sm-n4 text-end">
                       ${showCorrectProdInDom.advice_1}
                        </li>
                        <li class="me-lg-5 me-sm-n4 text-end">
                 ${showCorrectProdInDom.advice_2}
                        </li>
                        <li class="me-lg-5 me-sm-n4 text-end">
                    ${showCorrectProdInDom.advice_3}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-lg-6 avoid-to-use px-sm-0 px-lg-2 mt-3">
                    <div
                      class="user-advice-wrapper d-flex flex-column align-items-center"
                    >
                      <h5 class="text-danger fw-bold">
                        این دوره برای چه کسانی مناسب نیست؟
                      </h5>
                      <ul class="advice-list-wrapper mt-3">
                        <li class="me-lg-5 me-sm-n4 text-end">
    ${showCorrectProdInDom.avoid_1}
                        </li>
                        <li class="me-lg-5 me-sm-n4 text-end">
${showCorrectProdInDom.avoid_2}
                        </li>
                        <li class="me-lg-5 me-sm-n4 text-end">
${showCorrectProdInDom.avoid_3}                         
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div
                    class="col-lg-6 product-motto mt-4 first-product-motto d-flex flex-column align-items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="Layer_1"
                      class="motto-svg"
                      viewBox="0 0 511.999 511.999"
                    >
                      <g>
                        <path
                          d="m239.075 30.17v71.712c5.581-.521 11.223-.802 16.925-.802 5.698 0 11.337.281 16.913.801v-71.711z"
                          fill="#cbe2ff"
                        ></path>
                        <path
                          d="m255.994 30.17h-16.919v71.712c5.579-.521 11.219-.802 16.919-.802z"
                          fill="#9dc6fb"
                        ></path>
                        <path
                          d="m50.753 2.101c-7.491 4.325-10.058 13.904-5.733 21.396l8.71 15.086 5.443 1.503 21.685-13.392v-3.774l-8.71-15.086c-4.325-7.491-13.904-10.058-21.395-5.733z"
                          fill="#f9f6f9"
                        ></path>
                        <path
                          d="m60.129 19.204c-3.577-6.196-2.429-13.812 2.311-18.711-3.819-.971-8.004-.518-11.687 1.608-7.491 4.325-10.058 13.904-5.733 21.396l8.71 15.086 5.443 1.503 9.592-5.924z"
                          fill="#cbe2ff"
                        ></path>
                        <path
                          d="m461.247 2.101c-7.491-4.325-17.071-1.758-21.396 5.733l-8.71 15.086v7.25l21.685 10.559 5.443-2.147 8.71-15.086c4.326-7.491 1.759-17.07-5.732-21.395z"
                          fill="#f9f6f9"
                        ></path>
                        <path
                          d="m444.276 30.647 8.71-15.086c2.963-5.132 8.391-7.95 13.925-7.827-1.327-2.262-3.23-4.227-5.664-5.632-7.491-4.325-17.071-1.758-21.396 5.733l-8.71 15.086v7.25l13.135 6.396z"
                          fill="#cbe2ff"
                        ></path>
                        <path
                          d="m367.326 133.451 1.467 5.059 16.483 14.958h6.665l20.74-35.923-27.129-15.662z"
                          fill="#f9f6f9"
                        ></path>
                        <path
                          d="m378.318 147.154 21.412-37.086-14.178-8.185-18.226 31.568 1.467 5.059z"
                          fill="#cbe2ff"
                        ></path>
                        <path
                          d="m99.319 117.545 20.74 35.923h4.025l20.589-16.803v-3.214l-18.226-31.568z"
                          fill="#f9f6f9"
                        ></path>
                        <path
                          d="m113.317 109.463-13.998 8.082 20.74 35.923h4.025l9.95-8.121z"
                          fill="#cbe2ff"
                        ></path>
                        <path
                          d="m383.741 477.692-11.497-23.286-4.91-1.091-35.627 21.29-.971 3.145 10.365 20.994c5.813 11.774 20.071 16.606 31.845 10.793 11.775-5.813 16.608-20.07 10.795-31.845z"
                          fill="#f9f6f9"
                        ></path>
                        <path
                          d="m358.88 482.479-9.193-18.619-17.981 10.745-.971 3.145 10.365 20.994c5.813 11.774 20.071 16.606 31.845 10.793 6.102-3.012 10.333-8.295 12.191-14.322-10.384 2.212-21.34-2.779-26.256-12.736z"
                          fill="#cbe2ff"
                        ></path>
                        <path
                          d="m139.756 454.406-11.497 23.286c-5.813 11.775-.98 26.032 10.794 31.845s26.032.981 31.845-10.793l10.365-20.993v-4.991l-36.833-19.96z"
                          fill="#f9f6f9"
                        ></path>
                        <path
                          d="m152.607 480.611 9.107-18.445-17.284-9.366-4.674 1.607-11.497 23.286c-5.813 11.775-.98 26.032 10.794 31.845 6.619 3.268 14.023 3.172 20.27.369-8.737-6.785-11.804-18.991-6.716-29.296z"
                          fill="#cbe2ff"
                        ></path>
                        <g>
                          <g>
                            <path
                              d="m256 492.504c-108.531 0-196.827-88.296-196.827-196.827s88.296-196.827 196.827-196.827 196.827 88.296 196.827 196.827-88.296 196.827-196.827 196.827z"
                              fill="#ff636e"
                            ></path>
                          </g>
                        </g>
                        <path
                          d="m107.977 295.677c0-100.269 75.367-183.26 172.425-195.315-7.998-.993-16.14-1.512-24.402-1.512-108.531 0-196.827 88.296-196.827 196.827s88.296 196.827 196.827 196.827c8.262 0 16.405-.518 24.402-1.512-97.058-12.055-172.425-95.046-172.425-195.315z"
                          fill="#ff4654"
                        ></path>
                        <circle
                          cx="256"
                          cy="295.677"
                          fill="#f9f6f9"
                          r="162.988"
                        ></circle>
                        <path
                          d="m141.816 295.677c0-81.58 60.248-149.35 138.586-161.161-7.962-1.201-16.11-1.827-24.402-1.827-89.872 0-162.989 73.116-162.989 162.989s73.116 162.988 162.989 162.988c8.292 0 16.44-.627 24.402-1.827-78.338-11.812-138.586-79.581-138.586-161.162z"
                          fill="#cbe2ff"
                        ></path>
                        <g>
                          <path
                            d="m255.994 157.018c-4.267 0-7.726-3.459-7.726-7.726v-15.572c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v15.572c0 4.267-3.459 7.726-7.726 7.726z"
                            fill="#9dc6fb"
                          ></path>
                        </g>
                        <g>
                          <path
                            d="m255.994 465.362c-4.267 0-7.726-3.459-7.726-7.726v-15.572c0-4.268 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v15.572c0 4.267-3.459 7.726-7.726 7.726z"
                            fill="#9dc6fb"
                          ></path>
                        </g>
                        <g>
                          <path
                            d="m176.11 172.767-7.786-13.486c-2.134-3.696-.867-8.421 2.828-10.554 3.695-2.134 8.421-.868 10.554 2.828l7.786 13.486c2.134 3.696.867 8.421-2.828 10.554s-8.421.868-10.554-2.828z"
                            fill="#9dc6fb"
                          ></path>
                        </g>
                        <g>
                          <path
                            d="m330.282 439.801-7.786-13.486c-2.134-3.695-.868-8.421 2.828-10.554 3.695-2.132 8.421-.868 10.554 2.828l7.786 13.486c2.134 3.695.868 8.42-2.828 10.554-3.696 2.133-8.421.867-10.554-2.828z"
                            fill="#9dc6fb"
                          ></path>
                        </g>
                        <g>
                          <path
                            d="m125.356 229.175-13.486-7.786c-3.695-2.134-4.962-6.859-2.828-10.554 2.133-3.696 6.859-4.961 10.554-2.828l13.486 7.786c3.695 2.134 4.962 6.859 2.828 10.554-2.131 3.695-6.856 4.962-10.554 2.828z"
                            fill="#9dc6fb"
                          ></path>
                        </g>
                        <g>
                          <path
                            d="m392.391 383.347-13.486-7.786c-3.695-2.134-4.962-6.859-2.828-10.554 2.133-3.696 6.859-4.961 10.554-2.828l13.486 7.786c3.695 2.134 4.962 6.859 2.828 10.554-2.132 3.695-6.857 4.962-10.554 2.828z"
                            fill="#9dc6fb"
                          ></path>
                        </g>
                        <g>
                          <path
                            d="m109.608 303.403h-15.573c-4.267 0-7.726-3.459-7.726-7.726 0-4.268 3.459-7.726 7.726-7.726h15.572c4.267 0 7.726 3.459 7.726 7.726.001 4.267-3.458 7.726-7.725 7.726z"
                            fill="#9dc6fb"
                          ></path>
                        </g>
                        <g>
                          <path
                            d="m417.952 303.403h-15.572c-4.267 0-7.726-3.459-7.726-7.726 0-4.268 3.459-7.726 7.726-7.726h15.572c4.267 0 7.726 3.459 7.726 7.726.001 4.267-3.459 7.726-7.726 7.726z"
                            fill="#9dc6fb"
                          ></path>
                        </g>
                        <g>
                          <path
                            d="m109.043 380.519c-2.134-3.695-.867-8.42 2.828-10.554l13.486-7.786c3.695-2.132 8.421-.868 10.554 2.828 2.134 3.695.867 8.42-2.828 10.554l-13.486 7.786c-3.697 2.134-8.421.867-10.554-2.828z"
                            fill="#9dc6fb"
                          ></path>
                        </g>
                        <g>
                          <path
                            d="m376.077 226.347c-2.134-3.695-.867-8.42 2.828-10.554l13.486-7.786c3.696-2.132 8.42-.868 10.554 2.828 2.134 3.695.867 8.42-2.828 10.554l-13.486 7.786c-3.696 2.134-8.421.867-10.554-2.828z"
                            fill="#9dc6fb"
                          ></path>
                        </g>
                        <g>
                          <path
                            d="m171.151 442.629c-3.696-2.134-4.962-6.859-2.828-10.554l7.786-13.486c2.134-3.696 6.859-4.961 10.554-2.828 3.696 2.134 4.962 6.859 2.828 10.554l-7.786 13.486c-2.133 3.695-6.857 4.961-10.554 2.828z"
                            fill="#9dc6fb"
                          ></path>
                        </g>
                        <g>
                          <path
                            d="m325.324 175.595c-3.695-2.133-4.962-6.859-2.828-10.554l7.786-13.486c2.134-3.696 6.859-4.963 10.554-2.828 3.695 2.133 4.962 6.859 2.828 10.554l-7.786 13.486c-2.134 3.695-6.859 4.962-10.554 2.828z"
                            fill="#9dc6fb"
                          ></path>
                        </g>
                        <g>
                          <path
                            d="m66.628 29.598c-44.177 25.505-59.367 82.195-33.861 126.371l160.232-92.51c-25.505-44.177-82.195-59.367-126.371-33.861z"
                            fill="#ff636e"
                          ></path>
                        </g>
                        <path
                          d="m72.555 26.458c-1.997.969-3.975 2.013-5.928 3.14-44.176 25.505-59.366 82.195-33.861 126.371l28.064-16.203c-18.236-37.648-12.684-81.547 11.725-113.308z"
                          fill="#ff4654"
                        ></path>
                        <g>
                          <path
                            d="m445.372 29.598c44.176 25.505 59.366 82.195 33.861 126.371l-160.233-92.51c25.506-44.177 82.196-59.367 126.372-33.861z"
                            fill="#ff636e"
                          ></path>
                        </g>
                        <path
                          d="m449.042 31.836c-1.201-.769-2.422-1.518-3.67-2.238-44.176-25.506-100.866-10.316-126.372 33.861l26.229 15.143c23.611-34.386 64.154-51.565 103.813-46.766z"
                          fill="#ff4654"
                        ></path>
                        <g>
                          <path
                            d="m281.033 0h-50.066c-4.628 0-8.38 3.752-8.38 8.38v17.078c0 4.628 3.752 8.38 8.38 8.38h50.066c4.628 0 8.38-3.751 8.38-8.38v-17.078c0-4.628-3.752-8.38-8.38-8.38z"
                            fill="#f9f6f9"
                          ></path>
                        </g>
                        <path
                          d="m248.761 25.458v-17.078c0-4.628 3.752-8.38 8.38-8.38h-26.175c-4.628 0-8.38 3.752-8.38 8.38v17.078c0 4.628 3.752 8.38 8.38 8.38h26.175c-4.628 0-8.38-3.751-8.38-8.38z"
                          fill="#cbe2ff"
                        ></path>
                        <g>
                          <path
                            d="m256 466.392c-94.132 0-170.715-76.583-170.715-170.715s76.582-170.714 170.715-170.714 170.715 76.582 170.715 170.714-76.583 170.715-170.715 170.715zm0-325.977c-85.612 0-155.262 69.65-155.262 155.262s69.65 155.263 155.262 155.263 155.262-69.651 155.262-155.263c0-85.611-69.651-155.262-155.262-155.262z"
                            fill="#ff7f87"
                          ></path>
                        </g>
                        <path
                          d="m256 175.303c-8.534 0-15.453 6.918-15.453 15.453v80.962l.596.973h28.968l1.341-.973v-80.962c0-8.534-6.918-15.453-15.452-15.453z"
                          fill="#ff636e"
                        ></path>
                        <path
                          d="m256 190.756c0-5.716 3.112-10.695 7.726-13.368-2.275-1.318-4.908-2.084-7.726-2.084-8.534 0-15.453 6.918-15.453 15.453v80.962l.596.973h15.453l-.596-.974z"
                          fill="#ff4654"
                        ></path>
                        <path
                          d="m256 321.452-23.876-12.748h-1.489l-32.526 56.333c-4.268 7.391-1.735 16.841 5.656 21.109 7.39 4.268 16.841 1.736 21.109-5.655l32.52-56.322z"
                          fill="#6e60b8"
                        ></path>
                        <path
                          d="m214.086 366.859 29.916-51.813-11.879-6.343h-1.489l-32.526 56.333c-4.268 7.391-1.735 16.841 5.656 21.109 3.698 2.135 7.911 2.568 11.734 1.542-4.513-5.835-5.329-14.045-1.412-20.828z"
                          fill="#6353b2"
                        ></path>
                        <path
                          d="m265.991 268.962c-9.225 5.341-15.452 15.31-15.452 26.716 0 11.405 6.226 21.374 15.452 26.716 10.815-4.058 18.534-14.501 18.534-26.716.001-12.216-7.718-22.658-18.534-26.716z"
                          fill="#cbe2ff"
                        ></path>
                        <path
                          d="m251.876 295.677c0-11.366 6.683-21.197 16.325-25.779-3.701-1.759-7.838-2.747-12.201-2.747-15.73 0-28.526 12.797-28.526 28.526s12.797 28.526 28.526 28.526c4.363 0 8.5-.988 12.201-2.747-9.642-4.581-16.325-14.413-16.325-25.779z"
                          fill="#9dc6fb"
                        ></path>
                        <g>
                          <g>
                            <path
                              d="m19.607 163.567c-2.134-3.696-.868-8.421 2.828-10.554l173.17-99.98c3.696-2.135 8.42-.868 10.554 2.828s.868 8.421-2.828 10.554l-173.17 99.98c-3.695 2.134-8.421.868-10.554-2.828z"
                              fill="#ff7f87"
                            ></path>
                          </g>
                        </g>
                        <g>
                          <g>
                            <path
                              d="m481.838 166.395-173.169-99.98c-3.696-2.133-4.962-6.859-2.828-10.554 2.133-3.695 6.858-4.963 10.554-2.828l173.17 99.98c3.696 2.133 4.962 6.859 2.828 10.554-2.134 3.696-6.859 4.962-10.555 2.828z"
                              fill="#ff7f87"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <span class="fw-bold text-center mt-3"
                      >${showCorrectProdInDom.course_motto_time}ساعت آموزش پروژه محور</span
                    >
                    <span class="mt-2 px-sm-1 px-md-6 text-center"
                      >${showCorrectProdInDom.course_motto_desc_1}
                      
                    </span>
                  </div>
                  <div
                    class="col-lg-6 product-motto mt-4 second-product-motto d-flex flex-column align-items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="Layer_1"
                      class="motto-svg"
                      viewBox="0 0 512 512"
                    >
                      <g>
                        <path
                          d="m490.63 28.132h-469.26c-11.803 0-21.37 9.568-21.37 21.37v281.75c0 11.802 9.567 21.37 21.37 21.37h469.26c11.802 0 21.37-9.567 21.37-21.37v-281.75c0-11.802-9.567-21.37-21.37-21.37z"
                          fill="#f9f6f9"
                        ></path>
                        <path
                          d="m463.21 115.178c-20.031-2.331-35.924-18.231-38.256-38.256-.502-4.307-4.097-7.583-8.433-7.583h-321.041c-4.337 0-7.932 3.275-8.434 7.583-2.331 20.03-18.23 35.924-38.256 38.256-4.307.502-7.583 4.097-7.583 8.434v133.531c0 4.337 3.275 7.932 7.583 8.434 2.453.286 4.843.778 7.155 1.453l9.644-2.836 116.915 37.773 7.905 9.449h226.111c4.337 0 7.932-3.275 8.434-7.583 2.331-20.031 18.231-35.924 38.256-38.256 4.307-.501 7.583-4.097 7.583-8.433v-133.533c0-4.337-3.275-7.932-7.583-8.433z"
                          fill="#cbe2ff"
                        ></path>
                        <path
                          d="m43.406 331.252v-281.75c0-11.802 9.567-21.37 21.37-21.37h-43.406c-11.803 0-21.37 9.568-21.37 21.37v281.75c0 11.802 9.567 21.37 21.37 21.37h43.406c-11.802 0-21.37-9.568-21.37-21.37z"
                          fill="#cbe2ff"
                        ></path>
                        <g>
                          <path
                            d="m92.196 265.576c-4.307-.501-7.583-4.097-7.583-8.433v-133.532c0-4.337 3.275-7.932 7.583-8.434 20.031-2.331 35.924-18.231 38.256-38.256.501-4.307 4.097-7.583 8.433-7.583h-43.405c-4.337 0-7.932 3.275-8.434 7.583-2.331 20.03-18.23 35.924-38.256 38.256-4.307.502-7.583 4.097-7.583 8.434v133.531c0 4.337 3.275 7.932 7.583 8.434 2.453.286 4.843.778 7.155 1.453l9.644-2.836 56.101 18.125c-7.006-9.091-17.509-15.347-29.494-16.742z"
                            fill="#9dc6fb"
                          ></path>
                        </g>
                        <path
                          d="m94.859 364.978h-24.988l-4.282 1.735v111.89c0 4.113 4.51 6.633 8.013 4.477l21.257-13.081z"
                          fill="#ff4654"
                        ></path>
                        <path
                          d="m162.93 364.978h-26.169v105.021l21.257 13.081c3.503 2.156 8.013-.365 8.013-4.477v-111.89z"
                          fill="#ff636e"
                        ></path>
                        <path
                          d="m295.41 106.387h-78.82c-4.216 0-7.634 3.418-7.634 7.634v15.636c0 4.216 3.418 7.634 7.634 7.634h78.821c4.216 0 7.634-3.418 7.634-7.634v-15.636c-.001-4.216-3.419-7.634-7.635-7.634z"
                          fill="#ff636e"
                        ></path>
                        <path
                          d="m250.506 129.657v-15.636c0-4.216 3.418-7.634 7.634-7.634h-41.55c-4.216 0-7.634 3.418-7.634 7.634v15.636c0 4.216 3.418 7.634 7.634 7.634h41.55c-4.216 0-7.634-3.418-7.634-7.634z"
                          fill="#ff4654"
                        ></path>
                        <g>
                          <path
                            d="m303.045 181.877h-94.089c-4.267 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h94.089c4.267 0 7.726 3.459 7.726 7.726s-3.459 7.726-7.726 7.726z"
                            fill="#9dc6fb"
                          ></path>
                        </g>
                        <g>
                          <path
                            d="m390.459 217.589h-268.918c-4.267 0-7.726-3.459-7.726-7.726 0-4.268 3.459-7.726 7.726-7.726h268.918c4.267 0 7.726 3.459 7.726 7.726s-3.459 7.726-7.726 7.726z"
                            fill="#9dc6fb"
                          ></path>
                        </g>
                        <g>
                          <path
                            d="m390.459 247.636h-268.918c-4.267 0-7.726-3.459-7.726-7.726 0-4.268 3.459-7.726 7.726-7.726h268.918c4.267 0 7.726 3.459 7.726 7.726 0 4.268-3.459 7.726-7.726 7.726z"
                            fill="#9dc6fb"
                          ></path>
                        </g>
                        <g>
                          <path
                            d="m354.51 277.684h-191.408c-4.267 0-7.726-3.459-7.726-7.726 0-4.268 3.459-7.726 7.726-7.726h191.408c4.267 0 7.726 3.459 7.726 7.726s-3.459 7.726-7.726 7.726z"
                            fill="#9dc6fb"
                          ></path>
                        </g>
                        <path
                          d="m134.515 380.946h-38.503l-1.818 2.01v87.452l18.861-11.606c1.69-1.04 3.821-1.04 5.511 0l18.861 11.606v-87.452z"
                          fill="#ff4654"
                        ></path>
                        <path
                          d="m115.867 380.946h-19.855l-1.818 2.01v87.452l18.861-11.606c.862-.53 1.839-.787 2.813-.776v-77.08z"
                          fill="#e61e2b"
                        ></path>
                        <circle
                          cx="115.81"
                          cy="311.548"
                          fill="#ffd064"
                          r="74.603"
                        ></circle>
                        <path
                          d="m74.173 311.547c0-35.535 24.853-65.247 58.12-72.753-5.305-1.197-10.816-1.85-16.483-1.85-41.202 0-74.603 33.401-74.603 74.603s33.401 74.603 74.603 74.603c5.666 0 11.178-.653 16.483-1.85-33.267-7.506-58.12-37.217-58.12-72.753z"
                          fill="#ffc250"
                        ></path>
                        <path
                          d="m115.809 267.85c-24.094 0-43.697 19.603-43.697 43.698 0 24.094 19.603 43.697 43.697 43.697 24.095 0 43.698-19.603 43.698-43.697 0-24.095-19.602-43.698-43.698-43.698z"
                          fill="#ffc250"
                        ></path>
                        <path
                          d="m105.078 311.548c0-18.265 11.268-33.94 27.214-40.46-5.09-2.081-10.653-3.238-16.483-3.238-24.094 0-43.697 19.603-43.697 43.698 0 24.094 19.603 43.697 43.697 43.697 5.83 0 11.393-1.157 16.483-3.238-15.946-6.52-27.214-22.195-27.214-40.459z"
                          fill="#ebb044"
                        ></path>
                      </g>
                    </svg>
                    <span class="fw-bold text-center mt-3">
             ${showCorrectProdInDom.fourth_motto_course}
                   </span>
                    <span class="mt-2 px-sm-1 px-md-6 text-center"
                      >
${showCorrectProdInDom.fourth_motto_course_desc}
                      </span>
                  </div>
                  <div
                    class="col-lg-6 product-motto mt-4 third-product-motto d-flex flex-column align-items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="Layer_1"
                      class="motto-svg"
                      viewBox="0 0 512 512"
                    >
                      <g>
                        <g clip-rule="evenodd" fill-rule="evenodd">
                          <path
                            d="m24.419 53.729h463.162c12.715 0 23.094 10.381 23.094 23.066v286.259c0 12.685-10.379 23.066-23.094 23.066h-463.162c-12.715 0-23.094-10.381-23.094-23.066v-286.259c0-12.685 10.379-23.066 23.094-23.066z"
                            fill="#cbe2ff"
                          ></path>
                          <path
                            d="m457.491 53.729h30.09c12.715 0 23.094 10.381 23.094 23.066v286.259c0 12.685-10.379 23.066-23.094 23.066h-30.09c12.684 0 23.094-10.381 23.094-23.066v-286.259c0-12.685-10.382-23.066-23.094-23.066z"
                            fill="#9dc6fb"
                          ></path>
                          <path
                            d="m209.798 386.12h92.432l10.439 83.645h-113.338z"
                            fill="#d5c6e4"
                          ></path>
                          <path
                            d="m272.112 386.12h30.118l10.439 83.645h-30.091z"
                            fill="#c6b4da"
                          ></path>
                          <path
                            d="m192.591 78.928h112.114c17.321 0 31.484 14.163 31.484 31.484v86.916c0 17.321-14.163 31.513-31.484 31.513h-112.114c-17.32 0-31.485-14.192-31.485-31.513v-86.916c-.001-17.321 14.164-31.484 31.485-31.484z"
                            fill="#365e7d"
                          ></path>
                          <path
                            d="m274.614 78.928h30.091c17.321 0 31.484 14.163 31.484 31.484v86.916c0 17.321-14.163 31.513-31.484 31.513h-30.091c17.321 0 31.483-14.192 31.483-31.513v-86.916c.001-17.321-14.162-31.484-31.483-31.484z"
                            fill="#2b4d66"
                          ></path>
                        </g>
                        <path
                          d="m369.608 159.643c-4.152 0-7.51-3.385-7.51-7.537s3.358-7.537 7.51-7.537h.256v-54.407c0-4.181 3.385-7.537 7.537-7.537s7.508 3.356 7.508 7.537v54.407h.256c4.182 0 7.536 3.385 7.536 7.537s-3.354 7.537-7.536 7.537z"
                          fill="#3e6dab"
                        ></path>
                        <path
                          clip-rule="evenodd"
                          d="m94.127 82.284c-3.696-1.848-3.981-4.749 0-6.741l147.78-73.89c4.438-2.218 9.102-2.189 13.482 0l147.779 73.89c4.238 2.104 4.125 4.693 0 6.741l-147.779 73.89c-4.295 2.133-8.816 2.332-13.482 0z"
                          fill="#4a80aa"
                          fill-rule="evenodd"
                        ></path>
                        <path
                          clip-rule="evenodd"
                          d="m233.602 5.806 8.305-4.153c4.438-2.218 9.102-2.189 13.482 0l147.779 73.89c4.238 2.104 4.125 4.693 0 6.741l-147.779 73.89c-4.295 2.133-8.816 2.332-13.482 0l-8.305-4.153 139.476-69.737c4.094-2.048 4.209-4.636 0-6.741z"
                          fill="#407093"
                          fill-rule="evenodd"
                        ></path>
                        <path
                          d="m61.904 256.115 35.438 20.478c.796.427 1.479 1.081 1.963 1.934 1.449 2.503.596 5.717-1.906 7.168l-35.183 20.307c-.824.568-1.848.882-2.929.882-2.9 0-5.262-2.332-5.262-5.233v-40.983h.029c-.029-.91.197-1.793.682-2.645 1.45-2.505 4.664-3.358 7.168-1.908z"
                          fill="#dd636e"
                        ></path>
                        <path
                          d="m161.105 288.766c-4.18 0-7.536-3.384-7.536-7.537s3.356-7.509 7.536-7.509h296.613c4.152 0 7.536 3.356 7.536 7.509 0 4.152-3.384 7.537-7.536 7.537z"
                          fill="#78c2a4"
                        ></path>
                        <path
                          d="m241.11 268.345c0-4.152 3.386-7.508 7.537-7.508 4.153 0 7.537 3.356 7.537 7.508v25.768c0 4.153-3.384 7.537-7.537 7.537-4.151 0-7.537-3.384-7.537-7.537z"
                          fill="#dd636e"
                        ></path>
                        <path
                          clip-rule="evenodd"
                          d="m510.675 344.88h-509.35v18.174c0 12.685 10.379 23.066 23.094 23.066h185.379 92.433 185.351c12.715 0 23.094-10.381 23.094-23.066v-18.174zm-131.056 167.12h-247.238c-3.3 0-6.058-2.958-5.546-6.285 3.044-20.278 20.647-35.95 41.751-35.95h174.828c21.104 0 38.707 15.671 41.779 35.95.484 3.327-2.274 6.285-5.574 6.285z"
                          fill="#e2d8ec"
                          fill-rule="evenodd"
                        ></path>
                        <path
                          clip-rule="evenodd"
                          d="m510.675 344.88h-30.09v18.174c0 12.685-10.41 23.066-23.094 23.066h30.09c12.715 0 23.094-10.381 23.094-23.066zm-131.056 167.12h-30.091c3.3 0 6.058-2.958 5.546-6.285-3.043-20.278-20.648-35.95-41.75-35.95h30.09c21.104 0 38.707 15.671 41.779 35.95.484 3.327-2.274 6.285-5.574 6.285z"
                          fill="#d5c6e4"
                          fill-rule="evenodd"
                        ></path>
                      </g>
                    </svg>
                    <span class="fw-bold text-center mt-3">
${showCorrectProdInDom.third_motto_course}
                    </span>
                    <span class="mt-2 px-sm-1 px-md-6 text-center"
                      >
                      ${showCorrectProdInDom.third_motto_course_desc}
                    </span>
                  </div>
                  <div
                    class="col-lg-6 product-motto mt-4 fourth-product-motto d-flex flex-column align-items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="Capa_1"
                      class="motto-svg"
                      viewBox="0 0 512 512"
                    >
                      <g>
                        <g>
                          <g>
                            <path
                              d="m3.806 80.654c0-44.939 36.754-81.294 81.842-80.645 43.675.628 79.188 36.446 79.464 80.124.155 24.461-10.583 46.414-27.645 61.305-1.801 1.571-1.541 4.439.516 5.656l15.197 8.992c2.457 1.454 1.426 5.22-1.429 5.22l-68.818-.017c-43.839-.815-79.127-36.602-79.127-80.635z"
                              fill="#7acaa6"
                            ></path>
                          </g>
                        </g>
                        <path
                          d="m153.18 156.086-15.198-8.992c-2.046-1.21-2.33-4.074-.539-5.636 17.257-15.049 28.051-37.322 27.66-62.108-.677-42.873-35.377-78.066-78.238-79.315-6.078-.177-12.01.32-17.727 1.419 37.047 7.102 65.281 39.757 65.527 78.678.119 18.849-6.23 36.209-16.956 49.996-6.477 8.325-4.372 20.397 4.706 25.769l.318.188c2.43 1.438 1.444 5.132-1.339 5.212l30.356.007c2.855.002 3.887-3.765 1.43-5.218z"
                          fill="#57be92"
                        ></path>
                        <g>
                          <g>
                            <path
                              d="m396.792 292.755h-182.966c-45.698 0-70.706-53.256-41.519-88.42l1.623-1.956c12.858-15.491 19.896-34.99 19.896-55.122v-35.283c.001-61.842 50.133-111.974 111.975-111.974 61.842 0 111.974 50.132 111.974 111.974v36.474c0 20.343 7.186 40.032 20.29 55.593 29.551 35.092 4.605 88.714-41.273 88.714z"
                              fill="#c59191"
                            ></path>
                            <path
                              d="m492.97 383.43v120.96h-375.32v-120.05c0-27.18 16.29-51.71 41.33-62.25l60.59-26.34 20.4-8.87c15.48-6.73 25.49-22 25.49-38.88v-7.83h79.69v7.43c0 16.95 10.11 32.28 25.7 38.96l81.95 35.13c24.42 10.82 40.17 35.02 40.17 61.74z"
                              fill="#fff"
                            ></path>
                            <path
                              d="m219.565 324.59c20.679 6.179 51.116 12.769 88.217 12.12 34.811-.608 63.387-7.377 83.271-13.728l9.88-23.527-30.086-12.895c-15.586-6.681-25.692-22.006-25.692-38.964v-7.424h-79.69v7.828c0 16.878-10.012 32.147-25.489 38.877l-24.368 10.595z"
                              fill="#ffcebf"
                            ></path>
                            <g fill="#8795de">
                              <path
                                d="m452.796 321.685-61.732-26.459-.011.001v209.161h101.918v-120.957c0-26.717-15.749-50.922-40.175-61.746z"
                              ></path>
                              <path
                                d="m219.57 295.75v208.64h-101.92v-120.05c0-27.18 16.29-51.71 41.33-62.25z"
                              ></path>
                            </g>
                          </g>
                          <g>
                            <path
                              d="m332.933 283.912c9.168 0 17.904-1.841 25.867-5.163-8.542-7.885-13.646-19.105-13.646-31.152v-7.424h-79.69v7.827c0 6.097-1.313 11.982-3.712 17.332 12.067 11.503 28.392 18.579 46.379 18.579h24.802z"
                              fill="#ffb09e"
                            ></path>
                            <path
                              d="m384.957 120.293v65.925c0 37.14-30.108 67.247-67.247 67.247h-24.801c-37.14 0-67.247-30.108-67.247-67.247v-65.925c0-24.161 19.586-43.748 43.748-43.748h71.8c24.161.001 43.747 19.587 43.747 43.748z"
                              fill="#ffcebf"
                            ></path>
                            <path
                              d="m384.957 154.593c-.03.091-.067.179-.094.272-2.431 8.395-8.811 24.253-24.229 36.142-7.179 5.537-15.368 9.537-24.338 11.891-4.066 1.067-6.498 5.228-5.431 9.294.898 3.419 3.981 5.682 7.358 5.682.639 0 1.289-.081 1.937-.251 10.952-2.874 20.968-7.773 29.771-14.56 6.079-4.688 10.999-9.866 14.982-15.072.015-.59.045-1.177.045-1.771v-31.627z"
                              fill="#7a6d79"
                            ></path>
                            <path
                              d="m327.949 223.939h-17.837c-8.119 0-14.701-6.582-14.701-14.701 0-8.119 6.582-14.701 14.701-14.701h17.837c8.119 0 14.701 6.582 14.701 14.701-.001 8.12-6.582 14.701-14.701 14.701z"
                              fill="#685e68"
                            ></path>
                            <g>
                              <path
                                d="m321.201 59.097c1.708-21.54 22.33-35.835 42.067-43.239 32.649 19.563 54.507 55.284 54.507 96.115v7.698c-1.805.379-3.601.711-5.377.976-10.873 1.624-20.132.921-26.458 0-40.763-5.43-66.802-35.535-64.739-61.55z"
                                fill="#b98080"
                              ></path>
                              <path
                                d="m305.801 0c25.288 0 48.616 8.386 67.361 22.525-9.351 16.271-30.823 48.441-71.086 72.257-29.89 17.681-58.074 23.622-75.43 25.865h-32.818v-8.674c-.001-61.841 50.131-111.973 111.973-111.973z"
                                fill="#c59191"
                              ></path>
                            </g>
                          </g>
                        </g>
                        <path
                          d="m430.971 504.388h-243.654l-13.439-126.775c-.953-8.992 6.096-16.828 15.138-16.828h240.257c9.042 0 16.091 7.836 15.138 16.828z"
                          fill="#efedef"
                        ></path>
                        <path
                          d="m429.272 360.785h-30.446c9.042 0 16.091 7.836 15.138 16.828l-13.439 126.776h30.446l13.439-126.776c.954-8.992-6.095-16.828-15.138-16.828z"
                          fill="#e5e1e5"
                        ></path>
                        <g>
                          <path
                            d="m504.5 512h-497c-4.143 0-7.5-3.358-7.5-7.5s3.357-7.5 7.5-7.5h497c4.143 0 7.5 3.358 7.5 7.5s-3.357 7.5-7.5 7.5z"
                            fill="#c9bfc8"
                          ></path>
                        </g>
                        <circle
                          cx="309.144"
                          cy="432.587"
                          fill="#c9bfc8"
                          r="21.312"
                        ></circle>
                        <g fill="#fff">
                          <circle
                            cx="54.014"
                            cy="80.653"
                            r="7.611"
                          ></circle>
                          <circle cx="84.46" cy="80.653" r="7.611"></circle>
                          <circle
                            cx="114.906"
                            cy="80.653"
                            r="7.611"
                          ></circle>
                        </g>
                      </g>
                    </svg>
                    <span class="fw-bold text-center mt-3">
${showCorrectProdInDom.second_motto_course}
                    </span>
                    <span class="mt-2 px-sm-1 px-md-6 text-center">
${showCorrectProdInDom.second_motto_course_desc}
                    </span>
                  </div>

                  <div class="col-12 w-100 mt-sm-6 mt-md-8 faq" dir="rtl">
                    <div class="faq-wrapper">
                      <div
                        class="accordion accordion-flush faq-accordion"
                        id="accordionFlushExample"
                      >
                        <div class="accordion-item">
                          <h2 class="accordion-header">
                            <button
                              class="accordion-button collapsed text-end fw-bold"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseOne"
                              aria-expanded="false"
                              aria-controls="flush-collapseOne"
                            >
                              ${showCorrectProdInDom.faq_1}
                            </button>
                          </h2>
                          <div
                            id="flush-collapseOne"
                            class="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div class="accordion-body text-end">
                            ${showCorrectProdInDom.faq_res_1}
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header">
                            <button
                              class="accordion-button collapsed text-end fw-bold"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseTwo"
                              aria-expanded="false"
                              aria-controls="flush-collapseTwo"
                            >
                          ${showCorrectProdInDom.faq_2}
                            </button>
                          </h2>
                          <div
                            id="flush-collapseTwo"
                            class="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div class="accordion-body text-end">
                       ${showCorrectProdInDom.faq_res_2}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- the explantion of product -->
            <!-- sessions and all part of product -->
            <div
              class="tab-pane fade "
              id="profile-tab-pane"
              role="tabpanel"
              aria-labelledby="profile-tab"
              tabindex="0"
            >
              <div class="container">
                <div class="row">
                  <div class="col-12 intro-session-prod w-100">
                    <div
                      class="accordion intro-session-prod-accordion"
                      id="accordionPanelsStayOpenExample"
                    >
                      <div class="accordion-item">
                        <h2 class="accordion-header">
                          <button
                            class="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#prod-accordion-one"
                            aria-expanded="true"
                            aria-controls="panelsStayOpen-collapseOne"
                          >
                            <div
                              class="prod-session-level-explain d-flex align-items-center justify-content-around"
                            >
                              <div class="session-cover">
                                <img
                                  src="assest/img/product-session-logo/google-analytics.jpg"
                                  class="img-fluid rounded-circle"
                                  style="width: 80px; height: 80px"
                                  alt=""
                                />
                              </div>
                              <div
                                class="session-description d-flex flex-column w-100 justify-content-center me-3 mt-4"
                              >
                                <p
                                  class="session-topic text-dark fw-bold text-end"
                                >
                                 ${showCorrectProdInDom.course_sec_title_1}
                                </p>
                                <p
                                  class="session-topic text-secondary text-end"
                                  style="font-size: 14px"
                                >
                                ${showCorrectProdInDom.course_sec_title_desc_1}
                                </p>
                              </div>
                            </div>
                          </button>
                        </h2>
                        <div
                          id="prod-accordion-one"
                          class="accordion-collapse collapse show"
                        >
                          <div class="accordion-body">
                            <ul class="session-list">
                              <li
                                class="d-flex justify-content-between border-bottom py-2"
                              >
                                <a href="#">
${showCorrectProdInDom.session_begginer_1}
                                </a>
                                <a href="#"
                                  ><i class="fa fa-lock"></i> نقدی</a
                                >
                              </li>
                              <li
                                class="d-flex justify-content-between border-bottom py-2"
                              >
                                <a href="#"
                                  >
                                  ${showCorrectProdInDom.session_begginer_2}</a
                                >
                                <a href="#"
                                  ><i class="fa fa-lock"></i> نقدی</a
                                >
                              </li>
                              <li
                                class="d-flex justify-content-between border-bottom py-2">
                                <a href="#">
                                    ${showCorrectProdInDom.session_begginer_3}
                              </a>
                                <a href="#"
                                  ><i class="fa fa-lock"></i> نقدی</a
                                >
                              </li>
                              <li
                                class="d-flex justify-content-between border-bottom py-2"
                              >
                                <a href="#">
                                ${showCorrectProdInDom.session_begginer_4}
                                </a>
                                <a href="#"
                                  ><i class="fa fa-lock"></i> نقدی</a
                                >
                              </li>
                              <li
                                class="d-flex justify-content-between border-bottom py-2">
                                <a href="#">
                              ${showCorrectProdInDom.session_begginer_5}
                                  </a>
                                <a href="#"
                                  ><i class="fa fa-lock"></i> نقدی</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#prod-accordion-two"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseTwo"
                          >
                            <div
                              class="prod-session-level-explain d-flex align-items-center justify-content-around"
                            >
                              <div class="session-cover">
                                <img
                                  src="assest/img/product-session-logo/google-analytics.jpg"
                                  class="img-fluid rounded-circle"
                                  style="width: 80px; height: 80px"
                                  alt=""
                                />
                              </div>
                              <div
                                class="session-description d-flex flex-column w-100 justify-content-center me-3 mt-4"
                              >
                                <p
                                  class="session-topic text-dark fw-bold text-end"
                                >
                                  ${showCorrectProdInDom.course_sec_title_2}
                                </p>
                                <p
                                  class="session-topic text-secondary text-end"
                                  style="font-size: 14px"
                                >
                                 ${showCorrectProdInDom.course_sec_title_desc_2}
                                </p>
                              </div>
                            </div>
                          </button>
                        </h2>
                        <div
                          id="prod-accordion-two"
                          class="accordion-collapse collapse"
                        >
                          <div class="accordion-body">
                            <ul class="session-list">
                              <li
                                class="d-flex justify-content-between border-bottom py-2"
                              >
                                <a href="#">
                            ${showCorrectProdInDom.session_mid_1}</a>
                                <a href="#"
                                  ><i class="fa fa-lock"></i> نقدی</a
                                >
                              </li>
                              <li
                                class="d-flex justify-content-between border-bottom py-2"
                              >
                                <a href="#"
                                  >
                                      ${showCorrectProdInDom.session_mid_2}
                                  </a
                                >
                                <a href="#"
                                  ><i class="fa fa-lock"></i> نقدی</a
                                >
                              </li>
                              <li
                                class="d-flex justify-content-between border-bottom py-2"
                              >
                                <a href="#"
                                  >
                                  ${showCorrectProdInDom.session_mid_3}</a
                                >
                                <a href="#"
                                  ><i class="fa fa-lock"></i> نقدی</a
                                >
                              </li>
                              <li
                                class="d-flex justify-content-between border-bottom py-2"
                              >
                                <a href="#">
                                ${showCorrectProdInDom.session_mid_4}</a
                                >
                                <a href="#"
                                  ><i class="fa fa-lock"></i> نقدی</a
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#prod-accordion-three"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseThree"
                          >
                            <div
                              class="prod-session-level-explain d-flex align-items-center justify-content-around"
                            >
                              <div class="session-cover">
                                <img
                                  src="assest/img/product-session-logo/google-analytics.jpg"
                                  class="img-fluid rounded-circle"
                                  style="width: 80px; height: 80px"
                                  alt=""
                                />
                              </div>
                              <div
                                class="session-description d-flex flex-column w-100 justify-content-center me-3 mt-4"
                              >
                                <p
                                  class="session-topic text-dark fw-bold text-end"
                                >
                                ${showCorrectProdInDom.course_sec_title_3}
                                </p>
                                <p
                                  class="session-topic text-secondary text-end"
                                  style="font-size: 14px"
                                >
                                 ${showCorrectProdInDom.course_sec_title_desc_3}
                                </p>
                              </div>
                            </div>
                          </button>
                        </h2>
                        <div
                          id="prod-accordion-three"
                          class="accordion-collapse collapse"
                        >
                          <div class="accordion-body">
                            <ul class="session-list">
                              <li
                                class="d-flex justify-content-between border-bottom py-2"
                              >
                                <a href="#">
                                  ${showCorrectProdInDom.session_pro_1}</a
                                >
                                <a href="#"
                                  ><i class="fa fa-lock"></i> نقدی</a
                                >
                              </li>
                              <li
                                class="d-flex justify-content-between border-bottom py-2"
                              >
                                <a href="#">
                                      ${showCorrectProdInDom.session_pro_2}
                                </a>
                                <a href="#"
                                  ><i class="fa fa-lock"></i> نقدی</a
                                >
                              </li>
                              <li
                                class="d-flex justify-content-between border-bottom py-2"
                              >
                                <a href="#"
                                  >
                                      ${showCorrectProdInDom.session_pro_3}
                                    </a>
                                <a href="#"
                                  ><i class="fa fa-lock"></i> نقدی</a
                                >
                              </li>
                              <li
                                class="d-flex justify-content-between border-bottom py-2"
                              >
                                <a href="#">
                                ${showCorrectProdInDom.session_pro_4}</a
                                >
                                <a href="#"
                                  ><i class="fa fa-lock"></i> نقدی</a
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- sessions and all part of product -->
            <!-- comment section of product  -->
            <div
              class="tab-pane fade "
              id="contact-tab-pane"
              role="tabpanel"
              aria-labelledby="contact-tab"
              tabindex="0"
            >
              <div class="container">
                <div class="row">
                  <div class="col-11 comment-wrapper bg-light mb-4 ms-6">
                    <form class="comment-form mb-3">
                      <div class="user-info w-100 mt-3 me-4 pb-3">
                        <span class="userName-info fw-bold"
                          >علیرضا نقویان
                          <span class="badge text-bg-secondary date-badge"
                            >۱۱ خرداد ۱۴۰۲</span
                          >
                        </span>
                      </div>
                      <div class="user-comment-content w-100">
                        <p
                          class="px-4 text-end"
                          style="overflow-wrap: break-word; font-size: 15px"
                        >
                          استاد بازم یه سوال دیگه ببخشیدا واقعا ممنون میشم
                          اینم جواب بدید؛ راستش توی این سایت از همه به علم
                          شما اعتماد دارم واسه همین همه سوالاتم رو واسه شما
                          نگه داشتم 😁. به نظرتون منی که css, html , jsرو
                          تقریبا تموم کردم و الان فقط دارم تمرین می کنم و
                          چیزهای باقی مونده رو تموم می کنم. بعد این که کاملا
                          توی این 3 تا حرفه ای شدم برای سریع تر رسیدن به
                          درآمد(منظورم از سریع یعنی در مدت زمان کم تر) به
                          نظرتون وارد vue بشم یا react چون دیدم که vue
                          دوازده ساعته دورش ولی react نود ساعته . (هدف من
                          فعلا سریعتر رسیدن به درآمده)
                        </p>
                      </div>
                      <div
                        class="btn-answer-wrapper d-flex justify-content-end ms-4"
                      >
                        <button
                          class="comment-answer text-white btn-dark btn rounded-0 bg-dark px-3 py-1"
                        >
                          پاسخ
                        </button>
                      </div>
                      <div class="main-answer mx-3">
                        <div
                          class="answer-box-info mt-3 d-flex justify-content-between"
                        >
                          <div class="userName-answer me-3">
                            <p class="text-dark mt-4">
                              پاسخ به
                              <span class="userName-purpose fw-bold"
                                >علیرضا نقویان</span
                              >
                            </p>
                          </div>
                          <div
                            class="cancel-answer-btn-wrapper d-flex justify-content-end ms-4 py-2"
                          >
                            <button
                              class="cancel-answer-btn text-white btn-danger btn rounded-0 bg-danger px-sm-1 px-md-3 py-1"
                            >
                              لغو پاسخ
                            </button>
                          </div>
                        </div>
                        <div
                          class="answer-content w-100 mt-2 d-flex flex-column"
                        >
                          <p class="my-approach me-3">دیدگاه شما *</p>
                          <textarea
                            class="align-self-start me-sm-3 me-md-6 w-75 mb-3 rounded-0"
                            style="height: 218px"
                            id=""
                            cols="30"
                            rows="10"
                          ></textarea>
                        </div>
                        <button
                          class="sub-answer-btn text-white btn my-2 px-3 rounded-0 me-sm-3 me-md-6"
                          type="submit"
                        >
                          ثبت
                        </button>
                      </div>
                    </form>
                  </div>
                  <div
                    class="col-10 me-1 p-3 comment-wrapper asnwer-comment-wrapper bg-light"
                  >
                    <form class="comment-form">
                      <div class="user-info w-100 mt-3 me-4 pb-3">
                        <span class="userName-info fw-bold"
                          >مدرس دوره
                          <span class="badge text-bg-secondary date-badge"
                            >۱۲ خرداد ۱۴۰۲</span
                          >
                        </span>
                      </div>
                      <div class="user-comment-content w-100">
                        <p
                          class="px-4 text-end"
                          style="overflow-wrap: break-word; font-size: 15px"
                        >
                          عزیزین. لطف دارین. این 2 سوالی که پرسیدین واسه
                          خیلی از دانشجوهای عزیز پیش میاد و سوالای پرتکرار
                          هستن. واسه این که بصورت تک تک پاسخ داده نشه، تو
                          چنل Vip به هر دو سوال در قالب پادکست پاسخ دادم. از
                          طریق پادکست های موجود تو چنل Vip میتونین به پاسخ
                          سوالتون برسین. بعد اگه باز ابهام یا سوالی بود
                          درخدمتم.
                        </p>
                      </div>
                      <div
                        class="btn-answer-wrapper d-flex justify-content-end ms-4"
                      >
                        <button
                          class="comment-answer text-white btn-dark btn rounded-0 bg-dark px-3 py-1"
                        >
                          پاسخ
                        </button>
                      </div>
                      <div class="main-answer mx-3">
                        <div
                          class="answer-box-info mt-3 d-flex justify-content-between"
                        >
                          <div class="userName-answer me-3">
                            <p class="text-dark mt-4">
                              پاسخ به
                              <span class="userName-purpose fw-bold"
                                >مدرس دوره</span
                              >
                            </p>
                          </div>
                          <div
                            class="cancel-answer-btn-wrapper d-flex justify-content-end ms-4 py-2"
                          >
                            <button
                              class="cancel-answer-btn text-white btn-danger btn rounded-0 bg-danger px-sm-1 px-md-3 py-1"
                            >
                              لغو پاسخ
                            </button>
                          </div>
                        </div>
                        <div
                          class="answer-content w-100 mt-2 d-flex flex-column"
                        >
                          <p class="my-approach me-3">دیدگاه شما *</p>
                          <textarea
                            class="align-self-start me-sm-3 me-md-6 w-75 mb-3 rounded-0"
                            style="height: 218px"
                            id=""
                            cols="30"
                            rows="10"
                          ></textarea>
                        </div>
                        <button
                          class="sub-answer-btn text-white btn my-2 px-3 rounded-0 me-sm-3 me-md-6"
                          type="submit"
                        >
                          ثبت
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <!-- comment section of product  -->
          </div>
        </div>
      </div>
    </div>
  </section>
  `
  );
}
// product slider
var swiper = new Swiper(".relateSwiper", {
  grabCursor: true,
  // centeredSlides: true,
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

    769: {
      slidesPerView: 2,
      spaceBetween: 1,
    },
    910: {
      slidesPerView: 3,
      spaceBetween: 3,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 4,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 1,
    },
  },
});
function isProductInBasket(productId) {
  return basketSet.has(productId);
}
let addToBasketBtn = $.querySelectorAll(".add-to-cart-btn");
addToBasketBtn.forEach((btn) => {
  btn.addEventListener("click", (clickEvent) => {
    clickEvent.preventDefault();
    let getId = parseInt(clickEvent.target.getAttribute("aria-label"));
    PostToBasket(clickEvent.target);
  });
});
let PostToBasket = async (targetBtn) => {
  try {
    let productId = targetBtn.getAttribute("aria-label");
    if (!isProductInBasket(productId)) {
      basketSet.add(productId);
      let fetchData = await fetch(
        "https://userbasketproject-default-rtdb.firebaseio.com/userBasketCart.json",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(showCorrectProdInDom),
        }
      );
      let showResult = await fetchData.json();
      console.log(showResult);
    } else {
      console.log("محصول تکراری است.");
    }
  } catch (e) {
    console.log("something is wrong", e);
  }
};
window.addEventListener("load",()=>{
  const preLoaderWrapper = $.getElementsByClassName("preload-container");
  preLoaderWrapper[0].classList.add("hidden");
})
