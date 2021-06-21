const assert = require('assert');
// escreva a função sumAllNumbers aqu
const sumAllNumbers = numbers => {
  let numbersSummed= 0
  for (const iterator of numbers) {
    numbersSummed += iterator;
  }
  return numbersSummed
}  

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);
