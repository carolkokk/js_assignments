'use strict'

let numberOfParticipants = parseInt(prompt('Enter the number of participants: '));
let participantNames = [];

for(let i = 0; i<numberOfParticipants;i++){
    let name = prompt(`Enter the name of the No. ${i+1} participant: `);
    participantNames.push(name);
}

participantNames.sort();
for(name of participantNames){
    const li = document.createElement('li');
    li.textContent = name;
    document.querySelector('ol').appendChild(li);
}