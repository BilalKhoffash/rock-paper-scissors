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

const result = document.querySelector(".result")
const choice = document.querySelector("#choices");

choice.addEventListener('click', (e) => {
    let target = e.target;
    let computerSelection = getComputerChoice();

    playRound(target.id, computerSelection);
});

function playGame() {
    if (computerScore > humanScore) {
        console.log("The computer won! Better luck next time..");
    } else if (computerScore < humanScore) {
        console.log("You won!!");
    } else {
        console.log("It was a boring draw!");
    }
}

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
        result.textContent = `You lose! ${computerChoice} beats ${humanChoice}`
        computerScore += 1;
    }
}