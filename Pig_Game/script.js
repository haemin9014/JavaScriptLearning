'use strict';

//Selecting elements
const Player0El = document.querySelector('.player--0');
const Player1E1 = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const Current0El = document.getElementById('current--0');
const Current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

btnRoll.addEventListener('click', () => {
  //1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  //2. Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `./image/dice-${dice}.png`;

  //3. check for rolled 1: if true, switch to next player
  if (dice !== 1) {
    // Add dice top current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    //will be changed
    // Current0El.textContent = currentScore;
  } else {
    // Switch to next player
    //if active player is 0, it will be come 1
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    //add, remove class
    Player0El.classList.toggle('player--active');
    Player1E1.classList.toggle('player--active');
  }
});
