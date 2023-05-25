import './index.css';
import getCharacters from './modules/characters.js';
import createCard from './modules/createCard.js';
import popupComments from './modules/commentsPopup.js';
import { postLike, getLikes } from './modules/involvementAPI.js';
import getCounterCards from './modules/counterCards.js';
// import getRandomArray from './modules/randomNumber.js';

const containerPopup = document.querySelector('.popup');
const container = document.getElementById('cards-container');
const counterCards = document.getElementById('counter-cards');

const charactersData = await getCharacters([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
// const charactersData = await getCharacters(getRandomArray(Math.random() * 10 + 1));

container.addEventListener('click', async (e) => {
  if (e.target.classList.contains('comments-button')) {
    const { id } = e.target.parentElement.parentElement;
    const characterDetail = await getCharacters(id);
    popupComments(characterDetail, containerPopup);
  } else if (e.target.classList.contains('like-button')) {
    const { id } = e.target.parentElement.parentElement.parentElement.parentElement;
    await postLike(id);
    const likesData = await getLikes();
    const idIsEqualsTo = (likeObj, idx) => likeObj.item_id === idx;
    const result = likesData.find((obj) => idIsEqualsTo(obj, id)) ?? 0;
    e.target.nextSibling.textContent = `${result.likes ?? 0} Likes`;
  }
});

charactersData.forEach((character) => {
  const card = createCard(character);
  container.appendChild(card);
});

const cardsNumber = getCounterCards(container);
counterCards.textContent = `Characters (${cardsNumber})`;
