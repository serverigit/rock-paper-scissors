// Computer

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getComputerChoice() {
  let number = getRandomInt(1, 3);

  let computerChoice = number == 1 ? "rock" : number == 2 ? "paper" : "scissors";
  return computerChoice;
}

// Human

function getHumanChoice() {
  let humanChoice = prompt("Make your choice. \nRock \nPaper \nScissors");
  return humanChoice;
  // let choiceAlert = alert("Please choose amongst 3.");

  // if (humanChoice == 1) {
  //   humanChoice = "rock";
  //   return humanChoice;
  // } else if (humanChoice == 2) {
  //   humanChoice = "paper";
  //   return humanChoice;
  // } else if (humanChoice == 3) {
  //   humanChoice = "scissors";
  //   return humanChoice;
  // } else {
  //   return choiceAlert;
  // }
}

// Game Logic

let humanScore = 0;
let computerScore = 0;

function playRound () {
  let computerChoice = getComputerChoice();
  let humanChoice = getHumanChoice();
  let noWinner = `Draw. \n\nHuman score: ${humanScore} \nComputer score: ${computerScore}`;
  let winner;

  if (humanChoice.toLowerCase() === computerChoice) {
    return alert(noWinner);
  }
    else if (humanChoice.toLowerCase() === "rock" && computerChoice === "scissors" || 
    humanChoice.toLowerCase() === "paper" && computerChoice === "rock" || 
    humanChoice.toLowerCase() === "scissors" && computerChoice === "paper") {
      humanScore++;
      winner = "Human"
    }
    else if ((computerChoice === "rock" && humanChoice.toLowerCase() === "scissors") || 
    (computerChoice === "paper" && humanChoice.toLowerCase() === "rock") || 
    (computerChoice === "scissors" && humanChoice.toLowerCase() === "paper")) {
      computerScore++;
      winner = "Computer"
    }
    else {
      return alert(`Invalid choice.`);
    }

  let winnerIs = `${winner} wins! \n\nHuman score: ${humanScore} \nComputer score: ${computerScore}`;
  return alert(winnerIs);
}
