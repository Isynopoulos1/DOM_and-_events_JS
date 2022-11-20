'use strict';
//MANIPULATING TEXT
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct number';

//MANIPULATING NUMBERS
document.querySelector('.number').textContent = '13';
document.querySelector('.score').textContent = '50';

//MANIULATING AN IPNUT FIELD
console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
