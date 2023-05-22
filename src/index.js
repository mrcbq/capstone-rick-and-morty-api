import './index.css';
import popupComments from './modules/commentsPopup';

const buttonComments = document.querySelectorAll('.button-comments');
const containerPopup = document.querySelector('.popup');

const fetchPopupDetails = async (id) => {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      const data = await response.json();
      console.log(data);
      popupComments(data, containerPopup);
    } catch {
      alert('Error trying to connect with the API');
    }
};

for(let i = 0; i < buttonComments.length; i++){
  buttonComments[i].addEventListener('click', () => {
    fetchPopupDetails(i + 1);
  })
}