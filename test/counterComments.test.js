import counterComments from "./testCounterComments.js";


test('returns the number of comments by taking the parent element as a parameter', () => {
    // Arrange
    const body = document.getElementsByTagName('body');
    const html = `
        <ul class="comments-elements">
            <li><p>02/05/23 Luis Carlos: Hello this is a comment</p></li>
            <li><p>02/05/23 Marco: Hello this is a comment</p></li>
            <li><p>02/05/23 Ana: Hello this is a comment</p></li>
            <li><p>02/05/23 Juan: Hello this is a comment</p></li>
        </ul>
    `;
    body.appendChild(html);
    const containerComments = document.querySelector('.comments-elements');

    // Act
    const result = counterComments(containerComments)

    // Assert
    expect(result).toBe(4);
});