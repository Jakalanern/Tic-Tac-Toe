// Things to do later: Create a cool intro screen where you type player one name and player two into a text input, and save that information (e.target.vlaue) to player one and player two variables. And once the information is stored, display: none the intro screen, and display the tic tac toe game. You could also implement an animation with transform:translate for when the tic tac toe game starts. Like it slides down onto the screen which would be awesome!

//Selectors
let btn = document.querySelectorAll(".btn");
let h1 = document.querySelector(".turn-display");
let resetbtn = document.querySelector(".reset-btn");
let game = document.querySelector(".game-wrapper");
let playerOneForm = document.querySelector(".player-one-form");
let playerTwoForm = document.querySelector(".player-two-form");
let playerOneName = document.querySelector(".player-one-name");
let playerTwoName = document.querySelector(".player-two-name");
let introWrapper = document.querySelector(".intro-wrapper");
// ********************
//Variables
playerOneForm.addEventListener("submit", function (e) {
  // Code
  e.preventDefault();
  h1.innerHTML = `${playerOneName.value}'s Turn`;
  //Fade out and in
  //   playerOneForm.style.opacity = "0";
  //   playerTwoForm.style.opacity = "1";
  //   playerTwoForm.style.zIndex = "2";

  //Transition (Slide Left)
  playerOneForm.style.transform = "translateX(-5000px)";
  playerTwoForm.style.transform = "translateX(-250px)";
});

playerTwoForm.addEventListener("submit", function (e) {
  //Code
  e.preventDefault();

  //Transition (Slide Left)
  playerTwoForm.style.transform = "translateX(-5000px)";
  introWrapper.style.display = "none";
  game.style.transform = "translateX(0px)";
});

//If player name is null set it to a default name. E.g: (Player One / Player Two)

// Everytime we click we are going to change turn from P1 to P2 for example
// So set a turncount to 0
let count = 1;
let x = true;
//We want an event listener on all buttons
for (let b of btn) {
  b.addEventListener("click", function () {
    turnCount(count);
    if (x === true && b.id !== "clicked") {
      turnDisplay();
      b.innerHTML = "X";
      b.id = "clicked";
    } else if (x === false && b.id !== "clicked") {
      turnDisplay();
      b.id = "clicked";
      b.innerHTML = "O";
    }
  });
}

resetbtn.addEventListener("click", function () {
  reset();
});

// FUNCTIONS ***
function turnDisplay() {
  let playerOne = playerOneName.value;
  let playerTwo = playerTwoName.value;
  if (playerOne === null || playerOne === undefined) {
    playerOne = "Player One";
  }
  if (playerTwo === null || playerTwo === undefined) {
    playerTwo = "Player Two";
  }

  if (x === false) {
    h1.innerHTML = `${playerOne}'s Turn`;
  } else if (x === true) {
    h1.innerHTML = `${playerTwo}'s Turn`;
  }
}

// When it's even, it's player 1's turn. When it's odd, its' player 2's turn
function turnCount() {
  count++;
  // Player ones turn so when we click it'll be 'X'
  if (count % 2 === 0) {
    x = true;
  }
  // Player twos turn, so when we click it'll be 'O'
  else {
    x = false;
  }
}

// Resets everything back to original state
function reset() {
  count = 1;
  x = false;
  turnDisplay();
  btn.forEach((b) => ((b.innerHTML = ""), (b.id = "")));
}
