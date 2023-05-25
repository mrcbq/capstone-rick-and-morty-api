const counterComments = (commentsContainer) => {
  let counter = 0;

  if (commentsContainer) {
    counter = commentsContainer.childElementCount;
  }
  return counter;
};

export default counterComments;