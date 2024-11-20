//To test linking JS externally
console.log("Testing! 123!")



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

// Get RPS choice from Human player
// valid choices are "Rock" , "Paper" , "Scissors"
// add case insensitivity! 
function getHumanChoice() {
    let playerString = prompt("Rock, Paper, or Scissors?")
    let lowerCaseString = playerString.toLowerCase();
    return lowerCaseString;
}

// playGame combines functions from previous steps to run the entire game at once five times.
// Uses a while loop to make sure the game is played 5 times.

function playGame(){
    // Declare the players score variables
    let humanScore = 0;
    let computerScore = 0;


    // loop to run 5 rounds of the game 
    let counter = 0;
    while (counter < 5){
        playRound();
        counter++;
    }
    if (counter == 5) {
        evalWinner();
    }

    // Take the human and computer player choices as arguments
    // Plays a single round of rock paper scissors ()
    // Increments the round winner's score
    // logs a winner announcement
    function playRound (humanChoice, computerChoice) {    
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        if (humanSelection == computerSelection) {
            alert(`Draw! ${humanSelection} and ${computerSelection} are the same!`)
            console.log("Draw");
        } else if (humanSelection == "rock" && computerSelection == "paper"){
            alert(`You lose! ${computerSelection} covers ${humanSelection}.`)
            console.log("Lose");
            computerScore++;
        } else if (humanSelection == "rock" && computerSelection == "scissors"){
            alert(`You win! ${humanSelection} smashes ${computerSelection}!`)
            console.log("Win");
            humanScore++;
        } else if (humanSelection == "paper" && computerSelection == "rock"){
            alert(`You win! ${humanSelection} covers ${computerSelection}.`)
            console.log("Win");
            humanScore++;
        } else if (humanSelection == "paper" && computerSelection == "scissors"){
            alert(`You lose! ${computerSelection} cuts ${humanSelection}!`)
            console.log("Lose")
            computerScore++;
        } else if (humanSelection == "scissors" && computerSelection == "rock"){
            alert(`You lose! ${computerSelection} smashes ${humanSelection}!`)
            console.log("Lose");
            computerScore++;
        } else if (humanSelection == "scissors" && computerSelection == "paper"){
            alert(`You win! ${humanSelection} cuts ${computerSelection}!`)
            console.log("Win");
            humanScore++;
        } else {alert("something has gone horribly wrong, try again!")}
    }

    //Evaluates a winner based on the score values
    function evalWinner(){
        if (humanScore > computerScore){
            alert("Congratulations! You acheived supreme victory over the machine race!")
        } else if (humanScore < computerScore){
            alert("Sadly, the machine race has triumphed over mankind. What fate have you doomed us to?")
        } else if (humanScore == computerScore){
            alert("A draw? But how are we ever going to settle this whole man vs. machine thing?!")
        }
    }
    
}