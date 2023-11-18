let $ = document;
import { NavBar } from "../component/nav-bar-menu/_nav-menu.js";
import { Footer } from "../component/footer/footer.js";
import { Aside } from "../component/aside-section-col-3/aside.js";
import { TopBtn } from "../component/go-top-btn/go-top-btn.js";
window.customElements.define("navbar-tg", NavBar);
window.customElements.define("footer-tg", Footer);
window.customElements.define("aside-tg", Aside);
window.customElements.define("top-tg", TopBtn);