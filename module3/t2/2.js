'use strict'
const li1= document.createElement('li');
const li2= document.createElement('li');
const li3= document.createElement('li');
li1.innerText = 'First item';
li2.innerText = 'Second item';
li3.innerText = 'Third item';

const target = document.querySelector('#target');
target.appendChild(li1);
target.appendChild(li2);
target.appendChild(li3);
target.classList.add('my-item');