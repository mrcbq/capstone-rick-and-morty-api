import counterComments from "./testCounterComments.js";

describe("counterComments", () => {
  test("returns the number of comments by taking the parent element as a parameter", () => {
    // Arrange
    const containerComments = document.createElement("ul");
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
});
