const test = require('firebase-functions-test')({
  databaseURL: 'https://lofche-5e070.firebaseio.com',
  storageBucket: 'lofche-5e070.appspot.com',
  projectId: 'lofche-5e070',
}, 'path/to/lofche-5e070-bae2fe69790c.json');

// after firebase-functions-test has been initialized
const login = require('../src/lib/firebase-functions.js'); // relative path to functions code







const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockFirebase();
const mockfirestore = new firebasemock.MockFirestore();

mockfirestore.autoFlush();
mockauth.autoFlush();
global.firebase = firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  () => null,
  () => mockauth,
  () => mockfirestore,
);

describe('login', () => {
  afterEach(() => {
    signOut();
  });
  describe('Registro', () => {
    it('debería ser una función', () => {
      expect(typeof signIn).toBe('function');
    });


/*  import { addPostsData } from '../src/lib/firebase-functions.js';

describe('addPostsData', () => {
  test('debería ser una función', () => {
    expect(typeof addPostsData).toBe('function');
  });
  test('debería agregar un post', () => {
    addPostsData('Hola, chicas :D').then((result) => {
      expect(result).toBe('Hola, chicas :D');
    });
  });
}); */
describe('login', () => {
  test('debería registrar con google', () =>
  )
})