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

function playGame () {
    let humanScore = 0
    let computerScore = 0

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
            return alert("You lose!" + computerChoice + " beats " + humanChoice + "!");
        }
    }
    // Play round 5 times
    playRound(getComputerChoice(), getHumanChoice())
    playRound(getComputerChoice(), getHumanChoice())
    playRound(getComputerChoice(), getHumanChoice())
    playRound(getComputerChoice(), getHumanChoice())
    playRound(getComputerChoice(), getHumanChoice())

    // Declares winner
    if (humanScore > computerScore) {
        return alert("Congratulations, you win!\n Human: " + humanScore + ", Computer: " + computerScore);
    } else if (computerScore > humanScore) {
        return alert("Sorry, you lose!\n Human: " + humanScore + ", Computer: " + computerScore);
    } else {
        return alert("Whoops, you tied!\n Human: " + humanScore + ", Computer:" + computerScore);
    }
}