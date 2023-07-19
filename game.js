function getComputerChoice() {
    const gameOption = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * gameOption.length);
    let randomSelection = gameOption[randomIndex];
    return randomSelection;
}

function playRound(playerChoice, computerSelection) {
    let playerSelection = playerChoice;
    if (playerSelection === computerSelection) {
        return "This round is a tie";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win! Rock beats Scissors";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Win! Paper beats Rock";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You Lose! Scissors beats Paper";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose! Rock beats Scissors";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win! Scissors beats Paper";
    } 

}

function game() {
    let computerSelection = getComputerChoice();
    let yourScore = 0;
    let computerScore = 0;
    for (i = 0; i < 5; i++) {
        let playerChoice = prompt("Rock!!! Paper!!! Scissors!!!").toLowerCase();
        console.log(`The player picked ${playerChoice}`);
        console.log(`The computer picked ${computerSelection}`)
        console.log(playRound(playerChoice, computerSelection));
            if ((playerChoice === "rock" && computerSelection === "scissors") || (playerChoice === "paper" && computerSelection === "rock") || 
            (playerChoice === "scissors" && computerSelection === "paper")) {
                console.log(`YOU: ${++yourScore}, COMPUTER: ${computerScore}`)
            } else if ((playerChoice === "rock" && computerSelection === "paper") || (playerChoice === "paper" && computerSelection === "scissors") || 
            (playerChoice === "scissors" && computerSelection === "rock")) {
                console.log(`YOU: ${yourScore}, COMPUTER: ${++computerScore}`)
            } else if (playerChoice === computerSelection) {
                console.log(`YOU: ${yourScore}, COMPUTER: ${computerScore}`)
            }
    }
}
game();