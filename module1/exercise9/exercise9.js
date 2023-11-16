'use strict'

let number = parseInt(prompt('Type in a positive integer: '));


function primeNumberTester(number){
    for(let i=2;i<number;i++){
        if(number % i === 0){
            return false;
        }
    }
        return true;
}

if(number <=0 ||isNaN(number)){
    document.querySelector("#target").innerHTML = 'Invalid input';
}

else if(primeNumberTester(number) === true){
    document.querySelector("#target").innerHTML = 'The number is a prime number.';
}
else{
    document.querySelector("#target").innerHTML = 'The number is not a prime number.';
}