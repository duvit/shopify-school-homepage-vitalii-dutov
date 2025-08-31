export function initBurgerMenu() {
  const menuWrapper = document.querySelector('.menu-wrapper');
  const burgerToggle = document.querySelector('.burger');

  burgerToggle.addEventListener('click', (e) => {
    const isOpen = menuWrapper.classList.toggle('menu-open');
    document.body.classList.toggle('no-scroll');
    burgerToggle.setAttribute('aria-expanded', isOpen);
  });
}
