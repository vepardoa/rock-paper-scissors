let playerCounter =0, computerCounter = 0;

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
// const greeting = `Hello`;
function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        console.log("It's a tie");
    }
    else if (playerSelection.toLowerCase() == "rock") {
        if (computerSelection.toLowerCase() == "scissors") {
            console.log("Rock beats scissors. You win!");
            playerCounter++;
        } else if (computerSelection.toLowerCase() == "paper") {
            console.log("Paper beats rock. You lose.");
            computerCounter++;
        }
    }
    else if (playerSelection.toLowerCase() == "scissors") {
        if (computerSelection.toLowerCase() == "rock") {
            console.log("Rock beats scissors. You lose.");
            computerCounter++;
        } else if (computerSelection.toLowerCase() == "paper") {
            console.log("Scissors beat paper. You win!");
            playerCounter++;
        }
    }
    else if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection.toLowerCase() == "rock") {
            console.log("Paper beats rock. You win!");
            playerCounter++;
        } else if (computerSelection.toLowerCase() == "scissors") {
            console.log("Scissors beat paper. You lose.");
            computerCounter++;
        }
    }
}

function game() {

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter your move: ");
        const computerSelection = getComputerChoice();
        console.log("Your selection: " + playerSelection);
        console.log("Computer selection: " + computerSelection);
        playRound(playerSelection, computerSelection);
    }
    if(computerCounter > playerCounter){
        console.log("Computer score: " + computerCounter + " Your score: " + playerCounter);
        console.log("You lose");
    } else if (computerCounter < playerCounter){
        console.log("Computer score:" + computerCounter + " Your score: " + playerCounter);
        console.log("You win");
    } else {
        console.log("Computer score: " + computerCounter + " Your score: " + playerCounter);
        console.log("It's a tie");
    }  
}
game();