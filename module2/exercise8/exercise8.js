'use strict'

function concat(array){
    let string = '';
    for(let item of array){
        string = string+item;
    }
    return string;
}

let names = ['Johnny','DeeDee','Joey','Marky'];
let concatenatedArray = concat(names);
console.log(concatenatedArray);
document.querySelector('#target').innerHTML = concatenatedArray;