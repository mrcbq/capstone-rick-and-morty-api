const createCard = (character) => {
  const card = document.createElement('div');
  card.className = 'card';

  const img = document.createElement('img');
  img.src = character.image;
  img.alt = character.name;
  card.appendChild(img);

  const container = document.createElement('div');
  container.className = 'container';

  const name = document.createElement('h4');
  name.textContent = character.name;
  container.appendChild(name);

  const likeButton = document.createElement('button');
  likeButton.textContent = 'Like';
  likeButton.addEventListener('click', () => {
    console.log(`Liked ${character.name}`);
  });
  container.appendChild(likeButton);

  card.appendChild(container);

  return card;
};

export default createCard;
