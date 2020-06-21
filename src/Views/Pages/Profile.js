import { viewHeaderFeed } from '../Components/Header.js';
import { viewFooter } from '../Components/Footer.js';

export const viewProfile = () => {
  const viewProfileContainer = document.getElementById('page_container');
  const user = firebase.auth().currentUser;
  viewProfileContainer.innerHTML = `
    <div id="containerPageProfile">
      <div id="containerProfile">
        <div id="containerDescriptionUsername">
            <p id="nameProfile">${user.displayName || user.email}</p>
            <label id="description" for="description"><b>Descripción:</b></label>
            <span id="profileDescription">Hola, mi nombre es ${user.displayName || user.email},
            soy de la comuna de Valparaíso, soy asesora del hogar y amante de los animales. Colaboro
            con mis vecinos con el cuidado de sus mascotas cuando ellos se tienen que ausentar por alguna
            razón.</span>
            <div id="toAdd"></div>
            <label id="mail" for="mail"><b>Mail de contacto:</b></label>
            <span class="profileMail">${user.email}</span>
            <label id="age" for="age"><b>Edad:</b></label>
            <span id="profileAge">30 años</span>
            <div id="toAdd1"></div>
            <label id="location" for="location"><b>De donde eres:</b></label>
            <span id="profileLocation">Valparaíso</span>
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

  // ----------------------------BOTÓN EDITAR POST---------------------------->
  const editProfile = document.querySelector('#editProfile');
  editProfile.addEventListener('click', (doc) => {
    const result = window.confirm('¿Quieres editar tu perfil?');
    if (result) {
      editProfileUser(doc.id);
    }
  });

  return viewProfileContainer;
};
