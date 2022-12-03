 let playerScore = 0 
 let computerScore = 0
 
 
 
 // Computer Choice: randomly calls rock,paper,scissors

 const getComputerChoice = () => {
    const arrOfChoice = ['rock','paper','scissors']
    const randomChoice = Math.floor(Math.random()*arrOfChoice.length)
    return arrOfChoice[randomChoice] 
    
 }

 //plays a single round 

 const playRound = (playerSelection,computerSelection)=>{
    
    if(playerSelection === computerSelection){
        return `You tied! You both picked ${playerSelection}`
    } else if(playerSelection === 'rock' &&  computerSelection === 'scissors'){
        playerScore ++
        return `You won! ${playerSelection} beats ${computerSelection}`
    }else if(playerSelection === 'paper' &&  computerSelection === 'rock'){
        playerScore ++
        return `You won! ${playerSelection} beats ${computerSelection}`
    } else if(playerSelection === 'scissors' &&  computerSelection === 'paper'){
        playerScore ++
        return `You won! ${playerSelection} beats ${computerSelection}`
    }else if(computerSelection === 'rock' &&  playerSelection === 'scissors'){
        computerScore ++
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }else if(computerSelection === 'paper' &&  playerSelection === 'rock'){
        computerScore ++
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }else if(computerSelection === 'scissors' &&  playerSelection === 'paper'){
        computerScore++
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
 }

 

 const game = ()=>{
    for(let i = 0 ; i < 5; i++){
        const computerSelection = getComputerChoice()
        const playerSelection = prompt('Choose what to throw','Rock,Paper,Scissors').toLowerCase()
        console.log(playRound(playerSelection,computerSelection))
    }
    if(playerScore > computerScore){
        return 'You win best out of 5!'
     }else if (computerScore > playerScore) {
        return 'Computer wins best out of 5!'
     }else {
        return 'It\'s a draw. No one wins!'
     }
 }

 console.log(game())