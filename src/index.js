import './index.css';
import getCharacters from './modules/characters.js';
import createCard from './modules/createCard.js';
import popupComments from './modules/commentsPopup.js';
import postLike from './modules/involvementAPI.js';
// import getRandomArray from './modules/randomNumber.js';

const containerPopup = document.querySelector('.popup');
const container = document.getElementById('cards-container');

const charactersData = await getCharacters([1, 2, 3, 4, 5, 6, 7, 8, 9]);

container.addEventListener('click', async (e) => {
  if (e.target.classList.contains('comments-button')) {
    const { id } = e.target.parentElement.parentElement;
    const characterDetail = await getCharacters(id);
    popupComments(characterDetail, containerPopup);
  } else if (e.target.classList.contains('like-button')) {
    const { id } = e.target.parentElement.parentElement;
    const postlikeMsg = await postLike(id);
    // console.log(postlikeMsg);
  }
});

charactersData.forEach((character) => {
  const card = createCard(character);
  console.log(card);
  container.appendChild(card);
});

// postLike('901');
