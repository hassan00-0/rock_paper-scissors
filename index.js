function getComputerChoice() {
    let a = Math.random();
    if (a <= 1 / 3) {
        return "rock";
    } else if (a <= 2 / 3) {
        return "paper";
    } else {
        return "scissors";
    }
}


let humanScore = 0;
let computerScore = 0;

const resultText = document.querySelector("#resultText");
const scoreDisplay = document.querySelector("#score");

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        resultText.textContent = `It's a draw. The computer also chose ${humanChoice}.`;
    } else {
        if (humanChoice === "rock") {
            if (computerChoice === "scissors") {
                resultText.textContent = "You win! The computer played scissors.";
                humanScore++;
            } else if (computerChoice === "paper") {
                resultText.textContent = "You lose! The computer played paper.";
                computerScore++;
            }
        } else if (humanChoice === "paper") {
            if (computerChoice === "scissors") {
                resultText.textContent = "You lose! The computer played scissors.";
                computerScore++;
            } else if (computerChoice === "rock") {
                resultText.textContent = "You win! The computer played rock.";
                humanScore++;
            }
        } else if (humanChoice === "scissors") {
            if (computerChoice === "paper") {
                resultText.textContent = "You win! The computer played paper.";
                humanScore++;
            } else if (computerChoice === "rock") {
                resultText.textContent = "You lose! The computer played rock.";
                computerScore++;
            }
        }
    }

    // Update the score display
    scoreDisplay.textContent = `Human: ${humanScore} - Computer: ${computerScore}`;

    // Check if someone has won
    if (humanScore === 5) {
        resultText.textContent = "You won the game! Congratulations!";
        disableButtons();
    } else if (computerScore === 5) {
        resultText.textContent = "The computer won the game! Better luck next time.";
        disableButtons();
    }
}

function disableButtons() {
    // Disable the buttons once someone wins
    document.querySelector("#rock").disabled = true;
    document.querySelector("#paper").disabled = true;
    document.querySelector("#scissors").disabled = true;
}

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    playRound("rock", computerChoice);
});

paperButton.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    playRound("paper", computerChoice);
});

scissorsButton.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    playRound("scissors", computerChoice);
});
