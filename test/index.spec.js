// importamos la funcion que vamos a testear
import { addPostsData } from '../src/lib/firebase-functions.js';

describe('addPostsData', () => {
  test('debería ser una función', () => {
    expect(typeof addPostsData).toBe('function');
  });
  test('debería agregar un post', () => {
    addPostsData('Hola, chicas :D').then((result) => {
      expect(result).toBe('Hola, chicas :D');
    });
  });
});
