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
          <input type="text" id="textPublication" placeholder="Pregunta a tu comunidad" required></input>
          <div id="butonsPublication">
            <button type="button" id="btnCancel" class="btnCancel">Cancelar</button>
            <button type="submit" id="btnPublish" class="btnPublish">Publicar</button>
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
  const buttonCancel = document.querySelector('#btnCancel');

  buttonCancel.addEventListener('click', () => {
    textPublication.value = '';
  });

  publicationFeed.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(textPublication.value);

    if (!textPublication.value.trim()) {
      console.log('input vacío');
      return;
    }
    const ts = new Date();
    firebase.firestore().collection('Publicaciones').add({
      date: ts.toLocaleString(),
      text: textPublication.value,
      uid: user.uid,
      email: user.email,
    })
      .then((result) => { console.log('mensaje guardado', result); })
      .catch(error => console.log(error));

    textPublication.value = '';
  });

  firebase.firestore().collection('Publicaciones').orderBy('date', 'desc')
    .onSnapshot((query) => {
      feedMessages.innerHTML = '';
      console.log(query);
      query.forEach((doc) => {
        console.log(doc.data());
        //  Falta agregar el reverse de la fecha orden descendiente
        if (doc.data().uid === user.uid) {
          feedMessages.innerHTML += `
          <div id="containerPublication">
            <div id="crudContainer">
              <button type ="button" id="btnCrudOptions"><img src="imagenes/dots1.png" alt="" class="imgOptionsDots" id="imgOptionsDots"></button>
                <div class="dropdownContentEdit">
                    <button id="editCrud" class="editCrud">Editar</button>
                    <button id="deleteCrud">Delete</button>  
                </div>
            </div>
            <div id="messagePostContainer" class="textBoxStyle"> 
              <span>${doc.data().name}</span>
              <span>${doc.data().email}</span>
              <span>${doc.data().date}</span> 
              <div id="agregar">
                <span type="text">${doc.data().text}</span>
              </div>
            </div>
          </div>`;

          const editPost = (uid) => {
            const agregar = document.querySelector('#agregar');
            agregar.innerHTML = `
              <textarea id="postEditCrud">${doc.data().text}</textarea>
              <button id="buttonSave">Guardar cambios</button>
              <button id="cancelEditCrud">Cancelar</button>`;

            const postEditCrud = document.querySelector('#postEditCrud');
            const buttonSave = document.querySelector('#buttonSave');
            // const cancelEditCrud = document.querySelector('cancelEditCrud');

            buttonSave.onclick = () => {
              const postRef = firebase.firestore().collection('Publicaciones').doc(uid);
              return postRef.update({
                text: postEditCrud.value,
              })
                .then(() => {
                  console.log('Document successfully updated!');
                  agregar.style.display = 'hidden';
                })
                .catch((error) => {
                  console.error('Error updating document: ', error);
                });
            };
          };

          const buttonEdit = document.querySelector('.editCrud');
          buttonEdit.addEventListener('click', () => {
            alert('¿Quieres editar este mensaje?');
            editPost(doc.id, doc.data().text);
          });

          const deletePost = (uid) => {
            firebase.firestore().collection('Publicaciones').doc(uid).delete()
              .then(() => {
                console.log('Document successfully deleted!');
              })
              .catch((error) => {
                console.error('Error removing document: ', error);
              });
          };

          const buttonDelete = document.querySelector('#deleteCrud');
          buttonDelete.addEventListener('click', () => {
            alert('¿Quieres eliminar este mensaje?');
            deletePost(doc.id);
          });
        } else {
          const postItem = `
          <div id="containerPublication">
            <div class="textBoxStyle">  
              <span>${doc.data().name}</span>
              <span>${doc.data().email}</span>
              <span>${doc.data().date}</span> 
              <span>${doc.data().text}</span>
            </div>
          </div>`;

          const containerPost = document.createElement('div');
          containerPost.classList.add('containerPost');
          containerPost.innerHTML = postItem;

          feedMessages.appendChild(containerPost);
        }
      });
    });

  return pageContainer;
};
