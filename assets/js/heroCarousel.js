/* heroCarousel.js — carrossel automático das fotos de fundo do hero */
export function initHeroCarousel(){
  const slides = document.querySelectorAll('.hero-bg-slide');
  if(!slides.length) return;
  let current = 0;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(prefersReduced) return;
  setInterval(() => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 4500);
}
