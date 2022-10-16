/*//count down from 10 to 0
let num = 10
while (num>=0){
    console.log(num)
    num--;
}

//-----------------------------------------------------

//count down from 50 to -50
let countDown = 50;
while(countDown>=-50){
    console.log(countDown)
    countDown--
}

//-----------------------------------------------------

//count from -100 to 1500
let countUp = -100
while(countUp<=1500){
    console.log(countUp)
    countUp++;
}

//count from 0 to 500
let guled = 0
while(guled<=500){
    console.log(guled)
    guled++
}*/

//-------------------------------------------------------
//print items in a list 1 by 1

/*
let index = 0
while(index<list.length){
    console.log(list[index])
   
    if (list[index] === "fruits"){
        console.log("found it")
    }else{
        console.log("not in the list")
    }
    index++
}*/


// make a list that contains min 3 items and add another 3 items if they are not in the loop

let list = ["eyeshadow","mascara","lipgloss"]
let index = 0

while (index<list.length){
    item=0
    list[item]
    while(item!=="foundation"){
        list.push("foundation")
        item++
    }
    index++
    console.log(list)
}