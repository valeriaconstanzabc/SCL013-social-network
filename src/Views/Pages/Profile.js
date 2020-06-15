import { viewHeaderFeed } from '../Components/Header.js';
import { viewFooter } from '../Components/Footer.js';

export const viewProfile = () => {
  const viewProfileContainer = document.getElementById('page_container');
  viewProfileContainer.innerHTML = `
    <div id="containerProfile">
      <div id="nameAndImgProfile">
        <h3></h3>
        <img scr="<img>
      </div>
        <label for="description"><b>Descripción:</b></label>
        <span class="profileDescription"></span>
        <label for="mail"><b>Mail de contacto:</b></label>
        <span class="profileMail"></span>
        <label for="age"><b>Edad:</b></label>
        <span class="profileAge"></span>
        <label for="location"><b>De donde eres:</b></label>
        <span class="profileLocation"></span>
        <button>editar perfil</button>
    </div>
  `;
  viewHeaderFeed();
  viewFooter();

  /* const user = firebase.auth().currentUser;
  let name = {};
  let email = {};
  let photoUrl = {};
  let uid = {};
  let emailVerified = {};

  if (user != null) {
    name = user.displayName;
    email = user.email;
    photoUrl = user.photoURL;
    emailVerified = user.emailVerified;
    uid = user.uid;
  } */

  return viewProfileContainer;
};
