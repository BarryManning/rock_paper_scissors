
//random choice generator
function generateRandom(choices) {
    return choices[Math.floor((Math.random()*choices.length))];
}

//tool choices
const possibleChoices = [rock, paper, scissors];

//game start
//start game is run
//player selects choice
//choice updates player choice and starts round
function startGame() {

//player choice set to default
    let playerChoice = '';

//button id variables
    const rock = document.getElementById("rock");
    const paper = document.getElementById("paper");
    const scissors = document.getElementById("scissors");

//start of round
    function playRound() {

    //player choice
        let playerChoice = '';

    //generate computer choice
        let compChoice = (generateRandom(possibleChoices));
        console.log('Computer chooses ' + (compChoice));

    //player score
        let playerScore = 0;
        let playerScoreUI = document.getElementById("playerScore");
        playerScoreUI.innerText = "Player Score:" + " " + playerScore;
    
    //comp score
        let compScore = 0;
        let compScoreUI = document.getElementById('compScore');
        compScoreUI.innerText = "Computer Score:" + " " + compScore;

    //update winner score
        function updatePlayerPoint() {
            playerScore++;
        }

        function updateCompPoint() {
            compScore++;
        }

    //compare choices and update score
        if (playerChoice === rock && compChoice === paper) {
            console.log('You have been defeated.');
            updateCompPoint();
        } else if (playerChoice === paper && compChoice === rock) {
            console.log('Congratulations, you win!');
            updatePlayerPoint();
        } else if (playerChoice === paper && compChoice === scissors) {
            console.log('You have been defeated.');
            updateCompPoint();
        } else if (playerChoice === scissors && compChoice === paper) {
            console.log('Congratulations, you win!');
            updatePlayerPoint();
        } else if (playerChoice === scissors && compChoice === rock) {
            console.log('You have been defeated.');
            updateCompPoint();
        } else if (playerChoice === rock && compChoice === scissors) {
            console.log('Congratulations, you win!');
            updatePlayerPoint();
        } else {
            console.log('Tie!');
        }
    }
    
    for (let i = 0; i < 3; i++) {
        playRound();
    }
}

startGame();