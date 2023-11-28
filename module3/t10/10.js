'use strict'
const firstName = document.querySelector('input[name=firstname]');
const lastName = document.querySelector('input[name=lastname]');

const form = document.getElementById('source');
form.addEventListener('submit',function(evt){
    evt.preventDefault();
    document.querySelector('#target').innerText = `Your name is ${firstName.value} ${lastName.value}`;
});