import quitIcon from '../img/icons8-x-50 (1).png';
import postComment from './postComment.js';
import fetchComments from './fetchComments.js';

const popupComments = (data, container) => {
  container.innerHTML = `
    <div class="popup-ele">
        <div class="button-div">
            <button alt="quit button" id="quit" class="quit-button"><img src="${quitIcon}"></button>
        </div>
        <div class="popup-description">
            <img src="${data.image}">
            <h1>${data.name}</h1>
            <div class="popup-description-elements">
                <p>Status: ${data.status}</p>
                <p>Species: ${data.species}</p>
                <p>Gender: ${data.gender}</p>
                <p>Origin: ${data.origin.name}</p>
                <p>Location: ${data.location.name}</p>
            </div>
            <div class="comments-section">
                <h2>Comments</h2>
                <ul class="comments-elements">
                </ul>
            </div>
        </div>
        <div class="popup-form-section">
            <h2>Add a Comment</h2>
            <form id="comment-form">
                <input type="text" id="username" name="username" placeholder="Your Name" required> <br>
                <textarea id="text-area" placeholder="Your insights" maxlength="300" name="message" required></textarea> <br>
                <button type="submit" class="button-comment">Comments</button>
            </form>
        </div>
    </div>
    `;
  const quitButton = document.querySelector('#quit');
  quitButton.addEventListener('click', () => {
    container.innerHTML = '';
  });

  const formAddComment = document.getElementById('comment-form');
  const username = document.getElementById('username');
  const comment = document.getElementById('text-area');
  const commentsContainer = document.querySelector('.comments-elements');

  const commentsData = async () => {
    const commentsContent = await fetchComments(data.id);
    commentsContainer.innerHTML = '';
    if (commentsContent[0].creation_date) {
      commentsContent.forEach((comment) => {
        commentsContainer.innerHTML += `
          <li><p>${comment.creation_date} ${comment.username}: ${comment.comment}</p></li>
      `;
      });
    } else {
      commentsContainer.innerHTML = `<li><p>${commentsContent[0]}</p></li>`;
    }
  };

  commentsData();

  formAddComment.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = username.value;
    const text = comment.value;
    await postComment(data.id, name, text);
    commentsData();
    username.value = '';
    comment.value = '';
  });
};

export default popupComments;
