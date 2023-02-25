function getComputerChoice() {
    let choice = '';
    let choiceNum = Math.floor(Math.random() * 3) + 1;
    if (choiceNum == 1) {
        choice = "Rock";
    }
    else if (choiceNum == 2) {
        choice = "Paper";
    }
    else {
        choice = "Scissors";
    }
    return choice;
}

function playRound(playerSelection, computerSelection) {
    let message = "";
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        message = "It's a tie";
    }
    else if (playerSelection.toLowerCase() == "rock") {
        if (computerSelection.toLowerCase() == "scissors") {
            message = "Rock beats scissors. You win!";
        } else if (computerSelection.toLowerCase() == "paper") {
            message = "Paper beats rock. You lose.";
        }
    }
    else if (playerSelection.toLowerCase() == "scissors") {
        if (computerSelection.toLowerCase() == "rock") {
            message = "Rock beats scissors. You lose.";
        } else if (computerSelection.toLowerCase() == "paper") {
            message = "Scissors beat paper. You win!";
        }
    }
    else if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection.toLowerCase() == "rock") {
            message = "Paper beats rock. You win!";
        } else if (computerSelection.toLowerCase() == "scissors") {
            message = "Scissors beat paper. You lose";
        }
    }
    return message;
}

function game() {

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter your move: ");
        const computerSelection = getComputerChoice();
        console.log(computerSelection);
        console.log(playRound(playerSelection, computerSelection));
    }
}
game();

