
// Creating functions for the following items: add, subtract, multiply, divide

const add = function(a, b) {
    return a + b;
}

const subtract = function(a, b) {
    return a - b;
}

const multiply = function(a, b) {
    return a * b;
}

const divide = function(a, b) {
    return a / b;
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


console.log(operate(5, 4, "*"));

