
'use strict'
let name = prompt('What is your name?');

let randNum = Math.floor((Math.random()*4)+1);

let classroom = null;

if (randNum === 1){
    classroom = 'Gryffindor';
}
else if (randNum === 2){
    classroom = 'Slytherin';
}
else if (randNum === 3){
    classroom = 'Hufflepuff';
}
else {
    classroom = 'Ravenclaw';
}

document.querySelector('#greet').innerHTML= name+ ', you are '+classroom;
