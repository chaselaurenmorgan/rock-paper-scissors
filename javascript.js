let playerPoints = 0
let computerPoints = 0
const outcome = document.querySelector('.outcome')
const score = document.querySelector('#score')
const buttons = document.querySelectorAll('button')


/* Randomly returns the computer choice */
const getComputerChoice = () =>{
  const randomChoice = ['rock','paper','scissors']
  let randomNumber = Math.floor(Math.random()* 3)
    return randomChoice[randomNumber]
}

/* Plays a single round of rps*/
const playRound = (playerSelection,computerSelection) =>{

    if(playerSelection === computerSelection){
        outcome.textContent = `It's a DRAW! You both chose ${playerSelection}`
    }else if(playerSelection === 'rock' && computerSelection === 'scissors'){
        playerPoints++
        outcome.textContent =`You WIN! ${playerSelection} beats ${computerSelection}`
    }else if(computerSelection === 'rock' && playerSelection === 'scissors'){
        computerPoints++
        outcome.textContent =`You LOSE! ${computerSelection} beats ${playerSelection}`
    }else if(playerSelection === 'paper' && computerSelection === 'rock'){
        playerPoints++
        outcome.textContent =`You WIN! ${playerSelection} beats ${computerSelection}`
    }else if(computerSelection === 'paper' && playerSelection === 'rock'){
        computerPoints++
        outcome.textContent = `You LOSE! ${computerSelection} beats ${playerSelection}`
    }else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        playerPoints++
        outcome.textContent = `You WIN! ${playerSelection} beats ${computerSelection}`
    }else if(computerSelection === 'scissors' && playerSelection === 'paper'){
        computerPoints++
        outcome.textContent = `You LOSE! ${computerSelection} beats ${playerSelection}`
    }
    
    score.textContent = `YOUR SCORE:${playerPoints}  COMPUTER SCORE:${computerPoints}`

    if(playerPoints === 5){
        outcome.textContent = 'GAME OVER: YOU WIN FIRST ONE TO 5PTS!'
    }else if(computerPoints === 5){
        outcome.textContent = 'GAME OVER: YOU LOSE - COMPUTER WAS THE FIRST ONE TO 5PTS!'
    }


}

buttons.forEach(button => {
    button.addEventListener('click',()=> {
        const computerChoice = getComputerChoice()
        const playerSelection = `${button.className}`
         playRound(playerSelection,computerChoice)
    })
})




