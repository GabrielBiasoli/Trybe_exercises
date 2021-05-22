let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {

  if (numbers[index] === numbers[numbers.length - 1]) {
    numbers[index] *= 2;
  } else {
    numbers[index] *= numbers[index + 1];
  }
}
console.log(numbers);