const clickBurgerMenu = document.querySelector('.header-block__burger');
const clickSideMenu = document.querySelector('.header-bottom__nav');
const clickClassSide = document.querySelector('.header-bottom__list--mobile');

const addClassFunction = () => {
  clickBurgerMenu.addEventListener('click', () => {
    clickBurgerMenu.classList.toggle('header-block__burger__btn--opened');
    clickSideMenu.classList.toggle('header-bottom__nav--mobile');
    clickClassSide.classList.toggle('header-bottom__list--mobile--opened');

  })

}
addClassFunction();
