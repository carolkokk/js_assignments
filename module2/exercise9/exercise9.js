'use strict'

function even(num){
    let evenList = [];
    for(let number of num){
        if(number%2===0){
            evenList.push(number);
        }
    }
    return evenList;
}

let firstArray = [2,7,4];
console.log(firstArray);
console.log(even(firstArray));