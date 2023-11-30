let $ = document;
import { NavBar } from "../component/nav-bar-menu/_nav-menu.js";
import { Footer } from "../component/footer/footer.js";
window.customElements.define("navbar-tg", NavBar);
window.customElements.define("footer-tg", Footer);
const cartDataWrapper = $.querySelector(".basket-list-wrapper");
let getAllBasketPriceWrapper = $.querySelector(".sum-prises .price-number");
let getPreLoadWrapper = $.getElementsByClassName("preload-container");
let changeToArray;
let fetchData;
let getDataFromBasket = async () => {
  try {
    fetchData = await fetch(
      "https://userbasketproject-default-rtdb.firebaseio.com/userBasketCart.json"
    );
    let getResponse = await fetchData.json();
    changeToArray = Object.entries(getResponse);
    changeToArray.forEach((item) => {
      console.log(item[1].id);
      const cardHtmlTemplate = `
        <tbody class="">
              <tr class="item-wrapper">
                <td scope="row">
                  <span data-itemId="${item[0]}" class="align-middle total-item-price d-inline-block mt-3">${item[1].price}</span>
                </td>
                <td>
                  <input
                    class="border my-auto mt-3 quantity-input"
                    min="1"
                    style="width: 40px"
                    type="number"
                    value="${item[1].quantity || 1}"
                    data-itemId="${item[0]}"
                  />
                </td>
                <td>
                  <span class="align-middle item-price d-inline-block mt-3">${
                    item[1].price
                  }</span>
                </td>
                <td>
                  <p class="text-secondary my-auto py-3">
                    <a href="#">${item[1].title}</a>
                  </p>
                </td>
                <td class="cover-wrapper">
                  <div class="img-cover-wrapper">
                    <img src="${item[1].cover}" alt="" class="img-fluid" />
                  </div>
                </td>
                <td>
                  <div class="close-icon-wrapper d-flex my-auto justify-content-center align-items-center mt-3">
                    <button class="btn delete-from-basket p-0 d-flex align-items-center justify-content-center" aria-label="${
                      item[0]
                    }">
                      <i class="fa fa-times-circle align-middle" style="font-size: 25px; width: 100%; color: rgb(186, 9, 9);"></i>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
        `;
      cartDataWrapper.innerHTML += cardHtmlTemplate;
    });

    let getQuantityInput = $.querySelectorAll(".quantity-input");
    getQuantityInput.forEach((inputEvent) => {
      inputEvent.addEventListener("input", UpdateTotalItemPrice);
    });
    let getDelIcon = $.querySelectorAll(".delete-from-basket");
    getDelIcon.forEach((delEvent) => {
      delEvent.addEventListener("click", () => {
        let getId = delEvent.getAttribute("aria-label");
        DelItem(getId);
      });
    });
    calcTotalBasketPrice();
  } catch (e) {
    console.log("something went wrong", e);
  }
};
let UpdateTotalItemPrice = (event) => {
  let itemQuantity = parseInt(event.target.value);
  let itemId = event.target.dataset.itemid;
  let selectedItem = changeToArray.find((item) => item[0] === itemId);
  if (selectedItem) {
    selectedItem[1].quantity = itemQuantity;
    let setItemPrice = parseInt(
      selectedItem[1].price.replace(/,/g, "").replace(/\s+/g, "")
    );
    let calcEachItemPrice = setItemPrice * itemQuantity;
    let getTotalPriceElement = $.querySelector(
      `.total-item-price[data-itemid="${itemId}"]`
    );
    getTotalPriceElement.textContent =
      calcEachItemPrice.toLocaleString("us-en");
    calcTotalBasketPrice();
  } else {
    console.error("item not found with itemId ", itemId);
  }
};
let calcTotalBasketPrice = () => {
  let calcFinalPrice = changeToArray.reduce((acc, item) => {
    let itemPrice = parseInt(
      item[1].price.replace(/,/g, "").replace(/\s+/g, "")
    );
    let itemQuantity = item[1].quantity || 1;
    return acc + itemQuantity * itemPrice;
  }, 0);
  getAllBasketPriceWrapper.textContent = calcFinalPrice.toLocaleString(`us-en`);
};
let DelItem = async (itemId) => {
  try {
    fetchData = await fetch(
      `https://userbasketproject-default-rtdb.firebaseio.com/userBasketCart/${itemId}.json`,
      {
        method: "DELETE",
      }
    );
    let getResponse = await fetchData.json();
    location.reload();
    await getDataFromBasket();
    getPreLoadWrapper[0].classList.add("hidden");
  } catch (e) {
    console.log("something went wrong", e);
  }
};
window.addEventListener("load", async () => {
  getPreLoadWrapper[0].classList.add("hidden");
  getDataFromBasket();
});
