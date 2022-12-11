export const swiper = new Swiper(".swiper", {
  //init: false,

  slidesPerView: 4,
  loop: true,

  spaceBetween: 25,

  // autoplay: {
  //   delay: 3000,
  // },

  navigation: {
    nextEl: ".reviews__button-next",
    prevEl: ".reviews__button-prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    769: {
      slidesPerView: 3,
    },
  },
});
