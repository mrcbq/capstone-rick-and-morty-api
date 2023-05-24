const counterComments = (commentsContainer) => {
    let counter = 0;
  
    if (commentsContainer.firstChild.nextElementSibling) {
      counter = commentsContainer.childElementCount;
    }
    return counter;
};

export default counterComments;