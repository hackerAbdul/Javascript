/*function animals(animalName){
    if (animalName.toLowerCase() === "Dog"){
        animalDog();
    }else if (animalName.toLowerCase() === "cat"){
        animalCat();
    }else{
        console.log("Sorry I only know Cat and Dog")
    }
}

function animalCat(){
    console.log("Meow")
}

function animalDog(){
    console.log("Woof")
}

animals("CAT");*/


var mum = "dfafd"

if(mum==="hiba"){
    hibaFamily("hiba")
}else if(mum==="Ayaan"){
    ayaansFamily("Ayaan")
}else{
    asliFamily();
}



function hibaFamily(mum){
    var name="Anas"
    var gender="male"
    var surname="Dhicisow"
    if (name === "Anas" && gender === "male" && surname === "Dhicisow"){
        console.log(`This is eldest ${name}`)
    }else if(name === "Abdulkadir" && gender === "male" && surname === "Dhicisow"){
        console.log(`This is ${name}`)
    }else{
        console.log(`This is ${name}`)
    }
}

function ayaansFamily(mum){
    var name="Ayaan"
    var gender="girl"
    var surname="Qaasim"
    if (name === "Ayaan" && gender === "girl" && (surname === "Qaasim" || mum === "Sacdiya")){
        console.log(`Oh this is ${name}`)
    }else if(name === "Yasmin" && gender === "girl" && (surname === "Qaasim" || mum === "Sacdiya")){
        console.log (`This is ${name}`)
    }else if(name === "Ridwan" && gender === "boy" && (surname === "Qaasim" && mum !== "Sacdiya")){
        console.log(`This is ${name}`)
    }else{
        console.log("This must be an alien")
    }
}

function asliFamily(mum){
    var gender="boy"
    var dob = 2005
    var chore ="clean the living rooms"
    if (gender == "boy"  && (typeof dob  === "number" && dob == 2003)  && chore == "clean the garden" ) {
        console.log ("It's my first born Guled!!")
    }else if (gender == "boy" && dob == 2005 && chore == "clean the living rooms") {
        console.log ("It's my second born Hamza!!")
    }else{
        console.log ("It's my third born Aleena!!")
    }
}


































//-----------------------------------------------------------------------


var num1=20
var num2=2340
var num3=55.60
var equation = "addition"

if (equation==="addition"){
    addition(num1,num2,num3)
}else if(equation==="subtraction"){
    subtraction(num1,num2,num3)
}else{
    console.log("I dont know that equation")
}



function addition(ayaan1,ayaan2,ayaan3){
    if (typeof ayaan1 === "number" & typeof ayaan2 === "number" && typeof ayaan3 === "number"){
        console.log(ayaan1+ayaan2+ayaan3)
    }else{
        console.log("Sorry I can only had 3 numbers together")
    }
}

addition(10,20,50)
subtraction(10,20,50)


function subtraction(ayaan1,ayaan2,ayaan3){
    if (typeof ayaan1 === "number" & typeof ayaan2 === "number" && typeof ayaan3 === "number"){
        console.log(ayaan1-ayaan2-ayaan3)
    }else{
        console.log("Sorry I can only had 3 numbers together")
    }
}




//function for subtraction
//function for multiplication
//function for division