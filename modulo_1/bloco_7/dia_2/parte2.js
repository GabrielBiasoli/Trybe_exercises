const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//Ex 1
const firstFunction = (object, key, value) => {
  object[key] = value;
}
firstFunction(lesson2, 'turno', 'manhã');

//Ex 2
const secondFunction = object => {
 console.log(`${Object.keys(object)}`);
}
// secondFunction(lesson3);

//Ex 3
const thirdFunction = object => {
  const arrayKeys = Object.keys(object);
  console.log(`O objeto tem um tamanho de ${arrayKeys.length} chaves`);
}
// thirdFunction(lesson3);

//Ex 4
const fourthFunction = object => {
  console.log(`${Object.values(object)}`);
}
// fourthFunction(lesson3);

//Ex 5
const allLessons = {}
allLessons.lesson1 = Object.assign({}, lesson1);
allLessons.lesson2 = Object.assign({}, lesson2);
allLessons.lesson3 = Object.assign({}, lesson3);
// console.log(allLessons);

//Ex 6
const sixthFunction = (object) => {
  const lessons = Object.keys(object);
  for (const iterator of lessons) {
    console.log(`Número total de estudantes da ${iterator}é de ${object[iterator].numeroEstudantes} estudantes`);
  }
} 
sixthFunction(allLessons);

//Ex 7
const seventhFunction = (object, n) => {
  const values = Object.values(object)
  return console.log(values[n]);
}
seventhFunction(lesson1, 0);

//Ex 8
const eighth = (object, key, value) => {
  let result = false;
  Object.keys(object).includes(key) ? result = true : result = false;
  Object.values(object).includes(value) ? result = true : result = false;
  return console.log(result);
}
eighth(lesson2, 'turno', 'noite')