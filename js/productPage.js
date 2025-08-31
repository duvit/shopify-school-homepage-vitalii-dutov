import { productsForDetails } from './data.js';

const mainImage = document.querySelector('.main-image');
const productCardTrack = document.querySelector('.product-card-swiper-wrapper');
const productTitle = document.querySelector('.product-card__info-title');
const priceEl = document.getElementById('price');
const colorsContainer = document.querySelector('.product-card__info-colors');
const sizesContainer = document.querySelector('.product-card__info-sizes');
let activeVariation = productsForDetails.variations[0];

export function initProductPage() {
  initSlider();
  initColorVariations();
  initSizeBtns();
  renderProduct(activeVariation);
}

function initSlider() {
  productCardTrack.addEventListener('click', (e) => {
    const clickedThumb = e.target.closest('.thumb');
    if (clickedThumb) {
      const index = parseInt(clickedThumb.dataset.index);
      mainImage.src = activeVariation.images[index].src;
      mainImage.alt = activeVariation.images[index].alt;

      document
        .querySelectorAll('.thumb')
        .forEach((t) => t.classList.remove('active'));
      clickedThumb.classList.add('active');
    }
  });
}

function initColorVariations() {
  colorsContainer.addEventListener('click', (e) => {
    const clickedColor = e.target.closest('.color-container');
    if (clickedColor) {
      const index = parseInt(clickedColor.dataset.index);
      activeVariation = productsForDetails.variations[index];
      renderProduct(activeVariation);
    }
  });
}

function initSizeBtns() {
  sizesContainer.addEventListener('click', (e) => {
    const clickedBtn = e.target.closest('button');
    if (clickedBtn) {
      sizesContainer.querySelectorAll('button').forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      clickedBtn.classList.add('active');
      clickedBtn.setAttribute('aria-selected', 'true');
      sizesContainer.dataset.selectedSize = clickedBtn.dataset.size;
    }
  });
}

function renderProduct(variation) {
  productTitle.innerText = productsForDetails.title;

  let swiperSlides = '';
  variation.images.forEach((img, idx) => {
    swiperSlides += `
      <div class="swiper-slide product-card-swiper-slide">
        <img src="${img.src}" alt="${img.alt}" class="thumb ${idx === 0 ? 'active' : ''}" data-index="${idx}">
      </div>
    `;
  });
  productCardTrack.innerHTML = swiperSlides;
  mainImage.src = variation.images[0].src;
  mainImage.alt = variation.images[0].alt;

  let colorsHTML = '';
  productsForDetails.variations.forEach((v, idx) => {
    colorsHTML += `
      <div class="color-container ${v.color === variation.color ? 'active' : ''}" data-index="${idx}">
        <img class="color-img" src="${v.images[0].src}" alt="Вибрати колір ${v.color}">
      </div>
    `;
  });
  colorsContainer.innerHTML = colorsHTML;

  let sizesHTML = '';
  variation.sizes.forEach((size, idx) => {
    sizesHTML += `
      <button class="product-card__size-btn ${idx === 0 ? 'active' : ''}" 
              data-size="${size}" 
              aria-label="Вибрати розмір ${size}" 
              aria-selected="${idx === 0 ? 'true' : 'false'}">
        ${size}
      </button>
    `;
  });
  sizesContainer.innerHTML = sizesHTML;

  priceEl.textContent = `${variation.price}`;
}
