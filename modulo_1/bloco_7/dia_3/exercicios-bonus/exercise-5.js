const assert = require('assert');

const Verify = password => {
  let result = true;
  password === null && result === true ? result = false : result = true;
  password === password.toLowerCase() || password === password.toUpperCase() && result === true ? result = false : result = true;
  password.length < 8 && result === true ? result = false : result = true;
  let countNumbers = 0;
  arrayNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  for (let i = 0; i < password.length; i += 1) {
    for (const iterator of arrayNumbers) {
      password[i] === iterator ? countNumbers += 1 : countNumbers = countNumbers;
    }
  }
  countNumbers > 0 && result === true ? result = true : result = false;
  return result
}
console.log(Verify('casralh4O'));

const out = Verify('1234Biasoli');
const expectedOutput = true
assert.strictEqual(out, expectedOutput);