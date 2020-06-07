export const viewFooter = () => {
  const footerContainer = document.getElementById('footer_container');
  footerContainer.innerHTML = `
    <div id="footer">
      <div id="logoFooter">
        <img src="imagenes/Logo.png" alt="logo-lofche" id="imgFooter">
      </div>
      <div id="copyright">
        <p>© Copyright by Lofche | 2020.</p>
      </div>
      <div id="containerSocialMedia">
        <div class="social-media">
          <a href="https://www.facebook.com/">
            <img src="imagenes/facebook.png" alt="" id="socialMedia1">
          </a>
        </div>

        <div class="social-media">
          <a href="https://www.instagram.com/">
            <img src="imagenes/instagram.png" alt="" id="socialMedia2">
          </a>
        </div>

        <div class="social-media">
          <a href="https://twitter.com/">
            <img src="imagenes/twitter.png" alt="" id="socialMedia3">
          </a>
        </div>
      </div>
    </div>`;

  return footerContainer;
};
