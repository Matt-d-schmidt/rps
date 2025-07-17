function getRandomInt(max){
    return Math.floor(Math.random() * max) + 1;
}

function getComputerChoice() {
    let ran = getRandomInt(4);
    if (ran === 1){
        return "Rock";
    } else if (ran === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("What's your choice?");
    return choice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(computerChoice, humanChoice) {
       let hChoice = humanChoice.toLowerCase();
       let cChoice = computerChoice.toLowerCase();
        if(hChoice === "rock" && cChoice === "Scissors"){
            return "You win! " + hChoice + " beats " + cChoice;
            humanScore = ++humanScore
        } else if (hChoice === "paper" && cCHoice === "Rock"){
            return "You win! " + hChoice + " beats " + cChoice;
            humanScore = ++humanScore
        } else if (hChoice === "scissors" && cCHoice === "paper"){
            return "You win! " + hChoice + " beats " + cChoice;
            humanScore = ++humanScore
        } else if (hChoice === cChoice) {
            return "It's a tie! you both picked " + hChoice;
        } else {
            return "You lose! " + hChoice + " beats " + cChoice;
            computerScore = ++computerScore
        }
    }

    for (let i = 0; i < 5; i++){
        let computerChoise = getComputerChoice();
        let humanChoice = getHumanChoice();

        playRound(computerChoise, humanChoice);
    }

}

playGame();