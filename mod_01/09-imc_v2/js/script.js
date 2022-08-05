function start() {
  var buttonCalculateImc = document.querySelector('#button-calculate-imc');
  buttonCalculateImc.addEventListener('click', handleButtonClick);
}


function calculateImc(weight, height) {
  imc =  weight / (height * height);
  return imc;
}

function handleButtonClick() {
  var inputWeight = document.querySelector('#input-weight').value;
  var inputHeight = document.querySelector('#input-height').value;
  var imcNumberResult = document.querySelector('#imc-number-result');
  

  var weightValue = Number(inputWeight);
  var heightValue = Number(inputHeight);

  var imc = calculateImc(weightValue, heightValue).toFixed(2);
  imcNumberResult.textContent = imc.replace('.', ",");
  imcNumberResult.style.cssText =
  'color: darkslateblue;' + 'font-weight: bold;' + 'text-decoration: none';
  
  verifyImc(imc);
}  

function verifyImc(imc) {
  var imcDescriptionResult = document.querySelector('#imc-description-result');

  if (imc < 16) {
    resultado ='Valores inválidos!';
  } else if (imc >= 16 && imc <= 16.9) {
    resultado ='Muito abaixo do peso';
  } else if (imc >= 17 && imc <= 18.4) {
    resultado ='Abaixo do peso';
  } else if (imc >= 18.5 && imc <= 24.9) {
    resultado ='Peso normal';
  } else if (imc >= 25 && imc <= 29.9) {
    resultado ='Acima do peso';
  } else if (imc >= 30 && imc <= 34.9) {
    resultado ='Obesidade grau I';
  } else if (imc >= 35 && imc < 40) {
    resultado ='Obesidade grau II';
  } else {
    resultado = 'Obesidade grau III';
  }

  imcDescriptionResult.textContent = resultado;

  imcDescriptionResult.style.cssText =
  'color: darkslateblue;' + 'font-weight: bold;' + 'text-decoration: none';
}

start();
