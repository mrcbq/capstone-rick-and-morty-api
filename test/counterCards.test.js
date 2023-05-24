import getCounterCards from '../src/modules/counterCards.js';

describe('getCounterCards', () => {
  test('test_container_with_multiple_child_elements_returns_correct_count', () => {
    // Arrange
    const container = document.createElement('div');
    container.innerHTML = '<p></p><span></span><div></div>';

    // Act
    const result = getCounterCards(container);

    // Assert
    expect(result).toBe(3);
  });
  test('test_container_with_zero_child_elements_returns_correct_count', () => {
    // Arrange
    const container = document.createElement('div');
    container.innerHTML = '';

    // Act
    const result = getCounterCards(container);

    // Assert
    expect(result).toBe(0);
  });
});