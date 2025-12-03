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
        return "Scissors";
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(computerChoice, humanChoice) {
    // Add conditionals for winning or losing depending on options
    if (computerChoice === humanChoice) {
        return alert("It's a tie!");
    } else if (
        (computerChoice === "Rock" && humanChoice === "Paper") ||
        (computerChoice === "Paper" && humanChoice === "Scissors") ||
        (computerChoice === "Scissors" && humanChoice === "Rock")
    ) {
        // Increase human score and add message for winning
        ++humanScore;
        return alert("You win! " + humanChoice + " beats " + computerChoice + "!");
    } else {
        // Increase computer score and add message for losing
        ++computerScore;
        return alert("You lose! " + computerChoice + " beats " + humanChoice + "!");
    }
};

let computerSelection = getComputerChoice()

const rockButton = document.getElementById("rock-button");
const paperButton = document.getElementById("paper-button");
const scissorsButton = document.getElementById("scissors-button");

rockButton.addEventListener('click', () =>{
    playRound(getComputerChoice(), "Rock")});
paperButton.addEventListener('click', () =>{
    playRound(getComputerChoice(), "Paper")});
scissorsButton.addEventListener('click', () =>{
    playRound(getComputerChoice(), "Scissors")});