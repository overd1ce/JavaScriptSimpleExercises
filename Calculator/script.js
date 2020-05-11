const previousOperandTextElement = document.querySelector('[data-operand-previous]');
const currentOperandTextElement = document.querySelector('[data-operand-current]');
const numberButtons = document.querySelectorAll('[data-number]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const equalsButton = document.querySelector('[data-equals]');
const operationButtons = document.querySelectorAll('[data-operation]');
const decimalButton = document.querySelector('[data-decimal]');


let currentValue = '0';
let previousValue = '';
let currentOperator = '';
let result = undefined;
let decimal = true;

decimalButton.addEventListener('click', clickedDecimal);
numberButtons.forEach((number) => {
    number.addEventListener('click', clickedNumber)
});
operationButtons.forEach((operand) => {
    operand.addEventListener('click', clickedOperand)
});
allClearButton.addEventListener('click', clickedAllClear);
deleteButton.addEventListener('click', clickedDelete);
equalsButton.addEventListener('click', clickedEqual);

function clickedNumber(){
    if (currentValue === '0') {
        currentValue = ''
    }
    if (currentValue === result) {
        currentValue = ''
    }
    currentValue += this.innerText
    updateDisplay();
}

function clickedOperand() {
    if (currentValue === '0') {
        currentValue = ''
    }
    if (/[+-÷*] $/.test(currentValue)) {
    return;
    } else {
        decimal = true;
        operator = this.innerText;
        currentValue += ' ' + operator + ' ';
        updateDisplay();
    }
}

function clickedDecimal() {
    if (decimal) {
        clickedNumber.call(this)
        decimal = false;
    } else {return;}
}

function clickedAllClear() {
    previousValue = '';
    currentValue = '0';
    operator = '';
    result = undefined;
    decimal = true;
    updateDisplay(); 
}

function clickedDelete() {
    let displayLength = currentValue.length;
    if (currentValue.match(/ $/)) {
        displayLength = displayLength -2;
    }
    if (currentValue.charAt(displayLength-1).match('.')) {
        decimal = true;
    }
    currentValue = currentValue.slice(0,displayLength -1);
    updateDisplay();
}

function updateDisplay() {
    if((/ \./).test(currentValue)) {
        currentValue = currentValue.replace(/ \./, ' 0.')
    } else if ((/^\./).test(currentValue)) {
        currentValue = currentValue.replace(/^\./ , '0.')
    }    
    currentOperandTextElement.innerText = currentValue
    if (result) {
        previousOperandTextElement.innerText = previousValue + ' = ' + result
    } else {
        previousOperandTextElement.innerText = previousValue
    }
}

function clickedEqual() {
    if (currentValue === result) {
        return
    }
    if (currentValue.match('÷ 0')){
        alert('error')
        return
    }
    
    currentValue = currentValue.replace(/÷/g,'/')
    
   
    if ((/[+-÷*] $/.test(currentValue))) {
        return;
    } else {
        previousValue = currentValue 
        previousValue = previousValue.replace(/\//g,'÷')

    }
       
    result = getMathematicalValue(currentValue)
    result =  (result * 100) / 100
    currentValue = result    
    updateDisplay()   
}

function getMathematicalValue(str) {
    return new Function('return ' + str)();    
}