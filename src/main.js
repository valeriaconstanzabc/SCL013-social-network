// import firebaseConfig from './firebase-init.js'
import { viewWelcome } from './Views/Pages/Welcome.js';
import { viewFooter } from './Views/Components/Footer.js';
import { viewHeader } from './Views/Components/Header.js';
import { viewSignIn } from './Views/Pages/SignIn.js';
import { viewForm } from './Views/Pages/Form.js';
// eslint-disable-next-line no-console
console.log('holi');


window.onload = () => {
  viewForm();
};