'use strict';

let num1 = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const display=function(message){
    document.querySelector('.message').textContent=message;
}
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    //document.querySelector('.message').textContent = 'Andar Likh to Kuch..';
    display('Andar Likh to Kuch..');
  } else if (guess === num1) {
    //document.querySelector('.message').textContent = 'correct';
    display('Correct!');
    document.body.style.backgroundColor = 'green';
    document.querySelector('.number').textContent = num1;
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //when guess is wrong
  else if(guess!==num1){
    if (score > 1) {
       /* document.querySelector('.message').textContent = 
         guess>num1 ? 'too high...':'too low...';
        score --;*/
        display(guess>num1 ? 'too high...':'too low...');
        score --
        document.querySelector('.score').textContent = score;
      } 
      else if (score === 0) {
        //document.querySelector('.message').textContent = 'You Lost the game';
        display("You Lost the game");
        document.querySelector('.score').textContent=0;
      }
  } 
  /*else if (guess > num1) {
    if (score > 1) {
        document.querySelector('.message').textContent = 'too high...';
        score = score - 1;
        document.querySelector('.score').textContent = score;
      } 
      else if (score === 0) {
        document.querySelector('.message').textContent = 'You Lost the game';
        document.querySelector('.score').textContent=0;
      }
  } 
  /*else if (guess < num1) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'too low...';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else if (score === 0) {
      document.querySelector('.message').textContent = 'You lost the game';
    }
  }*/
});
document.querySelector('.again').addEventListener('click', function () {
  num1 = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  display('Start guessing...');
  document.body.style.backgroundColor = 'black';
  document.querySelector('.score').textContent = '20';
  //document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
});
