import { viewHeaderFeed } from '../Components/Header.js';
import { viewFooter } from '../Components/Footer.js';
//  import { observer } from '../../lib/register.js'

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

  buttonCancel.addEventListener('click', (event) => {
    // eslint-disable-next-line no-param-reassign
    event.textPublication.value = '';
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
      name: user.displayName,
      like: [],
    })
      .then((result) => { console.log('mensaje guardado', result); })
      .catch(error => console.log(error));

    textPublication.value = '';
  });

  const nameMatch = firebase.firestore().collection('Usuarios').where('email', '==', `${user.email}`)// compararlo con mail
    .onSnapshot((querySnapshot) => {
      console.log('Aqui casi trayendo el nombre', querySnapshot);
      querySnapshot.forEach((doc) => {
        console.log(doc.data().name);
      });
    });

  firebase.firestore().collection('Publicaciones').orderBy('date', 'desc')
    .onSnapshot((query) => {
      feedMessages.innerHTML = '';
      console.log(query);
      query.forEach((doc) => {
        console.log(doc.data());
        if (doc.data().uid === user.uid) {
          const containerPublication = `
          <div id="containerPublication">
            <div id="containerNameAndEdit">
              <span class="namePublication">${doc.data().name || nameMatch}</span>
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
                <button type ="button" class="btnLike"><img src="imagenes/heart.png" class="imgOptionsDots" class="imgOptionsDots"></button>
                <div class="likesContainer"></div>
              </div>
            </div>
            
          </div>`;

          const containerPost = document.createElement('div');
          containerPost.innerHTML = containerPublication;
          feedMessages.appendChild(containerPost);

          // ----------------------------FUNCION LIKE---------------------------->
          const postLike = (id) => {
            const user = firebase.auth().currentUser;
            console.log('Entrando al like');

            firebase.firestore().collection('Publicaciones').doc(id).get()
              .then((query) => {
                const post = query.data();

                if (post.like == null || post.like === '') {
                  post.like = [];
                  console.log('entro al like vacio');
                } if (post.like.includes(user.uid)) {
                  for (let i = 0; i < post.like.length; i += 1) {
                    if (post.like[i] === user.uid) {
                      post.like.splice(i, 1);

                      firebase.firestore().collection('Publicaciones').doc(id).update({
                        like: post.like,
                      });
                    }
                  }
                } else {
                  post.like.push(user.uid);
                  firebase.firestore().collection('Publicaciones').doc(id).update({
                    like: post.like,
                  });
                }
              })
              .catch((error) => {
                console.log(error);
              });
          };

          // ----------------------------BOTÓN DAR LIKE---------------------------->
          const btnLike = document.querySelector('.btnLike');
          btnLike.addEventListener('click', () => {
            postLike(doc.id);
          });

          const reaction = feedMessages.querySelector('.reactions');
          const likesContainer = reaction.querySelector('.likesContainer');
          console.log(doc.data().like);
          likesContainer.innerHTML = `
              <span class="likesNumber">${(doc.data().like).length}</span>`;

          reaction.appendChild(likesContainer);

          // ----------------------------FUNCION EDITAR POST---------------------------->
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

          // ----------------------------BOTÓN EDDITAR POST---------------------------->
          const buttonEdit = containerPost.querySelector('.editCrud');
          buttonEdit.addEventListener('click', () => {
            const result = window.confirm('¿Quieres editar este mensaje?');
            if (result) {
              editPost(doc.id, doc.data().text);
            }
          });

          // ----------------------------FUNCION ELIMINAR POST---------------------------->
          const deletePost = (uid) => {
            firebase.firestore().collection('Publicaciones').doc(uid).delete()
              .then(() => {
                console.log('Document successfully deleted!');
              })
              .catch((error) => {
                console.error('Error removing document: ', error);
              });
          };

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
                <button type ="button" class="btnLike"><img src="imagenes/heart.png" class="imgOptionsDots" class="imgOptionsDots"></button>
                <div class="likesContainer"></div>
              </div>
            </div>
          
          </div>`;

          const containerPost = document.createElement('div');
          containerPost.classList.add('containerPost');
          containerPost.innerHTML = postItem;

          feedMessages.appendChild(containerPost);
        }
      });
    });

  // eslint-disable-next-line consistent-return
  return pageContainer;
};
