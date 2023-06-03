//rock paper scissors
//create a push to play button
//create an array of possible choices
//create a function that takes the players choice and converts it to all lowercase
//create a function that randomly chooses the computers choice
//create a function that compares the users choice to the computers choice

function startGame() {

//keep a running score
    let playerWinCount = 0;
    let compWinCount = 0;

    function playRound() {

    //tool choices
        const possibleChoices = ['rock', 'paper', 'scissors'];

    //random choice generator
        function generateRandom(choices) {
            return choices[Math.floor((Math.random()*choices.length))];
        }

    //player choice
        let playerChoice = convertToLower(prompt('Please choose your tool'));
        console.log('Player chooses ' + (playerChoice));

    //generate computer choice
        let compChoice = (generateRandom(possibleChoices));
        console.log('Computer chooses ' + (compChoice));

    //convert to lowercase
        function convertToLower(choice) {
            return choice.toLowerCase();
        }

    //update winner score
        function updatePlayerPoint() {
            playerWinCount++;
            console.log("Player Score - " + playerWinCount);
        }

        function updateCompPoint() {
            compWinCount++;
            console.log("Computer Score - " + compWinCount);
        }

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

    //create a 5 round loop
    for (let i = 0; i < 5; i++){
        playRound();
    }
}

startGame();