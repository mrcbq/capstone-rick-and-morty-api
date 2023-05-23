const getRandomInt = (min, max) => {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
};

const getRandomArray = (numOfRandoms) => {
  const randomArray = [];
  for (let random = 0; random < numOfRandoms; random += 1) {
    randomArray.push(getRandomInt(1, 826));
  }
  return randomArray;
};

export default getRandomArray;
