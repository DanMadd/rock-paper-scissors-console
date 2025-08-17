//console.log("Hello World")

//Score variables
let playerScore = 0;
let computerScore = 0;

//Computer selection
function getComputerChoice(){
    let compResNum;
    let compRes;
    compResNum = Math.random()
    if (compResNum <= 0.33) {
        compRes = "rock"
    } else if (compResNum <= 0.66 && compResNum > 0.33) {
        compRes = "scissors"
    } else if (compResNum > 0.66) {
        compRes = "paper"
    } else {
        console.log("Math error")
    }
    return compRes
}

//Player selection
function getPlayerChoice(){
    let playerResRaw = prompt("Rock, paper, scissors?");
    let playerRes = playerResRaw.toLowerCase();
    return playerRes
}

//One round logic
function playRound(playerChoice, computerChoice){

    //Handle all draws in one if, no score increase
    if (playerChoice == computerChoice) {
        return console.log("Draw")
    }

    if (playerChoice == "rock") {
        if (computerChoice == "paper") {
            computerScore = computerScore + 1;
            return console.log("Lose, paper beats rock")
        } else {
            playerScore = playerScore + 1;
            return console.log("Win, rock beats scissors")
        }
    } else if (playerChoice == "paper") {
        if (computerChoice == "scissors") {
            computerScore = computerScore + 1;
            return console.log("Lose, scissors beats paper")
        } else {
            playerScore = playerScore + 1;
            return console.log("Win, paper beats rock")
        }
    } else if (playerChoice == "scissors") {
        if (computerChoice == "rock") {
            computerScore = computerScore + 1;
            return console.log("Lose, rock beats scissors")
        } else {
            playerScore = playerScore + 1;
            return console.log("Win, scissors beats paper")
        }
    }
}


//Play the game to 5 rounds

function playGame(){
    for (let i = 0; i < 5; i++){
        //Play the round
        
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        
        playRound(playerSelection, computerSelection);
    }
    if (playerScore == computerScore) {
        console.log("Player:" + playerScore + " Computer:" + computerScore +" - Draw")
    } else if (playerScore > computerScore) {
        console.log("Player:" + playerScore + " Computer:" + computerScore +" - Player Wins")
    } else {
        console.log("Player:" + playerScore + " Computer:" + computerScore +" - Computer Wins")
    }
}

playGame();