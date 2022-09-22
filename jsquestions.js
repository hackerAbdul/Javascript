//question 1

console.log("Hello my name is " + "Abdulkadir")

//question 2 
var digit = 2;
var sentence = "hello word";
var truthy = ("monday"==="Monday");

console.log(typeof digit)
console.log(typeof sentence)
console.log(truthy)

//question 3
console.log(`${sentence} this number is equal to ${digit} and I am ${truthy}`)

//question 4

var day = "wednesday"
let food;

if (day === "Monday"){
    food = "pasta"
    console.log(`Today is ${day} so that means I will be eating ${food}`)
}else if(day === "Tuesday"){
    food = "Tacos"
    console.log(`ITS ${food} ${day} today`);
}else{
    console.log("idk eat what you like")
}

//question 5

let shoppingList = ["Trousers","Shirt"];

if (shoppingList.includes("Socks") || shoppingList.includes("socks")){
    console.log("Oh you already have socks in your list")
}else{
    shoppingList.push("Socks")
    console.log(shoppingList)
}