import { login, loginFacebook } from '../../lib/authentication.js';
import { register } from '../../lib/register.js';

export const viewSignIn = () => {
  const viewSignInContainer = document.getElementById('page_container');
  viewSignInContainer.innerHTML = `
    <div id="containerSignIn">
      <form>
        <div id="modalSignIn">
          <h1>¡Únete a Lofche!</h1>
          <hr><br><br>
        
          <label for="name" class="text"><b>Nombre completo</b></label>
          <input type="text" id="name" placeholder="Lofche" name="name" required>
        
          <label for="email" class="text"><b>Correo Electrónico</b></label>
          <input type="text" id="email" placeholder="lofche@example.com" name="email" required>

          <label for="psw" class="text"><b>Contraseña</b></label>
          <input type="password" id ="password" placeholder="Ingresa Contraseña" name="psw" required>

          <div class="error" id="errorMessage"></div>

          <label for="psw" class="text"><b>Confirme su contraseña</b></label>
          <input type="password" id="repeat_password" placeholder="Ingresa Contraseña" name="psw" required>

          <div class="error" id="errorMessage"></div>

          <label class="textRegisterWith"><b>También puedes registrarte con:</b></label>

          <div id="registerWith">
            <button type="button" id="btngoogle">
              <img src="imagenes/google.png" alt="" class="social-media-logo" id="google">
            </button>
            <button type="button" id="btnFacebook">
              <img src="imagenes/facebook.png" alt="" class="social-media-logo" id="facebook">
            </button>
          </div>

          <div class="buttonNext">
            <button type="button" id="btnRegister" class="register">Registrar</button>
          </div>
        </div>
      </form>
    </div>`;

  const buttonRegister = viewSignInContainer.querySelector('#btnRegister');
  buttonRegister.addEventListener('click', async () => {
    //  const name = viewSignInContainer.querySelector('#name').value;
    const email = viewSignInContainer.querySelector('#email').value;
    const password = viewSignInContainer.querySelector('#password').value;
    //  const repeatPassword = viewSignInContainer.querySelector('#repeat_password').value;
    register(email, password);
  });

  const buttonGoogle = viewSignInContainer.querySelector('#btngoogle');
  buttonGoogle.addEventListener('click', async () => {
    login();
  });

  const buttonFacebook = viewSignInContainer.querySelector('#btnFacebook');
  buttonFacebook.addEventListener('click', async () => {
    loginFacebook();
  });
  return viewSignInContainer;
};
