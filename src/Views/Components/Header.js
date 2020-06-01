export const viewHeader = () => {
  const headerContainer = document.getElementById('header_container');
  headerContainer.innerHTML += `
    <div id="header">
    <nav id="nav"> 
      <div id="headerLogo">
        <a href="http://">
          <img src="imagenes/logo.png" alt="" id="logoHeader">
        </a>
      </div>
      <div id="divLogInButton">
        <a href="http://">
          <button id="logInButton">Iniciar Sesión</button>
        </a> 
      </div>
    </nav>
  </div>`;
};
