'use strict'
let result = confirm('Should I calculate the square root?');

if(result===true){
    let number = parseFloat(prompt('Insert the number: '));
    if(number >= 0){
        let squareRoot = Math.sqrt(number)
        document.querySelector('#text').innerHTML = 'The square root of '+number+ ' is: '+squareRoot.toFixed(2);
    }
    else {
        document.querySelector('#text').innerHTML = 'The square root of a negative number is not defined';
    }
}
else {
    document.querySelector('#text').innerHTML = 'The square root is not calculated.';
}