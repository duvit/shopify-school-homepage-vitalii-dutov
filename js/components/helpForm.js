export function initHelpForm() {
  const helpForm = document.querySelector('.help__form');
  helpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you!');
    helpForm.reset();
  });
}
