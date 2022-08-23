'use strict';

//since it is class use .
//if it is id use #
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';

console.log(document.querySelector('.message').textContent); //printing out changed.

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

//when we use input we use value
document.querySelector('.guess').value = 23;
