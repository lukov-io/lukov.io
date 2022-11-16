/* hamb */
const hamb = document.querySelector('.hamb');
const menuWrapper = document.querySelector('.wrapper-menu');

hamb.addEventListener('click', function() {
  menuWrapper.classList.toggle('show-menu');
  menuWrapper.classList.toggle('offcanvas');
  hamb.classList.toggle('invert');
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
