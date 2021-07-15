const { expect } = require("@jest/globals");
const uppercase = require("./01-exercise")

describe('Tests if uppercase function works', () => {
  
  
  
  it('should return two even strings', (done) => {
    const phrase = 'Hello world!'
    const callback  = (string) => {
      expect(string).toBe('HELLO WORLD!')
      done()
    };
    
    uppercase(phrase, callback)
  }) 


    it('should return two diferent strings', (done) => {
      const phrase = 'Hello world!'
      const callback = string => {
        expect(string).not.toBe(phrase)
        done()
      }

      uppercase(phrase, callback)
    })
 
})