const buttons = document.querySelectorAll('button');
const outputDisplay = document.querySelector('#screen');
const bkspButton = document.querySelector('#clearScreen');

let calculation = []
let inputData

function calculate(button) {
    const value = button.textContent;
    if (value === 'BKSP') {
        calculation = [];
        outputDisplay.textContent = '.';
    } else if (value === '=') {
        outputDisplay.textContent = eval(inputData);
    } else {
        calculation.push(value);
        inputData = calculation.join('');
        outputDisplay.textContent = inputData;
    };
};



buttons.forEach(button => button.addEventListener('click',() => calculate(button)));