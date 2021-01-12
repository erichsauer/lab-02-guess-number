export function compareNumbers(number1, number2) {
    if (number1 === number2) return 0;
    if (number1 > number2) return -1;
    if (number1 < number2) return 1;
}

// Write one test at a time, each test should address one of the three possible outcomes.

// SUPER STRETCH: Actually test for invalid input. You should throw an error if either parameter is not a number. Consult the QUnit docs for how to test for an exception.
