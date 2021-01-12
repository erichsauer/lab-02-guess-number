// import functions and grab DOM elements
import { compareNumbers } from '../utils.js';

const gameContainer = document.getElementById('game-container');
const userGuess = document.getElementById('user-guess');
const guessButton = document.getElementById('guess-button');
const guessesDisplay = document.getElementById('guesses-display');
const guessFeedback = document.getElementById('guess-feedback-display');
const playAgainContainer = document.getElementById('play-again-container');
const winLoseMessageDisplay = document.getElementById('win-lose-message-display');
const playAgainButton = document.getElementById('play-again-button');

// initialize state

let guessesRemaining = 4;
let numberOfGuesses = 0;
let randomNumber = Math.ceil(Math.random() * 20);
guessesDisplay.textContent = guessesRemaining;

// set event listeners to update state and DOM

guessButton.addEventListener('click', () => {
    const userGuessNumber = userGuess.valueAsNumber;
    if (userGuessNumber > 20) {
        alert('Woah there buckaroo. Please keep your guess below 20');
        return;
        
    } else {

        if (compareNumbers(randomNumber, userGuessNumber) === -1) {
            guessesRemaining--;
            numberOfGuesses++;
            guessFeedback.textContent = 'Woops, too low! Guess again.';
            guessesDisplay.textContent = guessesRemaining;
        } else if (compareNumbers(randomNumber, userGuessNumber) === 1) {
            guessesRemaining--;
            numberOfGuesses++;
            guessFeedback.textContent = 'Woops, too high! Guess again.';
            guessesDisplay.textContent = guessesRemaining;
        } else if (compareNumbers(randomNumber, userGuessNumber) === 0) {
            numberOfGuesses++;
            guessFeedback.textContent = `Hooray! You won in ${numberOfGuesses} guesses!`;
            guessesDisplay.textContent = guessesRemaining;
        }
        
        console.log('guesses:', guessesRemaining, 'random#:', randomNumber, guessFeedback.textContent);
    // No tries remaining?
    // Display lose message
    // Disable game play
    // Correct guess?
    // Display win message
    // Disable game play
    }});