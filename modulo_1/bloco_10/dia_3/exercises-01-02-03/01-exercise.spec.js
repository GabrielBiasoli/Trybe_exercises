let randomNumber = require('./01-02-03-exercise');


it('Mocking "randomNumber" function to always return 10', () => {
  randomNumber = jest.fn()
  .mockReturnValue(10)

  expect(randomNumber).toBeCalledTimes(0);
  randomNumber()
  expect(randomNumber).toBeCalled()  
  expect(randomNumber).toBeCalledTimes(1);
  expect(randomNumber).toHaveReturnedWith(10);
  expect(randomNumber()).toBe(10);
  expect(randomNumber).toBeCalledTimes(2)
})