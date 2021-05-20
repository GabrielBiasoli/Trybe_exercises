let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let x = 0;

for (let firstIndex = 0; firstIndex < numbers.length; firstIndex += 1) {

  if (x < numbers[firstIndex]) {
    x = numbers[firstIndex];
  }
  for (let secondIndex = 0; secondIndex < numbers.length; secondIndex += 1) {

    if (x > numbers[secondIndex]) {
      x = numbers[secondIndex];
    }

  }
}

console.log("O menor número é:", x);