function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    let answer = '';

    if (choice === 0) answer = 'ROCK';
    else if (choice === 1) answer = 'PAPER';
    else answer = 'SCISSORS';

    return answer;
}

function playRound(playerSelection, computerChoice){

    let theResult = '';

    playerSelection = playerSelection.toUpperCase();

    if (playerSelection === 'ROCK' | playerSelection === 'PAPER' | playerSelection === 'SCISSORS'){
        // Player selected 'Rock' 
        
        if(playerSelection === 'ROCK'){
            if      (computerChoice === 'ROCK') theResult = 'Draw'; 
            else if (computerChoice === 'PAPER') theResult = 'PC Wins!';
            else if (computerChoice === 'SCISSORS') theResult = 'Player Wins!';  
        }

        // Player selected 'Paper'

        else if(playerSelection === 'PAPER'){
            if      (computerChoice === 'ROCK') theResult = 'Player Wins'; 
            else if (computerChoice === 'PAPER') theResult = 'Draw!';
            else if (computerChoice === 'SCISSORS') theResult = 'PC Wins!';  
        }

        // Player selected 'Scissors'

        else {
            if      (computerChoice === 'ROCK') theResult = 'PC Wins'; 
            else if (computerChoice === 'PAPER') theResult = 'Player Wins!';
            else if (computerChoice === 'SCISSORS') theResult = 'Draw!';  
        }
    }
    else{
        console.log("Invalid option, aborting...")
    }

    return theResult;
}

function game(){

    for(let i=0; i<5; i++){
        let playerChoice = prompt("Choose: Rock/Scissors Paper");
        let pcChoice = getComputerChoice();
        console.log(playRound(playerChoice, pcChoice));
    }
    
}