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

/*slider*/
let sliders = document.querySelectorAll(".slider");
sliders.forEach (function (element) {
    runSlider(element);
})

function runSlider (slider) {
    let dotsWrapper = slider.querySelector(".slider__dots");
    let itemWidth = slider.querySelector(".slider__item").clientWidth;
    let itemLength = slider.querySelectorAll(".slider__item").length;
    let feedbackWrapper = slider.querySelector(".slider__wrapper");
    let feedbackWrapperWidth = slider.querySelector(".slider__wrapper").clientWidth;
    let countItem = feedbackWrapperWidth / itemWidth;
    let countVisibleItem = Math.floor(countItem);

    let dotLength = itemLength - (countVisibleItem - 1);
    for (let i = 0; i < dotLength; i++) {
        let dot = document.createElement("span");
        dot.classList.add("dot");
        if(i === 0) {
            dot.classList.add("dot--active");
        }
        dotsWrapper.appendChild(dot);
        dot.addEventListener("click", function (event) {
            feedbackWrapper.scrollLeft = itemWidth * i;
            let targetClassItem = event.currentTarget.classList;
            if (targetClassItem.contains("dot")) {
                let itemsClassActive = slider.querySelectorAll(".dot.dot--active");
                itemsClassActive.forEach(function (element) {
                    if(element !== event.currentTarget) {
                        element.classList.remove("dot--active");
                    }
                })
            }
            event.currentTarget.classList.add("dot--active");
        })
    }
}












