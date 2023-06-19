
//random choice generator for comp choice
function generateRandom(choices) {
    return choices[Math.floor((Math.random()*choices.length))];
}

//tool choices
const possibleChoices = ['rock', 'paper', 'scissors'];

//message display
let updateMessage = document.getElementById("updateMessage");

//game start function
function startGame() {

//player choice set to default
    let playerChoice = '';

//button id variables
    const rock = document.getElementById("rock");
    rock.innerHTML = '✊🏻';
    const paper = document.getElementById("paper");
    paper.innerHTML = '🖐🏻';
    const scissors = document.getElementById("scissors");
    scissors.innerHTML = '✌🏻';

    //end game on win function
    function onEnd() {
        rock.style.display = 'none';
        paper.style.display = 'none';
        scissors.style.display = 'none';
        updateMessage.style.fontSize = '50px'
        startButton.addEventListener('click', function(){
            location.reload()
        });
        startButton.innerText = 'PLAY AGAIN';
        startButton.style.display = 'flex';
    }

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

    //update winner score
    function updatePlayerPoint() {
        playerScore++;
        playerScoreUI.innerHTML = "Player score:" + " " + playerScore.toString();
        updateMessage.innerHTML = 'Player picked: ' + playerChoice + ' ' + '<br>' + 'Computer picked: ' + compChoice + '<br>' + 'Player wins the round!';
    }

    function updateCompPoint() {
        compScore++;
        compScoreUI.innerHTML = "Computer score:" + " " + compScore.toString();
        updateMessage.innerHTML = 'Player picked: ' + playerChoice + ' ' + '<br>' + 'Computer picked: ' + compChoice + '<br>' + 'Computer wins the round';
    }

    //compare choices and update score
        if (playerChoice === 'rock' && compChoice === 'paper') {
            updateCompPoint();
        } else if (playerChoice === 'paper' && compChoice === 'rock') {
            updatePlayerPoint();
        } else if (playerChoice === 'paper' && compChoice === 'scissors') {
            updateCompPoint();
        } else if (playerChoice === 'scissors' && compChoice === 'paper') {
            updatePlayerPoint();
        } else if (playerChoice === 'scissors' && compChoice === 'rock') {
            updateCompPoint();
        } else if (playerChoice === 'rock' && compChoice === 'scissors') {
            updatePlayerPoint();
        } else {
            updateMessage.innerHTML = 'Player picked: ' + playerChoice + '<br>' + 'Computer picked: ' + compChoice + '<br>' + "It's a tie!";
        }

        if (compScore === 3) {
            updateMessage.innerHTML = 'You lost.'
            onEnd();
        } else if (playerScore === 3) {
            updateMessage.innerHTML = 'You win!'
            onEnd();
        }
    }
}

//start button selector
const startButton = document.getElementById('startButton');
startButton.addEventListener('click', function(){
    startButton.style.display = 'none';
    startGame();
});
