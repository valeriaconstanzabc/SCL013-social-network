import { viewHeaderFeed } from '../Components/Header.js';
import { viewFooter } from '../Components/Footer.js';
//  import { observer } from '../../lib/register.js'

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
        <div id="messagesContainer">PUBLICACIONES DE LOS DEMAS</div>  
        </div>
      </div>
    </div>`;

    viewHeaderFeed();
    viewFooter();
  }

  const feedMessages = document.querySelector('#messagesContainer');
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

    /*  const dateCorrected = (offset) => {
      const offsetval = offset.val() || 0;
      const serverTime = Date.now() + offsetval;
    }; */

    firebase.firestore().collection('Publicaciones').add({

      date: Date.now(),
      text: textPublication.value,
      uid: user.uid,
      name: user.displayName,
      email: user.email,
    })
      .then((result) => { console.log('mensaje guardado'); })
      .catch(error => console.log(error));

    textPublication.value = '';
  });

  firebase.firestore().collection('Publicaciones').orderBy('date', 'desc')
    .onSnapshot(query => {
      feedMessages.innerHTML = '';
      console.log(query);
      query.forEach(doc => {
        console.log(doc.data());
        //  Falta agregar el reverse de la fecha orden descendiente
        if (doc.data().uid === user.uid) {
          feedMessages.innerHTML += `
          <div class="textBoxStyle"> 
            <span>${doc.data().name}</span>
            <span>${doc.data().email}</span>
            <span>${doc.data().date}</span> 
            <span>${doc.data().text}</span>
          </div>
          `;
        } else {
          feedMessages.innerHTML += `
          <div class="textBoxStyle">  
            <span>${doc.data().text}</span>
          </div>
          `;
        }
      });
    });

  return pageContainer;
};
