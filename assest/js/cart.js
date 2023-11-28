//dont forget your have set your own api to connect into database
//and you can use from google firebase
let $ = document;
import { NavBar } from "../component/nav-bar-menu/_nav-menu.js";
import { Footer } from "../component/footer/footer.js";
window.customElements.define("navbar-tg", NavBar);
window.customElements.define("footer-tg", Footer);
const cartDataWrapper = $.querySelector(".basket-list-wrapper");
//fetched data from db
let mainItemId = null;
let getDataFromBasket = async () => {
  try {
    let fetchData = await fetch(
      "https://login-project-e1aca-default-rtdb.firebaseio.com/userBasket.json"
    );
    let getResponse = await fetchData.json();
    let changeToArray = Object.entries(getResponse);

    let showDataInDom = changeToArray.forEach((item) => {
      const cardHtmlTemplate = `
  <tbody class="">
  <tr class="item-wrapper">
    <td scope="row">
      <span class="align-middle d-inline-block mt-3">${item[1].price}</span>
    </td>
    <td>
      <input
        class="border my-auto mt-3"
        min="1"
        style="width: 40px"
        type="number"
        value="1"/>
    </td>
    <td>
      <span class="align-middle d-inline-block mt-3"
        >${item[1].price}</span
>
    </td>
    <td>
      <p class="text-secondary my-auto py-3">
        <a href="#"> ${item[1].title}</a>
      </p>
    </td>

    <td class="cover-wrapper">
      <div class="img-cover-wrapper">
        <img
          src="${item[1].cover}"
          alt=""
          class="img-fluid"
        />
      </div>
    </td>
    <td>
      <div
        class="close-icon-wrapper d-flex my-auto justify-content-center align-items-center mt-3"
      >
        <button
          class="btn delete-from-basket p-0 d-flex align-items-center justify-content-center"
        aria-label =${item[0]}
          >
          <i
            class="fa fa-times-circle align-middle"
            style="
              font-size: 25px;
              width: 100%;
              color: rgb(186, 9, 9);
            "
          ></i>
        </button>
      </div>
    </td>
  </tr>
</tbody>
  `;
      cartDataWrapper.innerHTML += cardHtmlTemplate;
    });

    let getDelBtn = $.querySelectorAll(".delete-from-basket");
    getDelBtn.forEach((delEvent) => {
      delEvent.addEventListener("click", (event) => {
        let getId = delEvent.getAttribute("aria-label");
        DelItem(getId);
      });
    });
  } catch (e) {
    console.log("something went wrong", e);
  }
};
// delete from basket
let DelItem = async (itemId) => {
  try {
    mainItemId = itemId;
    let fetchDelData = await fetch(
      `https://login-project-e1aca-default-rtdb.firebaseio.com/userBasket/${mainItemId}.json`,
      {
        method: "DELETE",
      }
    );
    let getDelResponse = await fetchDelData.json();
    location.reload();
    await getDataFromBasket();
    const preLoaderWrapper = $.getElementsByClassName("preload-container");
    preLoaderWrapper[0].classList.add("hidden");
  } catch (err) {
    console.log("something went wrong", err);
  }
};

window.addEventListener("load", () => {
  const preLoaderWrapper = $.getElementsByClassName("preload-container");
  preLoaderWrapper[0].classList.add("hidden");
  getDataFromBasket();
  calcPrice();
});
