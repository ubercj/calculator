// Math functions
function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

function operate(operator, a, b) {
    switch (operator) {
        case 'add':
            return add(a,b);
            break;
        case 'subtract':
            return subtract(a,b);
            break;
        case 'multiply':
            return multiply(a,b);
            break;
        case 'divide':
            return divide(a,b);
            break;
        case 'divideByZero':
            return 'Don\'t divide by zero, fool!';
        default:
            return 'ERROR';        
    }
}
let a;
let b;
let operator;
let clearCounter = 0; // Helps clear the screen after an operator is pressed, but not until a new number is input
let decimalCount = 0;
let display = document.querySelector('#display');

// Number buttons
let oneButton = document.querySelector('#one');
oneButton.addEventListener('click', function() {
    if (clearCounter == 1) {
        display.textContent = '';
        clearCounter--;
    }
    display.textContent += '1';
});
let twoButton = document.querySelector('#two');
twoButton.addEventListener('click', function() {
    if (clearCounter == 1) {
        display.textContent = '';
        clearCounter--;
    }
    display.textContent += '2';
});
let threeButton = document.querySelector('#three');
threeButton.addEventListener('click', function() {
    if (clearCounter == 1) {
        display.textContent = '';
        clearCounter--;
    }
    display.textContent += '3';
});
let fourButton = document.querySelector('#four');
fourButton.addEventListener('click', function() {
    if (clearCounter == 1) {
        display.textContent = '';
        clearCounter--;
    }
    display.textContent += '4';
});
let fiveButton = document.querySelector('#five');
fiveButton.addEventListener('click', function() {
    if (clearCounter == 1) {
        display.textContent = '';
        clearCounter--;
    }
    display.textContent += '5';
});
let sixButton = document.querySelector('#six');
sixButton.addEventListener('click', function() {
    if (clearCounter == 1) {
        display.textContent = '';
        clearCounter--;
    }
    display.textContent += '6';
});
let sevenButton = document.querySelector('#seven');
sevenButton.addEventListener('click', function() {
    if (clearCounter == 1) {
        display.textContent = '';
        clearCounter--;
    }
    display.textContent += '7';
});
let eightButton = document.querySelector('#eight');
eightButton.addEventListener('click', function() {
    if (clearCounter == 1) {
        display.textContent = '';
        clearCounter--;
    }
    display.textContent += '8';
});
let nineButton = document.querySelector('#nine');
nineButton.addEventListener('click', function() {
    if (clearCounter == 1) {
        display.textContent = '';
        clearCounter--;
    }
    display.textContent += '9';
});
let zeroButton = document.querySelector('#zero');
zeroButton.addEventListener('click', function() {
    if (clearCounter == 1) {
        display.textContent = '';
        clearCounter--;
    }
    display.textContent += '0';
});

let negativeButton = document.querySelector('#negative');
negativeButton.addEventListener('click', function() {display.textContent *= -1});

let percentButton = document.querySelector('#percent');
percentButton.addEventListener('click', makePercent);
function makePercent() {
    let newPercent = Number(display.textContent) / 100;
    display.textContent = newPercent;
}

let decimalButton = document.querySelector('#decimal');
decimalButton.addEventListener('click', addDecimal);
// This code makes sure each entered number can only have 1 decimal point
function addDecimal() {
    findDecimal(display.textContent);
    if (display.textContent.indexOf('.') == -1) {
        display.textContent += '.';
    } else if (decimalCount < 2 && display.textContent.indexOf('+') != -1 ||
    display.textContent.indexOf('-') != -1 || display.textContent.indexOf('x') != -1 ||
    display.textContent.indexOf('/') != -1) {
        display.textContent += '.';
    console.log(decimalCount);
    }
}
function findDecimal(input) {
    decimalCount = 0;
    for(i=0; i<input.length; i++) {
        if (input[i] == '.') {decimalCount++};
    }
    return decimalCount;
}

// Operation buttons
let addButton = document.querySelector('#add');
addButton.addEventListener('click', addThings); 
function addThings() {
    a = Number(display.textContent);
    operator = 'add';
    clearCounter++;
};
let subtractButton = document.querySelector('#subtract');
subtractButton.addEventListener('click', subtractThings); 
function subtractThings() {
    a = Number(display.textContent);
    operator = 'subtract';
    clearCounter++;
};

let multiplyButton = document.querySelector('#multiply');
multiplyButton.addEventListener('click', multiplyThings); 
function multiplyThings() {
    a = Number(display.textContent);
    operator = 'multiply';
    clearCounter++;
};

let divideButton = document.querySelector('#divide');
divideButton.addEventListener('click', divideThings); 
function divideThings() {
    a = Number(display.textContent);
    operator = 'divide';
    clearCounter++;
};

let clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', clearAll);
function clearAll() {
    display.textContent = '';
    operator = '';
    a = 0;
    b = 0;
    clearCounter = 0;
    decimalCount = 0;
}

let equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', runEquation);
function runEquation() {
    if (operator == 'add') {
        b = Number(display.textContent.slice(display.textContent.indexOf('+') + 1));
    } else if (operator == 'subtract') {
        b = Number(display.textContent.slice(display.textContent.indexOf('-') + 1));
    } else if (operator == 'multiply') {
        b = Number(display.textContent.slice(display.textContent.indexOf('x') + 1));
    } else if (operator == 'divide') {
        b = Number(display.textContent.slice(display.textContent.indexOf('/') + 1));
        if (b == 0) {operator = 'divideByZero'};
    }
    display.textContent = '';
    display.textContent = (operate(operator, a, b)).toString().slice(0, 32);
    decimalCount = findDecimal(display.textContent);
}