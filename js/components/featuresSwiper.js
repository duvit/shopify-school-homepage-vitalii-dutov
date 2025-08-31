import { productsForFeatures } from '../data.js';

export function initFeaturesSwiper() {
  const featuresTrack = document.querySelector('.features__wrapper');

  productsForFeatures.forEach((product) => {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide features__slide';
    slide.innerHTML = `
      <img src="${product.image}" alt="${product.title}" class="features__img">
      <span class="features__img">${product.title}</span>
      <span class="features__price text-base">${product.price}</span>
    `;
    featuresTrack.appendChild(slide);
  });

  const featuresSwiperRef = document.querySelector('.features__swiper');

  new Swiper(featuresSwiperRef, {
    pagination: false,
    clickable: true,
    slidesPerView: 1.1,
    spaceBetween: 16,
    breakpoints: {
      768: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      1280: {
        navigation: {
          nextEl: '.features__button--next',
          prevEl: '.features__button--prev',
        },
        slidesPerView: 4,
        spaceBetween: 24,
      },
    },
  });
}
