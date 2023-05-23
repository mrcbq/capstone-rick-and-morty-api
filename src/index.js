import './index.css';
import charactersData from './modules/characters.js';
import createCard from './modules/createCard.js';
import fetchPopup from './modules/commentsPopup.js';

const containerPopup = document.querySelector('.popup');
const container = document.getElementById('cards-container');

container.addEventListener('click', (e) => {
  if (e.target.classList.contains('button-comments')) {
    const { id } = e.target.parentElement;
    fetchPopup(id, containerPopup);
  }
});

charactersData.forEach((character) => {
  const card = createCard(character);
  console.log(card);
  container.appendChild(card);
});
