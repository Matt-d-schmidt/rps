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
results.style.cssText = 'font-size: 30px; color: black;'
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const computerChoice = getComputerChoice();
        const humanChoice = button.textContent;
        playRound(computerChoice, humanChoice);
        results.innerHTML = `<span style="font-weight: bold;">You chose:</span> ${humanChoice}, <br><span style="font-weight: bold;">Computer chose:</span> ${computerChoice}.<br>
                     <span style="font-weight: bold;">Score</span> - <br>YOU: ${humanScore}, <br>COMPUTER: ${computerScore}`;
        if (humanScore === 5) {
            results.innerHTML += "<br><span style='font-weight: bold;'>You win the game!</span>";
            humanScore = 0;
            computerScore = 0;
        } else if (computerScore === 5) {
            results.innerHTML += "<br><span style='font-weight: bold;'>Computer wins the game!</span>";
            humanScore = 0;
            computerScore = 0;
        } else {
            results.innerHTML += "<br><span style='font-weight: bold;'>Keep playing!</span>";
        }
    });
});