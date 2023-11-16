'use strict'

let numberOfDices = parseInt(prompt('How many dices do you want to roll?'));

let sum = 0;

for (let i= 0;i<numberOfDices;i++){
    let randomNumber = Math.floor(Math.random()*6+1);
    sum = sum + randomNumber;
}

console.log('The total sum of the dices is: ' +sum);