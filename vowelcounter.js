function vowel(sentence){
    var vowel = "a"
    var vowel_e = "e"
    var vowel_i = "i"
    var vowel_o = "o"
    var vowel_u = "u"

    console.log(sentence.includes(vowel) || sentence.includes(vowel_e) || sentence.includes(vowel_i) || sentence.includes(vowel_o) || sentence.includes(vowel_u))

    if (sentence.includes(vowel) || sentence.includes(vowel_e) || sentence.includes(vowel_i) || sentence.includes(vowel_o) || sentence.includes(vowel_u)){
        console.log("sentence includes a vowel ")
    }else{
        console.log("This sentence does not contain a vowel")
    }

}

//function that takes parameters and squares them


var number = 4

function square(num1){
    console.log(num1*num1)
}

square(4)







vowel("Hi I am a vowel");








const temp = 20


function celsius(number){
    console.log(`I want this to be displayed as ${number} degrees celsius`)
    farenheit();
}

function farenheit(){
    
    console.log("This temp is 68 degrees in farenheit")
}



celsius(temp)
