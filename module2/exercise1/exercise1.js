'use strict'

let numbers = [];

for(let i=0;i<5;i++){
    let number = parseInt(prompt(`Insert the No.${i+1} number: `));
    numbers.push(number);
}

for(let i=numbers.length;i>0;i--){
    console.log(numbers[i-1]);
}