let fetch = require('node-fetch')
const fetchDogs = require('./06-exercise');

jest.mock('node-fetch')

it('Mocking fetch and testing it', async () => {
  
  const data = {"status": "request success"}

  fetch.mockImplementation(() => Promise.resolve({
  json: () => Promise.resolve(data),
}));

  await fetchDogs()
  .then(data => expect(data.status).toEqual("request success"))

  fetch.mockRestore()
  fetch.mockImplementation(() => Promise.reject('request failed'))

  await fetchDogs()
  .catch(data => expect(data).toBe('request failed'))
})
