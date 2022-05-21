import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'

const swiper = new Swiper('.swiper.page-main__swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper__point--img',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
  },
});

const swiperCollection = new Swiper('.swiper.collection-block__swiper', {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next--collection',
    prevEl: '.swiper-button-prev--collection',
  },
});
