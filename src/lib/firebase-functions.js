//  import { viewSignIn } from '../Views/Pages/SignIn.js';

export const login = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then((result) => {
    //  This gives you a Google Access Token. You can use it to access the Google API.
    const token = result.credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log('user', user);
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    const credential = error.credential;
    console.log('error', errorMessage);
    // ...
  });
};

export const loginFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();

  firebase.auth().signInWithPopup(provider).then((result) => {
    //  This gives you a Google Access Token. You can use it to access the facebook API.
    const token = result.credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log('user', user);
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    const credential = error.credential;
    console.log('error', errorMessage);
    // ...
  });
};

// ----------------------------FUNCION LIKE---------------------------->
export const postLike = (id) => {
  const user = firebase.auth().currentUser;
  console.log('Entrando al like');

  firebase.firestore().collection('Publicaciones').doc(id).get()
    .then((query) => {
      const post = query.data();

      if (post.like == null || post.like === '') {
        post.like = [];
        console.log('entro al like vacio');
      }
      if (post.like.includes(user.uid)) {
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


// ----------------------------FUNCION ELIMINAR POST---------------------------->
export const deletePost = (uid) => {
  firebase.firestore().collection('Publicaciones').doc(uid).delete()
    .then(() => {
      console.log('Document successfully deleted!');
    })
    .catch((error) => {
      console.error('Error removing document: ', error);
    });
};
