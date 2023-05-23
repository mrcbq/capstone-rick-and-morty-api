import getRandomArray from './randomNumber.js';

const getCharacters = async (id) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`,
  );
  const characterData = await response.json();
  return characterData;
};

const charactersData = await getCharacters(getRandomArray(6));
const charactersArray = [charactersData];

export default charactersArray;
