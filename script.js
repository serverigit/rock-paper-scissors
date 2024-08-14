// Game Logic

function playGame() {
  
  // Scoreboard

  let humanScore = 0;
  let computerScore = 0;

  // Functions to generate a random number between a range
  // and get computer choice depending on that random number

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function getComputerChoice() {
    let number = getRandomInt(1, 3);
  
    let computerChoice =
      number == 1 ? "rock" : number == 2 ? "paper" : "scissors";
    return computerChoice;
  }

  // Function to prompt user to get their choice

  function getHumanChoice() {
    let humanChoice = prompt("Make your choice. \nRock \nPaper \nScissors");
    return humanChoice;
  }

  // Function to play a round

  function playRound(humanChoice, computerChoice) {
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    let noWinner = `Draw. \n\nHuman score: ${humanScore} \nComputer score: ${computerScore}`;
    let winner;

    if (humanChoice.toLowerCase() === computerChoice) {
      return alert(noWinner);
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

    let winnerIs = `The computer has chosen ${computerChoice}!\nThe ${winner} wins! \n\nHuman score: ${humanScore} \nComputer score: ${computerScore}`;
    return alert(winnerIs);
  }

  // Play 5 round and return human wins IF
  // human score is bigger than computer score ENDIF
    // return computer wins ELSE IF computer score is bigger ENDELSEIF
    // return tie ELSE

  // I didn't use loops because I didn't learn it yet
  playRound();
  playRound();
  playRound();
  playRound();
  playRound();

  if (humanScore < computerScore) {
    alert(`The computer wins the game!`);
  }
    else if (humanScore > computerScore) {
      alert(`The human wins the game!`);
    }
    else {
      alert(`The game is a tie!`);
    }
}
