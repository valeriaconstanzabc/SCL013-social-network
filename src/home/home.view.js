export const viewWelcome = () => { 
  `<header>
      <nav> 
        <div>
          <a href="http://">
            <img src="" alt="">
          </a>
        </div>
        <div>
          <a href="http://">
            <button>Iniciar Sesión</button>
          </a> 
        </div>
      </nav>
    </header>

    <footer>
      <div>
        <img src="" alt="">
      </div>
      <div>
        <p>© Copyright by Lofche | 2020.</p>
      </div>
      <div class="social-media">
        <img src="" alt="fb">
      </div>
      <div class="social-media">
        <img src="" alt="ig">
      </div>
      <div class="social-media">
        <img src="" alt="tw">
      </div>
    </footer>`
}

const divContainer = document.getElementById('container')
divContainer.innerHTML += viewWelcome


