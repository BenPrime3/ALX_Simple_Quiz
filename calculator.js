function add(number1, number2) {
  return number1 + number2
};

function divide(number1, number2) {
  return number1 / number2
};

function subtract(number1, number2) {
  return number1 - number2
};

function multiply(number1, number2) {
  return number1 * number2
};

const addButton = document.getElementById('add');
const minusButton = document.getElementById('subtract');
const divideButton = document.getElementById('divide');
const multiplyButton = document.getElementById('multiply');


const displayResult = document.getElementById("calculation-result");

addButton.addEventListener('click', function () {
  const number1 = parseFloat(document.getElementById('number1').value) || 0;
  const number2 = parseFloat(document.getElementById('number2').value) || 0;
  result = add(number1, number2)
  
  displayResult.textContent = result;
});

minusButton.addEventListener('click', function () {
  const number1 = parseFloat(document.getElementById('number1').value) || 0;
  const number2 = parseFloat(document.getElementById('number2').value) || 0;
  result = subtract(number1, number2)

  displayResult.textContent = result;
});

multiplyButton.addEventListener('click', function () {
  const number1 = parseFloat(document.getElementById('number1').value) || 0;
  const number2 = parseFloat(document.getElementById('number2').value) || 0;
  result = multiply(number1, number2)

  displayResult.textContent = result;
})

divideButton.addEventListener('click', function () {
  const number1 = parseFloat(document.getElementById('number1').value) || 0;
  const number2 = parseFloat(document.getElementById('number2').value) || 0;
  result = divide(number1, number2)

  displayResult.textContent = result;
})