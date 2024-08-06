var firstNumber = [];
var secondNumber = [];
var operation = null;
var Display = null;
var rememberOperation = null;
var rememberNumber = null;

function Clear() {
    firstNumber = [];
    secondNumber = [];
    Display = null;
    operation = null;
    document.getElementById('DisplayText').innerHTML = 0;
}

function ChangeDisplay() {


    let displayText = firstNumber.join('');
    if (operation != null) {
        displayText += operation;
    }
    if (secondNumber.length > 0) {
        displayText += secondNumber.join('');
    }

    if (displayText.length > 8) {
        displayText = parseFloat(displayText).toExponential(5);
    }
    document.getElementById('DisplayText').innerHTML = displayText || 0;
}

function Input(value) {
    if (operation == null) {
        firstNumber.push(value);
    } 
    else {
        secondNumber.push(value);
    }
    ChangeDisplay();
}

function Operation(value) {
    if (value === '+/-') {
        if (secondNumber != null) {
            if (secondNumber[0] === '-') {
                secondNumber.shift();
            }
            else {
                secondNumber.unshift('-');
    
            }
        }
        else {
            if (firstNumber[0] === '-') {
                firstNumber.shift();
            }
            else {
                firstNumber.unshift('-');
    
            }
        }
    }
    else {
        if (firstNumber.length === 0) {
            firstNumber.push('0');
        }
        if (secondNumber.length > 0) {
            Calculate();
        }
        if (operation != null) {
            Calculate();
        }
    } 
    if (value != '+/-') {
    operation = value;
    }
    ChangeDisplay();

}

function Calculate() {
    if (secondNumber.length === 0 & rememberOperation != null) {
        let num1 = parseFloat(firstNumber.join(''));
        let num2 = parseFloat(rememberNumber);
    
        switch (rememberOperation) {
            case '+':
                Display = (num1 + num2).toString();
                break;
            case '-':
                Display = (num1 - num2).toString();
                break;
            case '*':
                Display = (num1 * num2).toString();
                break;
            case '/':
                Display = (num1 / num2).toString();
                break;
            default:
                return;
        }
        document.getElementById('DisplayText').innerHTML = Display;
        firstNumber = [Display];
        secondNumber = [];
        rememberOperation = rememberOperation;
        rememberNumber = rememberNumber;
    }
    else {
        if (firstNumber.length === 0 || secondNumber.length === 0 || operation === null) {
            document.getElementById('DisplayText').innerHTML = "COMPUTING ERROR";
            return;
        }
    }
    let num1 = parseFloat(firstNumber.join(''));
    let num2 = parseFloat(secondNumber.join(''));

    switch (operation) {
        case '+':
            Display = (num1 + num2).toString();
            break;
        case '-':
            Display = (num1 - num2).toString();
            break;
        case '*':
            Display = (num1 * num2).toString();
            break;
        case '/':
            Display = (num1 / num2).toString();
            break;
        default:
            return;
    }
    document.getElementById('DisplayText').innerHTML = Display;
    firstNumber = [Display];
    secondNumber = []; /*make it like num2 and the operation = to operation or just like dont change it,
    and then make it so when you hit another input it checks to see if the second number and the operation
    have a value and if they do then reset them, so that when you hit input it essitaly has a blank slate,
    but if you were to hit the = it would repeat the calculation with the first number being whats on the
    screen */
    rememberOperation = operation;
    rememberNumber = num2;
    operation = null;
}

document.addEventListener('keydown', function(event) {
    let key = event.key;
    if ((key >= '0' && key <= '9') || key === '.') {
        Input(key);
    }
    else if (key === '+') {
        Operation('+');
    }
    else if (key === '-') {
        Operation('-');
    }
    else if (key === '*') {
        Operation('*');
    }
    else if (key === '/') {
        Operation('/');
    }
    else if (key === 'Enter') {
        Calculate();
    }
    else if (key === 'Delete' || key === 'Escape') {
        Clear();
    }
});