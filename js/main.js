document.addEventListener('DOMContentLoaded', () => {

  const hero = document.querySelector('.hero');
  const heroSlides = Array.from(document.querySelectorAll('.hero-slide'));
  const heroDots = Array.from(document.querySelectorAll('.hero-carousel-dot'));
  const heroControls = document.querySelector('.hero-carousel-controls');

  if (hero && heroSlides.length > 1 && heroControls) {
    let activeSlide = 0;
    let carouselTimer;
    let pointerStartX = null;

    function showHeroSlide(index) {
      activeSlide = (index + heroSlides.length) % heroSlides.length;
      heroSlides.forEach((slide, slideIndex) => {
        const isActive = slideIndex === activeSlide;
        slide.classList.toggle('is-active', isActive);
        slide.setAttribute('aria-hidden', String(!isActive));
      });
      heroDots.forEach((dot, dotIndex) => {
        const isActive = dotIndex === activeSlide;
        dot.classList.toggle('is-active', isActive);
        dot.setAttribute('aria-pressed', String(isActive));
      });
    }

    function restartHeroTimer() {
      window.clearInterval(carouselTimer);
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!reduceMotion && !document.hidden && !hero.matches(':hover') && !hero.contains(document.activeElement)) {
        carouselTimer = window.setInterval(() => showHeroSlide(activeSlide + 1), 5000);
      }
    }

    heroControls.addEventListener('click', event => {
      const stepButton = event.target.closest('[data-carousel-step]');
      const slideButton = event.target.closest('[data-carousel-slide]');
      if (stepButton) {
        showHeroSlide(activeSlide + Number(stepButton.dataset.carouselStep));
        restartHeroTimer();
      } else if (slideButton) {
        showHeroSlide(Number(slideButton.dataset.carouselSlide));
        restartHeroTimer();
      }
    });

    hero.addEventListener('mouseenter', () => window.clearInterval(carouselTimer));
    hero.addEventListener('mouseleave', restartHeroTimer);
    hero.addEventListener('focusin', () => window.clearInterval(carouselTimer));
    hero.addEventListener('focusout', event => {
      if (!hero.contains(event.relatedTarget)) restartHeroTimer();
    });
    hero.addEventListener('pointerdown', event => {
      if (event.pointerType === 'touch') pointerStartX = event.clientX;
    });
    hero.addEventListener('pointerup', event => {
      if (pointerStartX === null) return;
      const swipeDistance = event.clientX - pointerStartX;
      pointerStartX = null;
      if (Math.abs(swipeDistance) > 45) {
        showHeroSlide(activeSlide + (swipeDistance < 0 ? 1 : -1));
        restartHeroTimer();
      }
    });
    hero.addEventListener('pointercancel', () => {
      pointerStartX = null;
    });
    document.addEventListener('visibilitychange', restartHeroTimer);
    window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', restartHeroTimer);

    restartHeroTimer();
  }

  const scrollProgress = document.getElementById('scrollProgress');
  if (scrollProgress) {
    let progressUpdatePending = false;

    function updateScrollProgress() {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
      scrollProgress.style.transform = `scaleX(${Math.min(1, Math.max(0, progress))})`;
      progressUpdatePending = false;
    }

    function scheduleProgressUpdate() {
      if (progressUpdatePending) return;
      progressUpdatePending = true;
      window.requestAnimationFrame(updateScrollProgress);
    }

    window.addEventListener('scroll', scheduleProgressUpdate, { passive: true });
    window.addEventListener('resize', scheduleProgressUpdate);
    updateScrollProgress();
  }

  const mobileActionBar = document.getElementById('mobileActionBar');
  if (hero && mobileActionBar) {
    const mobileViewport = window.matchMedia('(max-width: 768px)');
    let heroIsVisible = hero.getBoundingClientRect().bottom > 0 && hero.getBoundingClientRect().top < window.innerHeight;

    function updateMobileActionBar() {
      const shouldShow = mobileViewport.matches && !heroIsVisible;
      mobileActionBar.classList.toggle('is-visible', shouldShow);
      document.body.classList.toggle('mobile-actions-visible', shouldShow);
    }

    if ('IntersectionObserver' in window) {
      const heroObserver = new IntersectionObserver(entries => {
        heroIsVisible = entries[0].isIntersecting;
        updateMobileActionBar();
      });
      heroObserver.observe(hero);
    } else {
      window.addEventListener('scroll', () => {
        heroIsVisible = hero.getBoundingClientRect().bottom > 0;
        updateMobileActionBar();
      }, { passive: true });
    }

    mobileViewport.addEventListener('change', updateMobileActionBar);
    updateMobileActionBar();
  }

  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('open');
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navMenu.classList.remove('open');
    });
  });

  const navbar = document.getElementById('navbar');

  function handleNavbarScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  handleNavbarScroll();

  const sections = document.querySelectorAll('.section, .hero');
  const navLinks = document.querySelectorAll('.nav-link');

  function highlightNav() {
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const id = section.getAttribute('id');
      const top = section.offsetTop;
      const height = section.offsetHeight;

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNav, { passive: true });
  highlightNav();

  const animatedElements = document.querySelectorAll(
    '.fade-in, .fade-in-left, .fade-in-right'
  );

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    animatedElements.forEach(el => observer.observe(el));

    window.galleryObserver = observer;
  } else {
    animatedElements.forEach(el => el.classList.add('visible'));
  }

});
