import Swiper from 'swiper';

const mySwiper = new Swiper ('.swiper-container', {
  
  slidesPerView: 4,
  pagination: {
    el: '.swiper-pagination',
  },
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

export default mySwiper;