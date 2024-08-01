# odin-rock-paper-scissors
A simple game of rock, paper & scissors

PSEUDOCODE

1. Write code for computer's choice(pick random), human choice(input), play round, play game.

2. Computer's choice: use mathrandom for values between 1-3, assign to rock, paper, scissor. 

3. Human's choice: provides string input rock, paper or scissors. return those if value match or return invalid input and go back to prompt. 

4. call human choice and computer choice, then match values for all possible combos according to rock>scissors>paper>rock and increment computerscore and humanscore accordingly. Also provide alerts.

5. set counter to 5 and call playround as long as counter is  less than 5 then stop and show score and who won. 


Before code for UI: 


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

human choice function

function getHumanChoice() {
    input = e.target;
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

