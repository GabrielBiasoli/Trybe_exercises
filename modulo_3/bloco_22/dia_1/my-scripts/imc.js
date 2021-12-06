const { questionInt, questionFloat } = require('readline-sync');

const weight = questionFloat('Qual seu peso?(Kg) ');
let height = questionInt('Qual sua altura(Cm)? ');
height = (height / 100);

const IMC = weight / Math.pow(height, 2);

const classification = (IMC) => {
  if (IMC < 18.5) return 'Abaixo do peso (magreza)'
  if (IMC >= 18.5 && IMC <= 24.9) return 'Peso normal'
  if (IMC >= 25 && IMC <= 29.9) return 'Acima do peso (sobrepeso)'
  if (IMC >= 30 && IMC <= 34.9) return 'Obesidade grau I'
  return IMC > 40 ? 'Obesidade grau III' : 'Obesidade grau II' 
}

console.log(`IMC: ${ IMC }
${ classification(IMC) }`
);
