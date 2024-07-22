
let humanScore = 0;
let computerScore = 0;
let counter = 0;
let roundScore;
let humanScoreUpdate = 0;
let computerScoreUpdate = 0;

function getComputerChoice() {
    let number = Math.floor(Math.random()* 3) + 1;
     
    if (number===1) {
        return "paper";
    } else if (number===2){
        return "scissors";
    }else{
        return "rock";
    }
}

function getHumanChoice() {
    const input = prompt("Rock, Paper or Scissors?");
    const inputLower = input.toLowerCase();
    
    if (inputLower==="rock") {
        return "rock";
    } else if (inputLower==="paper") {
       return "paper";
    } else if (inputLower==="scissors"){
       return "scissors";
    }else {
        alert("invalid input, try again");
        return getHumanChoice();
    }

}   

function playRound(humanChoice, computerChoice) {
     humanChoice = getHumanChoice();
     computerChoice = getComputerChoice();
    

   if (humanChoice==="rock" && computerChoice==="scissors"){
        alert("You win! rock beats scissors.");
        return ++humanScore;

   } else if (humanChoice==="rock" && computerChoice==="paper"){
        alert("You lose! paper beats rock.");
        return ++computerScore;

   }else if (humanChoice==="scissors" && computerChoice==="paper") {
       alert("You win! scissors beat paper.");
       return ++humanScore;

   }else if (humanChoice==="scissors" && computerChoice==="rock") {
       alert("You lose! rock beats scissors");
       return ++computerScore;

   }else if (humanChoice==="paper" && computerChoice==="rock") {
       alert("You win! paper beats rock");
        return ++humanScore;

   }else if (humanChoice==="paper" && computerChoice==="scissors") {
       alert("You lose! scissors beat paper");
        return ++computerScore;

   } else if(humanChoice===computerChoice) {
       alert("It's a draw");
       return 0;
    }
}

function playGame() {

    if (counter<5) {
       playRound();
        counter++;
        playGame();
    }else {
        alert("Game Over!")
        alert(`"Your score is ${humanScore}."`);
        if (humanScore > computerScore) {
         alert("You won!");
        } else {
         alert("You lost!");
        }
     }
    }


playGame();
 


