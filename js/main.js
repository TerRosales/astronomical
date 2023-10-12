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


const clearButton = document.querySelector("[data-clear]");
clearButton.addEventListener("click", handleClearClick);

const clearAllButton = document.querySelector("[data-clear-all]");
clearAllButton.addEventListener("click", handleClearAllClick);

const equalsButton = document.querySelector("[data-equals]");
equalsButton.addEventListener("click", handleEqualsClick);

let currentEquation = ""; // stores the current equation
let previousEquation = ""; // stores the previous equation

// Function handles button clicks
function handleNumberClick(event) {
const number = event.target.textContent;
updateCurrentEquation(number);
}


// Function handles decimal button click
function handleDecimalClick() {
updateCurrentEquation(".");
}

// Function to clear the last entry on current equation only
function handleClearClick() {
    if (typeof currentEquation === 'string' && currentEquation.length > 0) {
    currentEquation = currentEquation.slice(0, -1);
    updateCurrentDisplay();
    }
}

// Function clears all previous equations
function handleClearAllClick() {
clearAll();
}

// Function evaluates the current equation
function handleEqualsClick() {
evaluateEquation();
}

// Function updates the current equation display
function updateCurrentEquation(value) {
currentEquation += value;
updateCurrentDisplay();
}

// Function updates the display with the current equation
function updateCurrentDisplay() {
const currentEquationElement = document.getElementById("currentEquation");
currentEquationElement.textContent = currentEquation;
}

// Function calculates a percentage for the number
// Function handles the percentage button
// Function handles error display
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


// Function that clears all display entries
function clearAll() {
currentEquation = "";
previousEquation = "";
updateCurrentDisplay();
clearPreviousDisplay();
}

// Function clears the previous equation display
function clearPreviousDisplay() {
const previousEquationElement = document.getElementById("previousEquation");
previousEquationElement.textContent = "";
}

// Function evaluates the equation
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

// Function clears the current equation display
function clearCurrentDisplay() {
const currentEquationElement = document.getElementById("currentEquation");
currentEquationElement.textContent = "";
}






