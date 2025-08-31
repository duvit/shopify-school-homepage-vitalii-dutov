export function initHeroSwiper() {
  const heroSwiperRef = document.querySelector('.hero-swiper');

  new Swiper(heroSwiperRef, {
    loop: true,
    autoplay: {
      delay: 4000,
    },
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      bulletActiveClass: 'hero-swiper-pagination-bullet-active',
      bulletClass: 'hero-swiper-pagination-bullet',
    },
  });
}
