let playerScore = 0;
let computerScore = 0;
let currentRound = 1;
const maxRound = 5;
const resultElement = document.querySelector(".result");
const playerScoreDisplay = document.querySelector(".player-score");
const computerScoreDisplay = document.querySelector(".computer-score");

function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    const optionChoice = Math.floor(Math.random() * options.length);
    return options[optionChoice];
}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();

    const results = {
        rock: { beats: "scissors", losesTo: "paper" },
        paper: { beats: "rock", losesTo: "scissors" },
        scissors: { beats: "paper", losesTo: "rock" },
    };

    if (playerSelection === computerSelection) {
        resultElement.textContent = "It's a tie!";
    } else if (results[playerSelection].beats === computerSelection) {
        resultElement.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        playerScore++;
    } else {
        resultElement.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        computerScore++;
    }

    playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
    computerScoreDisplay.textContent = `computerScore: ${computerScore}`;
    document.querySelector(".round").textContent = `Round: ${currentRound}`;

    currentRound++;
    if (currentRound > maxRound) {
        gameOver();
    }
}

function gameOver() {
    let finalResult;
    if (playerScore > computerScore) {
        finalResult = "You won the game!";
    } else if (computerScore > playerScore) {
        finalResult = "Game Over, the computer wins!";
    } else {
        finalResult = "The game ends in a draw!";
    }

    let finalResultElement = document.createElement("p");
    finalResultElement.textContent = `Final result: ${finalResult}`;
    resultElement.appendChild(finalResultElement);
}

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

rockBtn.addEventListener("click", () => {
    playRound("rock");
});

paperBtn.addEventListener("click", () => {
    playRound("paper");
});

scissorsBtn.addEventListener("click", () => {
    playRound("scissors");
});
