export const viewWelcome = () => {
  const divContainer = document.getElementById('container');
  divContainer.innerHTML += `
  <header id="header">
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
  </header>

  <main id="main"></main>

  <footer id="footer">
    <div id="logoFooter">
      <img src="imagenes/logo.png" alt="" id="imgFooter">
    </div>
    <div id="copyright">
      <p>© Copyright by Lofche | 2020.</p>
    </div>
    <div class="social-media">
      <img src="imagenes/facebook.png" alt="" id="socialMedia1">
    </div>
    <div class="social-media">
      <img src="imagenes/instagram.png" alt="" id="socialMedia2">
    </div>
    <div class="social-media">
      <img src="imagenes/twitter.png" alt="" id="socialMedia3">
    </div>
  </footer>`;
};
