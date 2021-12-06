const { questionInt } = require('readline-sync');

const length = questionInt('Informe quantos números você quer exibir: ');

const arrayFibonacci = [ 0, 1 ]

for (let i = 1; i < length; i+= 1) {
  const newNumber = arrayFibonacci[i] + arrayFibonacci[i - 1] 
  arrayFibonacci.push(newNumber);
}
arrayFibonacci.shift();

const result = length > 0 ? `Os números são ${ arrayFibonacci.join(', ') }`
: 'Número inválido';
console.log( result )
