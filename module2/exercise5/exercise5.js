'use strict'
let numberList = [];
for(;;){
    let number = parseInt(prompt('Enter an integer number to the list: Insert the same number twice to quit. '));
    if (isNaN(number)){
        alert('Please enter an integer.');
    }
    else if(numberList.includes(number)){
        alert('The number has already been given. ');
        break;
    }
    else {
        numberList.push(number);
    }
}

numberList.sort((a,b)=>a-b);

for(let num of numberList){
    console.log(num);
}

