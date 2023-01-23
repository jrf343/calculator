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

    console.log(result);
}