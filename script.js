// Scroll-based fade-in
const observer = new IntersectionObserver(
  (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
  { threshold: 0.12 }
);
document.querySelectorAll('.card, .skill-card, .trait, .about-text p, .case-list li, .result-item')
  .forEach(el => { el.classList.add('fade-up'); observer.observe(el); });

// Mobile nav toggle
const burger = document.querySelector('.nav-burger');
const links = document.querySelector('.nav-links');
burger.addEventListener('click', () => links.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));

// Nav scroll shrink
window.addEventListener('scroll', () => {
  document.querySelector('.nav').style.padding = window.scrollY > 40 ? '10px 40px' : '16px 40px';
});

// Animated counter for hero stats
function animateCount(el, target, suffix = '', duration = 1200) {
  const start = performance.now();
  const update = (now) => {
    const t = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - t, 3);
    el.textContent = (target > 100 ? Math.floor(ease * target) : Math.floor(ease * target)) + suffix;
    if (t < 1) requestAnimationFrame(update);
    else el.textContent = target + suffix;
  };
  requestAnimationFrame(update);
}

const heroObserver = new IntersectionObserver(([entry]) => {
  if (entry.isIntersecting) {
    heroObserver.disconnect();
    setTimeout(() => {
      document.querySelectorAll('.stat-num').forEach(el => {
        const text = el.textContent;
        if (text.includes('+650')) { el.textContent = '+0%'; animateCount(el, 650, '%'); el.textContent = '+650%'; }
      });
    }, 400);
  }
}, { threshold: 0.5 });
const heroStats = document.querySelector('.hero-stats');
if (heroStats) heroObserver.observe(heroStats);
