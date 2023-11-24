const ps=require('prompt-sync')();

const number = Number(ps("Saisissez un nombre N : "))

const fizzBuzzFunction = function(number){
    let result = ""
    if(number % 3 == 0 && number % 5 == 0){
        result = "FIZZBUZZ"
    } else if (number % 3 == 0){
        result = "FIZZ"
    } else if (number % 5 == 0){
        result = "BUZZ"
    } else {result = number}

    console.log(result)
}

for(i = 0; i< number +1; i++){
    fizzBuzzFunction(i)
}