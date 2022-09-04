function animals(abdul){
    if (abdul === "Dog"){
        animalDog();
    }else if (abdul.toLowerCase() === "cat"){
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

animals("CAT");

