const { expect } = require('@jest/globals')
const findUserById = require('./02-03-exercises')

describe('When id searched exists', () => {
  it('should return user name property with value', async () => {
    const response = await findUserById(4)
      expect(response).toEqual({name: 'Mark'});
      expect(response.name).toEqual('Mark')
  })
})

describe('When id searched doesnt exist', () => {
  it('should return an error', async () => {
    try {
      await findUserById(6)
    } catch (error) {
      expect(error).toEqual({ error: 'User with 6 not found.'})
      expect(error.error).toBe('User with 6 not found.')
    }
  })
})