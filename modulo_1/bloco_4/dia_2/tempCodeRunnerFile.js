let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let x = 0;

for (let indexFirst = 0; indexFirst < numbers.length; indexFirst += 1) {

  if (x < numbers[indexFirst]) {
    x = numbers[indexFirst];
  }
  for (let indexSecond = 0; indexSecond < numbers.length; indexSecond += 1) {

    if (x > numbers[indexSecond]) {
      x = numbers[indexSecond];
    }

  }
}

console.log("O menor número é:", x);