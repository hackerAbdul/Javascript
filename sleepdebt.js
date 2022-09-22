function ideal(person){
    let sleep=0
    if (person==="adult"){
        return sleep=8*7
    }else if (person==="child"){
        return sleep=12*7
    }else if (person==="infant"){
        return sleep=15*7
    }else{
        console.log("Sorry person can only be human")
    }
}

function debt(idealHours,actualHours){
    if (actualHours>=idealHours){
        console.log("You do not require anymore sleep")
    }else {
        var calDebt=idealHours-actualHours
        console.log(`you are missing ${calDebt} hours of sleep`)
    }
}


function calculateSleepDebt(){
    var monday = 7
    var tuesday=6
    var wednesday=5
    var thursday=4
    var friday=10
    var saturday=12
    var sunday=4
    var totalHours = monday+tuesday+wednesday+thursday+friday+saturday+sunday
    idealHours = ideal("adult")
    debt(idealHours,totalHours)
}

calculateSleepDebt()