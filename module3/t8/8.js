'use strict'

function addition (num1,num2){
    return num1+num2;
}
function subtraction(num1,num2){
    return num1-num2;
}
function multiplication(num1,num2){
    return num1*num2;
}
function division(num1,num2){
    if(num2!==0){
        return num1/num2;
    }
    else{
        return 'The second integer cannot be 0.';
    }
}


function calculator(){
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);

    const operation = document.getElementById('operation').value;
    let result;
    if(operation === 'add'){
        result = addition(num1,num2);
    }
    else if(operation === 'sub'){
        result = subtraction(num1,num2);
    }
    else if(operation === 'multi'){
        result = multiplication(num1,num2);
    }
    else {
        result = division(num1,num2);
    }
    document.querySelector('#result').innerHTML = result;
}

const start = document.getElementById('start');
start.onclick = calculator;