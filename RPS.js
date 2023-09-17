//main
let compScore = 0, playerScore = 0;
const options = ['rock', 'paper', 'scissors'];
const results = document.querySelector('.results');
const score = document.querySelector('.score');
const instructions = document.querySelector('.instructions');

    //plays 5 rounds and declares a winner
//playGame();


//random number between 0 through 2
function randChoice(){
   let choice = Math.floor(Math.random() * 3);
   return choice;
}

//get computer choice
function getCompSelection(){
    //choose random number 0 through 2
    let compChoice = randChoice();
    //compare number to a list of strings with R P S
    //set computer choice to that comparison
    return options[compChoice]
}

//get user choice
function getPlayerSelection(playerInput){
    //prompt for user input
    
    //add event listener to buttons
    
    //check for null (no input)
    if (playerInput == null) return null;
    //format user input to be all lowercase
    playerInput = playerInput.toLowerCase();
    //check for validity of input 
    //if invalid return with error 
    if (options.includes(playerInput)){
        return playerInput;
    }else{
        return false
    }

}

//compare two values to see who wins
function playRound(playerChoice, compChoice){
    let div = document.createElement('div');
    
    //check if the two are equal 
    if (compChoice === playerChoice){
        div.textContent = 'there was tie';
        //console.log("there was a tie");
    }

    //check who wins through if loops
    for (let i = 0; i < 3; i++){ 
        if (compChoice===options[i]){ //stop at whatever option comp made to check agains player option
            if (i == 0 && playerChoice===options[2]){ //first check for exception to rule of one behind comp choice in options
                compScore++;
                div.textContent = 'Computer wins';
            }else if (playerChoice===options[i-1]){ //if the player choice is one behind in array then computer wins 
                compScore++;
                div.textContent = 'Computer wins';
            } else {
                playerScore++;
                div.textContent = 'Player wins';//else player wins
            }
        }
    }

    return div;
}

function playGame(playerChoice){
   // while (playerScore < 5 && compScore < 5){
        if ( playerScore == 5 || compScore == 5){
            //console.log("Game over");
            gameOver(results);
            return;
        }
        //get player and computer choices
        let compChoice = getCompSelection();
        playerChoice = getPlayerSelection(playerChoice);

        //check for valid input
        if (playerChoice === null) return;
        if (!playerChoice){
            console.log('Invalid input! Restart game!')
        }else{
            //console.log("You chose " + playerChoice + " and the computer chose " + compChoice + ", the result: " + playRound(playerChoice,compChoice));
            instructions.appendChild(playRound(playerChoice, compChoice));
            dispScore(score);
            //console.log('The current score is player: ' + playerScore + " computer: " + compScore)
        }
    //}
    //console.log((playerScore == compScore) ? 'Thank you for playing' : (playerScore < compScore) ? 'Computer won the game' : 'Player won the Game');
}

function gameOver(results){
    let winner = (playerScore > compScore) ? 'Player': 'Computer';
    results.textContent = `Game Over! ${winner} is the winner.`;
}
function dispScore(score){
    score.textContent = `The current score is Player: ${playerScore} Computer: ${compScore}`;
}

//let buttons = document.getElementsByTagName('button');
let buttonOptions = document.querySelector('.options');
let buttons = buttonOptions.querySelectorAll('.option');


buttons.forEach(button => button.addEventListener('click',() => {
    playGame(button.textContent);
}));