const plusElementModal = document.querySelectorAll('.collection-block__popup');
const visibleCardProduct = document.querySelector('.collection-block__position');

const clickPopUpFunction = () => {

  plusElementModal.forEach((item) => {
    item.addEventListener('click', (evt) => {
      evt.preventDefault();
      item.classList.toggle('collection-block__popup--opened');
      visibleCardProduct.classList.toggle('collection-block__position--opened');
    });
  });
}

clickPopUpFunction();
