const { questionInt } = require('readline-sync');

const number = questionInt('Informe um número: ');

let numberFactorial = number;

for (let i = number - 1; i >= 1; i-= 1) {
  numberFactorial*= i;
};

if (number > 0) {
  console.log(`Fatorial do número: ${ numberFactorial }`);
} else {
  console.log('Número inválido')
}
