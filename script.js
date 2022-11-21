'use strict';
//MANIPULATING TEXT
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct number';

// //MANIPULATING NUMBERS
// document.querySelector('.number').textContent = '13';
// document.querySelector('.score').textContent = '50';

// //MANIULATING AN IPNUT FIELD
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

//EVENT LISTENER
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'NO NUMBER';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'CORRECT NUMBER!';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'TOO HIGH!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'YOU LOST THE GAME';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'TOO LOW!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'YOU LOST THE GAME';
      document.querySelector('.score').textContent = 0;
    }
  }
});
