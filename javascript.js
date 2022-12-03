let playerPoints = 0
let computerPoints = 0
/* Randomly returns the computer choice */
const getComputerChoice = () =>{
  const randomChoice = ['rock','paper','scissors']
  let randomNumber = Math.floor(Math.random()* 3)
    return randomChoice[randomNumber]
}

/* Plays a single round of rps*/
const playRound = (playerSelection,computerSelection) =>{
    console.log('player:',playerSelection, 'computer:', computerSelection )

    if(playerSelection === computerSelection){
        return `It's a DRAW! You both chose ${playerSelection}`
    }else if(playerSelection === 'rock' && computerSelection === 'scissors'){
        playerPoints++
        return `You WIN! ${playerSelection} beats ${computerSelection}`
    }else if(computerSelection === 'rock' && playerSelection === 'scissors'){
        computerPoints++
        return `You LOSE! ${computerSelection} beats ${playerSelection}`
    }else if(playerSelection === 'paper' && computerSelection === 'rock'){
        playerPoints++
        return `You WIN! ${playerSelection} beats ${computerSelection}`
    }else if(computerSelection === 'paper' && playerSelection === 'rock'){
        computerPoints++
        return `You LOSE! ${computerSelection} beats ${playerSelection}`
    }else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        playerPoints++
        return `You WIN! ${playerSelection} beats ${computerSelection}`
    }else if(computerSelection === 'scissors' && playerSelection === 'paper'){
        computerPoints++
        return `You LOSE! ${computerSelection} beats ${playerSelection}`
    }
}


/* Plays 5 rounds of rps*/

function game(){
    for(let i = 0 ; i < 5 ; i++){
        const computerChoice = getComputerChoice()
        const playerSelection = prompt('Chose your throw!', 'Rock,Paper,Scissors').toLowerCase()
        console.log(playRound(playerSelection,computerChoice))
        console.log('player:',playerPoints,'computer:',computerPoints)
    }
    if(playerPoints > computerPoints){
        return `You WIN best out of 5!`
    }else if(computerPoints > playerPoints){
        return 'You LOSE best out of 5!'
    }else {
        return 'NO ONE WINS!'
    }
}

console.log(game())


