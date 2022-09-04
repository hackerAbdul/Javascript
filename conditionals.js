
const oranges = 2.10;
const banana = 1.50;
const mangos = 5.50;
const apples = 1.20;



const budget = 5.50;

var mangoAndBanana = mangos + banana
var mangoAndApple = apples + mangos
var mangoAndOranges = mangos + oranges

console.log(mangoAndBanana)
console.log(mangoAndApple)
console.log(mangoAndOranges)

if (mangoAndBanana != 5.50){
  console.log("You have enough money to buy mangos and banana");
}
else if(mangoAndApple === 5.50){
  console.log("You have enough money to buy mangos and apples");
}
else if(mangoAndOranges === 5.50){
  console.log("You have enough money to buy mangos and oranges");
}else {
  console.log("sorry you have not select fruits")
}



let array = ["Trousers", "Shirts", "socks"]

if (array.includes("Socks") || array.includes("socks")){
  console.log("Oh you already have socks in the list")
} else {
  array.push("Socks")
  console.log("I have added socks into the list: " + array)
}