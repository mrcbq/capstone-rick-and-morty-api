const getCounterCards = (container) => {
  if (container) {
    return container.childElementCount;
  }
  return 0;
};

export default getCounterCards;