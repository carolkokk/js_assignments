'use strict'

let year = parseInt(prompt('Enter a year:'));
let leapYear = true;

if(year % 4 !== 0 || (year % 100 === 0 & year % 400 !== 0)){
    leapYear = false;
}

if(leapYear === true){
    document.querySelector('#integerType').innerHTML = 'The year '+ year + ' is a leap year.';
}
else{
    document.querySelector('#integerType').innerHTML = 'The year '+year+ ' is not a leap year.';
}