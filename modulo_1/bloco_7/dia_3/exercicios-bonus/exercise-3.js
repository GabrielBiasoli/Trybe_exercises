const assert = require('assert');
// escreva a função removeMiddle aqui

const removeMiddle = arrayWords => {
  const middleIndex = (arrayWords.length - 1) / 2;
  const output = [arrayWords[middleIndex]];
  arrayWords.splice(middleIndex, 1)
  return output;
}






const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepStrictEqual(output, expectedOutput);
assert.deepStrictEqual(words, expectedWords);