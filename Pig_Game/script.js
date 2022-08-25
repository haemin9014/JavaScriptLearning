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

let scores, currentScore, activePlayer, playing;

const init = () => {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  Current0El.textContent = 0;
  Current1El.textContent = 0;

  diceEl.classList.add('hidden');
  Player0El.classList.remove('player--winner');
  Player1E1.classList.remove('player--winner');
  Player0El.classList.add('player-active');
  Player1E1.classList.remove('player-active');
};

init();

const switchPlayer = function () {
  //if active player is 0, it will be come 1
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  //add, remove class
  Player0El.classList.toggle('player--active');
  Player1E1.classList.toggle('player--active');
};

btnRoll.addEventListener('click', () => {
  if (playing) {
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
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', () => {
  if (playing) {
    //add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 15) {
      //finished playing
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
