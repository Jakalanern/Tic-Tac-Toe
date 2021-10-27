// TODO LIST:
// C̶r̶e̶a̶t̶e̶ a̶ c̶o̶o̶l̶ i̶n̶t̶r̶o̶ s̶c̶r̶e̶e̶n̶ w̶h̶e̶r̶e̶ y̶o̶u̶ t̶y̶p̶e̶ p̶l̶a̶y̶e̶r̶ o̶n̶e̶ n̶a̶m̶e̶ a̶n̶d̶ p̶l̶a̶y̶e̶r̶ t̶w̶o̶ i̶n̶t̶o̶ a̶ t̶e̶x̶t̶ i̶n̶p̶u̶t̶,̶ a̶n̶d̶ s̶a̶v̶e̶ t̶h̶a̶t̶ i̶n̶f̶o̶r̶m̶a̶t̶i̶o̶n̶ (̶e̶.̶t̶a̶r̶g̶e̶t̶.̶v̶l̶a̶u̶e̶)̶ t̶o̶ p̶l̶a̶y̶e̶r̶ o̶n̶e̶ a̶n̶d̶ p̶l̶a̶y̶e̶r̶ t̶w̶o̶ v̶a̶r̶i̶a̶b̶l̶e̶s̶.̶ A̶n̶d̶ o̶n̶c̶e̶ t̶h̶e̶ i̶n̶f̶o̶r̶m̶a̶t̶i̶o̶n̶ i̶s̶ s̶t̶o̶r̶e̶d̶,̶ d̶i̶s̶p̶l̶a̶y̶:̶ n̶o̶n̶e̶ t̶h̶e̶ i̶n̶t̶r̶o̶ s̶c̶r̶e̶e̶n̶,̶ a̶n̶d̶ d̶i̶s̶p̶l̶a̶y̶ t̶h̶e̶ t̶i̶c̶ t̶a̶c̶ t̶o̶e̶ g̶a̶m̶e̶.̶ Y̶o̶u̶ c̶o̶u̶l̶d̶ a̶l̶s̶o̶ i̶m̶p̶l̶e̶m̶e̶n̶t̶ a̶n̶ a̶n̶i̶m̶a̶t̶i̶o̶n̶ w̶i̶t̶h̶ t̶r̶a̶n̶s̶f̶o̶r̶m̶:̶t̶r̶a̶n̶s̶l̶a̶t̶e̶ f̶o̶r̶ w̶h̶e̶n̶ t̶h̶e̶ t̶i̶c̶ t̶a̶c̶ t̶o̶e̶ g̶a̶m̶e̶ s̶t̶a̶r̶t̶s̶.̶ L̶i̶k̶e̶ i̶t̶ s̶l̶i̶d̶e̶s̶ d̶o̶w̶n̶ o̶n̶t̶o̶ t̶h̶e̶ s̶c̶r̶e̶e̶n̶ w̶h̶i̶c̶h̶ w̶o̶u̶l̶d̶ b̶e̶ a̶w̶e̶s̶o̶m̶e̶!̶
// Program Win Condition
// *********************
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
let playerOneScoreName = document.querySelector(".player-one-score");
let playerTwoScoreName = document.querySelector(".player-two-score");
let playerOneScore = document.querySelector(".score1");
let playerTwoScore = document.querySelector(".score2");
// ********************
// Assign number to each button
i = 0;
draw = false;
click = false;
gameOver = false;
game.style.display = "none";
// game.style.display = "flex";
// game.style.opacity = "1";
// introWrapper.style.display = "none";
p1score = 0;
p2score = 0;
playerOneScore.innerHTML = p1score;
playerTwoScore.innerHTML = p2score;
//Variables
playerOneForm.addEventListener("submit", function a(e) {
  // Code
  e.preventDefault();
  h1.innerHTML = `${playerOneName.value}'s Turn`;
  // Fade out and in
  playerOneForm.style.display = "none";
  playerTwoForm.style.opacity = "1";
  playerTwoForm.style.zIndex = "2";
  //Transition (Slide Left)
  // playerOneForm.style.transform = "translateX(-3000px)";
  // playerTwoForm.style.transform = "translateX(-250px)";
});

playerTwoForm.addEventListener("submit", function (e) {
  //Code
  e.preventDefault();

  //Fade out
  playerTwoForm.style.opacity = "0";
  game.style.display = "flex";
  setTimeout(function () {
    introWrapper.style.display = "none";
    game.style.opacity = "1";
  }, 500);

  //Transition (Slide Left)
  // playerTwoForm.style.transform = "translateX(-3000px)";
  // game.style.transform = "translate(0px, -1300px)";
  playerOne = playerOneName.value;
  playerTwo = playerTwoName.value;
  nameOne = playerOneName.value;
  nameTwo = playerTwoName.value;
  playerOneScoreName.innerHTML = `${nameOne}: ${playerOneScore.innerHTML}`;
  playerTwoScoreName.innerHTML = `${nameTwo}: ${playerOneScore.innerHTML}`;
  playerOneScoreName.style.fontWeight = 300;
  playerTwoScoreName.style.fontWeight = 300;
});

