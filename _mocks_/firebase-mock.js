const firestore = () => {
  return {
    collection: (nameCollection) => {
      return {
        add: () => {
          const sendPost = new Promise((resolve, reject) => {
            //  if ()
            resolve('mensaje guardado');
            reject(Error);
          });
        },
      };
    },
  };
};

const firebase = {
  firestore: firestore,
};

export default jest.fn(() => {
  return firebase;
});
