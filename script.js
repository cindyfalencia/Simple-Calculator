let result = document.getElementById('result');
let input = '';

function addToResult(value) {
  input += value;
  result.value = input;
}

function calculate() {
  result.value = eval(input);
}

function clearResult() {
  input = '';
  result.value = '';
}
