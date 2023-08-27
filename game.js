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
const buttonDiv = document.querySelector("div")
const script = document.querySelector("script");

const scoreDiv = document.createElement("div");
const userScorePara = document.createElement("p");
const computerScorePara = document.createElement("p");

scoreDiv.classList.add("score-counter");
body.insertBefore(scoreDiv, buttonDiv);
scoreDiv.appendChild(userScorePara);
scoreDiv.appendChild(computerScorePara);

const roundResult = document.createElement("div");
roundResult.classList.add("results");
body.insertBefore(roundResult, script);

const para = document.createElement("p");
const roundPara = document.createElement("p");

const playAgain = document.createElement("a");
playAgain.setAttribute("href", "file:///home/swordmachina/repo/RPS-game/index.html")


function playRound(playerSelection, computerSelection) { 
    if (playerSelection === computerSelection) {
        para.textContent = "This round is a tie";
        computerScorePara.style.color = "blue";
        userScorePara.style.color = "blue";
    } else if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
        para.textContent = `The Alien chose ${computerSelection}, You Win this round!`;
        userScorePara.style.color = "green";
        computerScorePara.style.color = "crimson";
        youScore++;
    } else {
        para.textContent = `The Alien chose ${computerSelection}, You Lose this round!`;
        computerScorePara.style.color = "green";
        userScorePara.style.color = "crimson";
        computerScore++;
    }
}

function scoreCounter() {
    if (clickCount === maxClicks) {
        if (youScore > computerScore) {
            para.textContent = "You win the game!";
            computerScorePara.style.color = "crimson";
            userScorePara.style.color = "green";
            playAgain.textContent = "play Again"
        } else if (youScore < computerScore) {
            para.textContent = "Computer wins the game!";
            computerScorePara.style.color = "green";
            userScorePara.style.color = "crimson";
            playAgain.textContent = "playAgain"
        } else {
            para.textContent = "It's a tie game!";
            playAgain.textContent = "playAgain"
        }
    }
    userScorePara.textContent = `YOU: ${youScore}` 
    computerScorePara.textContent =  `COMPUTER: ${computerScore}`
    roundPara.textContent = `ROUND ${clickCount}`
}



roundResult.appendChild(roundPara);
roundResult.appendChild(para);
roundResult.appendChild(playAgain);





















