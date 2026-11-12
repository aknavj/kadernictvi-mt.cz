(function () {
  'use strict';

  const dialog = document.getElementById('christmas-gift');
  if (!dialog) return;

  const previousFocus = document.activeElement;
  dialog.querySelector('.christmas-gift-close').addEventListener('click', () => {
    dialog.close();
  });
  dialog.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      event.preventDefault();
      dialog.close();
    }
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('christmas-gift-open');
    if (previousFocus instanceof HTMLElement && previousFocus !== document.body) {
      previousFocus.focus({ preventScroll: true });
    } else {
      document.querySelector('.nav-logo').focus({ preventScroll: true });
    }
  });

  dialog.showModal();
  document.body.classList.add('christmas-gift-open');
})();
