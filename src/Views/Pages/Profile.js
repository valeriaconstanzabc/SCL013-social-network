export const viewProfile = () => {
  const viewProfileContainer = document.getElementById('page_container');
  viewProfileContainer.innerHTML = `
    <div id="containerProfile">
        <h3>Rufa Accesorios</h3>
        <label for="description"><b>Descripción:</b></label>
        <p class="profileInfo">Soy Valeria tengo un emprendimiento de accesorios</p>
        <label for="age"><b>Edad:</b></label>
        <p class="profileInfo">25 Años</p>
        <label for="location"><b>De donde eres:</b></label>
        <p class="profileInfo">Valparaiso residiendo en Santiago</p>
    </div>
  `;

  return viewProfileContainer;
};
