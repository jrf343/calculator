const display  = document.querySelector(".display");
let equalsClicked = false;
let decimalClicked = false;
const operators = ["+", "-", "*", "/"];

function add (firstNum, secondNum) {
    let result = firstNum + secondNum;
    return result;
}

function subtract (firstNum, secondNum) {
    let result = firstNum - secondNum;
    return result;
}

function multiply (firstNum, secondNum) {
    let result = firstNum * secondNum;
    result = Math.round((result) * 100) / 100;
    return result;
}

function divide (firstNum, secondNum) {
    let result = firstNum / secondNum;
    result = Math.round((result) * 100) / 100;
    return result;
}

function operate (firstNum, secondNum, operator) {
    let result;
    if ( operator === "+" ) {
        result = add(firstNum, secondNum);
    } else if ( operator === "-" ) {
        result = subtract(firstNum, secondNum);
    } else if ( operator === "*" ) {
        result = multiply(firstNum, secondNum);
    } else {
        result = divide(firstNum, secondNum);
    }

    display.textContent = result;
}

const numButtons = document.querySelectorAll('.number');
numButtons.forEach((button) => {
    button.addEventListener('click', () => {
        let digit = button.textContent;
        if (equalsClicked === true) {
            display.textContent = digit;
            equalsClicked = false;
        } else {
            display.textContent += digit;
        }
    })
})

const decimalButton = document.querySelector("#decimal");
decimalButton.addEventListener('click', () => {
    decimalButton.disabled = true;

})

const opButtons = document.querySelectorAll('.operator');
opButtons.forEach((button) => {
    button.addEventListener('click', () => {
        let calculation = button.textContent;
        let input = display.textContent;
        equalsClicked = false;
        decimalButton.disabled = false;
        if (checkForFirstNum(input) === false) {
            alert("Please enter a number before an operator.")
            return;
        } else if (isOperator(input.charAt(input.length-1)) === true) {
            alert("Please enter a second number.");
            return;
        } else if (checkForOperator(input) === true) {
            displayResult();
            display.textContent += calculation;
        } else {
            display.textContent += calculation;
        }
    })
})

const clearButton = document.querySelector("#clear");
clearButton.addEventListener('click', () => {
    equalsClicked = false;
    decimalButton.disabled = false;
    display.textContent = '';
})

const equalsButton = document.querySelector("#equals-button");
equalsButton.addEventListener('click', () => {  
    let input = display.textContent;
        if (isOperator(input.charAt(input.length-1)) === true) {
            alert("Please enter a second number.")
            return;
        }  
    equalsClicked = true;
    decimalButton.disabled = false;
    displayResult();
})

const backspaceButton = document.querySelector("#backspace");
backspaceButton.addEventListener('click', () => {
    let input = display.textContent;
    input = input.slice(0, -1);
    display.textContent = input;
})

function displayResult () {
    let firstNum = getFirstNum();
    let operator = getOperator();
    if ((operator === '')) {
        display.textContent = firstNum;
        return;
    } else {
        let secondNum = getSecondNum();
        if ((operator === "/") && (secondNum === 0)) {
            alert("Please do not try to divide by 0.")
            let input = display.textContent;
            input = input.slice(0, -1);
            display.textContent = input;
            equalsClicked = false;
            return;
        }
        operate(firstNum, secondNum, operator);
    }
}

function isOperator (char) {
    result = false;
    for (let elem of operators) {
        if (char.localeCompare(elem) === 0) {
            result = true;
        }
    }
    return result;
}

function checkForOperator (string) {
    let result = false;
    for (let char of string) {
        if (isOperator(char) === true) {
            result = true;
        }
    }
    return result;
}

function checkForFirstNum (string) {
    let result = true;
    if (string === '') {
        result = false;
    } else if (isOperator(string.charAt(0)) === true) {
        result = false;
    }
    return result;
}

function getFirstNum () {
    let firstNum = '';
    let input = display.textContent;
    if (checkForOperator(input) === false) {
        firstNum = input;
    } else {
        for (let i = 0; i < input.length; i++) {
            if (isOperator(input.charAt(i)) === true) {
                firstNum = input.slice(0, i);
            }
        }
    }
    return parseFloat(firstNum);
}

function getSecondNum () {
    let secondNum = '';
    let input = display.textContent;
    for (let i = 0; i < input.length; i++) {
        if (isOperator(input.charAt(i)) === true) {
            secondNum = input.slice(i+1)
        }
    }
    return parseFloat(secondNum);

}

function getOperator () {
    let operator = '';
    let input = display.textContent;
    for (let i = 0; i < input.length; i++) {
        if (isOperator(input.charAt(i)) === true) {
            operator = input.charAt(i);
        }
    }
    return operator;

}
