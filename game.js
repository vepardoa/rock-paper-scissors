function getComputerChoice(){
    let choice = '';
    let choiceNum = Math.floor(Math.random() * 3 ) + 1;
    if(choiceNum == 1){
        choice = "Rock";
    }
    else if(choiceNum == 2){
        choice = "Paper";
    }
    else {
        choice = "Scissors";
    }
    return choice;
}