function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let randomNumber = getRandomInt(3);
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    return prompt("Which do you choose to pick? Rock, Paper or Scissors?").toLowerCase();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) { 

        if (humanChoice === computerChoice) {
            console.log("Tie! Nobody wins");
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") || 
            (humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "rock")
        ) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore += 1;
        } else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore += 1;
        }
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (computerScore > humanScore) {
        console.log("The computer won! Better luck next time..");
    } else if (computerScore < humanScore) {
        console.log("You won!!");
    } else {
        console.log("It was a boring draw!");
    }
}

playGame();