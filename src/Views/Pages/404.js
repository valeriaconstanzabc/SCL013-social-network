// ------------404 NOT FOUND---------------------->
export const viewError = () => {
  const viewErrorContainer = document.getElementById('container');
  viewErrorContainer.innerHTML = `
    <div id="errorContainer">
        <div class="box">
            <div id="errorMessage404">
                <span>close !</span>
            </div>
            <p><span>error 404 !</span> Lo sentimos, esta página no existe</p>
        </div>
    </div>`;

  return viewErrorContainer;
};
