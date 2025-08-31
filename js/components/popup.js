export function initPopUp() {
  const popup = document.getElementById('popup');
  const popupClose = document.getElementById('popupClose');
  const popupForm = document.getElementById('popupForm');
  let popupClosed = window.localStorage.getItem('popupClosed') === 'true';

  setTimeout(() => {
    if (!popupClosed) {
      popup.classList.add('show');
      document.body.classList.toggle('no-scroll');
    }
  }, 1000);

  function closePopup() {
    popup.classList.remove('show');
    popupClosed = true;
    document.body.classList.remove('no-scroll');
  }

  popupClose.addEventListener('click', closePopup);

  popupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    window.localStorage.setItem('popupClosed', true);
    alert('Thank you!');
    closePopup();
  });
}
