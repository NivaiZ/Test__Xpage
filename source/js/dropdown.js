const clickDropDown = document.querySelector('.header-block__down');

const clickDropDownFunction = () => {

  clickDropDown.addEventListener('click', (event) => {
    event.preventDefault();
    const clickDropMenu = document.querySelector('.header-block__submenu');
    if (clickDropDown) {
      clickDropDown.classList.toggle('header-block__down--opened');
      clickDropMenu.classList.toggle('header-block__submenu--opened');
    }
  });
}
clickDropDownFunction();


const clickHeaderDropdown = document.querySelectorAll('.header-bottom__link');
const dropDownNone = document.querySelector('.header-bottom__dropdown');
const dropDownLevel = document.querySelector('.header-bottom__level');
const clickHeaderDropdownFunction = () => {

  clickHeaderDropdown.forEach((item) => {
    item.addEventListener('click', (evt) => {
      evt.preventDefault();
      item.classList.toggle('header-bottom__link--open');
      dropDownNone.classList.toggle('header-bottom__dropdown--block');
      dropDownLevel.classList.toggle('header-bottom__level--block');
    });
  });
}
clickHeaderDropdownFunction();
