function getComputerChoice() {
    const gameOption = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * gameOption.length);
    let randomSelection = gameOption[randomIndex];
    return randomSelection;
}


const gameKey = document.querySelectorAll(".gameKey");

let clickCount = 1;
const maxClicks = 10;
let youScore = 0;
let computerScore = 0; 


gameKey.forEach((key) => {
    key.addEventListener("click", () => {
        playerSelection = key.textContent;
        computerSelection = getComputerChoice();
    if (clickCount <= maxClicks) {
        playRound(playerSelection, computerSelection); 
        scoreCounter();
        clickCount++
        }
    });
});

const body = document.querySelector("body");
const script = document.querySelector("script")

const roundResult = document.createElement("div");
roundResult.classList.add("results");
body.insertBefore(roundResult, script)

const para = document.createElement("p");
const paraComputerChoice = document.createElement("p");
const roundPara = document.createElement("p")
const scorePara = document.createElement("p");


function playRound(playerSelection, computerSelection) {
    paraComputerChoice.textContent = `The Alien chose ${computerSelection}`;
    
    if (playerSelection === computerSelection) {
        para.textContent = "This round is a tie";
    } else if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
        para.textContent = "You Win this round!";
        youScore++;
    } else {
        para.textContent = "You Lose this round!";
        computerScore++;
    }
}

function scoreCounter() {
    if (clickCount === maxClicks) {
        if (youScore > computerScore) {
            para.textContent = "You win the game!";
            
        } else if (youScore < computerScore) {
            para.textContent = "Computer wins the game!";
        } else {
            para.textContent = "It's a tie game!";
        }
    }
    scorePara.textContent = `YOU: ${youScore}  COMPUTER: ${computerScore}`
    roundPara.textContent = `ROUND: ${clickCount}`
}

roundResult.appendChild(paraComputerChoice);
roundResult.appendChild(para);
roundResult.appendChild(roundPara);
roundResult.appendChild(scorePara);




















