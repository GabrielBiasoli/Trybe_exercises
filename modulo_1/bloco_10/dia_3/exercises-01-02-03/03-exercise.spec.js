const { it, expect } = require('@jest/globals')
let randomNumber = require('./01-02-03-exercise.js')

it('Mocking "randomNumbers" function to multiply 3 numbers', () => {
  randomNumber = jest.fn()
  .mockImplementation((x, y, z) => x * y * z);

  expect(randomNumber).toBeCalledTimes(0)
  randomNumber(1, 3, 5)
  expect(randomNumber).toBeCalled()
  expect(randomNumber).toBeCalledTimes(1)
  expect(randomNumber).toBeCalledWith(1, 3, 5);
  expect(randomNumber).toHaveReturnedWith(15)


  randomNumber.mockReset()
  randomNumber.mockImplementation((x) => x * 2)

  expect(randomNumber).toBeCalledTimes(0)
  randomNumber(9)
  expect(randomNumber).toBeCalled()
  expect(randomNumber).toBeCalledTimes(1)
  expect(randomNumber).toBeCalledWith(9);
  expect(randomNumber).toHaveReturnedWith(18)
})