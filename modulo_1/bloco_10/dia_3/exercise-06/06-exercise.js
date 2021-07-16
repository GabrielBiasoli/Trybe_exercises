const fetch = require('node-fetch')

const fetchDogs = () => 
fetch('https://dog.ceo/api/breeds/image/random')
.then(response => response.json())


const teste = async() => {
  console.log(await fetchDogs());
}

module.exports = fetchDogs