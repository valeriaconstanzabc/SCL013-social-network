import { login, loginFacebook } from '../../lib/authentication.js';
import { register } from '../../lib/register.js';

export const viewSignIn = () => {
  const viewSignInContainer = document.getElementById('page_container');
  viewSignInContainer.innerHTML = `
    <div id="containerSignIn">
      <form id="signInForm">
        <div id="modalSignIn">
          <h1>¡Únete a Lofche!</h1>
          <hr><br><br>
        
          <label for="name" class="text"><b>Nombre de usuario</b></label>
          <input type="text" id="name" placeholder="Lofche" name="name" required>
        
          <label for="email" class="text"><b>Correo Electrónico</b></label>
          <input type="text" id="email" placeholder="lofche@example.com" name="email" required>

          <label for="comuna" class="text"><b>Comuna a la perteneces</b></label>
          <input type="text" id="district" placeholder="Ejemplo: Puente alto" name="comuna" required>

          <label for="psw" class="text"><b>Contraseña</b></label>
          <input type="password" id ="password" placeholder="Ingresa Contraseña" name="psw" required>

          <div class="error" id="errorMessage"></div>

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
            <button type="submit" id="btnRegister" class="register">Registrar</button>
          </div>
        </div>
      </form>
    </div>`;

  const signInForm = viewSignInContainer.querySelector('#signInForm');
  //  const buttonRegister = signInForm.querySelector('#btnRegister');
  const name = viewSignInContainer.querySelector('#name');
  const email = viewSignInContainer.querySelector('#email');
  const district = viewSignInContainer.querySelector('#district');
  const password = viewSignInContainer.querySelector('#password');
  signInForm.addEventListener('submit', (event) => {
    event.preventDefault();
    register({
      name: name.value,
      email: email.value,
      district: district.value,
      password: password.value,
    });
    signInForm.reset();
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
