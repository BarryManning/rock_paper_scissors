//rock paper scissors
//create a push to play button        (do this later)
//create an array of possible choices
//create a function that takes the players choice and converts it to all lowercase
//create a function that randomly chooses the computers choice
//create a function that compares the users choice to the computers choice


function playRound() {

    //tool choices
        const possibleChoices = ['rock', 'paper', 'scissors'];

    //random choice generator
        function generateRandom(choices) {
            return choices[Math.floor((Math.random()*choices.length))];
        }

    //generate computer choice
        let compChoice = (generateRandom(possibleChoices));
        console.log('Computer chooses ' + (compChoice));

    //convert to lowercase
        function convertToLower (choice) {
            return choice.toLowerCase();
        }

    //player choice
        let playerChoice = convertToLower('Paper');
        console.log('Player chooses ' + (playerChoice));

    //compare choices
        if (playerChoice == 'rock' && compChoice == 'paper') {
            console.log('You have been defeated.');
        } else if (playerChoice == 'paper' && compChoice == 'rock') {
            console.log('Congratulations, you win!');
        } else if (playerChoice == 'paper' && compChoice == 'scissors') {
            console.log('You have been defeated.');
        } else if (playerChoice == 'scissors' && compChoice == 'paper') {
            console.log('Congratulations, you win!');
        } else if (playerChoice == 'scissors' && compChoice == 'rock') {
            console.log('You have been defeated.');
        } else {
            console.log("It's a tie!");
        }
    }

    playRound();

