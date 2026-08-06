/* parallax.js — efeito parallax leve na foto de fundo do hero */
export function initParallax(){
  // ===== PARALLAX HERO =====
  const heroBg = document.getElementById('heroBg');
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(!prefersReduced){
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      heroBg.style.transform = `translateY(${y * 0.28}px)`;
    }, {passive:true});
  }
}
