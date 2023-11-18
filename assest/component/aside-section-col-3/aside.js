let $ = document;
const asideTemplate = document.createElement("template");
asideTemplate.innerHTML = `
<link rel="stylesheet" href="/assest/css/font-awesome.css" />
<link rel="stylesheet" href="/assest/css/bootstrap.css" />
<link rel="stylesheet" href="/assest/css/style.css" />
<link rel="stylesheet" href="/assest/component/aside-section-col-3/aside.css" />

<aside class="  side-bar-wrapper">
<div class="side-bar-search-inner col-12">
  <div class="search-section bg-white mt-2">
    <form class="p-3 position-relative search-form-section">
      <input
        type="search"
        class="form-control text-end rounded-0"
        placeholder="...جستجو"
      />
      <i
        class="fa fa-magnifying-glass text-secondary position-absolute"
      ></i>
    </form>
  </div>
</div>
<div
  class="col-12 side-bar-catagory-inner text-end bg-white mt-3"
>
  <span class="fw-bold me-3"
    >دسته بندی مطالب
    <span class="sub-border-catagory"></span>
  </span>
  <ul class="list-unstyled list-group list-group-flush">
    <li class="list-group-item">
      <a href="#" class="w-100">چند رسانه ای</a>
    </li>
    <li class="list-group-item">
      <a href="#" class="w-100">زبان خارجی</a>
    </li>
    <li class="list-group-item">
      <a href="#" class="w-100">برنامه نویسی</a>
    </li>
    <li class="list-group-item">
      <a href="#" class="w-100">dev-ops</a>
    </li>
    <li class="list-group-item">
      <a href="#" class="w-100">سئو</a>
    </li>
    <li class="list-group-item">
      <a href="#" class="w-100">طراحی وب</a>
    </li>
    <li class="list-group-item">
      <a href="#" class="w-100">فناوری اطلاعات</a>
    </li>
  </ul>
</div>
<div
  class="col-12 side-bar-catagory-inner text-end bg-white mt-3"
>
  <span class="fw-bold me-3"
    >دسته بندی دوره ها
    <span class="sub-border-catagory"></span>
  </span>
  <ul class="list-unstyled list-group list-group-flush">
    <li class="list-group-item">
      <a href="#" class="w-100">گوگل آنالیتیکس</a>
    </li>
    <li class="list-group-item">
      <a href="#" class="w-100">افزایش سرعت سایت</a>
    </li>
    <li class="list-group-item">
      <a href="#" class="w-100">ایمیل مارکتینگ</a>
    </li>
    <li class="list-group-item">
      <a href="#" class="w-100">سرچ حرفه ای در گوگل</a>
    </li>
  </ul>
</div>
</aside>
`;
class Aside extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.append(asideTemplate.content.cloneNode(true));
  }
}
export {Aside}