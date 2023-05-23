import './index.css';
import fetchPopup from './modules/commentsPopup.js';

const containerPopup = document.querySelector('.popup');
const container = document.querySelector('.container-cards');

container.addEventListener('click', (e) => {
  if (e.target.classList.contains('button-comments')) {
    const { id } = e.target.parentElement;
    fetchPopup(id, containerPopup);
  }
});
