import { viewWelcome } from './Views/Pages/Welcome.js';
import { changeRoute } from './lib/router.js';

// ------------FUNCIÓN DE INICIO QUE CARGA LA PÁGINA-------------------------------------->
const init = () => {
  window.onload = () => { viewWelcome(); };
  window.addEventListener('hashchange', () => {
    changeRoute(window.location.hash);
  });
};

window.addEventListener('load', init());
