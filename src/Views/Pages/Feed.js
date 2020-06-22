import { viewHeaderFeed } from '../Components/Header.js';
import { viewFooter } from '../Components/Footer.js';
import { postLike, deletePost, addPostsData } from '../../lib/firebase-functions.js';

export const viewFeed = (user) => {
  if (!user.emailVerified) {
    return;
  }

  const pageContainer = document.getElementById('page_container');

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
        <div id="messagesContainer"></div>  
        </div>
      </div>
    </div>`;

  viewHeaderFeed();
  viewFooter();

  const feedMessages = pageContainer.querySelector('#messagesContainer');
  const publicationFeed = pageContainer.querySelector('#publicationFeed');
  const textPublication = pageContainer.querySelector('#textPublication');
  const buttonCancel = pageContainer.querySelector('#btnCancel');

  // <-----------LIMPIA EL IMPUT DE LA PUBLICACIÓN AL CANCELAR------------->
  buttonCancel.addEventListener('click', () => {
    textPublication.value = '';
  });

  // <-----------LIEMPIA EL IMPUT DE LA PUBLICACIÓN LUEGO DE CREAR UNA----->
  publicationFeed.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!textPublication.value.trim()) {
      return;
    }
    addPostsData(user, textPublication);
    textPublication.value = '';
  });

  // <-----------IMPRIMOS COMENTARIOS EN LA PÁGINA ORDENADOS POR FECHA------>
  firebase.firestore().collection('Publicaciones').orderBy('date', 'desc')
    .onSnapshot((query) => {
      feedMessages.innerHTML = '';
      query.forEach((doc) => {
        if (doc.data().uid === user.uid) {
          const containerPublication = `
          <div id="containerPublication">
            <div id="containerNameAndEdit">
              <span class="namePublication">${doc.data().name || doc.data().email}</span>
              <div id="crudContainer">
                <button type ="button" id="btnCrudOptions"><img src="imagenes/dots1.png" alt="" class="imgOptionsDots" id="imgOptionsDots"></button>
                <div class="dropdownContentEdit">
                  <button id="editCrud" class="editCrud">Editar</button>
                  <button id="deleteCrud">Delete</button>  
                </div>
              </div>
            </div>

            <div id="messagePostContainer" class="textBoxStyle"> 
              <span>${doc.data().email}</span>
              <span>${doc.data().date}</span> 
              <div id="edit" class="edit">
                <span id="currentText" type="text">${doc.data().text}</span>
              </div>
              <div id="toAdd">
            </div>

            <div class="reactions">
              <div class="likes">
                <button type ="button" class="btnLike" data-id=${doc.id}><img src="imagenes/heart.png" class="imgOptionsDots" class="imgOptionsDots"></button>
                <div class="likesContainer" data-likes=${doc.data().like.length}></div>
              </div>
            </div>
            
          </div>`;

          const containerPost = document.createElement('div');
          containerPost.innerHTML = containerPublication;
          feedMessages.appendChild(containerPost);

          // <----------------------------FUNCIÓN EDITAR POST---------------------------->
          const editPost = (uid) => {
            const currentText = containerPost.querySelector('#currentText');
            currentText.style.display = 'none';

            const toAdd = containerPost.querySelector('#toAdd');
            toAdd.innerHTML = `
              <textarea id="postEditCrud">${doc.data().text}</textarea>
              <div id="buttonsSaveAndEdit">
                <div>
                  <button id="buttonSave">Guardar cambios</button>
                </div>
                <div>
                  <button id="cancelEditCrud">Cancelar</button>
                </div>
              </div>`;

            const postEditCrud = toAdd.querySelector('#postEditCrud');
            const buttonSave = toAdd.querySelector('#buttonSave');
            const cancelEditCrud = document.querySelector('#cancelEditCrud');

            cancelEditCrud.addEventListener('click', () => {
              toAdd.innerHTML = '';
              currentText.style.display = 'block';
            });

            buttonSave.onclick = () => {
              const postRef = firebase.firestore().collection('Publicaciones').doc(uid);
              return postRef.update({
                text: postEditCrud.value,
              })
                .then(() => {
                  console.log('Document successfully updated!');
                  toAdd.style.display = 'hidden';
                })
                .catch((error) => {
                  console.error('Error updating document: ', error);
                });
            };
          };

          // ----------------------------BOTÓN EDITAR POST---------------------------->
          const buttonEdit = containerPost.querySelector('.editCrud');
          buttonEdit.addEventListener('click', () => {
            const result = window.confirm('¿Quieres editar este mensaje?');
            if (result) {
              editPost(doc.id, doc.data().text);
            }
          });

          // ----------------------------BOTÓN ELIMINAR POST---------------------------->
          const buttonDelete = containerPost.querySelector('#deleteCrud');
          buttonDelete.addEventListener('click', () => {
            const result = window.confirm('¿Quieres eliminar este mensaje?');
            if (result) {
              deletePost(doc.id);
            }
          });
        } else {
          const postItem = `
          <div id="containerPublication">
            <div class="textBoxStyle">  
              <span class="namePublication">${doc.data().name}</span>
              <span>${doc.data().email}</span>
              <span>${doc.data().date}</span>
            </div>
            <div class="edit">
              <span type="text">${doc.data().text}</span>
            </div> 

            <div class="reactions">
              <div class="likes">
                <button type ="button" class="btnLike" data-id=${doc.id}><img src="imagenes/heart.png" class="imgOptionsDots" class="imgOptionsDots"></button>
                <div class="likesContainer" data-likes=${doc.data().like.length}></div>
              </div>
            </div>
          
          </div>`;

          const containerPost = document.createElement('div');
          containerPost.classList.add('containerPost');
          containerPost.innerHTML = postItem;

          feedMessages.appendChild(containerPost);
        }
      });
      // <----------------------------BOTÓN DAR LIKE---------------------------->
      // sacamos el botón fuera del if para que tome ambos post
      const btnLike = document.getElementsByClassName('btnLike'); // llamamos al boton mediante getElementsByClassName
      for (let i = 0; i < btnLike.length; i += 1) { // recorremos un for del botón
        // Guardamos la posición del botón y con dataset traemos la propiedad data de la linea 80
        const id = btnLike[i].dataset.id;
        btnLike[i].addEventListener('click', () => { // Evento del botón pero con posición i
          postLike(id);
        });
      }

      // Después hacemos lo mismo pero con el div de las reacciones
      const reaction = document.getElementsByClassName('reactions');
      for (let i = 0; i < reaction.length; i += 1) {
        const likesContainer = reaction[i].querySelector('.likesContainer');
        const likes1 = likesContainer.dataset.likes;
        likesContainer.innerHTML = `
         <span class="likesNumber">${likes1}</span>`;

        reaction[i].appendChild(likesContainer);
      }
    });
  // eslint-disable-next-line consistent-return
  return pageContainer;
};
