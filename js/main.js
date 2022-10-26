let hamb = document.querySelector(".hamb");
let menuWrapper = document.querySelector(".wrapper-menu");
let navi = document.querySelector(".navigation")
hamb.addEventListener("click", function (event) {
    menuWrapper.classList.toggle("show-menu");
    hamb.classList.toggle("hamb-right");

})



let dropMenuItems = document.querySelectorAll(".dropdown-menu__item");

for (let drop of dropMenuItems) {
    drop.addEventListener("click", function (e) {
        e.stopPropagation();
        e.currentTarget.classList.toggle("active");
        console.log("result");
        console.log(e, "event");

})
}













