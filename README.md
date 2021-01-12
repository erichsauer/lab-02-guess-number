# THE PLAN

## HTML Setup
- Explain the rules to the user
    - `<p>`
- An input of type number for specifying the guess
    - `<input id='user-guess' type='number'>`
- A button to click to submit the guess
    - `<button id='guess-button'>`
- Display of number of tries remaining
    - `<div id='guesses-remaining-display'>`
- Display of guess too high or too low
    - `<div id='guess-feedback-display'>`
- Display of lose and win result
    -`<div id='score-display'>`

## JS Setup
- Grab DOM elements
    - input, button, three `<div>`s
- Define variables & initiate state
    - `let guessesRemaining = 4`
    - `let randomNumber = Math.ceil(Math.random() * 20)`
- Event handlers
    - guess button
        Convert guess to a number
        Compare guessed number to actual number using compareNumbers
        Guess too high or low?
        Display message
        Decrement tries remaining
        No tries remaining?
        Display lose message
        Disable game play
        Correct guess?
        Display win message
        Disable game play
    - reset button
        `let guessesRemaining = 4`
        `let randomNumber = Math.ceil(Math.random() * 20)`      
        reset message/input display values


Move UI work into functions for discrete UI updating tasks:

Decrementing tries
Display of too low message
Display of too high message
Disable game play
Display of Lose Game
Display of Win Game