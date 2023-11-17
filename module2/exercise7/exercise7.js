'use strict'
function rollDice(number){
    let result = Math.floor(Math.random()*number+1);
    return result;
}

let rollNumbers =[];
let numberOfSide = parseInt(prompt('Enter the number of sides on the dice: '))
for(;;){
    let number = rollDice(numberOfSide);
    rollNumbers.push(number);
    if(number===numberOfSide){
        break;
    }
}

for(let number of rollNumbers){
    let li= document.createElement('li');
    li.textContent= number;
    document.querySelector('ul').appendChild(li);
}