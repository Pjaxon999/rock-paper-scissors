//To test linking JS externally
console.log("Testing! 123!");

//Declaring constants for later use with DOM methods
const resultTracker = document.getElementById("resultTracker");
const uiDiv = document.querySelector(".gameUi")

// Getting an RPS choice from the computer
// write a function that randomly returns rock paper or scissors
// 1. generate a random number between 0, 1, and 2.
// 2. add if else statements for each condition.
function getComputerChoice() {
    let compChoiceNum = Math.floor(Math.random() * 3)
    if (compChoiceNum == 0) {
        return "rock"
    } else if (compChoiceNum == 1) {
        return "paper"
    } else if (compChoiceNum == 2) {
        return "scissors"
    }
}

//Initialize variables for keeping score and the round number
let roundCount = 1;
let playerScore = 0;
let computerScore = 0;

function playerScoreUp() {
    if (playerScore < 4){
    playerScore++;
    document.getElementById("playerScore").textContent = playerScore;
    } else {
    playerScore++;
    document.getElementById("playerScore").textContent = playerScore;
    evalWinner();
    }
}

function computerScoreUp() {
    if (computerScore < 4){
    computerScore++;
    document.getElementById("computerScore").textContent = computerScore;
    } else {
    computerScore++;
    document.getElementById("computerScore").textcontent = computerScore;
    evalWinner();
    }
}

function roundIncreaser() {
    roundCount++;
    document.getElementById("roundCount").textContent = roundCount;
}

// Get RPS choice from Human player
// valid choices are "Rock" , "Paper" , "Scissors"
// add case insensitivity! 
function getHumanChoice(event) {
    const buttonId = event.target.id;
    if(buttonId == 'rock') {
        playRound("rock");
    } else if (buttonId == 'paper') {
        playRound("paper");
    } else if (buttonId == 'scissors') {
        playRound("scissors");
    }
    
}


// Take the human and computer player choices as arguments
// Plays a single round of rock paper scissors ()
// Increments the round winner's score
// logs a winner announcement
function playRound (humanChoice) {    
    let humanSelection = humanChoice;
    let computerSelection = getComputerChoice();
    if (humanSelection == computerSelection) {
        resultTracker.textContent = `Draw! ${humanSelection} and ${computerSelection} are the same!`;
        console.log("Draw");
        
    } else if (humanSelection == "rock" && computerSelection == "paper"){
        resultTracker.textContent = `You lose! ${computerSelection} covers ${humanSelection}.`;
        console.log("Lose");
        computerScoreUp();
    } else if (humanSelection == "rock" && computerSelection == "scissors"){
        resultTracker.textContent = `You win! ${humanSelection} smashes ${computerSelection}!`;
        console.log("Win");
        playerScoreUp();
    } else if (humanSelection == "paper" && computerSelection == "rock"){
        resultTracker.textContent = `You win! ${humanSelection} covers ${computerSelection}.`;
        console.log("Win");
        playerScoreUp();
    } else if (humanSelection == "paper" && computerSelection == "scissors"){
        resultTracker.textContent = `You lose! ${computerSelection} cuts ${humanSelection}!`;
        console.log("Lose")
        computerScoreUp();
    } else if (humanSelection == "scissors" && computerSelection == "rock"){
        resultTracker.textContent = `You lose! ${computerSelection} smashes ${humanSelection}!`;
        console.log("Lose");
        computerScoreUp();
    } else if (humanSelection == "scissors" && computerSelection == "paper"){
        resultTracker.textContent = `You win! ${humanSelection} cuts ${computerSelection}!`;
        console.log("Win");
        playerScoreUp();
    } else {alert("something has gone horribly wrong, try again!")}
    roundIncreaser();
}


//Evaluate a winner based on the score after 5 rounds
function evalWinner(){
    if (playerScore > computerScore){
        uiDiv.style.display = "none";
        let victoryMessage = document.createElement("h2");
        victoryMessage.textContent = "Congratulations! You acheived supreme victory over the machine race!";
        document.body.appendChild(victoryMessage);
    } else {
        uiDiv.style.display = "none";
        let defeatMessage = document.createElement("h2");
        defeatMessage.textContent = "Sadly, the machine race has triumphed over mankind. What fate have you doomed us to?";
        document.body.appendChild(defeatMessage);
    }    
}
    
//Event listeners for buttons
document.getElementById("rock").addEventListener("click", getHumanChoice);
document.getElementById("paper").addEventListener("click", getHumanChoice);
document.getElementById("scissors").addEventListener("click", getHumanChoice);