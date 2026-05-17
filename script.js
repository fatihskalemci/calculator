// Variables

let operand1 = "";
let operand2 = "";
let operator = "";


// Elements and Event Listeners

const topDisplay = document.querySelector("#top");
const bottomDisplay = document.querySelector("#bottom");

const clearButton = document.querySelector("#clear")
clearButton.addEventListener('click', e => {
    if (bottomDisplay.textContent === "0") {
        clearTopDisplay();
    }
    clearBottomDisplay();
})

const operandButtons = document.querySelectorAll(".operand");
[...operandButtons].forEach(item => {
    item.addEventListener('click', () => {
        getNumber(item.value);
    });
})

const operationButtons = document.querySelectorAll(".operation");
[...operationButtons].forEach(item => {
    item.addEventListener('click', () => {
        getOperator(item.value);
    });
})

const equalButton = document.querySelector("#equal");
equalButton.addEventListener('click', () => {
    if (bottomDisplay.textContent === "0") {return}
    equalate()
});

const backspace = document.querySelector("#backspace");
backspace.addEventListener('click', () => {
    if (operand2 !== "") {
        operand2 = operand2.slice(0, -1);
    } else if (operator !== "") {
        operator = operator.slice(0, -1);
    } else if (operand1 !== "") {
        operand1 = operand1.slice(0, -1);
    } else {
        return
    }
    updateBottomDisplay();

});

// Functions

function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    if (b === 0) {return "NaN"} 
    return a/b;
}

function modulus(a,b) {
    return a%b;
}

function operate(operator, a, b) {
    a = +a;
    b = +b;
    switch (operator) {
        case "+":
            return add(a,b)
            break;
        case "-":
            return subtract(a,b)
            break;
        case "*":
            return multiply(a,b)
            break;
        case "/":
            return divide(a,b)
            break;
        case "%":
            return modulus(a,b)
            break;
        default:
            break;
    }
}

function equalate() {
    topDisplay.textContent = bottomDisplay.textContent;
    operand1 = operate(operator, operand1, operand2);
    operand2 = "";
    operator = "";
    updateBottomDisplay();
}

function updateBottomDisplay() {
    if (operand1 + operator + operand2 === "") {
        bottomDisplay.textContent = 0;
    } else {
        bottomDisplay.textContent = operand1 + operator + operand2;
    }
}

function getNumber(value) {
    if (bottomDisplay.textContent.length >= 10) {return}

    if (operator === "") {
        if (value === "." && operand1.includes(".")) {return}
        if (operand1 === "0") {
            operand1 = value.toString();
        }
        else {
            operand1 += value.toString();
        }
    } else {
        if (value === "." && operand2.includes(".")) {return}
        if (operand2 === "0") {
            operand2 = value.toString();
        } 
        else {
            operand2 += value.toString();
        }
    }
    updateBottomDisplay();
}

function getOperator(value) {
    if (bottomDisplay.textContent.length >= 10) {return}

    if (operand1 === "") {
        operand1 = "0";
    }
    else if (!operand2 === "") {
        equalate()
    }
    operator = value.toString();
    updateBottomDisplay();
}

function clearBottomDisplay() {
    operand1 = "";
    operand2 = "";
    operator = "";
    updateBottomDisplay();
}

function clearTopDisplay() {
    topDisplay.textContent = "";
}



updateBottomDisplay()




