let humanScore = 0;
let computerScore = 0;
let counter = 0;
let input;

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
    return input;

}   

function playRound(humanChoice, computerChoice) {
     humanChoice = getHumanChoice();
     computerChoice = getComputerChoice();
    

   if (humanChoice==="rock" && computerChoice==="scissors"){
        comment.textContent="You win! rock beats scissors.";
        return ++humanScore;

   } else if (humanChoice==="rock" && computerChoice==="paper"){
        comment.textContent="You lose! paper beats rock.";
        return ++computerScore;

   }else if (humanChoice==="scissors" && computerChoice==="paper") {
       comment.textContent="You win! scissors beat paper.";
       return ++humanScore;

   }else if (humanChoice==="scissors" && computerChoice==="rock") {
    comment.textContent="You lose! rock beats scissors";
       return ++computerScore;

   }else if (humanChoice==="paper" && computerChoice==="rock") {
       comment.textContent="You win! paper beats rock";
        return ++humanScore;

   }else if (humanChoice==="paper" && computerChoice==="scissors") {
       comment.textContent="You lose! scissors beat paper";
        return ++computerScore;

   } else if(humanChoice===computerChoice) {
       comment.textContent="It's a draw";
       return 0;
    }
}

const div = document.createElement("div");
document.body.appendChild(div);
const header = document.createElement("h3");
header.textContent = "ROCK PAPER SCISSORS";
div.appendChild(header);
const rock = document.createElement("button");
rock.textContent="rock";
div.appendChild(rock);
const paper = document.createElement("button");
paper.textContent="paper";
div.appendChild(paper);
const scissors = document.createElement("button");
scissors.textContent="scissors";
div.appendChild(scissors);
const message = document.createElement("p");
message.textContent="First to make 5 points, wins!"
div.appendChild(message);
const results = 
document.createElement("div");
div.appendChild(results);
const runningScoreHuman = document.createElement('div');
const runningScoreComputer = document.createElement('div');
let comment =
document.createElement("p");
results.appendChild(comment);

//styles:
div.style.textAlign= 'center';
const buttons = document.querySelectorAll("button");
buttons.forEach((button)=>{
    button.style.padding="10px";
    button.style.margin ="10px";
    button.style.borderRadius="5px";
    button.style.backgroundColor="grey";
    button.style.color="white";

})


function playGame() {

let gameEnded = false;

for (let button of buttons){

    button.addEventListener('click',()=> {
        if (gameEnded==true) return;

        if (humanScore<5 && computerScore<5){
            button.value = button.textContent;
            input= button.value;
            playRound();

            runningScoreHuman.textContent=`Your score: ${humanScore}`;
            runningScoreComputer.textContent = `Computer score: ${computerScore}`;
            results.appendChild(runningScoreHuman);
            results.appendChild(runningScoreComputer);

        
            }else{
            let yourScore = document.createElement('p');
            yourScore.textContent = `Your score is ${humanScore}.`;
            results.appendChild(yourScore);

            let verdict = document.createElement('p');
            if (humanScore > computerScore) {
                verdict.textContent = "You won!";
            }else {
                verdict.textContent = "You lost";
            }
            results.appendChild(verdict);
            gameEnded = true;
            };            
    }); 
    
 };
}

playGame();
