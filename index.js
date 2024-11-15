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

function getHumanChoice() {
    let choice = prompt("Choose what you will play: rock, paper, or scissors").toLowerCase();
    while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        console.log("Invalid choice. Type rock, paper, or scissors.");
        choice = prompt("Choose what you will play: rock, paper, or scissors").toLowerCase();
    }
    return choice; // Added return statement to return the user's choice
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`It's a draw. The computer also chose ${humanChoice}`);
    } else {
        if (humanChoice === "rock") {
            if (computerChoice === "scissors") {
                console.log("You win! The computer played scissors.");
                humanScore++;
            } else if (computerChoice === "paper") {
                console.log("You lose! The computer played paper.");
                computerScore++;
            }
        } else if (humanChoice === "paper") {
            if (computerChoice === "scissors") {
                console.log("You lose! The computer played scissors.");
                computerScore++;
            } else if (computerChoice === "rock") {
                console.log("You win! The computer played rock.");
                humanScore++;
            }
        } else if (humanChoice === "scissors") {
            if (computerChoice === "paper") {
                console.log("You win! The computer played paper.");
                humanScore++;
            } else if (computerChoice === "rock") {
                console.log("You lose! The computer played rock.");
                computerScore++;
            }
        }
    }
}

function findWinner() {
    if (humanScore > computerScore) {
        console.log(`You won! You scored ${humanScore} while the computer scored ${computerScore}.`);
    } else if (humanScore < computerScore) {
        console.log(`You lost. You scored ${humanScore} while the computer scored ${computerScore}.`);
    } else {
        console.log(`It was a draw! You both scored ${humanScore}.`);
    }
}

// Play 5 rounds
for (let z = 1; z <= 5; z++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
}

findWinner();