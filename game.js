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
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()){
        message = "It's a tie";
        return message;
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));

