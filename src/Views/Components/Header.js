export const viewHeader = () => {
  const headerContainer = document.getElementById('header_container');
  headerContainer.innerHTML = `
    <div id="header">
    <nav id="nav"> 
      <div id="headerLogo">
        <a href="#/">
          <img src="imagenes/Logo.png" alt="logo-lofche" id="logoHeader">
        </a>
      </div>
      <div id="divLogInButton">
        <a href="#/iniciarSesion">
          <button id="logInButton">Iniciar Sesión</button>
        </a> 
      </div>
    </nav>
  </div>`;

  return headerContainer;
};
