function start() {
  var buttonCalculateImc = document.querySelector('#button-calculate-imc');
  buttonCalculateImc.addEventListener('click', handleButtonClick);
}


function calculateImc(weight, height) {
  return weight / (height * height);
}

function handleButtonClick() {
  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');
  var imcResult = document.querySelector('#imc-result');

  var weightValue = Number(inputWeight.value);
  var heightValue = Number(inputHeight.value);

  var imc = calculateImc(weightValue, heightValue);

  imcResult.textContent = imc.toFixed(2).replace('.', ",");

  console.log(inputWeight.value);
  console.log(inputHeight.value);
  console.log(imc.toFixed(2));
}

start();
