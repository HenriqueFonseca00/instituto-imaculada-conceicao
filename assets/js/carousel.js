/* carousel.js — carrossel automático de depoimentos */
export function initCarousel(){
  const slides = document.querySelectorAll('.slide');
  const dotsWrap = document.getElementById('carouselDots');
  let current = 0;
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', 'Ver depoimento ' + (i+1));
    dot.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(dot);
  });
  const dots = dotsWrap.querySelectorAll('.dot');
  function goTo(i){
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = i;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }
  let carouselTimer = setInterval(() => goTo((current + 1) % slides.length), 5000);
  document.querySelector('.carousel').addEventListener('mouseenter', () => clearInterval(carouselTimer));
  document.querySelector('.carousel').addEventListener('mouseleave', () => {
    carouselTimer = setInterval(() => goTo((current + 1) % slides.length), 5000);
  });
}
