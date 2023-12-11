let $ = document;
const getToggleBtn = $.getElementsByClassName("toggle");
const getMainContainer = $.getElementsByClassName("main-container");
const getCloseBtn = $.getElementsByClassName("close-btn");
const getRegisterBtn = $.getElementById("reg-btn");
const getSignUpUserName = $.getElementById("sign-up-user-name");
const getSignUpPassword = $.getElementById("sign-up-password");
const getSignUpPasswordRep = $.getElementById("r-sing-up-password");
const getSignUpForm = $.getElementsByClassName("sign-up-form")[0];
const getLoginForm = $.getElementsByClassName("login-form")[0];
const toastWrapper = $.getElementsByClassName("toast-container");
const getLoginBtn = $.getElementsByClassName("login-submit")[0];
let toastAlert = (massage) => {
  toastWrapper[0].innerHTML = "";
  toastWrapper[0].insertAdjacentHTML(
    `beforeend`,
    `
<div id="liveToast" class="toast bg-primary" role="alert" aria-live="assertive" aria-atomic="true">
<div class="toast-header bg-primary">
<small class="fw-bold">هم اکنون</small>
  <strong class="ms-auto  fw-bold">خطا</strong>
  <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
</div>
<div class="toast-body text-end  fw-bold">
  ${massage}
</div>
</div>
`
  );
  const toastLiveExample = document.getElementById("liveToast");

  const toastBootstrap = new bootstrap.Toast(toastLiveExample);

  toastBootstrap.show();
};
//regex patterns for register and login
const userNamePattern = /^[a-zA-Z0-9\u0600-\u06FF._-]{8,12}/;
const signUpPasswordPattern =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,12}$/;
//check validation
getSignUpUserName.addEventListener("input", () => {
  validationInputs();
});
getSignUpPassword.addEventListener("input", () => {
  validationInputs();
});
getSignUpPasswordRep.addEventListener("input", () => {
  validationInputs();
});
let validationInputs = () => {
  if (!userNamePattern.test(getSignUpUserName.value)) {
    toastAlert(
      "نام کاربری باید شامل حروف کوچک و بزرگ و اعداد وحداقل ۸کاراکتروحداکثر۱۲کاراکتر باشد"
    );

    return false;
  }
  if (!signUpPasswordPattern.test(getSignUpPassword.value)) {
    toastAlert(
      " وحداقل ۶وحداکثر۱۲کاراکتر باشد\n.واعدادباشد special-characterکلمه عبور باید شامل حداقل یک حرف بزرگ و یک  "
    );

    return false;
  }
  if (getSignUpPasswordRep.value !== getSignUpPassword.value) {
    toastAlert("فیلد های رمز عبور یکسان نیستند");
    return false;
  }
  return true;
};

//toggle btn to  show sign up form
getToggleBtn[0].addEventListener("click", (event) => {
  getMainContainer[0].classList.add("active");
});
getCloseBtn[0].addEventListener("click", () => {
  getMainContainer[0].classList.remove("active");
});
//post data if all inputs obbey from patterns
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
// set cookie and set api
let setCookie = (cookieName, cookieValue, expDay) => {
  let getDate = new Date();
  getDate.setTime(getDate.getTime() + expDay * 24 * 60 * 60 * 1000);
  document.cookie = `${cookieName}=${cookieValue};path=/;expires=${getDate}`;
};
getSignUpForm.addEventListener("submit", async (event) => {
  try {
    event.preventDefault();

    if (validationInputs()) {
      let userData = {
        name: getSignUpForm.querySelector("#sign-up-user-name").value,
        password: getSignUpForm.querySelector("#sign-up-password").value,
      };
      setCookie("user-data", `${userData.name}`, 4);
      await sendUserData(userData);
      await Swal.fire({
        position: "center",
        icon: "success",
        title: "ثبت نام با موفقیت انجام شد",
        showConfirmButton: false,
        timer: 1500,
      });
      location.href = "../../index.html";
    }
  } catch (err) {
    console.log("something went wrong", err);
  }
});
window.addEventListener("load", async (event) => {
  try {
    const preLoaderWrapper = $.getElementsByClassName("preload-container");
    preLoaderWrapper[0].classList.add("hidden");
    let getUserData = await fetch(
      `https://userbasketproject-default-rtdb.firebaseio.com/userData.json`
    );
    let getResponse = await getUserData.json();
    let changeToArray = Object.entries(getResponse);
    getLoginForm.addEventListener("submit", async (subEvent) => {
      subEvent.preventDefault();
      let getUserNameValue =
        getLoginForm.querySelector("#login-user-name").value;
      let getUserPasswordValue =
        getLoginForm.querySelector("#login-password").value;
      let showDatas = changeToArray.find((userData) => {
        return (
          getUserNameValue === userData[1].name &&
          getUserPasswordValue === userData[1].password
        );
      });
      if (showDatas) {
        setCookie("user-data", showDatas[1].name, 4);
        await Swal.fire({
          icon: "success",
          title: "موفقیت آمیز",
          text: "...شما با موفقیت وارد شدید ",
        });
        location.href = "/index.html";
      } else if (
        !getMainContainer[0].className.includes("active") &&
        !showDatas
      ) {
        await Swal.fire({
          icon: "error",
          title: "خطا",
          text: "چنین کاربری در سایت وجود ندارد",
        });
      }
    });
  } catch (e) {
    console.log("something went wrong", e);
  }
});
