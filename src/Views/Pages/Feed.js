import { viewHeaderFeed } from '../Components/Header.js';
import { viewFooter } from '../Components/Footer.js';
//  import { observer } from '../../lib/register.js'
const deletePost = () => {
  firebase.firestore().collection('Publicaciones').doc('uid').delete()
    .then(() => {
      console.log('Document successfully deleted!');
    })
    .catch((error) => {
      console.error('Error removing document: ', error);
    });
};

export const viewFeed = (user) => {
  //  const user = user;
  const pageContainer = document.getElementById('page_container');

  if (user.emailVerified) {
    pageContainer.innerHTML = `
    <div id="containerLofche">
      <div id="feedLofche">
        <form id="publicationFeed">
          <input type="text" id="textPublication" placeholder="Pregunta a tu comunidad" name="textPublication" required>
          <div id="butonsPublication">
            <button type="submit" id="btnPublish" class="btnPublish">Publicar</button>
            <button type="button" id="btnCancel" class="btnCancel">Cancelar</button>
          </div>
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
    };
    const today = firebase.firestore.serverTimesTamp;
    const dateCorrected = `${today.getHours()}:${today.getMinutes()}:${today.getDate()}`; */

    firebase.firestore().collection('Publicaciones').add({

      date: new Date(),
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
          <div id="containerPublication">
            <div id="crudContainer">
              <button type ="button" id="btnCrudOptions"><img src="imagenes/dots1.png" alt="" class="imgOptionsDots" id="imgOptionsDots"></button>
                <div class="dropdownContent">
                    <button id="editCrud">Editar</button>
                    <button id="deleteCrud">Delete</button>  
                </div>
            </div>
            <div class="textBoxStyle"> 
              <span>${doc.data().name}</span>
              <span>${doc.data().email}</span>
              <span>${doc.data().date}</span> 
              <span>${doc.data().text}</span>
            </div>
          </div>`;

          const buttonDelete = document.querySelector('#deleteCrud');
          buttonDelete.addEventListener('click', (event) => {
            deletePost();
            event.preventDefault();
          });

        } else {
          feedMessages.innerHTML += `
          <div id="containerPublication">
            <div class="textBoxStyle">  
              <span>${doc.data().name}</span>
              <span>${doc.data().email}</span>
              <span>${doc.data().date}</span> 
              <span>${doc.data().text}</span>
            </div>
          </div>`;
        }
      });
    });

  return pageContainer;
};
