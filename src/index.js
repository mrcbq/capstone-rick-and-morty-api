import './index.css';
import charactersData from './modules/characters.js';
import createCard from './modules/createCard.js';

const container = document.getElementById('cards-container');

charactersData.forEach((character) => {
  const card = createCard(character);
  console.log(card);
  container.appendChild(card);
});
