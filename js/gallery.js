(function () {
  'use strict';

  const grid = document.getElementById('galleryGrid');
  if (!grid) return;

  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightboxImg');
  const lbCaption = document.getElementById('lightboxCaption');
  const lbClose = document.getElementById('lightboxClose');
  const lbPrev = document.getElementById('lightboxPrev');
  const lbNext = document.getElementById('lightboxNext');
  if (!lightbox) return;

  const items = Array.from(grid.querySelectorAll('.gallery-item'));
  let current = 0;

  function show(index) {
    current = index;
    const img = items[current].querySelector('img');
    if (!img) return;
    lbImg.src = img.src;
    lbImg.alt = img.alt;
    lbCaption.textContent = img.alt;
    lightbox.classList.add('active');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function hide() {
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    lbImg.src = '';
  }

  function prev() {
    show((current - 1 + items.length) % items.length);
  }

  function next() {
    show((current + 1) % items.length);
  }

  grid.addEventListener('click', function (e) {
    var item = e.target.closest('.gallery-item');
    if (!item || item.dataset.index === undefined) return;
    show(parseInt(item.dataset.index, 10));
  });

  lbClose.addEventListener('click', hide);
  lbPrev.addEventListener('click', prev);
  lbNext.addEventListener('click', next);

  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) hide();
  });

  document.addEventListener('keydown', function (e) {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') hide();
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  });
})();
