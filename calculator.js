const display  = document.querySelector(".display");

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
        display.textContent += digit;
    })
})

const opButtons = document.querySelectorAll('.operator');
opButtons.forEach((button) => {
    button.addEventListener('click', () => {
        let calculation = button.textContent;
        display.textContent += calculation;
    })
})

const clearButton = document.querySelector("#clear");
clearButton.addEventListener('click', () => {
    display.textContent = '';
})

const equalsButton = document.querySelector("#equals-button");
equalsButton.addEventListener('click', () => {
    let firstNum = getFirstNum();
    let secondNum = getSecondNum();
    let operator = getOperator();
    operate(firstNum, secondNum, operator);
})

function getFirstNum () {
    let firstNum = '';
    let input = display.textContent;
    for (let i = 0; i < input.length; i++) {
        if (input.charAt(i) === "+" || input.charAt(i) === "-" || input.charAt(i) === "*" | input.charAt(i) === "/") {
            firstNum = input.slice(0, (i));
        }
    }
    return parseInt(firstNum);
}

function getSecondNum () {
    let secondNum = '';
    let input = display.textContent;
    for (let i = 0; i < input.length; i++) {
        if (input.charAt(i) === "+" || input.charAt(i) === "-" || input.charAt(i) === "*" | input.charAt(i) === "/") {
            secondNum = input.slice(i+1)
        }
    }
    return parseInt(secondNum);

}

function getOperator () {
    let operator = '';
    let input = display.textContent;
    for (let i = 0; i < input.length; i++) {
        if (input.charAt(i) === "+" || input.charAt(i) === "-" || input.charAt(i) === "*" | input.charAt(i) === "/") {
            operator = input.charAt(i);
        }
    }
    return operator;

}