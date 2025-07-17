function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let ran = getRandomInt(3);
    switch(ran) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2: 
            return "Scissors"    
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
       let cChoice = computerChoice

        if(hChoice === "rock" && cChoice === "Scissors"){
            console.log( "You win! " + hChoice + " beats " + cChoice);
            humanScore = ++humanScore
        } else if (hChoice === "paper" && cChoice === "Rock"){
            console.log( "You win! " + hChoice + " beats " + cChoice);
            humanScore = ++humanScore
        } else if (hChoice === "scissors" && cChoice === "Paper"){
            console.log("You win! " + hChoice + " beats " + cChoice);
            humanScore = ++humanScore
        } else if (hChoice === cChoice) {
            console.log( "It's a tie! you both picked " + hChoice);
            return;
        } else {
            console.log( "You lose! " + hChoice + " beats " + cChoice);
            computerScore = ++computerScore
        }
    }

    for (let i = 0; i < 5; i++){
        let computerChoise = getComputerChoice();
        let humanChoice = getHumanChoice();

        playRound(computerChoise, humanChoice);
    }
    console.log('Finak Score - YOU: ${humanScore}, COMPUTER: ${computerScore}');

    if (humanScore > computerScore) {
        console.log("You won the game!");
    } else if (computerScore > humanScore) {
        console.log("You lost the game.");
    } else {
        console.log("The game is a tie.");
    }
}

playGame();