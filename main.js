
// Creating functions for the following items: add, subtract, multiply, divide


const add = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    } return(sum);
}

const subtract = function(arr) {
    let subtract = 0;
    for (let i = 1; i < arr.length; i++) {
        subtract -= arr[i];
    } return(subtract);
}

const multiply = function(arr) {
    let multiply = 1;
    for (let i = 0; i < arr.length; i++) {
        multiply *= arr[i];
    } return(multiply);
}

const divide = function(arr) {
    let divide = arr[0];
    for (let i = 1; i < arr.length; i++) {
        divide /= arr[i];
    } return(divide);
}

const square = function(arr) {
    let result;
    result = Math.sqrt(arr);
    return(result);
} 


// Function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.
const operate = function(a, b, operator) {
    
    if(operator == "+") {
        return add(a, b);

    } else if(operator == "-") {
        return subtract(a, b);

    } else if(operator == "*") {
        return multiply(a, b);

    } else if(operator == "/") {
        return divide(a, b);
    }
}

const display = document.querySelector('#display');
const zero = document.querySelector('#zero')
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const ac = document.querySelector('#ac');
const off = document.querySelector('#off')

let firstVal;

off.addEventListener('click', function() {
    firstVal = '';
    display.innerHTML = firstVal;
})

ac.addEventListener('click', function() {
    firstVal = '0';
    display.innerHTML = firstVal;
})

zero.addEventListener('click', function() {
    if(firstVal == '0'){
        firstVal = '0'
        display.innerHTML = firstVal;
    } else { 
        firstVal += '0';
        display.innerHTML = firstVal;
}})

one.addEventListener('click', function() {
    if(firstVal == '0'){
        firstVal = '1'
        display.innerHTML = firstVal;
    } else { 
        firstVal += '1';
        display.innerHTML = firstVal;
}})

two.addEventListener('click', function() {
    if(firstVal == '0'){
        firstVal = '2'
        display.innerHTML = firstVal;
    } else { 
        firstVal += '2';
        display.innerHTML = firstVal;
}})

three.addEventListener('click', function() {
    if(firstVal == '0'){
        firstVal = '3'
        display.innerHTML = firstVal;
    } else { 
        firstVal += '3';
        display.innerHTML = firstVal;
}})

four.addEventListener('click', function() {
    if(firstVal == '0'){
        firstVal = '4'
        display.innerHTML = firstVal;
    } else { 
        firstVal += '4';
        display.innerHTML = firstVal;
}})

five.addEventListener('click', function() {
    if(firstVal == '0'){
        firstVal = '5'
        display.innerHTML = firstVal;
    } else { 
        firstVal += '5';
        display.innerHTML = firstVal;
}})

six.addEventListener('click', function() {
    if(firstVal == '0'){
        firstVal = '6'
        display.innerHTML = firstVal;
    } else { 
        firstVal += '6';
        display.innerHTML = firstVal;
}})

seven.addEventListener('click', function() {
    if(firstVal == '0'){
        firstVal = '7'
        display.innerHTML = firstVal;
    } else { 
        firstVal += '7';
        display.innerHTML = firstVal;
}})

eight.addEventListener('click', function() {
    if(firstVal == '0'){
        firstVal = '8'
        display.innerHTML = firstVal;
    } else { 
        firstVal += '8';
        display.innerHTML = firstVal;
}})

nine.addEventListener('click', function() {
    if(firstVal == '0'){
        firstVal = '9'
        display.innerHTML = firstVal;
    } else { 
        firstVal += '9';
        display.innerHTML = firstVal;
}})

