function computer(){
    const choice = ["rock", "paper", "scissors"]
    var generator = Math.floor(Math.random()*3)
    
    return choice[generator]
}

function user(){
    const choice = ["rock", "paper", "scissors"]
    var generator = Math.floor(Math.random()*3)
    
    return choice[generator]
}



var playerChoice = user();
var computerChoice = computer();

console.log("this is outside the function " + playerChoice)
console.log("this is outside the function " + computerChoice)

play(computerChoice,playerChoice)

function play(computerMove,playerMove){
    
    var computer = computerMove
    var player = playerMove

    console.log(`Player has chosen: ${playerMove}`)
    console.log(`Computer has chosen: ${computerMove}`)

    if (computer === "rock" && player === "rock"){
        console.log("Its a tie")
    }else if (computer === "paper" && player === "paper"){
        console.log("Its a tie")
    }else if (computer === "scissors" && player === "scissors"){
        console.log("Its a tie")
    }else if ((computer === "rock" && player ==="scissors") || (computer === "paper" && player ==="rock") || (computer === "scissors" && player ==="paper")){
        console.log("Computer wins")
    }else if ((computer === "paper" && player ==="scissors") || (computer === "scissors" && player ==="rock") || (computer === "rock" && player ==="paper")){
        console.log("player wins")
    }else{
        console.log("Sorry I do not understand that")
    }
}



