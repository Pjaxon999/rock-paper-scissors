//To test linking JS externally

console.log("Testing! 123!")

// Declare the players score variables
let humanScore = 0;
let computerScore = 0;

// Getting an RPS choice from the computer
// write a function that randomly returns rock paper or scissors
// 1. generate a random number between 0, 1, and 2.
// 2. add if else statements for each condition.
// 3. add a condition if this fails for some reason.

function getComputerChoice() {
    let compChoiceNum = Math.floor(Math.random() * 3)
    if (compChoiceNum == 0) {
        return "rock"
    } else if (compChoiceNum == 1) {
        return "paper"
    } else if (compChoiceNum == 2) {
        return "scissors"
    } else {
        return "spock!"
    }
}

// Get RPS choice from Human player
// valid choices are "Rock" , "Paper" , "Scissors"
// add case insensitivity! 

function getHumanChoice() {
    let playerString = prompt("Rock, Paper, or Scissors?")
    let lowerCaseString = playerString.toLowerCase();
    return lowerCaseString;
}

// Take the human and computer player choices as arguments
// Plays a single round of rock paper scissors ()
// Increments the round winner's score
// logs a winner announcement

function playRound (humanChoice, computerChoice) {
    if (humanSelection == computerSelection) {
        console.log(`Draw! ${humanSelection} and ${computerSelection} are the same!`)
    } else if (humanSelection == "rock" && computerSelection == "paper"){
        console.log(`You lose! ${computerSelection} covers ${humanSelection}.`)
        computerScore++
    } else if (humanSelection == "rock" && computerSelection == "scissors"){
        console.log(`You win! ${humanSelection} smashes ${computerSelection}!`)
        humanScore++
    } else if (humanSelection == "paper" && computerSelection == "rock"){
        console.log(`You win! ${humanSelection} covers ${computerSelection}.`)
        humanScore++
    } else if (humanSelection == "paper" && computerSelection == "scissors"){
        console.log(`You lose! ${computerSelection} cuts ${humanSelection}!`)
        computerScore++
    } else if (humanSelection == "scissors" && computerSelection == "rock"){
        console.log(`You lose! ${computerSelection} smashes ${humanSelection}!`)
        computerScore++
    } else if (humanSelection == "scissors" && computerSelection == "paper"){
        console.log(`You win! ${humanSelection} cuts ${computerSelection}!`)
    } else {console.log("something has gone horribly wrong, try again!")}
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();