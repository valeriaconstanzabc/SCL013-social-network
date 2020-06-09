export const viewLoginError = () => {
  const errorContainer = document.getElementById('errorMessage');
  errorContainer.innerHTML = `
    <span class="errorText">* Tu usuario o tu contraseña son inválidos.
     Vuelve a intentarlo</span>`;

  return errorContainer;
};

export const viewSignInError = () => {
  const errorContainer = document.getElementById('errorMessage');
  errorContainer.innerHTML = `
    <span class="errorText">* La contraseña debe tener al menos 6 caracteres.
     Vuelve a intentarlo</span>`;

  return errorContainer;
};

export const viewRedirecting = () => {
  const viewSignInContainer = document.getElementById('page_container');
  viewSignInContainer.innerHTML = `
    <div id="containerSignIn">
        <div id="modalSignInRedirecting">
          <p>Confirma el correo de verificación que hemos enviado a tu mail y ya podrás ser parte de la comunidad <strong>Lofche!</strong></p>
          <button type="button" id="btnRedirecting">¡VAMOS!</button>
        </div>
    </div>`;

  const btnRedirecting = viewSignInContainer.querySelector('#btnRedirecting');
  btnRedirecting.addEventListener('click', () => {
    window.location.reload();
  });

  return viewSignInContainer;
};
