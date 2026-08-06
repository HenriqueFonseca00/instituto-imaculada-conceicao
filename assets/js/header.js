/* header.js — encolhe o header ao rolar e controla o menu mobile */
export function initHeader(){
  // ===== HEADER SCROLL SHRINK =====
  const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
  }, {passive:true});

  // ===== MOBILE MENU =====
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileNav = document.getElementById('mobileNav');
  const mobileNavClose = document.getElementById('mobileNavClose');
  const navOverlay = document.getElementById('navOverlay');
  function openMenu(){
    mobileNav.classList.add('open');
    navOverlay.classList.add('open');
    hamburgerBtn.classList.add('open');
    hamburgerBtn.setAttribute('aria-expanded','true');
  }
  function closeMenu(){
    mobileNav.classList.remove('open');
    navOverlay.classList.remove('open');
    hamburgerBtn.classList.remove('open');
    hamburgerBtn.setAttribute('aria-expanded','false');
  }
  hamburgerBtn.addEventListener('click', () => mobileNav.classList.contains('open') ? closeMenu() : openMenu());
  mobileNavClose.addEventListener('click', closeMenu);
  navOverlay.addEventListener('click', closeMenu);
  mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
}
