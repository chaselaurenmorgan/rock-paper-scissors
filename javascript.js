/*
1. create a function name getComputerChoice
    function getComputerChoice(){}
2. will return a either 'Rock' , 'Paper', or 'Scissors' randomly 
    use Math.random() to return the integer 1 to 3 
    assign the numbers of 1,2,3, Rock Paper Scissors
    let number = Math.floor(Math.random()*3)+ 1
    if number === 1 => Rock
    else if number ===2 => Paper
    else => Scissors
3. use the console to make sure that it works
    console.log(getComputerChoice())
*/

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3)+1
    
    if(randomNumber === 1){
        return 'rock'
    }else if(randomNumber === 2){
        return 'paper'
    }else {
        return 'scissors'
    }
    
}

/* 
Create a function name playRound and give it two a parameters of playerSelection and computerSelection 
create a test that against the playerSelection where they are the winner 
    playerSelection = Rock and computerChoice is  = Scissors 
    playerSelection = Paper and computerChoice is = Rock
    PlayerSelcetion = Scissors and computerChoice = Paper
        return `You Win! ${playerSelection} beats ${computerChoice}!'
create a test where the playerSelection loses
    playerSelection = Rock and computerChoice = Paper
    playerSelection = Paper and computerChoice = Scissors 
    playerSelection = Scissor and computerChoice = rock
        return `You Lose! ${computerChoice} beats ${playerSelection}!'
and if it is draw then return It a tie! You both selected ${computerChoice}
change the playerSelection to parameter case insensitive 
    - change the string of Rock Paper Scissors to lowerCase in getComputer
    - in the conditonal playerSelection.toLowerCase()
*/

function playRound(playerSelection, computerChoice){
    


    if(
        playerSelection === 'rock' && computerChoice === 'scissors' || playerSelection === 'paper' && computerChoice === 'rock' || playerSelection === 'scissors' && computerChoice === 'paper'){
        
        return 'win' 

    }else if(
        playerSelection === 'rock' && computerChoice === 'paper' || playerSelection === 'paper' && computerChoice == 'scissors' || playerSelection === 'scissors' && computerChoice === 'rock'  
    ){
 

        return 'lose'

    }else {
    
        return 'draw'
    }
}








/* 
create a function name game()
play 5 rounds using a loop 
within that loop call the playRound()
withing that loop keep score 
report the loser or winner at the end
*/

function game(){
    let playerPoints = 0
    let computerPoints = 0

    for(let i = 0; i < 5; i++){
        const playerSelection = prompt('Chose Rock, Paper, or Scissors').toLowerCase()
        const computerChoice = getComputerChoice()

        if(playRound(playerSelection,computerChoice) === 'win'){
            console.log(`${playerSelection[0].toUpperCase() + playerSelection.slice(1)} beats 
        ${computerChoice[0].toUpperCase() + computerChoice.slice(1)}, You win!`)

            playerPoints++

        }else if (playRound(playerSelection,computerChoice) === 'lose'){

            console.log(`${computerChoice[0].toUpperCase() + computerChoice.slice(1)} beats 
            ${playerSelection[0].toUpperCase() + playerSelection.slice(1)}!, You lose!`)
    
            computerPoints++
            
        } else{
            console.log(`It a draw you both chose ${computerChoice[0].toUpperCase() + computerChoice.slice(1)}`)
        }
        
        console.log(playerPoints,computerPoints)
        
    }
     if(playerPoints > computerPoints){
        console.log('You Won the most out of 5 Rounds!')
     }else{
        console.log('You Loss the most out of 5 Rounds!')
     }

}

game()


