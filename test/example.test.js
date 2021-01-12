// IMPORT MODULES under test here:
import { compareNumbers } from '../utils.js';
// import { example } from '../example.js';

const test = QUnit.test;

test('tests if 5 is the same as 5', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 0;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(5, 5);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('tests if 4 is less than as 5', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = -1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(5, 4);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('tests if 6 is greater than 5', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = +1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(5, 6);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
