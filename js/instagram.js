(function () {
  'use strict';

  const GALLERY_JSON = 'data/gallery.json';
  const GALLERY_COUNT = 6;
  const INSTAGRAM_URL = 'https://www.instagram.com/kadernictvi.trinec';

  const grid = document.getElementById('galleryGrid');
  if (!grid) return;

  async function loadGallery() {
    try {
      const res = await fetch(GALLERY_JSON + '?t=' + Date.now());
      if (!res.ok) throw new Error('Gallery data not available');

      const data = await res.json();
      const posts = (data.posts || []).slice(0, GALLERY_COUNT);

      if (posts.length === 0) throw new Error('No posts');

      renderPosts(posts);
    } catch (err) {
      console.warn('Instagram gallery:', err.message);
      renderFallback();
    }
  }

  function renderPosts(posts) {
    grid.innerHTML = '';

    posts.forEach((post, index) => {
      const item = document.createElement('div');
      item.className = 'gallery-item fade-in';
      item.dataset.index = index;

      const imgSrc = post.thumbnail_url || post.media_url;
      const caption = post.caption
        ? post.caption.replace(/</g, '&lt;').substring(0, 120)
        : '';

      item.innerHTML = `
        <img src="${imgSrc}" alt="${caption || 'Instagram foto'}" loading="lazy">
        <div class="gallery-overlay">
          <p>${caption}</p>
          <span class="ig-badge">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </span>
        </div>
      `;

      grid.appendChild(item);
    });

    requestAnimationFrame(() => {
      document.querySelectorAll('.gallery-item.fade-in').forEach(el => {
        if (window.galleryObserver) {
          window.galleryObserver.observe(el);
        } else {
          el.classList.add('visible');
        }
      });
    });

    initLightbox(posts);
  }

  function renderFallback() {
    grid.innerHTML = '';
    for (let i = 1; i <= GALLERY_COUNT; i++) {
      const item = document.createElement('div');
      item.className = 'gallery-item fade-in';
      item.innerHTML = `
        <div class="gallery-placeholder">
          <span>📸</span><p>Foto ${i}</p>
        </div>
      `;
      grid.appendChild(item);
    }
    grid.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
  }

  function initLightbox(posts) {
    const lightbox = document.getElementById('lightbox');
    const lbImg = document.getElementById('lightboxImg');
    const lbCaption = document.getElementById('lightboxCaption');
    const lbClose = document.getElementById('lightboxClose');
    const lbPrev = document.getElementById('lightboxPrev');
    const lbNext = document.getElementById('lightboxNext');
    if (!lightbox) return;

    let current = 0;

    function show(index) {
      current = index;
      const post = posts[current];
      const src = post.media_url || post.thumbnail_url;
      lbImg.src = src;
      lbImg.alt = post.caption || 'Instagram foto';
      lbCaption.textContent = post.caption || '';
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
      show((current - 1 + posts.length) % posts.length);
    }

    function next() {
      show((current + 1) % posts.length);
    }

    grid.addEventListener('click', (e) => {
      const item = e.target.closest('.gallery-item');
      if (!item || item.dataset.index === undefined) return;
      show(parseInt(item.dataset.index, 10));
    });

    lbClose.addEventListener('click', hide);
    lbPrev.addEventListener('click', prev);
    lbNext.addEventListener('click', next);

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) hide();
    });

    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('active')) return;
      if (e.key === 'Escape') hide();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    });
  }

  loadGallery();
})();
