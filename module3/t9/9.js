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

function checkInput(){
    let numbers;
    let result;
    const input = document.getElementById('calculation').value;
    if(input.includes('+')){
        numbers = input.split('+');
        result = addition(parseInt(numbers[0]),parseInt(numbers[1]));
    }
    else if (input.includes('-')){
        numbers = input.split('-');
        result = subtraction(parseInt(numbers[0]),parseInt(numbers[1]));
    }
    else if (input.includes('*')){
        numbers = input.split('*');
        result = multiplication(parseInt(numbers[0]),parseInt(numbers[1]));
    }
    else if(input.includes('/')){
        numbers = input.split('/');
        result = division(parseInt(numbers[0]),parseInt(numbers[1]));
    }
    else {
        result = 'Please write the formula in correct format.';
    }
    document.querySelector('#result').innerText = result;
}

const calculation = document.getElementById('start');
calculation.onclick = checkInput;


