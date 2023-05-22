
const popupComments = (data, container) => {
    container.innerHtml = `
    <div class="popup-ele">
        <h1>Holaa ${data.name}</h1>
    </div>
    `;
};

export default popupComments;