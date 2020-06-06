import { viewHeaderFeed } from '../Components/Header.js';
import { viewFooter } from '../Components/Footer.js';

export const viewFeed = (user) => {
  //  const user = user;
  const pageContainer = document.getElementById('page_container');

  if (user.emailVerified) {
    pageContainer.innerHTML = `
      <div id="feedLofche">
        <div id="publicationFeed">
        <input type="text" id="textPublication" placeholder="Pregunta a tu comunidad" name="textPublication" required>
        <button type="button" id="btnPublish" class="btnPublish">Publicar</button>
        <button type="button" id="btnCancel" class="btnCancel">Cancelar</button>
          </div>
        <div>PUBLICACIONES DE LOS DEMAS</div>  
        </div>
      
      </div>`;

    viewHeaderFeed();
    viewFooter();
  }
  return pageContainer;
};
