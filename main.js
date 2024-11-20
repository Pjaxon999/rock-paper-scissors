//To test linking JS externally
console.log("Testing! 123!")

// Getting an RPS choice from the computer
// write a function that randomly returns rock paper or scissors
// 1. generate a random number between 0, 1, and 2.
// 2. add if else statements for each condition.
// 3. add a condition if this fails for some reason.
function getComputerChoice() {
    let compChoiceNum = Math.floor(Math.random() * 3)
    if (compChoiceNum == 0) {
        return "Rock"
    } else if (compChoiceNum == 1) {
        return "Paper"
    } else if (compChoiceNum == 2) {
        return "Scissors"
    } else {
        return "Spock!"
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

