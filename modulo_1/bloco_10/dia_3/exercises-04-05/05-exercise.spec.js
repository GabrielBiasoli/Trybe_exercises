const { it } = require('@jest/globals')
const functions = require('./04-05-exercise')

it('Tests mocking "stringToUpperCase" function', () => {
  functions.stringToUpperCase = jest.fn()
  .mockImplementation((str) => str.toLowerCase());

  expect(functions.stringToUpperCase).toBeCalledTimes(0)
  functions.stringToUpperCase('Hello World!')
  expect(functions.stringToUpperCase).toHaveBeenCalled()
  expect(functions.stringToUpperCase).toBeCalledTimes(1)
  expect(functions.stringToUpperCase).toHaveBeenCalledWith('Hello World!')
  expect(functions.stringToUpperCase).toHaveReturnedWith('hello world!')

  functions.stringToUpperCase.mockRestore();
  expect(functions.stringToUpperCase).not.toBeCalled()
  expect(functions.stringToUpperCase).toBeCalledTimes(0)
  functions.stringToUpperCase('Hey')
  expect(functions.stringToUpperCase).toBeCalled()
  expect(functions.stringToUpperCase).toBeCalledTimes(1)
  expect(functions.stringToUpperCase).toHaveBeenCalledWith('Hey')
  expect(functions.stringToUpperCase).toHaveReturnedWith(undefined)

})