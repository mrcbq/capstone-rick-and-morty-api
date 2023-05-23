import './index.css';
import charactersArray from './modules/characters.js';
import createCard from './modules/createCard.js';

const container = document.getElementById('card-container');

console.log(charactersArray);

charactersArray.forEach((character) => {
  const card = createCard(character);
  container.appendChild(card);
});
