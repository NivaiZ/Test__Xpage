const clickDropDown = document.querySelector('.header-block__down');
const clickHeaderDropdown = document.querySelectorAll('.header-bottom__link');
const dropDownNone = document.querySelector('.header-bottom__dropdown');
const dropDownLevel = document.querySelector('.header-bottom__level');
const hoverCardMenu = document.querySelector('.header-bottom__level--items');
const hoverCardFigure = document.querySelector('.header-bottom__level--figure');

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

const clickHeaderDropdownFunction = () => {

  clickHeaderDropdown.forEach((item) => {
    item.addEventListener('click', (evt) => {
      evt.preventDefault();
      item.classList.toggle('header-bottom__link--open');
      dropDownNone.classList.toggle('header-bottom__dropdown--block');
    });
  });

}

clickHeaderDropdownFunction();

const eventOverClassFunction = () => {
  hoverCardMenu.addEventListener('mouseover', (event) => {
    event.preventDefault();
    hoverCardFigure.classList.add('header-bottom__level--bowl');
  });
};

const eventMouseoutClassFunction = () => {
  hoverCardMenu.addEventListener('mouseout', (event) => {
    event.preventDefault();
    hoverCardFigure.classList.remove('header-bottom__level--bowl');
  });
};

eventOverClassFunction();
eventMouseoutClassFunction();
