import { viewWelcome } from '../Views/Pages/Welcome.js';
import { viewLogIn } from '../Views/Pages/LogIn.js';
import { viewSignIn} from '../Views/Pages/SignIn.js';
import { viewFeed } from '../Views/Pages/Feed.js';

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
    default:
      pageContainer.innerHTML = '<h1>Página no existe uwu</h1>';
  }
};

export const changeRoute = (hash) => {
  if (hash === '#/') {
    showView(hash);
  } else if (hash === '#/iniciarSesion') {
    showView(hash);
  }else if (hash === '#/registrar') {
    showView(hash);
  }else if (hash === '#/feed') {
    showView(hash); 
  }else {
    showView(hash);
  }
};
