let firstNumber = [];
let operation = null;
let secondNumber = [];

function NumberTest(Number) {
    firstNumber.push(Number);
    console.log(firstNumber);
}

document.addEventListener ('DOMContentLoaded', function() {
    const Numbers = document.querySelectorAll('.CalculatorButton')
    Numbers.forEach(function(button) {
        button.addEventListener('click', function() {
            let Number = parseInt(this.textContent);
            NumberTest(Number);
        })
    })
});