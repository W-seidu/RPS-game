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
    } else {
        return ("Type either rock, paper, or scissors")
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
            if (playRound(playerChoice, computerSelection).includes("Win")) {
                console.log(`YOU: ${++yourScore}, COMPUTER: ${computerScore}`)
            } else if (playRound(playerChoice, computerSelection).includes("Lose")) {
                console.log(`YOU: ${yourScore}, COMPUTER: ${++computerScore}`)
            } else if (playRound(playerChoice, computerSelection).includes("tie")) {
                console.log(`YOU: ${yourScore}, COMPUTER: ${computerScore}`)
            }
    }
    if (computerScore > yourScore) {
        console.log("Defeat, game over!")
    } else if (computerScore === yourScore) {
        console.log("Well, it's a Draw, play again!")
    } else {
        console.log("Victory, you Win!")
    }
}
game();