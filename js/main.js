// // Event listeners for button clicks
// const numberButtons = document.querySelectorAll("[data-number]");
// numberButtons.forEach((button) => {
//     button.addEventListener("click", handleNumberClick);
// });

// const operatorButtons = document.querySelectorAll("[data-operator]");
// operatorButtons.forEach((button) => {
//     button.addEventListener("click", handleOperatorClick);
// });

// const decimalButton = document.querySelector("[data-decimal]");
// decimalButton.addEventListener("click", handleDecimalClick);

// const clearButton = document.querySelector("[data-clear]");
// clearButton.addEventListener("click", handleClearClick);

// const clearAllButton = document.querySelector("[data-clear-all]");
// clearAllButton.addEventListener("click", handleClearAllClick);

// const equalsButton = document.querySelector("[data-equals]");
// equalsButton.addEventListener("click", handleEqualsClick);

// let currentEquation = ""; // stores the current equation
// let previousEquation = ""; // stores the previous equation
// let currentResult = "";



// function handleNumberClick(event) {
//     const number = event.target.textContent;
//     updateCurrentEquation(number);
// }

// function handleOperatorClick(event) {
//     const operator = event.target.textContent;
//     updateCurrentEquation(operator);
// }

// function handleDecimalClick() {
//     updateCurrentEquation(".");
// }

// function handleClearClick() {
//     if (typeof currentEquation === 'string' && currentEquation.length > 0) {
//         currentEquation = currentEquation.slice(0, -1);
//         updateCurrentDisplay();
//     }
// }

// function handleClearAllClick() {
//     clearAll();
// }

// function handleEqualsClick() {
//   if (currentEquation) {
//       if (currentResult === "") {
//           currentResult = currentEquation;
//       } else {
//           currentResult = evaluateEquation(currentResult + currentEquation);
//       }
//       updatePreviousDisplay();
//       currentEquation = ""; // Clear the current equation for the next input
//       updateCurrentDisplay(currentResult);
//   }
// }


// function updateCurrentEquation(value) {
//     currentEquation += value;
//     updateCurrentDisplay();
// }

// function updateCurrentDisplay() {
//     const currentEquationElement = document.getElementById("currentEquation");
//     currentEquationElement.textContent = currentEquation;
// }

// function clearAll() {
//     currentEquation = "";
//     previousEquation = "";
//     updateCurrentDisplay();
//     clearPreviousDisplay();
// }

// function clearPreviousDisplay() {
//     const previousEquationElement = document.getElementById("previousEquation");
//     previousEquationElement.textContent = "";
// }

// function evaluateEquation() {
//     const previousEquationElement = document.getElementById("previousEquation");
//     previousEquation = currentEquation;
//     previousEquationElement.textContent = currentEquation;
//     try {
//         currentEquation = eval(currentEquation);
//         updateCurrentDisplay();
//     } catch (error) {
//         currentEquation = "Error";
//         updateCurrentDisplay();
//     }
// }

// function clearCurrentDisplay() {
//     const currentEquationElement = document.getElementById("currentEquation");
//     currentEquationElement.textContent = "";
// }

// function handleEqualsClick() {
//   evaluateEquation();
//   currentEquation = ""; // Clear the current equation
// }

// function updatePreviousDisplay() {
//   const previousEquationElement = document.getElementById("previousEquation");
//   previousEquationElement.textContent = currentResult !== "" ? currentResult + " = " + evaluateEquation(currentResult) : "";
// }

// I tried to encapsulate this

class Calculator {
    constructor() {
      this.currentEquation = '';
      this.previousEquation = '';
      this.currentResult = '';
  
      // click listeners
      const numberButtons = document.querySelectorAll('[data-number]');
      numberButtons.forEach((button) => {
        button.addEventListener('click', this.handleNumberClick.bind(this));
      });
  
      const operatorButtons = document.querySelectorAll('[data-operator]');
      operatorButtons.forEach((button) => {
        button.addEventListener('click', this.handleOperatorClick.bind(this));
      });
  
      const decimalButton = document.querySelector('[data-decimal]');
      decimalButton.addEventListener('click', this.handleDecimalClick.bind(this));
  
      const clearButton = document.querySelector('[data-clear]');
      clearButton.addEventListener('click', this.handleClearClick.bind(this));
  
      const clearAllButton = document.querySelector('[data-clear-all]');
      clearAllButton.addEventListener('click', this.handleClearAllClick.bind(this));
  
      const equalsButton = document.querySelector('[data-equals]');
      equalsButton.addEventListener('click', this.handleEqualsClick.bind(this));
  
      this.updateCurrentDisplay();
      this.clearPreviousDisplay();
    }
  
    handleNumberClick(event) {
      const number = event.target.textContent;
      this.updateCurrentEquation(number);
    }
  
    handleOperatorClick(event) {
      const operator = event.target.textContent;
      this.updateCurrentEquation(operator);
    }
  
    handleDecimalClick() {
      this.updateCurrentEquation('.');
    }
  
    handleClearClick() {
      if (typeof this.currentEquation === 'string' && this.currentEquation.length > 0) {
        this.currentEquation = this.currentEquation.slice(0, -1);
        this.updateCurrentDisplay();
      }
    }
  
    handleClearAllClick() {
      this.clearAll();
    }
  
    handleEqualsClick() {
      if (this.currentEquation) {
        if (this.currentResult === '') {
          this.currentResult = this.currentEquation;
        } else {
          this.currentResult = this.evaluateEquation(this.currentResult + this.currentEquation);
        }
        this.updatePreviousDisplay();
        this.currentEquation = ''; // Clear the current equation for the next input
        this.updateCurrentDisplay(this.currentResult);
      }
    }
  
    updateCurrentEquation(value) {
      this.currentEquation += value;
      this.updateCurrentDisplay();
    }
  
    updateCurrentDisplay(result = '') {
      const currentEquationElement = document.getElementById('currentEquation');
      currentEquationElement.textContent = result || this.currentEquation;
    }
  
    clearAll() {
      this.currentEquation = '';
      this.previousEquation = '';
      this.updateCurrentDisplay();
      this.clearPreviousDisplay();
    }
  
    clearPreviousDisplay() {
      const previousEquationElement = document.getElementById('previousEquation');
      previousEquationElement.textContent = '';
    }
  
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
  
    clearCurrentDisplay() {
      const currentEquationElement = document.getElementById('currentEquation');
      currentEquationElement.textContent = '';
    }
  
    updatePreviousDisplay() {
      const previousEquationElement = document.getElementById('previousEquation');
      previousEquationElement.textContent = this.currentResult !== ''
        ? this.currentResult + ' = ' + this.evaluateEquation(this.currentResult)
        : '';
    }
  }
  
  // Create an instance of the calculator class
  const calculator = new Calculator();
  
