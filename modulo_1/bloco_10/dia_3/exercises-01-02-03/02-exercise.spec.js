let randomNumber = require('./01-02-03-exercise.js')

it('Mocking "randomNumbers" function to divide one element by another one', () => {
  randomNumber = jest.fn()
  .mockImplementation((x, y) => x / y)

  expect(randomNumber).toBeCalledTimes(0);
  randomNumber(6, 2);
  expect(randomNumber).toBeCalled();
  expect(randomNumber).toBeCalledTimes(1);
  expect(randomNumber).toBeCalledWith(6, 2)
  expect(randomNumber).toHaveReturnedWith(3);
})