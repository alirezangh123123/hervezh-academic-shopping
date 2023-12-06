let $ = document;
//navbar-component
let navBarTemplate = $.createElement("template");
navBarTemplate.innerHTML = `
<link rel="stylesheet" href="/assest/css/font-awesome.css" />
<link rel="stylesheet" href="/assest/css/bootstrap.css" />
<link rel="stylesheet" href="/assest/css/style.css" />
<link rel="stylesheet" href="/assest/component/nav-bar-menu/_nav-menu.css" />
<section class="top-nav mb-2">
  <div class="container">
    <div class="row d-flex justify-content-between">
      <div class="col-sm-3 mt-4 shorcut-btn">
        <div class="link-btn-wrapper d-flex">
          <a href="../../../all-article.html" class="text-dark mx-1 blog-btn text-white"
            >بلاگ
            <div class="line"></div>
          </a>
          <a href="../../../shop.html" class="text-dark mx-1 shop-btn text-white"
            >فروشگاه
            <div class="line"></div>
          </a>
        </div>
      </div>
      
      <div class="col-sm-4 mt-4 d-sm-block d-md-none sign-login-sec">
        <div
          class="login-wrapper get-login-btn w-100 bg-primary text-white rounded-2 d-flex justify-content-center"
        >
          <a href="#" class="text-white d-flex">
          <span class="login">ورورد</span>
            <span class="d-sm-none d-md-block sign-up">/ثبت نام</span></a
          >
        </div>
      </div>
     
      <div
        class="contact-us mt-2 col-sm-9 d-sm-none d-md-flex align-items-end flex-column"
      >
        <div class="reach-out d-flex">
          <div class="email p-2 d-flex align-items-center">
            <div class="email-wrapper d-flex flex-column align-items-end">
              <span class="pe-2 text-white">پشتیبانی ایمیل</span>
              <span class="pe-2 text-white"
                >alireza20002485@gmail.com</span
              >
            </div>
            <i class="fa fa-2x fa-envelope text-primary"></i>
          </div>
          <div class="phone p-2 d-flex align-items-center">
            <div class="phone-wrapper d-flex flex-column">
              <span class="pe-2 text-white">تلفن پشتیبانی</span>
              <span class="pe-2 text-white">۰۹۱۵۷۷۷۵۴۳۵۶</span>
            </div>
            <i class="fa fa-2x fa-phone text-primary"></i>
          </div>
          <div class="email"></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="menu">
  <div class="container bg-white rounded-2">
    <div class="row">
      <div
        class="col-sm-6 my-auto col-md-8 left-side-menu d-flex align-items-baseline"
      >
        <div class="col-md-2 d-sm-none d-md-block sign-login-sec">
          <div
            class="login-wrapper get-login-btn w-100 bg-primary text-white rounded-2 d-flex justify-content-center">
            <a href="#" class="text-white d-flex"> 
            <span class="login">ورورد</span>
              <span class="d-sm-none d-xl-block sign-up">/ثبت نام</span></a>
          </div>
        </div>

     
        <div class="icon-btn-wrapper d-sm-block d-md-none menu_icon">
          <span class="d-flex justify-content-center align-items-center">
            <i class="fa fa-bars fa-2x"></i>
          </span>
        </div>
 

        <div class="col-md-2 basket ms-4">
          <a href="../../../cart.html" class="basket-link">
            <i
              class="fa fa-shopping-bag position-relative text-dark"
              style="font-size: 22px"
              ><em
                class="latin-numbers text-primary  position-absolute rounded-circle item-counter d-flex flex-column justify-content-center align-items-center rounded-circle"
                style="
                  width: 10px;
                  height: 11px;
                  top: 40%;
                  font-size: 19px;
                  
                "
                >0</em
              ></i
            >
          </a>
        </div>

       
        <aside class="menu-mobile">
          <div class="icon__close">
            <span>
              <i class="fa fa-times-circle"></i>
            </span>
          </div>
          <div class="menu-mobile__wrapper">
            <div class="menu-mobile__content">
              <ul class="menu-mobile__list list-unstyled">
                <li class="menu-mobile__item">
                  <a href="index.html" class="menu-mobile__link">
                    <span class="text-dark">صفحه اصلی</span>
                  </a>
                </li>
                <li class="menu-mobile__item parent-item-submenu">
                  <a href="#" class="menu-mobile__link text-dark">
                    <span>تماس با ما</span>
                  </a>
                  
                </li>
                <li class="menu-mobile__item parent-item-submenu">
                  <a href="#" class="menu-mobile__link">
                    <span class="text-dark">دوره ها</span>
                    <span
                      ><i class="fa fa-arrow-down text-dark"></i
                    ></span>
                  </a>
                  <ul class="menu-mobile__submenu--list list-unstyled">
                  <li class="sub-item-btn menu-mobile__submenu--item" aria-label="2">دوره افزایش سرعت سایت</li>

                  <li class="sub-item-btn menu-mobile__submenu--item" aria-label="1">دوره گوگل آنالیتیکس</li>

                  <li class="sub-item-btn menu-mobile__submenu--item" aria-label="11">زبان انگلیسی</li>

                  <li class="sub-item-btn menu-mobile__submenu--item" aria-label="10">زبان آلمانی</li>

                  <li class="sub-item-btn menu-mobile__submenu--item" aria-label="7">دوره تقویت حافظه</li>

                  <li class="sub-item-btn menu-mobile__submenu--item" aria-label="6">مهارت های نرم زندگی</li>

                  <li class="sub-item-btn menu-mobile__submenu--item" aria-label="15">دوره وبمستران طلایی</li>

                  <li class="sub-item-btn menu-mobile__submenu--item" aria-label="5">HTML,css آموزش</li>

                  <li class="sub-item-btn menu-mobile__submenu--item" aria-label="8">NPM آموزش</li>

                  <li class="sub-item-btn menu-mobile__submenu--item" aria-label="9">Wordpress آموزش</li>

                  <li class="sub-item-btn menu-mobile__submenu--item" aria-label="14">Clean code آموزش</li>

                  <li class="sub-item-btn menu-mobile__submenu--item" aria-label="12">آموزش فوتوشاپ</li>

                  <li class="sub-item-btn menu-mobile__submenu--item" aria-label="16">UI آموزش</li>
                  </ul>
                </li>
                <li class="menu-mobile__item parent-item-submenu">
                  <a href="#" class="menu-mobile__link text-dark">
                    <span>دسته بندی</span>
                    <span><i class="fa fa-arrow-down"></i></span>
                  </a>
                  <ul class="menu-mobile__submenu--list list-unstyled">
                    <li class="menu-mobile__submenu--item">
                      <a href="../../../cart.html" class="text-dark">سبد خرید</a>
                    </li>
                    <li class="menu-mobile__submenu--item">
                      <a href="../../../all-article.html" class="text-dark">مقالات</a>
                    </li>
                    <li class="menu-mobile__submenu--item">
                      <a href="../../../shop.html" class="text-dark">فروشگاه</a>
                    </li>
                </li>
                
              </ul>
            </div>
          </div>
        </aside>
        <div
          class="col-md-1 d-sm-none d-xl-flex flex-nowrap extend-short"
        >
          <a href="#" class="text-dark" style="font-size: 14px"
            >تماس باما</a
          >
        </div>
        <div class="col-md-1 d-sm-none d-lg-block extend-short">
          <a href="../../../all-article.html" class="ms-3 text-dark">مقالات</a>
        </div>

        <div
          class="col-md-3 d-sm-none d-md-flex align-items-center mt-2 ms-5"
        >
          <div
            class="d-flex align-items-center justify-content-end mt-2 category"
            style="cursor: pointer"
          >
            <div class="title-wrapper d-flex align-items-center">
              <p class="toggle-menu mx-2" id="toggle-menu">
                دوره ها
                <i class="fas fa-arrow-down mx-1"></i>
              </p>
            </div>
            <ul class="show-menu list-unstyled w-100">
              <li class="d-flex align-items-center show-sub-menu">
                <i class="fas fa-arrow-left sub-menu"></i>
                <a class="text-dark w-100" href="#">سئو
                  <ul class="list-unstyled sub-menu-child">
                    <li class="sub-item-btn" aria-label="2">دوره افزایش سرعت سایت</li>
                    <li class="sub-item-btn" aria-label="1">دوره گوگل آنالیتیکس</li>
                  </ul>
                </a>
              </li>
              <li class="d-flex align-items-center show-sub-menu">
                <i class="fas fa-arrow-left sub-menu"></i>
                <a class="text-dark w-100" href="#">زبان خارجی
                  <ul class="list-unstyled sub-menu-child">
                    <li class="sub-item-btn" aria-label="11">زبان انگلیسی</li>
                    <li class="sub-item-btn" aria-label="10">زبان آلمانی</li>
                  </ul>
                </a>
              </li>
              <li class="d-flex align-items-center show-sub-menu">
              <i class="fas fa-arrow-left sub-menu"></i>
              <a class="text-dark w-100" href="#">مهارت های نرم
              <ul class="list-unstyled sub-menu-child">
                    <li class="sub-item-btn" aria-label="7">دوره تقویت حافظه</li>
                    <li class="sub-item-btn" aria-label="6">مهارت های نرم زندگی</li>
                  </ul>
              </a></li>
              <li class="d-flex align-items-center show-sub-menu">
                <i class="fas fa-arrow-left sub-menu"></i>
                <a class="text-dark w-100" href="#"
                  >برنامه نویسی وب
                  <ul class="list-unstyled sub-menu-child">
                    <li class="sub-item-btn" aria-label="15">دوره وبمستران طلایی</li>
                    <li class="sub-item-btn" aria-label="5">HTML,css آموزش</li>
                    <li class="sub-item-btn" aria-label="8">NPM آموزش</li>
                    <li class="sub-item-btn" aria-label="9">Wordpress آموزش</li>
                    <li class="sub-item-btn" aria-label="14">Clean code آموزش</li>
                  </ul>
                </a>
              </li>
              <li class="d-flex align-items-center show-sub-menu">
                <i class="fas fa-arrow-left sub-menu"></i>
                <a class="text-dark w-100" href="#"
                  >طراحی و دیزاین
                  <ul class="list-unstyled sub-menu-child">
                    <li class="sub-item-btn" aria-label="12">آموزش فوتوشاپ</li>
                    <li class="sub-item-btn" aria-label="16">UI آموزش</li>
                  </ul>
                </a>
              </li>
              <li class="d-flex align-items-center show-sub-menu">
              <i class="fas fa-arrow-left sub-menu"></i>
              <a class="text-dark w-100" href="#">هنر
                 <ul class="list-unstyled sub-menu-child">
                    <li class="sub-item-btn" aria-label="13">آموزش عکاسی</li>
                  </ul>
              </a></li>
            </ul>
          </div>
        </div>
        <div
          class="col-md-3 d-sm-none d-lg-block d-flex flex-column  justify-content-center mt-2"
          style="cursor: pointer; width:136px"
        >
          <p
            class="best-of-the-month text-center  text-dark  p-2 rounded-2 d-flex m-auto justify-content-center w-100 px-0  align-items-center pe-0"
            id="toggle-menu">
            <a class="text-center" href="../../../index.html#webmaster">
            <i class="fa fa-star" style= "margin-right:4px"></i>  دوره برتر ماه </a>
         
          </p>
        </div>
      </div>
      <div
        class="col-sm-6 col-md-4 right-side-menu d-flex justify-content-end"
        style="cursor: pointer"
        >
        <div class="col d-flex justify-content-end">
          <div class="site-logo">
          <a href="../../../index.html"> <img src="assest/img/logo-1.png" class="img-fluid" alt="" /></a>
          </div>
        </div>
      </div>
      </div>
      </div>
      </section>
      `;
