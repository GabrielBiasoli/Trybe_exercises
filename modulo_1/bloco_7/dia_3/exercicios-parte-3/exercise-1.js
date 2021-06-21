const assert = require('assert');

const greetPeople = (people) => {
  const peopleGreeted = [];
  for (const person in people) {
    let greeting = 'Hello ';
    greeting += people[person];
    peopleGreeted.push(greeting);
  }
  return peopleGreeted;
};

let parameter = ['Irina', 'Ashleigh', 'Elsa'];
let result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
assert.deepStrictEqual(greetPeople(parameter), result);

parameter = ['Jinn', 'Cael', 'Jade'];
result = ['Hello Cael', 'Hello Jinn', 'Hello Jade'];
assert.notDeepStrictEqual(greetPeople(parameter), result);