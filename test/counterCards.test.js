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
  test('test_container_with_no_child_elements_returns_zero', () => {
    // Arrange
    const container = document.createElement('div');
    // Act
    const result = getCounterCards(container);
    // Assert
    expect(result).toBe(0);
  });
  test('test_container_is_null_or_undefined_returns_zero', () => {
    // Arrange
    const container = null;
    // Act
    const result = getCounterCards(container);
    // Assert
    expect(result).toBe(0);
  });
  test('test_container_with_large_number_of_child_elements_returns_correct_count', () => {
    // Arrange
    const container = document.createElement('div');
    for (let i = 0; i < 1000; i += 1) {
      container.appendChild(document.createElement('p'));
    }
    // Act
    const result = getCounterCards(container);
    // Assert
    expect(result).toBe(1000);
  });
  test('test_container_with_complex_child_element_structure_returns_correct_count', () => {
    // Arrange
    const container = document.createElement('div');
    container.innerHTML = '<div><p></p></div><span><a></a></span>';
    // Act
    const result = getCounterCards(container);
    // Assert
    expect(result).toBe(2);
  });
});
