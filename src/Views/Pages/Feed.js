import { viewHeaderFeed } from '../Components/Header.js';
import { viewFooter } from '../Components/Footer.js';

export const viewFeed = (user) => {
  //  const user = user;
  const pageContainer = document.getElementById('page_container');

  if (user.emailVerified) {
    pageContainer.innerHTML = `
    <div id="containerLofche">
      <div id="feedLofche">
        <form id="publicationFeed">
          <input type="text" id="textPublication" placeholder="Pregunta a tu comunidad" name="textPublication" required>
          <button type="submit" id="btnPublish" class="btnPublish">Publicar</button>
          <button type="button" id="btnCancel" class="btnCancel">Cancelar</button>
        </form>
        <div>PUBLICACIONES DE LOS DEMAS</div>  
        </div>
      </div>
    </div>`;

    viewHeaderFeed();
    viewFooter();
  }

  const publicationFeed = document.querySelector('#publicationFeed');
  const textPublication = document.querySelector('#textPublication');
  const buttonPublish = document.querySelector('#btnPublish');
  const buttonCancel = document.querySelector('#btnCancel');

  publicationFeed.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(textPublication.value);

    if (!textPublication.value.trim()) {
      console.log('input vacío');
      return;
    }
    firebase.firestore().collection('Publicaciones').add({
      date: Date.now(),
      text: textPublication.value,
      uid: user.uid,
    })
      .then((result) => { console.log('mensaje guardado'); })
      .catch(error => console.log(error));

    textPublication.value = '';
  });

  firebase.firestore().collection('Publicaciones')
    .onSnapshot(query => {
      console.log(query);
      query.forEach(doc => {
        console.log(doc);
      });
    });

  return pageContainer;
};
