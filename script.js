"use strict";
// the technique called refactoring
//    (.)in order to get rid of some of our duplicate code.
//    (.)whenever we have duplicate code when we then want to change some functionality we have to change the same code in multiple places. however, when we first write the code then it's no big problem to start out with duplicate code
//    (.) refactoring basically means to restructure the code but without changing how it works.

const secreatNumberFunc = function () {
  return Math.trunc(Math.random() * 20 + 1);
};

let secreatNumber = secreatNumberFunc();
// if you want to cheat the game😉😉
// document.querySelector(".number").textContent = secreatNumber;

let score = 20;
let highScore = 0;

const classMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const classScore = function (score) {
  document.querySelector(".score").textContent = score;
};
const classBodyColor = function (color) {
  document.querySelector("body").style.backgroundColor = color;
};
const classNumber = function (number) {
  document.querySelector(".number").textContent = number;
};
const classNumberWidth = function (width) {
  document.querySelector(".number").style.width = width;
};

// Event handler of check button
const x = function () {
  const guess = Number(document.querySelector(".guess").value); // input se value la ke de raha hai
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    classMessage(" No Number Selected");
  }
  // when guess is right
  else if (guess === secreatNumber) {
    classMessage("🎊 Correct Number");

    classBodyColor("#60b347");
    classNumberWidth("30rem");
    classNumber(secreatNumber);

    //highscore implementation
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }

  // when guess is not right
  else if (guess !== secreatNumber) {
    if (score > 1) {
      classMessage(guess > secreatNumber ? " To High" : " To Low");
      score--;
      classScore(score);
    } else {
      classMessage(" You Lost The Game");
      classScore(0);
      classBodyColor("red");
    }
  }
};

// Event handler of again button
const y = function () {
  score = 20;
  secreatNumber = secreatNumberFunc();
  classMessage("Start guessing...");
  classNumber("?");
  classScore(score);

  // (Q) what does value does
  document.querySelector(".guess").value = ""; // input ki value change kar raha hai
  classBodyColor("#222");
  classNumberWidth("15rem");
};

//Event listener of check button
document.querySelector(".check").addEventListener("click", x);

//Event listener of again button
document.querySelector(".again").addEventListener("click", y);

//  next , we will build a real UI component and that's gonna be a modal window.
