import { logIn } from '../../lib/register.js';
import { hiddenPassword } from '../Components/Others.js';

export const viewLogIn = () => {
  const viewSignInContainer = document.getElementById('page_container');
  viewSignInContainer.innerHTML = `
  <div id="containerLogIn">
    <form>
      <div id="modalLogIn">
        <h1>Iniciar Sesión</h1>
        <hr><br><br>
    
        <label for="email" class="text"><b>Correo Electrónico</b></label>
        <input type="text" id="email_login" placeholder="lofche@example.com" name="email" required>
    
        <label for="psw" class="text"><b>Contraseña</b></label>
        <div class="containerPassword">
            <input type="password" id="password_login" class="password" placeholder="Ingresa Contraseña" name="psw" required>
            <span type="button" class="passwordHidden"><img src="imagenes/ojo.png" class="eyePassword"></span>
        </div>
        
        <div class="error" id="errorMessage"></div>

        <div class="buttonNext">
            <button type="button" id="next_button" class="next">Siguiente</button>
        </div>

        <label>¿No tienes cuenta?</label>
        <a href="#/registrar">
          <label id="registerHere"><b><u>Regístrate aquí</u></b></label>
        </a>
      </div>
    </form>
  <div>`;

  const buttonLogin = viewSignInContainer.querySelector('#next_button');
  const passwordHidden = viewSignInContainer.querySelector('.passwordHidden');

  // ------------EVENTO PARA INICIAR SESIÓN------------------------------------------->
  buttonLogin.addEventListener('click', async () => {
    const emailLogin = viewSignInContainer.querySelector('#email_login').value;
    const passwordLogin = viewSignInContainer.querySelector('#password_login').value;
    logIn(emailLogin, passwordLogin);
  });

  // ------------EVENTO PARA ESCONDER CONTRASEÑA--------------------------------------->
  passwordHidden.addEventListener('click', async () => {
    hiddenPassword();
  });

  return viewSignInContainer;
};
