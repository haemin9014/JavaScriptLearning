'use strict';
//setting the button

let number = Math.trunc(Math.random() * 20) + 1;
let wrong = Number(document.querySelector('.score').textContent);
console.log(number);
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  //Number is built in function that makes value to Integer
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (wrong >= 1) {
    if (!guess) {
      document.querySelector('.message').textContent = 'No number!';
    } else if (guess < number) {
      document.querySelector('.message').textContent = 'Higher!';
      wrong--;
    } else if (guess > number) {
      document.querySelector('.message').textContent = 'Lower!';
      wrong--;
    } else {
      document.querySelector('.message').textContent =
        'Congrats! you found a number!';
      document.querySelector('.number').textContent = number;
      document.querySelector('body').style.backgroundColor = '#60b347';
      if (highScore < Number(wrong)) {
        highScore = Number(wrong);
        document.querySelector('.highscore').textContent = highScore;
      }
    }
  } else {
    document.querySelector('.message').textContent = 'you lost the game!';
    document.querySelector('.number').textContent = number;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.backgroundColor = 'red';
  }
  document.querySelector('.score').textContent = wrong;
});

document.querySelector('.again').addEventListener('click', function () {
  number = Math.trunc(Math.random() * 20) + 1;
  console.log(`after reset is ${number}`);
  document.querySelector('.message').textContent = 'Start Guessing...';
  wrong = Number((document.querySelector('.score').textContent = 20));
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
