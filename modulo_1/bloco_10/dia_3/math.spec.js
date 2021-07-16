const { directiveLiteral } = require('@babel/types');
const { it, expect } = require('@jest/globals');
const math = require('./math');

describe('Exercises "Para fixar"', () => {
  let mockSubtract = jest.spyOn(math, "subtrair");
  
  it('01 - Tests if "subtrair" function works', () => {
    mockSubtract();
    expect(mockSubtract).toBeCalled();
    mockSubtract(1, 2);
    expect(mockSubtract).toHaveBeenLastCalledWith(1,2);
    expect(mockSubtract).toHaveBeenCalledTimes(2);
  })

  
  it('02 - Tests if "multiplicar" function works', () => {
    math.multiplicar = jest.fn()
    .mockReturnValue(10)

    expect(math.multiplicar).toBeCalledTimes(0);
    math.multiplicar();
    expect(math.multiplicar).toBeCalled();
    expect(math.multiplicar()).toBe(10);
    expect(math.multiplicar).toBeCalledTimes(2)
  })

  it('03 - Tests if "somar" function works', () => {
    math.somar = jest.fn()
    .mockImplementation((x, y) => x + y)

    expect(math.somar).toBeCalledTimes(0);
    math.somar(2, 3)
    expect(math.somar).toBeCalled();
    expect(math.somar).toBeCalledWith(2, 3);
    expect(math.somar).toHaveReturnedWith(5);
    expect(math.somar).toBeCalledTimes(1);
    expect(math.somar(20, 30)).toBe(50)
    expect(math.somar).toBeCalledTimes(2);
  })


  it('04 - Tests if "dividir" function works', () => {
    math.dividir = jest.fn()
    .mockReturnValue(15)
    
    expect(math.dividir).toBeCalledTimes(0);
    math.dividir(2, 5)
    expect(math.dividir).toBeCalled();
    expect(math.dividir).toBeCalledWith(2, 5);
    expect(math.dividir).toBeCalledTimes(1);
    expect(math.dividir).toHaveReturnedWith(15);
    
    math.dividir(2, 5)
    expect(math.dividir).toBeCalledTimes(2);
    expect(math.dividir).toHaveReturnedWith(15);
    expect(math.dividir).toBeCalledWith(2, 5)
  })

  it('05 - Tests restore of "subtrair" function', () => {
    mockSubtract.mockClear()
    mockSubtract.mockReturnValue(20);
    
    expect(mockSubtract).toBeCalledTimes(0)
    mockSubtract()
    expect(mockSubtract).toBeCalled();
    expect(mockSubtract).toBeCalledTimes(1)
    expect(mockSubtract).toHaveReturnedWith(20);
    
    mockSubtract.mockRestore();
    mockSubtract = jest.spyOn(math, 'subtrair')
    expect(mockSubtract).toBeCalledTimes(0);
    mockSubtract(4, 1)
    expect(mockSubtract).toBeCalled();
    expect(mockSubtract).toBeCalledTimes(1);
    expect(mockSubtract).toBeCalledWith(4, 1)
    expect(mockSubtract).toHaveReturnedWith(3)
  })
})


