'use strict'

let dogNames =[];
for (let i=0; i<6;i++){
    let name = prompt(`What is the No. ${i+1} dog name?`);
    dogNames.push(name);
}
dogNames.sort();
dogNames.reverse();

for (name of dogNames){
    const li= document.createElement('li');
    li.textContent = name;
    document.querySelector('ul').appendChild(li);
}
