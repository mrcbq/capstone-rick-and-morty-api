import likeImg from '../img/icons8-heart-32.png';
import { getLikes } from './involvementAPI.js';

const likesData = await getLikes();

const createCard = (character) => {
  const card = document.createElement('div');
  card.className = 'card';
  card.id = character.id;

  const img = document.createElement('img');
  img.className = 'card-image';
  img.src = character.image;
  img.alt = character.name;
  card.appendChild(img);

  const container = document.createElement('div');
  container.className = 'container';

  const containerCardTitleLikeBtn = document.createElement('div');
  containerCardTitleLikeBtn.className = 'containerCardTitleLikeBtn';

  const name = document.createElement('h4');
  name.textContent = character.name;
  containerCardTitleLikeBtn.appendChild(name);

  const containerLikes = document.createElement('div');
  containerLikes.className = 'containerLikes';

  const likeButton = document.createElement('button');
  likeButton.classList.add('like-button');

  const likeButtonImg = document.createElement('img');
  likeButtonImg.src = likeImg;
  likeButtonImg.classList.add('like-img');

  likeButton.appendChild(likeButtonImg);
  containerLikes.appendChild(likeButton);

  const idIsEqualsTo = (likeObj, idx) => likeObj.item_id === idx;
  const result = likesData.find((obj) => idIsEqualsTo(obj, card.id)) ?? 0;

  const likesNumber = document.createElement('p');
  likesNumber.textContent = `${result.likes ?? 0} Likes`;
  // likesNumber.textContent = '5 Likes';
  containerLikes.appendChild(likesNumber);
  containerCardTitleLikeBtn.appendChild(containerLikes);
  container.appendChild(containerCardTitleLikeBtn);

  const commentsButton = document.createElement('button');
  commentsButton.classList.add('comments-button');
  commentsButton.textContent = 'Comments';
  container.appendChild(commentsButton);

  const reservationsButton = document.createElement('button');
  reservationsButton.classList.add('reservations-button');
  reservationsButton.textContent = 'Reservations';
  container.appendChild(reservationsButton);

  card.appendChild(container);

  return card;
};

export default createCard;
