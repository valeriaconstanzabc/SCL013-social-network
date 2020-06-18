import { viewHeaderFeed } from '../Components/Header.js';
import { viewFooter } from '../Components/Footer.js';

export const viewProfile = () => {
  const viewProfileContainer = document.getElementById('page_container');
  const user = firebase.auth().currentUser;
  const infoUser = firebase.firestore().collection('InfoDePerfil').doc();
  viewProfileContainer.innerHTML = `
    <div id="containerPageProfile">
      <div id="containerProfile">
        <div id="containerDescriptionUsername">
            <p id="nameProfile">${user.displayName || user.email}</p>
            <label for="description"><b>Descripción:</b></label>
            <span id="profileDescription"></span>
            <div id="toAdd">${infoUser.description}</div>
            <label for="mail"><b>Mail de contacto:</b></label>
            <span class="profileMail">${user.email}</span>
            <label for="age"><b>Edad:</b></label>
            <span id="profileAge"></span>
            <div id="toAdd1"></div>
            <label for="location"><b>De donde eres:</b></label>
            <span id="profileLocation"></span>
            <div id="toAdd2"></div>
        </div>
        <div id="containerImgAndButton">
          <img id="imgProfile" src="${user.photoURL}">
          <div class="addButton">
            <button id="editProfile">Editar perfil</button>
          </div>
        </div>
      </div>
    </div>`;
  viewHeaderFeed();
  viewFooter();

  // ----------------------------FUNCION EDITAR POST---------------------------->
  const editProfileUser = () => {
    const toAdd = document.querySelector('#toAdd');
    toAdd.innerHTML = `
      <textarea id="editProfileUserr"></textarea>`;

    const editProfileUserr = document.querySelector('#editProfileUserr');
    const addButton = document.querySelector('.addButton');
    addButton.innerHTML = `
    <button id="saveProfile">Guardar</button>`;

    const saveProfile = document.querySelector('#saveProfile');
    saveProfile.addEventListener('click', () => {
      firebase.firestore().collection('InfoDePerfil').add({
        description: editProfileUserr.value,
      }).then(() => {
        console.log('Document successfully updated!');
        toAdd.style.display = 'hidden';
        addButton.style.display = 'hidden';
        editProfileUserr.value = '';
      })
        .catch((error) => {
          console.error('Error updating document: ', error);
        });
    });
  };

  // ----------------------------BOTÓN EDDITAR POST---------------------------->
  const editProfile = document.querySelector('#editProfile');
  editProfile.addEventListener('click', (doc) => {
    const result = window.confirm('¿Quieres editar tu perfil?');
    if (result) {
      editProfileUser(doc.id);
    }
  });

  /* const containerImgAndButton = document.querySelector('#containerImgAndButton');
  containerImgAndButton.innerHTML = `
    <img class="imgProfile" src="https://rciminternet.com/wp-content/uploads/2019/04/usuario.png">`;
*/
  return viewProfileContainer;
};
