// Play 5 round and return human wins IF
// human score is bigger than computer score ENDIF
// return computer wins ELSE IF computer score is bigger ENDELSEIF
// return tie ELSE
//
//   if (humanScore < computerScore) {
//     alert(`The computer wins the game!`);
//   } else if (humanScore > computerScore) {
//     alert(`The human wins the game!`);
//   } else {
//     alert(`The game is a tie!`);
//   }

// Buttons
// add click event listeners to all playBtn buttons
// 1. get name value of the clicked button
// 2. call playRound function

const playBtns = document.querySelectorAll(".play-btn");
const winnerDiv = document.createElement("div");
document.body.append(winnerDiv);

let humanScore = 0;
let computerScore = 0;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getComputerChoice() {
  let number = getRandomInt(1, 3);
  let computerChoice =
    number == 1 ? "rock" : number == 2 ? "paper" : "scissors";
  return computerChoice;
}

playBtns.forEach((playBtn) => {
  playBtn.addEventListener("click", () => {
    const humanChoice = playBtn.getAttribute("name");
    const computerChoice = getComputerChoice();
    let noWinner = `Draw. \n\nHuman score: ${humanScore} \nComputer score: ${computerScore}`;
    let winner = "";

    if (humanChoice.toLowerCase() === computerChoice) {
      winnerDiv.textContent = noWinner;
      return;
    } else if (
      (humanChoice.toLowerCase() === "rock" && computerChoice === "scissors") ||
      (humanChoice.toLowerCase() === "paper" && computerChoice === "rock") ||
      (humanChoice.toLowerCase() === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      winner = "human";
    } else if (
      (computerChoice === "rock" && humanChoice.toLowerCase() === "scissors") ||
      (computerChoice === "paper" && humanChoice.toLowerCase() === "rock") ||
      (computerChoice === "scissors" && humanChoice.toLowerCase() === "paper")
    ) {
      computerScore++;
      winner = "computer";
    } else {
      return alert(`Invalid choice.`);
    }

    if (computerScore === 5) {
      winnerDiv.textContent = `The computer wins the game!`;
      return;
    } else if (humanScore === 5) {
      winnerDiv.textContent = `The human wins the game!`;
      humanScore = 0;
      computerScore = 0;
      return;
    }

    let winnerIs = `The computer has chosen ${computerChoice}!\nThe ${winner} wins! \n\nHuman score: ${humanScore} \nComputer score: ${computerScore}`;
    winnerDiv.textContent = winnerIs;
  });
});