//shadowDOM of navbar
class NavBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.append(navBarTemplate.content.cloneNode(true));
    //set click event link
    this.shadowRoot.querySelectorAll(".sub-item-btn").forEach((btn) => {
      btn.addEventListener("click", (btnEvent) => {
        let getLabelId = parseInt(btnEvent.target.getAttribute("aria-label"));
        location.href = `product.html?id=${getLabelId}`;
      });
    });
    //set item-counter
    this.shadowRoot.querySelector(".item-counter");
    fetch(
      "https://userbasketproject-default-rtdb.firebaseio.com/userBasketCart.json"
    )
      .then((res) => res.json())
      .then((data) => {
        this.changetToArray = Object.entries(data);
        console.log(
          (this.shadowRoot.querySelector(".item-counter").textContent =
            this.changetToArray.length)
        );
      });
    // mobile-menu
    this.shadowRoot
      .querySelector(".menu_icon")
      .addEventListener("click", () => {
        this.shadowRoot.querySelector(".menu-mobile").classList.add("active");
      });
    this.shadowRoot
      .querySelector(".icon__close")
      .addEventListener("click", () => {
        this.shadowRoot
          .querySelector(".menu-mobile")
          .classList.remove("active");
      });
    //getcookiedata
    let getCookie = (cookieName) => {
      let cookieArray = $.cookie.split(";");
      let getCookie = null;

      cookieArray.some((cookie) => {
        if (cookie.includes(cookieName)) {
          getCookie = cookie.substring(cookie.indexOf("=") + 1);
          return true;
        }
      });
      return getCookie;
    };
    // login-panel
    window.addEventListener("load", () => {
      getCookie("user-data");
      this.loginBtnContent = this.shadowRoot.querySelectorAll(".login");
      this.signUpBtnContent = this.shadowRoot.querySelectorAll(".sign-up");
      this.signOutBtn = this.shadowRoot.querySelectorAll(".sign-out");
      if (getCookie("user-data")) {
        this.signUpBtnContent.forEach((item) => {
          item.remove();
        });
        this.loginBtnContent.forEach((loginBtn) => {
          loginBtn.classList.add("disabled");
          loginBtn.textContent = getCookie("user-data");
          let getParentElement = loginBtn.parentElement.parentElement;
          getParentElement.addEventListener("mouseenter", (event) => {
            loginBtn.innerHTML = "خروج از حساب";
            getParentElement.addEventListener("click", (event) => {
              let todayTime = new Date();
              todayTime.setTime(todayTime.getTime() - 5 * 24 * 60 * 60 * 1000);
              $.cookie = `user-data=${getCookie(
                "user-data"
              )};path=/;expires=${todayTime}`;
              location.href = location.href;
            });
          });
          getParentElement.addEventListener("mouseleave", (event) => {
            loginBtn.innerHTML = getCookie("user-data") || "ورود";
          });
        });
      } else {
        this.loginBtn = this.shadowRoot.querySelectorAll(".get-login-btn");
        this.loginBtn.forEach((btn) => {
          btn.addEventListener("click", (event) => {
            location.href = "../../../login-sign_in.html";
          });
        });
      }
    });
  }
}
export { NavBar };
