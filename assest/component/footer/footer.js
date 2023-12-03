let $ = document;
let footerTemplate = $.createElement("template");
footerTemplate.innerHTML = `
<link rel="stylesheet" href="/assest/css/font-awesome.css" />
<link rel="stylesheet" href="/assest/css/bootstrap.css" />
<link rel="stylesheet" href="/assest/css/style.css" />
<link rel="stylesheet" href="/assest/component/footer/footer.css" />
<div class="footer mt-7">
<div class="container-fluid">
<div class="container">
  <div class="row">
    <div class="col-lg-4 courses-shortcut shortcut mt-md-6 mt-sm-3">
      <div
        class="title-courses-footer-shortcut d-flex justify-content-end"
      >
        <h6 class="fw-bold text-white text-end">دوره های هروژ</h6>
      </div>
      <div
        class="list-footer-courses-shortcut d-flex justify-content-around"
      >
        <ul class="list-unstyled first-row-list">
          <li>
            <a href="../../../product.html?id=1" class="text-light">آنالیز گوگل</a>
            <i class="fa fa-circle"></i>
          </li>
          <li>
            <a href="../../../product.html?id=2" class="text-light">افزایش سرعت سایت</a>
            <i class="fa fa-circle"></i>
          </li>
          <li>
            <a href="../../../product.html?id=3" class="text-light">ایمیل مارکتینگ</a>
            <i class="fa fa-circle"></i>
          </li>
          <li>
            <a href="../../../product.html?id=5" class="text-light">html,css آموزش </a>
            <i class="fa fa-circle"></i>
          </li>
        </ul>
        <ul class="list-unstyled second-row-list">
          <li>
            <a href="../../../product.html?id=12" class="text-light">آموزش فوتوشاپ</a>
            <i class="fa fa-circle"></i>
          </li>
          <li>
            <a href="../../../product.html?id=9" class="text-light">wordpress</a>
            <i class="fa fa-circle"></i>
          </li>
          <li>
            <a href="../../../product.html?id=13" class="text-light">عکاسی حرفه ای</a>
            <i class="fa fa-circle"></i>
          </li>
          <li>
            <a href="../../../product.html?id=14" class="text-light">clean code آموزش </a>
            <i class="fa fa-circle"></i>
          </li>
        </ul>
      </div>
    </div>
    <div class="col-lg-4 catagory-shortcut shortcut mt-md-6 mt-sm-3">
      <div
        class="title-courses-footer-shortcut d-flex justify-content-end"
      >
        <h6 class="fw-bold text-white text-end">دسته بندی</h6>
      </div>
      <div
        class="list-footer-courses-shortcut d-flex justify-content-around"
      >
        <ul class="list-unstyled first-row-list">
          <li>
            <a href="../../../cart.html" class="text-light">سبد خرید</a>
            <i class="fa fa-circle"></i>
          </li>
          <li>
            <a href="../../../all-article.html" class="text-light">مقالات</a>
            <i class="fa fa-circle"></i>
          </li>
          <li>
            <a href="../../../shop.html" class="text-light">فروشگاه</a>
            <i class="fa fa-circle"></i>
          </li>
          <li>
            <a href="#" class="text-light">درباره ما</a>
            <i class="fa fa-circle"></i>
          </li>
        </ul>
        
        <ul class="list-unstyled second-row-list">
          <li>
            <a href="../../../index.html#webmaster" class="text-light">دوره برتر ماه</a>
            <i class="fa fa-circle"></i>
          </li>
          <li>
            <a href="../../../index.html" class="text-light">صفحه اصلی</a>
            <i class="fa fa-circle"></i>
          </li>
          <li>
            <a href="../../../index.html#why-hervezh" class="text-light">...چرا هروژ</a>
            <i class="fa fa-circle"></i>
          </li>
          <li>
            <a href="../../../index.html#footer" class="text-light">شبکه های اجتماعی</a>
            <i class="fa fa-circle"></i>
          </li>
        </ul>
      </div>
    </div>
    <div class="col-lg-4 contact-section mt-md-6 mt-sm-3">
      <div
        class="contact-wrapper d-flex flex-column align-items-end justify-content-between"
      >
        <span class="address text-white"
          >تهران ، یوسف آباد ، خیابان چهلم ، پلاک 10
          <i class="fa fa-map-marker contact-icons"></i>
        </span>
        <span class="phone-numbeer text-white">
          09901394741
          <i class="fa fa-mobile contact-icons"></i>
        </span>
        <span class="email-address text-white"
          >alireza20002485@gmail.com
          <i class="fa fa-envelope contact-icons"></i>
        </span>
      </div>
    </div>
    <hr class="text-white">
    <div class="col-12 social-medias-wrapper my-2">
      <div class="social-icons d-flex justify-content-center">
        <span><i class="fa-brands fa-instagram text-white"></i></span>
        <span><i class="fa-brands fa-whatsapp text-white"></i></span>
        <span><i class="fa-brands fa-twitter text-white"></i></span>
        <span><i class="fa-brands fa-telegram text-white"></i></span>
      </div>
    </div>
    <hr class="text-white">
    <div class="col-12 copy-right">
      <div class="copyRight-title text-center">
        <p class="text-white">این وب سایت صرفا جهت نمونه کار است</p>
      </div>
    </div>
  </div>
</div>
</div>
</div>
`;
class Footer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.append(footerTemplate.content.cloneNode(true));
  }
}
export { Footer };
