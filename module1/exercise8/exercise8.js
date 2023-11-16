'use strict'
let startYear= prompt('Enter the start year: ');
let endYear = prompt('Enter the end year: ');

function isLeapYear(year){
    if(year % 4 !== 0 || (year % 100 === 0 & year % 400 !== 0)){
        return false
    }
    else {
        return true
    }
}

for(let i= startYear; i<=endYear; i++){
    if(isLeapYear(i)){
        const li= document.createElement('li');
        li.textContent = i;
        document.querySelector('ul').appendChild(li);
    }
}