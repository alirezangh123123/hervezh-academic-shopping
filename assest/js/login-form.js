let $ = document;
const getToggleBtn = $.getElementsByClassName("toggle");
const getMainContainer = $.getElementsByClassName("main-container");
const getCloseBtn = $.getElementsByClassName("close-btn");
const getRegisterBtn = $.getElementById("reg-btn");
const getSignUpUserName = $.getElementById("sign-up-user-name");
const getSignUpPassword = $.getElementById("sign-up-password");
const getSignUpEmail = $.getElementById("sign-up-email");
const getSignUpForm = $.getElementsByClassName("sign-up-form")[0];

getToggleBtn[0].addEventListener("click", (event) => {
  getMainContainer[0].classList.add("active");
});
getCloseBtn[0].addEventListener("click", () => {
  getMainContainer[0].classList.remove("active");
});
// set cookie and set api
let sendUserData = async (userData) => {
  try {
    let fetchData = await fetch(
      `https://userbasketproject-default-rtdb.firebaseio.com/userData.json`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );
    let getResponse = await fetchData.json();
    console.log(getResponse);
  } catch (err) {
    console.log("something went wrong", err);
  }
};
let setCookie = (cookieName, cookieValue, expDay) => {
  let getDate = new Date();
  getDate.setTime(getDate.getTime() + expDay * 24 * 60 * 60 * 1000);
  document.cookie = `${cookieName}=${cookieValue};path=/;expires=${getDate}`;
};
getSignUpForm.addEventListener("submit", async (event) => {
  try {
    event.preventDefault();
    let userData = {
      name: getSignUpForm.querySelector("#sign-up-user-name").value,
      password: getSignUpForm.querySelector("#sign-up-password").value,
      email: getSignUpForm.querySelector("#sign-up-email").value,
    };
    setCookie("user-data", `${userData.name}`, 4);
    await sendUserData(userData);

    location.href = "../../index.html";
  } catch (err) {
    console.log("something went wrong", err);
  }
});
