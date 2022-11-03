/*hamb*/
let hamb = document.querySelector(".hamb");
let menuWrapper = document.querySelector(".wrapper-menu");

hamb.addEventListener("click", function (event) {
    menuWrapper.classList.toggle("show-menu");
    menuWrapper.classList.toggle("offcanvas");
    hamb.classList.toggle("invert");
})


/*menu*/
let dropMenuItems = document.querySelectorAll(".dropdown-menu__item");

for (let drop of dropMenuItems) {
    drop.addEventListener("click", function (event) {
        event.stopPropagation();
        let massItems = event.currentTarget.classList;
        if (massItems.contains("dropdown-menu__item")){
            let dropMenuItemsActive = document.querySelectorAll(".dropdown-menu__item.active");
            dropMenuItemsActive.forEach(function (element) {
                console.log(event.currentTarget, "event");
                console.log(element, "element");
                let currentTargetSubMenu = event.currentTarget.querySelectorAll(".dropdown-menu__content-inner");
                console.log(currentTargetSubMenu, "currentTargetSubMenu");
                if(element !== event.currentTarget && !currentTargetSubMenu) {
                    element.classList.remove("active");
                    console.log("[fe");
                }
            })
            event.currentTarget.classList.toggle("active");
        }
})
}













