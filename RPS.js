//main
let compScore = 0, playerScore = 0;
let options = ['rock', 'paper', 'scisors'];
    //plays 5 rounds and declares a winner
playGame();


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
function getPlayerSelection(){
    //prompt for user input
    let playerInput = prompt("enter your choice");
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
    //check if the two are equal 
    if (compChoice === playerChoice){
        return 'there was tie'
        //console.log("there was a tie");
    }

    //check who wins through if loops
    for (let i = 0; i < 3; i++){ 
        if (compChoice===options[i]){ //stop at whatever option comp made to check agains player option
            if (i == 0 && playerChoice===options[2]){ //first check for exception to rule of one behind comp choice in options
                compScore++;
                return 'Computer wins'
            }else if (playerChoice===options[i-1]){ //if the player choice is one behind in array then computer wins 
                compScore++;
                return 'Computer wins';
            } else {
                playerScore++;
                return 'Player wins';//else player wins
            }
        }
    }
}

function playGame(){
    while (playerScore < 5 && compScore < 5){
        //get player and computer choices
        let compChoice = getCompSelection();
        let playerChoice = getPlayerSelection();
        console.log('You chose ' + playerChoice);

        //check for valid input
        if (!playerChoice){
            console.log('invalid input')
        }else{
            console.log("You chose " + playerChoice + " and computer chose " + compChoice + ", the result: " + playRound(playerChoice,compChoice));
            console.log('The current score is player: ' + playerScore + " computer: " + compScore)
        }
    }
    console.log((playerScore < compScore) ? 'Computer won the game' : 'Player won the Game');
}