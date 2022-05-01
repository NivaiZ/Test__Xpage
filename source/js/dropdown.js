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
