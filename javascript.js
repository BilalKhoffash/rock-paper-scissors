let humanScore = 0;
let computerScore = 0;

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

const end = document.querySelector(".end");
const result = document.querySelector(".result");
const scoreboard = document.querySelector(".scoreboard");
const choice = document.querySelector("#choices");

choice.addEventListener('click', (e) => {
    let target = e.target;
    let computerSelection = getComputerChoice();

    playRound(target.id, computerSelection);
});

function playRound(humanChoice, computerChoice) { 

    if (humanChoice === computerChoice) {
        result.textContent = "Tie! Nobody wins";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        result.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore += 1;
    } else {
        result.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore += 1;
    }

    scoreboard.textContent = `Human score ${humanScore} - ${computerScore} Computer Score`;

    if ((humanScore === 5) || (computerScore === 5)) {
        if (humanScore === 5) {
            end.textContent = "WOW! You the human just beat the computer! oh wait.";
        } else {
            end.textContent = "oof rip... didn't expect you to get beaten by the computer";
        }

        humanScore = 0;
        computerScore = 0;
        scoreboard.textContent = `Human score ${humanScore} - ${computerScore} Computer Score`;
    }
}