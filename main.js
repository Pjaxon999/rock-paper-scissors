console.log("Testing! 123!")

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

// write a function that randomly returns rock paper or scissors
// 1. generate a random number
// 2. if random number is 1/3 of the range, return "rock"
// 3 and 4. do the same for the other 2/3 but for "paper" and "scissors"
