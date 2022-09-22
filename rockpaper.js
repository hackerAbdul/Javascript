function computer(){
    const choice = ["rock", "paper", "scissors"]
    var generator = Math.floor(Math.random()*3)
    //console.log(generator)
    return choice[generator]
}

function user(){
    const choice = ["rock", "paper", "scissors"]
    var generator = Math.floor(Math.random()*3)
    //console.log(generator)
    return choice[generator]
}

var playerChoice = user();
var computerChoice = computer();

play(computerChoice,playerChoice)

function play(computerMove,playerMove){
    
    var computer = computerMove.toLowerCase()
    var player = playerMove.toLowerCase()

    console.log(`Player has choses: ${playerMove}`)
    console.log(`Computer has choses: ${computerMove}`)

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

