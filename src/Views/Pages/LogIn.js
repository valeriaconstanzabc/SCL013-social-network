import { logIn } from '../../lib/register.js';

export const viewLogIn = () => {
  const viewSignInContainer = document.getElementById('page_container');
  viewSignInContainer.innerHTML = `
  <div class="main">
    <form>
      <div>
        <h1>Iniciar Sesión</h1>
        <hr>
    
        <label for="email"><b>Correo Electrónico</b></label>
        <input type="text" id="email_login" placeholder="lofche@example.com" name="email" required>
    
        <label for="psw"><b>Contraseña</b></label>
        <input type="password" id="password_login" placeholder="Ingresa Contraseña" name="psw" required>
    
        <div class="buttonNext">
          <button type="button" id="next_button" class="next">Siguiente</button>
        </div>

        <label>¿No tienes cuenta?</label>
        <a href="#/registrar">
          <label><b><u>Regístrate aquí</u></b></label>
        </a>
      </div>
    </form>
  <div>`;

  const buttonLogin = viewSignInContainer.querySelector('#next_button');
  buttonLogin.addEventListener('click', () => {
    const emailLogin = viewSignInContainer.querySelector('#email_login').value;
    const passwordLogin = viewSignInContainer.querySelector('#password_login').value;
    logIn(emailLogin, passwordLogin);
  });

  return viewSignInContainer;
};
