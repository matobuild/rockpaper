let playerScore = 0;
let computerScore = 0;
let rounds = 1;

const output = ["Rock", "Paper", "Scissor"];

function getComputerChoice() {
  let randomResult = Math.floor(Math.random() * 3);
  return output[randomResult];
}

function convertToOutput(string) {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
  playerChoice = convertToOutput(playerSelection);
  computerChoice = convertToOutput(computerSelection);

  console.log("player choice is" + playerChoice);
  console.log("computer choice is" + computerChoice);

  if (playerChoice === computerChoice) {
    return "its a draw";
  } else if (playerChoice == "Rock" && computerChoice == "Scissor") {
    playerScore += 1;
    return "You Won! Rock beats Scissor";
  } else if (playerChoice == "Rock" && computerChoice == "Paper") {
    computerScore += 1;
    return "You Lose! Paper beats Rock";
  } else if (playerChoice == "Paper" && computerChoice == "Rock") {
    playerScore += 1;
    return "You Won! Paper beats Rock";
  } else if (playerChoice == "Paper" && computerChoice == "Scissor") {
    computerScore += 1;
    return "You Lose! Scissor beats Paper";
  } else if (playerChoice == "Scissor" && computerChoice == "Paper") {
    playerScore += 1;
    return "You Won! Scissor beats Paper";
  } else if (playerChoice == "Scissor" && computerChoice == "Rock") {
    computerScore += 1;
    return "You Lose! Rock beats Scissor";
  }
}



const buttons = document.querySelectorAll('button');


buttons.forEach((button) => {
  
  button.addEventListener('click', () => {

    if (rounds === 1) {
      removeAll();
    }

    report = playRound(button.id, getComputerChoice());
    display(report);
    display('This is ' + rounds + ' round. The score is player = ' + playerScore + ' and computer is ' + computerScore);
    
    rounds += 1;
    if (rounds == 6) {
      if (playerScore > computerScore){
        display("FINAL WINNER IS PLAYER!!!🥳");
    } else {
        display("FINAL WINNER IS COMPUTER, YOU LOSE🤣");
    }
    playerScore = 0;
    computerScore = 0;
    rounds = 1;
    }

  });

});

function display(result) {
  const container = document.querySelector('#result'); 

  const content = document.createElement('div');
  content.classList.add('content')
  content.textContent = result;
  content.style.textAlign = 'center';
  
  container.appendChild(content);
}

function removeAll() {
  document.querySelectorAll('.content').forEach(e => e.remove());
}

// function game() {

//     for (let index = 0; index < 5; index++) {
//         const playerSelection = prompt("what is your hand ?");
//         const computerSelection = getComputerChoice();
//         console.log(playRound(playerSelection, computerSelection));     
        
//         //count score
//         console.log(playerScore);
//         console.log(computerScore);
//         console.log("current score is " + playerScore + ":" + computerScore);
//     }
// //report winer and loser
// if (playerScore > computerScore){
//     console.log("FINAL WINNER IS PLAYER!!!🥳");
// } else {
//     console.log("FINAL WINNER IS COMPUTER, YOU LOSE🤣");
// }

// // }

// game();