// Variables
let currentNumber = '';
let previousNumber = '';
let operator = '';

// DOM elements
const numberButton = document.querySelectorAll('.number')
const operationButton = document.querySelectorAll('.operator')
const equalsButton = document.querySelector('.equals')
const deleteButton = document.querySelector('.delete')
const clearButton = document.querySelector('.clear')
const decimalButton = document.querySelector('.decimal')
const previousDisplayNumber = document.querySelector('.previous-operand')
const currentDisplayNumber = document.querySelector('.current-operand') 

// Events
clearButton.addEventListener('click', clearDisplay);
decimalButton.addEventListener('click', addDecimal);
deleteButton.addEventListener('click', handleDelete);

equalsButton.addEventListener('click', () => {
    if(currentNumber != "" && previousNumber != ""){
        operate();
    }
});

numberButton.forEach((button) => {
    button.addEventListener('click', (e) => {
        handleNumber(e.target.textContent)})
})

operationButton.forEach((button) => {
    button.addEventListener('click', (e) => {
        handleOperator(e.target.textContent);
    });
})

// Functions
function handleNumber(number) {
   if (previousNumber !== "" && currentNumber !== "" && operator === ""){
    previousNumber = "";
    currentDisplayNumber.textContent = currentNumber;
   }else {
    currentNumber += number;
    currentDisplayNumber.textContent = currentNumber;
   }
}

function handleOperator(op){
    if (previousNumber === "") {
        previousNumber = currentNumber;
        operatorCheck(op);
    }else if (currentNumber === "") {
        operatorCheck(op);
    }else {
        operator();
        operator = op;
        currentDisplayNumber.textContent = "0";
        previousDisplayNumber.textContent = `${previousNumber} ${operator}`;
    }
}

function operatorCheck(text) {
    operator = text;
    previousDisplayNumber.textContent = `${previousNumber} ${operator}`;
    currentDisplayNumber.textContent = "0";
    currentNumber = "";
}

function operate(){
    previousNumber = Number(previousNumber);
    currentNumber = Number(currentNumber);

    if (operator === "+") {
        previousNumber += currentNumber;
    }else if (operator === "-") {
        previousNumber -= currentNumber;
    }else if (operator === "×") {
        previousNumber *= currentNumber;
    }else if (operator === "÷") {
        if (currentNumber <= 0) {
            previousNumber = 'Error';
            previousDisplayNumber.textContent = '';
            currentDisplayNumber.textContent = previousNumber;
            operator = '';
            return
        }
        previousNumber /= currentNumber;
    }
    previousNumber = previousNumber.toString();
    previousDisplayNumber.textContent = '';
    currentDisplayNumber.textContent = previousNumber;
    operator = '';
    currentNumber = "";
}

function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operator = '';
    previousDisplayNumber.textContent = '';
    currentDisplayNumber.textContent = '0';
}

function addDecimal() {
    if (!currentNumber.includes('.')){
        currentNumber += '.';
        currentDisplayNumber.textContent = currentNumber;
    }
}

function handleDelete(){
    if (currentNumber !== ""){
        currentNumber = currentNumber.slice(0, -1);
        currentDisplayNumber.textContent = currentNumber;
    } 
}