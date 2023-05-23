import quitIcon from '../img/icons8-x-50 (1).png';

const popupComments = (data, container) => {
  container.innerHTML = `
    <div class="popup-ele">
        <div class="button-div">
            <button alt="quit button" id="quit" class="quit-button"><img src="${quitIcon}"></button>
        </div>
        <div class="popup-description">
            <img src="${data.image}">
            <h1>${data.name}</h1>
            <div class="popup-description-elements">
                <p>Status: ${data.status}</p>
                <p>Species: ${data.species}</p>
                <p>Gender: ${data.gender}</p>
                <p>Origin: ${data.origin.name}</p>
                <p>Location: ${data.location.name}</p>
            </div>
        </div>
    </div>
    `;
  const quitButton = document.querySelector('#quit');
  quitButton.addEventListener('click', () => {
    container.innerHTML = '';
  });
};

const fetchPopupDetails = async (id, container) => {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`,
    );
    const data = await response.json();
    popupComments(data, container);
  } catch {
    alert('Error trying to connect with the API');
  }
};

export default fetchPopupDetails;
