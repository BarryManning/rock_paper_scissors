
//random choice generator for comp choice
function generateRandom(choices) {
    return choices[Math.floor((Math.random()*choices.length))];
}

//tool choices
const possibleChoices = ['rock', 'paper', 'scissors'];

//game start
//player selects choice
//choice updates player choice and starts round
function startGame() {

//player choice set to default
    let playerChoice = '';

//button id variables
    const rock = document.getElementById("rock");
    const paper = document.getElementById("paper");
    const scissors = document.getElementById("scissors");

//add onclick events to each button that set playerchoice and start round 
    rock.addEventListener('click', function(){
        playerChoice = 'rock';
        playRound();
    })
    paper.addEventListener('click', function(){
        playerChoice = 'paper';
        playRound();
    })
    scissors.addEventListener('click', function(){
        playerChoice = 'scissors';
        playRound();
    })

//update winner score
    function updatePlayerPoint() {
        playerScore++;
        playerScoreUI.innerText = "Player Score:" + " " + playerScore.toString();
        console.log(playerScore);
    }

    function updateCompPoint() {
        compScore++;
        compScoreUI.innerText = "Computer Score:" + " " + compScore.toString();
        console.log(compScore);
    }

//player score
     let playerScore = 0;
     let playerScoreUI = document.getElementById("playerScore");
 
 //comp score
     let compScore = 0;
     let compScoreUI = document.getElementById('compScore');

//start of round
    function playRound() {

    //generate computer choice
        let compChoice = (generateRandom(possibleChoices));
        console.log('Computer chooses ' + (compChoice));

    //compare choices and update score
        if (playerChoice === 'rock' && compChoice === 'paper') {
            console.log('You have been defeated.');
            updateCompPoint();
        } else if (playerChoice === 'paper' && compChoice === 'rock') {
            console.log('Congratulations, you win!');
            updatePlayerPoint();
        } else if (playerChoice === 'paper' && compChoice === 'scissors') {
            console.log('You have been defeated.');
            updateCompPoint();
        } else if (playerChoice === 'scissors' && compChoice === 'paper') {
            console.log('Congratulations, you win!');
            updatePlayerPoint();
        } else if (playerChoice === 'scissors' && compChoice === 'rock') {
            console.log('You have been defeated.');
            updateCompPoint();
        } else if (playerChoice === 'rock' && compChoice === 'scissors') {
            console.log('Congratulations, you win!');
            updatePlayerPoint();
        } else {
            console.log('Tie!');
        }
    }
}