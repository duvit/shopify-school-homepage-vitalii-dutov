export function initProductCardSwiper() {
  const productCardSwiperRef = document.querySelector('.product-card-swiper');

  new Swiper(productCardSwiperRef, {
    pagination: false,
    slidesPerView: 3.5,
    spaceBetween: 16,
    breakpoints: {
      768: {
        direction: 'vertical',
        slidesPerView: 4,
        spaceBetween: 24,
      },
      1280: {
        direction: 'vertical',
        slidesPerView: 5,
        spaceBetween: 24,
      },
    },
    mousewheel: true,
  });
}
