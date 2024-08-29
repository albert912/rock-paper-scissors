   // Function to get computer's choice randomly
   function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to get human's choice from prompt


       // Global variables for scores
let humanScore = 0;
let computerScore = 0;

// Function to play a single round
function playRound(humanChoice, getComputerChoice) {

    const computerSelection = getComputerChoice;
   
    
// Determine the winner based on choices
if (
(humanChoice === "rock" && computerSelection === "scissors") ||
(humanChoice === "paper" && computerSelection === "rock") ||
(humanChoice === "scissors" && computerSelection === "paper")
) {
// Human wins--old code with console.log

//console.log(`You win! ${humanChoice} beats ${computerSelection}`);

// New code--with DOM
const divcon = document.querySelector("div");

const ptag= document.createElement("p");

ptag.textContent = `You win! ${humanChoice} beats ${getComputerChoice}`;

divcon.appendChild(ptag);




humanScore++; // Increment humanScore by 1

const display1 = document.querySelector("div");

const scores1 = document.createElement("p");

scores1.textContent = `Human Score: ${humanScore}, Computer Score: ${computerScore}`;

display1.appendChild(scores1);

} else if (humanChoice === computerSelection) {
// It's a tie--old code with console.log
//console.log(`It's a tie! Both chose ${humanChoice}`);

// New code -- with DOM
const divcon2 = document.querySelector("div");

const ptag2 = document.createElement("p");

ptag2.textContent = `It\'s a tie! Both chose ${humanChoice}`;

divcon2.appendChild(ptag2);

const display2 = document.querySelector("div");

const scores2 = document.createElement("p");

scores2.textContent = `Human Score: ${humanScore}, Computer Score: ${computerScore}`;

display2.appendChild(scores2);

} else {
// Computer wins--old code with console.log
//console.log(`You lose! ${computerSelection} beats ${humanChoice}`);


//Computer wins--New code -- with DOM
const divcon3= document.querySelector("div");

const ptag3 = document.createElement("p");

ptag3.textContent = `You lose! ${computerSelection} beats ${humanChoice}`

divcon3.appendChild(ptag3);

computerScore++; // Increment computerScore by 1


const display3 = document.querySelector("div");

const scores3 = document.createElement("p");

scores3.textContent = `Human Score: ${humanScore}, Computer Score: ${computerScore}`;

display3.appendChild(scores3);
}


if (humanScore > computerScore && humanScore === 5) {
    //old code
     //console.log("You win the game!");

    //new code with DOM

    const wingame = document.querySelector("div");

    const pwin = document.createElement("p");

    pwin.textContent = "You win the game!";

    wingame.appendChild(pwin);




 } else if (computerScore > humanScore && computerScore === 5) {
     //old code
     //console.log("Computer wins the game!");

     //new code with DOM

     const comwin = document.querySelector("div");

     const pcom = document.createElement("p");

     pcom.textContent="Computer wins the game!";

     comwin.appendChild(pcom);


 } else {
     //old code
     //console.log("It's a tie! No winner.");
     
     //new code with DOM

     const tiediv = document.querySelector("div");

     const ptie = document.createElement("p");

     ptie.textContent = "It's a tie! No winner.";

     tiediv.appendChild(ptie);

 }

  if (humanScore === 5 || computerScore === 5) {

    humanScore = 0

    computerScore = 0

}

else  {


}


}








// Event Listeners on button click

const rockbutton = document.querySelector("#rock");
const paperbutton = document.querySelector("#paper");
const scissorsbutton = document.querySelector("#scissors");

if (rockbutton) {
    rockbutton.addEventListener("click", () => {
      playRound("rock", getComputerChoice())
    })

} 

if (paperbutton) {
    paperbutton.addEventListener("click", () => {
      playRound("paper", getComputerChoice())
    })
}

if (scissorsbutton) {
    scissorsbutton.addEventListener("click", () => {
      playRound("scissors", getComputerChoice())
    })
} 








    


