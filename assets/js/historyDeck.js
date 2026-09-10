/* historyDeck.js — pilha de fotos: a foto da frente fica 10s, depois vai pro fim da fila */
export function initHistoryDeck(){
  const deck = document.getElementById('historiaDeck');
  if(!deck) return;
  const photos = Array.from(deck.querySelectorAll('.deck-photo'));
  if(photos.length < 2) return;

  const positions = [
    {top:'0px',   scale:1,   rotate:-1.5, z:6, opacity:1},
    {top:'-14px', scale:.97, rotate:1,    z:5, opacity:1},
    {top:'-26px', scale:.94, rotate:-2,   z:4, opacity:1},
    {top:'-36px', scale:.91, rotate:1.5,  z:3, opacity:1},
    {top:'-44px', scale:.88, rotate:-1,   z:2, opacity:.92},
  ];

  let order = photos.map((_, i) => i);

  function render(){
    order.forEach((photoIndex, posIndex) => {
      const p = positions[posIndex] || positions[positions.length - 1];
      const el = photos[photoIndex];
      el.style.top = p.top;
      el.style.transform = `translateX(-50%) scale(${p.scale}) rotate(${p.rotate}deg)`;
      el.style.zIndex = p.z;
      el.style.opacity = p.opacity;
    });
  }
  render();

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(prefersReduced) return;

  setInterval(() => {
    order.push(order.shift());
    render();
  }, 10000);
}
