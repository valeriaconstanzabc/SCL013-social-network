export const viewSignIn = () => {
  const viewSignInContainer = document.getElementById('page_container');
  viewSignInContainer.innerHTML += `
    <form>
      <div>
        <h1>Iniciar Sesión</h1>
        <hr>
    
        <label for="email"><b>Correo Electrónico</b></label>
        <input type="text" placeholder="lofche@example.com" name="email" required>
    
        <label for="psw"><b>Contraseña</b></label>
        <input type="password" placeholder="Ingresa Contraseña" name="psw" required>
    
        <div class="buttonNext">
          <button type="button" class="siguiente">Siguiente</button>
        </div>

        <label>¿No tienes cuenta?</label>
        <a href="http://">
          <label><b><u>Regístrate aquí</u></b></label>
        </a>
      </div>
  </form>`;

  return viewSignInContainer;
};
