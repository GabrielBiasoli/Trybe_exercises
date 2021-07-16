const functions = require('./04-05-exercise')
jest.mock('./04-05-exercise')

it('Test mocking imported functions', () => {
  
  functions.stringToUpperCase
  .mockImplementation((str) => str.toLowerCase());

  expect(functions.stringToUpperCase).toBeCalledTimes(0)
  functions.stringToUpperCase('Hello World!')
  expect(functions.stringToUpperCase).toBeCalled()
  expect(functions.stringToUpperCase).toBeCalledTimes(1);
  expect(functions.stringToUpperCase).toHaveBeenCalledWith('Hello World!')
  expect(functions.stringToUpperCase).toHaveReturnedWith('hello world!')

  
  functions.firstLetterOf
  .mockImplementation((str) => str[str.length - 1])

  expect(functions.firstLetterOf).toBeCalledTimes(0);
  functions.firstLetterOf('Hey')
  expect(functions.firstLetterOf).toBeCalled();
  expect(functions.firstLetterOf).toBeCalledTimes(1);
  expect(functions.firstLetterOf).toBeCalledWith('Hey');
  expect(functions.firstLetterOf).toHaveReturnedWith('y');


  functions.concatTwoStrings
  .mockImplementation((str1, str2, str3) => str1 + str2 + str3)

  expect(functions.concatTwoStrings).toBeCalledTimes(0);
  functions.concatTwoStrings('Hello', 'World', '!')
  expect(functions.concatTwoStrings).toBeCalled();
  expect(functions.concatTwoStrings).toBeCalledTimes(1);
  expect(functions.concatTwoStrings).toBeCalledWith('Hello', 'World', '!');
  expect(functions.concatTwoStrings).toHaveReturnedWith('HelloWorld!');
})