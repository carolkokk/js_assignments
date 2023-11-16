'use strict'

let numberOfDices= parseInt(prompt('How many dices to roll?'));
let expectedSum= parseInt(prompt('What is the sum of the eye numbers of your interest?'));
let expectedTimes = 0;



for(let times=0;times<10000;times++){
    let totalSum = 0;
    for (let i=0; i<numberOfDices;i++){
        let roll= Math.floor(Math.random()*6+1);
        totalSum= totalSum+roll;
    }
    if(totalSum === expectedSum){
        expectedTimes++;
    }
}

let probability = (expectedTimes*100/10000).toFixed(2);


document.querySelector('#target').innerHTML =`Probability to get sum ${expectedSum} with ${numberOfDices} dice is ${probability}%`


