import { login } from '../../lib/authentication.js';
import { register } from '../../lib/register.js';

export const viewSignIn = () => {
  const viewSignInContainer = document.getElementById('page_container');
  viewSignInContainer.innerHTML = `
    <div id="containerSignIn">
    <form>
        <div>
          <h1>¡Únete a Lofche!</h1>
          <hr>
      
          <label for="name"><b>Nombre completo</b></label>
          <input type="text" id="name" placeholder="Lofche" name="name" required>
      
          <label for="email"><b>Correo Electrónico</b></label>
          <input type="text" id="email" placeholder="lofche@example.com" name="email" required>

          <label for="psw"><b>Contraseña</b></label>
          <input type="password" id ="password" placeholder="Ingresa Contraseña" name="psw" required>
      
          <label for="psw"><b>Confirme su contraseña</b></label>
          <input type="password" id="repeat_password" placeholder="Ingresa Contraseña" name="psw" required>

          <label><b>También puedes registrarte con:</b></label>

          <button type="button" id="btngoogle">
            <img src="imagenes/google.png" alt="" class="social-media-logo" id="google">
          </button>

          <div class="buttonNext">
            <button type="button" id="btnRegister" class="register">Registrar</button>
          </div>
        </div>
    </form>
    </div>`;

  const buttonRegister = viewSignInContainer.querySelector('#btnRegister');
  buttonRegister.addEventListener('click', () => {
    //  const name = viewSignInContainer.querySelector('#name').value;
    const email = viewSignInContainer.querySelector('#email').value;
    const password = viewSignInContainer.querySelector('#password').value;
    //  const repeatPassword = viewSignInContainer.querySelector('#repeat_password').value;
    register(email, password);
  });

  const buttonGoogle = viewSignInContainer.querySelector('#btngoogle');
  buttonGoogle.addEventListener('click', () => {
    login();
  });
  return viewSignInContainer;
};
