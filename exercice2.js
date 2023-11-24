const ps=require('prompt-sync')();

const guessGame = function(){

    let win = false

    let nbTries = Number(ps("Saisissez un nombre de tentatives : "))

    let userInput = Number(ps("Saisissez un nombre : "))

    const randomNumber = Math.floor(Math.random() * userInput)

    console.log('Tentez de deviner le nombre : ')

    while(win != true){
        console.log(`Essais restants : ${nbTries}`)
        userInput = Number(ps())

        if(userInput == randomNumber){
            win = true
            console.log('gagné')
            return
        }
        else if(userInput != randomNumber){
            nbTries--
            if(nbTries < 1){
                console.log('Perdu !')
                return
            }
        }
        
        if(userInput < randomNumber){
            console.log('Plus')
        } else {
            console.log('Moins')
        }
    }
}


guessGame()
