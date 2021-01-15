// import functions and grab DOM elements
import { compareNumbers, toggleDisplay, updateText } from './utils.js';

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

const lowGuess = 'Woops, too low! Guess again.';
const highGuess = 'Woops, too high! Guess again.';
const loseGame = `Oof! Better luck next time!`;

// set event listeners to update state and DOM

guessButton.addEventListener('click', () => {
    ++numberOfGuesses;
    --guessesRemaining;
    console.log(randomNumber);

    let userGuessNumber = Number(userGuess.value);
    let winGuess = `Hooray! You won in ${numberOfGuesses} guesses!`;

    updateText(guessesDisplay, guessesRemaining);
    toggleDisplay(guessFeedback, 'block');

    if (userGuessNumber > 20) {
        alert('Woah there buckaroo. Gotta keep your guess below 20. Try again!');
        return;
    }

    if (compareNumbers(randomNumber, userGuessNumber) === -1) {
        updateText(guessFeedback, lowGuess);

    } else if (compareNumbers(randomNumber, userGuessNumber) === 1) {
        updateText(guessFeedback, highGuess);

    } else if (compareNumbers(randomNumber, userGuessNumber) === 0) {
        toggleDisplay(gameContainer, 'none');
        toggleDisplay(playAgainContainer, 'flex');
        updateText(winLoseMessageDisplay, winGuess);
    }

    if (guessesRemaining === 0) {
        toggleDisplay(gameContainer, 'none');
        toggleDisplay(playAgainContainer, 'flex');
        updateText(winLoseMessageDisplay, loseGame);
        updateText(guessesDisplay, guessesRemaining);
        winLoseMessageDisplay.style.backgroundImage = "url('https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.wallpapersafari.com%2F76%2F75%2FW3DGBa.gif&f=1&nofb=1')";
    }
});

playAgainButton.addEventListener('click', () => {

    toggleDisplay(gameContainer, 'flex');
    toggleDisplay(playAgainContainer, 'none');
    toggleDisplay(guessFeedback, 'none');

    guessesRemaining = 4;
    numberOfGuesses = 0;
    randomNumber = Math.ceil(Math.random() * 20);

    updateText(guessesDisplay, guessesRemaining);
    updateText(guessFeedback, '');
    userGuess.value = '';
});
