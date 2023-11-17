'use strict'
function rollDice(){
    let result = Math.floor(Math.random()*6+1);
    return result;
}

let rollNumbers =[];
for(;;){
    let number = rollDice();
    rollNumbers.push(number);
    if(number===6){
        break;
    }
}

for(let number of rollNumbers){
    let li= document.createElement('li');
    li.textContent= number;
    document.querySelector('ul').appendChild(li);
}