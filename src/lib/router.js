import { viewWelcome } from '../Views/Pages/Welcome.js';
import { viewLogIn } from '../Views/Pages/LogIn.js';
import { viewSignIn } from '../Views/Pages/SignIn.js';
import { viewFeed } from '../Views/Pages/Feed.js';
import { viewProfile } from '../Views/Pages/Profile.js';
import { closing } from './register.js';
import { viewError } from '../Views/Pages/404.js';


const showView = (hash) => {
  const pageContainer = document.getElementById('page_container');
  viewWelcome();

  switch (hash) {
    case '#/':
      pageContainer.appendChild = viewWelcome();
      break;
    case '#/iniciarSesion':
      pageContainer.appendChild = viewLogIn();
      break;
    case '#/registrar':
      pageContainer.appendChild = viewSignIn();
      break;
    case '#/feed':
      pageContainer.appendChild = viewFeed();
      break;
    case '#/profile':
      pageContainer.appendChild = viewProfile();
      break;
    case '#/logout':
      closing();
      window.location.hash = '#/';
      break;
    default:
      pageContainer.appendChild = viewError();
  }
};

export const changeRoute = (hash) => {
  if (hash === '#/') {
    showView(hash);
  } else if (hash === '#/iniciarSesion') {
    showView(hash);
  } else if (hash === '#/registrar') {
    showView(hash);
  } else if (hash === '#/feed') {
    showView(hash);
  } else if (hash === '#/profile') {
    showView(hash);
  } else if (hash === '#/logout') {
    showView(hash);
  } else {
    showView(hash);
  }
};
