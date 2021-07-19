const { expect, it } = require("@jest/globals");

const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByAge = (age) => {
  return new Promise((resolve, reject) => {
     const arrayFiltered = Animals.filter(animal => animal.age === age)
     if (arrayFiltered.length !== 0) return resolve(arrayFiltered[0])
     return reject('No animal with this id was found!')
   })
 };
 
 const getAnimal = (age) => {
   return findAnimalByAge(age)
 };

 // ---------------------

describe('Testing function findAnimalByAge', () => {
  it('should return an animal when searching by its id', async () => {
    const response = await getAnimal(1);
    expect(response).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
    expect(response.name).toBe('Dorminhoco')    
  })

  it('should return an error when age searched doesnt exist', async () => {
    try {
      await getAnimal(4);
    } catch (error) {
      expect(error).toBe('No animal with this id was found!')
    }
  })
})
 