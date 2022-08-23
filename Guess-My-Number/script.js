'use strict';
//setting the button

const number = Math.trunc(Math.random() * 20) + 1;
console.log(number);
document.querySelector('.check').addEventListener('click', function () {
  //Number is built in function that makes value to Integer
  const guess = Number(document.querySelector('.guess').value);
  let wrong = Number(document.querySelector('.score').textContent);
  console.log(guess);
  if (wrong > 0) {
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
    }
  } else {
    document.querySelector('.message').textContent = 'you lost the game!';
  }
  document.querySelector('.score').textContent = wrong;
});
