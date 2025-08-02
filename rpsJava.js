function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let ran = getRandomInt(3);
    switch (ran) {
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

let humanScore = 0;
let computerScore = 0;

function playRound(computerChoice, humanChoice) {
    let hChoice = humanChoice.toLowerCase();
    let cChoice = computerChoice

    if (hChoice === "rock" && cChoice === "Scissors") {
        console.log("You win! " + hChoice + " beats " + cChoice);
        humanScore = ++humanScore
    } else if (hChoice === "paper" && cChoice === "Rock") {
        console.log("You win! " + hChoice + " beats " + cChoice);
        humanScore = ++humanScore
    } else if (hChoice === "scissors" && cChoice === "Paper") {
        console.log("You win! " + hChoice + " beats " + cChoice);
        humanScore = ++humanScore
    } else if (hChoice === cChoice) {
        console.log("It's a tie! you both picked " + hChoice);
        return;
    } else {
        console.log("You lose! " + hChoice + " beats " + cChoice);
        computerScore = ++computerScore
    }
}

const buttons = document.querySelectorAll('button');
const results = document.getElementById('result');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const computerChoice = getComputerChoice();
        const humanChoice = button.textContent;
        playRound(computerChoice, humanChoice);
        results.textContent = `You chose ${humanChoice}, Computer chose ${computerChoice}. 
                                 Score - YOU: ${humanScore}, COMPUTER: ${computerScore}`;
        if (humanScore === 5) {
            results.textContent += " You win the game!";
            humanScore = 0;
            computerScore = 0;
        } else if (computerScore === 5) {
            results.textContent += " Computer wins the game!";
            humanScore = 0;
            computerScore = 0;
        } else {
            results.textContent += " Keep playing!";
        }
    });
});