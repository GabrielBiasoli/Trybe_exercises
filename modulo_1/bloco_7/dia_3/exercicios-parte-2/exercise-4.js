const assert = require('assert');
// escreva a função findTheNeedle aqui

const findTheNeedle = (arrayWords, word) => {
  wordIndex = -1;
  for (const key in arrayWords) {
    arrayWords[key] === word ? wordIndex = key : wordIndex = wordIndex; 
  }
  return parseInt(wordIndex);
}

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected); 
