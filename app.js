function getComputerChoice() {
    // Randomly generate 3 numbers
    let randNum = Math.floor(Math.random() * 3);

    // Add switch conditional for randNum
    switch (randNum) {
    // Add conditional for rock
    case 0:
        return "Rock";
        break;
    // Add conditional for paper
    case 1:
        return "Paper";
        break;
    // Add conditional for scissors
    case 2:
        return "Scissors";
        break;
    }
}

function getHumanChoice() {
    // Prompt for user input
    let input = prompt("Rock, paper, or scissors?")
    // Add conditionals to return rock paper scissors
    if (input.toLowerCase() === "rock") {
        return "Rock";
    } else if (input.toLowerCase() === "paper") {
        return "Paper";
    } else if (input.toLowerCase() === "scissors") {
        return "Scissors"
    }
}

function playRound(computerChoice, humanChoice) {
    // Add conditionals for winning or losing depending on options
    if (computerChoice === humanChoice) {
        return "It's a tie!"
    } else if (
        (computerChoice === "Rock" && humanChoice === "Paper") ||
        (computerChoice === "Paper" && humanChoice === "Scissors") ||
        (computerChoice === "Scissors" && humanChoice === "Rock")
     ) {
        // Increase human score and add message for winning
        ++humanScore
        return "You win! " + humanChoice + " beats " + computerChoice + "!"
    } else {
        // Increase computer score and add message for losing
        ++computerScore
        return "You lose!" + computerChoice + " beats " + humanChoice + "!"
    }
}

let computerSelection = getComputerChoice()
let humanSelection = getHumanChoice()

let humanScore = 0
let computerScore = 0

console.log(playRound(computerSelection, humanSelection))