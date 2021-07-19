const assert = require('assert');

const myList = [1, 2, 3];

// escreva swap abaixo
const swap = (arrayNumbers) => {
  const [firstOne, middleOne, lastOne] = arrayNumbers;
  return [lastOne, middleOne, firstOne]
}
const swappedList = swap(myList);

assert.strictEqual(swappedList[0], 3);
assert.strictEqual(swappedList[1], 2);
assert.strictEqual(swappedList[2], 1);