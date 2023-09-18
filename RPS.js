//main
let compScore = 0, playerScore = 0;
const options = ['rock', 'paper', 'scissors'];
const results = document.querySelector('.results');
const score = document.querySelector('.score');
const instructions = document.querySelector('.instructions');

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
    //sets computer choice to that comparison
    return options[compChoice]
}

//checks validity of playerInput
function getPlayerSelection(playerInput){
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

//Returns an h3 element with round winner
function playRound(playerChoice, compChoice){
    let h3 = document.createElement('h3');
    let roundResults = `You choose ${playerChoice} and computer choose ${compChoice}. Round result: `;
    
    //check if the two are equal 
    if (compChoice === playerChoice){
        roundResults += 'There was tie!';
        h3.textContent = roundResults;
        return h3;
    }

    //check who wins through if loops
    for (let i = 0; i < 3; i++){ 
        if (compChoice===options[i]){ //stop at whatever option comp made to check agains player option
            if (i == 0 && playerChoice===options[2]){ //first check for exception to rule of one behind comp choice in options
                compScore++;
                roundResults += `Computer wins, ${compChoice} beats ${playerChoice}!`;
            }else if (playerChoice===options[i-1]){ //if the player choice is one behind in array then computer wins 
                compScore++;
                roundResults += `Computer wins, ${compChoice} beats ${playerChoice}!`;
            } else {
                playerScore++;
                roundResults += `Player wins, ${playerChoice} beats ${compChoice}!`;//else player wins
            }
        }
    }

    h3.textContent = roundResults;
    return h3;
}


function playGame(playerChoice){
        //sets game over instructions after score limit has been reached
        if ( playerScore == 5 || compScore == 5){
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
        }else{ //plays round if input is valid
            delPrevInstruc(instructions);
            instructions.appendChild(playRound(playerChoice, compChoice));
            dispScore(score);
        }
        //sets game over instructions
        if ( playerScore == 5 || compScore == 5){
            gameOver(results);
            return;
        }
}

//appends results with winner
function gameOver(results){
    let winner = (playerScore > compScore) ? 'Player': 'Computer';
    results.textContent = `Game Over! ${winner} is the winner.`;
}

//appens score div with score
function dispScore(score){
    score.textContent = `The current score is Player: ${playerScore} Computer: ${compScore}`;
}

function delPrevInstruc(){
    instructions.removeChild(instructions.children[0]);
}

//resets game to defaults
function restartGame(){
    playerScore = 0;
    compScore = 0;
    score.textContent = '';
    results.textContent = ''; 
    
    let h2 = document.createElement('h2');
    h2.textContent = "Click an option below to play"
    delPrevInstruc(instructions);
    instructions.appendChild(h2);
}

//let buttons = document.getElementsByTagName('button');
let buttonOptions = document.querySelector('.options');
let buttons = buttonOptions.querySelectorAll('.option');
let restart = buttonOptions.querySelector('.restart');


//event listeners for buttons
buttons.forEach(button => button.addEventListener('click',() => {
    playGame(button.textContent);
}));

restart.addEventListener('click',()=>{
    restartGame(instructions ,score ,results);
});