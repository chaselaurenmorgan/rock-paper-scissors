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
        return 'Rock'
    }else if(randomNumber === 2){
        return 'Paper'
    }else {
        return 'Scissors'
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
    playerSelection = Scissor and computerChoice = Scissors
        return `You Lose! ${computerChoice} beats ${playerSelection}!'
and if it is draw then return It a tie! You both selected ${computerChoice}
*/
