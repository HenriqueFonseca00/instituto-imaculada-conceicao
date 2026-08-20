/* main.js — ponto de entrada: importa e inicializa todos os módulos do site */
import { initHeader } from './header.js';
import { initParallax } from './parallax.js';
import { initReveal } from './reveal.js';
import { initFaq } from './faq.js';
import { initCarousel } from './carousel.js';
import { initForm } from './form.js';
import { initHeroCarousel } from './heroCarousel.js';
import { initHistoryStack } from './historyStack.js';

initHeader();
initParallax();
initReveal();
initFaq();
initCarousel();
initForm();
initHeroCarousel();
initHistoryStack();
