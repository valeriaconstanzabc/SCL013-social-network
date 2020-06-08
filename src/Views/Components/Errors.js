export const viewLoginError = () => {
  const errorContainer = document.getElementById('errorMessage');
  errorContainer.innerHTML = `
    <span class="errorText">* Tu usuario o tu contraseña son inválidos.
     Vuelve a intentarlo</span>`;

  return errorContainer;
};
