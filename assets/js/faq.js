/* faq.js — acordeão de perguntas frequentes */
export function initFaq(){
  // ===== FAQ ACCORDION =====
  document.querySelectorAll('.faq-item').forEach(item => {
    const btn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(openItem => {
        if(openItem !== item){
          openItem.classList.remove('open');
          openItem.querySelector('.faq-question').setAttribute('aria-expanded','false');
          openItem.querySelector('.faq-answer').style.maxHeight = null;
        }
      });
      if(isOpen){
        item.classList.remove('open');
        btn.setAttribute('aria-expanded','false');
        answer.style.maxHeight = null;
      } else {
        item.classList.add('open');
        btn.setAttribute('aria-expanded','true');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
}
