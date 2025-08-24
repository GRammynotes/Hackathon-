// Theme toggle and persisted preference
(function initTheme() {
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  if (saved) root.setAttribute('data-theme', saved);
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-action="toggle-theme"]');
    if (!btn) return;
    const current = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    const next = current === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
})();

// Smooth internal link scrolling offset-aware
(function initSmoothScroll() {
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const id = link.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    const y = el.getBoundingClientRect().top + window.scrollY - 70;
    window.scrollTo({ top: y, behavior: 'smooth' });
  });
})();

// Scroll reveal animations
(function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    }
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
})();

// Page transitions (fade)
(function initPageTransitions() {
  const fade = document.createElement('div');
  fade.style.position = 'fixed';
  fade.style.inset = '0';
  fade.style.pointerEvents = 'none';
  fade.style.background = 'linear-gradient(180deg, rgba(7,10,18,.85), rgba(7,10,18,.85))';
  fade.style.opacity = '0';
  fade.style.transition = 'opacity .35s ease';
  fade.style.zIndex = '9999';
  document.body.appendChild(fade);
  window.addEventListener('pageshow', () => requestAnimationFrame(() => fade.style.opacity = '0'));
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href]');
    if (!a) return;
    const url = new URL(a.href, location.href);
    if (url.origin !== location.origin) return;
    if (a.target === '_blank' || a.hasAttribute('download')) return;
    if (a.getAttribute('href').startsWith('#')) return;
    e.preventDefault();
    fade.style.opacity = '1';
    setTimeout(() => { location.href = a.href; }, 250);
  });
})();

