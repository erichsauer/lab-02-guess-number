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
    guessFeedback.style.display = 'block';
    
    if (userGuessNumber > 20) {
        alert('Woah there buckaroo. Gotta keep your guess below 20. Try again!');
        return;
    }
    
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
        gameContainer.style.display = 'none';
        playAgainContainer.style.display = 'flex';
        
        winLoseMessageDisplay.textContent = `Hooray! You won in ${numberOfGuesses} guesses!`;
        guessesDisplay.textContent = guessesRemaining;
    }
    
    if (guessesRemaining === 0) {
        gameContainer.style.display = 'none';
        playAgainContainer.style.display = 'flex';
        winLoseMessageDisplay.style.backgroundImage = "url('https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.wallpapersafari.com%2F76%2F75%2FW3DGBa.gif&f=1&nofb=1')";
        
        winLoseMessageDisplay.textContent = `Oof! Let's try that again!`;
        guessesDisplay.textContent = guessesRemaining;
    }
});

playAgainButton.addEventListener('click', () => {
    
    gameContainer.style.display = 'flex';
    playAgainContainer.style.display = 'none';
    guessFeedback.style.display = 'none';
    
    guessesRemaining = 4;
    numberOfGuesses = 0;
    randomNumber = Math.ceil(Math.random() * 20);

    guessesDisplay.textContent = guessesRemaining;
    guessFeedback.textContent = '';
});
