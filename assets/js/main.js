// Nanami's Secret Base - Main JavaScript

document.addEventListener('DOMContentLoaded', () => {

  // ---- Hamburger Menu ----
  const hamburger = document.getElementById('hamburger');
  const mainNav   = document.getElementById('mainNav');

  if (hamburger && mainNav) {
    hamburger.addEventListener('click', () => {
      mainNav.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', mainNav.classList.contains('open'));
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !mainNav.contains(e.target)) {
        mainNav.classList.remove('open');
      }
    });
  }

  // ---- Scroll-based header shadow ----
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.style.boxShadow = '0 4px 20px rgba(44, 62, 107, 0.15)';
      } else {
        header.style.boxShadow = '0 2px 8px rgba(44, 62, 107, 0.08)';
      }
    });
  }

  // ---- Fade-in on scroll (Intersection Observer) ----
  const fadeEls = document.querySelectorAll('.section, .news-item, .store-item, .join-benefit');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity    = '1';
        entry.target.style.transform  = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  fadeEls.forEach(el => {
    el.style.opacity   = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // ---- Active nav link highlight ----
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

});
