'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let gameScore = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔No number!');
  } else if (guess === secretNumber) {
    displayMessage('🔥Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (gameScore > highScore) {
      highScore = gameScore;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else {
    if (gameScore > 1) {
      displayMessage(guess > secretNumber ? '📈Too high!' : '📉Too low!');
      gameScore--;
      document.querySelector('.score').textContent = gameScore;
    } else {
      displayMessage('😢You lost the game!');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'rgb(175, 31, 31)';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  gameScore = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = gameScore;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
