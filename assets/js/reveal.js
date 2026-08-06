/* reveal.js — reveal on scroll (IntersectionObserver) e contadores animados */
export function initReveal(){
  // ===== REVEAL ON SCROLL =====
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {threshold:.15});
  revealEls.forEach(el => revealObserver.observe(el));

  // ===== COUNT-UP =====
  const counters = document.querySelectorAll('.count');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        const el = entry.target;
        const target = parseInt(el.dataset.target, 10);
        const duration = 1600;
        const start = performance.now();
        function tick(now){
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.floor(eased * target);
          if(progress < 1){ requestAnimationFrame(tick); } else { el.textContent = target; }
        }
        requestAnimationFrame(tick);
        counterObserver.unobserve(el);
      }
    });
  }, {threshold:.5});
  counters.forEach(el => counterObserver.observe(el));
}
