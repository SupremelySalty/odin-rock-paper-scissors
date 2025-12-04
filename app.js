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
};

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
};

let humanScore = 0;
let computerScore = 0;

function playRound(computerChoice, humanChoice) {
    let result = "";
    let score = "Player: " + humanScore + " || Computer: " + computerScore;

    // Add conditionals for winning or losing depending on options
    if (computerChoice === humanChoice) {
        result = "It's a tie!";
    } else if (
        (computerChoice === "Rock" && humanChoice === "Paper") ||
        (computerChoice === "Paper" && humanChoice === "Scissors") ||
        (computerChoice === "Scissors" && humanChoice === "Rock")
    ) {
        // Increase human score and add message for winning
        humanScore += 1;
        result = "You win! " + humanChoice + " beats " + computerChoice + "!";
        score = "Player: " + humanScore + " || Computer: " + computerScore
    } else {
        // Increase computer score and add message for losing
        computerScore += 1;
        result = "You lose! " + computerChoice + " beats " + humanChoice + "!";
        score = "Player: " + humanScore + " || Computer: " + computerScore
    };

    if (humanScore >= 5) {
        result += " Player wins the game!"
        humanScore = 0
        computerScore = 0
    } else if (computerScore >= 5) {
        result += " Computer wins the game!"
        humanScore = 0
        computerScore = 0
    }

    document.getElementById("results").textContent = result;
    document.getElementById("score").textContent = score;
};

const rockButton = document.getElementById("rock-button");
const paperButton = document.getElementById("paper-button");
const scissorsButton = document.getElementById("scissors-button");

rockButton.addEventListener('click', () =>{
    playRound(getComputerChoice(), "Rock")});
paperButton.addEventListener('click', () =>{
    playRound(getComputerChoice(), "Paper")});
scissorsButton.addEventListener('click', () =>{
    playRound(getComputerChoice(), "Scissors")});