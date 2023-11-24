let bonus = null; //strikes + spares

//si 10 quilles d'un coup = strike

const ps=require('prompt-sync')();

const sumScore = function(actualTour){
    let scores = ps(`Indiquez le nombre de quilles tombées pour le tour ${actualTour} : `).split(',').map(Number)

    return scores.reduce((accumulator, currentValue)=>{
        return accumulator + currentValue
    },0)
}

const game = function(){
    let nbTours = 10;
    let score = [];
    while(nbTours > 1){
        const tourScore = sumScore(nbTours);
        score.push({nbTour: nbTours, scoreTour: tourScore})
        nbTours--
    }
}

game()