import Swiper from 'swiper';

const mySwiper = new Swiper ('.swiper-container', {
  
  slidesPerView: 4,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 10,
  },
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

export default mySwiper;