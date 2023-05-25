import counterComments from '../src/modules/counterComments.js';

describe('counterComments', () => {
  test('returns the number of comments by taking the parent element as a parameter when there are more than 1 comment', () => {
    // Arrange
    const containerComments = document.createElement('ul');
    containerComments.innerHTML = `
              <li class="individual-comment"><p>02/05/23 Luis Carlos: Hello! This is a comment</p></li>
              <li class="individual-comment"><p>02/05/23 Marco: Hello! This is a comment</p></li>
              <li class="individual-comment"><p>02/05/23 Ana: Hello! This is a comment</p></li>
              <li class="individual-comment"><p>02/05/23 David: Hello! This is a comment</p></li>
          `;
    document.body.appendChild(containerComments);

    // Act
    const result = counterComments(containerComments);

    // Assert
    expect(result).toBe(4);
  });

  test('returns 0 when there are no comments', () => {
    // Arrange
    const containerComments = document.createElement('ul');
    containerComments.innerHTML = '';
    document.body.appendChild(containerComments);

    // Act
    const result = counterComments(containerComments);

    // Assert
    expect(result).toBe(0);
  });

  test('returns 0 when the container is null', () => {
    // Arrange
    const container = null;
    // Act
    const result = counterComments(container);
    // Assert
    expect(result).toBe(0);
  });

  test("returns the right number when it's a big number of comment elements", () => {
    // Arrange
    const containerComments = document.createElement('ul');
    for (let i = 0; i < 1234; i += 1) {
      containerComments.appendChild(document.createElement('li'));
    }
    document.body.appendChild(containerComments);

    // Act
    const result = counterComments(containerComments);

    // Assert
    expect(result).toBe(1234);
  });
});
