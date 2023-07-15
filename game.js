function getComputerChoice() {
    const gameOption = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * gameOption.length);
    let randomSelection = gameOption[randomIndex];
    return randomSelection;
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection) {
        return "This round is a tie"
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock"
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection === "scissors") {
        return "You Win! Rock beats Scissors"
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection === "rock") {
        return "You Win! Paper beats Rock"
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection === "scissors") {
        return "You Lose! Scissors beats Paper"
    }  else if (playerSelection.toLowerCase() == "scissors" && computerSelection === "rock") {
        return "You Lose! Rock beats Scissors"
    }  else if (playerSelection.toLowerCase() == "scissors" && computerSelection === "paper") {
        return "You Win! Scissors beats Paper"
    } 
}

let playerSelection = "paper"; 
let computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));



