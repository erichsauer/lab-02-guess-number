export function compareNumbers(number1, number2) {
    if (number1 === number2) return 0;
    if (number1 > number2) return -1;
    if (number1 < number2) return 1;
}

export function toggleDisplay(element, value) {
    element.style.display = value;
}

export function updateText(element, text) {
    element.textContent = text;
}
