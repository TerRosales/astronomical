// JavaScript code (main.js)

let currentEquation = ""; // To store the current equation
let previousEquation = ""; // To store the previous equation

// Function to handle number button clicks
function handleNumberClick(event) {
const number = event.target.textContent;
updateCurrentEquation(number);
}

// Function to handle operator button clicks
function handleOperatorClick(event) {
const operator = event.target.textContent;
// If the operator is "%", calculate a percentage for the number
if (operator === "%") {
    handlePercentageClick();
} else if (operator === "(" || operator === ")") {
    // Handle parentheses as multiplication
    updateCurrentEquation(operator);
} else {
    updateCurrentEquation(operator);
}
}

// Function to handle decimal button click
function handleDecimalClick() {
updateCurrentEquation(".");
}

// Function to clear the last number/operation entry
function handleClearClick() {
    if (typeof currentEquation === 'string' && currentEquation.length > 0) {
    currentEquation = currentEquation.slice(0, -1);
    updateCurrentDisplay();
    }
}

// Function to clear all previous equations
function handleClearAllClick() {
clearAll();
}

// Function to evaluate the current equation
function handleEqualsClick() {
evaluateEquation();
}

// Function to update the current equation display
function updateCurrentEquation(value) {
currentEquation += value;
updateCurrentDisplay();
}

// Function to update the display with the current equation
function updateCurrentDisplay() {
const currentEquationElement = document.getElementById("currentEquation");
currentEquationElement.textContent = currentEquation;
}

// Function to calculate a percentage for the number
// Function to handle the percentage button
// Function to handle the percentage button
function handlePercentageClick() {
    const equation = currentEquation.replace(/%/g, ''); // Remove percentage signs if present
    const parts = equation.split('/');
    
    if (parts.length === 2) {
      const numerator = parseFloat(parts[0]);
      const denominator = parseFloat(parts[1]);
      
      if (!isNaN(numerator) && !isNaN(denominator) && denominator !== 0) {
        const result = (numerator / denominator) * 100;
        currentEquation = result.toFixed(2) + "%"; // Display the result with two decimal places and the percentage sign
        updateCurrentDisplay();
      } else {
        currentEquation = "Error";
        updateCurrentDisplay();
      }
    } else {
      currentEquation = "Error";
      updateCurrentDisplay();
    }
  }


// Function to clear all
function clearAll() {
currentEquation = "";
previousEquation = "";
updateCurrentDisplay();
clearPreviousDisplay();
}

// Function to clear the previous equation display
function clearPreviousDisplay() {
const previousEquationElement = document.getElementById("previousEquation");
previousEquationElement.textContent = "";
}

// Function to evaluate the equation
function evaluateEquation() {
const previousEquationElement = document.getElementById("previousEquation");
previousEquation = currentEquation;
previousEquationElement.textContent = currentEquation;
try {
    currentEquation = eval(currentEquation);
    updateCurrentDisplay();
} catch (error) {
    currentEquation = "Error";
    updateCurrentDisplay();
}
}

// Event listeners for button clicks
const numberButtons = document.querySelectorAll("[data-number]");
numberButtons.forEach((button) => {
button.addEventListener("click", handleNumberClick);
});

const operatorButtons = document.querySelectorAll("[data-operator]");
operatorButtons.forEach((button) => {
button.addEventListener("click", handleOperatorClick);
});

const decimalButton = document.querySelector("[data-decimal]");
decimalButton.addEventListener("click", handleDecimalClick);

const percentageButton = document.querySelector("[data-operator-percent]");
percentageButton.addEventListener("click", handlePercentageClick);


const clearButton = document.querySelector("[data-clear]");
clearButton.addEventListener("click", handleClearClick);

const clearAllButton = document.querySelector("[data-clear-all]");
clearAllButton.addEventListener("click", handleClearAllClick);

const equalsButton = document.querySelector("[data-equals]");
equalsButton.addEventListener("click", handleEqualsClick);

// Function to clear the current equation display
function clearCurrentDisplay() {
const currentEquationElement = document.getElementById("currentEquation");
currentEquationElement.textContent = "";
}






