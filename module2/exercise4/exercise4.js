'use strict'

let numberList = [];

for(;;){
    let number = parseInt(prompt('provide an integer number, insert 0 to quit.'));
    if(isNaN(number)===true){
        alert('Please insert an integer number.');
    }
    else if(number === 0){
        break;
    }
    else {
        numberList.push(number);
    }
}

numberList.sort((a,b)=>b-a);

for(let num of numberList){
    console.log(num);
}