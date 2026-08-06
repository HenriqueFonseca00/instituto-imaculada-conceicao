/* form.js — simulação de envio do formulário 'Agende sua visita' (protótipo, sem backend) */
export function initForm(){
  // ===== FORMULÁRIO - AGENDE SUA VISITA (simulação front-end) =====
  const leadForm = document.getElementById('leadForm');
  if(leadForm){
    leadForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if(!leadForm.checkValidity()){
        leadForm.reportValidity();
        return;
      }
      const submitBtn = leadForm.querySelector('.form-submit-btn');
      submitBtn.textContent = 'Enviando...';
      submitBtn.disabled = true;
      setTimeout(() => {
        leadForm.querySelector('.form-content').style.display = 'none';
        document.getElementById('formSuccess').classList.add('show');
      }, 700);
    });
  }
}
