import likeImg from '../img/icons8-heart-32.png';

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

  const name = document.createElement('h4');
  name.textContent = character.name;
  container.appendChild(name);

  const likeButton = document.createElement('button');
  likeButton.classList.add('like-button');
  likeButton.addEventListener('click', () => {
    console.log(`Liked ${character.name}`);
  });

  const likeButtonImg = document.createElement('img');
  likeButtonImg.src = likeImg;
  likeButton.appendChild(likeButtonImg);
  container.appendChild(likeButton);

  const likesNumber = document.createElement('p');
  likesNumber.textContent = '5 Likes';
  container.appendChild(likesNumber);

  const commentsButton = document.createElement('button');
  commentsButton.classList.add('comments-button');
  commentsButton.textContent = 'Comments';
  commentsButton.addEventListener('click', () => {
    console.log(`Comment ${character.name}`);
  });
  container.appendChild(commentsButton);

  const reservationsButton = document.createElement('button');
  reservationsButton.classList.add('comments-button');
  reservationsButton.textContent = 'Reservations';
  container.appendChild(reservationsButton);

  card.appendChild(container);

  return card;
};

export default createCard;