const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

// Sem o método concat()
// function flatten() {
//   const newArray = [];
//   arrays.reduce((acc, array) => {
//     array.reduce((acc2, element) => {
//       newArray.push(element);
//     },0)
//   }, 0)
//   return newArray;
// };

// Com método concat()
const flatten = () => {
  return arrays.reduce((acc, curr) => acc.concat(curr))
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);