/* historyStack.js — pilha de fotos que se sobrepõem e trocam, em "Nossa história" */
export function initHistoryStack(){
  const stack = document.getElementById('historiaStack');
  if(!stack) return;
  const photos = stack.querySelectorAll('.stack-photo');
  if(photos.length < 2) return;
  let current = 0;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(prefersReduced) return;
  setInterval(() => {
    photos[current].classList.remove('active');
    current = (current + 1) % photos.length;
    photos[current].classList.add('active');
  }, 2800);
}
