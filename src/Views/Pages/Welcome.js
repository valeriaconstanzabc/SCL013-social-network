import { viewHeader } from '../Components/Header.js';
import { viewFooter } from '../Components/Footer.js';

export const viewWelcome = () => {
  const pageContainer = document.getElementById('page_container');
  pageContainer.innerHTML = `
    <div id="welcomeLofche">
      <div id="divLogoWelcome">
        <img src="imagenes/lofcheColgante.png" alt="" id="logoWelcome">
      </div>
      <div id="containerWelcome">
        <p>Lofche significa "Comunidad" en Mapudungun. Y eso es 
        lo que somos! una comunidad para averiguar todas aquellas 
        cosas que no sabemos, aquellas cosas que buscamos y no 
        encontramos. Ayuda y conexión constante con tu ciudad y las 
        almas que viven en ella!</p>
      </div>
    </div>`;

  viewHeader();
  viewFooter();

  return pageContainer;
};