//If player name is null set it to a default name. E.g: (Player One / Player Two)

// Everytime we click we are going to change turn from P1 to P2 for example
// So set a turncount to 0
let count = 1;
let x = true;
//We want an event listener on all buttons
for (let b of btn) {
  b.addEventListener("click", function () {
    click = true;
    if (!gameOver) {
      turnCount(count);
      if (x === true && b.id !== "clicked") {
        b.innerHTML = "X";
        b.id = "clicked";
        turnDisplay();
      } else if (x === false && b.id !== "clicked") {
        b.id = "clicked";
        b.innerHTML = "O";
        turnDisplay();
      }
    } else {
    }
  });
}

resetbtn.addEventListener("click", function () {
  if (click === true) {
    reset();
  }
});

// FUNCTIONS ***
function turnDisplay() {
  if (!playerOne) {
    playerOne = "Player One";
  }
  if (!playerTwo) {
    playerTwo = "Player Two";
  }
  if (x === false && swap === false) {
    h1.innerHTML = `${playerOne}'s Turn`;
  } else if (x === false && swap === true) {
    h1.innerHTML = `${playerTwo}'s Turn`;
  } else if (x === true && swap === false) {
    h1.innerHTML = `${playerTwo}'s Turn`;
  } else if (x === true && swap === true) {
    h1.innerHTML = `${playerOne}'s Turn`;
  }
  winCheck();
  drawCheck();
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
resetCount = 1;
swap = false;
function reset() {
  resetCount++;
  if (draw === false) {
    if (resetCount % 2 === 0) {
      swap = true;
    } else {
      swap = false;
    }
  } else {
    draw = false;
  }

  count = 1;
  x = false;
  click = false;
  if (swap === false) {
    h1.innerHTML = `${playerOne}'s Turn`;
  } else {
    h1.innerHTML = `${playerTwo}'s Turn`;
  }
  btn.forEach((b) => ((b.innerHTML = ""), (b.id = "")));
  gameOver = false;
  resetbtn.style.backgroundColor = "transparent";
  console.clear();
  console.log(swap);
  stop();
}

// Function for win condition, this will run everytime we click a button
// Each button click, we check if someone has won
// If someone won, stop all possible clicks, replace h1 with 'PLAYER IS WINNER'

function winCheck() {
  //HORIZONTAL CHECK ROW 1
  if (btn[0].innerHTML === "X" || btn[0].innerHTML === "O") {
    if (
      btn[0].innerHTML === btn[1].innerHTML &&
      btn[1].innerHTML === btn[2].innerHTML
    ) {
      // If it was X, X WON
      if (btn[0].innerHTML === "X" && swap === false) {
        xWon(playerOne);
      } else if (btn[0].innerHTML === "X" && swap === true) {
        oWon(playerOne);
      }
      // If it was O, O WON
      else if (btn[0].innerHTML === "O" && swap === false) {
        oWon(playerTwo);
      } else if (btn[0].innerHTML === "O" && swap === true) {
        xWon(playerOne);
      }
    }
  }
  // HORIZONTAL CHECK ROW 2
  if (btn[3].innerHTML === "X" || btn[3].innerHTML === "O") {
    if (
      btn[3].innerHTML === btn[4].innerHTML &&
      btn[4].innerHTML === btn[5].innerHTML
    ) {
      // If it was X, X WON
      if (btn[3].innerHTML === "X" && swap === false) {
        xWon(playerOne);
      } else if (btn[3].innerHTML === "X" && swap === true) {
        oWon(playerOne);
      }
      // If it was O, O WON
      else if (btn[3].innerHTML === "O" && swap === false) {
        oWon(playerTwo);
      } else if (btn[3].innerHTML === "O" && swap === true) {
        xWon(playerOne);
      }
    }
  }
  // HORIZONTAL CHECK ROW 3
  if (btn[6].innerHTML === "X" || btn[6].innerHTML === "O") {
    if (
      btn[6].innerHTML === btn[7].innerHTML &&
      btn[7].innerHTML === btn[8].innerHTML
    ) {
      // If it was X, X WON
      if (btn[6].innerHTML === "X" && swap === false) {
        xWon(playerOne);
      } else if (btn[6].innerHTML === "X" && swap === true) {
        oWon(playerOne);
      }
      // If it was O, O WON
      else if (btn[6].innerHTML === "O" && swap === false) {
        oWon(playerTwo);
      } else if (btn[6].innerHTML === "O" && swap === true) {
        xWon(playerOne);
      }
    }
  }
  // VERTICAL CHECK ROW 1
  if (btn[0].innerHTML === "X" || btn[0].innerHTML === "O") {
    if (
      btn[0].innerHTML === btn[3].innerHTML &&
      btn[3].innerHTML === btn[6].innerHTML
    ) {
      // If it was X, X WON
      if (btn[0].innerHTML === "X" && swap === false) {
        xWon(playerOne);
      } else if (btn[0].innerHTML === "X" && swap === true) {
        oWon(playerOne);
      }
      // If it was O, O WON
      else if (btn[0].innerHTML === "O" && swap === false) {
        oWon(playerTwo);
      } else if (btn[0].innerHTML === "O" && swap === true) {
        xWon(playerOne);
      }
    }
  }
  // VERTICAL CHECK ROW 2
  if (btn[1].innerHTML === "X" || btn[1].innerHTML === "O") {
    if (
      btn[1].innerHTML === btn[4].innerHTML &&
      btn[4].innerHTML === btn[7].innerHTML
    ) {
      // If it was X, X WON
      if (btn[1].innerHTML === "X" && swap === false) {
        xWon(playerOne);
      } else if (btn[1].innerHTML === "X" && swap === true) {
        oWon(playerOne);
      }
      // If it was O, O WON
      else if (btn[1].innerHTML === "O" && swap === false) {
        oWon(playerTwo);
      } else if (btn[1].innerHTML === "O" && swap === true) {
        xWon(playerOne);
      }
    }
  }
  // VERTICAL CHECK ROW 3
  if (btn[2].innerHTML === "X" || btn[2].innerHTML === "O") {
    if (
      btn[2].innerHTML === btn[5].innerHTML &&
      btn[5].innerHTML === btn[8].innerHTML
    ) {
      // If it was X, X WON
      if (btn[2].innerHTML === "X" && swap === false) {
        xWon(playerOne);
      } else if (btn[2].innerHTML === "X" && swap === true) {
        oWon(playerOne);
      }
      // If it was O, O WON
      else if (btn[2].innerHTML === "O" && swap === false) {
        oWon(playerTwo);
      } else if (btn[2].innerHTML === "O" && swap === true) {
        xWon(playerOne);
      }
    }
  }
  //DIAGONAL CHECK TOP LEFT TO BOTTOM RIGHT
  if (btn[0].innerHTML === "X" || btn[0].innerHTML === "O") {
    if (
      btn[0].innerHTML === btn[4].innerHTML &&
      btn[4].innerHTML === btn[8].innerHTML
    ) {
      // If it was X, X WON
      if (btn[0].innerHTML === "X" && swap === false) {
        xWon(playerOne);
      } else if (btn[0].innerHTML === "X" && swap === true) {
        oWon(playerOne);
      }
      // If it was O, O WON
      else if (btn[0].innerHTML === "O" && swap === false) {
        oWon(playerTwo);
      } else if (btn[0].innerHTML === "O" && swap === true) {
        xWon(playerOne);
      }
    }
  }
  //DIAGONAL CHECK TOP RIGHT TO BOTTOM LEFT
  if (btn[2].innerHTML === "X" || btn[2].innerHTML === "O") {
    if (
      btn[2].innerHTML === btn[4].innerHTML &&
      btn[4].innerHTML === btn[6].innerHTML
    ) {
      // If it was X, X WON
      if (btn[2].innerHTML === "X" && swap === false) {
        xWon(playerOne);
      } else if (btn[2].innerHTML === "X" && swap === true) {
        oWon(playerOne);
      }
      // If it was O, O WON
      else if (btn[2].innerHTML === "O" && swap === false) {
        oWon(playerTwo);
      } else if (btn[2].innerHTML === "O" && swap === true) {
        xWon(playerOne);
      }
    }
  }
}

function drawCheck() {
  // If ALL btn's have ID of CLICKED and gameWon is FALSE then it must be a DRAW
  // So every time we click a btn lets check all the buttons to see if they all have id===clicked
  num = 0;
  for (i = 0; i < btn.length; i++) {
    if (btn[i].id === "clicked") {
      num++;
    }
  }
  if (num === 9 && gameOver === false) {
    draw = true;
    console.log(`Draw is ${draw}`);
    gameOver = true;
    h1.innerHTML = `DRAW!`;
    resetbtn.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
  }
}

// Confetti functions
function start() {
  setTimeout(function () {
    confetti.start();
  }, 0); // 1000 is time that after 1 second start the confetti ( 1000 = 1 sec)
}

function stop() {
  setTimeout(function () {
    confetti.stop();
  }, 0); // 5000 is time that after 5 second stop the confetti ( 5000 = 5 sec)
}

// if you dont want to make it stop and make it infinite you can just remove the stop function 😊
function xWon() {
  // How to access playerOne if it's in another function?
  // Can't access variable playerOne. Need to understand scope, I dont get it.
  h1.innerHTML = `${playerOne.toUpperCase()} WINS!`;

  gameOver = true;
  p1score++;
  playerOneScore.innerHTML = p1score;
  playerOneScoreName.innerHTML = `${nameOne}: ${playerOneScore.innerHTML}`;
  resetbtn.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
  start();
}

function oWon() {
  h1.innerHTML = `${playerTwo.toUpperCase()} WINS!`;

  gameOver = true;
  p2score++;
  playerTwoScore.innerHTML = p2score;
  playerTwoScoreName.innerHTML = `${nameTwo}: ${playerTwoScore.innerHTML}`;
  resetbtn.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
  start();
}
