// variables to handle number and operator
let firstNumber = "";
let secondNumber = "";
let operator = "";
let isOperatorSet = false;

// Add Numbers in Input
function addNumber(number) {
  const input = document.getElementById("result");
  if (isOperatorSet) {
    secondNumber += number;
    input.value = firstNumber + " " + operator + " " + secondNumber;
  } else {
    firstNumber += number;
    input.value = firstNumber;
  }
}

function clearInput() {
  firstNumber = "";
  secondNumber = "";
  operator = "";
  isOperatorSet = false;
  const input = document.getElementById("result");
  input.value = "";
}

function clearLastCharacter() {
  const input = document.getElementById("result");
  input.value = input.value.slice(0, -1);

  if (isOperatorSet) {
    secondNumber = secondNumber.slice(0, -1);
  } else {
    firstNumber = firstNumber.slice(0, -1);
  }
}

function setOperator(op) {
  const input = document.getElementById("result");
  if (secondNumber !== "") {
    calculate();
  } else if (firstNumber !== "") {
    operator = op;
    isOperatorSet = true;

    input.value = firstNumber + " " + operator;
  }
  // else if (secondNumber !== '') {
  //     calculate()
  // }
}

function calculate() {
  const input = document.getElementById("result");
  let result = 0;

  const num1 = parseFloat(firstNumber);
  const num2 = parseFloat(secondNumber);

  if (operator == "+") {
    result = num1 + num2;
  } else if (operator == "-") {
    result = num1 - num2;
  } else if (operator == "*") {
    result = num1 * num2;
  } else if (operator == "/") {
    result = num1 / num2;
  }
  input.value = result;

  firstNumber = result.toString();
  secondNumber = "";
  operator = "";
  isOperatorSet = false;
}
