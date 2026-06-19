// Fade-in solo su elementi piccoli, non sui blocchi interi
const observer = new IntersectionObserver(
  (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
  { threshold: 0.06 }
);
document.querySelectorAll('.skill-item, .trait, .metric, .block-list li')
  .forEach(el => { el.classList.add('fade-up'); observer.observe(el); });

// Mobile nav
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');
burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  navLinks.classList.toggle('open');
});
document.querySelectorAll('.nav-links a').forEach(a =>
  a.addEventListener('click', () => {
    burger.classList.remove('open');
    navLinks.classList.remove('open');
  })
);
