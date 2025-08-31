import { initPopUp } from './components/popup.js';
import { initBurgerMenu } from './components/burgerMenu.js';
import { initHeroSwiper } from './components/heroSwiper.js';
import { initFeaturesSwiper } from './components/featuresSwiper.js';
import { initAccordion } from './components/accordion.js';
import { initProductPage } from './productPage.js';
import { initProductCardSwiper } from './components/productCardSwiper.js';
import { initHelpForm } from './components/helpForm.js';

document.addEventListener('DOMContentLoaded', () => {
  initPopUp();
  initBurgerMenu();
  initHeroSwiper();
  initFeaturesSwiper();
  initAccordion();
  initProductPage();
  initProductCardSwiper();
  initHelpForm();
});
