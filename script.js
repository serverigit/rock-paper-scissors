

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getComputerChoice() {
  let number = getRandomInt(1, 3);

  let computerChoice = number == 1 ? "rock" : number == 2 ? "paper" : "scissors";
  return computerChoice;
}

//Human

function getHumanChoice() {
  let humanChoice = prompt("Make your choice. 1: Rock 2: Paper 3: Scissors");
  let alert3 = alert("Please choose amongst 3.");

  if (humanChoice == 1) {
    humanChoice = "rock";
    return humanChoice;
  } else if (humanChoice == 2) {
    humanChoice = "paper";
    return humanChoice;
  } else if (humanChoice == 3) {
    humanChoice = "scissors";
    return humanChoice;
  } else {
    return alert3;
  }
}

// Game Logic

let humanScore = 0;
let computerScore = 0;

function playRound () {
  let computerChoice = getComputerChoice();
  let humanChoice = getHumanChoice();
  let noWinner = "Draw. Human score: ${humanScore} Computer score: ${computerScore}";
  let winner;

  if (humanChoice === computerChoice) {
    return noWinner;
  }
    else if (humanChoice === "rock" && computerChoice === "scissors" || 
    humanChoice === "paper" && computerChoice === "rock" || 
    humanChoice === "scissors" && computerChoice === "paper") {
      humanScore++;
      winner = "Human"
    }
    else if ((computerChoice === "rock" && humanChoice === "scissors") || 
    (computerChoice === "paper" && humanChoice === "rock") || 
    (computerChoice === "scissors" && humanChoice === "paper")) {
      computerScore++;
      winner = "Computer"
    }
    else {
      return `Invalid choice.`;
    }

  let winnerIs = `${winner} wins! Human score: ${humanScore} Computer score: ${computerScore}`;
  return winnerIs;
}
