// Define a class called 'Calculator' to encapsulate the calculator's functionality.
class Calculator {
    // Constructor method runs when a new calculator instance is created.
    constructor() {
        // Initialize the properties to store the equation, previous equation, and the result.
        this.currentEquation = ''; // The current equation being entered.
        this.previousEquation = ''; // The previous equation that was calculated.
        this.currentResult = '';   // The result of the current equation.

        // Set up click listeners for number buttons.
        const numberButtons = document.querySelectorAll('[data-number]');
        numberButtons.forEach((button) => {
            // When a number button is clicked, call the 'handleNumberClick' method.
            button.addEventListener('click', this.handleNumberClick.bind(this));
        });

        // Set up click listeners for operator buttons (+, -, *, /).
        const operatorButtons = document.querySelectorAll('[data-operator]');
        operatorButtons.forEach((button) => {
            // When an operator button is clicked, call the 'handleOperatorClick' method.
            button.addEventListener('click', this.handleOperatorClick.bind(this));
        });

        // Set up a click listener for the decimal button (.) for decimal points.
        const decimalButton = document.querySelector('[data-decimal]');
        decimalButton.addEventListener('click', this.handleDecimalClick.bind(this));

        // Set up a click listener for the clear button (C) to delete the last character.
        const clearButton = document.querySelector('[data-clear]');
        clearButton.addEventListener('click', this.handleClearClick.bind(this));

        // Set up a click listener for the clear all button (AC) to clear everything.
        const clearAllButton = document.querySelector('[data-clear-all]');
        clearAllButton.addEventListener('click', this.handleClearAllClick.bind(this));

        // Set up a click listener for the equals button (=) to calculate the result.
        const equalsButton = document.querySelector('[data-equals]');
        equalsButton.addEventListener('click', this.handleEqualsClick.bind(this));

        // Initialize the display with an empty equation.
        this.updateCurrentDisplay();
        // Clear the previous equation display.
        this.clearPreviousDisplay();
    }

    // Method to handle number button clicks.
    handleNumberClick(event) {
        const number = event.target.textContent;
        this.updateCurrentEquation(number);
    }

    // Method to handle operator button clicks (+, -, *, /).
    handleOperatorClick(event) {
        const operator = event.target.textContent;
        this.updateCurrentEquation(operator);
    }

    // Method to handle decimal point button click.
    handleDecimalClick() {
        this.updateCurrentEquation('.');
    }

    // Method to handle clear button (C) click to delete the last character.
    handleClearClick() {
        if (typeof this.currentEquation === 'string' && this.currentEquation.length > 0) {
            this.currentEquation = this.currentEquation.slice(0, -1);
            this.updateCurrentDisplay();
        }
    }

    // Method to handle clear all button (AC) click to clear everything.
    handleClearAllClick() {
        this.clearAll();
    }

    // Method to handle equals button (=) click to calculate the result.
    handleEqualsClick() {
        if (this.currentEquation) {
            if (this.currentResult === '') {
                this.currentResult = this.currentEquation;
            } else {
                this.currentResult = this.evaluateEquation(this.currentResult + this.currentEquation);
            }
            this.updatePreviousDisplay();
            this.currentEquation = ''; // Delete the last operation from the current equation.
            this.updateCurrentDisplay(this.currentResult);
        }
    }

    // Method to update the current equation with a new value (number, operator, or decimal point).
    updateCurrentEquation(value) {
        this.currentEquation += value;
        this.updateCurrentDisplay();
    }

    // Method to update the display with the current equation or a provided result.
    updateCurrentDisplay(result = '') {
        const currentEquationElement = document.getElementById('currentEquation');
        currentEquationElement.textContent = result || this.currentEquation;
    }

    // Method to clear all properties and update the display.
    clearAll() {
        this.currentEquation = '';
        this.previousEquation = '';
        this.updateCurrentDisplay();
        this.clearPreviousDisplay();
    }

    // Method to clear the previous equation display.
    clearPreviousDisplay() {
        const previousEquationElement = document.getElementById('previousEquation');
        previousEquationElement.textContent = '';
    }

    // Method to evaluate an equation and handle any errors.
    evaluateEquation(equation) {
        const previousEquationElement = document.getElementById('previousEquation');
        this.previousEquation = equation;
        previousEquationElement.textContent = equation;
        try {
            equation = eval(equation);
            this.updateCurrentDisplay(equation);
        } catch (error) {
            equation = 'Error';
            this.updateCurrentDisplay(equation);
        }
        return equation;
    }

    // Method to clear the current equation display.
    clearCurrentDisplay() {
        const currentEquationElement = document.getElementById('currentEquation');
        currentEquationElement.textContent = '';
    }

    // Method to update the previous equation display.
    updatePreviousDisplay() {
        const previousEquationElement = document.getElementById('previousEquation');
        previousEquationElement.textContent = this.currentResult !== ''
            ? this.currentResult + ' = ' + this.evaluateEquation(this.currentResult)
            : '';
    }
}

// Create a new instance of the Calculator class when the page loads.
const calculator = new Calculator();
