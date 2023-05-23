import "./index.css";
import fetchPopup from "./modules/commentsPopup.js";

const buttonComments = document.querySelectorAll(".button-comments");
const containerPopup = document.querySelector(".popup");
const container = document.querySelector('.container-cards');


container.addEventListener('click', (e) => {
    if (e.target.classList.contains('button-comments')) {
        const id = e.target.parentElement.id;
        fetchPopup(id, containerPopup);
    }
});
