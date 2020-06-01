export const viewWelcome = () => {
  const pageContainer = document.getElementById('page_container');
  pageContainer.innerHTML += `
    <div id="main">
      <div>
        <img src="" alt="" id="logoHeader">
      </div>
      <div>
        <p>Lofche significa "Comunidad" en Mapudungun. Y eso es 
        lo que somos! una comunidad para averiguar todas aquellas 
        cosas que no sabemos, aquellas cosas que buscamos y no 
        encontramos. Ayuda y conexión constante con tu ciudad y las 
        almas que viven en ella!</p>
      </div>
    </div>`;
};
