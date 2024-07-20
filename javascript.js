function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

function getComputerChoice() {
    let randomNumber = getRandomInt(3);
    if (randomNumber === 0) {
        return "rock"
    } else if (randomNumber === 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

console.log(getComputerChoice())