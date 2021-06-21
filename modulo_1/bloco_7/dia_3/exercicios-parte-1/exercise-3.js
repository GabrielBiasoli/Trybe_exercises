const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui

// 1
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4])

// 2 
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4])

// 3
const arrayNumbers = [0, 1, 3, 4, 7];
myRemoveWithoutCopy(arrayNumbers, 0)
assert.notDeepStrictEqual(arrayNumbers, [0, 1, 3, 4, 7]);

// 4
assert.deepStrictEqual( myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4])