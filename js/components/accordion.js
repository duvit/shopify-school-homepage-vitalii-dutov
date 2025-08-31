export function initAccordion() {
  const accordionButtons = document.querySelectorAll('.accordion-btn');

  accordionButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const container = button.closest('.accordion-container');
      const isExpanded = container.classList.contains('active');

      document
        .querySelectorAll('.accordion-container.active')
        .forEach((item) => {
          if (item !== container) {
            item.classList.remove('active');
            item
              .querySelector('.accordion-btn')
              .setAttribute('aria-expanded', 'false');
          }
        });

      container.classList.toggle('active');
      button.setAttribute('aria-expanded', (!isExpanded).toString());
    });
  });
}
