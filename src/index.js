import './index.css';
import getCharacters from './modules/characters.js';
import createCard from './modules/createCard.js';
import popupComments from './modules/commentsPopup.js';
import getRandomArray from './modules/randomNumber.js';

const containerPopup = document.querySelector('.popup');
const container = document.getElementById('cards-container');

const charactersData = await getCharacters(getRandomArray(6));

container.addEventListener('click', async (e) => {
  if (e.target.classList.contains('comments-button')) {
    const { id } = e.target.parentElement.parentElement;
    const characterDetail = await getCharacters(id);
    popupComments(characterDetail, containerPopup);
  }
});

charactersData.forEach((character) => {
  const card = createCard(character);
  container.appendChild(card);
});
