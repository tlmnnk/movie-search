import Swiper from 'swiper';

const mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 4,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 10,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

export default mySwiper;
