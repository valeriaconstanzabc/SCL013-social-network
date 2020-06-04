// import firebaseConfig from './firebase-init.js'
import { viewWelcome } from './Views/Pages/Welcome.js';
//  import { viewSignIn } from './Views/Pages/SignIn.js';
//  import { viewForm } from './Views/Pages/Form.js';
import { changeRoute } from './lib/router.js';


/*  window.onload = () => {
  viewWelcome();
};  */

const init = () => {
  //  document.getElementById('page-container').innerHTML = viewWelcome();
  window.onload = () => { viewWelcome(); };
  window.addEventListener('hashchange', () => {
    changeRoute(window.location.hash);
  });
};

window.addEventListener('load', init());
