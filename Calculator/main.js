let currentInput = '';
let operator = '';
let firstOperand = '';


function clearDisplay() {
    currentInput = '';
    operator = '';
    firstOperand = '';
    updateDisplay();
}

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
    }
}

function setOperator(op) {
    if (currentInput !== '') {
        operator = op;
        firstOperand = currentInput;
        currentInput = '';
    }
}

function calculate() {
    if (operator !== '' && firstOperand !== '' && currentInput !== '') {
        switch (operator) {
            case '+':
                currentInput = (parseFloat(firstOperand) + parseFloat(currentInput)).toString();
                break;
            case '-':
                currentInput = (parseFloat(firstOperand) - parseFloat(currentInput)).toString();
                break;
            case '*':
                currentInput = (parseFloat(firstOperand) * parseFloat(currentInput)).toString();
                break;
            case '/':
                currentInput = (parseFloat(firstOperand) / parseFloat(currentInput)).toString();
                break;
        }
        operator = '';
        firstOperand = '';
        updateDisplay();
    }

}

document.addEventListener("keydown", function(event){
    const key = event.key;

    switch (key){
        case '0':
            appendNumber('0');
            break;
        case '1':
            appendNumber('1');
            break;
        case '2':
            appendNumber('2');
            break;
        case '3':
            appendNumber('3');
            break;
        case '4':
            appendNumber('4');
            break;
        case '5':
            appendNumber('5');
            break;
        case '6':
            appendNumber('6');
            break;
        case '7':
            appendNumber('7');
            break;
        case '8':
            appendNumber('8');
            break;
        case '9':
            appendNumber('9');
            break;
        case 'Enter':
            calculate();
            break;
        case "Escape":
            clearDisplay();
            break;   
    }
})

function updateDisplay() {
    document.getElementById('display').textContent = currentInput || '0';
}
