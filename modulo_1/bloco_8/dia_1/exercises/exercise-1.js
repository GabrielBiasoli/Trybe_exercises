const newEmployee = (fullName) => {
  const Employee = {name: fullName};
  const email = `${fullName.replace(" ", "_")}@trybe.com`;
  Employee.email = email;
  return Employee;
}

const newEmployees = (func) => {
  const empoyees = {
    id1: func('Pedro Guerra'),
    id2: func('Luiza Drumond'),
    id3: func('Carla Paiva'),
  }
  return empoyees;
}

console.log(newEmployees(newEmployee));
