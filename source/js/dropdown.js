const clickDropDown = document.querySelector('.header-block__down');
const clickHeaderDropdown = document.querySelectorAll('.header-bottom__link');
const dropDownNone = document.querySelector('.header-bottom__dropdown');
const dropDownLevel = document.querySelector('.header-bottom__level');
const hoverCardMenu = document.querySelector('.header-bottom__level--items');
const hoverCardFigure = document.querySelector('.header-bottom__level--figure');
const accordionBtns = document.querySelectorAll('.page-footer__link--mobile');

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

const clickHeaderDropdownFunction = () => {

  clickHeaderDropdown.forEach((item) => {
    item.addEventListener('click', (evt) => {
      evt.preventDefault();
      item.classList.toggle('header-bottom__link--open');
      dropDownNone.classList.toggle('header-bottom__dropdown--block');
    });
  });

}

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

accordionBtns.forEach((accordion) => {

  accordion.onclick = function (event) {
    event.preventDefault();
    this.classList.toggle("is-open");

    let content = this.nextElementSibling;
    console.log(content);

    if (content.style.maxHeight) {
      //this is if the accordion is open
      content.style.maxHeight = null;
    } else {
      //if the accordion is currently closed
      content.style.maxHeight = content.scrollHeight + "px";
      console.log(content.style.maxHeight);
    }
  };
});

clickDropDownFunction();
clickHeaderDropdownFunction();
eventOverClassFunction();
eventMouseoutClassFunction();
