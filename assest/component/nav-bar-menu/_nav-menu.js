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
          <a href="#" class="text-dark mx-1 blog-btn text-white"
            >بلاگ
            <div class="line"></div>
          </a>
          <a href="#" class="text-dark mx-1 shop-btn text-white"
            >فروشگاه
            <div class="line"></div>
          </a>
        </div>
      </div>
      
      <div class="col-sm-4 mt-4 d-sm-block d-md-none sign-login-sec">
        <div
          class="login-wrapper w-100 bg-primary text-white rounded-2 d-flex justify-content-center"
        >
          <a href="#" class="text-white d-flex"
            ><span>ورورد</span
            ><span class="d-sm-none d-md-block">/ثبت نام</span></a
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
            class="login-wrapper w-100 bg-primary text-white rounded-2 d-flex justify-content-center"
          >
            <a href="#" class="text-white d-flex"
              ><span>ورورد</span
              ><span class="d-sm-none d-xl-block">/ثبت نام</span></a
            >
          </div>
        </div>

     
        <div class="icon-btn-wrapper d-sm-block d-md-none menu_icon">
          <span class="d-flex justify-content-center align-items-center">
            <i class="fa fa-bars fa-2x"></i>
          </span>
        </div>
 

        <div class="col-md-2 basket ms-4">
          <a href="" class="basket-link">
            <i
              class="fa fa-shopping-bag position-relative text-dark"
              style="font-size: 22px"
              ><em
                class="text-primary position-absolute rounded-circle item-counter d-flex flex-column justify-content-center align-items-center rounded-circle"
                style="
                  width: 10px;
                  height: 11px;
                  top: 69%;
                  font-size: 25px;
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
              <div class="menu-mobile__search">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="جستجو کنید ..."
                />
                <span>
                  <i class="fa fa-search"></i>
                </span>
              </div>
              <ul class="menu-mobile__list list-unstyled">
                <li class="menu-mobile__item">
                  <a href="index.html" class="menu-mobile__link">
                    <span class="text-dark">صفحه اصلی</span>
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
                    <li class="menu-mobile__submenu--item">
                      <a href="#" class="text-dark">برنامه نویسی وب</a>
                    </li>
                    <li class="menu-mobile__submenu--item">
                      <a href="#" class="text-dark">سئو</a>
                    </li>
                    <li class="menu-mobile__submenu--item">
                      <a href="#" class="text-dark">زبان خارجی</a>
                    </li>
                  </ul>
                </li>
                <li class="menu-mobile__item parent-item-submenu">
                  <a href="#" class="menu-mobile__link text-dark">
                    <span>دسته بندی</span>
                    <span><i class="fa fa-arrow-down"></i></span>
                  </a>
                  <ul class="menu-mobile__submenu--list list-unstyled">
                    <li class="menu-mobile__submenu--item">
                      <a href="#" class="text-dark">سبد خرید</a>
                    </li>
                    <li class="menu-mobile__submenu--item">
                      <a href="#" class="text-dark">مقالات</a>
                    </li>
                    <li class="menu-mobile__submenu--item">
                      <a href="#" class="text-dark">فروشگاه</a>
                    </li>
                  </ul>
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
          <a href="#" class="ms-3 text-dark">مقالات</a>
        </div>

        <div
          class="col-md-3 d-sm-none d-lg-block align-items-center mt-2 ms-5"
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
                <a class="text-dark w-100" href="#"
                  >سئو
                  <ul class="list-unstyled sub-menu-child">
                    <li>دوره افزایش سرعت سایت</li>
                    <li>آموزش گوگل آنالیتیکس</li>
                  </ul>
                </a>
              </li>
              <li class="d-flex align-items-center show-sub-menu">
                <i class="fas fa-arrow-left sub-menu"></i>
                <a class="text-dark w-100" href="#"
                  >زبان خارجی
                  <ul class="list-unstyled sub-menu-child">
                    <li>زبان انگلیسی</li>
                    <li>زبان آلمانی</li>
                  </ul>
                </a>
              </li>
              <li><a class="text-dark w-100" href="#">برنامه ریزی</a></li>
              <li class="d-flex align-items-center show-sub-menu">
                <i class="fas fa-arrow-left sub-menu"></i>
                <a class="text-dark w-100" href="#"
                  >برنامه نویسی وب
                  <ul class="list-unstyled sub-menu-child">
                    <li>طراحی وب</li>
                    <li>دوره جاوا اسکریپت</li>
                    <li>phpدوره متخصص</li>
                  </ul>
                </a>
              </li>
              <li class="d-flex align-items-center show-sub-menu">
                <i class="fas fa-arrow-left sub-menu"></i>
                <a class="text-dark w-100" href="#"
                  >فناوری اطلاعات
                  <ul class="list-unstyled sub-menu-child">
                    <li>برنامه نویسی</li>
                    <li>شبکه و امنیت</li>
                  </ul>
                </a>
              </li>
              <li><a class="text-dark w-100" href="#">devUps</a></li>
            </ul>
          </div>
        </div>
        <div
          class="col-md-3 d-sm-none d-md-flex d-flex flex-column align-items-end justify-content-center mt-2 category"
          style="cursor: pointer"
        >
          <p
            class="toggle-menu d-flex justify-content-between align-items-center"
            id="toggle-menu"
          >
            دسته بندی
            <i class="fas fa-arrow-down mx-2"></i>
          </p>
          <ul class="show-menu list-unstyled w-100">
            <li class="d-flex align-items-center show-sub-menu">
              <i class="fas fa-arrow-left sub-menu"></i>
              <a class="text-dark w-100" href="#"
                >چند رسانه ای
                <ul class="list-unstyled sub-menu-child">
                  <li>انیمیشن سه بعدی</li>
                  <li>نمونه فیلم</li>
                </ul>
              </a>
            </li>
            <li><a class="text-dark w-100" href="#">زبان خارجی</a></li>
            <li><a class="text-dark w-100" href="#">سئو</a></li>
            <li><a class="text-dark w-100" href="#">طراحی وب</a></li>
            <li class="d-flex align-items-center show-sub-menu">
              <i class="fas fa-arrow-left sub-menu"></i>
              <a class="text-dark w-100" href="#"
                >فناوری اطلاعات
                <ul class="list-unstyled sub-menu-child">
                  <li>برنامه نویسی</li>
                  <li>شبکه و امنیت</li>
                </ul>
              </a>
            </li>
            <li><a class="text-dark w-100" href="#">devUps</a></li>
          </ul>
        </div>
      </div>
      <div
        class="col-sm-6 col-md-4 right-side-menu d-flex justify-content-end"
      >
        <div class="col d-flex justify-content-end">
          <div class="site-logo">
            <img src="assest/img/logo-1.png" class="img-fluid" alt="" />
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
  }
  // mobile-menu
  //   moblie menu
}
export { NavBar };
