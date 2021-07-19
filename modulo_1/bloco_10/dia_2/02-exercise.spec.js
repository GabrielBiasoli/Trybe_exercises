const findUserById = require('./02-03-exercises')

describe('When id searched exists', () => {
  it('should return user name property with value', () => {
    expect.assertions(2)
    return findUserById(4).then(response => {
      expect(response).toEqual({name: 'Mark'});
      expect(response.name).toEqual('Mark')
    })
  })
})

describe('When id searched doesnt exist', () => {
  it('should return an error', () => {
    expect.assertions(2)
    return findUserById(6).catch(error => {
      expect(error).toEqual({ error: 'User with 6 not found.'})
      expect(error.error).toBe('User with 6 not found.')
    })
  })
})