const goTopBtn = document.getElementsByClassName("go-to-top-btn");
const topBtnTemplate = document.createElement("template");
topBtnTemplate.innerHTML = `
<link rel="stylesheet" href="/assest/css/font-awesome.css" />
<link rel="stylesheet" href="/assest/css/bootstrap.css" />
<link rel="stylesheet" href="/assest/css/style.css" />
<link rel="stylesheet" href="/assest/component/go-top-btn/go-top-btn.css" />
<section class="go-to-top-btn d-flex justify-content-end align-items-center">
    <a href="#topBody"> <button class="btn btn-light rounded-circle d-flex justify-content-center align-items-lg-center "><i class="fas fa-circle-chevron-up arrow-up w-100 h-100"></i></button></a> 
    </section>
`;
class TopBtn extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.append(topBtnTemplate.content.cloneNode(true));
    window.addEventListener("scroll", (event) => {
      if (document.documentElement.scrollTop > 50) {
        this.shadowRoot.querySelector(".go-to-top-btn").classList.add("active");
      } else {
        this.shadowRoot
          .querySelector(".go-to-top-btn")
          .classList.remove("active");
      }
    });
    this.shadowRoot
      .querySelector(".go-to-top-btn")
      .addEventListener("click", () => {});
  }
}
export { TopBtn };
