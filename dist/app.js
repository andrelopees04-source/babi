document.documentElement.classList.add('js');

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !reducedMotion) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  reveals.forEach(el => observer.observe(el));
} else {
  reveals.forEach(el => el.classList.add('visible'));
}

const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
function closeMenu() {
  menu.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-label', 'Abrir menu');
  nav.classList.remove('open');
}
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  nav.classList.toggle('open', open);
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
document.addEventListener('click', e => {
  if (!e.target.closest('.nav-wrap')) closeMenu();
});
window.matchMedia('(min-width: 701px)').addEventListener('change', closeMenu);

const serviceItems = [...document.querySelectorAll('.service-item')];
const serviceImage = document.getElementById('service-image');
let imageTimer;
serviceItems.forEach(item => item.addEventListener('toggle', () => {
  if (!item.open) return;
  serviceItems.forEach(other => { if (other !== item) other.open = false; });
  clearTimeout(imageTimer);
  serviceImage.classList.add('switching');
  imageTimer = setTimeout(() => {
    serviceImage.src = `assets/${item.dataset.image}`;
    serviceImage.alt = item.dataset.alt;
    serviceImage.classList.remove('switching');
  }, reducedMotion ? 0 : 180);
}));

const filterButtons = [...document.querySelectorAll('[data-filter]')];
const cards = [...document.querySelectorAll('.portfolio-card')];
const grid = document.querySelector('.portfolio-grid');
filterButtons.forEach(button => button.addEventListener('click', () => {
  const category = button.dataset.filter;
  filterButtons.forEach(other => other.setAttribute('aria-pressed', String(other === button)));
  grid.classList.toggle('is-filtered', category !== 'all');
  let count = 0;
  cards.forEach(card => {
    const visible = category === 'all' || card.dataset.category === category;
    card.hidden = !visible;
    if (visible) { count++; card.classList.add('visible'); }
  });
  document.getElementById('filter-status').textContent = `${count} ${count === 1 ? 'resultado' : 'resultados'}`;
}));

const dialog = document.querySelector('.lightbox');
const dialogImage = document.getElementById('lightbox-image');
document.querySelectorAll('.portfolio-photo').forEach(button => button.addEventListener('click', () => {
  dialogImage.src = `assets/${button.dataset.image}`;
  dialogImage.alt = button.querySelector('img').alt;
  document.getElementById('lightbox-title').textContent = button.dataset.title;
  document.getElementById('lightbox-source').href = button.dataset.source;
  dialog.showModal();
  document.body.classList.add('modal-open');
}));
document.querySelector('.lightbox-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
dialog.addEventListener('close', () => document.body.classList.remove('modal-open'));
document.getElementById('year').textContent = new Date().getFullYear();
