'use strict'
let firstInteger = parseInt(prompt('Insert the first integer:'));
let secondInteger = parseInt(prompt('Insert the second integer:'));
let thirdInteger = parseInt(prompt('Insert the third integer:'));

function sum(first,second,third){
  let sum = first+second+third;
  return sum;
}

function product(first,second,third){
  let product=first*second*third;
  return product;
}

function average(first,second,third){
  let average=sum(first,second,third)/3;
  return average;
}

document.querySelector("#sum").innerHTML= 'The sum of the three integers is: '+sum(firstInteger,secondInteger,thirdInteger);
document.querySelector("#product").innerHTML= 'The product of the three integers is: '+product(firstInteger,secondInteger,thirdInteger);
document.querySelector("#average").innerHTML= 'The average of the three integers is: '+average(firstInteger,secondInteger,thirdInteger);