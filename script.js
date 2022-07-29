let currentNumber = '';
let previousNumber = '';
let operator = '';

const numberButtons = document.querySelectorAll('.number')
const operationButton = document.querySelectorAll('.operator')
const equalsButton = document.querySelector('.equals')
const deleteButton = document.querySelector('.delete')
const clearButton = document.querySelector('.clear')
const decimalButton = document.querySelector('.decimal')
const previousDisplayNumber = document.querySelector('.previous-operand')
const currentDisplayNumber = document.querySelector('.current-operand') 

equalsButton.addEventListener('click', calculate);
clearButton.addEventListener('click', clearDisplay);
decimalButton.addEventListener('click', );

// this adds an Event Listener to each of the number buttons; when clicked, the text content of the button will be appended.
numberButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        handleNumber(e.target.textContent)})
})

operationButton.forEach((button) => {
    button.addEventListener('click', (e) => {
        handleOperator(e.target.textContent);
    });
})

function handleNumber(number) {
    currentNumber += number;
    currentDisplayNumber.textContent = currentNumber;
}

function handleOperator(op){
    operator = op;
    previousNumber = currentNumber;
    previousDisplayNumber.textContent = `${previousNumber} ${operator}`;
    currentNumber = '';
    currentDisplayNumber.textContent = '';
}

function calculate(){
    previousNumber = Number(previousNumber);
    currentNumber = Number(currentNumber);

    if (operator === "+") {
        previousNumber = previousNumber + currentNumber;
    }else if (operator === "-") {
        previousNumber = previousNumber - currentNumber;
    }else if (operator === "×") {
        previousNumber = previousNumber * currentNumber;
    }else if (operator === "÷") {
        if (currentNumber <= 0) {
            previousNumber = 'Error';
            previousDisplayNumber.textContent = '';
            currentDisplayNumber.textContent = previousNumber;
            operator = '';
            return
        }
        previousNumber = previousNumber / currentNumber;
    }
    previousNumber = previousNumber.toString();
    previousDisplayNumber.textContent = '';
    currentDisplayNumber.textContent = previousNumber;
    operator = '';
}

function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operator = '';
    previousDisplayNumber.textContent = '';
    currentDisplayNumber.textContent = '0';
}