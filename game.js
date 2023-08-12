function getComputerChoice() {
    const gameOption = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * gameOption.length);
    let randomSelection = gameOption[randomIndex];
    return randomSelection;
}


const gameKey = document.querySelectorAll(".gameKey");

let clicks = gameKey.forEach((key) => {
    key.addEventListener("click", () => {
        playerSelection = key.textContent;
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection)    
    })
})

const div = document.querySelector("div");

const roundResult = document.createElement("div");
div.appendChild(roundResult);
const para = document.createElement("p");
const paraComputerChoice = document.createElement("p");

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    paraComputerChoice.textContent = `The Alien choose ${computerSelection}`;
    if (playerSelection === computerSelection) {
        para.textContent = "This round is a tie";
        console.log("This is a tie")
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        para.textContent = "You Lose this round!";
        console.log("You Lose!")
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        para.textContent = "You Win this round!";
        console.log("You Win!")
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        para.textContent = "You Win this round!";
        console.log("You Win!");
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        para.textContent = "You Lose this round!";
        console.log("You Lose!");
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        para.textContent = "You Lose this round!";
        console.log("You Lose!")
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        para.textContent = "You Win this round!";
        console.log("You Win!");
    }
}

roundResult.appendChild(paraComputerChoice);
roundResult.appendChild(para);


















