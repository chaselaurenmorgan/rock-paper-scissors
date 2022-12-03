/* Randomly returns the computer choice */
const getComputerChoice = () =>{
  const randomChoice = ['rock','paper','scissors']
  let randomNumber = Math.floor(Math.random()* 3)
    return randomChoice[randomNumber]
}

/* Plays a single round of rps*/
const playRound = (playerSelection,computerSelection) =>{
    console.log('1',playerSelection,'2',computerSelection)

    if(playerSelection === computerSelection){
        return `It's a DRAW! You both chose ${playerSelection}`
    }else if(playerSelection === 'rock' && computerSelection === 'scissors'){
        return `You WIN! ${playerSelection} beats ${computerSelection}`
    }else if(computerSelection === 'rock' && playerSelection === 'scissors'){
        return `You LOSE! ${computerSelection} beats ${playerSelection}`
    }else if(playerSelection === 'paper' && computerSelection === 'rock'){
        return `You WIN! ${playerSelection} beats ${computerSelection}`
    }else if(computerSelection === 'paper' && playerSelection === 'rock'){
        return `You LOSE! ${computerSelection} beats ${playerSelection}`
    }else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        return `You WIN! ${playerSelection} beats ${computerSelection}`
    }else if(computerSelection === 'scissors' && playerSelection === 'paper'){
        return `You LOSE! ${computerSelection} beats ${playerSelection}`
    }
}

const playerSelection = 'scissors'
const computerChoice = getComputerChoice()

console.log(playRound(playerSelection,computerChoice))






/* 
create a function name game()
play 5 rounds using a loop 
within that loop call the playRound()
withing that loop keep score 
report the loser or winner at the end
*/

// function game(){
//     let playerPoints = 0
//     let computerPoints = 0

//     for(let i = 0; i < 5; i++){
//         const playerSelection = prompt('Chose Rock, Paper, or Scissors').toLowerCase()
//         const computerChoice = getComputerChoice()

//         if(playRound(playerSelection,computerChoice) === 'win'){
//             console.log(`${playerSelection[0].toUpperCase() + playerSelection.slice(1)} beats 
//         ${computerChoice[0].toUpperCase() + computerChoice.slice(1)}, You win!`)

//             playerPoints++

//         }else if (playRound(playerSelection,computerChoice) === 'lose'){

//             console.log(`${computerChoice[0].toUpperCase() + computerChoice.slice(1)} beats 
//             ${playerSelection[0].toUpperCase() + playerSelection.slice(1)}!, You lose!`)
    
//             computerPoints++
            
//         } else{
//             console.log(`It a draw you both chose ${computerChoice[0].toUpperCase() + computerChoice.slice(1)}`)
//         }
        
//         console.log(playerPoints,computerPoints)
        
//     }
//      if(playerPoints > computerPoints){
//         console.log('You Won the most out of 5 Rounds!')
//      }else{
//         console.log('You Loss the most out of 5 Rounds!')
//      }

// }




