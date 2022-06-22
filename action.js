let choices = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];

let rockButton = document.querySelector("#rock");
let paperButton = document.querySelector("#paper");
let scissorsButton = document.querySelector("#scissors");
let lizardButton = document.querySelector("#lizard");
let spockButton = document.querySelector("#spock");

let playerText = document.querySelector("#player");
let computerText = document.querySelector("#computer");
let text = document.querySelector("#text");

var playerChoice = "";
var computerChoice = "";

rockButton.addEventListener('click', function(){
    playerChoice = this.innerText;
    computerPick();
});
paperButton.addEventListener('click', function(){
    playerChoice = this.innerText;
    computerPick();
});
scissorsButton.addEventListener('click', function(){
    playerChoice = this.innerText;
    computerPick();
});
lizardButton.addEventListener('click', function(){
    playerChoice = this.innerText;
    computerPick();
});
spockButton.addEventListener('click', function(){
    playerChoice = this.innerText;
    computerPick();
});

function computerPick(){
    var index = Math.floor(Math.random() * 5);
    computerChoice = choices[index];
    playerText.innerText = `Player: ${playerChoice}`;
    computerText.innerText = `Player: ${computerChoice}`;
    if(playerChoice === 'Rock'){
        gameRockChoice();
    }
    else if(playerChoice === 'Paper'){
        gamePaperChoice();
    }
    else if(playerChoice === 'Scissors'){
        gameScissorsChoice();
    }
    else if(playerChoice === 'Lizard'){
        gameLizardChoice();
    }
    else if(playerChoice === 'Spock'){
        gameSpockChoice();
    }
}
function gameRockChoice(){

    if(computerChoice === "Paper" || computerChoice === "Spock"){
        text.innerText = "Computer Wins.";
    }
    else if(computerChoice === "Scissors" || computerChoice === "Lizard"){
        text.innerText = "Player Wins!!";
    }
    else{
        text.innerText = "Tie.";
    }
}
function gamePaperChoice(){
    if(computerChoice === "Rock" || computerChoice === "Spock"){
        text.innerText = "Player Wins!!";
    }
    else if(computerChoice === "Scissors" || computerChoice === "Lizard"){
        text.innerText = "Computer Wins.";
    }
    else{
        text.innerText = "Tie.";
    }
}
function gameScissorsChoice(){
    if(computerChoice === "Rock" || computerChoice === "Spock"){
        text.innerText = "Computer Wins.";
    }
    else if(computerChoice === "Paper" || computerChoice === "Lizard"){
        text.innerText = "Player Wins!!";
    }
    else{
        text.innerText = "Tie.";
    }
}
function gameLizardChoice(){
    if(computerChoice === "Rock" || computerChoice === "Scissors"){
        text.innerText = "Computer Wins.";
    }
    else if(computerChoice === "Paper" || computerChoice === "Spock"){
        text.innerText = "Player Wins!!";
    }
    else{
        text.innerText = "Tie.";
    }
}
function gameSpockChoice(){
    if(computerChoice === "Paper" || computerChoice === "Lizard"){
        text.innerText = "Computer Wins.";
    }
    else if(computerChoice === "Rock" || computerChoice === "Scissors"){
        text.innerText = "Player Wins!!";
    }
    else{
        text.innerText = "Tie.";
    }
}