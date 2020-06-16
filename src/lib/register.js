import { viewFeed } from '../Views/Pages/Feed.js';
import { viewLoginError, viewSignInError, viewRedirecting } from '../Views/Components/Others.js';

export const verificate = () => {
  const user = firebase.auth().currentUser;

  user.sendEmailVerification().then(() => {
    // Email sent.
    console.log('Enviando correo...');
  }).catch((error) => {
    // An error happened.
  });
};

export const register = (userDetails) => {
  firebase.auth().createUserWithEmailAndPassword(userDetails.email, userDetails.password)
    .then(cred => firebase.firestore().collection('Usuarios').doc(cred.user.uid).set({
      name: userDetails.name,
      district: userDetails.district,
    }))
    .then(() => {
      console.log('nombre y comuna guardados con el registro');
      verificate();
      viewRedirecting();
    })
    .catch((error) => {
      console.log(error);
      viewSignInError();
    });
};

export const logIn = (emailLogin, passwordLogin) => {
  firebase.auth().signInWithEmailAndPassword(emailLogin, passwordLogin)
    .catch((error) => {
      viewLoginError();
    });
};

export const observer = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log('existe usuario activo');
      viewFeed(user);
      //    User is signed in.
      const displayName = user.displayName;
      const email = user.email;
      const emailVerified = user.emailVerified;
      const photoURL = user.photoURL;
      const isAnonymous = user.isAnonymous;
      const uid = user.uid;
      const providerData = user.providerData;
      console.log('*******************');
      console.log(user.emailVerified);
      console.log('*******************');
    } else {
    //    User is signed out.
      console.log('no existe usuario activo');
    }
  });
};
observer();

export const closing = () => {
  firebase.auth().signOut()
    .then(() => {
      console.log('Saliendo...');
    })
    .catch((error) => {
      console.log(error);
    });
};
