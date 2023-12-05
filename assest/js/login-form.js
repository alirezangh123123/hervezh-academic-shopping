let $ = document;
const getToggleBtn = $.getElementsByClassName("toggle");
const getMainContainer = $.getElementsByClassName("main-container")
const getCloseBtn = $.getElementsByClassName("close-btn");
getToggleBtn[0].addEventListener("click", (event)=>{
    getMainContainer[0].classList.add("active")
})
getCloseBtn[0].addEventListener("click",()=>{
    getMainContainer[0].classList.remove("active")
    
})