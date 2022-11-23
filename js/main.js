/* hamb */
const hamburger = document.querySelector('.hamb');
const menuWrapper = document.querySelector('.wrapper-menu');

hamburger.addEventListener('click', function() {
  menuWrapper.classList.toggle('show-menu');
  menuWrapper.classList.toggle('offcanvas');
  hamburger.classList.toggle('invert');
})

/* menu */
const dropMenuItems = document.querySelectorAll('.dropdown-menu__item');

for (const drop of dropMenuItems) {
  drop.addEventListener('click', function(event) {
    event.stopPropagation();
    const massItems = event.currentTarget.classList;
    if (massItems.contains('dropdown-menu__item')) {
      const dropMenuItemsActive = document.querySelectorAll('.dropdown-menu__item.active');
      dropMenuItemsActive.forEach(function(element) {
        const currentTargetSubMenu = event.currentTarget.querySelectorAll('.dropdown-menu__content-inner');
        if (element !== event.currentTarget && !currentTargetSubMenu) {
          element.classList.remove('active');
        }
      })
      event.currentTarget.classList.toggle('active');
    }
  })
}

/* slider */
const sliders = document.querySelectorAll('.slider');
sliders.forEach(function(element) {
  runSlider(element);
})

function runSlider(slider) {
  const dotsWrapper = slider.querySelector('.slider__dots');
  const itemWidth = slider.querySelector('.slider__item').clientWidth;
  const itemLength = slider.querySelectorAll('.slider__item').length;
  const feedbackWrapper = slider.querySelector('.slider__wrapper');
  const feedbackWrapperWidth = slider.querySelector('.slider__wrapper').clientWidth;
  const countItem = feedbackWrapperWidth / itemWidth;
  const countVisibleItem = Math.floor(countItem);

  const dotLength = itemLength - (countVisibleItem - 1);
  for (let i = 0; i < dotLength; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === 0) {
      dot.classList.add('dot--active');
    }
    dotsWrapper.appendChild(dot);
    dot.addEventListener('click', function(event) {
      feedbackWrapper.scrollLeft = itemWidth * i;
      const targetClassItem = event.currentTarget.classList;
      if (targetClassItem.contains('dot')) {
        const itemsClassActive = slider.querySelectorAll('.dot.dot--active');
        itemsClassActive.forEach(function(element) {
          if (element !== event.currentTarget) {
            element.classList.remove('dot--active');
          }
        })
      }
      event.currentTarget.classList.add('dot--active');
    })
  }
}
